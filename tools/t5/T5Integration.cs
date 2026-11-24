using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Threading;
using System.Windows.Forms;
using Nucleus;
using Nucleus.Gaming;
using Nucleus.Gaming.Coop;

static class T5Integration
{
    static void OverrideField(object target, string name, object value)
    {
        var flags = BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;
        var type = target.GetType();
        var field = type.GetField(name, flags);
        if (field == null)
            throw new MissingFieldException(type.FullName, name);
        field.SetValue(target, value);
    }

    [STAThread]
    static int Main(string[] args)
    {
        try
        {
            Setup(args[0], args[1], args[2], args[3], int.Parse(args[4]));
            return 0;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return 1;
        }
    }

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    static extern IntPtr GetForegroundWindow();

    static void Setup(string mode, string gamePath, string layout, string slots, int grabDelay)
    {
        var root = AppDomain.CurrentDomain.BaseDirectory;
        var fixture = Directory.GetParent(root.TrimEnd(Path.DirectorySeparatorChar)).FullName;
        Directory.SetCurrentDirectory(root);
        Globals.UserDocumentsRoot = Path.Combine(root, "documents");
        Directory.CreateDirectory(Globals.UserDocumentsRoot);
        Application.EnableVisualStyles();
        Nucleus.Gaming.App.Settings.App_Misc.LoadSettings();
        Nucleus.Gaming.App.Settings.App_Misc.DebugLog = true;
        Console.WriteLine("Loading Nucleus and the handler");
        var manager = new GameManager();
        var game = manager.Games["Call of Duty Black Ops"];
        if (grabDelay > 0)
            game.PauseBetweenProcessGrab = grabDelay;
        var userGame = new UserGameInfo();
        userGame.InitializeDefault(game, gamePath);
        GameProfile.Game = game;
        GameProfile.GameInfo = userGame;
        var profile = new GameProfile();
        Console.WriteLine("Creating profile state");
        OverrideField(profile, "options", new Dictionary<string, object>());
        OverrideField(profile, "deviceList", new List<PlayerInfo>());
        OverrideField(profile, "screens", new List<UserScreen>());
        profile.Options["mode"] = mode;
        profile.Options["mods"] = "No";
        profile.Options["lan"] = "-";
        profile.Options["Graphics"] = "Default";
        profile.Options["FOV"] = "-";
        profile.Options["Mus"] = Environment.GetEnvironmentVariable("T5_FIXTURE_AUDIO") ?? "Yes";
        profile.Options["FPS"] = "60";
        profile.Options["Players"] = "1";
        profile.Options["Unlock"] = "Default";
        profile.Options["UnlockNaziZombies"] = "No";
        profile.Options["VSync"] = "Off";
        profile.Options["Gamepad Vibration"] = "Off";
        profile.Options["cg_drawfps"] = "Disabled";
        profile.Options["Friendly_Bots"] = "Default";
        profile.Options["Enemy_Bots"] = "Default";
        profile.Options["Skill"] = "Default";
        GameProfile.AutoDesktopScaling = false;
        GameProfile.UseSplitDiv = false;
        GameProfile.EnableWindowsMerger = false;
        GameProfile.UseNicknames = true;
        bool mixed = layout == "Mixed";
        string[] padIds = slots.Split(',');
        var bounds = Screen.PrimaryScreen.Bounds;
        var owner = new UserScreen(bounds);
        var display = new Display(IntPtr.Zero, bounds, Screen.PrimaryScreen.DeviceName, true, "", "", "", 0, 0);
        profile.Screens.Clear();
        profile.Screens.Add(owner);
        for (int i = 0; i < 2; i++)
        {
            profile.DevicesList.Add(new PlayerInfo {
                Nickname = "T5Integration" + (i + 1),
                MonitorBounds = new Rectangle(bounds.X, bounds.Y + i * bounds.Height / 2, bounds.Width, bounds.Height / 2),
                Owner = owner,
                Display = display,
                GamepadId = mixed && i == 0 ? 99 : int.Parse(padIds[i]),
                IsKeyboardPlayer = mixed && i == 0,
                IsXInput = !mixed || i != 0,
                IsController = !mixed || i != 0,
            });
        }
        Console.WriteLine("Creating OSD");
        Globals.MainOSD = new WPF_OSD(bounds);
        var handler = new GenericGameHandler();
        OverrideField(handler, "instance", handler);
        OverrideField(handler, "userGame", userGame);
        OverrideField(handler, "gen", game);
        OverrideField(handler, "totalPlayers", profile.DevicesList.Count);
        OverrideField(handler, "timerInterval", 100d);
        handler.profile = profile;
        handler.isDebug = true;
        OverrideField(handler, "JsFilename", game.JsFileName);
        OverrideField(handler, "HandlerGUID", game.GUID);
        OverrideField(handler, "jsData", new Dictionary<string,string> {
          {"Documents", Globals.UserDocumentsRoot},
          {"MainGameFolder", Path.GetDirectoryName(userGame.ExePath)},
          {"InstancedGameFolder", Path.GetDirectoryName(userGame.ExePath)}
        });
        Console.WriteLine("Handler loaded for " + mode);
        string playResult = handler.Play();
        Console.WriteLine("Play returned: " + playResult + ", foreground window " + GetForegroundWindow());
        if (!String.IsNullOrEmpty(playResult))
            throw new InvalidOperationException(playResult);

        var ids = new List<string>();
        foreach (var player in profile.DevicesList)
        {
            var process = Process.GetProcessById(player.ProcessID);
            if (!process.Responding || !process.MainWindowTitle.StartsWith("Plutonium T5"))
                throw new InvalidOperationException("Game window did not become responsive for " + player.Nickname);
            if (!player.IsKeyboardPlayer && player.ProtoInputInstanceHandle == 0)
                throw new InvalidOperationException("Controller hook was not installed for " + player.Nickname);
            ids.Add(process.Id.ToString());
            Console.WriteLine("Attached {0}: PID {1}, HWND {2}, Proto Input {3}, {4}",
                player.Nickname, process.Id, process.MainWindowHandle, player.ProtoInputInstanceHandle, process.MainWindowTitle);
        }
        File.WriteAllLines(Path.Combine(fixture, "game-pids.txt"), ids.ToArray());

        var control = Path.Combine(fixture, "focus-control.txt");
        string previous = null;
        while (true)
        {
            Thread.Sleep(100);
            Application.DoEvents();
            if (!File.Exists(control))
                continue;
            string command;
            try
            {
                command = File.ReadAllText(control).Trim();
            }
            catch (IOException)
            {
                continue;
            }
            if (command.Length == 0 || command == previous)
                continue;
            previous = command;
            if (command == "quit")
                return;

            var parts = command.Split(' ');
            int interval = 0;
            if (command != "stop" &&
                (parts.Length != 2 || !int.TryParse(parts[0], out interval) || interval < 1 ||
                 !System.Text.RegularExpressions.Regex.IsMatch(parts[1], "^[01]{4}$")))
            {
                Console.WriteLine("Expected stop or an interval and four focus flags.");
                continue;
            }

            foreach (var player in profile.DevicesList)
            {
                if (player.IsKeyboardPlayer)
                    continue;
                var api = Nucleus.Gaming.Coop.ProtoInput.ProtoInput.protoInput;
                var handle = player.ProtoInputInstanceHandle;
                api.StopFocusMessageLoop(handle);
                if (interval > 0)
                {
                    var flags = parts[1];
                    api.StartFocusMessageLoop(handle, interval, flags[0] == '1', flags[1] == '1',
                        flags[2] == '1', flags[3] == '1', false);
                }
            }
            Console.WriteLine("Applied controller focus setting: " + command);
        }
    }
}
