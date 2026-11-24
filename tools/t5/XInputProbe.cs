using System;
using System.Runtime.InteropServices;

static class XInputProbe
{
    [StructLayout(LayoutKind.Sequential)]
    struct State
    {
        public uint Packet;
        public ushort Buttons;
        public byte LeftTrigger, RightTrigger;
        public short LeftX, LeftY, RightX, RightY;
    }

    [DllImport("openxinput1_3.dll", EntryPoint = "XInputGetState")]
    static extern uint OpenXInputGetState(uint slot, out State state);

    [DllImport("xinput1_4.dll", EntryPoint = "XInputGetState")]
    static extern uint WindowsXInputGetState(uint slot, out State state);

    static void Main(string[] args)
    {
        var native = Array.IndexOf(args, "--windows") >= 0;
        for (uint slot = 0; slot < (native ? 4 : 32); slot++)
        {
            State state;
            var result = native ? WindowsXInputGetState(slot, out state) : OpenXInputGetState(slot, out state);
            if (result == 0)
                Console.WriteLine("{0} {1:x4} {2} {3} {4} {5}", slot, state.Buttons,
                    state.LeftTrigger, state.RightTrigger, state.LeftX, state.LeftY);
        }
    }
}
