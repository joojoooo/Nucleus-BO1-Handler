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
Game.AddOption("Enable music only in the first instance?", "", "Mus", answers2);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", answers5);
Game.AddOption("VSync", "", "VSync", answers15);
Game.AddOption("Gamepad Vibration", "", "Gamepad Vibration", answers15);
Game.AddOption("Draw FPS", "", "cg_drawfps", answers16);
//Game.AddOption("Swap shoulder and trigger buttons (useful for Playstation controllers)", "Default will use the previous or default settings", "pscontrollers", answers4);
Game.AddOption("Select your preferred FOV scale", "Select the hyphen to load default settings", "FOV", answers11);
Game.AddOption("Would you like to unlock all (only for Multiplayer)", "Default will not make any changes and keep the previous selected settings", "Unlock", answers12);
Game.FileSymlinkExclusions = ["d3d11.dll", "Xinputplus.ini", "xinput1_4.dll", "xinput1_3.dll"];
Game.FileSymlinkCopyInstead = ["localization.txt", "cod.bmp", "codlogo.bmp", "version.inf", "BlackOpsMP.exe", "binkw32.dll", "imgui.ini", "installscript.vdf"];
Game.DirExclusions = ["players", "mods"];
Game.HandlerInterval = 100; 
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
Game.SupportsKeyboard = false; 
Game.ExecutableName = "BlackOps.exe";
Game.LauncherExe = "Plutonium/launch.bat";
Game.LauncherExeIgnoreFileCheck = true;
Game.BinariesFolder = "";
Game.SteamID = "42700"; 
Game.GUID = "Call of Duty Black Ops"; 
Game.GameName = "Call of Duty Black Ops"; 
Game.MaxPlayersOneMonitor = 8; 
Game.MaxPlayers = 8;
Game.Hook.ForceFocus = true;
Game.HasDynamicWindowTitle = false;
Game.HookFocus = false;
Game.FakeFocus = false;
Game.FakeFocusSendActivate = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.InjectHookXinput = false;
Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 0; 
Game.PauseBetweenContextAndLaunch = 5;
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
  "For Zombies (up to 4 players), before launching your instances, select the number of players under Nucleus options, then launch your instances and have the first player setup an online private match. Once ready press F2 or ONLY from the map selection screen, press SELECT+X on the first player's gamepad to launch the match and to automatically connect all instances. Press F3 or SELECT+Y on the first player's gamepad to quickly restart match.\n\nTo play with mods (only for Zombies), place your mods in the mods folder located under NucleusCo-op/handlers/Call of Duty Black Ops/mods. Select Yes under the mod option in Nucleus and launch your instances. Manually load the custom Zombie mod in each instance and only after this has been done, press ok at the Nucleus prompt message.\n\nFor Multiplayer (up to 8 players), launch your instances, have the first player host and start a combat training match, and then press F2 or SELECT+X on the host's gamepad to have all the other instances connect automatically. To quickly restart match, press F3 or SELECT+Y on the first player's gamepad.\n\nTo swap bumper/trigger buttons (useful for playstation gamepads) press F4 or SELECT+A on the first player's gamepad only once all the instances have finished positioning/resizing or once you're in the match.\n\nTo play over LAN, ONLY the guest PC will need to select the last 1-3 digits of the Host PC's IP address in the launch options, then once all the instances have finished positionin/resizing, press F2 or press the SELECT+X buttons simultaneously on the first player's gamepad to connect all the guest instances to the host PC.\n\nThe winject32.exe may be blocked or flagged by windows defender as potential viruses/threats, but I can guarantee it is nothing but a false/positive as I got the dll injector from the following link https://www.unknowncheats.me/forum/general-programming-and-reversing/518833-winject-windows-injector.html and the file has been analyzed and cleared by one of their moderators.\n\nEnjoy this amazing CoD title (the best one in my humble opinion) in all of its glory with friends and family!";

Game.SupportsMultipleKeyboardsAndMice = true;

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
  Game.LockInputAtStart = false;
  Game.LockInputSuspendsExplorer = false;
  Game.LockInputToggleKey = 0x23;


Context.RunAdditionalFiles([Context.ScriptFolder + "\\start.bat"], false, 10);
Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4Swap.bat"], false, 10);
Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3Restart.bat"], false, 10);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\games");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\games");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\main");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\pub");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\mp");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\sp");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods\\mp_bots");
System.IO.Directory.CreateDirectory(filePath);

var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone");
System.IO.Directory.CreateDirectory(filePath);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods\\mp_bots\\mod.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods\\mp_bots\\mod.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "mods\\mp_bots\\mod.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods\\mp_bots\\mp_bots.iwd")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\mods\\mp_bots\\mp_bots.iwd");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "mods\\mp_bots\\mp_bots.iwd");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config files\\config_mp.cfg");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config files\\config_mp.cfg");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\main\\iw_42.iwd")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\main\\iw_42.iwd");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\main\\iw_42.iwd");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config files\\config.cfg");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\AppCore.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\AppCore.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\AppCore.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\discord_game_sdk.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\discord_game_sdk.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\discord_game_sdk.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\plutonium-bootstrapper-win32.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-launcher-win32.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-launcher-win32.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\plutonium-launcher-win32.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\Ultralight.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\Ultralight.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\Ultralight.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\UltralightCore.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\UltralightCore.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\UltralightCore.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\WebCore.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\WebCore.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\WebCore.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\AppCore.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\AppCore.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\AppCore.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\steam_api64.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\steam_api64.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\steam_api64.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\VibeCheck.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\VibeCheck.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\bin\\VibeCheck.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\games\\t5mp.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\games\\t5mp.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\games\\t5mp.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\games\\t5sp.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\games\\t5sp.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\games\\t5sp.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\games\\t5mp.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\games\\t5mp.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\games\\t5mp.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\games\\t5sp.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\games\\t5sp.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\games\\t5sp.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\mp\\mp_spawn_fix.gsc")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\mp\\mp_spawn_fix.gsc");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\raw\\scripts\\mp\\mp_spawn_fix.gsc");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\sp\\zm_spawn_fix.gsc")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\raw\\scripts\\sp\\zm_spawn_fix.gsc");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\raw\\scripts\\sp\\zm_spawn_fix.gsc");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\en_plutonium_ui.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\en_plutonium_ui.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\en_plutonium_ui.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\fr_plutonium_ui.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\fr_plutonium_ui.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\fr_plutonium_ui.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\frontend_patch.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\frontend_patch.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\frontend_patch.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\it_plutonium_ui.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\it_plutonium_ui.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\it_plutonium_ui.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\plutonium_ui.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui_mp.ff")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui_mp.ff");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\plutonium_ui_mp.ff");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\plutonium_ui.ff");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff_mp")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff_mp");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\plutonium_ui_mp.ff");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\patch_mp.ff")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\zone\\patch_mp.ff");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\t5\\zone\\patch_mp.ff");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_mp_english.wad")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_mp_english.wad");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_mp_english.wad");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\mpstatsBasicTraining")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\mpstatsBasicTraining");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\user\\mpstatsBasicTraining");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\publicprofile")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\publicprofile");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\user\\publicprofile");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\recentservers.dat")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\recentservers.dat");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\user\\recentservers.dat");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}

//  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\spstatsCompressed")) {
//  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\demonware\\18301\\user\\spstatsCompressed");
//  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Plutonium\\storage\\demonware\\18301\\user\\spstatsCompressed");
//  System.IO.File.Copy(savePkgOrigin, savePath, true);
//}


  var filePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global";
  System.IO.Directory.CreateDirectory(filePath);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global\\osd.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "osd.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.dll")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SpecialK\\d3d11.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.ini")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SpecialK\\d3d11.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [Context.FindLineNumberInTextFile(txtPath, "SlotReassignment=", Nucleus.SearchType.StartsWith) + "|SlotReassignment=" + Context.PlayerID + ""];
Context.ReplaceLinesInTextFile(txtPath, dict);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\winject32.exe")) {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\winject32.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winject32.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}

Game.ExecutableName = "plutonium-bootstrapper-win32.exe";

var mode = Context.Options["mode"];
var Mod = Context.Options["Mod"];
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
if (mode == "Zombies") {

Context.RunAdditionalFiles([Context.ScriptFolder + "\\F10Overlay.bat"], false, 10);

Game.Hook.ForceFocusWindowName = "Plutonium T5 Co-Op (r4839)"; 
Game.LauncherTitle = "Plutonium T5 Co-Op (r4839)";

if (Context.NumberOfPlayers < 4) {
if (Context.HasKeyboardPlayer) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} 
} 

if (Context.NumberOfPlayers < 5) {
if (Context.HasKeyboardPlayer) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=true",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=true",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} 
} 

var Players = Context.Options["Players"];

var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\launcher.bat";
var lines = ['CALL "' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\winject32.exe" d3d11.dll -s "bin\\plutonium-bootstrapper-win32.exe" t5sp "%~dp0.." -name "' + Context.Nickname + '" -nocurses -lan +set sp_minplayers "' + Players + '" -offline +set com_maxfps "' + FPS + '" +set r_vsync "' + vsyncVal + '" +set gpad_rumble "' + rumbleVal + '" +set cg_drawfps "' + drawfpsVal + '"'];
Context.WriteTextFile(Bat, lines);

Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\launcher.bat"], false, 0);


var lan = Context.Options["lan"];
if (lan == "-") {

Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2Host.bat"], false, 10);

}

if (lan >= 0) {
Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2Guest.bat"], false, 10);

var txtPath = Game.Folder + '\\Local IP.txt';
var dict = ['192.168.1.' + lan + '      ',];
Context.WriteTextFile(txtPath, dict);

}

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
Context.FindLineNumberInTextFile(txtPath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_customMode', Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + "x" + Context.Height + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_displayMode', Nucleus.SearchType.StartsWith) + '|seta fullscreen "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
Context.FindLineNumberInTextFile(txtPath, 'seta vid_xpos', Nucleus.SearchType.StartsWith) + '|seta vid_xpos "' + Context.PosX + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + Context.PosY + '"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);
 
  var Mus = Context.Options["Mus"];
  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    } else {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    }
  }
  if (Mus == "No") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }
}


if (mode == "Multiplayer") {

if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg")) {
var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg");
var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "mods\\mp_bots\\config_mp.cfg");
System.IO.File.Copy(savePkgOrigin, savePath, true);
}

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg';
var dict = [
Context.FindLineNumberInTextFile(txtPath, 'seta com_first_time_pc', Nucleus.SearchType.StartsWith) + '|seta com_first_time_pc "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta sd_xa2_device_guid', Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_enabled', Nucleus.SearchType.StartsWith) + '|seta gpad_enabled "1"',
Context.FindLineNumberInTextFile(txtPath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_customMode', Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + 'x' + Context.Height + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + 'x' + Context.Height + '"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);

var Unlock = Context.Options["Unlock"];
if (Unlock == "Default") {
}
if (Unlock == "Yes") {

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\globalstats");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Unlockall Files\\globalstats");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\mpstats");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Unlockall Files\\mpstats");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\mpstatsBasicTraining");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Unlockall Files\\mpstatsBasicTraining");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
}


Game.Hook.ForceFocusWindowName = "Plutonium T5 Multiplayer (r4839)"; 
Game.LauncherTitle = "Plutonium T5 Multiplayer (r4839)";

if (Context.NumberOfPlayers < 4) {
if (Context.HasKeyboardPlayer) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} 
} 

if (Context.NumberOfPlayers < 5) {
if (Context.HasKeyboardPlayer) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=true",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=true",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} 
} 

var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\launcher.bat";
var lines = ['CALL "' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\winject32.exe" d3d11.dll -s "bin\\plutonium-bootstrapper-win32.exe" t5mp "%~dp0.." -name "' + Context.Nickname + '" -nocurses -lan -offline +set fs_game mods/mp_bots +set com_maxfps "' + FPS + '" +set r_vsync "' + vsyncVal + '" +set gpad_rumble "' + rumbleVal + '" +set cg_drawfps "' + drawfpsVal + '"'];
Context.WriteTextFile(Bat, lines);

Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\launcher.bat"], false, 0);

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

var lan = Context.Options["lan"];
if (lan == "-") {

Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2HostMP.bat"], false, 10);

}

if (lan >= 0) {
Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2Guest.bat"], false, 10);

var txtPath = Game.Folder + '\\Local IP.txt';
var dict = ['192.168.1.' + lan + '      ',];
Context.WriteTextFile(txtPath, dict);

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
Context.FindLineNumberInTextFile(txtPath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_customMode', Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + "x" + Context.Height + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_displayMode', Nucleus.SearchType.StartsWith) + '|seta fullscreen "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "' + vsyncVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta gpad_rumble', Nucleus.SearchType.StartsWith) + '|seta gpad_rumble "' + rumbleVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta cg_drawFPS', Nucleus.SearchType.StartsWith) + '|seta cg_drawFPS "' + drawfpsVal + '"',
Context.FindLineNumberInTextFile(txtPath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
Context.FindLineNumberInTextFile(txtPath, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "0"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);



  var Mus = Context.Options["Mus"];

  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    } else {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    }
  }
  if (Mus == "No") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

  }
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
 
  var Mus = Context.Options["Mus"];
  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"'
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\mods\\mp_bots\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"'
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    } else {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "0"',
        Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "0"'
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    }
  }
  if (Mus == "No") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "1"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }


Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers", "" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe", "HIGHDPIAWARE", Nucleus.RegType.String);

var mods = Context.Options["mods"];

if (mods == "Yes") {


      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "seta vid_xpos", Nucleus.SearchType.StartsWith) + '|seta vid_xpos "' + Context.PosX + '"',
        Context.FindLineNumberInTextFile(txtPath, "seta vid_ypos", Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + Context.PosY + '"',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
  var dict = [
	Context.FindLineNumberInTextFile(txtPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height,
        Context.FindLineNumberInTextFile(txtPath, "XOffset=", Nucleus.SearchType.StartsWith) + '|XOffset=' + Context.PosX + '',
        Context.FindLineNumberInTextFile(txtPath, "YOffset=", Nucleus.SearchType.StartsWith) + '|YOffset=' + Context.PosY + '',
        Context.FindLineNumberInTextFile(txtPath, "AlwaysOnTop=", Nucleus.SearchType.StartsWith) + '|AlwaysOnTop=1',

      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

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

  if (Context.HasKeyboardPlayer) {
Game.PromptBetweenInstancesEnd = true;
//Game.ProcessChangesAtEnd = true;
Game.PromptProcessChangesAtEnd = true;
Game.PromptBetweenInstances = true;
//Game.PromptAfterFirstInstance = true;
} else {
Game.ProcessChangesAtEnd = true;
Game.PromptProcessChangesAtEnd = true;
}
}
if (mods == "No") {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
var dict = [
Context.FindLineNumberInTextFile(txtPath, 'seta vid_xpos', Nucleus.SearchType.StartsWith) + '|seta vid_xpos "0"',
Context.FindLineNumberInTextFile(txtPath, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "0"',
];
Context.ReplaceLinesInTextFile(txtPath, dict);

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [Context.FindLineNumberInTextFile(txtPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height,];
var dict = [Context.FindLineNumberInTextFile(txtPath, "XOffset=", Nucleus.SearchType.StartsWith) + '|XOffset=0'];
var dict = [Context.FindLineNumberInTextFile(txtPath, "YOffset=", Nucleus.SearchType.StartsWith) + '|YOffset=0'];
var dict = [Context.FindLineNumberInTextFile(txtPath, "AlwaysOnTop=", Nucleus.SearchType.StartsWith) + '|AlwaysOnTop=1'];
Context.ReplaceLinesInTextFile(txtPath, dict);

Game.PromptBetweenInstancesEnd = false;
//Game.ProcessChangesAtEnd = false;
Game.PromptProcessChangesAtEnd = false;
Game.PromptBetweenInstances = false;
//Game.PromptAfterFirstInstance = false;
}

if (Player.IsRawKeyboard) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

} else {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
Context.FindLineNumberInTextFile(txtPath, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=true",
Context.FindLineNumberInTextFile(txtPath, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true",
];
Context.ReplaceLinesInTextFile(txtPath, dict);

}

if (Player.IsRawKeyboard) {

    Game.ProtoInput.InjectStartup = false;
    Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
    Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
    Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
    Game.ProtoInput.FindWindowHook = true;
    Game.ProtoInput.RegisterRawInputHook = true;
    Game.ProtoInput.GetRawInputDataHook = false;
    Game.ProtoInput.MessageFilterHook = true;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.GetKeyStateHook = false;
    Game.ProtoInput.GetAsyncKeyStateHook = false;
    Game.ProtoInput.GetKeyboardStateHook = false;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.FocusHooks = false;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.RawInputFilter = false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = false;
    Game.ProtoInput.MouseButtonFilter = false;
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.SendMouseWheelMessages = true;
    Game.ProtoInput.SendMouseButtonMessages = true;
    Game.ProtoInput.SendMouseMovementMessages = true;
    Game.ProtoInput.SendKeyboardButtonMessages = true;

    Game.ProtoInput.EnableFocusMessageLoop = false;
    Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
    Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
    Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
    Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
    Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
    Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
    Game.ProtoInput.BlockedMessages = [];
    Game.ProtoInput.RenameHandlesHook = false;
    Game.ProtoInput.RenameHandles = [];
    Game.ProtoInput.RenameNamedPipes = [];

}

if (Context.NumberOfPlayers > 4) {

    Game.ProtoInput.InjectStartup = false;
    Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
    Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
    Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
    Game.ProtoInput.FindWindowHook = true;
    Game.ProtoInput.RegisterRawInputHook = true;
    Game.ProtoInput.GetRawInputDataHook = false;
    Game.ProtoInput.MessageFilterHook = true;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.GetKeyStateHook = false;
    Game.ProtoInput.GetAsyncKeyStateHook = false;
    Game.ProtoInput.GetKeyboardStateHook = false;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.FocusHooks = false;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.RawInputFilter = false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = false;
    Game.ProtoInput.MouseButtonFilter = false;
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.SendMouseWheelMessages = true;
    Game.ProtoInput.SendMouseButtonMessages = true;
    Game.ProtoInput.SendMouseMovementMessages = true;
    Game.ProtoInput.SendKeyboardButtonMessages = true;

    Game.ProtoInput.EnableFocusMessageLoop = false;
    Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
    Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
    Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
    Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
    Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
    Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
    Game.ProtoInput.BlockedMessages = [];
    Game.ProtoInput.RenameHandlesHook = false;
    Game.ProtoInput.RenameHandles = [];
    Game.ProtoInput.RenameNamedPipes = [];

}

if (Context.NumberOfPlayers < 5) {

var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
var dict = [
Context.FindLineNumberInTextFile(txtPath, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=true",
];
Context.ReplaceLinesInTextFile(txtPath, dict);
}
 
    Game.ProtoInput.OnInputLocked = function() {
    if (Player.IsRawKeyboard) {
      for (var i = 0; i < PlayerList.Count; i++) {
        var player = PlayerList[i];
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

        ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
        System.Threading.Thread.Sleep(1000);
        ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
        ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
        ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      }
    }

if (Context.NumberOfPlayers > 4) {

      for (var i = 0; i < PlayerList.Count; i++) {
        var player = PlayerList[i];
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

        ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
        System.Threading.Thread.Sleep(1000);
        ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
        ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
        ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      }
   }
}
    Game.ProtoInput.OnInputUnlocked = function() {
      for (var i = 0; i < PlayerList.Count; i++) {
        var player = PlayerList[i];
        ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
        ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
        ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
        ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

        ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
        ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);

        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
      }
   }
}