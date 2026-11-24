#NoTrayIcon

HotKeySet("{F3}", "_Continue")

Global $binFlag = False
Global $hDLL = _XInput_LoadDLL()
Global $tState = DllStructCreate("dword dwPacketNumber; ushort wButtons; byte bLeftTrigger; byte bRightTrigger; short sThumbLX; short sThumbLY; short sThumbRX; short sThumbRY")

While True
    _CheckGamepadTrigger()
    Sleep(10)        

    If $binFlag Then

        ControlSend("HOST", "", 0, "fast_restart")
        Sleep(50)
        ControlSend("HOST", "", 0, "{ENTER}", 0)
        Sleep(50)
        
        ; reset the flag
        $binFlag = False
    EndIf
WEnd

Func _Continue()
Sleep(500)
    $binFlag = Not $binFlag
EndFunc

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

Func _CheckGamepadTrigger()
    Local $ret = DllCall($hDLL, "int", "XInputGetState", "dword", 0, "ptr", DllStructGetPtr($tState))
    If @error Or Not IsArray($ret) Or $ret[0] <> 0 Then Return

    Local $buttons = DllStructGetData($tState, "wButtons")
    Local Const $XINPUT_GAMEPAD_BACK  = 0x0020
    Local Const $XINPUT_GAMEPAD_Y = 0x8000

    Static $prevCombo = False
    Static $lastTriggerTime = TimerInit()

    Local $comboPressed = BitAND($buttons, $XINPUT_GAMEPAD_BACK) And BitAND($buttons, $XINPUT_GAMEPAD_Y)

    ; Trigger once per combo press, with 200 ms debounce
    If $comboPressed And Not $prevCombo Then
        If TimerDiff($lastTriggerTime) > 200 Then
            _Continue()
            $lastTriggerTime = TimerInit()
        EndIf
    EndIf

    $prevCombo = $comboPressed
EndFunc
