#NoTrayIcon

Local $consoleTitle = "[REGEXPTITLE:^Plutonium r[0-9]+$]"
For $player = 1 To 8
    Local $console = WinWait($consoleTitle)
    Local $title = "P" & $player
    If $player = 1 Then $title = "HOST"

    If WinSetTitle($console, "", $title) Then
        WinSetState($console, "", @SW_HIDE)
    EndIf
Next
