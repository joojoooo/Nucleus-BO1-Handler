[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$GameRoot,
    [string]$NucleusRoot = (Join-Path $PSScriptRoot '..\..\..'),
    [ValidateSet('Zombies','Multiplayer')][string]$Mode = 'Zombies',
    [ValidateSet('Dual','Mixed')][string]$Layout = 'Dual',
    [ValidateSet('Startup','Bootstrapper','Menu','HoldX','Audio','Manual')][string]$Check = 'Startup',
    [ValidateSet('First','All')][string]$Audio = 'First',
    [ValidatePattern('^\d+,\d+$')][string]$ControllerSlots,
    [string]$RetainedRun,
    [string]$Python = 'python',
    [ValidateRange(0,120)][int]$GrabDelay = 0,
    [ValidateRange(20,600)][int]$StartupTimeout = 120,
    [switch]$BuildOnly
)

$ErrorActionPreference = 'Stop'
$game = (Resolve-Path -LiteralPath $GameRoot).Path
$install = (Resolve-Path -LiteralPath $NucleusRoot).Path
$repo = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\..')).Path
$handler = 'Call of Duty Black Ops'
$bootstrapper = 'plutonium-bootstrapper-win32.exe'
$runtimePath = 'Plutonium\bin\' + $bootstrapper

if ($Check -in 'HoldX','Audio' -and $Mode -ne 'Zombies') {
    throw "The $Check probe loads a Zombies map. Use -Mode Zombies."
}
if ($ControllerSlots -and $Check -in 'Menu','HoldX') {
    throw "The $Check probe requires virtual controllers. Omit -ControllerSlots."
}
if ($RetainedRun -and $Check -eq 'Bootstrapper') {
    throw 'Use the Startup check to test retained-file migration through Nucleus.'
}
if (!$BuildOnly -and (Get-CimInstance Win32_Process -Filter "Name='$bootstrapper'")) {
    throw 'Close the running Plutonium games before starting the fixture.'
}

$run = Join-Path (Join-Path $env:TEMP 'nucleus-t5-tests') ([Guid]::NewGuid().ToString('N'))
$fixture = Join-Path $run 'nucleus'
$profileRoot = Join-Path $fixture "content\$handler"
$autoIt = Join-Path $fixture "handlers\$handler\AutoIt3.exe"
$padControl = Join-Path $run 'pad-command.txt'
$padStatus = Join-Path $run 'pad-status.txt'
$focusControl = Join-Path $run 'focus-control.txt'

New-Item -ItemType Directory -Path "$fixture\handlers","$fixture\utils\backup",$profileRoot -Force | Out-Null
Set-Content -LiteralPath "$run\t5-fixture" -Value 'T5 integration test' -Encoding Ascii
Write-Host "Test files at $run"

Get-ChildItem -LiteralPath $install -File | Where-Object Extension -in '.exe','.dll','.config' |
    Copy-Item -Destination $fixture
Copy-Item -LiteralPath (Join-Path $install 'Settings.ini') -Destination $fixture
foreach ($folder in 'gui','x86','x64','webview') {
    $source = Join-Path $install $folder
    if (Test-Path -LiteralPath $source) { Copy-Item -LiteralPath $source -Destination $fixture -Recurse }
}
Get-ChildItem -LiteralPath (Join-Path $install 'utils') | Where-Object Name -ne 'backup' |
    Copy-Item -Destination "$fixture\utils" -Recurse
Copy-Item -LiteralPath "$repo\$handler.js","$repo\$handler" -Destination "$fixture\handlers" -Recurse
Copy-Item -LiteralPath "$fixture\NucleusCoop.exe.config" -Destination "$fixture\T5Integration.exe.config"

if ($RetainedRun) {
    $retained = (Resolve-Path -LiteralPath $RetainedRun).Path
    if (!(Test-Path -LiteralPath "$retained\t5-fixture" -PathType Leaf)) {
        throw 'RetainedRun must point to a previous fixture made by this script.'
    }
}
foreach ($player in 0,1) {
    $instance = Join-Path $profileRoot "Instance$player"
    New-Item -ItemType Directory -Path $instance | Out-Null
    foreach ($folder in 'main','zone') {
        $target = (Resolve-Path -LiteralPath (Join-Path $game $folder)).Path
        New-Item -ItemType Junction -Path (Join-Path $instance $folder) -Target $target | Out-Null
    }
    foreach ($file in 'BlackOps.exe','BlackOpsMP.exe','binkw32.dll','steam_api.dll','localization.txt') {
        Copy-Item -LiteralPath (Join-Path $game $file) -Destination $instance
    }
    $oldRuntime = if ($RetainedRun) { Join-Path $retained "nucleus\content\$handler\Instance$player\Plutonium" }
    if ($oldRuntime -and (Test-Path -LiteralPath $oldRuntime)) {
        Copy-Item -LiteralPath $oldRuntime -Destination $instance -Recurse
    }
}

$framework = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319'
$compiler = Join-Path $framework 'csc.exe'
$references = @(
    'System.Drawing.dll', 'System.Windows.Forms.dll', 'System.Xaml.dll'
    "$framework\WPF\WindowsBase.dll", "$framework\WPF\PresentationCore.dll", "$framework\WPF\PresentationFramework.dll"
    "$fixture\Nucleus.Gaming.dll", "$fixture\Newtonsoft.Json.dll", "$fixture\WindowScrape.dll"
) | ForEach-Object { "/reference:$_" }
& $compiler /nologo /target:exe "/out:$fixture\T5Integration.exe" @references "$PSScriptRoot\T5Integration.cs"
if ($LASTEXITCODE) { throw 'Nucleus fixture compilation failed.' }
& $compiler /nologo /platform:x86 "/out:$fixture\XInputProbe.exe" "$PSScriptRoot\XInputProbe.cs"
if ($LASTEXITCODE) { throw 'XInput probe compilation failed.' }
if ($BuildOnly) { return }

. "$PSScriptRoot\Test-T5Probes.ps1"
$padProcess = $null
$integration = $null
$originalAudio = $env:T5_FIXTURE_AUDIO
try {
    if ($Check -eq 'Bootstrapper') {
        Test-Bootstrapper
        Write-Host "Finished Bootstrapper. Evidence is in $run"
        return
    }

    if (!$ControllerSlots) {
        $pythonExe = (Get-Command -Name $Python -CommandType Application | Select-Object -First 1).Source
        $padProcess = Start-Process -FilePath $pythonExe -WindowStyle Hidden -PassThru `
            -ArgumentList ('"{0}" "{1}"' -f "$PSScriptRoot\virtual-pads.py",$run) `
            -RedirectStandardOutput "$run\pads.out.log" -RedirectStandardError "$run\pads.err.log"
        Wait-ForFixture 'virtual controllers' 15 {
            if ($padProcess.HasExited) { throw (Get-Content -LiteralPath "$run\pads.err.log" -Raw) }
            (Get-Content -LiteralPath $padStatus -Raw -ErrorAction SilentlyContinue) -eq 'ready'
        }
        $slots = foreach ($pad in 0,1) {
            $label = Send-PadReport $pad BACK 1.8
            Wait-PadReport $label down
            $marked = & "$fixture\XInputProbe.exe" | Where-Object { $_ -match '^\d+ 0020 ' }
            if (@($marked).Count -ne 1) { throw "Could not identify virtual pad $pad in OpenXInput." }
            ($marked -split ' ')[0]
            Wait-PadReport $label up
        }
        $ControllerSlots = $slots -join ','
    }

    $env:T5_FIXTURE_AUDIO = if ($Audio -eq 'First') { 'Yes' } else { 'No' }
    $integration = Start-Process -FilePath "$fixture\T5Integration.exe" -WorkingDirectory $fixture `
        -ArgumentList ('{0} "{1}" {2} {3} {4}' -f $Mode,"$game\BlackOps.exe",$Layout,$ControllerSlots,$GrabDelay) `
        -WindowStyle Hidden -PassThru -RedirectStandardOutput "$run\fixture.out.log" -RedirectStandardError "$run\fixture.err.log"
    $startedGames = @{}
    Wait-ForFixture 'both game windows' $StartupTimeout {
        foreach ($process in @(Get-FixtureGames)) {
            $path = $process.ExecutablePath
            if ($startedGames.ContainsKey($path) -and $startedGames[$path] -ne $process.ProcessId) {
                throw "The bootstrapper launched more than once from $path."
            }
            $startedGames[$path] = $process.ProcessId
        }
        if ($integration.HasExited) {
            throw "Fixture exited early with code $($integration.ExitCode). See $run\fixture.out.log and $run\fixture.err.log."
        }
        @(Get-Content -LiteralPath "$run\game-pids.txt" -ErrorAction SilentlyContinue).Count -eq 2
    }
    $gameIds = @(Get-Content -LiteralPath "$run\game-pids.txt" | ForEach-Object { [int]$_ })
    Assert-RunningGames
    switch ($Check) {
        'Startup' { Start-Sleep -Seconds 10 }
        'Menu' { Test-MenuInput }
        'HoldX' { Test-HeldX }
        'Audio' { Test-InstanceAudio }
        'Manual' {
            Write-Host "The games are ready. Write quit to $focusControl to stop the run."
            while (!$integration.WaitForExit(500)) { Assert-RunningGames }
        }
    }
    Assert-RunningGames
    Write-Host "Finished $Check. Evidence is in $run"
}
finally {
    if ($padProcess -and !$padProcess.HasExited) {
        Set-Content -LiteralPath $padControl -Value 'quit' -Encoding Ascii
        if (!$padProcess.WaitForExit(5000)) { $padProcess.Kill() }
    }
    if ($integration -and !$integration.HasExited) {
        Set-Content -LiteralPath $focusControl -Value 'quit' -Encoding Ascii
        if (!$integration.WaitForExit(2500)) { $integration.Kill() }
    }
    Get-CimInstance Win32_Process | Where-Object {
        $_.ExecutablePath -and $_.ExecutablePath.StartsWith("$fixture\",[StringComparison]::OrdinalIgnoreCase)
    } | ForEach-Object {
        $process = Get-Process -Id $_.ProcessId -ErrorAction SilentlyContinue
        if ($process) {
            $process | Stop-Process -ErrorAction SilentlyContinue
            [void]$process.WaitForExit(2500)
        }
    }
    $compatibility = 'HKCU:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers'
    $key = Get-Item -LiteralPath $compatibility -ErrorAction SilentlyContinue
    if ($key) {
        $key.GetValueNames() | Where-Object { $_.StartsWith("$fixture\",[StringComparison]::OrdinalIgnoreCase) } |
            ForEach-Object { Remove-ItemProperty -LiteralPath $compatibility -Name $_ -ErrorAction SilentlyContinue }
    }
    $env:T5_FIXTURE_AUDIO = $originalAudio
}
