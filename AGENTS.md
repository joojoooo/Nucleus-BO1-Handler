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
- When editing EncoreV8 GSC under `dev_tools/t5/encorev8`, run the
  [pinned GSCode formatter](dev_tools/t5/README.md#format-and-build-encorev8)
  on the edited scripts. Keep the diff focused on the requested behavior, then
  rebuild and verify the bundled fastfile with the commands in that section.
- Choose checks based on what the change can affect. Use targeted static checks
  when they are sufficient, such as `node --check "Call of Duty Black Ops.js"`
  after handler edits and path checks after file moves. Use the relevant
  [T5 test tools](dev_tools/t5/README.md) for runtime behavior changes. Test
  both Zombies and Multiplayer for launch changes, both dual-controller and
  mixed layouts for input changes, and audio when audio behavior changes.
  Run the full suite only when the change has broad impact or targeted checks
  would leave important behavior unverified.
