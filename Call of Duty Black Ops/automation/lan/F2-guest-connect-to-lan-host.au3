#NoTrayIcon

If $CmdLine[0] <> 1 Then Exit 2
Local $hostAddress = $CmdLine[1]
If Not StringRegExp($hostAddress, "^\d{1,3}(\.\d{1,3}){3}$") Then Exit 2

HotKeySet("{F2}", "_Continue")

Global $binFlag = False

; Load XInput DLL for controller support
Global $hDLL = _XInput_LoadDLL()
Global $tState = DllStructCreate("dword dwPacketNumber; ushort wButtons; byte bLeftTrigger; byte bRightTrigger; short sThumbLX; short sThumbLY; short sThumbRX; short sThumbRY")

While True
    ; Poll controller for Select + Start buttons
    _CheckSelectStartTrigger()
    Sleep(50)

    If $binFlag = True Then
        ControlSend("HOST", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("HOST", "", 0, "{ENTER}", 0)
        ControlSend("P2", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P2", "", 0, "{ENTER}", 0)
        ControlSend("P3", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P3", "", 0, "{ENTER}", 0)
        ControlSend("P4", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P4", "", 0, "{ENTER}", 0)
        ControlSend("P5", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P5", "", 0, "{ENTER}", 0)
        ControlSend("P6", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P6", "", 0, "{ENTER}", 0)
        ControlSend("P7", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P7", "", 0, "{ENTER}", 0)
        ControlSend("P8", "", 0, "connect " & $hostAddress, 1)
        Sleep(1000)
        ControlSend("P8", "", 0, "{ENTER}", 0)
        Sleep(50)

        ; Reset flag
        $binFlag = False
    EndIf
WEnd

; =========================
Func _Continue()
Sleep(500)
    $binFlag = Not $binFlag
EndFunc

; =========================
Func _XInput_LoadDLL()
    Local $dll = DllOpen("XInput1_4.dll")
    If $dll = -1 Then $dll = DllOpen("XInput1_3.dll")
    If $dll = -1 Then $dll = DllOpen("XInput9_1_0.dll")
    If $dll = -1 Then
        MsgBox(16, "Error", "No XInput DLL found. Cannot detect controller.")
        Exit
    EndIf
    Return $dll
EndFunc

; =========================
Func _CheckSelectStartTrigger()
    Local $ret = DllCall($hDLL, "int", "XInputGetState", "dword", 0, "ptr", DllStructGetPtr($tState))
    If @error Or Not IsArray($ret) Or $ret[0] <> 0 Then Return

    Local $buttons = DllStructGetData($tState, "wButtons")
    Local Const $XINPUT_GAMEPAD_BACK  = 0x0020 ; Select
    Local Const $XINPUT_GAMEPAD_X = 0x4000 ; X

    Static $prevState = False
    Static $lastTriggerTime = TimerInit()

    Local $pressed = BitAND($buttons, $XINPUT_GAMEPAD_BACK) And BitAND($buttons, $XINPUT_GAMEPAD_X)

    ; Trigger once per press, 200ms debounce
    If $pressed And Not $prevState Then
        If TimerDiff($lastTriggerTime) > 200 Then
            _Continue()
            $lastTriggerTime = TimerInit()
        EndIf
    EndIf

    $prevState = $pressed
EndFunc
