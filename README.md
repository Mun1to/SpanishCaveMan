# Spanish CaveMan

A Claude Code skill: caveman-style token efficiency, spoken with a real Spanish regional accent.

## What it does

Inspired by [caveman](https://github.com/juliusbrussee/caveman). Same idea, terse, no-filler
responses that save tokens, but instead of generic "caveman speak", the response is delivered in
the slang, humor, and exaggerated phonetic spelling of a Spanish-speaking region.

## Supported dialects

| Dialect | Say | Sample response |
|---|---|---|
| Rioplatense (Argentina/Uruguay) | "habla como argentino" | "Che, ya está. Ahí tenés los pasos, posta." |
| Caribbean (Dominican Republic/Cuba/Puerto Rico) | "habla como dominicano" | "Klk manito, ya terminé. Aquí tienes los pasos a seguil, mi loco." |
| Mexican | "habla como mexicano" | "Qué onda güey, ya quedó. Ahí te va la neta de los pasos." |
| Andean/Colombian | "habla como colombiano" | "Quiubo parce, ya quedó listo. Ahí te dejo los pasos." |
| Chilean | "habla como chileno" | "Oe compadre, ya está, po. Ahí tenís los pasos al tiro." |
| Peninsular/Castilian (Spain) | "habla como español" | "Qué pasa tío, ya está. Ahí lo tienes, colega." |
| Andalusian (Spain) | "habla como andaluz" | "Qué pasa pisha, aquí tienes..." |

## How it works

Say a trigger phrase like "habla como argentino", or run `/spanish-cave-man <dialect>`. Claude
keeps responding in that dialect's vocabulary and grammar, staying short like caveman, until you
say "modo normal". Code blocks, terminal commands, file paths, exact technical terms, and anything
meant for a third party (commit messages, docs, emails) always stay in plain, neutral Spanish.

## Install

```bash
git clone https://github.com/Mun1to/SpanishCaveMan.git
ln -s "$(pwd)/SpanishCaveMan/skill" ~/.claude/skills/spanish-cave-man
```

On Windows, create the symlink with PowerShell instead:

```powershell
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.claude\skills\spanish-cave-man" -Target "C:\path\to\SpanishCaveMan\skill"
```

## Credits

The persistent style-shifting pattern (activate, stay active across the session, turn off with a
phrase) is borrowed from [caveman](https://github.com/juliusbrussee/caveman) by Julius Brussee.

## License

MIT, see [LICENSE](LICENSE).
