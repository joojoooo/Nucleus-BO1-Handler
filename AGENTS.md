# Black Ops T5 handler

- Edit `Call of Duty Black Ops.js` and its companion asset folder. Nucleus
  launches the bundled Plutonium bootstrapper once per player in offline LAN mode.
  Window sizing uses native borderless settings. Controller hooks install at runtime.
- Check the bundle revision in `Plutonium/info.json`. When updating Plutonium,
  check `runtimeFolders` and `obsoleteFiles` for retained instances.
  The local update source is usually `%LOCALAPPDATA%\Plutonium`.
- Keep controller window activation to one `WM_ACTIVATE` after setup. Repeating
  it clears held buttons. Combined keyboard/mouse uses foreground input.
  Individual raw devices use input locking, toggled with End.
- Run `node --check "Call of Duty Black Ops.js"` and use the
  [T5 test tools](tools/t5/README.md) for startup, held input, and audio.
  Test both Zombies and Multiplayer for launch changes, and both dual-controller
  and mixed layouts for input changes.
