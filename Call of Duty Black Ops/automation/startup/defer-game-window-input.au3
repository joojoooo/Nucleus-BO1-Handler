#NoTrayIcon

If $CmdLine[0] <> 2 Then Exit 2
Local $executable = $CmdLine[1]
Local $ready = StringRegExpReplace($executable, "[^\\]+$", "nucleus-input-ready")
Local $renderer = StringRegExpReplace($executable, "[^\\]+$", "nucleus-input-window")
Local $started = TimerInit()
While TimerDiff($started) < 60000 And Not FileExists($ready)
    Local $windows = WinList("[REGEXPTITLE:^Plutonium T5 (Co-Op|Multiplayer) \(r[0-9]+\) \(LAN\)$]")
    For $i = 1 To $windows[0][0]
        Local $window = $windows[$i][1]
        Local $gamePid = WinGetProcess($window)
        If ProcessImagePath($gamePid) <> $executable Then ContinueLoop
        NameAndHideConsole($gamePid)
        If FileExists($ready) Then Exit
        WinSetState($window, "", @SW_DISABLE)
        WinSetState($window, "", @SW_MINIMIZE)
        FileWrite($renderer, String(Number($window)))
        If FileExists($ready) Then
            WinSetState($window, "", @SW_ENABLE)
            WinSetState($window, "", @SW_RESTORE)
        EndIf
        Exit
    Next
    Sleep(40)
WEnd

Func NameAndHideConsole($gamePid)
    Local $attached = DllCall("kernel32.dll", "bool", "AttachConsole", "dword", $gamePid)
    If @error Or Not $attached[0] Then Return
    Local $console = DllCall("kernel32.dll", "hwnd", "GetConsoleWindow")
    If Not @error And $console[0] Then
        Local $title = "P" & $CmdLine[2]
        If $CmdLine[2] = "1" Then $title = "HOST"
        If WinSetTitle($console[0], "", $title) Then WinSetState($console[0], "", @SW_HIDE)
    EndIf
    DllCall("kernel32.dll", "bool", "FreeConsole")
EndFunc

Func ProcessImagePath($pid)
    Local $process = DllCall("kernel32.dll", "handle", "OpenProcess", "dword", 0x1000, "bool", False, "dword", $pid)
    If @error Or Not $process[0] Then Return ""
    Local $path = DllStructCreate("wchar[32768]")
    Local $queried = DllCall("kernel32.dll", "bool", "QueryFullProcessImageNameW", _
        "handle", $process[0], "dword", 0, "struct*", $path, "dword*", 32768)
    Local $found = Not @error And IsArray($queried) And $queried[0]
    DllCall("kernel32.dll", "bool", "CloseHandle", "handle", $process[0])
    If $found Then Return DllStructGetData($path, 1)
    Return ""
EndFunc
