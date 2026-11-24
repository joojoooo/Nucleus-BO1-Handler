var answers = ["No", "Yes"];
var answers2 = ["Yes", "No"];
var answers3 = ["No", "720p", "1080p"];
var answers4 = ["Default", "Yes", "No"];
var answers5 = ["60", "75", "90", "120", "144", "165", "200", "240", "45", "30", "0"];
var answers6 = ["Default", "Low", "Med", "High", "Extra"];
var answers7 = ["Zombies", "Multiplayer"];
var answers8 = ["Default", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var answers10 = ["-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200"];
var answers11 = ["-", "1", "1.1", "1.2", "1.3", "1.4", "1.5"];
var answers12 = ["Default", "Yes"];
var answers13 = ["1", "2", "3", "4"];
var answers14 = ["Default", "Easy", "Normal", "Hard", "Fu"];
var answers15 = ["Off", "On"];
var answers16 = ["Disabled", "Enabled"];
Game.AddOption("Select preferred game mode", "", "mode", answers7);
Game.AddOption("Choose your preferred graphic settings", "Default will use the previous or default settings", "Graphics", answers6);
Game.AddOption("Select the number of players (only for Zombies)", "", "Players", answers13);
Game.AddOption("Would you like to use mods (only for Zombies)", "", "mods", answers);
Game.AddOption("Select the number of friendly bots", "Default will use the previous or default settings", "Friendly_Bots", answers8);
Game.AddOption("Select the number of enemy bots", "Default will use the previous or default settings", "Enemy_Bots", answers8);
Game.AddOption("Select the bot skill level", "Default will use the previous or default settings. Fu stands for Veteran.", "Skill", answers14);
Game.AddOption("For LAN and only for Guest PC, select the last digits of the host IP", "", "lan", answers10);
Game.AddOption("Play audio only from the first instance?", "Select No to hear every instance.", "Mus", answers2);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", answers5);
Game.AddOption("VSync", "", "VSync", answers15);
Game.AddOption("Gamepad Vibration", "", "Gamepad Vibration", answers15);
Game.AddOption("Draw FPS", "", "cg_drawfps", answers16);
//Game.AddOption("Swap shoulder and trigger buttons (useful for Playstation controllers)", "Default will use the previous or default settings", "pscontrollers", answers4);
Game.AddOption("Select your preferred FOV scale", "Select the hyphen to load default settings", "FOV", answers11);
Game.AddOption("Would you like to unlock all (only for Multiplayer)", "Default will not make any changes and keep the previous selected settings", "Unlock", answers12);
Game.AddOption("Unlock Nazi Zombies", "Unlocks Nazi Zombies and campaign completion rewards. Default is No.", "UnlockNaziZombies", answers);
Game.FileSymlinkExclusions = ["d3d11.dll", "Xinputplus.ini", "xinput1_4.dll", "xinput1_3.dll"];
Game.FileSymlinkCopyInstead = ["localization.txt", "cod.bmp", "codlogo.bmp", "version.inf", "BlackOpsMP.exe", "binkw32.dll", "imgui.ini", "installscript.vdf"];
Game.DirExclusions = ["players", "mods"];
Game.HandlerInterval = 100; 
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
Game.SupportsKeyboard = true;
Game.ExecutableName = "BlackOps.exe";
Game.LauncherExe = "Plutonium\\bin\\plutonium-bootstrapper-win32.exe";
Game.LauncherExeIgnoreFileCheck = true;
Game.CMDLaunch = true;
Game.CMDStartArgsInside = true;
Game.CMDBatchBefore = ['cd /d "%NUCLEUS_INST_EXE_FOLDER%\\.."'];
Game.BinariesFolder = "";
Game.SteamID = "42700"; 
Game.GUID = "Call of Duty Black Ops"; 
Game.GameName = "Call of Duty Black Ops"; 
Game.MaxPlayersOneMonitor = 8; 
Game.MaxPlayers = 8;
// Plutonium needs a console of its own for the game and the LAN hotkeys.
var launchCommands = [];
for (var player = 0; player < Game.MaxPlayers; player++) {
  launchCommands.push('start ""');
}
Game.CMDOptions = launchCommands;
Game.Hook.ForceFocus = true;
Game.HasDynamicWindowTitle = true;
Game.HookFocus = false;
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
Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 0; 
Game.ResetWindows = true;
Game.SetWindowHookStart = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.SetForegroundWindowElsewhere = false;
Game.NotTopMost = false;
Game.SetTopMostAtEnd = true;
//Game.UseForceBindIP = true;
//Game.ForceBindIPNoDummy = true;
Game.KillProcessesOnClose = ['connect', 'cmd', 'AutoIt3', 'JoyToKey'];
Game.Description =
  "For Zombies (up to 4 players), before launching your instances, select the number of players under Nucleus options, then launch your instances and have the first player setup an online private match. Once ready press F2 or ONLY from the map selection screen, press SELECT+X on the first player's gamepad to launch the match and to automatically connect all instances. Press F3 or SELECT+Y on the first player's gamepad to quickly restart match.\n\nFor a controller and mouse/keyboard, assign the combined keyboard/mouse icon to one window. If you assign individual raw-input devices, press End to release the input lock.\n\nTo play with mods (only for Zombies), place your mods in the mods folder located under NucleusCo-op/handlers/Call of Duty Black Ops/mods. Select Yes under the mod option in Nucleus and launch your instances. When prompted, load the custom Zombie mod in the current instance, then press OK.\n\nFor Multiplayer (up to 8 players), launch your instances, have the first player host and start a combat training match, and then press F2 or SELECT+X on the host's gamepad to have all the other instances connect automatically. To quickly restart match, press F3 or SELECT+Y on the first player's gamepad.\n\nTo swap bumper/trigger buttons (useful for playstation gamepads) press F4 or SELECT+A on the first player's gamepad only once all the instances have finished positioning/resizing or once you're in the match.\n\nTo play over LAN, ONLY the guest PC will need to select the last 1-3 digits of the Host PC's IP address in the launch options, then once all the instances have finished positionin/resizing, press F2 or press the SELECT+X buttons simultaneously on the first player's gamepad to connect all the guest instances to the host PC.\n\nEnjoy this amazing CoD title (the best one in my humble opinion) in all of its glory with friends and family!";

Game.SupportsMultipleKeyboardsAndMice = true;

var windowApi = importNamespace("Nucleus.Gaming.Windows.Interop");
var windowMessages = importNamespace("Win32");
Game.OnFinishedSetup = function() {
  var controllerWindows = [];
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    if (player.IsRawKeyboard || player.IsRawMouse) {
      continue;
    }
    var window = player.ProcessData.HWnd.NativePtr;
    if (player.IsKeyboardPlayer) {
      windowApi.User32Interop.SetForegroundWindow(window);
    } else {
      controllerWindows.push(window);
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
    if ((!player.IsRawKeyboard && !player.IsRawMouse) || !player.ProtoInputInstanceHandle) {
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
    if ((!player.IsRawKeyboard && !player.IsRawMouse) || !player.ProtoInputInstanceHandle) {
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

Game.Play = function() {
  // Deprecated options
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
  var usesRawInput = Player.IsRawKeyboard || Player.IsRawMouse;
  var usesController = !Player.IsKeyboardPlayer && !usesRawInput;
  Game.LockInputAtStart = false;
  for (var i = 0; i < PlayerList.Count; i++) {
    if (PlayerList[i].IsRawKeyboard || PlayerList[i].IsRawMouse) {
      Game.LockInputAtStart = true;
      break;
    }
  }
  Game.ProtoInput.FocusHooks = usesController;
  Game.ProtoInput.EnableFocusMessageLoop = usesController;
  Game.ProtoInput.MessageFilterHook = usesController || usesRawInput;
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
  Game.ProtoInput.ClipCursorHook = usesController || usesRawInput;
  Game.ProtoInput.ClipCursorHookCreatesFakeClip = usesRawInput;
  Game.ProtoInput.BlockedMessages = usesController ? [0x0008] : [];
  Game.ProtoInput.RegisterRawInputHook = usesRawInput;
  Game.ProtoInput.GetRawInputDataHook = usesRawInput;
  Game.ProtoInput.SendKeyboardButtonMessages = usesRawInput;
  Game.ProtoInput.SendMouseMovementMessages = usesRawInput;
  Game.ProtoInput.SendMouseButtonMessages = usesRawInput;
  Game.ProtoInput.SendMouseWheelMessages = usesRawInput;
  Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = Game.LockInputAtStart;
  Game.ProtoInput.XinputHook = usesController;
  Game.LockInputSuspendsExplorer = false;
  Game.LockInputToggleKey = 0x23;


var automationFolder = Context.ScriptFolder + "\\automation";
Context.RunAdditionalFiles([automationFolder + "\\startup\\name-and-hide-player-consoles.bat"], false, 10);
Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F4-swap-bumpers-and-triggers.bat"], false, 10);
Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F3-restart-match.bat"], false, 10);

var plutoniumSource = System.IO.Path.Combine(Game.Folder, "Plutonium");
var plutoniumPath = System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "Plutonium");
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
var plutoniumRevision = JSON.parse(System.IO.File.ReadAllText(revisionFile)).revision;

var instanceSeeds = [
  ["mods\\mp_bots\\mod.ff", "storage\\t5\\mods\\mp_bots\\mod.ff"],
  ["mods\\mp_bots\\mp_bots.iwd", "storage\\t5\\mods\\mp_bots\\mp_bots.iwd"],
  ["game-config-defaults\\config.cfg", "storage\\t5\\players\\config.cfg"],
  ["game-config-defaults\\config_mp.cfg", "storage\\t5\\players\\config_mp.cfg"],
  ["game-config-defaults\\config_mp.cfg", "storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg"],
];
for (var i = 0; i < instanceSeeds.length; i++) {
  var seed = instanceSeeds[i];
  var seedTarget = System.IO.Path.Combine(plutoniumPath, seed[1]);
  if (!System.IO.File.Exists(seedTarget)) {
    System.IO.Directory.CreateDirectory(System.IO.Path.GetDirectoryName(seedTarget));
    System.IO.File.Copy(System.IO.Path.Combine(Game.Folder, seed[0]), seedTarget, false);
  }
}

Game.ExecutableName = "plutonium-bootstrapper-win32.exe";

var mode = Context.Options["mode"];
var unlockNaziZombies = Context.Options["UnlockNaziZombies"];
var spUnlockVal = (unlockNaziZombies == "Yes") ? "1" : "0";
var misUnlockVal = (unlockNaziZombies == "Yes") ? "21" : "0";
var FPS = Context.Options["FPS"];
if (!FPS) {
  FPS = "60";
}
var VSync = Context.Options["VSync"];
if (!VSync) {
  VSync = Context.Options["vsync"];
}
var vsyncVal = (VSync == "On" || VSync == "Yes" || VSync == "1") ? "1" : "0";

var Vibration = Context.Options["Gamepad Vibration"];
if (!Vibration) {
  Vibration = Context.Options["Vibration"];
}
var rumbleVal = (Vibration == "On" || Vibration == "Yes" || Vibration == "1") ? "1" : "0";

var DrawFPS = Context.Options["cg_drawfps"];
if (!DrawFPS) {
  DrawFPS = Context.Options["Draw FPS"];
}
if (!DrawFPS) {
  DrawFPS = Context.Options["DrawFPS"];
}
var isDrawFPS = (DrawFPS == "Enabled" || DrawFPS == "On" || DrawFPS == "Yes" || DrawFPS == "1" || DrawFPS == "Simple");
var drawfpsVal = isDrawFPS ? "Simple" : "Off";
var nickname = Context.Nickname.replace(/["\r\n]/g, "").replace(/%/g, "%%");
var gamePath = System.IO.Path.GetDirectoryName(plutoniumPath).replace(/%/g, "%%");
var commonArgs = ' "' + gamePath + '" -name "' + nickname + '" -nocurses -lan -offline';
var muteAudio = Context.PlayerID > 0 && Context.Options["Mus"] != "No";
var inputArgs = " +set gpad_enabled " + (usesController ? "1" : "0");
var audioArgs = muteAudio ? " +set snd_menu_master 0" : "";
var performanceArgs = ' +set com_maxfps "' + FPS + '" +set r_vsync "' + vsyncVal +
  '" +set gpad_rumble "' + rumbleVal + '" +set cg_drawfps "' + drawfpsVal + '"';

function setPlayerConfig(path, options) {
  var dvars = {
    r_fullscreen: "0",
    r_noborder: "1",
    r_custommode: Context.Width + "x" + Context.Height,
    vid_xpos: Context.PosX,
    vid_ypos: Context.PosY,
    gpad_enabled: usesController ? "1" : "0",
    snd_menu_music: muteAudio ? "0" : "1",
    snd_menu_voice: muteAudio ? "0" : "1",
  };
  for (var name in options) {
    dvars[name] = options[name];
  }
  var config = System.IO.File.ReadAllLines(path);
  if (muteAudio) {
    dvars.snd_menu_master = "0";
  } else if (Context.PlayerID > 0) {
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
  for (var name in dvars) {
    if (!written[name]) {
      lines.push('seta ' + name + ' "' + dvars[name] + '"');
    }
  }
  Context.WriteTextFile(path, lines);
}
var lan = Context.Options["lan"];
if (lan == "-") {
  var hostLauncher = mode == "Zombies" ? "F2-host-zombies-start-match.bat" : "F2-host-multiplayer-connect-local-players.bat";
  Context.RunAdditionalFiles([automationFolder + "\\lan\\" + hostLauncher], false, 10);
} else if (Context.PlayerID == 0 && /^\d{1,3}$/.test(String(lan))) {
  Context.StartProcess(automationFolder + "\\lan\\F2-guest-connect-to-lan-host.bat", "192.168.1." + lan, false);
}

if (mode == "Zombies") {

Context.RunAdditionalFiles([automationFolder + "\\hotkeys\\F10-toggle-plutonium-overlay.bat"], false, 10);

Game.Hook.ForceFocusWindowName = "Plutonium T5 Co-Op (r" + plutoniumRevision + ") (LAN)";

var Players = Context.Options["Players"];

Context.StartArguments = "t5sp" + commonArgs + ' +set sp_minplayers "' + Players + '"' +
  " +set ui_showDLCMaps 1 +set ui_browserHideDlc 0 +set ui_sp_unlock " + spUnlockVal +
  " +set zombiefive_discovered 1 +set zombietron_discovered 1 +set mis_01_unlock " + misUnlockVal +
  inputArgs + audioArgs + performanceArgs;


  var FPS = Context.Options["FPS"];
  var Graphics = Context.Options["Graphics"];
  if (Graphics == "Low") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Med") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "High") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Extra") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
}

var FOV = Context.Options["FOV"];

if (FOV >= "0") {
var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config.cfg';
Context.ReplaceLinesInTextFile(txtPath, [
Context.FindLineNumberInTextFile(txtPath, "seta cg_fovScale", Nucleus.SearchType.StartsWith) + '|seta cg_fovScale "' + FOV + '"',
], 'utf-8');
}

Game.DontResize = true;
Game.DontRemoveBorders = true;
Game.DontReposition = false;
Game.ResetWindows = true;

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta name", Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);
setPlayerConfig(txtPath, {
  ui_sp_unlock: spUnlockVal,
  zombiefive_discovered: "1",
  zombietron_discovered: "1",
  mis_01_unlock: misUnlockVal,
  ui_showdlcmaps: "1",
  ui_browserhidedlc: "0",
});

 
}

var multiplayerDlcDvars = {
  playlist_excludedlc: "0",
  playlist_excludedlc2: "0",
  playlist_excludedlc3: "0",
  playlist_excludedlc4: "0",
};
if (mode == "Multiplayer") {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, 'seta com_first_time_pc', Nucleus.SearchType.StartsWith) + '|seta com_first_time_pc "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta sd_xa2_device_guid', Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
Context.FindLineNumberInTextFile(txtPath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);
setPlayerConfig(txtPath, multiplayerDlcDvars);

var Unlock = Context.Options["Unlock"];
if (Unlock == "Yes") {
  var playersPath = System.IO.Path.Combine(plutoniumPath, "storage\\t5\\players");
  var modPlayersPath = System.IO.Path.Combine(playersPath, "mods\\mp_bots");
  var statFiles = ["globalstats", "mpstats", "mpstatsBasicTraining"];
  for (var i = 0; i < statFiles.length; i++) {
    var statSource = System.IO.Path.Combine(Game.Folder, "multiplayer-unlock-all-stats\\" + statFiles[i]);
    System.IO.File.Copy(statSource, System.IO.Path.Combine(modPlayersPath, statFiles[i]), true);
    System.IO.File.Copy(statSource, System.IO.Path.Combine(playersPath, statFiles[i]), true);
  }
}

Game.Hook.ForceFocusWindowName = "Plutonium T5 Multiplayer (r" + plutoniumRevision + ") (LAN)";

Context.StartArguments = "t5mp" + commonArgs + " +set fs_game mods/mp_bots" +
  " +set playlist_excludeDlc 0 +set playlist_excludeDlc2 0 +set playlist_excludeDlc3 0 +set playlist_excludeDlc4 0" +
  inputArgs + audioArgs + performanceArgs;

Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
Game.PromptProcessChangesAtEnd = false;

Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
Game.PromptProcessChangesAtEnd = false;

var Friendly_Bots = Context.Options["Friendly_Bots"];
var Enemy_Bots = Context.Options["Enemy_Bots"];
var Skill = Context.Options["Skill"];

if (Friendly_Bots == "Default") {
} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_friends", Nucleus.SearchType.StartsWith) + "|seta bot_friends " + Friendly_Bots + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_friends", Nucleus.SearchType.StartsWith) + "|seta bot_friends " + Friendly_Bots + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);
}

if (Enemy_Bots == "Default") {
} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_enemies", Nucleus.SearchType.StartsWith) + "|seta bot_enemies " + Enemy_Bots + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_enemies", Nucleus.SearchType.StartsWith) + "|seta bot_enemies " + Enemy_Bots + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);
}

if (Skill == "Default") {
} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_difficulty", Nucleus.SearchType.StartsWith) + "|seta bot_difficulty " + Skill + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta bot_difficulty", Nucleus.SearchType.StartsWith) + "|seta bot_difficulty " + Skill + "",
];
Context.ReplaceLinesInTextFile(txtPath, dict);
}

  var FPS = Context.Options["FPS"];
  var Graphics = Context.Options["Graphics"];
  if (Graphics == "Low") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Mid") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "High") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Extra") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

}


var FOV = Context.Options["FOV"];

if (FOV >= "0") {
var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config_mp.cfg';
Context.ReplaceLinesInTextFile(txtPath, [
Context.FindLineNumberInTextFile(txtPath, "seta cg_fovScale", Nucleus.SearchType.StartsWith) + '|seta cg_fovScale "' + FOV + '"',
], 'utf-8');

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
Context.ReplaceLinesInTextFile(txtPath, [
Context.FindLineNumberInTextFile(txtPath, "seta cg_fovScale", Nucleus.SearchType.StartsWith) + '|seta cg_fovScale "' + FOV + '"',
], 'utf-8');

}


Game.DontResize = true;
Game.DontRemoveBorders = true;
Game.DontReposition = false;
Game.ResetWindows = true;

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "seta name", Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);
setPlayerConfig(txtPath, multiplayerDlcDvars);
}



  var pscontrollers = Context.Options["pscontrollers"];
  if (pscontrollers == "Default") {
  }
  if (pscontrollers == "No") {

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

  }

  var pscontrollers = Context.Options["pscontrollers"];
  if (pscontrollers == "Yes") {

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default_alt"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default_alt"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LSHLDR "+speed_throw"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RSHLDR", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RSHLDR "+attack"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_LTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_LTRIG "+smoke"',
      Context.FindLineNumberInTextFile(txtPath, "bind BUTTON_RTRIG", Nucleus.SearchType.StartsWith) + '|bind BUTTON_RTRIG "+frag"',
      Context.FindLineNumberInTextFile(txtPath, "seta gpad_buttonsConfig", Nucleus.SearchType.StartsWith) + '|seta gpad_buttonsConfig "buttons_default_alt"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

  }
 
Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers", "" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe", "HIGHDPIAWARE", Nucleus.RegType.String);

if (mode == "Zombies" && Context.Options["mods"] == "Yes") {
var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\delete.bat";
var lines = [
'@echo off',
'set "FILENAME=config.cfg"',
'set "STARTDIR=%cd%"  REM You can change this to a fixed path if needed, e.g., C:\Users\Me\Documents',
'echo Deleting all instances of "%FILENAME%" starting from "%STARTDIR%"...',
'for /r "%STARTDIR%" %%f in (%FILENAME%) do (',
'    echo Deleting "%%f"',
'    del "%%f"',
')',
'echo Done',
];
Context.WriteTextFile(Bat, lines);

Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\delete.bat"], false, 10);

      var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mods.ps1";
      var lines = [
        "# Elevate to run as Administrator if not already",
        'if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {',
        '    Start-Process -FilePath "powershell.exe" -ArgumentList "-ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs',
        "    exit",
        "}",
        "",
        "# Set source and target directories",
        '$SrcRoot = "' + Context.ScriptFolder + '\\mods\\"',
        '$TargetRoot = "' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\mods\\"',
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
      ];
      Context.WriteTextFile(Bat, lines);

      var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mods.bat";
      var lines = ["@echo off", 'PowerShell -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -File "%~dp0mods.ps1"'];
      Context.WriteTextFile(Bat, lines);

Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mods.bat"], false, 0, false, false);

  Game.PromptBetweenInstances = true;
}
}
