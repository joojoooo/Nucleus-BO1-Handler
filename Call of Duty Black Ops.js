// Options shown in Nucleus. Keep the keys and choice order for saved profiles.
var noYes = ["No", "Yes"];
var offOn = ["Off", "On"];
var botCounts = ["Default", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lanHostSuffixes = ["-"];
for (var suffix = 0; suffix <= 200; suffix++) {
  lanHostSuffixes.push(String(suffix));
}

Game.AddOption("Select preferred game mode", "", "mode", ["Zombies", "Multiplayer"]);
Game.AddOption("Choose your preferred graphic settings", "Default will use the previous or default settings", "Graphics", ["Default", "Low", "Med", "High", "Extra"]);
Game.AddOption("Select the number of players (only for Zombies)", "", "Players", ["1", "2", "3", "4"]);
Game.AddOption("Would you like to use mods (only for Zombies)", "", "mods", noYes);
Game.AddOption("Select the number of friendly bots", "Default will use the previous or default settings", "Friendly_Bots", botCounts);
Game.AddOption("Select the number of enemy bots", "Default will use the previous or default settings", "Enemy_Bots", botCounts);
Game.AddOption("Select the bot skill level", "Default will use the previous or default settings. Fu stands for Veteran.", "Skill", ["Default", "Easy", "Normal", "Hard", "Fu"]);
Game.AddOption("For LAN and only for Guest PC, select the last digits of the host IP", "", "lan", lanHostSuffixes);
Game.AddOption("Play audio only from the first instance?", "Select No to hear every instance.", "Mus", ["Yes", "No"]);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", ["60", "75", "90", "120", "144", "165", "200", "240", "45", "30", "0"]);
Game.AddOption("VSync", "", "VSync", offOn);
Game.AddOption("Gamepad Vibration", "", "Gamepad Vibration", offOn);
Game.AddOption("Draw FPS", "", "cg_drawfps", ["Disabled", "Enabled"]);
Game.AddOption("Select your preferred FOV scale", "Select the hyphen to load default settings", "FOV", ["-", "1", "1.1", "1.2", "1.3", "1.4", "1.5"]);
Game.AddOption("Would you like to unlock all (only for Multiplayer)", "Default will not make any changes and keep the previous selected settings", "Unlock", ["Default", "Yes"]);
Game.AddOption("Unlock Nazi Zombies", "Unlocks Nazi Zombies and campaign completion rewards. Default is No.", "UnlockNaziZombies", noYes);

// Game registration
Game.SteamID = "42700";
Game.GUID = "Call of Duty Black Ops";
Game.GameName = "Call of Duty Black Ops";
Game.MaxPlayersOneMonitor = 8;
Game.MaxPlayers = 8;
Game.Description =
  "For Zombies (up to 4 players), before launching your instances, select the number of players under Nucleus options, then launch your instances and have the first player setup an online private match. Once ready press F2 or ONLY from the map selection screen, press SELECT+X on the first player's gamepad to launch the match and to automatically connect all instances. Press F3 or SELECT+Y on the first player's gamepad to quickly restart match.\n\n" +
  "For a controller and mouse/keyboard, assign the combined keyboard/mouse icon to one window. If you assign individual raw-input devices, press End to release the input lock.\n\n" +
  "To play with mods (only for Zombies), place your mods in the mods folder located under NucleusCo-op/handlers/Call of Duty Black Ops/mods. Select Yes under the mod option in Nucleus and launch your instances. When prompted, load the custom Zombie mod in the current instance, then press OK.\n\n" +
  "For Multiplayer (up to 8 players), launch your instances, have the first player host and start a combat training match, and then press F2 or SELECT+X on the host's gamepad to have all the other instances connect automatically. To quickly restart match, press F3 or SELECT+Y on the first player's gamepad.\n\n" +
  "To swap bumper/trigger buttons (useful for playstation gamepads) press F4 or SELECT+A on the first player's gamepad only once all the instances have finished positioning/resizing or once you're in the match.\n\n" +
  "To play over LAN, ONLY the guest PC will need to select the last 1-3 digits of the Host PC's IP address in the launch options, then once all the instances have finished positionin/resizing, press F2 or press the SELECT+X buttons simultaneously on the first player's gamepad to connect all the guest instances to the host PC.\n\n" +
  "Enjoy this amazing CoD title (the best one in my humble opinion) in all of its glory with friends and family!";

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
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 0;
Game.KillProcessesOnClose = ['connect', 'cmd', 'AutoIt3', 'JoyToKey'];

// Window management
Game.Hook.ForceFocus = true;
Game.HasDynamicWindowTitle = true;
Game.HookFocus = false;
Game.ResetWindows = true;
Game.SetWindowHookStart = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
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

// Nucleus runs Play once for each player.
Game.Play = function() {
  var usesController = configurePlayerInput();
  var automationFolder = Context.ScriptFolder + "\\automation";
  Context.RunAdditionalFiles([automationFolder + "\\startup\\name-and-hide-player-consoles.bat"], false, 10);
  Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F4-swap-bumpers-and-triggers.bat"], false, 10);
  Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F3-restart-match.bat"], false, 10);

  var instance = preparePlutoniumInstance();
  Game.ExecutableName = bootstrapperExe;

  var options = Context.Options;
  var mode = options["mode"];
  var settings = readLaunchSettings(options, usesController);
  queueLanAutomation(automationFolder, mode, options["lan"]);

  if (mode == "Zombies") {
    configureZombies(instance, options, settings, automationFolder);
  } else if (mode == "Multiplayer") {
    configureMultiplayer(instance, options, settings);
  }

  applySavedControllerLayout(instance, options["pscontrollers"]);
  Context.EditRegKey(
    "HKEY_CURRENT_USER",
    "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers",
    instance.plutoniumPath + "\\bin\\" + bootstrapperExe,
    "HIGHDPIAWARE",
    Nucleus.RegType.String
  );

  if (mode == "Zombies" && options["mods"] == "Yes") {
    prepareZombiesMods(instance);
  }
};

// Window focus and input
function usesRawInput(player) {
  return player.IsRawKeyboard || player.IsRawMouse;
}

var windowApi = importNamespace("Nucleus.Gaming.Windows.Interop");
var windowMessages = importNamespace("Win32");
Game.OnFinishedSetup = function() {
  var controllerWindows = [];
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    if (usesRawInput(player)) {
      continue;
    }
    var windowHandle = player.ProcessData.HWnd.NativePtr;
    if (player.IsKeyboardPlayer) {
      windowApi.User32Interop.SetForegroundWindow(windowHandle);
    } else {
      controllerWindows.push(windowHandle);
    }
  }

  if (controllerWindows.length > 0) {
    // Let Windows finish changing foreground windows before activating controller input.
    System.Threading.Thread.Sleep(500);
    for (var i = 0; i < controllerWindows.length; i++) {
      windowMessages.Functions.PostMessage(controllerWindows[i], 0x0006, 2, 0); // WM_ACTIVATE, WA_CLICKACTIVE
    }
  }
};

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

function configurePlayerInput() {
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
  var rawInput = usesRawInput(Player);
  var usesController = !Player.IsKeyboardPlayer && !rawInput;
  Game.LockInputAtStart = false;
  for (var i = 0; i < PlayerList.Count; i++) {
    if (usesRawInput(PlayerList[i])) {
      Game.LockInputAtStart = true;
      break;
    }
  }

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
  Context.StartArguments = gameType + ' "' + gamePath + '" -name "' + nickname + '" -nocurses -lan -offline' +
    modeArgs + " +set gpad_enabled " + settings.gamepad + audioArgs +
    ' +set com_maxfps "' + settings.fps + '" +set r_vsync "' + settings.vsync +
    '" +set gpad_rumble "' + settings.rumble + '" +set cg_drawfps "' + settings.drawFps + '"';
}

function useNativeBorderlessWindows() {
  Game.DontResize = true;
  Game.DontRemoveBorders = true;
  Game.DontReposition = false;
  Game.ResetWindows = true;
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
  var modeArgs = ' +set sp_minplayers "' + options["Players"] + '"' +
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

  Game.PromptBetweenInstances = false;
  Game.ProcessChangesAtEnd = false;
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
