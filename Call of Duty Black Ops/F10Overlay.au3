#NoTrayIcon

Global $targetTitle = "Plutonium T5 Co-Op (r4839)"
HotKeySet("{F10}", "SendF10ToMatchingWindows")
HotKeySet("!{F11}", "SendF10ToMatchingWindows")

While True
    Sleep(100)
WEnd

Func SendF10ToMatchingWindows()
    Local $winList = WinList()
    For $i = 1 To $winList[0][0]
        ; Only proceed if window is visible and active
        If BitAND(WinGetState($winList[$i][1]), 2) Then
            ; Match exact title (for partial match use StringInStr)
            If $winList[$i][0] = $targetTitle Then
                ControlSend($winList[$i][1], "", "", "{F10}")
            EndIf
        EndIf
    Next
Sleep(500)
ControlSend("", "", "", "text", 0)
EndFunc