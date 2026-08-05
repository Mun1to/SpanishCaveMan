#!/usr/bin/env node
// SessionStart hook: re-injects the active Spanish CaveMan dialect after a
// fresh session start, a /compact, or a resume. State lives outside this
// repo (~/.claude/spanish-cave-man-state.json), written by Claude itself
// when the mode is activated, changed, or turned off. If anything is
// missing or malformed, this exits quietly: a broken state file must never
// break session startup.

const fs = require('fs');
const path = require('path');
const os = require('os');

const STATE_FILE = path.join(os.homedir(), '.claude', 'spanish-cave-man-state.json');

let state;
try {
  state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
} catch {
  process.exit(0);
}

if (!state || state.active !== true || typeof state.reminder !== 'string' || !state.reminder.trim()) {
  process.exit(0);
}

process.stdout.write(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: 'SessionStart',
    additionalContext: state.reminder,
  },
}));
