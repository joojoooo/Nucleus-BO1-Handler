"""Inspect unsigned Black Ops PC fastfiles containing only inline rawfiles.

Format reference: https://github.com/eithan1231/open-fastfile/tree/b746ad7aaec77e0e97a99af4055d8151a6f4ecaa/scripts/cod/t5
"""

import argparse
import hashlib
from pathlib import Path
import re
import struct
import zlib


HEADER = b"IWffu100" + struct.pack("<I", 0x1D9)
XFILE_SIZE = 36
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
SAFE_COMPONENT = re.compile(r"[A-Za-z0-9_-][A-Za-z0-9_.-]*")
DEVICE_NAMES = {"CON", "PRN", "AUX", "NUL"} | {
    f"{prefix}{number}" for prefix in ("COM", "LPT") for number in range(10)
}


def inflate(data, limit):
    stream = zlib.decompressobj()
    result = stream.decompress(data, limit + 1)
    if len(result) > limit or not stream.eof:
        raise ValueError("truncated zlib stream or decompressed size exceeds limit")
    return result, stream.unused_data


def rawfile_name(zone, start):
    end = zone.find(b"\0", start, start + 1024)
    if end == -1:
        raise ValueError("missing rawfile name terminator")
    name = zone[start:end].decode("ascii").replace("\\", "/")
    for part in name.split("/"):
        if (
            not SAFE_COMPONENT.fullmatch(part)
            or part.endswith(".")
            or part.split(".")[0].upper() in DEVICE_NAMES
        ):
            raise ValueError(f"unsafe rawfile name {name!r}")
    return name, end + 1


def parse_fastfile(fastfile):
    with fastfile.open("rb") as source:
        data = source.read(MAX_INPUT + 1)
    if len(data) > MAX_INPUT or not data.startswith(HEADER):
        raise ValueError("expected an unsigned Black Ops PC fastfile (version 473) within the size limit")

    zone, padding = inflate(data[len(HEADER):], MAX_ZONE)
    if padding.strip(b"\0"):
        raise ValueError("unexpected data after the zone stream")
    if struct.unpack_from("<I", zone)[0] + XFILE_SIZE != len(zone):
        raise ValueError("zone size does not match its header")

    strings, string_pointer, count, asset_pointer = ASSET_LIST.unpack_from(zone, XFILE_SIZE)
    if strings or string_pointer or asset_pointer != INLINE or not count:
        raise ValueError("expected an inline asset table without script strings")
    table_start = XFILE_SIZE + ASSET_LIST.size
    offset = table_start + count * ASSET.size
    if offset > len(zone):
        raise ValueError("truncated asset table")
    for asset in ASSET.iter_unpack(zone[table_start:offset]):
        if asset != (RAWFILE_TYPE, INLINE):
            raise ValueError("only fastfiles containing inline rawfile assets are supported")

    rawfiles = {}
    names = set()
    budget = MAX_EXTRACTED
    for _ in range(count):
        name_pointer, length, data_pointer = RAWFILE.unpack_from(zone, offset)
        if name_pointer != INLINE or data_pointer != INLINE:
            raise ValueError("only inline rawfile names and buffers are supported")
        name, start = rawfile_name(zone, offset + RAWFILE.size)
        if name.lower() in names:
            raise ValueError(f"duplicate rawfile name {name!r}")
        names.add(name.lower())

        end = start + length
        # T5 serializes len + 1 bytes. A compressed script's extra byte is unused.
        if end >= len(zone):
            raise ValueError(f"truncated rawfile {name!r}")
        payload = zone[start:end]
        offset = end + 1
        if name.lower().endswith(SCRIPT_SUFFIXES):
            inflated_size, deflated_size = SCRIPT.unpack_from(payload)
            if deflated_size != length - SCRIPT.size or not 0 < inflated_size <= budget:
                raise ValueError(f"invalid script length for {name!r}")
            script, trailing = inflate(payload[SCRIPT.size:], inflated_size)
            if len(script) != inflated_size or trailing or not script.endswith(b"\0") or b"\0" in script[:-1]:
                raise ValueError(f"invalid script buffer for {name!r}")
            payload = script[:-1]
        budget -= len(payload)
        if budget < 0:
            raise ValueError("extracted rawfiles exceed the size limit")
        rawfiles[name] = payload

    if offset != len(zone):
        raise ValueError("unparsed data remains in the zone")
    return hashlib.sha256(data).hexdigest(), rawfiles


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("fastfile", type=Path)
    parser.add_argument("--out", type=Path, help="extract rawfiles to a new directory")
    parser.add_argument("--compare", type=Path, help="compare embedded GSC and CSC with a source directory")
    args = parser.parse_args()
    try:
        if args.compare and not args.compare.is_dir():
            raise ValueError("comparison source must be an existing directory")
        digest, rawfiles = parse_fastfile(args.fastfile)
        if args.out:
            args.out.mkdir(parents=True)
        print(f"SHA-256 {digest}")
        mismatches = 0
        for name, payload in rawfiles.items():
            if args.out:
                path = args.out / name
                path.parent.mkdir(parents=True, exist_ok=True)
                with path.open("xb") as output:
                    output.write(payload)
            status = ""
            if args.compare and name.lower().endswith(SCRIPT_SUFFIXES):
                reference = args.compare / name
                if not reference.is_file():
                    status = "missing from source"
                else:
                    with reference.open("rb") as source:
                        status = "exact" if source.read(len(payload) + 1) == payload else "different"
                mismatches += status != "exact"
            print(f"{len(payload):>9}  {hashlib.sha256(payload).hexdigest()}  {name}  {status}")
        print(f"{len(rawfiles)} rawfiles")
        return int(mismatches != 0)
    except (OSError, ValueError, struct.error, zlib.error) as error:
        parser.exit(2, f"Error: {error}\n")


if __name__ == "__main__":
    raise SystemExit(main())
