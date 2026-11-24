#NoTrayIcon

If $CmdLine[0] < 2 Then Exit 2
Local $action = $CmdLine[1]
Local $targetPid = Number($CmdLine[2])
If $action = "console" Then
    If $CmdLine[0] <> 4 Then Exit 2
    DllCall("kernel32.dll", "bool", "FreeConsole")
    Local $attached = DllCall("kernel32.dll", "bool", "AttachConsole", "dword", $targetPid)
    If @error Or Not $attached[0] Then Exit 1
    Local $console = DllCall("kernel32.dll", "hwnd", "GetConsoleWindow")
    If @error Or Not $console[0] Or WinGetTitle($console[0]) <> $CmdLine[3] Then Exit 1
    Local $commands = FileReadToArray($CmdLine[4])
    If @error Then Exit 3
    For $command In $commands
        ControlSend($console[0], "", 0, $command, 1)
        ControlSend($console[0], "", 0, "{ENTER}")
        Sleep(350)
    Next
    Exit 0
EndIf

Local $windows = WinList()
For $i = 1 To $windows[0][0]
    Local $title = $windows[$i][0]
    Local $handle = $windows[$i][1]
    If WinGetProcess($handle) <> $targetPid Then ContinueLoop

    If $action = "inspect" Then
        If $title <> "" Then ConsoleWrite($title & @CRLF & WinGetText($handle) & @CRLF)
    ElseIf StringInStr($title, "Plutonium T5") = 1 Then
        If Not WinActive($handle) Then Exit 4
        Switch $action
            Case "key"
                Send($CmdLine[3])
            Case "click"
                MouseClick("left", Number($CmdLine[3]), Number($CmdLine[4]), 1, 0)
            Case "tab-hold"
                Send("{TAB down}")
                Sleep(1700)
                Send("{TAB up}")
            Case Else
                Exit 2
        EndSwitch
        Exit 0
    EndIf
Next
If $action <> "inspect" Then Exit 1
