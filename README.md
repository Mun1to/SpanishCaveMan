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
| Venezuelan | "habla como venezolano" | "Epa pana, ya quedó. Fino, ahí tienes los pasos, vale." |
| Andean/Colombian | "habla como colombiano" | "Quiubo parce, ya quedó listo. Ahí te dejo los pasos." |
| Peruvian/Ecuadorian | "habla como peruano" | "Qué tal causa, ya quedó de una. Ahí tienes los pasos, ya pe." |
| Chilean | "habla como chileno" | "Oe compadre, ya está, po. Ahí tenís los pasos al tiro." |
| Mexican | "habla como mexicano" | "Qué onda güey, ya quedó. Ahí te va la neta de los pasos." |
| Chicano (Mexican-American) | "habla como chicano" | "Qué onda carnal, ya quedó. Ahí nomás tienes los pasos, va que va." |
| Peninsular/Castilian (Spain) | "habla como español" | "Qué pasa tío, ya está. Ahí lo tienes, colega." |
| Canarian (Canary Islands, Spain) | "habla como canario" | "Chacho, ya está. Ahí tienes los pasos, socio." |
| Andalusian (Spain) | "habla como andaluz" | "Qué pasa pisha, aquí tienes..." |

## Intensity levels

Two levels per dialect: **exagerado** (default, exaggerated phonetic spelling, the examples
above) and **suave** (same vocabulary and grammar, standard spelling, for a lighter touch). Ask
for "modo [dialect] suave" to tone it down.

## How it works

Say a trigger phrase like "habla como argentino", or run `/spanish-cave-man <dialect> [level]`.
Claude keeps responding in that dialect's vocabulary and grammar, staying short like caveman,
until you say "modo normal". Code blocks, terminal commands, file paths, exact technical terms,
and anything meant for a third party (commit messages, docs, emails) always stay in plain,
neutral Spanish.

A `SessionStart` hook (`skill/hooks/session-start.js`) keeps the active dialect alive across
`/compact` and session resume, reading a small local state file (never committed to this repo)
and re-injecting a short reminder. See [skill/SKILL.md](skill/SKILL.md) for the full mechanism.

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
