"""Build an unsigned PC T5 fastfile using the EncoreV8 rawfile layout.

Extract a source tree with extract-fastfile.py FASTFILE --out SOURCE --manifest.
Run pack-fastfile.py SOURCE FASTFILE to build it, or pass --verify ORIGINAL to
require a byte-for-byte match before writing. The .fastfile manifest stores
the serialized names and the byte after each payload in their original order.
The EncoreV8 0.9 reference rebuild was verified with zlib 1.3.1.
"""

import argparse
import hashlib
from pathlib import Path
import struct
from tempfile import NamedTemporaryFile
import zlib

from fastfile_format import (
    ASSET, ASSET_LIST, HEADER, INLINE, MANIFEST, MAX_EXTRACTED, MAX_INPUT,
    MAX_ZONE, RAWFILE, RAWFILE_TYPE, SCRIPT, SCRIPT_SUFFIXES, XFILE,
    rawfile_path,
)


def read_manifest(source):
    entries = []
    names = set()
    with (source / MANIFEST).open(encoding="ascii") as manifest:
        for number, line in enumerate(manifest, 1):
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            fields = line.split()
            if len(fields) != 2:
                raise ValueError(f"expected a hex byte and name on manifest line {number}")
            trailer, name = fields
            trailer = bytes.fromhex(trailer)
            if len(trailer) != 1:
                raise ValueError(f"expected one trailing byte on manifest line {number}")
            path = rawfile_path(name)
            if path.lower() in names:
                raise ValueError(f"duplicate rawfile name {name!r}")
            names.add(path.lower())
            entries.append((name, path, trailer))
    if not entries:
        raise ValueError("manifest has no assets")
    return entries


def pack_fastfile(source):
    entries = read_manifest(source)
    table = ASSET.pack(RAWFILE_TYPE, INLINE) * len(entries)
    zone = bytearray(XFILE.size)
    zone.extend(ASSET_LIST.pack(0, 0, len(entries), INLINE))
    zone.extend(table)

    # TEMP holds the asset list and one rawfile header at a time.
    # VIRTUAL holds the asset table, names and buffers for the entire zone.
    temp_size = ASSET_LIST.size + RAWFILE.size
    virtual_size = len(table)
    budget = MAX_EXTRACTED
    for name, path, trailer in entries:
        with (source / path).open("rb") as asset:
            payload = asset.read(budget + 1)
        budget -= len(payload)
        if budget < 0:
            raise ValueError("rawfiles exceed the input size limit")

        if name.lower().endswith(SCRIPT_SUFFIXES):
            if b"\0" in payload:
                raise ValueError(f"script contains an embedded NUL: {name!r}")
            script = payload + b"\0"
            stream = zlib.compress(script, level=6)
            payload = SCRIPT.pack(len(script), len(stream)) + stream

        name_bytes = name.encode("ascii") + b"\0"
        zone.extend(RAWFILE.pack(INLINE, len(payload), INLINE))
        zone.extend(name_bytes)
        zone.extend(payload)
        zone.extend(trailer)
        virtual_size += len(name_bytes) + len(payload) + len(trailer)
        if len(zone) > MAX_ZONE:
            raise ValueError("zone exceeds the size limit")

    XFILE.pack_into(zone, 0, len(zone) - XFILE.size, 0, temp_size, 0, 0, 0, virtual_size, 0, 0)
    fastfile = HEADER + zlib.compress(zone, level=1)
    # Unsigned zones produced by this linker are zero-padded to 32 bytes.
    fastfile += bytes(-len(fastfile) % 32)
    if len(fastfile) > MAX_INPUT:
        raise ValueError("fastfile exceeds the size limit")
    return fastfile


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("source", type=Path, help="extracted source tree with a .fastfile manifest")
    parser.add_argument("fastfile", type=Path, help="output fastfile")
    parser.add_argument("--verify", type=Path, help="require identical bytes to this fastfile")
    args = parser.parse_args()
    try:
        data = pack_fastfile(args.source)
        if args.verify:
            with args.verify.open("rb") as reference:
                if reference.read(len(data) + 1) != data:
                    raise ValueError(f"rebuilt fastfile differs from {args.verify}")

        output = NamedTemporaryFile(dir=args.fastfile.parent, delete=False)
        temporary = Path(output.name)
        try:
            with output:
                output.write(data)
            temporary.replace(args.fastfile)
        finally:
            temporary.unlink(missing_ok=True)
        print(f"SHA-256 {hashlib.sha256(data).hexdigest()}")
    except (OSError, ValueError, struct.error, zlib.error) as error:
        parser.exit(2, f"Error: {error}\n")


if __name__ == "__main__":
    main()
