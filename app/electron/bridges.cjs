/* deZign — consumer-subscription CLI BRIDGES (Stage 5 · 19). The app's Claude engine is itself a bridged CLI
 * (Claude Code via the Agent SDK); this generalises the pattern: drive another vendor's agent CLI, signed into the
 * USER'S OWN subscription, as an alternative BUILDER. Verified facts + exact flags: docs/MULTI-PROVIDER-BRIEF.md.
 *
 * Bridges: codex (VERIFIED recipe) · grok · copilot · mimo (flag sets verified; their EVENT SHAPES are not — those
 * three are marked experimental until a first live run; the parser is tolerant: a non-JSON stdout line is treated as
 * plain text so an unexpected format degrades to a readable transcript, never a silent hang).
 *
 * PROMPT DELIVERY: codex → STDIN (verified; beats the win32 ~8k argv limit AND the hang-on-silent-pipe bug
 * openai/codex#20919). grok/copilot/mimo → a `.dezign-task.md` file in the cwd + a short "read that file and execute
 * it" argv prompt: stdin semantics are unverified for them, argv can't carry our injected context, and every one of
 * them is a coding agent whose most reliable capability is reading a file. The host deletes the file post-turn.
 */
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const { childEnv } = require('./childenv.cjs'); // AUDIT-2 F33: foreign-CLI env scrubber — every non-Claude spawn gets env: childEnv() so ANTHROPIC_API_KEY + CLAUDE* never reach codex/grok/copilot/mimo/npm

const activeChildren = new Set();
const TASK_FILE = '.dezign-task.md';
// PER-LANE TASK FILES (Q9 multi-AI swarm prerequisite): two parallel bridge lanes in ONE project cwd would both write
// `.dezign-task.md` and clobber each other's prompt. So each lane gets its OWN dot-file `.dezign-task-<lane>.md`.
// Dot-prefixed → the misdirect detector + reconcile already ignore it. No lane given (single-engine /flow, chat) →
// the legacy `.dezign-task.md`, so every existing caller + smoke argv check keeps working unchanged.
function taskFileName(lane) {
  if (!lane) return TASK_FILE;
  const safe = String(lane).replace(/[^a-z0-9._-]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'lane';
  return '.dezign-task-' + safe + '.md';
}
const filePromptFor = (tf) => 'Read the file ' + tf + ' in the current working directory NOW — it contains your complete build instructions and context. Follow it exactly, writing/editing the real project files here. Do not delete ' + tf + '.';
// R2 (F13): removed the dead precomputed FILE_PROMPT const — all callers call filePromptFor(taskFile || TASK_FILE) directly since the per-lane task-file refactor.

// ── One Codex NDJSON event → our normalized event (pure; smoke-unit-tested). Shapes verified in the brief. ──
function parseCodexEvent(line) {
  let ev; try { ev = JSON.parse(line); } catch { return null; }
  if (!ev || typeof ev !== 'object') return null;
  if (ev.type === 'thread.started' && ev.thread_id) return { kind: 'session', id: String(ev.thread_id) };
  if (ev.type === 'turn.completed' && ev.usage) { const u = ev.usage; return { kind: 'usage', usage: { input: (u.input_tokens || 0) + (u.cached_input_tokens || 0), inUncached: u.input_tokens || 0, cacheRead: u.cached_input_tokens || 0, cacheCreate: 0, output: u.output_tokens || 0, cost: 0 } }; }
  if (ev.type === 'turn.failed' || ev.type === 'error') return { kind: 'failed', error: (ev.error && ev.error.message) || ev.message || 'bridge turn failed' };
  const item = ev.item;
  if (item && /^item\./.test(ev.type || '')) {
    if (item.type === 'agent_message' && ev.type === 'item.completed' && item.text) return { kind: 'text', text: item.text };
    if (item.type === 'command_execution' && ev.type === 'item.started') return { kind: 'tool', name: 'Bash', input: { command: String(item.command || '').slice(0, 200) } };
    if (item.type === 'file_change' && ev.type === 'item.completed' && Array.isArray(item.changes)) {
      return { kind: 'tools', tools: item.changes.map((c) => ({ name: /add|create/i.test(c.kind || '') ? 'Write' : 'Edit', input: { file_path: c.path || '' } })) };
    }
    if (item.type === 'reasoning' && ev.type === 'item.completed' && item.text) return { kind: 'tool', name: 'Thinking', input: { note: String(item.text).slice(0, 120) } };
  }
  return null;
}

// ── MiMo parser — CALIBRATED against the real CLI 0.1.4 (live run 2026-07-02): events are
// {type:'step_start'|'text'|'step_finish'|…, sessionID, part:{type, text?, tokens?{input,output,cache{read}}, cost?}}.
// Text lives in part.text (NOT top-level); session id is `sessionID` (capital ID); usage arrives on step_finish. ──
function parseMimoEvent(line) {
  let ev; try { ev = JSON.parse(line); } catch { return line.trim() ? { kind: 'text', text: line } : null; }
  if (!ev || typeof ev !== 'object') return null;
  const part = ev.part || {};
  if (ev.type === 'text' && part.text) return { kind: 'text', text: part.text };
  if (ev.type === 'step_finish' && part.tokens) { const tk = part.tokens; return { kind: 'usage', usage: { input: tk.input || 0, inUncached: tk.input || 0, cacheRead: (tk.cache && tk.cache.read) || 0, cacheCreate: (tk.cache && tk.cache.write) || 0, output: tk.output || 0, cost: part.cost || 0 } }; }
  if (/tool/i.test(String(ev.type || part.type || ''))) return { kind: 'tool', name: 'Edit', input: { note: String(part.tool || part.type || ev.type).slice(0, 80) } };
  if (/error|failed/i.test(String(ev.type || '')) || ev.error) return { kind: 'failed', error: (ev.error && (ev.error.message || ev.error)) || 'mimo turn failed' };
  if (ev.type === 'step_start' && ev.sessionID) return { kind: 'session', id: String(ev.sessionID) };
  return null;
}

// ── Grok parser — CALIBRATED against the real CLI 0.2.77 (live runs 2026-07-02): streaming-json events are
// {type:'thought'|'text', data:'<token>'} (token-by-token deltas!) and a final {type:'end', stopReason, sessionId}.
// Text deltas must concatenate WITHOUT separators; thought tokens are reasoning noise (skipped). ──
function parseGrokEvent(line) {
  let ev; try { ev = JSON.parse(line); } catch { return line.trim() ? { kind: 'text', text: line } : null; }
  if (!ev || typeof ev !== 'object') return null;
  if (ev.type === 'text' && typeof ev.data === 'string') return { kind: 'textDelta', text: ev.data };
  if (ev.type === 'thought') return null; // per-token reasoning stream — not transcript material
  if (ev.type === 'end') return ev.sessionId ? { kind: 'session', id: String(ev.sessionId) } : null;
  if (/tool/i.test(String(ev.type || ''))) return { kind: 'tool', name: 'Edit', input: { note: String(ev.type).slice(0, 80) } };
  if (/error|failed/i.test(String(ev.type || '')) || ev.error) return { kind: 'failed', error: (ev.error && (ev.error.message || ev.error)) || ev.message || 'grok turn failed' };
  return null;
}

// ── Tolerant parser for the EXPERIMENTAL bridges (copilot): pull text out of the
// common fields of ANY event-ish JSON line; a non-JSON line is passed through as plain text (copilot is text-only). ──
function parseLooseEvent(line) {
  let ev; try { ev = JSON.parse(line); } catch { return line.trim() ? { kind: 'text', text: line } : null; }
  if (!ev || typeof ev !== 'object') return null;
  const t = String(ev.type || ev.event || '');
  if (/error|failed/i.test(t) || ev.error) return { kind: 'failed', error: (ev.error && (ev.error.message || ev.error)) || ev.message || 'bridge turn failed' };
  if (ev.session_id || ev.sessionId || ev.thread_id) return { kind: 'session', id: String(ev.session_id || ev.sessionId || ev.thread_id) };
  const text = ev.text || ev.content || ev.delta || (ev.message && (typeof ev.message === 'string' ? ev.message : ev.message.content)) || ev.result || '';
  if (typeof text === 'string' && text) return { kind: 'text', text };
  if (/tool|command|file/i.test(t)) return { kind: 'tool', name: 'Edit', input: { note: t } };
  return null;
}

// ── the bridge table ──
const BRIDGES = {
  codex: {
    label: 'Codex (ChatGPT plan)', bin: 'codex', verified: true, promptVia: 'stdin', parse: parseCodexEvent,
    installHint: 'npm install -g @openai/codex', loginHint: 'run `codex login` in a terminal (ChatGPT sign-in)',
    probeLogin: ['login', 'status'], // exit 0 = signed in
    // per-CLI MODEL SELECTION (research-verified 2026-07-07, empirically ground-truthed on the installed CLI): `-m <id>`
    // on `codex exec`; default gpt-5.5; account-gated (this ChatGPT plan serves gpt-5.5 + gpt-5.4-mini). Dynamic list =
    // `codex debug models` (visibility=list) — a later upgrade; static-curated ships first.
    modelFlag: '-m', defaultModel: 'gpt-5.5',
    models: [{ id: 'gpt-5.5', label: 'GPT-5.5 · default' }, { id: 'gpt-5.4-mini', label: 'GPT-5.4-mini · fast' }],
    // NB (2026-07-06): `codex exec` 0.142.5 REMOVED --ask-for-approval (it now rejects it → exit 126). exec is
    // non-interactive, so the --sandbox policy alone governs; no approval flag needed. Prompt still rides stdin (below).
    // R2 CALIBRATION (2026-07-09, live G4 failure): on codex-cli 0.142.5 / Windows, `--sandbox workspace-write` REJECTS
    // every write ("patch rejected: writing is blocked by read-only sandbox; rejected by user approval settings") —
    // verified in isolation; `-c sandbox_mode` and `-c approval_policy="never"` don't help; ONLY `danger-full-access`
    // writes. Same risk class the mimo bridge already accepts (--dangerously-skip-permissions): the CLI builds the
    // owner's own brief in the owner's own project dir. The read-only JUDGE argv below keeps workspace-write.
    // R2 (2026-07-09, live G4 exit-126): `codex exec resume` on 0.142.5 changed signature to
    // `codex exec resume --json <SESSION_ID> [PROMPT]` — it REJECTS --cd/--sandbox/--skip-git-repo-check (usage + help
    // hint, exit 126), and it cannot carry the sandbox override at all. So codex resume is DROPPED: every build turn is
    // a fresh `exec` with the full flag set (the prompt carries complete instructions each turn anyway; correctness
    // beats the token saving). resumeId stays in the signature so callers don't special-case codex.
    args: ({ cwd, resumeId, model }) => { const a = ['exec', '--json', '--cd', cwd, '--sandbox', 'danger-full-access', '--skip-git-repo-check']; if (model) a.push('-m', model); return a; },
  },
  grok: {
    // flags GROUND-TRUTHED against the installed CLI 0.2.77 (`grok --help`, 2026-07-02): the brief's --no-auto-update
    // does NOT exist; --prompt-file DOES → the task file is passed natively (no "read this file" indirection).
    // Events LIVE-CALIBRATED (parseGrokEvent). grok is a native .exe → spawn WITHOUT shell (safe JSON argv).
    label: 'Grok Build (SuperGrok / X Premium+)', bin: 'grok', verified: true, noShell: true, promptVia: 'file', parse: parseGrokEvent,
    installHint: 'irm https://x.ai/cli/install.ps1 | iex (Windows) — see docs.x.ai/build', loginHint: 'run `grok login` (browser OAuth; needs SuperGrok or X Premium+, NOT base Premium)',
    // MODEL SELECTION (verified end-to-end incl. a bogus-id negative control): top-level `-m <id>`; default grok-build;
    // account/plan + ~/.grok/config.toml dependent. Dynamic list = `grok models` (later). Native exe → clean argv tokens.
    modelFlag: '-m', defaultModel: 'grok-build',
    models: [{ id: 'grok-build', label: 'Grok Build · default' }, { id: 'grok-composer-2.5-fast', label: 'Composer 2.5 Fast' }],
    args: ({ cwd, resumeId, taskFile, model }) => { const a = ['--prompt-file', taskFile || TASK_FILE, '--output-format', 'streaming-json', '--always-approve', '--cwd', cwd]; if (model) a.push('-m', model); if (resumeId) a.push('-r', resumeId); return a; },
  },
  copilot: {
    label: 'GitHub Copilot (any plan incl. Free)', bin: 'copilot', verified: false, promptVia: 'file', parse: parseLooseEvent,
    installHint: 'npm install -g @github/copilot (or `gh extension install github/gh-copilot`)', loginHint: 'sign in via `copilot` once, or set GH_TOKEN',
    // MODEL SELECTION (verified v1.0.68 --help + dispatch probe): `--model <id>`; default `auto` (Copilot routes). NO list
    // subcommand → STATIC-CURATED only (the 18-id catalog lives in `copilot help config`, too brittle to scrape live).
    // Per-account availability is gated by Copilot plan + AI credits; an unavailable id only fails at dispatch.
    modelFlag: '--model', defaultModel: 'auto',
    models: [{ id: 'auto', label: 'Auto · Copilot picks · default' }, { id: 'claude-opus-4.8', label: 'Claude Opus 4.8' }, { id: 'claude-sonnet-5', label: 'Claude Sonnet 5' }, { id: 'claude-sonnet-4.6', label: 'Claude Sonnet 4.6' }, { id: 'claude-haiku-4.5', label: 'Claude Haiku 4.5 · fast' }, { id: 'gpt-5.5', label: 'GPT-5.5' }, { id: 'gpt-5.4', label: 'GPT-5.4' }, { id: 'gpt-5.3-codex', label: 'GPT-5.3 Codex' }, { id: 'gpt-5.4-mini', label: 'GPT-5.4-mini · fast' }, { id: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro (preview)' }, { id: 'gemini-3.5-flash', label: 'Gemini 3.5 Flash · fast' }, { id: 'kimi-k2.7-code', label: 'Kimi K2.7 Code' }],
    args: ({ taskFile, model } = {}) => { const a = ['-p', filePromptFor(taskFile || TASK_FILE), '--allow-all', '--no-ask-user']; if (model) a.push('--model', model); return a; },
  },
  mimo: {
    // flags GROUND-TRUTHED against the installed CLI 0.1.4 (`mimo run --help`) + a LIVE calibration run: `-f` attaches
    // the task file natively; events parsed by parseMimoEvent (real shapes, not guesses).
    label: 'Xiaomi MiMo-Code', bin: 'mimo', verified: true, promptVia: 'file', parse: parseMimoEvent,
    installHint: 'npm install -g @mimo-ai/cli', loginHint: 'run `mimo auth login` (Xiaomi account / MiMo Auto free channel)',
    // MODEL SELECTION (verified `mimo run --help` + run): `-m <provider>/<model>`; default mimo/mimo-auto (FREE, cost 0).
    // The xiaomi/* models are PAID (route through the Token Plan) and fail at request-time on a free account. Dynamic list
    // = `mimo models` (--verbose for cost). Optional --variant low|medium|high for reasoning effort (not wired).
    modelFlag: '-m', defaultModel: 'mimo/mimo-auto',
    models: [{ id: 'mimo/mimo-auto', label: 'MiMo Auto · free · default' }, { id: 'xiaomi/mimo-v2.5', label: 'MiMo-V2.5 · paid' }, { id: 'xiaomi/mimo-v2.5-pro', label: 'MiMo-V2.5-Pro · paid' }, { id: 'xiaomi/mimo-v2.5-pro-ultraspeed', label: 'MiMo-V2.5-Pro UltraSpeed · paid · beta' }],
    args: ({ resumeId, taskFile, model }) => { const a = ['run', 'Execute the attached build brief exactly — it contains your full instructions and context. Write and edit the real project files in this directory.', '-f', taskFile || TASK_FILE, '--format', 'json', '--dangerously-skip-permissions']; if (model) a.push('-m', model); if (resumeId) a.push('-s', resumeId); return a; },
  },
};

// bridge engine value → { cli, model }. The picker value is "bridge:<cli>" (CLI default) or "bridge:<cli>@<model>".
// `@` (not `:`) so it never collides with providers.parseModelRef (splits on the FIRST ":") or the resume-id scheme.
function parseBridgeRef(ref) {
  const s = String(ref || '');
  if (!/^bridge:/.test(s)) return null;
  const rest = s.slice(7);
  const at = rest.indexOf('@');
  return at < 0 ? { cli: rest, model: '' } : { cli: rest.slice(0, at), model: rest.slice(at + 1) };
}

function runCmd(bin, args, { timeout = 15000 } = {}) {
  return new Promise((resolve) => {
    let out = '', err = '', settled = false, forceT = null;
    let child;
    try { child = spawn(bin, args, { shell: process.platform === 'win32', stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true, env: childEnv() }); }
    catch (e) { return resolve({ code: -1, out: '', err: String(e.message || e) }); }
    registerChild(child); // F27: reachable by stopAll / the before-quit reaper
    // AUDIT-2 F25: settle behind a one-shot flag. 'close' is the happy-path resolution (adding a permanent 'exit'
    // resolver would race 'close' and TRUNCATE the final line — critic). On timeout: killTree, then a bounded
    // forceSettle backstop that fires ONLY if 'close' never comes (a taskkill-defeated orphan holding the pipes).
    const settle = (r) => { if (settled) return; settled = true; clearTimeout(t); if (forceT) clearTimeout(forceT); unregisterChild(child); resolve(r); };
    const t = setTimeout(() => { killTree(child); forceT = setTimeout(() => settle({ code: -1, out, err, timeout: true }), 1500); if (forceT.unref) forceT.unref(); }, timeout);
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (err += d));
    child.on('error', (e) => settle({ code: -1, out, err: String(e.message || e) }));
    child.on('close', (code) => settle({ code: code == null ? -1 : code, out, err }));
  });
}

// is the vendor CLI installed (+ signed in, when the CLI can tell us)? Settings shows this; chat:send gates on it.
async function probe(name) {
  const b = BRIDGES[name];
  if (!b) return { name, installed: false, loggedIn: false, error: 'unknown bridge' };
  const act = BRIDGE_ACTIONS[name] || {};
  const v = await runCmd(b.bin, ['--version']);
  if (v.code !== 0) return { name, label: b.label, installed: false, loggedIn: false, verified: b.verified, hint: b.installHint, installCmd: act.installCmd || '', canLogin: !!act.loginArgs };
  let loggedIn = null; // null = "can't tell without a paid call" (grok/copilot/mimo have no documented status command)
  if (b.probeLogin) { const l = await runCmd(b.bin, b.probeLogin); loggedIn = l.code === 0; }
  return { name, label: b.label, installed: true, version: (v.out || v.err || '').trim().split('\n')[0].slice(0, 40), loggedIn, verified: b.verified, hint: loggedIn === false ? b.loginHint : '', installCmd: act.installCmd || '', canLogin: !!act.loginArgs, models: b.models || [], defaultModel: b.defaultModel || '' };
}

// ── DYNAMIC per-user model list: parse a CLI's live list-command output → the models THIS account actually serves, so a
// different user sees THEIR set, not this machine's. Pure parser (smoke-unit-tested on real captured output); listModels
// spawns the command + falls back to the static curated BRIDGES[name].models on ANY failure (never empty). Formats
// ground-truthed 2026-07-07: codex `debug models` = JSON {models:[{slug,display_name,visibility}]}; grok `models` = text
// with "  - <id>" / "  * <id> (default)"; mimo `models` = plain "provider/model" lines; copilot has NO list command. ──
function parseModelList(name, out) {
  const b = BRIDGES[name]; const fallback = (b && b.models) || [];
  try {
    if (name === 'codex') { const j = JSON.parse(out); const list = (j.models || []).filter((m) => m && m.visibility === 'list' && m.slug).map((m) => ({ id: m.slug, label: m.display_name || m.slug })); return list.length ? list : fallback; }
    if (name === 'grok') { const o = []; for (const line of String(out || '').split('\n')) { const m = line.match(/^\s*[-*]\s+(\S+)/); if (m && m[1]) o.push({ id: m[1], label: m[1] + (/\(default\)/.test(line) ? ' · default' : '') }); } return o.length ? o : fallback; }
    if (name === 'mimo') { const o = []; for (const line of String(out || '').split('\n')) { const id = line.trim(); if (/^[\w.-]+\/[\w.-]+$/.test(id)) { const paid = !/^mimo\/mimo-auto$/.test(id); o.push({ id, label: id.split('/').pop() + (paid ? ' · paid' : ' · free') }); } } return o.length ? o : fallback; }
    return fallback; // copilot / unknown → static curated
  } catch { return fallback; }
}
async function listModels(name) {
  const b = BRIDGES[name]; if (!b) return [];
  const cmd = name === 'codex' ? ['debug', 'models'] : ((name === 'grok' || name === 'mimo') ? ['models'] : null);
  if (!cmd) return b.models || []; // copilot: no list subcommand → static curated catalog (same for all users; gated at dispatch)
  try { const r = await runCmd(b.bin, cmd, { timeout: 20000 }); return (r.code === 0) ? parseModelList(name, r.out) : (b.models || []); }
  catch { return b.models || []; }
}

// A6 (audit 2026-07-09): ONE win32 argv-quoting map for every shell:true bridge spawn. codex/copilot/mimo are npm
// .cmd shims → they REQUIRE shell:true (grok's noShell isn't portable), and Node's DEP0190 change means shell:true
// passes argv UNQUOTED into the cmd.exe line: copilot's multi-word -p prompt and mimo's leading positional SHATTERED
// into stray args (never built on Windows), and a cwd/folder name with spaces or cmd metachars concatenated raw
// (command injection via folder name — `demo & calc.exe`). Quote any token carrying whitespace OR a cmd metachar.
// (%VAR% expansion inside quotes is a documented cmd.exe residual — folder names with matched % pairs stay exotic.)
const winQuoteArgv = (argv) => argv.map((a) => { const s = String(a); return (/[\s&|^<>()%!]/.test(s) && !/^".*"$/.test(s)) ? '"' + s.replace(/"/g, '\\"') + '"' : s; });
// model ids ride the argv unquoted-by-value (curated lists + a custom field) — allow only path-safe id characters.
const validModelId = (m) => !m || /^[A-Za-z0-9._\/@:-]+$/.test(String(m));

// Run one bridge builder turn. Streams text/tool events; resolves {ok, text, sessionId, usage, error}.
// `lane` (Q9): a per-lane id (e.g. the page file) so parallel bridge lanes in one cwd use distinct task files.
// `signal` (AbortSignal): a per-lane wall-clock timeout / Stop aborts it → the spawned child is killed (a wedged
// CLI bridge otherwise blocks its swarm lane forever — GW31: a grok lane ran 8087s = 2h15m and held the whole pool).
function runBridge(name, { cwd, prompt, resumeId, lane, signal, onText, onTool, model }) {
  const b = BRIDGES[name];
  if (!b) return Promise.resolve({ ok: false, error: 'unknown bridge: ' + name });
  if (signal && signal.aborted) return Promise.resolve({ ok: false, error: 'aborted before start' });
  if (!validModelId(model)) return Promise.resolve({ ok: false, error: 'invalid model id: ' + String(model).slice(0, 60) }); // A6: never splice an unsafe id into a shell line
  const taskName = taskFileName(lane); // relative filename the CLI reads from cwd (bare, as before)
  return new Promise((resolve) => {
    let taskFile = null;
    if (b.promptVia === 'file') { // long prompts can't ride argv (win32 ~8k) and stdin is unverified for these CLIs
      taskFile = path.join(cwd, taskName);
      try { fs.writeFileSync(taskFile, String(prompt || '')); } catch (e) { return resolve({ ok: false, error: 'could not write ' + taskName + ': ' + e.message }); }
    }
    const useShell = b.noShell ? false : process.platform === 'win32';
    let argv = b.args({ cwd, resumeId, taskFile: taskName, model });
    if (useShell) argv = winQuoteArgv(argv); // A6: fixes copilot/mimo multi-word args on Windows + the spaced/metachar-cwd injection vector
    const child = spawn(b.bin, argv, { shell: useShell, cwd, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true, env: childEnv() });
    activeChildren.add(child);
    // abort (per-lane timeout / Stop) → kill this child so the lane resolves instead of hanging on a stuck CLI
    // AUDIT-2 F25: after killTree, a bounded force-settle so a child that SURVIVES the kill (taskkill-defeated orphan
    // holding the pipes) can never leave the lane's promise hanging forever (the GW31 2h15m wedge class).
    const onAbort = () => { killTree(child); const ft = setTimeout(() => done({ ok: false, error: 'aborted or timed out', text, sessionId, usage }), 1500); if (ft.unref) ft.unref(); };
    if (signal) signal.addEventListener('abort', onAbort, { once: true });
    let text = '', sessionId = resumeId || null, usage = null, failed = null, buf = '', errTail = '', settled = false;
    const cleanup = () => { activeChildren.delete(child); if (signal) { try { signal.removeEventListener('abort', onAbort); } catch {} } if (taskFile) { try { fs.unlinkSync(taskFile); } catch {} } };
    const done = (r) => { if (settled) return; settled = true; cleanup(); resolve(r); }; // F25: one-shot settle (happy path still resolves on 'close')
    const feed = (chunk) => {
      buf += chunk;
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line) continue;
        const e = b.parse(line);
        if (!e) continue;
        if (e.kind === 'session') sessionId = e.id;
        else if (e.kind === 'text') { text += (text ? '\n\n' : '') + e.text; if (onText) onText(e.text); }
        else if (e.kind === 'textDelta') { text += e.text; if (onText) onText(e.text); } // token stream (grok) — concatenate raw, no separators
        else if (e.kind === 'tool') { if (onTool) onTool({ name: e.name, input: e.input }); }
        else if (e.kind === 'tools') { if (onTool) for (const t of e.tools) onTool(t); }
        else if (e.kind === 'usage') usage = e.usage;
        else if (e.kind === 'failed') failed = typeof e.error === 'string' ? e.error : JSON.stringify(e.error).slice(0, 200);
      }
    };
    child.stdout.on('data', (d) => feed(String(d)));
    child.stderr.on('data', (d) => { errTail = (errTail + String(d)).slice(-1200); });
    child.on('error', (e) => done({ ok: false, error: b.bin + ' spawn failed: ' + String(e.message || e), text, sessionId, usage }));
    child.on('close', (code) => {
      if (buf.trim()) feed('\n'); // flush a final unterminated line
      if (failed) return done({ ok: false, error: failed, text, sessionId, usage });
      if (code !== 0) return done({ ok: false, error: b.bin + ' exited ' + code + (errTail ? ' — ' + errTail.trim().split('\n').pop() : ''), text, sessionId, usage });
      done({ ok: true, text, sessionId, usage });
    });
    try { child.stdin.on('error', () => {}); } catch {} // fast-fail closes stdin → the async EPIPE must NOT become an uncaught exception (could crash the Electron main)
    try { if (b.promptVia === 'stdin') child.stdin.write(String(prompt || '')); child.stdin.end(); } catch {}
  });
}

// win32: a shell:true spawn is `cmd.exe /c <bin>` — child.kill() reaps only cmd.exe and ORPHANS the real (paid) worker.
// Kill the whole tree via taskkill so a wedged judge/build lane actually stops. POSIX: child.kill() is enough.
// AUDIT-2 F24 (the win32 self-defeat BLOCKER): the old body spawned taskkill (async) then called child.kill()
// SYNCHRONOUSLY — killing cmd.exe reparents/orphans the real worker BEFORE taskkill snapshots the tree, so the
// paid worker survives AND holds the inherited stdout/stderr pipes → every promise that resolves on 'close' hangs
// forever. Fix: on win32 run taskkill /T /F FIRST; child.kill() (fallback) + the optional onReaped completion
// callback fire ONLY inside taskkill's 'close'/'error' handler, after the tree has actually been reaped. onReaped
// lets the before-quit reaper (F27) await real termination. Backward-compatible with every existing 1-arg caller.
function killTree(child, onReaped) {
  let fired = false;
  const fire = () => { if (fired) return; fired = true; if (onReaped) { try { onReaped(); } catch {} } };
  if (!child) { fire(); return; }
  if (process.platform === 'win32' && child.pid) {
    let tk = null;
    try { tk = spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { windowsHide: true }); } catch {}
    if (!tk) { try { child.kill(); } catch {} fire(); return; } // taskkill unavailable/blocked → degrade to bare child.kill (today's behavior), never worse
    const after = () => { try { child.kill(); } catch {} fire(); }; // fallback kill + signal completion only AFTER taskkill reaped the tree
    tk.on('close', after);
    tk.on('error', after);
  } else {
    try { child.kill(); } catch {}
    fire();
  }
}
// AUDIT-2 F25: kill the tree AND guarantee the caller's promise settles even if a taskkill-defeated orphan holds the
// pipes so 'close' never fires. Use ONLY on the abort/timeout branch — the happy path must still resolve on 'close'
// (a permanent 'exit' resolver would race 'close' and TRUNCATE the final NDJSON line). `settle` is the caller's
// one-shot guard (clears its own timer + resolves once); this arms a bounded backstop that fires only if 'close'
// never comes. Returns the timer so the caller's settle() can clearTimeout it.
function killAndSettle(child, settle, result, graceMs = 1500) {
  killTree(child);
  const t = setTimeout(() => { try { settle(result); } catch {} }, graceMs);
  if (t && t.unref) t.unref();
  return t;
}
// AUDIT-2 F27: ONE tracked-children registry so stopAll AND the before-quit reaper cover the whole spawn class.
// runBridge/judgeGrok/judgeCli already add to activeChildren directly; the other spawn sites (runCmd, login,
// runInstall, claudeRun, spawnImageCLI) register via these so a Stop/quit can reach them too.
function registerChild(c) { if (c) activeChildren.add(c); }
function unregisterChild(c) { if (c) activeChildren.delete(c); }
function stopAll() { for (const c of activeChildren) { killTree(c); } activeChildren.clear(); }
// reapAllAndWait = stopAll() that RESOLVES when every tree is actually reaped (each killTree onReaped fired), or a
// bounded fallback, so app.on('before-quit') can await real termination instead of racing app.exit and orphaning
// the very worker it is trying to kill (taskkill is itself a spawned child — it must finish before we exit).
async function reapAllAndWait(deadlineMs = 2500) {
  const kids = [...activeChildren];
  activeChildren.clear();
  if (!kids.length) return;
  await new Promise((resolve) => {
    let remaining = kids.length, settled = false;
    const finish = () => { if (settled) return; settled = true; resolve(); };
    const done = () => { remaining -= 1; if (remaining <= 0) finish(); };
    const timer = setTimeout(finish, deadlineMs);
    if (timer && timer.unref) timer.unref();
    for (const c of kids) { try { killTree(c, done); } catch { done(); } }
  });
}

// ── SUBSCRIPTION JUDGE via Grok Build (proven live 2026-07-02: ACP `resource_link` blocks let grok OPEN AND SEE a real
// screenshot from disk — it answered "Coffee" for the MRDN4 lineup frame). The judge role/rubric/context go into a
// `.dezign-judge.md` file (argv can't carry them on win32); the frames ride as file:// resource links; the tiny
// prompt-json argv survives because grok is spawned WITHOUT a shell (native exe → no cmd quote-mangling). ──
// wall-clock cap for a judge CLI call — a vision verdict is a single look, no legit reason to exceed this. Prevents the
// no-timeout INFINITE HANG the owner hit (grok-build wedged on read_file for 20m+). Generous for a slow vision model, bounded.
const JUDGE_TIMEOUT_MS = 240000; // 4 min
function buildGrokJudgeBlocks(imagePaths = []) {
  // 2026-07-07 cold-eye: the default grok judge model (grok-build) is AGENTIC and tried to read_file the binary .png
  // frame → tool_output_error → judge failed. Steer it to VIEW (not read_file) the images. Frames ride as resource_links.
  const blocks = [{ type: 'text', text: 'Read the file .dezign-judge.md in the current working directory NOW — it defines your judge role, the scoring rubric, and the full judging context. Then VIEW each linked frame image below AS AN IMAGE — do NOT call read_file (or any file/text tool) on the .png frames; they are binary and reading them errors. You are a purely visual judge: just look at the images. Then output the JSON verdict exactly as the role file specifies — JSON first, no preamble.' }];
  for (const p of imagePaths) blocks.push({ type: 'resource_link', uri: 'file:///' + String(p).replace(/\\/g, '/').replace(/^\/+/, ''), name: pathBase(p) });
  return blocks;
}
function pathBase(p) { const s = String(p).split(/[\\/]/); return s[s.length - 1] || 'frame.png'; }
function judgeGrok({ cwd, system, userText, imagePaths = [], model = '' }) {
  return new Promise((resolve) => {
    const roleFile = path.join(cwd, '.dezign-judge.md');
    try { fs.writeFileSync(roleFile, String(system || '') + '\n\n---\n\n' + String(userText || '')); }
    catch (e) { return resolve({ ok: false, error: 'could not write .dezign-judge.md: ' + e.message }); }
    const args = ['--prompt-json', JSON.stringify(buildGrokJudgeBlocks(imagePaths)), '--output-format', 'streaming-json', '--always-approve', '--cwd', cwd];
    if (model) args.push('-m', model); // per-CLI model selection for the grok judge (bridge:grok@<model>)
    const child = spawn('grok', args, { shell: false, cwd, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true, env: childEnv() });
    activeChildren.add(child);
    let text = '', failed = null, buf = '', errTail = '';
    const feed = (chunk) => {
      buf += chunk;
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line) continue;
        const e = parseGrokEvent(line);
        if (!e) continue;
        if (e.kind === 'textDelta' || e.kind === 'text') text += e.text;
        else if (e.kind === 'failed') failed = typeof e.error === 'string' ? e.error : JSON.stringify(e.error).slice(0, 200);
      }
    };
    child.stdout.on('data', (d) => feed(String(d)));
    child.stderr.on('data', (d) => { errTail = (errTail + String(d)).slice(-800); });
    let settled = false;
    const done = (res) => { if (settled) return; settled = true; clearTimeout(killT); activeChildren.delete(child); try { fs.unlinkSync(roleFile); } catch {} if (res && res.ok === false) { try { fs.writeFileSync(path.join(cwd, '.dezign-judge-debug.txt'), 'GROK judge FAILED — ' + (res.error || '') + '\n\n--- parsed text ---\n' + (text || '(none)') + '\n\n--- stderr tail ---\n' + (errTail || '(none)')); } catch {} } resolve(res); }; // AUDIT (2026-07-07): persist raw output on failure so a silent judge is diagnosable
    // JUDGE TIMEOUT (2026-07-07 cold-eye): judgeGrok had NO wall-clock cap — a wedged grok CLI hung /review forever (the
    // owner waited 20m on grok-build looping read_file). Bound it: kill the child + resolve a graceful failure. Mirrors
    // runBridge's per-lane abort (the GW31 "grok lane ran 2h15m and held the pool" class); the judge had no such guard.
    const killT = setTimeout(() => { killTree(child); done({ ok: false, error: 'grok judge timed out after ' + Math.round(JUDGE_TIMEOUT_MS / 1000) + 's — the CLI never returned a verdict', text }); }, JUDGE_TIMEOUT_MS);
    child.on('error', (e) => done({ ok: false, error: 'grok spawn failed: ' + String(e.message || e) }));
    child.on('close', (code) => {
      if (buf.trim()) feed('\n');
      if (failed) return done({ ok: false, error: failed, text });
      if (code !== 0) return done({ ok: false, error: 'grok exited ' + code + (errTail ? ' — ' + errTail.trim().split('\n').pop() : ''), text });
      done({ ok: true, text, usage: { input: 0, inUncached: 0, cacheRead: 0, cacheCreate: 0, output: 0, cost: 0 } }); // subscription: no token accounting exposed
    });
  });
}

// ── GENERIC multi-CLI DESIGN JUDGE (2026-07-07, live-vision-verified): codex/copilot/mimo can all SEE screenshots in
// headless mode — each proven live with known-word images + negative controls. Image delivery is a FLAG per CLI (not
// grok's ACP resource_link). The rubric/verdict-JSON avoids win32 shell brace-mangling: codex takes the FULL prompt via
// STDIN (a pipe, no shell); copilot/mimo read a `.dezign-judge.md` role file (a short, brace-free prompt tells them to).
// grok keeps judgeGrok (its ACP shape is grok-specific). Same return shape as judgeGrok. ──
const JUDGE_DELIVERY = {
  codex: { promptVia: 'stdin', argv: (cwd, model, imgs) => ['exec', '--json', '--cd', cwd, '--sandbox', 'workspace-write', '--skip-git-repo-check', '-m', model || 'gpt-5.5', ...imgs.flatMap((p) => ['-i', p])], parse: parseCodexEvent },
  copilot: { promptVia: 'arg', raw: true, argv: (cwd, model, imgs, prompt) => ['-p', prompt, '--allow-all', '--no-ask-user', '--model', model || 'auto', ...imgs.flatMap((p) => ['--attachment', p])], parse: parseLooseEvent }, // --attachment per frame; --model auto (account-gated). raw:true — copilot's default output is human text + a ```json verdict; parseLooseEvent JSON.parses & DROPS the bare verdict line, so capture RAW and let the verdict parser extract it. (-s truncates the stream → omitted.)
  mimo: { promptVia: 'leading', argv: (cwd, model, imgs, prompt) => ['run', prompt, '--format', 'json', '--dangerously-skip-permissions', '-m', model || 'xiaomi/mimo-v2.5', ...(imgs.length ? ['-f', ...imgs] : [])], parse: parseMimoEvent }, // audit 2026-07-07: dropped the UNVERIFIED --dir (cwd comes from the spawn opts, like the build path); -f LAST and ONLY when frames exist (no dangling flag on the image-less reformat round)
};
function judgeCli(name, { cwd, system, userText, imagePaths = [], model = '' }) {
  const b = BRIDGES[name], del = JUDGE_DELIVERY[name];
  if (!b || !del) return Promise.resolve({ ok: false, error: 'no judge path for ' + name });
  return new Promise((resolve) => {
    const fullPrompt = String(system || '') + '\n\n---\n\n' + String(userText || '') + '\n\nView the attached frame image(s) now and score them. Output the JSON verdict first, no preamble.';
    let roleFile = null, promptArg = '';
    if (del.promptVia !== 'stdin') { // copilot/mimo: role → file (a short brace-free arg tells them to read it — dodges .cmd/shell brace-mangling of the JSON rubric)
      roleFile = path.join(cwd, '.dezign-judge.md');
      try { fs.writeFileSync(roleFile, fullPrompt); } catch (e) { return resolve({ ok: false, error: 'could not write .dezign-judge.md: ' + e.message }); }
      promptArg = 'Read the file .dezign-judge.md in this directory, then VIEW the attached frame image(s) and output the JSON verdict exactly as it specifies — JSON first, no preamble.';
    }
    const useShell = !b.noShell && process.platform === 'win32';
    let argv = del.argv(cwd, model, imagePaths, promptArg);
    // win32 shell:true does NOT quote args (DEP0190) → a multi-word -p/positional prompt splits into stray args
    // ("Invalid command format" from copilot). A6: the shared winQuoteArgv map (whitespace + cmd metachars).
    if (useShell) argv = winQuoteArgv(argv);
    let child;
    try { child = spawn(b.bin, argv, { shell: useShell, cwd, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true, env: childEnv() }); }
    catch (e) { if (roleFile) { try { fs.unlinkSync(roleFile); } catch {} } return resolve({ ok: false, error: b.bin + ' judge spawn failed: ' + String(e.message || e) }); }
    activeChildren.add(child);
    let text = '', failed = null, buf = '', errTail = '';
    const feed = del.raw
      ? (chunk) => { text += String(chunk); } // raw capture (copilot) — the verdict parser extracts the JSON from the blob
      : (chunk) => { buf += chunk; let i; while ((i = buf.indexOf('\n')) >= 0) { const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1); if (!line) continue; const e = del.parse(line); if (!e) continue; if (e.kind === 'textDelta' || e.kind === 'text') text += e.text; else if (e.kind === 'failed') failed = typeof e.error === 'string' ? e.error : JSON.stringify(e.error).slice(0, 200); } };
    child.stdout.on('data', (d) => feed(String(d)));
    child.stderr.on('data', (d) => { errTail = (errTail + String(d)).slice(-800); });
    let settled = false;
    const done = (res) => { if (settled) return; settled = true; clearTimeout(killT); activeChildren.delete(child); if (roleFile) { try { fs.unlinkSync(roleFile); } catch {} } if (res && res.ok === false) { try { fs.writeFileSync(path.join(cwd, '.dezign-judge-debug.txt'), name + ' judge FAILED — ' + (res.error || '') + '\n\n--- captured ---\n' + (text || '(none)') + '\n\n--- stderr tail ---\n' + (errTail || '(none)')); } catch {} } resolve(res); }; // AUDIT (2026-07-07): persist raw output on failure so a silent judge is diagnosable
    const killT = setTimeout(() => { killTree(child); done({ ok: false, error: b.bin + ' judge timed out after ' + Math.round(JUDGE_TIMEOUT_MS / 1000) + 's — the CLI never returned a verdict', text }); }, JUDGE_TIMEOUT_MS); // class-first: same no-timeout hang as judgeGrok
    child.on('error', (e) => done({ ok: false, error: b.bin + ' judge spawn failed: ' + String(e.message || e), text }));
    child.on('close', (code) => {
      if (buf.trim()) feed('\n');
      if (failed) return done({ ok: false, error: failed, text });
      if (code !== 0) return done({ ok: false, error: b.bin + ' judge exited ' + code + (errTail ? ' — ' + errTail.trim().split('\n').pop() : ''), text });
      done({ ok: true, text, usage: { input: 0, inUncached: 0, cacheRead: 0, cacheCreate: 0, output: 0, cost: 0 } });
    });
    try { child.stdin.on('error', () => {}); } catch {} // codex fast-fail closes stdin → swallow the async EPIPE so it can't crash the Electron main; the close/timeout path handles the failure
    try { if (del.promptVia === 'stdin') child.stdin.write(fullPrompt); child.stdin.end(); } catch {}
  });
}

// ── Settings "Connect" / (experimental) "Install" actions. The vendor facts live here; the host IPCs spawn them.
// loginArgs=null → no clean non-interactive login command (Connect hidden for that CLI). installCmd is the exact,
// user-visible command (never hidden). ──
const BRIDGE_ACTIONS = {
  codex: { loginArgs: ['login'], installCmd: 'npm install -g @openai/codex' },
  grok: { loginArgs: ['login'], installCmd: 'irm https://x.ai/cli/install.ps1 | iex' },
  copilot: { loginArgs: null, installCmd: 'npm install -g @github/copilot' },
  mimo: { loginArgs: ['auth', 'login'], installCmd: 'npm install -g @mimo-ai/cli' },
};

// Launch the vendor login (browser OAuth for grok/codex). Best-effort: we spawn it and report the exit; the renderer
// re-probes after. Piped stdio + a generous timeout; the OAuth itself happens in the user's browser.
function login(name) {
  return new Promise((resolve) => {
    const b = BRIDGES[name], a = BRIDGE_ACTIONS[name];
    if (!b || !a || !a.loginArgs) return resolve({ ok: false, error: 'no login command for ' + name });
    let out = '', child, settled = false, forceT = null;
    try { child = spawn(b.bin, a.loginArgs, { shell: process.platform === 'win32', stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true, env: childEnv() }); }
    catch (e) { return resolve({ ok: false, error: String(e.message || e) }); }
    registerChild(child); // F27
    // AUDIT-2 F25: settle behind a flag; on timeout kill + a bounded force-settle so a surviving OAuth waiter can't hang the button forever.
    const settle = (r) => { if (settled) return; settled = true; clearTimeout(t); if (forceT) clearTimeout(forceT); unregisterChild(child); resolve(r); };
    const t = setTimeout(() => { killTree(child); forceT = setTimeout(() => settle({ ok: false, code: -1, error: 'login timed out', out }), 1500); if (forceT.unref) forceT.unref(); }, 300000);
    const grab = (d) => { out = (out + String(d)).slice(-3000); };
    child.stdout && child.stdout.on('data', grab);
    child.stderr && child.stderr.on('data', grab);
    child.on('error', (e) => settle({ ok: false, error: String(e.message || e), out }));
    child.on('close', (code) => settle({ ok: code === 0, code, out }));
  });
}

// (EXPERIMENTAL, UI-gated) Run the install command, streaming output via onData; resolve on exit. Always shows the exact
// command; npm -g may need elevation → a non-zero exit is reported, never silently swallowed. Runs in PowerShell on win32
// so PS one-liners (irm|iex) AND npm both work; sh elsewhere.
// R3 cold-eye class-fix (owner: "the same bug may hit every CLI" — it did; the mechanism is THIS shared
// function, so codex/grok/copilot/mimo were all affected): (1) npm and installer scripts are near-SILENT
// without a TTY, so the streamed log sat EMPTY for minutes and "Install for me" looked dead; (2) the 5-min
// timeout killTree'd the child but NEVER resolved the promise when the child survived the kill — the button
// hung forever. Now: an immediate "[running…]" line, a 15s heartbeat, and a timeout that ALWAYS resolves
// with an honest, actionable error. runInstall is exported for the smoke's behavioral lock.
function runInstall(cmd, onData, timeoutMs = 300000) {
  return new Promise((resolve) => {
    let done = false, out = '', child;
    const isWin = process.platform === 'win32';
    const shellBin = isWin ? 'powershell.exe' : '/bin/sh';
    const shellArgs = isWin ? ['-NoProfile', '-Command', cmd] : ['-c', cmd];
    const push = (d) => { const s = String(d); out = (out + s).slice(-8000); if (onData) onData(s); };
    const finish = (r) => { if (done) return; done = true; clearTimeout(t); clearInterval(hb); unregisterChild(child); resolve(r); };
    try { child = spawn(shellBin, shellArgs, { stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true, env: childEnv() }); }
    catch (e) { return resolve({ ok: false, error: String(e.message || e), cmd });
    }
    registerChild(child); // F27: a Stop / before-quit reaper can reach a running install too
    push('[running: ' + cmd + ']\n');
    const t0 = Date.now();
    const hb = setInterval(() => { push('[still running · ' + Math.round((Date.now() - t0) / 1000) + 's — npm/installers are often silent for a while; this is normal]\n'); }, 15000);
    const t = setTimeout(() => {
      try { killTree(child); } catch {}
      push('[timed out]\n');
      finish({ ok: false, error: 'timed out after ' + Math.round(timeoutMs / 60000) + ' min — run it yourself in a terminal: ' + cmd, cmd, out });
    }, timeoutMs);
    child.stdout && child.stdout.on('data', push);
    child.stderr && child.stderr.on('data', push);
    child.on('error', (e) => finish({ ok: false, error: String(e.message || e), cmd, out }));
    child.on('close', (code) => finish({ ok: code === 0, code, cmd, out }));
  });
}
function install(name, onData) {
  const a = BRIDGE_ACTIONS[name];
  if (!a || !a.installCmd) return Promise.resolve({ ok: false, error: 'no install command for ' + name });
  return runInstall(a.installCmd, onData);
}

// codexArgs kept as a named export for the smoke's argv-shape lock
const codexArgs = (o) => BRIDGES.codex.args(o);

module.exports = { BRIDGES, BRIDGE_ACTIONS, probe, runCmd, runBridge, judgeGrok, judgeCli, JUDGE_DELIVERY, buildGrokJudgeBlocks, parseCodexEvent, parseLooseEvent, parseMimoEvent, parseGrokEvent, codexArgs, login, install, stopAll, TASK_FILE, taskFileName, parseBridgeRef, parseModelList, listModels, winQuoteArgv, validModelId, runInstall, killTree, killAndSettle, registerChild, unregisterChild, reapAllAndWait };
