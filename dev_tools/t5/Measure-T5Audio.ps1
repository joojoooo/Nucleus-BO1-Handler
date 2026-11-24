[CmdletBinding()]
param(
    [Parameter(Mandatory)][int[]]$ProcessId,
    [string]$NucleusRoot = (Join-Path $PSScriptRoot '..\..\..'),
    [ValidateRange(1,30)][int]$Seconds = 5
)

$ErrorActionPreference = 'Stop'
foreach ($id in $ProcessId) {
    if ((Get-Process -Id $id).ProcessName -ne 'plutonium-bootstrapper-win32') {
        throw "PID $id is not a Plutonium bootstrapper."
    }
}
Add-Type -Path (Join-Path $NucleusRoot 'NAudio.dll')
$enumerator = New-Object NAudio.CoreAudioApi.MMDeviceEnumerator
$peaks = @{}
$seen = @{}
foreach ($id in $ProcessId) { $peaks[$id] = 0.0 }
try {
    $endpoints = $enumerator.EnumerateAudioEndPoints('Render','Active')
    $deadline = [DateTime]::UtcNow.AddSeconds($Seconds)
    do {
        foreach ($endpoint in $endpoints) {
            $sessions = $endpoint.AudioSessionManager.Sessions
            for ($i = 0; $i -lt $sessions.Count; $i++) {
                $session = $sessions[$i]
                $id = [int]$session.GetProcessID
                if ($id -in $ProcessId) {
                    $seen[$id] = $true
                    $peaks[$id] = [Math]::Max($peaks[$id],$session.AudioMeterInformation.MasterPeakValue)
                }
            }
        }
        Start-Sleep -Milliseconds 80
    } while ([DateTime]::UtcNow -lt $deadline)
} finally {
    $enumerator.Dispose()
}
foreach ($id in $ProcessId) {
    [pscustomobject]@{ PID = $id; AudioSession = $seen.ContainsKey($id); Peak = $peaks[$id] }
}
