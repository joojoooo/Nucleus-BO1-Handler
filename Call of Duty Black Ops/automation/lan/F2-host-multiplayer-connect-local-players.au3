#NoTrayIcon

HotKeySet("{F2}", "_Continue")

Global $binFlag = False
Global $hDLL = _XInput_LoadDLL()
Global $tState = DllStructCreate("dword dwPacketNumber; ushort wButtons; byte bLeftTrigger; byte bRightTrigger; short sThumbLX; short sThumbLY; short sThumbRX; short sThumbRY")

While True
    _CheckGamepadTrigger()
    Sleep(10) ; fast enough for instant reaction, no lag

    If $binFlag Then
Sleep(1000)
ControlSend("P2", "", 0, "connect 127.0.0.1")
ControlSend("P2", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P3", "", 0, "connect 127.0.0.1")
ControlSend("P3", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P4", "", 0, "connect 127.0.0.1")
ControlSend("P4", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P5", "", 0, "connect 127.0.0.1")
ControlSend("P5", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P6", "", 0, "connect 127.0.0.1")
ControlSend("P6", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P7", "", 0, "connect 127.0.0.1")
ControlSend("P7", "", 0, "{ENTER}", 0)
Sleep(50)
ControlSend("P8", "", 0, "connect 127.0.0.1")
ControlSend("P8", "", 0, "{ENTER}", 0)
        Sleep(50)

        $binFlag = False
    EndIf
WEnd


; ==========================================================
; === FUNCTIONS ============================================
; ==========================================================

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
    Local Const $XINPUT_GAMEPAD_X = 0x4000

    Static $prevCombo = False
    Static $lastTriggerTime = TimerInit()

    Local $comboPressed = BitAND($buttons, $XINPUT_GAMEPAD_BACK) And BitAND($buttons, $XINPUT_GAMEPAD_X)

    ; Trigger once per combo press, with 200 ms debounce
    If $comboPressed And Not $prevCombo Then
        If TimerDiff($lastTriggerTime) > 200 Then
            _Continue()
            $lastTriggerTime = TimerInit()
        EndIf
    EndIf

    $prevCombo = $comboPressed
EndFunc
