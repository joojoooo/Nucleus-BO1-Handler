// Options shown in Nucleus. Keep existing keys and choice values for saved profiles.
var noYes = ["No", "Yes"];
var offOn = ["Off", "On"];
var botCounts = ["Default", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lanHostSuffixes = ["-"];
for (var suffix = 0; suffix <= 200; suffix++) {
  lanHostSuffixes.push(String(suffix));
}

// Nucleus renders options in order. These single-choice rows serve as headings.
function addOptionHeading(title, key) {
  Game.AddOption("──── " + title + " ────", "", key, ["───"]);
}

Game.AddOption("Game Mode", "Play Zombies with up to 4 players or Multiplayer with up to 8.", "mode", ["Zombies", "Multiplayer"]);

addOptionHeading("VIDEO", "heading_video");
Game.AddOption("Graphics Preset", "Default keeps your current graphics settings. Med also keeps them in Multiplayer.", "Graphics", ["Default", "Low", "Med", "High", "Extra"]);
Game.AddOption("FPS Limit", "Set the maximum frame rate. Choose 0 for no limit.", "FPS", ["60", "30", "90", "120", "144", "240", "0"]);
Game.AddOption("FPS Counter", "Show the current frame rate in game.", "cg_drawfps", ["Disabled", "Enabled"]);
Game.AddOption("VSync", "Sync the frame rate with your display to reduce screen tearing.", "VSync", offOn);
Game.AddOption("Field of View", "Higher values widen your view. Choose - to keep the current setting.", "FOV", ["-", "1", "1.1", "1.2", "1.3", "1.4", "1.5"]);

addOptionHeading("ZOMBIES", "heading_zombies");
Game.AddOption("Zombies Players", "Auto uses your Nucleus layout. For a LAN match, the host can select the total across both PCs.", "Players", ["Auto", "1", "2", "3", "4"]);
Game.AddOption("Zombies Mods", "Enable custom mods for Zombies.", "mods", noYes);
Game.AddOption("Nazi Zombies", "Unlock Nazi Zombies and campaign completion rewards in Zombies mode.", "UnlockNaziZombies", noYes);

addOptionHeading("MULTIPLAYER", "heading_multiplayer");
Game.AddOption("Friendly Bots", "Set the number of allied bots in Combat Training. Default keeps the current count.", "Friendly_Bots", botCounts);
Game.AddOption("Enemy Bots", "Set the number of opposing bots in Combat Training. Default keeps the current count.", "Enemy_Bots", botCounts);
Game.AddOption("Bot Difficulty", "Set bot difficulty in Combat Training. Fu means Veteran. Default keeps the current difficulty.", "Skill", ["Default", "Easy", "Normal", "Hard", "Fu"]);
Game.AddOption("Multiplayer Unlocks", "Unlock all Multiplayer progression rewards. Default keeps your current progress.", "Unlock", ["Default", "Yes"]);

addOptionHeading("OTHER", "heading_other");
Game.AddOption("Controller Vibration", "Enable gamepad vibration during play.", "Gamepad Vibration", offOn);
Game.AddOption("Player 1 Audio", "Choose Yes to hear only Player 1 or No to hear all players.", "Mus", ["Yes", "No"]);
Game.AddOption("LAN Host IP", "On the guest PC, choose the final number of the host's 192.168.1.x address. Use - on the host or when playing on one PC.", "lan", lanHostSuffixes);

// Game registration
Game.SteamID = "42700";
Game.GUID = "Call of Duty Black Ops";
Game.GameName = "Call of Duty Black Ops";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;
Game.Description =
  "For Zombies, have Player 1 open an online Private Match, then press F2 to start it and connect the other players. Use Select + X on Player 1's controller from the map selection screen only.\n\n" +
  "For Multiplayer, have Player 1 start a Combat Training match, then press F2 or Select + X on Player 1's controller to connect the other players.\n\n" +
  "On a guest PC, set LAN Host IP before launch. Once the host match is running and the guest windows are in place, press F2 or Select + X on the guest PC to join.\n\n" +
  "Restart with F3 or Select + Y. Swap bumpers and triggers with F4 or Select + A after the windows are in place. Use Player 1's controller for these shortcuts.\n\n" +
  "When mixing controllers with keyboard and mouse, assign the combined keyboard/mouse icon to one player. Press End to unlock input if you assigned the keyboard and mouse separately.\n\n" +
  "For custom Zombies mods, place them in NucleusCo-op/handlers/Call of Duty Black Ops/mods and set Zombies Mods to Yes. When prompted, load the mod in the current game window, then click OK.";

// Instanced files and bootstrapper launch
var bootstrapperExe = "plutonium-bootstrapper-win32.exe";
Game.ExecutableName = "BlackOps.exe";
Game.LauncherExe = "Plutonium\\bin\\" + bootstrapperExe;
Game.LauncherExeIgnoreFileCheck = true;
Game.BinariesFolder = "";
Game.FileSymlinkExclusions = ["d3d11.dll", "Xinputplus.ini", "xinput1_4.dll", "xinput1_3.dll"];
Game.FileSymlinkCopyInstead = ["localization.txt", "cod.bmp", "codlogo.bmp", "version.inf", "BlackOpsMP.exe", "binkw32.dll", "imgui.ini", "installscript.vdf"];
Game.DirExclusions = ["players", "mods"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
Game.CMDLaunch = true;
Game.CMDStartArgsInside = true;
Game.CMDBatchBefore = ['cd /d "%NUCLEUS_INST_EXE_FOLDER%\\.."'];
// Plutonium needs a console of its own for the game and the LAN hotkeys.
var launchCommands = [];
for (var playerIndex = 0; playerIndex < Game.MaxPlayers; playerIndex++) {
  launchCommands.push('start ""');
}
Game.CMDOptions = launchCommands;
Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
var sequentialGrabDelay = 20;
Game.PauseBetweenProcessGrab = sequentialGrabDelay;
Game.PauseBetweenStarts = 0;
Game.KillProcessesOnClose = ['connect', 'cmd', 'AutoIt3', 'JoyToKey'];

// Window management
Game.Hook.ForceFocus = true;
Game.HasDynamicWindowTitle = true;
Game.HookFocus = false;
Game.ResetWindows = true;
Game.SetWindowHookStart = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = true;
Game.SetForegroundWindowElsewhere = false;
Game.NotTopMost = false;
Game.SetTopMostAtEnd = true;

// Input defaults
Game.SupportsKeyboard = true;
Game.SupportsMultipleKeyboardsAndMice = true;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
// Install controller hooks after Plutonium has initialized its renderer.
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 50;
// Repeated WM_ACTIVATE messages clear held buttons in T5.
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.InjectHookXinput = false;

var nucleusCoop = importNamespace("Nucleus.Gaming.Coop");
var protoInputLauncher = importNamespace("Nucleus.Gaming.Coop.ProtoInput").ProtoInputLauncher;
var parallelSetup;

// Nucleus runs Play once for each player.
Game.Play = function() {
  var automationFolder = Context.ScriptFolder + "\\automation";
  var options = Context.Options;
  var mode = options["mode"];
  if (Context.PlayerID == 0) {
    Game.LockInputAtStart = false;
    for (var i = 0; i < PlayerList.Count; i++) {
      if (usesRawInput(PlayerList[i])) {
        Game.LockInputAtStart = true;
        break;
      }
    }
    // Keep controller input active across real focus changes. Combined keyboard
    // input follows Windows focus, and raw devices use ProtoInput's input lock.
    Game.PreventWindowDeactivation = PlayerList.Count > 1 && !Game.LockInputAtStart;
    parallelSetup = canLaunchTogether(mode, options) ? {
      nucleusFolder: Context.NucleusFolder,
      executables: [],
    } : null;
    Game.ProcessChangesAtEnd = parallelSetup !== null;
    Game.PromptBetweenInstances = false;
  }
  var usesController = configurePlayerInput(Player);
  if (!parallelSetup) {
    Context.RunAdditionalFiles([automationFolder + "\\startup\\name-and-hide-player-consoles.bat"], false, 10);
  }
  Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F4-swap-bumpers-and-triggers.bat"], false, 10);
  Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F3-restart-match.bat"], false, 10);

  var instance = preparePlutoniumInstance();
  Game.ExecutableName = bootstrapperExe;

  var settings = readLaunchSettings(options, usesController);
  queueLanAutomation(automationFolder, mode, options["lan"]);

  if (mode == "Zombies") {
    configureZombies(instance, options, settings, automationFolder);
  } else if (mode == "Multiplayer") {
    configureMultiplayer(instance, options, settings);
  }

  applySavedControllerLayout(instance, options["pscontrollers"]);
  var executable = instance.plutoniumPath + "\\bin\\" + bootstrapperExe;
  if (parallelSetup) {
    parallelSetup.executables.push(executable.toLowerCase());
    System.IO.File.Delete(inputStartupFile(executable, "ready"));
    System.IO.File.Delete(inputStartupFile(executable, "window"));
    Context.StartProcess(automationFolder + "\\AutoIt3.exe",
      '"' + automationFolder + '\\startup\\defer-game-window-input.au3" "' + executable + '" ' + (Context.PlayerID + 1), false);
  }
  Context.EditRegKey(
    "HKEY_CURRENT_USER",
    "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers",
    executable,
    "HIGHDPIAWARE",
    Nucleus.RegType.String
  );

  if (mode == "Zombies" && options["mods"] == "Yes") {
    prepareZombiesMods(instance);
  }
};

function canLaunchTogether(mode, options) {
  // These layouts need the normal launch path for mod prompts, input locking,
  // or Nucleus's per-player audio and processor settings.
  var profile = nucleusCoop.GameProfile;
  if (PlayerList.Count < 2 || Game.PauseBetweenProcessGrab != sequentialGrabDelay || Game.LockInputAtStart ||
      (mode == "Zombies" && options["mods"] == "Yes")) {
    return false;
  }
  if (profile.AudioCustomSettings) {
    for (var i = 0; i < PlayerList.Count; i++) {
      var audioKey = "AudioInstance" + (i + 1);
      if (profile.AudioInstances.ContainsKey(audioKey) && profile.AudioInstances[audioKey] != "Default") {
        return false;
      }
    }
  }
  for (var i = 0; i < profile.ProfilePlayersList.Count; i++) {
    var player = profile.ProfilePlayersList[i];
    if ((player.PriorityClass && player.PriorityClass != "Normal") ||
        (player.IdealProcessor && player.IdealProcessor != "*") || player.Affinity) {
      return false;
    }
  }
  return true;
}

// Window focus and input
function usesRawInput(player) {
  return player.IsRawKeyboard || player.IsRawMouse;
}

function usesControllerInput(player) {
  return !player.IsKeyboardPlayer && !usesRawInput(player);
}

var windowApi = importNamespace("Nucleus.Gaming.Windows.Interop");
var windowMessages = importNamespace("Win32");
var gameWindows = importNamespace("Nucleus.Gaming.Tools.GlobalWindowMethods").GlobalWindowMethods;
Game.OnFinishedSetup = function() {
  if (parallelSetup) {
    finishParallelSetup();
  }
  var controllerWindows = [];
  var keyboardWindow = null;
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    if (!usesControllerInput(player) && player.ProtoInputInstanceHandle) {
      // The frontend still reads buttons even with gpad_enabled set to 0.
      var inputHandle = player.ProtoInputInstanceHandle;
      ProtoInput.SetControllerIndex(inputHandle, 0, 0, 0, 0);
      ProtoInput.InstallHook(inputHandle, ProtoInput.Values.XinputHookID);
    }
    if (usesRawInput(player)) {
      continue;
    }
    var windowHandle = parallelSetup ? restoreInputWindow(player, i) : player.ProcessData.HWnd.NativePtr;
    if (player.IsKeyboardPlayer) {
      keyboardWindow = windowHandle;
    } else {
      controllerWindows.push(windowHandle);
    }
  }

  if (keyboardWindow !== null) {
    // Only the combined keyboard/mouse window needs real mouse activation.
    for (var i = 0; i < controllerWindows.length; i++) {
      var controllerWindow = controllerWindows[i];
      var style = windowApi.User32Interop.GetWindowLong(controllerWindow, -20); // GWL_EXSTYLE
      windowApi.User32Interop.SetWindowLong(controllerWindow, -20, style | 0x08000000); // WS_EX_NOACTIVATE
    }
    windowApi.User32Interop.SetForegroundWindow(keyboardWindow);
  }

  if (controllerWindows.length > 0) {
    // Let Windows finish changing foreground windows before activating controller input.
    System.Threading.Thread.Sleep(500);
    for (var i = 0; i < controllerWindows.length; i++) {
      windowMessages.Functions.PostMessage(controllerWindows[i], 0x0006, 2, 0); // WM_ACTIVATE, WA_CLICKACTIVE
    }
  }
};

function inputStartupFile(executable, name) {
  return System.IO.Path.GetDirectoryName(executable) + "\\nucleus-input-" + name;
}

function restoreInputWindow(player, index) {
  var executable = parallelSetup.executables[index];
  System.IO.File.WriteAllText(inputStartupFile(executable, "ready"), "");
  var windowFile = inputStartupFile(executable, "window");
  if (!System.IO.File.Exists(windowFile)) {
    return gameWindows.WaitForProcWindowHandleNotZero(player.ProcessData.Process);
  }
  // A minimized game can leave the console as the process's reported main window.
  var handle = new System.IntPtr(Number(System.IO.File.ReadAllText(windowFile)));
  gameWindows.EnableWindow(handle, true);
  gameWindows.ShowWindow(handle, 9); // SW_RESTORE
  var bounds = player.MonitorBounds;
  windowApi.User32Interop.SetWindowPos(handle, System.IntPtr.Zero, bounds.X, bounds.Y, 0, 0, 0x0015);
  return handle;
}

function finishParallelSetup() {
  // Nucleus pairs the CMD launches by process start time. Check the executable
  // paths before assigning input or naming any consoles.
  var pids = [];
  for (var i = 0; i < PlayerList.Count; i++) {
    var process = PlayerList[i].ProcessData.Process;
    if (process.MainModule.FileName.toLowerCase() != parallelSetup.executables[i]) {
      throw new Error("Nucleus attached the wrong Plutonium process for player " + (i + 1));
    }
    pids.push(process.Id);
  }

  // ProcessChangesAtEnd handles window setup, but skips runtime ProtoInput.
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    configurePlayerInput(player);
    protoInputLauncher.InjectRuntime(true, false, false, pids[i], parallelSetup.nucleusFolder,
      i + 1, Game, player, -1, -1, player.GamepadId + 1, 0, 0, 0);
  }
}

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    if (!usesRawInput(player) || !player.ProtoInputInstanceHandle) {
      continue;
    }
    var handle = player.ProtoInputInstanceHandle;
    ProtoInput.InstallHook(handle, ProtoInput.Values.FocusHooksHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.InstallHook(handle, ProtoInput.Values.GetKeyboardStateHookID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.EnableMessageFilter(handle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.SetRawInputBypass(handle, false);
    ProtoInput.SetDrawFakeCursor(handle, player.IsRawMouse);
    ProtoInput.StartFocusMessageLoop(handle, 50, true, true, true, true, false);
  }
};

Game.ProtoInput.OnInputUnlocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    if (!usesRawInput(player) || !player.ProtoInputInstanceHandle) {
      continue;
    }
    var handle = player.ProtoInputInstanceHandle;
    ProtoInput.StopFocusMessageLoop(handle);
    ProtoInput.SetRawInputBypass(handle, true);
    ProtoInput.SetDrawFakeCursor(handle, false);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.DisableMessageFilter(handle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.FocusHooksHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.UninstallHook(handle, ProtoInput.Values.GetKeyboardStateHookID);
  }
};

function configurePlayerInput(player) {
  // Disable legacy Nucleus input hooks. ProtoInput handles input below.
  Game.HookSetCursorPos = false;
  Game.HookGetCursorPos = false;
  Game.HookGetKeyState = false;
  Game.HookGetAsyncKeyState = false;
  Game.HookGetKeyboardState = false;
  Game.HookFilterRawInput = false;
  Game.HookFilterMouseMessages = false;
  Game.HookUseLegacyInput = false;
  Game.HookDontUpdateLegacyInMouseMsg = false;
  Game.HookMouseVisibility = false;
  Game.SendNormalMouseInput = false;
  Game.SendNormalKeyboardInput = false;
  Game.SendScrollWheel = false;
  Game.ForwardRawKeyboardInput = false;
  Game.ForwardRawMouseInput = false;
  Game.DrawFakeMouseCursor = false;
  var rawInput = usesRawInput(player);
  var usesController = usesControllerInput(player);

  // Controllers get a focus loop without repeated WM_ACTIVATE messages.
  Game.ProtoInput.FocusHooks = usesController;
  Game.ProtoInput.EnableFocusMessageLoop = usesController;
  Game.ProtoInput.GetCursorPosHook = usesController;
  Game.ProtoInput.SetCursorPosHook = usesController;
  Game.ProtoInput.GetKeyStateHook = usesController;
  Game.ProtoInput.GetAsyncKeyStateHook = usesController;
  Game.ProtoInput.GetKeyboardStateHook = usesController;
  Game.ProtoInput.RawInputFilter = usesController;
  Game.ProtoInput.KeyboardButtonFilter = usesController;
  Game.ProtoInput.MouseButtonFilter = usesController;
  Game.ProtoInput.MouseWheelFilter = usesController;
  Game.ProtoInput.WindowActivateFilter = usesController;
  Game.ProtoInput.WindowActvateAppFilter = usesController;
  Game.ProtoInput.BlockedMessages = usesController ? [0x0008] : []; // WM_KILLFOCUS
  Game.ProtoInput.XinputHook = usesController;

  // Combined keyboard/mouse uses foreground input. Individual devices use raw input.
  Game.ProtoInput.MessageFilterHook = usesController || rawInput;
  Game.ProtoInput.ClipCursorHook = usesController || rawInput;
  Game.ProtoInput.ClipCursorHookCreatesFakeClip = rawInput;
  Game.ProtoInput.RegisterRawInputHook = rawInput;
  Game.ProtoInput.GetRawInputDataHook = rawInput;
  Game.ProtoInput.SendKeyboardButtonMessages = rawInput;
  Game.ProtoInput.SendMouseMovementMessages = rawInput;
  Game.ProtoInput.SendMouseButtonMessages = rawInput;
  Game.ProtoInput.SendMouseWheelMessages = rawInput;
  Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = Game.LockInputAtStart;
  Game.LockInputSuspendsExplorer = false;
  Game.LockInputToggleKey = 0x23; // End
  return usesController;
}

// Bundled Plutonium runtime and first-run files
function preparePlutoniumInstance() {
  var plutoniumSource = System.IO.Path.Combine(Game.Folder, "Plutonium");
  var gameFolder = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
  var plutoniumPath = System.IO.Path.Combine(gameFolder, "Plutonium");
  var runtimeFolders = [
    "bin",
    "games",
    "storage\\demonware\\18301\\pub",
    "storage\\t5\\plutonium",
    "storage\\t5\\raw\\scripts\\mp",
    "storage\\t5\\raw\\scripts\\sp",
    "storage\\t5\\zone",
  ];

  // Refresh the bundled runtime in retained instance folders.
  for (var i = 0; i < runtimeFolders.length; i++) {
    var sourceFolder = System.IO.Path.Combine(plutoniumSource, runtimeFolders[i]);
    var targetFolder = System.IO.Path.Combine(plutoniumPath, runtimeFolders[i]);
    System.IO.Directory.CreateDirectory(targetFolder);
    var runtimeFiles = System.IO.Directory.GetFiles(sourceFolder);
    for (var j = 0; j < runtimeFiles.length; j++) {
      var targetFile = System.IO.Path.Combine(targetFolder, System.IO.Path.GetFileName(runtimeFiles[j]));
      System.IO.File.Copy(runtimeFiles[j], targetFile, true);
    }
  }

  var obsoleteFiles = [
    "launcher.bat",
    "d3d11.dll",
    "winject32.exe",
    "bin\\AppCore.dll",
    "bin\\Ultralight.dll",
    "bin\\UltralightCore.dll",
    "bin\\WebCore.dll",
    "bin\\games\\t5mp.exe",
    "bin\\games\\t5sp.exe",
    "storage\\t5\\main\\iw_42.iwd",
    "storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc",
    "storage\\t5\\zone\\frontend_patch.ff",
  ];
  for (var i = 0; i < obsoleteFiles.length; i++) {
    var obsoleteFile = System.IO.Path.Combine(plutoniumPath, obsoleteFiles[i]);
    if (System.IO.File.Exists(obsoleteFile)) {
      System.IO.File.Delete(obsoleteFile);
    }
  }

  var revisionFile = System.IO.Path.Combine(plutoniumPath, "info.json");
  System.IO.File.Copy(System.IO.Path.Combine(plutoniumSource, "info.json"), revisionFile, true);
  var revision = JSON.parse(System.IO.File.ReadAllText(revisionFile)).revision;

  var playersPath = plutoniumPath + "\\storage\\t5\\players";
  var botPlayersPath = playersPath + "\\mods\\mp_bots";
  var instance = {
    gameFolder: gameFolder,
    plutoniumPath: plutoniumPath,
    revision: revision,
    playersPath: playersPath,
    botPlayersPath: botPlayersPath,
    zombiesConfig: playersPath + "\\config.cfg",
    multiplayerConfig: playersPath + "\\config_mp.cfg",
    botConfig: botPlayersPath + "\\config_mp.cfg",
  };

  // Seed missing files so retained player settings survive a new launch.
  var instanceSeeds = [
    ["mods\\mp_bots\\mod.ff", plutoniumPath + "\\storage\\t5\\mods\\mp_bots\\mod.ff"],
    ["mods\\mp_bots\\mp_bots.iwd", plutoniumPath + "\\storage\\t5\\mods\\mp_bots\\mp_bots.iwd"],
    ["game-config-defaults\\config.cfg", instance.zombiesConfig],
    ["game-config-defaults\\config_mp.cfg", instance.multiplayerConfig],
    ["game-config-defaults\\config_mp.cfg", instance.botConfig],
  ];
  for (var i = 0; i < instanceSeeds.length; i++) {
    var seed = instanceSeeds[i];
    var seedTarget = seed[1];
    if (!System.IO.File.Exists(seedTarget)) {
      System.IO.Directory.CreateDirectory(System.IO.Path.GetDirectoryName(seedTarget));
      System.IO.File.Copy(System.IO.Path.Combine(Game.Folder, seed[0]), seedTarget, false);
    }
  }
  return instance;
}

// Launch arguments and mode-specific setup
function optionIsOn(value) {
  return value == "On" || value == "Yes" || value == "1";
}

function readLaunchSettings(options, usesController) {
  var vsync = options["VSync"] || options["vsync"];
  var rumble = options["Gamepad Vibration"] || options["Vibration"];
  var drawFps = options["cg_drawfps"] || options["Draw FPS"] || options["DrawFPS"];

  return {
    fps: options["FPS"] || "60",
    vsync: optionIsOn(vsync) ? "1" : "0",
    rumble: optionIsOn(rumble) ? "1" : "0",
    drawFps: (optionIsOn(drawFps) || drawFps == "Enabled" || drawFps == "Simple") ? "Simple" : "Off",
    gamepad: usesController ? "1" : "0",
    mouse: usesController ? "0" : "1",
    muteAudio: Context.PlayerID > 0 && options["Mus"] != "No",
  };
}

function queueLanAutomation(automationFolder, mode, lan) {
  if (lan == "-") {
    var hostLauncher = mode == "Zombies" ? "F2-host-zombies-start-match.bat" : "F2-host-multiplayer-connect-local-players.bat";
    Context.RunAdditionalFiles([automationFolder + "\\lan\\" + hostLauncher], false, 10);
  } else if (Context.PlayerID == 0 && /^\d{1,3}$/.test(String(lan))) {
    Context.StartProcess(automationFolder + "\\lan\\F2-guest-connect-to-lan-host.bat", "192.168.1." + lan, false);
  }
}

function setLaunchArguments(gameType, modeArgs, instance, settings) {
  // Escape the nickname and game path for Nucleus's CMD launcher.
  var nickname = Context.Nickname.replace(/["\r\n]/g, "").replace(/%/g, "%%");
  var gamePath = System.IO.Path.GetDirectoryName(instance.plutoniumPath).replace(/%/g, "%%");
  var audioArgs = settings.muteAudio ? " +set snd_menu_master 0" : "";
  // Keep player 1 on the default LAN port when instances bind out of order.
  var portArgs = parallelSetup ? " +set net_port " + (28960 + Context.PlayerID) : "";
  Context.StartArguments = gameType + ' "' + gamePath + '" -name "' + nickname + '" -nocurses -lan -offline' +
    modeArgs + portArgs + " +set com_startupIntroPlayed 1 +set com_introPlayed 1" +
    " +set gpad_enabled " + settings.gamepad + " +set in_mouse " + settings.mouse + audioArgs +
    ' +set com_maxfps "' + settings.fps + '" +set r_vsync "' + settings.vsync +
    '" +set gpad_rumble "' + settings.rumble + '" +set cg_drawfps "' + settings.drawFps + '"';
}

function useNativeBorderlessWindows() {
  Game.DontResize = true;
  Game.DontRemoveBorders = true;
  Game.DontReposition = false;
  // Parallel setup positions the renderer when it restores the window.
  Game.ResetWindows = !parallelSetup || nucleusCoop.GameProfile.EnableWindowsMerger;
}

function configureZombies(instance, options, settings, automationFolder) {
  Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F10-toggle-plutonium-overlay.bat"], false, 10);
  Game.Hook.ForceFocusWindowName = "Plutonium T5 Co-Op (r" + instance.revision + ") (LAN)";

  var unlockZombies = options["UnlockNaziZombies"] == "Yes";
  var zombiesDvars = {
    ui_sp_unlock: unlockZombies ? "1" : "0",
    zombiefive_discovered: "1",
    zombietron_discovered: "1",
    mis_01_unlock: unlockZombies ? "21" : "0",
    ui_showdlcmaps: "1",
    ui_browserhidedlc: "0",
  };
  var modeArgs = ' +set sp_minplayers "' + zombiesPlayerCount(options["Players"]) + '"' +
    " +set ui_showDLCMaps 1 +set ui_browserHideDlc 0 +set ui_sp_unlock " + zombiesDvars.ui_sp_unlock +
    " +set zombiefive_discovered 1 +set zombietron_discovered 1 +set mis_01_unlock " + zombiesDvars.mis_01_unlock;
  setLaunchArguments("t5sp", modeArgs, instance, settings);

  var configPath = instance.zombiesConfig;
  applyGraphicsPreset([configPath], options["Graphics"], options["FPS"], settings.vsync);
  applyFov([configPath], options["FOV"]);
  useNativeBorderlessWindows();
  applyBaseConfigOptions(configPath, options["FPS"], settings);
  setPlayerConfig(configPath, settings, zombiesDvars);
}

function zombiesPlayerCount(selection) {
  if (/^[1-4]$/.test(String(selection))) {
    return Number(selection);
  }

  var layoutPlayers = Context.NumberOfPlayers;
  return layoutPlayers > 0 ? Math.min(layoutPlayers, 4) : 2;
}

function configureMultiplayer(instance, options, settings) {
  var multiplayerDlcDvars = {
    playlist_excludedlc: "0",
    playlist_excludedlc2: "0",
    playlist_excludedlc3: "0",
    playlist_excludedlc4: "0",
  };
  replaceConfigLines(instance.botConfig, [
    'seta com_first_time_pc "0"',
    'seta sd_xa2_device_guid ""',
  ].concat(performanceConfigLines(settings.fps, settings)));
  setPlayerConfig(instance.botConfig, settings, multiplayerDlcDvars);

  if (options["Unlock"] == "Yes") {
    var statFiles = ["globalstats", "mpstats", "mpstatsBasicTraining"];
    for (var i = 0; i < statFiles.length; i++) {
      var statSource = System.IO.Path.Combine(Game.Folder, "multiplayer-unlock-all-stats\\" + statFiles[i]);
      System.IO.File.Copy(statSource, System.IO.Path.Combine(instance.botPlayersPath, statFiles[i]), true);
      System.IO.File.Copy(statSource, System.IO.Path.Combine(instance.playersPath, statFiles[i]), true);
    }
  }

  Game.Hook.ForceFocusWindowName = "Plutonium T5 Multiplayer (r" + instance.revision + ") (LAN)";
  var modeArgs = " +set fs_game mods/mp_bots" +
    " +set playlist_excludeDlc 0 +set playlist_excludeDlc2 0 +set playlist_excludeDlc3 0 +set playlist_excludeDlc4 0";
  setLaunchArguments("t5mp", modeArgs, instance, settings);

  Game.PromptProcessChangesAtEnd = false;

  var configPaths = [instance.multiplayerConfig, instance.botConfig];
  applyBotOption(configPaths, "bot_friends", options["Friendly_Bots"]);
  applyBotOption(configPaths, "bot_enemies", options["Enemy_Bots"]);
  applyBotOption(configPaths, "bot_difficulty", options["Skill"]);

  // The existing Multiplayer handler recognizes the medium preset as "Mid".
  var graphics = options["Graphics"];
  if (graphics == "Mid") {
    graphics = "Med";
  } else if (graphics == "Med") {
    graphics = "Default";
  }
  applyGraphicsPreset(configPaths, graphics, options["FPS"], settings.vsync);
  applyFov(configPaths, options["FOV"]);
  useNativeBorderlessWindows();
  applyBaseConfigOptions(instance.multiplayerConfig, options["FPS"], settings);
  setPlayerConfig(instance.multiplayerConfig, settings, multiplayerDlcDvars);
}

// Player config edits
function replaceConfigLines(path, lines, encoding) {
  var replacements = [];
  for (var i = 0; i < lines.length; i++) {
    // Look up the command and setting name with Nucleus's existing prefix match.
    var prefix = lines[i].split(" ", 2).join(" ");
    var lineNumber = Context.FindLineNumberInTextFile(path, prefix, Nucleus.SearchType.StartsWith);
    replacements.push(lineNumber + "|" + lines[i]);
  }
  if (encoding) {
    Context.ReplaceLinesInTextFile(path, replacements, encoding);
  } else {
    Context.ReplaceLinesInTextFile(path, replacements);
  }
}

function performanceConfigLines(fps, settings) {
  return [
    'seta com_maxfps "' + fps + '"',
    'seta r_vsync "' + settings.vsync + '"',
    'seta gpad_rumble "' + settings.rumble + '"',
    'seta cg_drawFPS "' + settings.drawFps + '"',
  ];
}

function applyBaseConfigOptions(path, fps, settings) {
  var lines = ['seta name "' + Context.Nickname + '"'];
  replaceConfigLines(path, lines.concat(performanceConfigLines(fps, settings), ['seta r_aspectRatio "auto"']));
}

var graphicsPresetNames = ["Low", "Med", "High", "Extra"];
var graphicsPresetDvars = {
  // Each column is a preset from graphicsPresetNames.
  r_dof_enable:    [0, 0, 1, 1],
  r_aaSamples:     [0, 0, 1, 4],
  sm_enable:       [0, 0, 1, 1],
  ragdoll_enable:  [0, 0, 1, 1],
  r_picmip:        [3, 1, 1, 0],
  r_picmip_bump:   [3, 1, 1, 0],
  r_picmip_manual: [1, 1, 1, 1],
  r_picmip_spec:   [3, 1, 1, 0],
  r_specular:      [0, 1, 1, 1],
  r_zFeather:      [0, 1, 1, 1],
  sm_maxLights:    [4, 4, 4, 4],
};

function applyGraphicsPreset(paths, name, fps, vsync) {
  var presetColumn = graphicsPresetNames.indexOf(String(name));
  if (presetColumn == -1) {
    return;
  }

  var lines = ['seta com_maxfps "' + fps + '"', 'seta r_vsync "' + vsync + '"'];
  for (var dvar in graphicsPresetDvars) {
    lines.push("seta " + dvar + ' "' + graphicsPresetDvars[dvar][presetColumn] + '"');
  }
  for (var i = 0; i < paths.length; i++) {
    replaceConfigLines(paths[i], lines);
  }
}

function applyFov(paths, fov) {
  if (fov >= "0") {
    for (var i = 0; i < paths.length; i++) {
      replaceConfigLines(paths[i], ['seta cg_fovScale "' + fov + '"'], "utf-8");
    }
  }
}

function applyBotOption(paths, dvar, value) {
  if (value != "Default") {
    for (var i = 0; i < paths.length; i++) {
      replaceConfigLines(paths[i], ["seta " + dvar + " " + value]);
    }
  }
}

// The F4 hotkey handles new layouts. Older profiles can still carry pscontrollers.
function applySavedControllerLayout(instance, layout) {
  var swap = layout == "Yes";
  if (!swap && layout != "No") {
    return;
  }

  var lines = [
    'bind BUTTON_LSHLDR "' + (swap ? "+speed_throw" : "+smoke") + '"',
    'bind BUTTON_RSHLDR "' + (swap ? "+attack" : "+frag") + '"',
    'bind BUTTON_LTRIG "' + (swap ? "+smoke" : "+speed_throw") + '"',
    'bind BUTTON_RTRIG "' + (swap ? "+frag" : "+attack") + '"',
    'seta gpad_buttonsConfig "' + (swap ? "buttons_default_alt" : "buttons_default") + '"',
  ];
  replaceConfigLines(instance.multiplayerConfig, lines);
  replaceConfigLines(instance.botConfig, lines);
  replaceConfigLines(instance.zombiesConfig, lines);
}

// Ensure window, input, audio, and mode settings exist even in retained configs.
function setPlayerConfig(path, settings, modeDvars) {
  var dvars = {
    r_fullscreen: "0",
    r_noborder: "1",
    r_custommode: Context.Width + "x" + Context.Height,
    vid_xpos: Context.PosX,
    vid_ypos: Context.PosY,
    gpad_enabled: settings.gamepad,
    in_mouse: settings.mouse,
    snd_menu_music: settings.muteAudio ? "0" : "1",
    snd_menu_voice: settings.muteAudio ? "0" : "1",
  };
  for (var modeDvar in modeDvars) {
    dvars[modeDvar] = modeDvars[modeDvar];
  }
  var config = System.IO.File.ReadAllLines(path);
  if (settings.muteAudio) {
    dvars.snd_menu_master = "0";
  } else if (Context.PlayerID > 0) {
    // Restore the master volume if this instance was previously muted.
    for (var i = 0; i < config.length; i++) {
      if (/^\s*seta\s+snd_menu_master\s+"0(?:\.0+)?"\s*$/i.test(config[i])) {
        dvars.snd_menu_master = "1";
        break;
      }
    }
  }
  var lines = [];
  var written = {};
  for (var i = 0; i < config.length; i++) {
    var match = /^\s*seta\s+(\S+)/i.exec(config[i]);
    var name = match && match[1].toLowerCase();
    if (!name || !Object.prototype.hasOwnProperty.call(dvars, name)) {
      lines.push(config[i]);
    } else if (!written[name]) {
      lines.push('seta ' + name + ' "' + dvars[name] + '"');
      written[name] = true;
    }
  }
  for (var dvar in dvars) {
    if (!written[dvar]) {
      lines.push('seta ' + dvar + ' "' + dvars[dvar] + '"');
    }
  }
  Context.WriteTextFile(path, lines);
}

// Optional Zombies mods
function prepareZombiesMods(instance) {
  var deleteScript = instance.playersPath + "\\mods\\delete.bat";
  Context.WriteTextFile(deleteScript, [
    '@echo off',
    'set "FILENAME=config.cfg"',
    'set "STARTDIR=%cd%"  REM You can change this to a fixed path if needed, e.g., C:\Users\Me\Documents',
    'echo Deleting all instances of "%FILENAME%" starting from "%STARTDIR%"...',
    'for /r "%STARTDIR%" %%f in (%FILENAME%) do (',
    '    echo Deleting "%%f"',
    '    del "%%f"',
    ')',
    'echo Done',
  ]);
  Context.RunAdditionalFiles(["all|" + deleteScript], false, 10);

  var linkScript = instance.gameFolder + "\\mods.ps1";
  Context.WriteTextFile(linkScript, [
    "# Elevate to run as Administrator if not already",
    'if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {',
    '    Start-Process -FilePath "powershell.exe" -ArgumentList "-ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs',
    "    exit",
    "}",
    "",
    "# Set source and target directories",
    '$SrcRoot = "' + Context.ScriptFolder + '\\mods\\"',
    '$TargetRoot = "' + instance.plutoniumPath + '\\storage\\t5\\mods\\"',
    "",
    "# Create directory symlinks for all folders in the source",
    "Get-ChildItem -Path $SrcRoot -Directory | ForEach-Object {",
    "    $sourcePath = $_.FullName",
    "    $linkName = Join-Path $TargetRoot $_.Name",
    "    if (-not (Test-Path $linkName)) {",
    '        cmd /c mklink /D "`"$linkName`"" "`"$sourcePath`""',
    "    }",
    "}",
    "",
    "# Create file symlinks for all files in the source",
    "Get-ChildItem -Path $SrcRoot -File | ForEach-Object {",
    "    $sourcePath = $_.FullName",
    "    $linkName = Join-Path $TargetRoot $_.Name",
    "    if (-not (Test-Path $linkName)) {",
    '        cmd /c mklink "`"$linkName`"" "`"$sourcePath`""',
    "    }",
    "}"
  ]);

  var linkLauncher = instance.gameFolder + "\\mods.bat";
  Context.WriteTextFile(linkLauncher, ["@echo off", 'PowerShell -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -File "%~dp0mods.ps1"']);
  Context.RunAdditionalFiles(["all|" + linkLauncher], false, 0, false, false);
  Game.PromptBetweenInstances = true;
}
