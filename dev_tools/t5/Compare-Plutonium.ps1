[CmdletBinding()]
param(
    [string]$Installed = (Join-Path $env:LOCALAPPDATA 'Plutonium'),
    [switch]$IncludeMatches
)

$ErrorActionPreference = 'Stop'
$bundle = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\..\Call of Duty Black Ops\Plutonium')).Path
$source = (Resolve-Path -LiteralPath $Installed).Path
$bundledRevision = (Get-Content -LiteralPath "$bundle\info.json" -Raw | ConvertFrom-Json).revision
$installedRevision = (Get-Content -LiteralPath "$source\info.json" -Raw | ConvertFrom-Json).revision
Write-Host "Bundled revision $bundledRevision, installed revision $installedRevision"

# Match the runtime directories copied by the handler.
$folders = 'bin','games','storage\demonware\18301\pub','storage\t5\plutonium',
    'storage\t5\raw\scripts\mp','storage\t5\raw\scripts\sp','storage\t5\zone'
$paths = @('info.json')
foreach ($folder in $folders) {
    foreach ($root in $bundle,$source) {
        $directory = Join-Path $root $folder
        if (Test-Path -LiteralPath $directory -PathType Container) {
            $paths += Get-ChildItem -LiteralPath $directory -File | ForEach-Object { Join-Path $folder $_.Name }
        }
    }
}
foreach ($path in ($paths | Sort-Object -Unique)) {
    $bundledFile = Join-Path $bundle $path
    $installedFile = Join-Path $source $path
    $status = if (!(Test-Path -LiteralPath $bundledFile -PathType Leaf)) {
        'Installed only'
    } elseif (!(Test-Path -LiteralPath $installedFile -PathType Leaf)) {
        'Bundled only'
    } elseif ((Get-FileHash -LiteralPath $bundledFile).Hash -ne (Get-FileHash -LiteralPath $installedFile).Hash) {
        'Different'
    } else {
        'Match'
    }
    if ($IncludeMatches -or $status -ne 'Match') {
        [pscustomobject]@{ Status = $status; File = $path }
    }
}
