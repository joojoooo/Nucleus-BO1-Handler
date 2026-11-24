"""Feed Xbox 360 reports to a disposable T5 test session via vgamepad."""

import argparse
from pathlib import Path
import time

import vgamepad as vg


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("run_root", type=Path)
    args = parser.parse_args()
    control = args.run_root / "pad-command.txt"
    status = args.run_root / "pad-status.txt"
    pads = [vg.VX360Gamepad() for _ in range(2)]
    status.write_text("ready", encoding="ascii")

    previous = None
    while True:
        try:
            command = control.read_text(encoding="utf-8-sig").strip()
        except (FileNotFoundError, PermissionError):
            time.sleep(0.04)
            continue
        if not command or command == previous:
            time.sleep(0.04)
            continue
        if command == "quit":
            return
        previous = command
        label, players, button, seconds = command.split()
        for player in map(int, players.split(",")):
            pad = pads[player]
            if button == "LT":
                pad.left_trigger(value=255)
            elif button == "RT":
                pad.right_trigger(value=255)
            else:
                pad.press_button(button=getattr(vg.XUSB_BUTTON, "XUSB_GAMEPAD_" + button))
            pad.update()
        status.write_text(f"{label} down", encoding="ascii")
        try:
            time.sleep(float(seconds))
        finally:
            for pad in pads:
                pad.reset()
                pad.update()
        status.write_text(f"{label} up", encoding="ascii")


if __name__ == "__main__":
    main()
