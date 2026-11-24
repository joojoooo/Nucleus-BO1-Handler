#NoTrayIcon

Hotkeyset("{F4}", "_Continue")

Global $binFlag = False
Global $lastState = $binFlag
Global $sendingLock = False
Global $hDLL = _XInput_LoadDLL()
Global $tState = DllStructCreate("dword dwPacketNumber; ushort wButtons; byte bLeftTrigger; byte bRightTrigger; short sThumbLX; short sThumbLY; short sThumbRX; short sThumbRY")


While 1

    _CheckGamepadTrigger()
    Sleep(50)
If $sendingLock Then ContinueLoop
If ($binFlag <> $lastState) And Not $sendingLock Then
        $sendingLock = True

        If $binFlag = True Then

Sleep(50) 
ControlSend("HOST", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_LSHLDR {+}speed_throw")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_RSHLDR {+}attack")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_LTRIG {+}smoke")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_RTRIG {+}frag")
ControlSend("P8", "", 0, "{ENTER}", 0)

Else

Sleep(50) 
ControlSend("HOST", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P1", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P1", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P8", "", 0, "bind BUTTON_LSHLDR {+}smoke")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_RSHLDR {+}frag")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_LTRIG {+}speed_throw")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "bind BUTTON_RTRIG {+}attack")
ControlSend("P8", "", 0, "{ENTER}", 0)
        EndIf
Send("{SHIFTUP}")
        $lastState = $binFlag
        $sendingLock = False
    EndIf
WEnd


Func _Continue()
    ; only toggle if not busy sending
    If Not $sendingLock Then
        $binFlag = Not $binFlag
    EndIf
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
    Local Const $XINPUT_GAMEPAD_BACK = 0x0020
    Local Const $XINPUT_GAMEPAD_A    = 0x1000

    Static $prevCombo = False
    Static $lastTriggerTime = TimerInit()

    Local $comboPressed = BitAND($buttons, $XINPUT_GAMEPAD_BACK) And BitAND($buttons, $XINPUT_GAMEPAD_A)

    ; Trigger once per combo press, with stricter debounce (400ms)
    If $comboPressed And Not $prevCombo Then
        If TimerDiff($lastTriggerTime) > 400 Then
            _Continue()
            $lastTriggerTime = TimerInit()
        EndIf
    EndIf

    $prevCombo = $comboPressed
EndFunc