"""Shared layout for unsigned PC T5 fastfiles with inline rawfiles.

Format references:
https://github.com/eithan1231/open-fastfile/blob/main/scripts/cod/fastfile.py
https://github.com/eithan1231/open-fastfile/blob/main/reverse/x86-zone/README.md
"""

import re
import struct


HEADER = b"IWffu100" + struct.pack("<I", 0x1D9)
XFILE = struct.Struct("<9I")
ASSET_LIST = struct.Struct("<4I")
ASSET = struct.Struct("<2I")
RAWFILE = struct.Struct("<3I")
SCRIPT = struct.Struct("<2I")
INLINE = 0xFFFFFFFF
RAWFILE_TYPE = 36
MAX_INPUT = 128 * 1024 * 1024
MAX_ZONE = 128 * 1024 * 1024
MAX_EXTRACTED = 256 * 1024 * 1024
SCRIPT_SUFFIXES = (".gsc", ".csc")
MANIFEST = ".fastfile"
MAX_NAME = 1024
SAFE_COMPONENT = re.compile(r"[A-Za-z0-9_-][A-Za-z0-9_.-]*")
DEVICE_NAMES = {"CON", "PRN", "AUX", "NUL"} | {
    f"{prefix}{number}" for prefix in ("COM", "LPT") for number in range(10)
}


def rawfile_path(name):
    path = name.replace("\\", "/")
    if len(path) >= MAX_NAME:
        raise ValueError(f"rawfile name is too long: {name!r}")
    for part in path.split("/"):
        if (
            not SAFE_COMPONENT.fullmatch(part)
            or part.endswith(".")
            or part.split(".")[0].upper() in DEVICE_NAMES
        ):
            raise ValueError(f"unsafe rawfile name {name!r}")
    return path
