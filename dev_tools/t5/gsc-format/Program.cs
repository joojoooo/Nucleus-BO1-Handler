using System.Text;
using System.Text.RegularExpressions;
using GSCode.Core;
using GSCode.Core.Symbols;
using GSCode.Core.Text;
using GSCode.Parser;
using GSCode.Parser.Lexing;
using GSCode.Parser.Preprocessing;
using GSCode.Server.Formatting;

bool check = args.FirstOrDefault() == "--check";
string[] paths = check ? args[1..] : args;
if (paths.Length == 0)
{
    Console.Error.WriteLine("Supply one or more .gsc files or directories.");
    return 2;
}

if (typeof(GscFormatter).Assembly.GetName().Version != new Version(2, 2, 2, 0) || !GameProfile.Select("bo1"))
{
    Console.Error.WriteLine("Use the GSCode 2.2.2 release with the bo1 profile.");
    return 2;
}

var options = FormatOptions.Default with
{
    UseTabs = true,
    MaxBlankLines = 1,
    SortDirectives = false,
    AlignConsecutive = false,
    FixCasing = false,
};
var utf8 = new UTF8Encoding(false, true);
var trailingSpace = new Regex(@"[ \t]+(?=\r?$)", RegexOptions.Multiline);
var pending = new List<(string Path, byte[] Data)>();
try
{
    foreach (var path in paths.SelectMany(Scripts).Order(StringComparer.Ordinal))
    {
        byte[] data = File.ReadAllBytes(path);
        Encoding encoding = utf8;
        string source;
        try
        {
            source = encoding.GetString(data);
        }
        catch (DecoderFallbackException)
        {
            // Some stock scripts contain legacy bytes. Latin-1 maps them one-to-one.
            encoding = Encoding.Latin1;
            source = encoding.GetString(data);
        }

        string formatted = Format(path, source);
        if (!Tokens(source).SequenceEqual(Tokens(formatted)) || Format(path, formatted) != formatted)
            throw new InvalidDataException($"Formatting changed tokens or was not stable in {path}");

        byte[] output = encoding.GetBytes(formatted);
        if (!data.AsSpan().SequenceEqual(output))
            pending.Add((path, output));
    }

    foreach (var (path, data) in pending)
    {
        if (!check)
            File.WriteAllBytes(path, data);
        Console.WriteLine(path);
    }

    return check && pending.Count > 0 ? 1 : 0;
}
catch (Exception error) when (error is IOException or InvalidDataException)
{
    Console.Error.WriteLine(error.Message);
    return 2;
}

string Format(string path, string source)
{
    var parsed = ScriptAnalysis.Analyze(path, ScriptLanguage.Gsc, SourceText.From(source),
        NullInsertProvider.Instance, new NameTable());
    string formatted = GscFormatter.Format(parsed, options)
        ?? throw new InvalidDataException($"GSCode could not format {path}");
    return trailingSpace.Replace(formatted, "").Replace("\r\n", "\n").Replace("\n", "\r\n");
}

IEnumerable<(TokenKind Kind, string Text)> Tokens(string source)
{
    var text = SourceText.From(source);
    foreach (var token in Lexer.Lex(text).Tokens)
    {
        if (token.Kind is TokenKind.Whitespace or TokenKind.Newline or TokenKind.EndOfFile)
            continue;

        string value = token.GetText(text).ToString();
        if (token.Kind is TokenKind.LineComment or TokenKind.BlockComment or TokenKind.DocComment)
            value = trailingSpace.Replace(value, "").Replace("\r\n", "\n");
        yield return (token.Kind, value);
    }
}

static IEnumerable<string> Scripts(string path)
{
    if (Directory.Exists(path))
        return Directory.EnumerateFiles(path, "*.gsc", SearchOption.AllDirectories);
    if (File.Exists(path) && Path.GetExtension(path).Equals(".gsc", StringComparison.OrdinalIgnoreCase))
        return [path];
    throw new FileNotFoundException($"Expected a .gsc file or directory at {path}");
}
