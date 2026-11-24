# Desktop and controller probes sourced by Test-T5.ps1.

function Wait-ForFixture($Description, $Seconds, [scriptblock]$Condition) {
    $deadline = [DateTime]::UtcNow.AddSeconds($Seconds)
    do {
        if (& $Condition) { return }
        Start-Sleep -Milliseconds 120
    } while ([DateTime]::UtcNow -lt $deadline)
    throw "Timed out waiting for $Description. See $run."
}

function Get-FixtureGames {
    $expected = 0,1 | ForEach-Object { Join-Path $profileRoot "Instance$_\$runtimePath" }
    Get-CimInstance Win32_Process -Filter "Name='$bootstrapper'" |
        Where-Object { $_.ExecutablePath -in $expected }
}

function Assert-RunningGames {
    $processes = @(Get-FixtureGames)
    if ($processes.Count -ne 2 -or @($processes | Where-Object ProcessId -notin $gameIds).Count) {
        throw "Expected the same two test processes to stay alive. See $run."
    }
    foreach ($id in $gameIds) {
        $process = Get-Process -Id $id
        if (!$process.MainWindowHandle -or !$process.Responding) {
            throw "Game $id has no responsive main window. See $run."
        }
    }
}

function Test-Bootstrapper {
    $instance = Join-Path $profileRoot 'Instance0'
    $bundle = Join-Path $fixture "handlers\$handler"
    $plutonium = Join-Path $instance 'Plutonium'
    $players = Join-Path $plutonium 'storage\t5\players'
    Copy-Item -LiteralPath "$bundle\Plutonium" -Destination $instance -Recurse
    New-Item -ItemType Directory -Path $players -Force | Out-Null
    Copy-Item -LiteralPath "$bundle\game-config-defaults\config.cfg","$bundle\game-config-defaults\config_mp.cfg" -Destination $players

    $program = New-Object Diagnostics.ProcessStartInfo
    $program.FileName = Join-Path $instance $runtimePath
    $program.WorkingDirectory = $plutonium
    $program.UseShellExecute = $false
    $program.CreateNoWindow = $true
    $program.RedirectStandardOutput = $true
    $program.RedirectStandardError = $true
    $target = if ($Mode -eq 'Zombies') { 't5sp' } else { 't5mp' }
    $program.Arguments = '{0} "{1}" -name "T5BootstrapperTest" -nocurses -lan -offline +set r_fullscreen 0 +set r_noborder 1' -f $target,$instance
    $sandbox = Join-Path $run 'profile'
    $program.EnvironmentVariables['USERPROFILE'] = $sandbox
    $program.EnvironmentVariables['APPDATA'] = Join-Path $sandbox 'AppData\Roaming'
    $program.EnvironmentVariables['LOCALAPPDATA'] = Join-Path $sandbox 'AppData\Local'
    New-Item -ItemType Directory -Force -Path $program.EnvironmentVariables['APPDATA'],$program.EnvironmentVariables['LOCALAPPDATA'] | Out-Null

    $process = [Diagnostics.Process]::Start($program)
    $output = $process.StandardOutput.ReadToEndAsync()
    $errors = $process.StandardError.ReadToEndAsync()
    try {
        Wait-ForFixture 'the standalone T5 window' $StartupTimeout {
            $process.Refresh()
            if ($process.HasExited) { throw "Bootstrapper exited with code $($process.ExitCode)." }
            $process.MainWindowTitle -like 'Plutonium T5*' -and $process.Responding
        }
        Start-Sleep -Seconds 10
        $process.Refresh()
        if ($process.HasExited -or !$process.Responding) { throw 'Bootstrapper stopped responding after setup.' }
        Write-Host $process.MainWindowTitle
    } finally {
        if (!$process.HasExited) { $process.Kill() }
        if ($process.WaitForExit(2500) -and $output.Wait(2000) -and $errors.Wait(2000)) {
            [IO.File]::WriteAllText("$run\bootstrapper.out.log",$output.GetAwaiter().GetResult())
            [IO.File]::WriteAllText("$run\bootstrapper.err.log",$errors.GetAwaiter().GetResult())
        }
        $process.Dispose()
    }
}

function Send-PadReport($Players, $Button, [double]$Seconds) {
    $label = [Guid]::NewGuid().ToString('N')
    $duration = $Seconds.ToString([Globalization.CultureInfo]::InvariantCulture)
    Set-Content -LiteralPath $padControl -Value "$label $Players $Button $duration" -Encoding Ascii
    $label
}

function Wait-PadReport($Label, $State) {
    Wait-ForFixture "controller report $State" 6 {
        (Get-Content -LiteralPath $padStatus -Raw -ErrorAction SilentlyContinue) -eq "$Label $State"
    }
}

function Invoke-DesktopProbe($Action, $Id, [string[]]$Arguments, [switch]$Async) {
    $params = '/ErrorStdOut "{0}" {1} {2}' -f "$PSScriptRoot\probes\game-window-probe.au3",$Action,$Id
    foreach ($argument in $Arguments) { $params += ' "' + $argument + '"' }
    $probe = Start-Process -FilePath $autoIt -ArgumentList $params -WindowStyle Hidden -PassThru
    if ($Async) { return $probe }
    $probe.WaitForExit()
    if ($probe.ExitCode) { throw "$Action probe for PID $Id returned $($probe.ExitCode)." }
}

function Send-GameCommands($Player, [string[]]$Commands) {
    $alias = if ($Player -eq 0) { 'HOST' } else { 'P2' }
    $file = Join-Path $run "commands-$alias.txt"
    Set-Content -LiteralPath $file -Value $Commands -Encoding Ascii
    Invoke-DesktopProbe console $gameIds[$Player] @($alias,$file)
}

function Get-GameView {
    Add-Type -AssemblyName System.Windows.Forms, System.Drawing
    $bounds = [Windows.Forms.Screen]::PrimaryScreen.Bounds
    $image = New-Object Drawing.Bitmap $bounds.Width,$bounds.Height
    $graphics = [Drawing.Graphics]::FromImage($image)
    try {
        $graphics.CopyFromScreen($bounds.X,$bounds.Y,0,0,$image.Size)
        New-Object Drawing.Bitmap $image,(New-Object Drawing.Size 850,480)
    } finally {
        $graphics.Dispose()
        $image.Dispose()
    }
}

function Save-GameView($Name) {
    $image = Get-GameView
    try {
        $image.Save((Join-Path $run "$Name.png"),[Drawing.Imaging.ImageFormat]::Png)
    } finally {
        $image.Dispose()
    }
}

function Test-MenuInput {
    Save-GameView 'menu-before'
    $firstPad = if ($Layout -eq 'Mixed') { 1 } else { 0 }
    foreach ($pad in $firstPad..1) {
        $label = Send-PadReport $pad DPAD_DOWN 0.45
        Wait-PadReport $label up
        Start-Sleep -Milliseconds 650
        Save-GameView "menu-pad-$pad"
    }
    if ($Layout -eq 'Mixed') {
        $bounds = [Windows.Forms.Screen]::PrimaryScreen.Bounds
        Invoke-DesktopProbe click $gameIds[0] @(
            ($bounds.X + [int]($bounds.Width * 0.5)),
            ($bounds.Y + [int]($bounds.Height * 0.36))
        )
        Start-Sleep -Milliseconds 650
        Save-GameView 'menu-mouse'
        Invoke-DesktopProbe key $gameIds[0] @('{DOWN}')
        Start-Sleep -Milliseconds 650
        Save-GameView 'menu-keyboard'
    }
}

function Start-TestMap {
    foreach ($player in 0,1) { Send-GameCommands $player @('devmap zombie_theater') }
    Start-Sleep -Seconds 3
    # The logs can be buffered past the first playable frame. Look for both red score counters.
    Wait-ForFixture 'both Zombies score counters' 90 {
        $image = Get-GameView
        try {
            $counts = foreach ($offset in 0,240) {
                $red = 0
                for ($x = 799; $x -lt 834; $x++) {
                    for ($y = 185 + $offset; $y -lt 198 + $offset; $y++) {
                        $color = $image.GetPixel($x,$y)
                        if ($color.R -gt 80 -and $color.R -gt $color.G + 25 -and $color.R -gt $color.B + 25) { $red++ }
                    }
                }
                $red
            }
            $counts[0] -gt 8 -and $counts[1] -gt 8
        } finally {
            $image.Dispose()
        }
    }
    Start-Sleep -Milliseconds 1400
    foreach ($player in 0,1) { Send-GameCommands $player @('ai_disableSpawn 1','god') }
}

function Test-HeldX {
    Start-TestMap
    foreach ($player in 0,1) { Send-GameCommands $player @('bind BUTTON_X +scores') }
    Save-GameView 'hold-before'
    $players = if ($Layout -eq 'Mixed') { '1' } else { '0,1' }
    $label = Send-PadReport $players X 3.4
    Wait-PadReport $label down
    Start-Sleep -Milliseconds 1350
    Save-GameView 'hold-down'
    if ($Layout -eq 'Mixed') {
        $keyboard = Invoke-DesktopProbe tab-hold $gameIds[0] -Async
        Start-Sleep -Milliseconds 600
        Save-GameView 'hold-both'
        $keyboard.WaitForExit()
        if ($keyboard.ExitCode) { throw "Foreground Tab probe returned $($keyboard.ExitCode)." }
    } else {
        Start-Sleep -Milliseconds 1250
        Save-GameView 'hold-late'
    }
    Wait-PadReport $label up
    Start-Sleep -Milliseconds 400
    Save-GameView 'hold-up'
}

function Test-InstanceAudio {
    Start-TestMap
    & "$PSScriptRoot\Measure-T5Audio.ps1" -ProcessId $gameIds -NucleusRoot $fixture |
        Tee-Object -FilePath "$run\audio-peaks.txt"
}
