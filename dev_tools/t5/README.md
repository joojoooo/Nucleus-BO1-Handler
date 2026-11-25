# Black Ops T5 test tools

## Inspect a script fastfile

`extract-fastfile.py` uses Python's standard library to inspect unsigned PC T5
fastfiles containing only inline rawfiles. It lists each asset's size and SHA-256,
and extracts assets only if you supply a new output directory. It reads scripts
as data without launching Black Ops. Mixed-asset fastfiles and other formats
require a different parser.

```powershell
python dev_tools/t5/extract-fastfile.py "Call of Duty Black Ops/zombies-cheats/common_zombie_patch.ff"
python dev_tools/t5/extract-fastfile.py "patch.ff" --out "extracted-patch" --compare "source-checkout"
```

`--compare` checks embedded GSC and CSC files byte for byte against their paths
in the source checkout. Exit status 1 indicates differing or missing scripts.
Exit status 2 indicates a parsing or I/O error.

## Run the game fixtures

Run these scripts from the handler repo in Windows PowerShell on an interactive
desktop. `Test-T5.ps1` uses the installed Nucleus Co-op 2.4.2 runtime and a local
Black Ops installation. The fixture calls the real Nucleus handler and uses
temporary copies for the handler, settings, and player data. Each run prints its
folder under `%TEMP%\nucleus-t5-tests`. Close any running Plutonium games first.

```powershell
$game = 'D:\SteamLibrary\steamapps\common\Call of Duty Black Ops'
.\dev_tools\t5\Compare-Plutonium.ps1
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check Bootstrapper
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Mode Multiplayer -ControllerSlots '0,1'
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check Menu -Layout Mixed
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check HoldX
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check HoldX -Layout Mixed
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check Input -Layout MixedControllerFirst
.\dev_tools\t5\Test-T5.ps1 -GameRoot $game -Check Audio -Audio First -Layout Mixed
```

- Set `-NucleusRoot` if Nucleus is outside the repo's parent directory.
- `-ControllerSlots` takes zero-based OpenXInput slots for existing controllers.
  `Mixed` gives the first window the combined keyboard/mouse and uses the second
  controller slot. `MixedControllerFirst` gives the first window the first slot
  and the second window the combined keyboard/mouse. Omit the slots to use
  virtual pads, which require Python with `vgamepad` and an existing ViGEmBus
  installation. `-Python` can point to the executable in a virtual environment.
- Pass `-RetainedRun <previous-run-folder>` to copy that run's player runtime
  into a fresh fixture and exercise migration. `-BuildOnly` stages the fixture
  and compiles the C# tools for inspection.
- Standard checks use the handler's own attach delay. For EasyHook named-pipe
  timeouts, retry with `-GrabDelay 30` to give T5 more time to initialize.

| Check | What to inspect |
| --- | --- |
| `Startup` | Two responsive game windows remain alive after setup. See `fixture.out.log`, `nucleus\debug-log.txt`, and the per-instance Plutonium console logs. |
| `Bootstrapper` | One responsive game window from the bundled runtime, launched directly to isolate Plutonium startup from Nucleus setup. |
| `Menu` | The screenshots show how each game responds to the D-pad and the left stick. Mixed layouts also check controller isolation and keyboard focus after clicking the controller window. |
| `HoldX` | The probe switches focus between windows before holding X to show the Zombies scoreboard. The scoreboards should stay visible through the hold and disappear on release. In mixed layouts, `hold-both.png` should show both scoreboards while the keyboard window has focus. |
| `Input` | Runs `Menu` and `HoldX` in Zombies, including right-stick and mouse look. On a concurrent launch it presses A before setup finishes if both frontends are ready. `menu-after-setup.png` should show both title prompts. |
| `Audio` | Compare the per-process WASAPI peaks in `audio-peaks.txt`. Use `-Audio All` to exercise the all-instance option. |

The screenshot probes use the primary display. The Zombies map-ready check
looks for the score counters in the top and bottom halves of a 16:9 display.
Review the screenshots to assess the input behavior.
Use the Nucleus UI with physical devices to check individual raw-input
assignments and the End lock toggle.

## Interactive diagnosis

Run with `-Check Manual` to leave both games open. From another shell, use the
printed run folder as `$run`.

```powershell
& "$run\nucleus\XInputProbe.exe"           # OpenXInput
& "$run\nucleus\XInputProbe.exe" --windows # Windows XInput
.\dev_tools\t5\Measure-T5Audio.ps1 -ProcessId (Get-Content "$run\game-pids.txt")
Set-Content "$run\pad-command.txt" 'test1 0,1 X 3.4'
Set-Content "$run\focus-control.txt" 'stop'
Set-Content "$run\focus-control.txt" '50 0111'
Set-Content "$run\focus-control.txt" 'quit'
```

Pad commands accept a unique label, player indices, a button, and seconds.
Focus flags are `WM_ACTIVATE`, `WM_ACTIVATEAPP`, `WM_NCACTIVATE`, and
`WM_SETFOCUS` in that order. Use a fresh run to test the handler's own settings.
`probes/game-window-probe.au3` can read window text by PID with the `inspect` action and
send commands to a fixture game's console by PID with the `console` action.
The fixture uses Nucleus internals to build a two-player profile. If a Nucleus
upgrade changes that API, inspect `Nucleus.Gaming.GenericGameHandler` and
`Nucleus.Gaming.Coop.ProtoInput.ProtoInputLauncher` in the installed
`Nucleus.Gaming.dll`. ILSpy can open the assembly locally.
