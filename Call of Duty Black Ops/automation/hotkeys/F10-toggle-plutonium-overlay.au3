#NoTrayIcon

HotKeySet("{F10}", "SendF10ToMatchingWindows")
HotKeySet("!{F11}", "SendF10ToMatchingWindows")

While True
    Sleep(100)
WEnd

Func SendF10ToMatchingWindows()
    Local $winList = WinList("[REGEXPTITLE:^Plutonium T5 Co-Op \(r[0-9]+\) \(LAN\)$]")
    For $i = 1 To $winList[0][0]
        Local $window = $winList[$i][1]
        If BitAND(WinGetState($window), 2) Then
            ControlSend($window, "", "", "{F10}")
        EndIf
    Next
EndFunc
