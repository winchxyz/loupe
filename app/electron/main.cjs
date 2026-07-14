/* deZign-pro · Electron main — opens the app window (renderer = chat + preview).
   webviewTag enabled so the preview pane can host BOTH our same-origin generated site
   and external real sites, with the picker injected via the webview (CDP path). */
const { app, BrowserWindow, ipcMain, dialog, shell, Menu, session } = require('electron');
const path = require('path');
const fs = require('fs');
const { runChat, runCritic, runClarify, runArtDirector, runReviewer, runEnforcer, runFlowPlanner, resetSession, setSession, stop, getCriticCard, getBuilderCard, composeBuilderTurn, __setSdkForTest } = require('./agent.cjs');
const artdir = require('./artdirection.cjs'); // STRUCTURE-SAMENESS: generative art-direction pre-pass + cross-site divergence memory
const flow = require('./flow.cjs'); // SWARM (step 21): pure helpers — plan parsing, foundation/page prompts, worker pool
const flowlog = require('./flowlog.cjs'); // SWARM build log: agents' narration + tool calls + file writes, line-by-line
const promptlang = require('./promptlang.cjs'); // PROMPT VOCABULARY: key=value brief terms bound to structure playbooks / archetypes
const providers = require('./providers.cjs'); // Stage 5 · 17a: BYOK OpenAI-compatible client → cross-vendor judge
const bridges = require('./bridges.cjs'); // Stage 5 · 19: consumer-subscription CLI bridges (Codex now; Grok/Copilot/MiMo planned)
const palette = require('./palette.cjs'); // host-side deterministic design-system board (palette.html from styles.css :root tokens)
const references = require('./references.cjs'); // KNOWLEDGE-WIRING #3: retrieval over the curated style-reference corpus (1288 refs)
const reviewnote = require('./reviewnote.cjs'); // Reviewer-report grounding: persist the QA report + inject it into later turns ("fix #2" must mean something to the builder)
const IMAGERY_ASK = require('../shared/imagery-ask.json'); // T8 (audit 2026-07-09): ONE imagery ask shared with the renderer's pre-/flow gate
const appPaths = require('./paths.cjs'); // R3: ONE dev/packaged resolver — library (repo tree · extraResource · settings override), sites, agent cards

// R3: packaged runs live under Roaming/Loupe, dev keeps Roaming/dezign-pro-app (the owner's profile untouched).
// electron-builder does NOT inject productName into the asar's package.json, so app.getName() stays the dev name —
// without this explicit setPath the packaged app would silently reuse (and pollute) the dev userData. Must run
// before ANYTHING reads app.getPath('userData') (settings/artdirection reads below are module-level).
if (app.isPackaged) {
  try { app.setName('Loupe'); app.setPath('userData', path.join(app.getPath('appData'), 'Loupe')); } catch {}
}

// CRASH GUARD (R2) — belt-and-suspenders so a stray async error NEVER shows the owner Electron's fatal
// "A JavaScript error occurred in the main process" dialog and kills the app. The real fix for each source
// stays local (e.g. the fs.watch 'error' listener in project.cjs); this is the last line of defence for the
// ones we haven't found yet: log it, keep the app alive. Placed before whenReady so it covers startup too.
process.on('uncaughtException', (err) => {
  try { console.error('[uncaughtException] kept non-fatal:', (err && err.stack) || err); } catch {}
});
process.on('unhandledRejection', (reason) => {
  try { console.error('[unhandledRejection] kept non-fatal:', (reason && reason.stack) || reason); } catch {}
});

// STALE-CODE GUARD — kills the recurring "fix landed on disk but the running app still executes the OLD code" loop
// (main-process .cjs files load ONCE at app start; the owner lost three rounds to an un-restarted app that silently
// ran pre-fix code). On every chat turn: if any main-process source file on disk is NEWER than this process, warn
// LOUDLY in the chat that a restart is required. Deterministic, host-side, zero-cost.
const PROC_START_MS = Date.now();
const MAIN_CODE_FILES = ['main.cjs', 'agent.cjs', 'imagery.cjs', 'preload.cjs', 'palette.cjs', 'references.cjs', 'library.cjs', 'imagesource.cjs', 'project.cjs', 'reviewnote.cjs', 'providers.cjs', 'bridges.cjs', 'flow.cjs', 'flowlog.cjs', 'promptlang.cjs', 'childenv.cjs', 'safepath.cjs', 'paths.cjs', 'artdirection.cjs', 'assetsource.cjs', 'buildintent.cjs', 'grounding.cjs', 'nethost.cjs', 'starter.cjs'];
function staleCodeNote() {
  try {
    const newer = MAIN_CODE_FILES.filter((f) => { try { return fs.statSync(path.join(__dirname, f)).mtimeMs > PROC_START_MS + 2000; } catch { return false; } });
    if (!newer.length) return '';
    return '⚠ RESTART REQUIRED — the app\'s code on disk is newer than this running app (' + newer.join(', ') + ' changed since launch). This process is still executing the OLD code, so new fixes are NOT active. Fully quit and relaunch the app.\n\n';
  } catch { return ''; }
}

// KNOWLEDGE-WIRING #3 — the host-side search the `search_design_library` MCP tool calls (and the passive-injection helper).
// Combines the curated techniques/recipes/standards (library.cjs) with the real-site style-reference corpus (references.cjs)
// into ONE bounded, labelled text block. Deterministic + fast (no LLM). Library = HELP: the block says adapt, don't clone.
function searchDesignLibrary(query) {
  const parts = [];
  // STRUCTURE PLAYBOOKS first and FULL (the anti-template layer): a query naming a composition gets its
  // playbook whole — never truncated mid-skeleton, never out-ranked by a keyword-lottery article.
  const usedRel = new Set();
  try {
    for (const rel of library.structureMatches(query).slice(0, 2)) {
      const c = fs.readFileSync(path.join(appPaths.libDir(), rel), 'utf8').trim();
      parts.push('— STRUCTURE PLAYBOOK (apply its skeleton + variation axes; vary, don\'t clone) —\n### ' + rel + '\n' + c.slice(0, 3400));
      usedRel.add(rel);
    }
  } catch {}
  let lib = []; try { lib = library.search(query, 3); } catch {}
  lib = lib.filter((e) => !usedRel.has(e.rel));
  if (lib.length) {
    parts.push('— CURATED TECHNIQUES / STANDARDS —');
    for (const e of lib) { let c = e.content || ''; const cap = e.rel.startsWith('patterns/') ? 3400 : 1400; if (c.length > cap) c = c.slice(0, cap) + '\n…[trimmed]'; parts.push('### ' + e.title + '  (' + e.rel + ')\n' + c); }
  }
  let refs = []; try { refs = references.search(query, 3); } catch {}
  if (refs.length) {
    parts.push('\n— REAL STYLE REFERENCES (study the palette / type / composition, then ADAPT — never clone) —');
    for (const r of refs) { const ex = references.getExemplar(r.n, 1600); if (ex) parts.push('### ' + r.title + ' [' + r.theme + '] — ' + r.tagline + '\n' + ex); }
  }
  // ASSET-SOURCES GAP (2026-07-04): the /flow grounding was blind to the 3D/asset registry (retrieve() injects it
  // for single builds; this is the missing twin). When the query implies assets, arm the swarm with the registry.
  try { const a = library.assetSources(query); if (a) parts.push(a); } catch {}
  if (!parts.length) return '';
  let out = parts.join('\n\n');
  if (out.length > 12500) out = out.slice(0, 12500) + '\n…[truncated — refine your query for more specific matches]';
  return out;
}
// Q3 / Taste-Layer T2: append the quantitative taste-priors floor to a FINALIZED builder grounding string.
// Called at every real-build grounding root (single builderLibCtx, flow planner/foundation/page ctx) so the
// priors reach the model host-GUARANTEED, never depending on it calling the search tool (KNOWLEDGE-WIRING lesson).
function withTastePriors(ctx) {
  let p = ''; try { p = library.tastePriors(); } catch {}
  if (!p) return ctx || '';
  return (ctx ? ctx + '\n\n' : '') + p;
}
// D5 (2026-07-05): the Studio / standalone Reviewer judged with ZERO standards grounding, so its persisted QA report
// could mis-ground the next builder (e.g. "add whitespace" on a deliberately dense design). Give it the same anchors the
// builder has — the quantitative taste floor + the design-standards precedence/governance. (It reads the project DESIGN.md
// itself via its Read tool; host-guaranteed injection here matches the KNOWLEDGE-WIRING lesson for the standards it can't score.)
// R2 (F2): a bridge:/provider: build-model ref (bridge:codex · openrouter:/openai:/gemini:/xai:) is NOT a valid
// Claude SDK model id. Every tool-less CLAUDE helper (Art Director, Clarify, Reviewer, the SDK critic fallback) must
// get undefined (→ SDK default) instead of the raw foreign ref — else the SDK sub-turn errors and (with the old
// swallow) degraded SILENTLY. This is the single sanitize used at all Claude-helper call sites (was inlined 2×).
const claudeOnlyModel = (m) => (m && (/^bridge:/.test(m) || providers.parseModelRef(m))) ? undefined : (m || undefined);

// A1 (audit 2026-07-09): is ANY Claude auth reachable for the SDK engine? (a) the in-app Anthropic key,
// (b) an externally-set ANTHROPIC_API_KEY (the app was launched from a shell that has one), (c) a Claude Code
// login on this machine (the SDK spawns Claude Code, whose credential store is ~/.claude/.credentials.json).
// `sim` (TEST-ONLY, from test:authPreflight): { noEnv, noCreds } simulates a stranger's machine — the owner's real
// login would otherwise make the blocked path untestable here.
function claudeAuthAvailable(s, sim) {
  if (s && s.anthropicKey) return true;
  if (!(sim && sim.noEnv) && process.env.ANTHROPIC_API_KEY) return true;
  if (sim && sim.noCreds) return false;
  try { return fs.existsSync(path.join(require('os').homedir(), '.claude', '.credentials.json')); } catch { return false; }
}
// A1 (3a): mirror the in-app Anthropic key into the process env — the Agent SDK child inherits it, so a key saved
// in Settings authenticates every Claude turn (key present → it wins; absent → the Claude Code login, if any).
// An EXTERNALLY-launched ANTHROPIC_API_KEY stays as the fallback (never clobbered by an empty setting).
const _extAnthropicKey = process.env.ANTHROPIC_API_KEY || '';
function applyAnthropicEnv(s) {
  const k = (s && s.anthropicKey) || _extAnthropicKey;
  try { if (k) process.env.ANTHROPIC_API_KEY = k; else delete process.env.ANTHROPIC_API_KEY; } catch {}
}
// A1 (3b): ONE source of truth for the auth preflight — returns the actionable note when the turn would run on the
// Claude engine with no reachable auth, else null. chat:send gates on it; the TEST-ONLY IPC below exercises it
// without a paid dispatch (how the fresh-user probe proves the path).
function authPreflightNote(s, sim) {
  if (/^bridge:/.test((s && s.model) || '') || providers.parseModelRef((s && s.model) || '') || claudeAuthAvailable(s, sim)) return null;
  return 'Claude isn\'t connected yet, so this turn was not started. Two easy ways to fix it:\n\n' +
    '1. **Add an Anthropic API key** — Settings (gear) → Providers & keys → Anthropic API Key (create one at console.anthropic.com), or\n' +
    '2. **Sign in to Claude Code** — run `claude` once in a terminal and follow the login (uses your Claude subscription).\n\n' +
    'You can also build with a different engine: add its key under Settings → Providers & keys, then pick it in Settings → Build model.';
}
ipcMain.handle('test:authPreflight', (_e, fakeSettings, sim) => authPreflightNote(fakeSettings || readSettings(), sim || null)); // TEST-ONLY: prove the preflight without dispatching
// P4 (audit 2026-07-09): a failed turn used to dump the raw SDK/engine text behind a bare developer "[error]" tag —
// a stranger reads that as a crash with no way forward. Map the common causes to one plain, actionable sentence and
// keep the raw text as a secondary quoted line (still greppable, never the headline).
function friendlyTurnError(raw) {
  const r = String(raw || '');
  let plain = 'Something went wrong on that turn.', hint = 'Try again — if it repeats, check your model and keys in Settings (gear).';
  if (/api.?key|x-api-key|authenticat|unauthorized|\b401\b|credential|logg?ed ?in|log ?in|OAuth|token.*expired|invalid.*key/i.test(r)) { plain = 'The AI engine rejected the request — it looks like an authentication problem.'; hint = 'Add or re-check your key in Settings → Providers & keys, or sign in to Claude Code (run `claude` in a terminal).'; }
  else if (/quota|billing|credit|insufficient|payment|\b402\b/i.test(r)) { plain = 'The AI provider refused the request — a quota or billing limit.'; hint = 'Check your plan/credits with the provider, or pick a different model in Settings → Build model.'; }
  else if (/rate.?limit|overload|\b429\b|\b529\b|too many requests/i.test(r)) { plain = 'The AI service is busy (rate-limited) right now.'; hint = 'Wait a minute and try again.'; }
  else if (/ENOTFOUND|ECONNREFUSED|ECONNRESET|ETIMEDOUT|EAI_AGAIN|network|fetch failed|socket hang|offline/i.test(r)) { plain = 'Could not reach the AI service — a network problem.'; hint = 'Check your internet connection and try again.'; }
  return '⚠ ' + plain + ' ' + hint + '\n\n> ' + r.slice(0, 400).replace(/\n/g, '\n> ');
}

function reviewerGrounding() {
  const parts = [];
  try { const t = library.tastePriors(); if (t) parts.push(t); } catch {}
  try { const ds = fs.readFileSync(path.join(appPaths.libDir(), 'standards', 'design-standards.md'), 'utf8').trim(); if (ds) parts.push('— DESIGN STANDARDS (the project precedence arbiter + governance — judge FIT against these, do not impose a generic preference) —\n' + ds.slice(0, 3000)); } catch {}
  return parts.join('\n\n');
}
// #7 (2026-07-05): the Studio second-lens Reviewer runs after ANY engine's build (SDK / bridge / provider) so a
// GPT/Grok/Codex-built site gets the same read-only QA parity as a Claude build. The Reviewer itself is ALWAYS Claude
// (the SDK runReviewer just READS the built files — engine-agnostic); a foreign build model can't drive the SDK, so we
// pick a Claude reviewer model (the builder's Claude tier, or the SDK default when the builder was a foreign engine).
async function studioReviewerPass(event, context) {
  if (!event || !event.sender || event.sender.isDestroyed()) return;
  const m = readSettings().model || '';
  const reviewerModel = claudeOnlyModel(m);
  try {
    event.sender.send('chat:chunk', '\n\n◎ Reviewer — second-pass QA…\n\n');
    let revText = '';
    // A4 (audit 2026-07-09): saveReview moved into a `finally` so a PARTIAL review persists even when runReviewer
    // throws after streaming findings (before, a late throw skipped persistence AND enforcement with no trace).
    try {
      await runReviewer({ cwd: project.getDir(), model: reviewerModel, libraryContext: reviewerGrounding(), context: context || '', onChunk: (t) => { revText += t; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', t); } });
    } finally {
      if (revText.trim()) { try { reviewnote.saveReview(project.getDir(), revText); } catch {} } // persist → injected into every later turn so "fix #2" resolves against it
    }
    // ENFORCEMENT ROUND (2026-07-08, PAIN #20): the review's P0 findings used to EVAPORATE — no fix round existed,
    // and the builder even cherry-picked which review items to honor (ATHR4: gold-vs-red accent, dropped ledger
    // module, forbidden marquee/glass all shipped despite the Reviewer naming them). ONE strict fixer pass now
    // applies exactly the P0 block, then reports per item. One round only, no loop (risk #3 guard); advisory —
    // any failure never fails the turn; Stop aborts it (enforcerAbort is in agent.stop()).
    try {
      const p0 = reviewnote.extractP0Block(revText);
      if (p0) {
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n⚑ Enforcement — applying the review\'s P0 fixes…\n\n');
        await runEnforcer({ cwd: project.getDir(), model: reviewerModel, p0Block: p0, context: context || '', onChunk: (t) => { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', t); } });
      }
    } catch (e) {
      // A4: enforcement stays advisory, but its failure is no longer SILENT after the announced "⚑ Enforcement…" step
      if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n⚠ Enforcement skipped (' + String((e && e.message) || e).slice(0, 80) + ') — the review\'s P0 fixes were NOT applied.\n');
    }
  } catch (e) {
    // A4: the reviewer stays advisory, but its failure is no longer SILENT after the announced "◎ Reviewer…" step
    if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n⚠ Reviewer skipped (' + String((e && e.message) || e).slice(0, 80) + ') — no QA pass this turn.\n');
  }
}
// STRUCTURE LEVER (2026-07-04): read a page's host-ASSIGNED playbook FULL off disk so buildFoundationPrompt/
// buildPagePrompt can force-inject it as that page's mandatory blueprint (the isolated builder can't read the
// library — the host injects the bytes, making the playbook load-bearing instead of an ignorable hint).
function readPlaybook(skeleton) {
  if (!skeleton || !skeleton.rel) return '';
  try { return fs.readFileSync(path.join(appPaths.libDir(), skeleton.rel), 'utf8').trim().slice(0, 6000); } catch { return ''; }
}
// KNOWLEDGE-WIRING behavioral-confirm: a one-line chat note naming WHICH knowledge sources were injected into a build
// turn — makes the (otherwise invisible) host-side grounding continuously auditable by the owner's eye. Names only
// (fast index scoring, no exemplar loads); the full text still goes via searchDesignLibrary/libCtx.
function knowledgeSourceLine(query) {
  try {
    const names = [];
    try { for (const e of library.search(query, 3)) names.push(e.title); } catch {}
    try { for (const r of references.search(query, 3)) names.push('#' + r.n + ' ' + r.title); } catch {}
    return names.length ? '≡ Grounded with: ' + names.join(' · ') + '\n\n' : '';
  } catch { return ''; }
}
const project = require('./project.cjs');
const { isInside } = require('./safepath.cjs'); // AUDIT-2 F38: confine a renderer-supplied cwd to the open project
const grounding = require('./grounding.cjs'); // AUDIT-2 F42: reliably-English retrieval query so a non-English brief still grounds (chat path)
const imagesource = require('./imagesource.cjs');
const assetsource = require('./assetsource.cjs'); // 3D-asset harvester — Poly Haven CC0 HDRIs (the 3D analog of imagesource)
const library = require('./library.cjs'); // KNOWLEDGE-WIRING L1a: retrieve relevant knowledge-base entries to inject into the builder per turn

const PICKER_PATH = path.join(__dirname, '..', 'shared', 'picker.js'); // the hardened picker engine

// P5 (audit 2026-07-09): the knowledge/taste/reference layer lives OUTSIDE the app tree (../../baseline/library).
// If app/ ever runs without it (packaging that ships app/ alone, a moved folder), every reader silently degrades to
// empty and the app becomes the bare "generic chat-with-preview" CLAUDE.md warns against — with ZERO warning. Probe
// ONCE at startup: a terminal warning here + a visible one-time chat banner in the renderer (via app:health).
// R3 (2026-07-10): DONE — paths.cjs resolves the library (dev repo tree · packaged extraResource · settings
// override) for every reader; this health probe reports whichever copy is active.
function libraryHealth() {
  const d = appPaths.libDir();
  let lib = false, refs = false;
  try { lib = fs.existsSync(path.join(d, 'INDEX.md')); } catch {}
  try { refs = fs.existsSync(path.join(d, 'references')); } catch {}
  return { lib, refs, bare: !lib || !refs, path: d };
}
ipcMain.handle('app:health', () => libraryHealth());

// minimal blank canvas for a NEW site — the agent builds on top of this from the chat brief
// AUDIT-2 F44b/F44d: the STARTER scaffold + the pristine-starter predicate (hadRealIndex = the _hadIndex0 sign) live in
// starter.cjs so the smoke can unit-test the exact sign the old regex lock missed, and the packaged probe checks the
// SHIPPED scaffold against the SHIPPED marker.
const starter = require('./starter.cjs');
const { STARTER_MARKER } = starter;

const DEV_URL = process.env.VITE_DEV_URL || 'http://127.0.0.1:5173';
const isDev = !app.isPackaged;
const APP_ICON = path.join(__dirname, '..', 'brand', 'loupe-icon-256.png');     // taskbar / window icon (Windows)
const APP_ICON_LARGE = path.join(__dirname, '..', 'brand', 'loupe-icon-512.png'); // dock icon (macOS)

// frameless window controls — registered once; resolves the window from the IPC sender (works for any window)
ipcMain.handle('win:minimize', (e) => { const w = BrowserWindow.fromWebContents(e.sender); if (w) w.minimize(); });
ipcMain.handle('win:maxtoggle', (e) => { const w = BrowserWindow.fromWebContents(e.sender); if (!w) return false; if (w.isMaximized()) w.unmaximize(); else w.maximize(); return w.isMaximized(); });
ipcMain.handle('win:close', (e) => { const w = BrowserWindow.fromWebContents(e.sender); if (w) w.close(); });
ipcMain.handle('win:ismax', (e) => { const w = BrowserWindow.fromWebContents(e.sender); return !!(w && w.isMaximized()); });

// AUDIT-2 F35: a strict Content-Security-Policy on the PACKAGED host renderer (dist-renderer/index.html). The bundle is
// fully self-contained (Vite build: @fontsource fonts + @phosphor icons bundled; ALL provider HTTP runs in the MAIN
// process via node https, never the renderer; the preview is a separate <webview> NOT governed by this CSP), so a strict
// policy costs nothing. Scoped by URL to the app's OWN document + bundled assets (path contains /dist-renderer/) so it
// NEVER touches the popout, the preview webview, or the persist:dzref reference browser (they legitimately load remote/
// localhost content). NOT applied in dev — Vite HMR needs inline scripts + ws: to 127.0.0.1:5173. 'unsafe-inline' stays
// on style-src because Vite emits inline <style> + the React app uses inline style props; script-src stays 'self' (the
// built output has no inline scripts). NOTE: behavioral verification (an inline <script> is blocked) requires a PACKAGED
// run — the dev smoke launches with isDev=true, where this is intentionally off; the source lock asserts the wiring.
let _cspApplied = false;
function applyPackagedCSP() {
  if (isDev || _cspApplied) return; _cspApplied = true;
  const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-src 'self' http: https:";
  try {
    session.defaultSession.webRequest.onHeadersReceived((details, cb) => {
      if (typeof details.url === 'string' && /[\\/]dist-renderer[\\/]/.test(details.url)) cb({ responseHeaders: { ...details.responseHeaders, 'Content-Security-Policy': [CSP] } });
      else cb({ responseHeaders: details.responseHeaders });
    });
  } catch {}
}
// AUDIT-2 F34: deny every sensitive device/OS permission on ALL sessions. The preview <webview> renders the
// generated site and the persist:dzref browser renders UNTRUSTED external reference sites; neither ever needs
// camera/mic/geolocation/notifications/midi/hid/serial/usb/openExternal/display-capture. Standing mitigation that
// also backstops the Electron major bump — untrusted web content can't reach these APIs even if a renderer is
// compromised. Allow-list posture: DENY the sensitive set, allow benign (fullscreen, clipboard, …) so nothing the
// app legitimately uses breaks. setDevicePermissionHandler additionally refuses every HID/serial/USB device grant.
const DENIED_PERMS = new Set(['media', 'camera', 'microphone', 'geolocation', 'notifications', 'midi', 'midiSysex', 'hid', 'serial', 'usb', 'openExternal', 'display-capture']);
function lockdownSession(sess) {
  if (!sess) return;
  try { sess.setPermissionRequestHandler((_wc, permission, cb) => { try { cb(!DENIED_PERMS.has(permission)); } catch {} }); } catch {}
  try { sess.setPermissionCheckHandler((_wc, permission) => !DENIED_PERMS.has(permission)); } catch {}
  try { sess.setDevicePermissionHandler(() => false); } catch {}
}
function applyPermissionLockdown() {
  try { lockdownSession(session.defaultSession); } catch {}
  try { lockdownSession(session.fromPartition('persist:dzref')); } catch {}
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1480,
    height: 920,
    minWidth: 1080,
    minHeight: 640,
    frame: false,                 // fully custom chrome — the app draws its own titlebar + window controls (no OS frame / menu bar)
    show: false,                  // stay hidden until the first frame (the boot splash) is painted → no blank/white flash on launch
    backgroundColor: '#fafafa',   // app-default (light) fallback; the theme-matched boot splash (index.html) covers it, and show:false hides even this until first paint
    icon: APP_ICON,               // Loupe taskbar/window icon (Windows; macOS uses the dock icon below)
    title: 'Loupe',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true, // preview pane
    },
  });

  if (isDev) {
    win.loadURL(DEV_URL);
    // win.webContents.openDevTools({ mode: 'detach' });
  } else {
    applyPackagedCSP(); // AUDIT-2 F35: strict CSP on the packaged host renderer (before the load)
    win.loadFile(path.join(__dirname, '..', 'dist-renderer', 'index.html'));
  }

  // reveal the window only once the first frame (the boot splash) is painted — no blank/white flash on launch;
  // a safety timeout shows it anyway if ready-to-show never fires (e.g. a load error) so the app can't get stuck hidden
  win.once('ready-to-show', () => { try { win.show(); } catch {} });
  setTimeout(() => { try { if (!win.isDestroyed() && !win.isVisible()) win.show(); } catch {} }, 4000);

  // FORCE the app window to 100% zoom on every (re)load and disable host pinch/zoom. Electron PERSISTS the renderer's
  // zoom level per origin in the session; a past setZoomFactor experiment leaked zoom to this window, so without this
  // the app reopens shrunk/zoomed and the user can't reset it (the app has no zoom accelerators). This self-heals it.
  const resetZoom = () => { try { win.webContents.setZoomLevel(0); win.webContents.setZoomFactor(1); win.webContents.setVisualZoomLevelLimits(1, 1); } catch {} };
  win.webContents.on('did-finish-load', resetZoom);
  win.webContents.on('zoom-changed', resetZoom); // belt: if anything tries to zoom the chrome, snap back to 100%
  resetZoom();

  Menu.setApplicationMenu(null); // frameless: no native menu bar — the app is fully self-chromed
  // a null app-menu drops its accelerators, so re-add the two dev ones we rely on
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    const k = (input.key || '').toLowerCase();
    if (k === 'f5' || (input.control && k === 'r')) { win.webContents.reload(); e.preventDefault(); }
    else if (k === 'f12' || (input.control && input.shift && k === 'i')) { win.webContents.toggleDevTools(); e.preventDefault(); }
  });
  // tell the renderer when the OS maximize state flips so the custom control can swap its glyph
  win.on('maximize', () => { try { win.webContents.send('win:maxchange', true); } catch {} });
  win.on('unmaximize', () => { try { win.webContents.send('win:maxchange', false); } catch {} });
  if (process.platform === 'darwin' && app.dock) { try { app.dock.setIcon(APP_ICON_LARGE); } catch {} } // macOS dock icon (the BrowserWindow `icon` option is Windows/Linux only)
}

// chat → Claude Agent SDK, editing the open project, streamed back to the renderer (increment 3)
// STUDIO Inc 1: should the Director pre-pass run for this prompt? Only in Studio mode, only for a substantial BUILD
// request — NEVER on loop-internal turns (the loop is its own orchestration) or small edits.
// AUDIT-2 F6/F44b: these predicates (incl. the new isFirstBuildIntent, F6) live in electron-free buildintent.cjs so
// the smoke can unit-test the exact natural-brief class that silently under-fired (main.cjs itself isn't requirable).
const { isStudioBuildPrompt, isLoopBuildPrompt, isBuildLikeTurn, isFirstBuildIntent } = require('./buildintent.cjs');

// #2 IMAGERY FORK — the host asks photography-vs-illustration deterministically (the clarify LLM under-asks it).
// Lives in its own electron-free module so the smoke can unit-test it on the OWNER'S REAL PROMPT — the substring bug
// ("typoGRAPHIC hierarchy" read as medium-stated → ask silently suppressed) is exactly what an untested inline regex cost us.
// AUDIT-2 F5: bind the module NAMESPACE too — the imagery:probe handler calls imagery.isPhotoCentricBuild /
// imagery.MEDIUM_STATED_RE, but only isPhotoCentricBuild was destructured, so every /flow + /multiflow probe threw
// ReferenceError('imagery is not defined') → the catch returned the feature-OFF shape → the pre-flow imagery ask was
// 100% silently dead. Keep the destructure so the chat-path use at main.cjs:513 stays byte-identical.
const imagery = require('./imagery.cjs');
const { isPhotoCentricBuild } = imagery;

// AI image GENERATION capability (single source of truth for the imagery ASK, the capability line, and /flow parity):
// a BYOK gen key, an explicitly-picked generation CLI (cli:grok/codex), OR an image-capable build engine
// (bridge:grok/codex — the chat model or a swarm engine). Any → generation is a real, offerable option; generateImage()
// routes it post-turn (Option B). Kept accurate so the ASK never offers generation that can't actually run.
// A8 (audit 2026-07-09, owner-resolved): the codex CLI paths run with the sandbox fully off (build =
// `--sandbox danger-full-access`, image-gen = `--dangerously-bypass-approvals-and-sandbox`) — machine-wide access.
// Experimental-gated END TO END (same principle as R2 #3a's dispatch gate): with experimental OFF, a persisted or
// typed cli:codex / bridge:codex ref is treated as UNSET at the capability layer and REFUSED at build dispatch.
// The Settings UI additionally hides the codex options and shows a full-machine-access disclosure when selected.
function codexAllowed(s) { return !!(s && s.experimental === true); }
function effSettingsForGen(s) {
  if (!s || codexAllowed(s)) return s || {};
  const c = { ...s };
  if (/^cli:codex/.test(c.imageModel || '')) c.imageModel = null;
  const strip = (v) => (/^bridge:codex/.test(v || '') ? '' : v);
  c.model = strip(c.model); c.swarmFoundation = strip(c.swarmFoundation);
  if (Array.isArray(c.swarmPool)) c.swarmPool = c.swarmPool.filter((e) => !/^bridge:codex/.test(e || ''));
  return c;
}
function genCapabilityOf(s0) {
  const s = effSettingsForGen(s0);
  if (!s) return false;
  if (s.openaiKey || s.openrouterKey || s.xaiKey) return true;
  if (/^cli:(grok|codex)/.test(s.imageModel || '')) return true;
  const engines = [s.model, s.swarmFoundation].concat(Array.isArray(s.swarmPool) ? s.swarmPool : []);
  return engines.some((e) => /^bridge:(grok|codex)/.test(e || ''));
}
// Which subscription CLI should the post-turn generative fill spawn (Auto/engine-implicit path)? An explicit
// cli:grok/codex generation pick wins; else the build engine (chat model or a swarm engine) being grok/codex. null =
// no CLI generation available (fulfill then uses an API key, or falls back to stock). generateImage ignores this when
// an API key path is chosen — it only fires in the Auto fall-through.
function genCliOf(s0) {
  const s = effSettingsForGen(s0); // A8: codex CLI paths are experimental-gated
  if (!s) return null;
  const im = String(s.imageModel || '');
  const mm = /^cli:(grok|codex)/.exec(im); if (mm) return mm[1];
  const engines = [s.model, s.swarmFoundation].concat(Array.isArray(s.swarmPool) ? s.swarmPool : []);
  for (const e of engines) { const em = /^bridge:(grok|codex)/.exec(e || ''); if (em) return em[1]; }
  return null;
}

// QA-ASK v2 — the host side of the Director's `ask_user` mid-turn pause. When the Director calls the tool, its handler
// (agent.cjs) invokes makeAskUser(event): we send `ask:open` to the renderer (which shows the picker) and return a
// Promise that the renderer resolves via `ask:answer` once the user picks. That resolution becomes the tool result, so
// the Director turn — and the whole studio build that awaits it — stays PAUSED until the user answers (the build is gated).
let _askSeq = 0;
const _pendingAsks = new Map();
let _provAbort = null; // 17b: the AbortController for an in-flight provider (OpenRouter/etc.) build turn — chat:stop aborts it
// R2 (F7, proven live in G5: Stop→idle took >90s): agent.stop() only aborts the IN-FLIGHT sub-call (e.g. the Art
// Director) — the chat turn then marched on and dispatched the BUILDER with a fresh AbortController, so "Stop" during
// a pre-pass ran the whole build anyway. This turn-level flag is set by chat:stop and CHECKED BETWEEN PHASES in
// chat:send (after clarify, after the AD, before the builder dispatch); a new turn resets it.
let _turnStopped = false;
function makeAskUser(event) {
  return (payload) => new Promise((resolve) => {
    const id = 'ask_' + (++_askSeq);
    _pendingAsks.set(id, resolve);
    try { if (event && event.sender && !event.sender.isDestroyed()) event.sender.send('ask:open', { id, payload }); } catch {}
  });
}
// resolve every still-pending ask with '' (= "no answer, use your default") so a Stop / new turn / error never leaves a
// tool handler hanging forever. Called on Stop, and at the start of each new turn as a straggler sweep.
function flushPendingAsks() { for (const [id, r] of _pendingAsks) { try { r(''); } catch {} } _pendingAsks.clear(); }
ipcMain.handle('ask:answer', (_e, id, answer) => { const r = _pendingAsks.get(id); if (r) { _pendingAsks.delete(id); try { r(String(answer == null ? '' : answer)); } catch {} } return true; });
// TEST-ONLY (smoke): exercise the REAL ask round-trip end-to-end — makeAskUser → ask:open → the live renderer picker →
// askRespond → ask:answer → resolve — and return whatever the user picked. Harmless in production (only the smoke hook
// calls it). This is what proves the live ASK MENU actually appears + resolves (the fake-hook smoke never touched the IPC).
ipcMain.handle('test:fireAsk', async (event, payload) => { try { return await makeAskUser(event)(payload || { question: 'Real photography or an illustrated / gradient style?', options: [{ label: 'Real photography', recommended: true }, { label: 'Illustrated / gradient' }], allowOther: true }); } catch (e) { return '__err:' + String((e && e.message) || e); } });
// AUDIT-2 F44b/F44d — DZ_SMOKE-gated test channels: NEVER registered without the env (a normal launch has no DZ_SMOKE →
// these ipcMain.handle calls don't run), so no test surface ships to users (finding F796). Enabled in the smoke via env
// DZ_SMOKE=1. test:setSdkStub installs a NO-MODEL stub SDK into the SAME agent.cjs instance the real turn uses, so an
// offline turn exercises the real chat:send AD gate + palette path; test:newSite runs the SHIPPED scaffold with no dialog.
if (process.env.DZ_SMOKE) {
  const _mkTestStub = (text) => ({
    query: () => (async function* () { yield { type: 'assistant', message: { content: [{ type: 'text', text: String(text || 'ARCHETYPE: test terminal\nPALETTE: near-black + electric lime\nHERO: split hero\nTYPE: mono + grotesk\nMOTION: cursor grid\n\n## Composition\nhero, three cards, footer.\n## Guardrails\nkeep it compact.') }] } }; })(),
    createSdkMcpServer: () => ({ name: 'stub' }), tool: () => ({}),
  });
  ipcMain.handle('test:setSdkStub', (_e, text) => { try { __setSdkForTest(_mkTestStub(text)); return true; } catch { return false; } });
  ipcMain.handle('test:clearSdkStub', () => { try { __setSdkForTest(null); return true; } catch { return false; } });
  ipcMain.handle('test:newSite', (_e, dir) => { try { const r = starter.scaffoldNewSite(dir); if (r && r.ok) { project.setDir(dir); resetSession(); } return r; } catch (e) { return { error: String((e && e.message) || e) }; } });
}
// newest top-level file mtime in a dir (skips dot-folders) — used to detect a build that wrote NOTHING into the open
// project (the silent-misdirect / wrong-cwd bug: the agent reported edits but they landed in a different folder).
function maxMtime(dir) { try { let m = 0; for (const f of fs.readdirSync(dir)) { if (f[0] === '.') continue; try { const s = fs.statSync(path.join(dir, f)); if (s.mtimeMs > m) m = s.mtimeMs; } catch {} } return m; } catch { return 0; } }

// AUDIT-2 F30: a sleep that resolves EARLY when isStopped() flips true, so Stop preempts a throttle backoff instead of
// waiting out the full delay (the raw setTimeout ignored Stop → a Stop during a 40s retry wait did nothing for 40s).
function interruptibleSleep(ms, isStopped) {
  return new Promise((resolve) => {
    if (isStopped && isStopped()) return resolve();
    const step = 150; let waited = 0;
    const iv = setInterval(() => { waited += step; if ((isStopped && isStopped()) || waited >= ms) { clearInterval(iv); resolve(); } }, step);
    if (iv.unref) iv.unref();
  });
}

ipcMain.handle('chat:send', async (event, prompt, resumeId, images) => {
  // P9 BELT: never run a chat turn while a swarm build/review pool is writing the same project (the renderer's
  // flow-session queue is the primary gate; this catches anything slipping through a window between IPCs)
  if (_flowState || _flowSessionActive) { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '⬡ A swarm run is active — this turn was not started. It will be queued by the app; wait for the reveal or Stop the swarm.\n'); return { text: '', queuedBySwarm: true }; } // F31: _flowSessionActive covers the post-flow:start window (imagery→prefetch→review) where _flowState is already null
  flushPendingAsks(); // sweep any straggler ask from a prior turn so its resolver can't leak across turns
  _turnStopped = false; // F7: fresh turn → clear the turn-level stop marker
  // R2 (F7): one guard used between the turn's phases — a Stop during clarify/AD must end the TURN, not just that sub-call.
  const stoppedNote = () => { if (!_turnStopped) return false; if (!event.sender.isDestroyed()) { event.sender.send('chat:chunk', '\n\n■ Stopped.\n'); event.sender.send('ai:hist', project.aiState()); } return true; };
  // STALE-CODE GUARD: never again let the owner debug "the fix doesn't work" against an app that silently runs pre-fix code.
  const _stale = staleCodeNote();
  if (_stale && !event.sender.isDestroyed()) event.sender.send('chat:chunk', _stale);
  // CWD GUARD (fixes the silent wrong-folder misdirect, class-first): the agent's cwd = project.getDir(). If that is
  // missing/invalid, an edit turn would let the SDK child silently fall back to some default dir and write the site
  // THERE (the bug the owner hit: build landed in baseline/sites/new-site instead of the open project). So: validate
  // the cwd up front + LOG it (diagnostic to catch the real trigger next time) + detect a write-but-nothing-changed
  // misdirect after the turn and surface it LOUDLY. Never let a build silently write to the wrong folder again.
  const _buildCwd = project.getDir();
  console.error('[dz-build] turn cwd =', JSON.stringify(_buildCwd), '· ascii=', /^[\x00-\x7F]*$/.test(String(_buildCwd || ''))); // diagnostic: the exact folder the agent gets
  if (!_buildCwd || !fs.existsSync(_buildCwd) || !fs.statSync(_buildCwd).isDirectory()) {
    const m = 'No valid project folder is open (cwd = ' + JSON.stringify(_buildCwd) + '). Create or open a project first — refusing to build so it cannot write to the wrong folder.';
    if (!event.sender.isDestroyed()) { event.sender.send('chat:chunk', '\n⚠ ' + m); event.sender.send('ai:hist', project.aiState()); }
    return { ok: false, error: m };
  }
  const _cwdMtime0 = maxMtime(_buildCwd);
  // R3 cold-eye (owner-found on the FIRST real packaged drive): the New-site scaffold writes a STARTER
  // index.html, so the first build used to see "index exists" → judged an EDIT to an existing site → the
  // Art Director (and with it anti-sameness + the palette board trigger downstream) silently SKIPPED on the
  // app's PRIMARY flow. Probes built into truly empty dirs, so they never caught it. An index.html still
  // carrying the pristine STARTER_MARKER counts as an empty project.
  const _hadIndex0 = starter.hadRealIndex(_buildCwd); // AUDIT-2 F44b: the pristine-starter sign, now a unit-tested predicate (F3: empty-project marker for the zero-writes guard + the Art Director gate)
  let _builderWrote = false; // set true when a Write/Edit/MultiEdit tool fires this turn (to detect misdirect)
  // F3 (R2, proven live on bridge:codex 0.142.5): an engine can run the whole turn, write NOTHING (e.g. the codex
  // sandbox rejected every patch: "writing is blocked by read-only sandbox"), and still report exit 0 → the app streamed
  // "✓ done" over a build that produced no site. Engine-agnostic guard: a real BUILD on a project that had no
  // index.html and STILL has none (and nothing changed on disk) = a failed build the user must be told about.
  const zeroWriteNote = () => {
    try {
      if (_hadIndex0) return; // edits to an existing site are judged by the misdirect detector above, not this guard
      const stillNoIndex = !fs.existsSync(path.join(_buildCwd, 'index.html'));
      if (stillNoIndex && maxMtime(_buildCwd) <= _cwdMtime0) {
        const m = '⚠ BUILD PRODUCED NO FILES — the engine finished without writing anything to `' + _buildCwd + '` (no index.html). The engine\'s own output above usually names the reason (e.g. a CLI sandbox blocking writes). The site was NOT built.';
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n' + m);
        if (_blLane) { try { _blLane.say(m); } catch {} }
      }
    } catch {}
  };
  const snap = project.aiSnapshotBeforeTurn(); // capture state BEFORE the agent edits (AI-undo)
  try {
    const _s = readSettings();
    // A1 (audit 2026-07-09): FIRST-RUN AUTH PREFLIGHT — a stranger with no Claude Code login and no key used to hit
    // a raw SDK "[error]" on their very first build (the #1 newcomer block). If this turn would run on the Claude
    // engine (no bridge:/provider: ref) and no Claude auth is reachable, stop HERE with an actionable note — never
    // dispatch into a cryptic failure. (Clarify/AD/Reviewer are Claude too, so the gate sits before ALL phases.)
    const _authNote = authPreflightNote(_s);
    if (_authNote) {
      if (!event.sender.isDestroyed()) { event.sender.send('chat:chunk', _authNote); event.sender.send('ai:hist', project.aiState()); }
      return { ok: false, error: 'Claude is not connected (no API key or Claude Code login)' };
    }
    // A8: the codex build engine runs the CLI with the sandbox fully OFF (machine-wide access) — refuse at DISPATCH
    // when experimental is off (a stranger can't reach it via the UI either; this covers a persisted/typed ref).
    if (/^bridge:codex/.test(_s.model || '') && !codexAllowed(_s)) {
      const m = 'The Codex build engine is experimental — it runs the codex CLI unsandboxed (full machine access). Turn on "Show experimental features" in Settings → General to use it, or pick another engine in Settings → Build model.';
      if (!event.sender.isDestroyed()) { event.sender.send('chat:chunk', '\n⚠ ' + m); event.sender.send('ai:hist', project.aiState()); }
      return { ok: false, error: m };
    }
    // AUDIT-2 F6: hoist realBuild/studioBuild ABOVE the libCtx IIFE — the armSnippets gate INSIDE the IIFE reads
    // realBuild, and referencing it after the IIFE (which executes immediately) would hit the temporal dead zone →
    // ReferenceError → every build turn would fail. On a PRISTINE project (!_hadIndex0) the first substantive prompt IS
    // a build regardless of keyword match, so the machinery (Art Director, imagery ask, grounding floor, capability
    // line, build log, zero-write guard, palette, Studio Reviewer) fires on natural first briefs — not only keyword ones.
    const realBuild = isStudioBuildPrompt(prompt) || (!_hadIndex0 && isFirstBuildIntent(prompt)); // a genuine "build me a site" turn (keyword match OR a pristine first brief)
    const studioBuild = _s.buildMode === 'studio' && realBuild; // Studio team (Director pre + Reviewer post) + model-clarify — studio only
    const buildLike = isBuildLikeTurn(prompt) || (!_hadIndex0 && isFirstBuildIntent(prompt)); // grounding floor: real build OR loop/critique-fix OR a pristine first brief
    const libCtx = (() => { // KNOWLEDGE-WIRING L1a (passive inject), shared by Director + builder
      let block = '';
      try { block = library.retrieve(prompt) || ''; } catch {}
      // #3: on any BUILD-like turn (real build OR loop/critique-fix), inject ONE top real-site reference exemplar (grounding
      // even if the agent never searches); the agent can pull MORE with the search_design_library tool. Skipped on small edits.
      if (buildLike) {
        try { const refs = references.search(prompt, 1); if (refs.length) { const ex = references.getExemplar(refs[0].n, 1400); if (ex) block += (block ? '\n\n' : '') + '— A REAL STYLE REFERENCE for grounding (adapt to THIS brief, do not clone; use search_design_library for more) —\n### ' + refs[0].title + ' [' + refs[0].theme + '] — ' + refs[0].tagline + '\n' + ex; } } catch {}
      }
      if (realBuild) {
        try { block += library.armSnippets(project.getDir(), prompt); } catch {} // F6: route to realBuild so a pristine first build arms snippets too (still only a FRESH build, not every loop iteration)
      }
      return block;
    })();
    // STUDIO mode (Inc 1): a DIRECTOR plans the build first (direction + sourcing), streamed to the user; the builder then executes it. Solo mode skips this.
    let directorPlan = '';
    let buildPrompt = prompt; // what the Director + builder actually receive — gets any resolved user decisions appended (QA-ASK v2)
    // QA-ASK v2 — up-front decisions the user's pick GATES the build on (the whole turn awaits them).
    const decisions = [];
    // #2 HOST-DETERMINISTIC imagery ask — fires on ANY real build (SOLO or STUDIO) for photo-centric briefs, because the
    // clarify LLM under-asks it (it treats a tone hint as settling the medium). Deterministic + reliable; the resolved
    // choice is injected into buildPrompt below, which the builder receives in BOTH modes. This is the menu the owner
    // never saw: before, the ask lived only in the studio model-clarify, which returned NONE on the coffee brief.
    // ASK-ONCE (2026-07-07): the imagery ASK fires only when this project has NO saved medium yet. On later builds we
    // skip the question and steer the builder from the persisted choice (below). `/imagery` clears it to ask again.
    const savedMedium = (() => { try { return imagesource.readMedium(project.getDir()); } catch { return null; } })();
    let askedImagery = false;
    // Fix B (2026-07-07): fire the imagery ASK for a photo-centric brief OR when the user EXPLICITLY picked a generation
    // model in Settings (_s.imageModel) — an explicit gen pick is a clear "I want to control imagery" signal, and the
    // photo-centric heuristic misses briefs like "GTA6 news site" (owner hit this: chose Grok, got no imagery ask).
    if (realBuild && (isPhotoCentricBuild(prompt) || !!_s.imageModel) && !savedMedium) {
      // §1a: generation surfaces as a THIRD option in the SAME question (one-question discipline) — only when a real
      // gen capability is configured, so we never offer imagery the host can't produce. Stock stays the recommended default.
      const _genCap = genCapabilityOf(_s);
      // T8 (audit 2026-07-09): the SAME question + options as the pre-/flow gate (shared/imagery-ask.json) — the two
      // paths used to ask different questions with different options for the identical decision.
      const _imgOptions = IMAGERY_ASK.options.map((o) => ({ ...o }));
      if (_genCap) _imgOptions.push({ ...IMAGERY_ASK.genOption });
      try {
        await makeAskUser(event)({ question: IMAGERY_ASK.question, options: _imgOptions, allowOther: true })
          .then((ans) => { decisions.push({ q: 'Visual direction (photography vs illustration)', a: String(ans || '') }); });
        askedImagery = true;
      } catch (e) { /* advisory — never fail the build on the ask */ }
    }
    // model-clarify (STUDIO only, cheap-abort) catches OTHER genuine forks (explicit indecision etc.) when imagery wasn't asked.
    if (studioBuild && !askedImagery) {
      const clarifyAc = new AbortController();
      const recordAsk = (payload) => makeAskUser(event)(payload).then((ans) => { decisions.push({ q: (payload && payload.question) || '', a: String(ans || '') }); setTimeout(() => { try { clarifyAc.abort(); } catch {} }, 0); return ans; });
      try { await runClarify(prompt, { cwd: project.getDir(), model: claudeOnlyModel(_s.model), askUser: recordAsk, abortController: clarifyAc }); }
      catch (e) { /* clarify is advisory — never fail the build on it */ }
    }
    if (stoppedNote()) return { ok: false, error: 'stopped' }; // F7: Stop during the imagery ask / clarify ends the TURN here
    if (decisions.length) {
      buildPrompt = prompt + '\n\nUSER DECISIONS (the user just chose these in a picker — honor them EXACTLY and do NOT ask again):\n' + decisions.map((d) => '- ' + d.q + ' -> ' + d.a).join('\n');
      // #2 imagery enforcement: if the user chose REAL PHOTOGRAPHY, make it binding on BOTH the Director plan and the
      // builder — emit <img data-gen> (the host fills real licensed photos post-turn), never CSS/gradient placeholders
      // (the exact miss the owner hit: the Director planned "CSS blocks stand in for photography", builder emitted 0 data-gen).
      if (decisions.some((d) => /photograph|real photo/i.test(d.a || ''))) {
        try { imagesource.writeMedium(project.getDir(), 'photography'); } catch {} // #5: persist so the post-turn fill fills normally
        buildPrompt += '\n\n[IMAGERY = REAL PHOTOGRAPHY (the user chose it): the hero AND every content / product / roast / story section MUST use a real photo — emit `<img data-gen="concise specific subject, 3 to 7 words" alt="...">` with NO src attribute (the app fills a relevant licensed photo after the turn). Do NOT substitute CSS gradients, coloured blocks, or "swappable placeholder" panels for photography. At minimum: the hero + each feature/product card carries a data-gen image.]';
      } else if (decisions.some((d) => /illustrat|gradient|no photo|no stock|self.?contained|typograph|minimal/i.test(d.a || ''))) {
        // #5 ILLUSTRATION opt-out, enforced host-side (the prompt is only the secondary layer — the model may ignore it):
        // persist the choice so the post-turn fill STRIPS any leaked <img data-gen>/<img data-gen-ai> instead of filling
        // real photos (which would silently override the user's explicit "no photos" — NN/g user-control / dark-pattern).
        try { imagesource.writeMedium(project.getDir(), 'illustration'); } catch {}
        buildPrompt += '\n\n[IMAGERY = ILLUSTRATION / GRADIENT, NO PHOTOS (the user chose it): the page must be SELF-CONTAINED — use CSS / SVG / gradients / illustration, NEVER a real photo. Do NOT emit <img data-gen> or <img data-gen-ai> placeholders — the host will NOT fill them and will STRIP any you leave (a stripped slot can leave a gap, so simply do not create image slots). No "photo slot" boxes or dashed "photo goes here" placeholders. Build a complete graphic treatment.]';
      } else if (decisions.some((d) => /ai.?generat|generated imagery/i.test(d.a || ''))) {
        // §1a AI-GENERATED imagery (the user opted into generation for this build): steer the builder toward data-gen-ai
        // for the bespoke slots; stock data-gen stays allowed for ordinary photos under stock-first. 'generative' medium
        // is persisted only for the audit trail — it needs NO new fill branch (readMedium's strip fires on 'illustration'
        // only, so a generative build fills both passes normally).
        try { imagesource.writeMedium(project.getDir(), 'generative'); } catch {}
        buildPrompt += '\n\n[IMAGERY = AI-GENERATED (the user chose it): for the bespoke/artistic hero(es) and any subject a real stock photo can\'t serve, emit `<img data-gen-ai="PROMPT" data-ar="16:9" alt="short subject">` with NO src — the host generates it after the turn (see the IMAGERY CAPABILITIES note below for how to write PROMPT). Keep stock `<img data-gen="subject">` for ordinary content photos (stock-first). A few deliberate generated slots, never every image.]';
      }
    }
    // ASK-ONCE steering: when we SKIPPED the imagery ASK (a medium was already saved) and no fresh imagery decision was
    // made this turn, still steer the builder from the PERSISTED choice — so an all-generative project keeps emitting
    // data-gen-ai on later builds. Mirrors the directive strings in the decisions block above.
    if (realBuild && savedMedium && !decisions.some((d) => /photograph|real photo|illustrat|gradient|no photo|no stock|self.?contained|typograph|minimal|ai.?generat|generated imagery/i.test(d.a || ''))) {
      if (savedMedium === 'photography') buildPrompt += '\n\n[IMAGERY = REAL PHOTOGRAPHY (your saved choice for this project): the hero AND every content / product / story section MUST use a real photo — emit `<img data-gen="concise specific subject, 3 to 7 words" alt="...">` with NO src attribute (the app fills a relevant licensed photo after the turn). Do NOT substitute CSS gradients or coloured blocks for photography.]';
      else if (savedMedium === 'illustration') buildPrompt += '\n\n[IMAGERY = ILLUSTRATION / GRADIENT, NO PHOTOS (your saved choice for this project): the page must be SELF-CONTAINED — CSS / SVG / gradients / illustration, NEVER a real photo. Do NOT emit <img data-gen> or <img data-gen-ai> placeholders — the host STRIPS any you leave.]';
      else if (savedMedium === 'generative') buildPrompt += '\n\n[IMAGERY = AI-GENERATED (your saved choice for this project): for the bespoke/artistic hero(es) and any subject a real stock photo can\'t serve, emit `<img data-gen-ai="PROMPT" data-ar="16:9" alt="short subject">` with NO src — the host generates it after the turn. Keep stock `<img data-gen="subject">` for ordinary content photos (stock-first).]';
    }
    // REVIEWER-REPORT GROUNDING: the Reviewer's numbered findings stream to the chat UI only — the builder's session
    // never sees them, so "Fix #2 #3 #5" was meaningless to it (it asked "which numbering do you mean?"). Inject the
    // project's latest saved report into EVERY turn (Director + builder) until a new review overwrites it.
    // Host-guaranteed grounding, same lesson as the library/imagery wiring. (Appended AFTER the decisions block —
    // that block REBUILDS buildPrompt from the raw prompt and would wipe an earlier append.)
    const _reviewCtx = reviewnote.reviewNote(_buildCwd);
    if (_reviewCtx) buildPrompt += _reviewCtx;
    // TASTE T1 — PROJECT DESIGN.md grounding: the persistent source of truth (flow-written / host-synthesized /
    // hand-edited) rides into every build turn, any engine. (Appended after the decisions block for the same
    // buildPrompt-rebuild reason as the review note.)
    const _designCtx = reviewnote.designNote(_buildCwd);
    if (_designCtx) buildPrompt += _designCtx;
    // SETTINGS HUB — CAPABILITY INJECTION: the isolated agent can't see Settings, so it doesn't KNOW which imagery
    // capabilities are configured; without this line it either under-uses them or emits markers nothing will fill.
    // One truthful line per real build, derived from the actual keys (host-mediated — the agent never sees a secret).
    if (realBuild) {
      const caps = [];
      caps.push((_s.unsplashKey || _s.pexelsKey)
        ? 'real photo SEARCH: YES — emit <img data-gen="concise subject, 3-7 words"> with no src; the host fills a relevant licensed photo'
        : 'real photo SEARCH: keyless fallback only (mediocre) — still prefer <img data-gen>, or use a deliberate CSS treatment');
      // AI image GENERATION capability = a BYOK gen key, OR an explicitly-picked generation CLI (cli:grok / cli:codex),
      // OR the build engine itself being an image-capable CLI (bridge:grok / bridge:codex). All route through
      // generateImage()'s backends post-turn (Option B, universal). One strong template (facets ordered by leverage:
      // stock-first rule → negative-space → palette lock) — the builder skims a long system prompt.
      if (genCapabilityOf(_s)) caps.push('AI image GENERATION: available. This is an OPT-IN option — keep <img data-gen> stock photos as the DEFAULT and use generation ONLY when a real stock photo can\'t serve the slot (a bespoke/branded subject, an abstract or textured background, a composited/surreal hero, or a consistent illustration/icon set). Then emit <img data-gen-ai="PROMPT" data-ar="16:9" alt="short subject"> with no src; the host generates it after your turn (it costs money — a few deliberate slots, never every image). Write PROMPT as ONE natural-language paragraph (prose, not comma-tags), in this order: medium+realism level; subject with material/texture; setting; COMPOSITION — name the empty low-contrast zone you leave for the headline/CTA overlay; style as a real photographic/design idiom (never "8K hyperdetailed masterpiece" booster-spam); lighting+mood; PALETTE — name the brand colours by descriptor AND hex and say "use only these colours"; then a camera/lens note for photographic slots. End with "no text, no logos, no watermark" for any hero that gets an HTML text overlay, and never a purple/blue AI-gradient, mesh-blob, floating-sphere or glassmorphism cliche. Aspect ratio is set ONLY by data-ar (16:9 hero, 1:1 avatar/badge, 4:5 portrait, 3:2 wide) — the model ignores a ratio written in the prose. Always include a short plain alt="" subject (used as the graceful fallback query).');
      buildPrompt += '\n\n[IMAGERY CAPABILITIES THIS TURN: ' + caps.join(' · ') + ']';
    }
    // Fix C (2026-07-07): BUILD LOG parity — Solo/Studio real builds get the same line-by-line log as /flow, so the
    // BUILD LOG viewer has content in EVERY mode. flowlog.start archives the prior run + writes a fresh header; the lane
    // captures the builder's narration + every file write/edit (fed from each engine's onText/onTool below).
    let _blLane = null;
    if (realBuild && _buildCwd) { try { const _eng = engineLabel(_s.model || ''); flowlog.start(_buildCwd, { engine: _eng + (studioBuild ? ' · Studio' : ' · Solo'), brief: prompt }); _blLane = flowlog.lane(_buildCwd, studioBuild ? 'studio' : 'solo', { engine: _eng }); } catch {} }
    // STRUCTURE-SAMENESS fix (2026-07-05): a GENERATIVE, divergence-aware ART-DIRECTION pre-pass runs before EVERY real
    // build — solo AND studio. The chat path previously had ZERO structural direction (the diagnosis's biggest gap), so
    // the LLM default (a vertical band stack) shipped. The Art Director AUTHORS a committed, brief-specific direction the
    // builder executes as a BINDING blueprint (directorPlan), and is REQUIRED to diverge from the recent sites (cross-site
    // memory in userData) — so identical/similar briefs stop collapsing to the same structure. Library rides along as help.
    // P1 (audit 2026-07-09): the AD pre-pass + divergence-memory push are gated on a GENUINE new-site signal
    // (`!_hadIndex0` — the project had no index.html when the turn began), not just the realBuild keyword match.
    // Before, an edit like "redesign the footer" ran a full Art Director AND pushed a partial, edit-scoped
    // "direction" into the 12-slot cross-site memory the next real build must diverge from (silent corruption of
    // the anti-sameness feature). `realBuild` still drives the build log / grounding / imagery ask as before.
    if (realBuild && !_hadIndex0) {
      try {
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '▸ Art Director — committing the direction…\n\n');
        const dirs = artdir.readDirections(artMemPath(), 6);
        const ad = await runArtDirector(buildPrompt, { cwd: project.getDir(), model: claudeOnlyModel(_s.model), libraryContext: libCtx, divergence: artdir.divergenceBlock(dirs), onChunk: (t) => { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', t); } });
        directorPlan = artdir.stripCodeBlocks((ad && ad.text) || ''); // R3 class-fix: the blueprint is prose — code dumps never reach the builder/log/memory
        if (_blLane && directorPlan) { try { flowlog.section(_buildCwd, '★ Art Direction (binding)', directorPlan); } catch {} } // BUILD LOG: the committed direction
        // persist this site's direction to cross-site memory so the NEXT build must diverge from it
        if (directorPlan && artdir.hasDirection(directorPlan)) { try { artdir.pushDirection(artMemPath(), { ...artdir.parseDirection(directorPlan), brief: String(prompt).slice(0, 120), ts: new Date().toISOString().slice(0, 10) }); } catch {} }
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n— Builder executing the direction —\n\n');
      } catch (e) {
        // R2 (F1/F9): the Art Director's failure used to be SWALLOWED after we already streamed "▸ Art Director —
        // committing the direction…" — the user saw an announced step vanish with no explanation (and the anti-sameness
        // direction was silently lost). Surface a one-line honest note; the build still proceeds (builder card guides).
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n⚠ Art Director skipped (' + String((e && e.message) || e).slice(0, 80) + ') — building without a committed direction.\n\n');
      }
    }
    if (stoppedNote()) return { ok: false, error: 'stopped' }; // F7: Stop during the Art Director ends the TURN — never dispatch the builder after a Stop
    // KNOWLEDGE-WIRING #3 — GUARANTEED grounding (don't rely on the agent choosing to call the search tool: instrumented,
    // it often doesn't — same disposition as the ask tool). When we have the Director's PLAN (a rich aesthetic description),
    // search the corpus WITH THE PLAN (the ideal query) and inject the matched techniques + real reference exemplars into
    // the builder host-side. Rich-query relevance, always present. (The search_design_library tool stays as a bonus for
    // per-section pulls.) Solo/no-plan → the builder keeps the prompt-matched libCtx.
    let builderLibCtx = libCtx;
    // AUDIT-2 F42: re-ground the chat build with a reliably-ENGLISH query (AD English header + full plan + English DESIGN.md
    // + prompt) so a NON-English brief still retrieves — and run it on EVERY build-like turn, not only when a directorPlan
    // exists, so the existing-project rebuild (AD skipped → no plan) recovers grounding from the on-disk English DESIGN.md.
    if (directorPlan || buildLike) { try { const g = searchDesignLibrary(grounding.groundingQuery(prompt, directorPlan, _buildCwd)); if (g) builderLibCtx = g; } catch {} }
    if (buildLike) builderLibCtx = withTastePriors(builderLibCtx); // Q3: quantitative floor for every build-like turn incl. loop/critique-fix (SDK/bridge/provider all read builderLibCtx below)
    // KNOWLEDGE-WIRING behavioral-confirm: surface WHAT grounded this build (one line, real builds only) — the owner
    // sees the injected sources every time instead of trusting an invisible mechanism.
    if (realBuild && !event.sender.isDestroyed()) { const kl = knowledgeSourceLine(grounding.groundingQuery(prompt, directorPlan, _buildCwd)); if (kl) { event.sender.send('chat:chunk', kl); if (_blLane) { try { flowlog.section(_buildCwd, '≡ Grounded with', String(kl).replace(/^[^A-Za-z0-9]*/, '')); } catch {} } } } // F42: the "Grounded with" line reads the same English query
    if (_blLane) { try { _blLane.begin(studioBuild ? 'studio build' : 'solo build'); } catch {} } // BUILD LOG: open the builder lane just before dispatch to any engine
    // CLI-BRIDGE BUILDER (19a): model "bridge:codex" routes the BUILD turn to the user's OWN ChatGPT subscription via
    // Codex CLI — same host brain (imagery ask, grounding, reviewer note, capability line are ALL already inside
    // buildPrompt/builderLibCtx as text), different hands. Codex can't reach our in-process MCP tools (ask/search) —
    // those are host-deterministic or Claude-only; the verify loop + misdirect detector are engine-agnostic.
    if (/^bridge:/.test(_s.model || '')) {
      const _br = bridges.parseBridgeRef(_s.model) || {}; const bname = _br.cli || 'codex'; const bridgeModel = _br.model || ''; // per-CLI model (bridge:<cli>@<model>); bname stays the PURE cli so resume-ids + probe keep matching
      const bdef = bridges.BRIDGES[bname];
      if (!bdef) { const m = 'Unknown engine bridge: ' + bname + ' — pick a different Build model in Settings (gear).'; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n⚠ ' + m); return { ok: false, error: m }; }
      const pr = await bridges.probe(bname);
      if (!pr.installed) { const m = bdef.label + ' is not installed — ' + bdef.installHint; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n⚠ ' + m); return { ok: false, error: m }; }
      if (pr.loggedIn === false) { const m = bdef.label + ' is not signed in — ' + bdef.loginHint; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n⚠ ' + m); return { ok: false, error: m }; }
      // AUDIT-2 F68/F18: compose the FULL builder turn (card + knowledge + plan + REPLY_FORMAT + LANGUAGE_POLICY + ASK
      // when no plan + manual-edit overlay + language tag) so a bridge build mirrors the user's language, formats its
      // reply, and sees the overlay — parity with the SDK path (which had all this; the bridge silently didn't).
      const _bct = composeBuilderTurn({ cwd: _buildCwd, libraryContext: builderLibCtx, directorPlan, userPrompt: buildPrompt });
      const bridgePrompt = _bct.system + '\n\n---\n\n' + _bct.userText; // bridges take ONE prompt (system+user) via the task file
      const bpref = bname + ':';
      const resume = (typeof resumeId === 'string' && resumeId.startsWith(bpref)) ? resumeId.slice(bpref.length) : undefined;
      if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '⌁ Building via ' + bdef.label + '…' + (bdef.verified ? '' : ' (experimental bridge — first live run calibrates its event stream)') + '\n\n');
      const _bw = chatEngineWatch(event, bdef.label); // F28: wall-clock cap + heartbeat; Stop already reaches the child via bridges.stopAll (registered in activeChildren)
      let br;
      try {
        br = await bridges.runBridge(bname, {
          cwd: _buildCwd, prompt: bridgePrompt, resumeId: resume, model: bridgeModel, signal: _bw.ac.signal,
          onText: (t) => { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', t + '\n'); if (_blLane) _blLane.say(t); },
          onTool: (ev2) => { if (ev2 && /^(Write|Edit|MultiEdit)$/.test(ev2.name)) _builderWrote = true; if (!event.sender.isDestroyed()) event.sender.send('chat:tool', ev2); if (_blLane) _blLane.tool(ev2); },
        });
      } finally { _bw.stop(); }
      if (_bw.timedOut && (!br || br.ok !== true)) br = { ok: false, error: bdef.label + ' timed out after ' + _bw.capMin + ' min — the build was aborted so the turn could end (raise the cap in Settings › Swarm engines, or pick a faster engine)', text: (br && br.text) || '' };
      project.aiCommitTurn(snap);
      if (_builderWrote && maxMtime(_buildCwd) <= _cwdMtime0) {
        const m = '⚠ The build reported file edits, but the open project folder did NOT change:\n`' + _buildCwd + '`';
        if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n' + m);
      }
      if (realBuild) zeroWriteNote(); // F3: a build turn that wrote nothing on an empty project must say so
      if (_builderWrote) { try { palette.generatePalette(project.getDir()); } catch {} } // F15: regen after ANY file-writing turn (edit/loop/critique/verify-refeed), not only keyword build turns — generatePalette is idempotent (skips write+reload when byte-identical)
      if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); event.sender.send('ai:hist', project.aiState()); }
      if (!br.ok && br.error && !event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n' + friendlyTurnError(br.error)); // P4: plain + actionable, raw folded
      if (studioBuild && br.ok) await studioReviewerPass(event, directorPlan || prompt); // #7: QA parity — the Claude Reviewer reads a bridge-built site too
      if (_blLane) { try { br.ok ? _blLane.done() : _blLane.fail(br.error); } catch {} }
      return { ok: !!br.ok, error: br.error, text: br.text || '', sessionId: br.sessionId ? bpref + br.sessionId : null, usage: br.usage || null };
    }
    // 17b PROVIDER BUILDER: the header model picker chose an OpenRouter/OpenAI/Gemini/xAI model → build via the
    // tool-calling loop (providers.runBuild). Same host brain as Claude/bridge — grounding, reviewer note, capability
    // line are already inside buildPrompt/builderLibCtx as text. Stateless (no SDK session): the loop reads the files
    // on disk for context, so sessionId is null. The Studio Reviewer (Claude, read-only) DOES run afterward now (#7 parity).
    const _pref = providers.parseModelRef(_s.model || '');
    if (_pref) {
      const key = _s[providers.TABLE[_pref.provider].keyName];
      if (!key) { const m = providers.TABLE[_pref.provider].label + ' key missing — add it in Settings › Providers & keys.'; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n⚠ ' + m); return { ok: false, error: m }; }
      const _pct = composeBuilderTurn({ cwd: _buildCwd, libraryContext: builderLibCtx, directorPlan, userPrompt: buildPrompt }); // F68/F18: provider build gets the SAME policy/overlay/language as the SDK path
      if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '⌁ Building via ' + _pref.provider + ':' + _pref.model + '…\n\n');
      const _pw = chatEngineWatch(event, _pref.provider + ':' + _pref.model); // F28: wall-clock cap + heartbeat
      _provAbort = _pw.ac; // Stop (chat:stop → _provAbort.abort()) AND the wall-clock cap both abort this ONE signal
      let pr;
      try { pr = await providers.runBuild({ provider: _pref.provider, model: _pref.model, key, system: _pct.system, userText: _pct.userText, cwd: _buildCwd, signal: _pw.ac.signal, reqTimeoutMs: _pw.capMin * 60000, onText: (tx) => { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', tx + '\n'); if (_blLane) _blLane.say(tx); }, onTool: (ev2) => { if (ev2 && /^(Write|Edit|MultiEdit)$/.test(ev2.name)) _builderWrote = true; if (!event.sender.isDestroyed()) event.sender.send('chat:tool', ev2); if (_blLane) _blLane.tool(ev2); } }); }
      finally { _pw.stop(); _provAbort = null; }
      if (_pw.timedOut && (!pr || pr.ok !== true)) pr = { ok: false, error: _pref.provider + ' build timed out after ' + _pw.capMin + ' min — aborted so the turn could end (raise the cap in Settings › Swarm engines, or pick a faster engine)', text: (pr && pr.text) || '', usage: (pr && pr.usage) || null };
      project.aiCommitTurn(snap);
      if (_builderWrote && maxMtime(_buildCwd) <= _cwdMtime0) { const m = '⚠ The build reported file edits, but the open project folder did NOT change:\n`' + _buildCwd + '`'; if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n' + m); }
      if (realBuild) zeroWriteNote(); // F3 (provider path)
      if (_builderWrote) { try { palette.generatePalette(project.getDir()); } catch {} } // F15: regen after ANY file-writing turn (edit/loop/critique/verify-refeed), not only keyword build turns — generatePalette is idempotent (skips write+reload when byte-identical)
      if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); event.sender.send('ai:hist', project.aiState()); }
      if (!pr.ok && pr.error && !event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n' + friendlyTurnError(pr.error)); // P4: plain + actionable, raw folded
      if (studioBuild && pr.ok) await studioReviewerPass(event, directorPlan || prompt); // #7: QA parity — the Claude Reviewer reads a provider-built site too
      if (_blLane) { try { pr.ok ? _blLane.done() : _blLane.fail(pr.error); } catch {} }
      return { ok: !!pr.ok, error: pr.error, text: pr.text || '', sessionId: null, usage: pr.usage || null };
    }
    // Claude engine: a bridge-prefixed resumeId from an earlier bridge turn can't resume an SDK session — start fresh.
    if (typeof resumeId === 'string' && /^(codex|grok|copilot|mimo):/.test(resumeId)) resumeId = undefined;
    // RETRY transient API throttles/overloads on the builder turn so a temporary error can't leave a HALF-built site
    // (e.g. index.html written but styles.css not). The builder resumes the convo + finishes from the files on disk.
    let r = null;
    for (let attempt = 0; ; attempt++) {
      if (stoppedNote()) return { ok: false, error: 'stopped' }; // F30: level-triggered Stop at the TOP of every retry iteration (before dispatch)
      try {
        r = await runChat(buildPrompt, {
          cwd: project.getDir(),
          allowEdits: true,
          resumeId, // resume THIS conversation's session explicitly (undefined => fall back to the global)
          images, // [assets/...] rel paths of vision-supported images the model should SEE this turn
          model: claudeOnlyModel(_s.model), // BYOK model picker (undefined => SDK default = Sonnet); bridge/provider refs were dispatched above — sanitize is a uniform no-op here (F2 invariant: no raw ref ever reaches the SDK)
          libraryContext: builderLibCtx, // KNOWLEDGE-WIRING #3: plan-matched grounding (techniques + real reference exemplars), guaranteed host-side
          searchLibrary: searchDesignLibrary, // KNOWLEDGE-WIRING #3: active on-demand search over techniques + the reference corpus (bonus)
          directorPlan, // STUDIO Inc 1: the Director's plan (empty in Solo mode) → the builder follows it
          onChunk: (t) => { if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', t); if (_blLane) _blLane.say(t); },
          onTool: (ev) => { if (ev && /^(Write|Edit|MultiEdit)$/.test(ev.name)) _builderWrote = true; if (!event.sender.isDestroyed()) event.sender.send('chat:tool', ev); if (_blLane) _blLane.tool(ev); },
        });
        break;
      } catch (e) {
        const em = String((e && e.message) || e);
        if (/rate.?limit|overload|\b429\b|\b529\b|temporarily|too many requests/i.test(em) && attempt < 3) {
          const waitS = [8, 20, 40][attempt];
          if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n◷ API throttled (' + em.slice(0, 56) + ') — retrying in ' + waitS + 's…\n');
          await interruptibleSleep(waitS * 1000, () => _turnStopped); // F30: Stop preempts the backoff instead of waiting it out
          if (stoppedNote()) return { ok: false, error: 'stopped' };
          continue;
        }
        throw e;
      }
    }
    project.aiCommitTurn(snap); // drop the undo point if nothing changed, else keep it
    // MISDIRECT DETECTOR: the builder reported file writes but NOTHING in the open project folder changed → the edits
    // landed in a DIFFERENT working directory (the silent wrong-cwd bug). Surface it LOUDLY instead of pretending success.
    if (_builderWrote && maxMtime(_buildCwd) <= _cwdMtime0) {
      const m = '⚠ The build reported file edits, but the open project folder did NOT change:\n`' + _buildCwd + '`\nThe files were likely written to a different working directory (a cwd bug). Your work is NOT lost — check other folders under baseline/sites/ (e.g. new-site). Re-open the correct project and rebuild.';
      console.error('[dz-build] MISDIRECT — builder wrote but cwd unchanged. cwd=', _buildCwd);
      if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n\n' + m);
    }
    if (realBuild) zeroWriteNote(); // F3 (SDK path): a build turn that wrote nothing on an empty project must say so
    // PALETTE BOARD (owner req): after a build/redesign, (re)generate palette.html from the site's styles.css :root tokens
    // — a labelled design-system frame showing the real colours / fonts / accents. Host-side + deterministic (free,
    // reliable, always in sync); idempotent so it only writes + reloads when the tokens actually changed.
    if (_builderWrote) { try { palette.generatePalette(project.getDir()); } catch {} } // F15/F6: the SDK/Claude default-engine palette site — regen after ANY file-writing turn (this is the 4th site a naive realBuild-only edit would leave behind)
    // belt-and-suspenders: refresh the preview + tree after an edit turn (in case fs.watch missed it)
    if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); event.sender.send('ai:hist', project.aiState()); }
    // STUDIO Inc 2: a Reviewer gives a second-lens QA pass over the built result (read-only) and streams findings to the
    // user. Its report is persisted (reviewnote) → injected into every later turn so "fix #2" resolves against it.
    if (_blLane) { try { _blLane.done(); } catch {} } // BUILD LOG: close the solo/studio builder lane
    if (studioBuild) await studioReviewerPass(event, directorPlan || prompt);
    return { ok: true, text: r.text, sessionId: r.sessionId, usage: r.usage || null, maxTurns: !!r.maxTurns };
  } catch (e) {
    project.aiCommitTurn(snap); // the turn may have partially edited — keep the point if so
    const msg = (e && (e.message || String(e))) || 'unknown error';
    if (!event.sender.isDestroyed()) { event.sender.send('chat:chunk', '\n' + friendlyTurnError(msg)); event.sender.send('ai:hist', project.aiState()); } // P4: plain + actionable, raw folded
    return { ok: false, error: msg };
  }
});

// AI edit history — undo/redo the agent's direct file rewrites (zero tokens; pure file snapshots)
ipcMain.handle('ai:undo', (event) => { const st = project.aiUndo(); try { palette.generatePalette(project.getDir()); } catch {} if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); } return st; }); // F15: re-sync the palette board with the reverted styles.css tokens BEFORE the reload
ipcMain.handle('ai:redo', (event) => { const st = project.aiRedo(); try { palette.generatePalette(project.getDir()); } catch {} if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); } return st; }); // F15: same on redo
ipcMain.handle('ai:state', () => project.aiState());

// project: current folder + served URL + file tree; open a different folder
// the picker engine source, to inject into the preview webview (increment 4)
ipcMain.handle('pick:source', () => { try { return fs.readFileSync(PICKER_PATH, 'utf8'); } catch { return ''; } });

// diagnostics: renderer/guest forwards real error text here so it surfaces in the terminal
ipcMain.on('log:line', (_e, s) => { console.error('[dz-diag]', s); });

// interrupt the running chat turn (the Stop button)
ipcMain.handle('chat:stop', () => { _turnStopped = true; stop(); bridges.stopAll(); if (_provAbort) { try { _provAbort.abort(); } catch {} } flushPendingAsks(); return true; }); // F7: mark the TURN stopped (checked between chat:send phases) + kill any bridge CLI child + abort a provider build + release any pending ask_user so its handler returns instead of hanging

// open an external http(s) link from chat in the OS browser (never inside the app)
ipcMain.handle('shell:open', (_e, url) => { try { if (typeof url === 'string' && /^https?:\/\//i.test(url)) shell.openExternal(url); } catch {} return true; });

// open the current project's site in ITS OWN clean window (no app chrome). This is the reliable
// "view full-size" path: the in-app preview webview goes black when the app window enters OS
// fullscreen (compositing limitation), so we hand the site to a dedicated BrowserWindow instead.
ipcMain.handle('preview:popout', (_e, url) => {
  try {
    const target = (typeof url === 'string' && url) || project.url();
    const w = new BrowserWindow({
      width: 1440, height: 900, backgroundColor: '#ffffff',
      title: 'Loupe — preview', autoHideMenuBar: true,
      webPreferences: { contextIsolation: true, nodeIntegration: false },
    });
    w.loadURL(target);
    w.maximize();
  } catch (e) { console.error('[dz] popout', e); }
  return true;
});

// start a fresh conversation (reset the agent's session context)
ipcMain.handle('chat:reset', () => { resetSession(); return true; });

// switch the agent to an existing conversation (null => fresh). Renderer passes the stored sessionId.
ipcMain.handle('chat:setSession', (_e, id) => { setSession(id); return true; });

// apply manual edits DIRECTLY to the project's edits layer — no agent, no tokens, instant.
// list: [{ selector, props: { prop: value, ... } }]
// NOTE: no project:reload here — the renderer applies the overlay LIVE (swap the dezign-edits.css link +
// clear the just-committed inline styles) so manual edits never reload the page (no flash, no scroll jump,
// no re-played load animations). Only AGENT file edits + AI undo/redo reload (they change real files).
ipcMain.handle('edits:apply', (event, map) => {
  return project.applyEdits(map);
});
ipcMain.handle('edits:get', () => project.getEdits());
ipcMain.handle('verify:saveFrame', (event, b64, name) => project.saveVerifyFrame(b64, name)); // stash the rendered preview for the verify re-feed (name = device-width frame for loop-mode)
ipcMain.handle('loop:persist', (event, payload) => project.loopPersist(payload)); // loop-mode run-log: .dezign-loop.json + run-log.md + iter-N.png

// ── Settings store (BYOK keys etc.) in userData + SMART IMAGERY fulfilment (host-side, like verify: the isolated
//    agent emits <img data-gen="subject">, this fetches a relevant photo into assets/ and rewrites the src). ──
const settingsPath = () => path.join(app.getPath('userData'), 'dezign-settings.json');
const artMemPath = () => path.join(app.getPath('userData'), 'dezign-artdirection.json'); // cross-SITE divergence memory (app-global, not per-project)
// ATOMIC SETTINGS (audit 2026-07-09): a crash mid-write used to TEAR dezign-settings.json → readSettings collapsed
// the parse error to {} → every BYOK key silently gone, masquerading as an unconfigured app. Write = temp+rename
// (atomic on one volume) with a last-good .bak; read distinguishes MISSING (a genuinely fresh app → {}) from
// CORRUPT (recover from .bak, else warn loudly and keep the corrupt file for forensics).
function readSettings() {
  const p = settingsPath();
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) {
    if (e && e.code === 'ENOENT') return {}; // missing = unconfigured, the only honest {} case
    try { const bak = JSON.parse(fs.readFileSync(p + '.bak', 'utf8')); console.warn('[settings] main file unreadable (' + ((e && e.message) || e) + ') — recovered from .bak'); return bak; } catch {}
    console.warn('[settings] file unreadable and no .bak (' + ((e && e.message) || e) + ') — treating as empty; the corrupt file is left at ' + p);
    return {};
  }
}
function writeSettings(s) {
  const p = settingsPath();
  try {
    try { if (fs.existsSync(p)) fs.copyFileSync(p, p + '.bak'); } catch {} // last-good snapshot
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(s, null, 2));
    fs.renameSync(tmp, p);
  } catch (e) { try { console.warn('[settings] write failed: ' + ((e && e.message) || e)); } catch {} }
}
ipcMain.handle('settings:get', () => readSettings());
ipcMain.handle('settings:set', (_e, patch) => { const s = { ...readSettings(), ...(patch || {}) }; writeSettings(s); applyAnthropicEnv(s); appPaths.noteSettingsChanged(); return s; }); // noteSettingsChanged: a libraryDir change takes effect on the next read, not next launch
applyAnthropicEnv(readSettings()); // A1 (3a): seed the env mirror at startup from the persisted key
// SETTINGS HUB v1 — validate a provider key with a minimal real call (never stored here; the panel saves via settings:set)
ipcMain.handle('settings:testKey', async (_e, kind, key) => {
  try {
    if (!key) return { ok: false, error: 'empty key' };
    if (kind === 'unsplash') { const d = await imagesource.getJSON('https://api.unsplash.com/search/photos?per_page=1&query=coffee', { Authorization: 'Client-ID ' + key }); return { ok: Array.isArray(d.results) }; }
    if (kind === 'pexels') { const d = await imagesource.getJSON('https://api.pexels.com/v1/search?per_page=1&query=coffee', { Authorization: key }); return { ok: Array.isArray(d.photos) }; }
    if (kind === 'openai') { const d = await imagesource.getJSON('https://api.openai.com/v1/models', { Authorization: 'Bearer ' + key }); return { ok: Array.isArray(d.data) }; }
    if (kind === 'openrouter') { const d = await imagesource.getJSON('https://openrouter.ai/api/v1/models', { Authorization: 'Bearer ' + key }); return { ok: Array.isArray(d.data) }; }
    if (kind === 'gemini') { const d = await imagesource.getJSON('https://generativelanguage.googleapis.com/v1beta/models?pageSize=1&key=' + encodeURIComponent(key)); return { ok: Array.isArray(d.models) }; }
    if (kind === 'xai') { const d = await imagesource.getJSON('https://api.x.ai/v1/models', { Authorization: 'Bearer ' + key }); return { ok: Array.isArray(d.data) }; }
    if (kind === 'anthropic') { const d = await imagesource.getJSON('https://api.anthropic.com/v1/models', { 'x-api-key': key, 'anthropic-version': '2023-06-01' }); return { ok: Array.isArray(d.data) }; } // A1 (3a): validate the in-app Claude key with a real call
    return { ok: false, error: 'unknown kind' };
  } catch (e) { return { ok: false, error: String((e && e.message) || e).slice(0, 140) }; }
});
// ═══ AGENT SWARM `/flow` (step 21) — plan → foundation → PARALLEL per-page builders, each owning ONE file. ═══
// Engine = the picker's model (Claude SDK or a CLI bridge — a swarm of Grok/MiMo/Codex processes works the same way).
// Events stream to the renderer (flow:event) → chat log + per-frame "building" badges. Stop aborts every lane.
let _flowState = null; // { acs:Set<AbortController>, stopped:bool } while a flow runs
// AUDIT-2 F31: the RENDERER's swarm session spans build → imagery → HDRI → prefetch → review — all renderer-driven IPCs
// that run AFTER flow:start resolves and nulls _flowState below. Arm a main-side latch for that WHOLE window so chat:send's
// belt keeps rejecting concurrent turns even when _flowState is null (the gap a chat turn could slip through and write the
// same project). sessionBegin/End IPCs from startFlowRun/endFlowSession drive it; a bounded watchdog auto-clears it so a
// crashed/stranded renderer can never wedge chat forever.
let _flowSessionActive = false;
let _flowSessionWatchdog = null;
function armFlowSession() { _flowSessionActive = true; try { if (_flowSessionWatchdog) clearTimeout(_flowSessionWatchdog); } catch {} _flowSessionWatchdog = setTimeout(() => { _flowSessionActive = false; _flowSessionWatchdog = null; }, 15 * 60000); if (_flowSessionWatchdog && _flowSessionWatchdog.unref) _flowSessionWatchdog.unref(); }
function clearFlowSession() { _flowSessionActive = false; try { if (_flowSessionWatchdog) { clearTimeout(_flowSessionWatchdog); _flowSessionWatchdog = null; } } catch {} }
function flowEvent(event, payload) { try { if (!event.sender.isDestroyed()) event.sender.send('flow:event', payload); } catch {} }
// one builder turn on the CURRENT engine (SDK or bridge), swarm-safe (own AC; bridge children die via stopAll)
// friendly labels for the known Claude ids so the swarm notes/log read "Opus 4.8" not "claude-opus-4-8"
const CLAUDE_LABELS = { 'claude-fable-5': 'Fable 5', 'claude-sonnet-5': 'Sonnet 5', 'claude-opus-4-8': 'Opus 4.8', 'claude-sonnet-4-6': 'Sonnet 4.6', 'claude-haiku-4-5-20251001': 'Haiku 4.5' };
const engineLabel = (m) => { if (!m) return 'Claude · Sonnet'; if (/^bridge:/.test(m)) { const b = bridges.parseBridgeRef(m) || { cli: '' }; return b.cli + ' CLI' + (b.model ? ' · ' + b.model : ''); } return providers.parseModelRef(m) ? m.split(':').slice(1).join(':') + ' (' + m.split(':')[0] + ')' : (CLAUDE_LABELS[m] || m); };
const engineLabelMap = (m) => Object.fromEntries(Object.entries(m || {}).map(([f, e]) => [f, engineLabel(e)])); // {file: model} → {file: label} for events/notes
// Q9 multi-swarm: is a chosen engine usable right now? Claude is always usable; a bridge must probe installed +
// signed-in; a provider model (17b) needs its BYOK key present. Unready engines silently drop instead of stalling.
async function engineReady(m) {
  if (/^bridge:/.test(m || '')) { try { const pr = await bridges.probe((bridges.parseBridgeRef(m) || {}).cli || ''); return !!(pr.installed && pr.loggedIn !== false); } catch { return false; } }
  const ref = providers.parseModelRef(m || '');
  if (ref) { try { return !!readSettings()[providers.TABLE[ref.provider].keyName]; } catch { return false; } }
  return true; // Claude (default or a pinned tier)
}
// the buildable knowledge/system preamble shared by the bridge + provider routes
// resolve the per-lane wall-clock cap (minutes) — configurable, clamped to a sane range; default 20
function laneTimeoutMin() { return Math.max(3, Math.min(120, Number(readSettings().swarmLaneTimeoutMin) || 20)); }
// AUDIT-2 F28: the CHAT-path bridge build (runBridge) and provider build (runBuild) had NO wall-clock cap — a wedged CLI
// bridge or a hung provider request could block the chat turn FOREVER (the GW31 class the /flow lane already guards with
// a per-lane timeout+heartbeat). This is that harness for the chat path: an AbortController the build must honor (on the
// cap OR a Stop the signal aborts → the CLI child is killed via runBridge.onAbort/killTree, or the provider loop ends →
// the turn resolves instead of hanging), plus a 90s heartbeat on the CHAT stream (chat:chunk — NOT the flow event bus,
// which is absent here) so a legitimately-long build reads as WORKING, not hung. Reuses the swarm lane-timeout knob.
function chatEngineWatch(event, label) {
  const ac = new AbortController();
  const t0 = Date.now();
  const capMin = laneTimeoutMin();
  const w = { ac, timedOut: false, capMin };
  w.timer = setTimeout(() => { w.timedOut = true; try { ac.abort(); } catch {} }, capMin * 60000);
  w.beat = setInterval(() => { const s = Math.round((Date.now() - t0) / 1000); if (event && event.sender && !event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n◷ ' + label + ' · still building — ' + Math.floor(s / 60) + 'm ' + (s % 60) + 's (cap ' + capMin + 'm)\n'); }, 90000);
  if (w.beat && w.beat.unref) w.beat.unref();
  w.stop = () => { try { clearTimeout(w.timer); } catch {} try { clearInterval(w.beat); } catch {} };
  return w;
}
async function flowBuilderTurn(event, { cwd, prompt, model, libCtx, file }) {
  const lane = flowlog.lane(cwd, file, { engine: engineLabel(model) }); // BUILD LOG: narration + tools + writes, engine + duration in the lane header/footer (P8)
  const onTool = (ev2) => { lane.tool(ev2); flowEvent(event, { kind: 'tool', file, name: ev2 && ev2.name }); };
  // ONE AbortController for whatever engine runs this lane, so a per-lane WALL-CLOCK TIMEOUT can abort it uniformly.
  // GW31 post-mortem: a grok CLI lane ran 8087s (2h15m) with no cap and — because runPool awaits every lane — held the
  // whole /multiflow for hours. Now: a stuck/slow lane is aborted after N min (kills the bridge child / aborts the
  // provider loop / aborts the SDK turn), marked failed, and the swarm finishes. A HEARTBEAT note every 90s makes a
  // legitimately-long build read as WORKING, not hung (grok streamed nothing until the very end — the "is it stuck?" gap).
  const ac = new AbortController();
  _flowState && _flowState.acs.add(ac);
  const timeoutMin = laneTimeoutMin();
  const t0 = Date.now();
  let timedOut = false;
  const timer = setTimeout(() => { timedOut = true; try { ac.abort(); } catch {} }, timeoutMin * 60000);
  const beat = setInterval(() => { const s = Math.round((Date.now() - t0) / 1000); flowEvent(event, { kind: 'note', note: '◷ ' + file + ' · ' + engineLabel(model) + ' · still building — ' + Math.floor(s / 60) + 'm ' + (s % 60) + 's elapsed (cap ' + timeoutMin + 'm)' }); }, 90000); // V2: monochrome ◷ per DESIGN-LANGUAGE (was a colored hourglass emoji)
  let r;
  try {
    if (/^bridge:/.test(model || '')) {
      const _br = bridges.parseBridgeRef(model) || {}; const bname = _br.cli || ''; const bridgeModel = _br.model || ''; // per-CLI model for a pinned page (bridge:<cli>@<model>)
      if (!bridges.BRIDGES[bname]) r = { ok: false, error: 'unknown bridge ' + bname };
      else {
        const _fct = composeBuilderTurn({ cwd, libraryContext: libCtx, directorPlan: '', userPrompt: prompt, forChat: false }); // F68/F18: flow bridge lane gets REPLY_FORMAT + LANGUAGE_POLICY (no ASK — autonomous)
        const full = _fct.system + '\n\n---\n\n' + _fct.userText;
        // GW31 post-mortem: CLI bridges (grok/mimo) stream NO parseable incremental events — the build log showed
        // nothing for the grok lanes until they finished (grok actually WROTE pet.html at 04:12 then hung 2h). So
        // POLL the lane's owned file and log its writes in real time; dump the final file line-by-line at the end.
        const owned = path.join(cwd, file);
        let lastSize = -1;
        const poll = setInterval(() => { try { const st = fs.statSync(owned); if (st.size !== lastSize) { lastSize = st.size; const n = fs.readFileSync(owned, 'utf8').split('\n').length; lane.progress('✎ ' + file + ' · ' + n + ' lines written'); flowEvent(event, { kind: 'tool', file, name: 'Write' }); } } catch {} }, 4000);
        try { r = await bridges.runBridge(bname, { cwd, prompt: full, lane: file, signal: ac.signal, model: bridgeModel, onText: (t) => lane.say(t), onTool }); } // lane=file → per-lane task file; signal → timeout/Stop kills the child
        finally { clearInterval(poll); }
        if (r && r.ok) { try { lane.tool({ name: 'Write', input: { file_path: file, content: fs.readFileSync(owned, 'utf8') } }); } catch {} } // the "line-by-line file writes" record for an otherwise-opaque bridge
      }
    } else if (providers.parseModelRef(model || '')) { // 17b provider builder — tool-calling loop writes the file via the BYOK key
      const pref = providers.parseModelRef(model);
      const key = readSettings()[providers.TABLE[pref.provider].keyName];
      if (!key) r = { ok: false, error: providers.TABLE[pref.provider].label + ' key missing — add it in Settings › AI providers' };
      else { const _fpct = composeBuilderTurn({ cwd, libraryContext: libCtx, directorPlan: '', userPrompt: prompt, forChat: false }); r = await providers.runBuild({ provider: pref.provider, model: pref.model, key, system: _fpct.system, userText: _fpct.userText, cwd, signal: ac.signal, onText: (tx) => lane.say(tx), onTool }); } // F68/F18: flow provider lane parity
    } else { // Claude Agent SDK
      const rr = await runChat(prompt, { cwd, allowEdits: true, model: model || undefined, libraryContext: libCtx, searchLibrary: searchDesignLibrary, abortController: ac, onChunk: (t) => lane.say(t), onTool });
      r = { ok: true, text: rr.text, usage: rr.usage };
    }
  } catch (e) {
    r = { ok: false, error: String((e && e.message) || e) };
  } finally {
    clearTimeout(timer); clearInterval(beat); _flowState && _flowState.acs.delete(ac);
  }
  if (timedOut) { const msg = 'timed out after ' + timeoutMin + ' min — ' + engineLabel(model) + ' was too slow or stuck; the lane was aborted so the rest of the swarm could finish (raise the cap in Settings › Swarm engines, or use a faster engine)'; lane.fail(msg); flowEvent(event, { kind: 'note', note: '◷ ' + file + ' — ' + msg }); return { ok: false, error: msg, timedOut: true }; } // V2: monochrome ◷ (was a colored stopwatch emoji)
  if (r.ok) lane.done(); else lane.fail(r.error);
  return r;
}
// Q9 PER-PAGE MANUAL ASSIGNMENT (swarmAssign='manual'): after planning, PAUSE the swarm and let the user pin each
// page's engine. Mirrors makeAskUser (ask_user) — a hard timeout + a Stop flush guarantee it never hangs the run;
// no answer / null → keep the round-robin default. The renderer builds the engine dropdowns (it owns the model list).
let _assignSeq = 0; const _pendingAssign = new Map();
function requestAssign(event, payload) {
  return new Promise((resolve) => {
    const id = 'asg_' + (++_assignSeq);
    let done = false; const finish = (v) => { if (done) return; done = true; _pendingAssign.delete(id); resolve(v); };
    _pendingAssign.set(id, finish);
    try { if (event && event.sender && !event.sender.isDestroyed()) event.sender.send('flow:assign', { id, ...payload }); else return finish(null); } catch { return finish(null); }
    setTimeout(() => finish(null), 180000); // safety: never block the pipeline forever
  });
}
function flushPendingAssign() { for (const [, f] of _pendingAssign) { try { f(null); } catch {} } _pendingAssign.clear(); }
ipcMain.handle('flow:assignAnswer', (_e, id, map) => { const f = _pendingAssign.get(id); if (f) f(map || null); return true; });

ipcMain.handle('flow:start', async (event, brief, opts = {}) => {
  if (_flowState) return { ok: false, error: 'a flow is already running' };
  const dir = project.getDir();
  if (!dir || !fs.existsSync(dir)) return { ok: false, error: 'no valid project folder open' };
  // PROMPT VOCABULARY (owner-designed): key=value terms unfold into BINDING blocks tied to real playbooks
  try {
    const ex = promptlang.expandBrief(brief);
    if (ex.used.length) { brief = ex.expanded; flowEvent(event, { kind: 'note', note: '≡ Vocabulary: ' + ex.used.join(' · ') }); }
    if (ex.unknown.length) flowEvent(event, { kind: 'note', note: '⚠ Unknown vocabulary ignored: ' + ex.unknown.join(' · ') });
  } catch {}
  const _stale = staleCodeNote(); if (_stale && !event.sender.isDestroyed()) event.sender.send('chat:chunk', _stale);
  const _s = readSettings();
  const model = _s.model || '';
  // AUDIT-2 F36: codex builds UNSANDBOXED (full machine access). chat:send gates this at dispatch; the SWARM path did NOT —
  // a persisted/typed bridge:codex in the single-engine model or the swarm FOUNDATION would run codex with experimental
  // OFF. Refuse the LEAD here (parity with chat:send), BEFORE lead/pool resolution + engineReady so a signed-in codex CLI
  // can't slip through. The POOL drops codex with a note below.
  if (!codexAllowed(_s)) {
    const leadRef = opts.multi ? (_s.swarmFoundation || _s.model || '') : (_s.model || '');
    if (/^bridge:codex/.test(leadRef)) {
      const codexMsg = 'The Codex build engine is experimental — it runs the codex CLI unsandboxed (full machine access). Turn on "Show experimental features" in Settings → General to use it, or pick another engine in Settings → Swarm engines.';
      if (!event.sender.isDestroyed()) event.sender.send('chat:chunk', '\n⚠ ' + codexMsg);
      return { ok: false, error: codexMsg };
    }
  }
  const parallel = Math.max(1, Math.min(4, (opts.parallel | 0) || 2)); // pool cap: 2 default, 4 max (subscription throttles are real)
  // Q9 MULTI-AI SWARM (/multiflow): different AIs build different pages of ONE site. Resolve the LEAD (foundation)
  // engine + the page-builder POOL from Settings, probe-filtering bridges to only ready engines (a signed-out CLI
  // drops out instead of stalling the run). `opts.multi` off → single-engine /flow, entirely unchanged.
  const multi = !!opts.multi;
  let lead = model, pool = [model];
  const enginesDropped = [];
  if (multi) {
    lead = _s.swarmFoundation || model || '';
    const raw0 = (Array.isArray(_s.swarmPool) && _s.swarmPool.length) ? _s.swarmPool.slice() : [lead];
    // AUDIT-2 F36: drop codex from the swarm pool when experimental is OFF (BEFORE engineReady — a signed-in codex would
    // otherwise pass the readiness probe and build unsandboxed). Surfaced as an enginesDropped note, like a not-ready CLI.
    const raw = codexAllowed(_s) ? raw0 : raw0.filter((m) => { if (/^bridge:codex/.test(m || '')) { enginesDropped.push('Codex (experimental — off)'); return false; } return true; });
    const ready = [];
    for (const m of raw) { if (await engineReady(m)) ready.push(m); else enginesDropped.push(engineLabel(m)); }
    pool = ready.length ? ready : ['']; // everything unready → default Claude so the run still completes
    if (!(await engineReady(lead))) { enginesDropped.push(engineLabel(lead) + ' (lead)'); lead = ''; }
  }
  _flowState = { acs: new Set(), stopped: false, startTs: Date.now() }; // F7: capture the flow-start wall clock BEFORE preFlowSnapshot so reconcile can classify strays by mtime
  try {
    // PULSE-DISTRICT GUARD: restore point BEFORE any swarm write (flow turns bypass the per-turn undo snapshots)
    try { const snap = flow.preFlowSnapshot(dir); if (snap) flowEvent(event, { kind: 'note', note: '↩ Pre-flow snapshot saved to ' + snap.replace(/\\/g, '/') + ' — the previous site is restorable from there.' }); } catch {}
    flowlog.start(dir, { engine: multi ? 'multi: ' + pool.map(engineLabel).join(', ') : (model || 'claude (default)'), parallel, brief }); // BUILD LOG: fresh file per run
    if (multi) {
      flowEvent(event, { kind: 'note', note: '⬡ Multi-AI swarm — foundation: ' + engineLabel(lead) + ' · pool: ' + pool.map(engineLabel).join(', ') + (enginesDropped.length ? ' · dropped (not ready): ' + enginesDropped.join(', ') : '') });
    }
    // 1) PLAN (strict JSON site map + design system; grounded with the library/corpus like any real build)
    flowEvent(event, { kind: 'phase', phase: 'planning' });
    let libCtx = ''; try { libCtx = searchDesignLibrary(brief) || ''; } catch {}
    libCtx = withTastePriors(libCtx); // Q3: the planner sees the archetype priors → picks sensible, distinct per-page compositions
    // planning stays on Claude (the strict-JSON contract is calibrated there): a bridge/provider LEAD → default Claude planner
    const _planLead = multi ? lead : model;
    const plannerModel = claudeOnlyModel(_planLead);
    // STRUCTURE-SAMENESS Variant-1 (2026-07-05): a GENERATIVE art-direction pre-pass LEADS the /flow. It authors the
    // committed, divergent direction the planner + every page builder build FROM (the assigned skeletons drop to a
    // reference; structureProbe stays a band-stack backstop), persisted to cross-site memory so the next site diverges.
    let flowArt = '';
    try {
      flowEvent(event, { kind: 'note', note: '★ Art Director — committing the direction…' });
      const _adDirs = artdir.readDirections(artMemPath(), 6);
      const _ad = await runArtDirector(brief, { cwd: dir, model: plannerModel, libraryContext: libCtx, divergence: artdir.divergenceBlock(_adDirs) });
      flowArt = artdir.stripCodeBlocks((_ad && _ad.text) || ''); // R3 class-fix: prose-only direction into the flow planner too
      if (flowArt && artdir.hasDirection(flowArt)) { try { artdir.pushDirection(artMemPath(), { ...artdir.parseDirection(flowArt), brief: String(brief).slice(0, 120), ts: new Date().toISOString().slice(0, 10) }); } catch {} }
      if (flowArt) { flowlog.section(dir, '★ Art Direction (binding)', flowArt); flowEvent(event, { kind: 'note', note: '★ Direction: ' + (artdir.parseDirection(flowArt).archetype || 'committed') }); }
    } catch (e) { /* art-direction failed → fall back to the planner's own archetype seed */ }
    const pl = await runFlowPlanner(brief, { cwd: dir, model: plannerModel, libraryContext: libCtx, artDirection: flowArt });
    if (_flowState.stopped) return { ok: false, error: 'stopped' };
    let plan = flow.parseFlowPlan(pl && pl.text);
    flowlog.section(dir, plan ? '▸ Plan (Director)' : '✕ Planner reply (did NOT parse — raw preserved)', (pl && pl.text) || '(empty)');
    if (!plan) {
      // REPAIR ROUND-TRIP (same class as the reviewer: verbose/truncated/off-schema reply) — the planner
      // reformats ITS OWN text into the strict shape; raw is already in the build log for diagnosis.
      flowEvent(event, { kind: 'note', note: '⚠ Plan did not parse — asking the planner to reformat its own reply…' });
      const fixBrief = 'Convert YOUR previous site plan below into EXACTLY the required JSON shape ({"pages":[{file,title,brief}…],"design":"…"}), nothing else, under 2800 characters. EVERY page keeps its file/title/brief; the design text may be shortened but must keep the archetype + tokens + signature moves.\n\nYOUR PREVIOUS REPLY:\n' + String((pl && pl.text) || '').slice(0, 6500);
      const pl2 = await runFlowPlanner(fixBrief, { cwd: dir, model: plannerModel });
      plan = flow.parseFlowPlan(pl2 && pl2.text);
      if (plan) flowlog.section(dir, '▸ Plan (Director, reformatted)', (pl2 && pl2.text) || '');
    }
    if (!plan) { flowEvent(event, { kind: 'error', note: 'planner did not produce a valid site plan (raw preserved in /buildlog — send it back for diagnosis)' }); return { ok: false, error: 'plan parse failed' }; }
    // re-ground with the PLAN (always English, names the archetype/structures) — a Russian brief alone scores ~0
    // against the English library index, so the plan is the better retrieval query for the foundation turn
    try { const g = searchDesignLibrary(brief.slice(0, 300) + ' ' + String(plan.design).slice(0, 500)); if (g) libCtx = g; } catch {}
    try { libCtx += library.armSnippets(dir, brief + ' ' + String(plan.design).slice(0, 400)); } catch {} // real runnable code, copied into the project for Read+adapt
    libCtx = withTastePriors(libCtx); // Q3: quantitative floor into the foundation grounding
    flowEvent(event, { kind: 'plan', design: plan.design.slice(0, 600), pages: plan.pages });
    // STRUCTURE LEVER: each page was dealt a DISTINCT host-assigned skeleton in parseFlowPlan — log + announce it so
    // the assignment is auditable (the deterministic before/after the owner can read), like the engine-assignment log.
    try { flowlog.section(dir, '▚ Skeleton assignment (host-dealt, distinct per page)', plan.pages.map((p) => '- ' + p.file + ' → ' + (p.skeleton ? p.skeleton.name : '?')).join('\n')); } catch {}
    flowEvent(event, { kind: 'note', note: '▚ Page architectures: ' + plan.pages.map((p) => p.file.replace(/\.html$/, '') + '=' + (p.skeleton ? p.skeleton.name : '?')).join(' · ') });
    // Q9: deal an engine to each page (foundation = lead; rest round-robin over the pool). Persist so a later /review
    // routes each page's FIX to the engine that built it. Single-engine /flow → every page maps to `model` (uniform).
    const engineByFile = multi ? flow.assignEngines(plan.pages, lead, pool) : Object.fromEntries(plan.pages.map((p) => [p.file, model]));
    const engineFor = (file) => (engineByFile[file] !== undefined ? engineByFile[file] : model);
    // Q9 MANUAL assignment: pause + let the user pin each page's engine before the swarm fans out (round-robin default)
    if (multi && _s.swarmAssign === 'manual' && !_flowState.stopped) {
      flowEvent(event, { kind: 'note', note: '⏸ Pick an engine for each page to start the build…' });
      const chosen = await requestAssign(event, { pages: plan.pages.map((p) => ({ file: p.file, title: p.title })), defaults: engineByFile });
      if (_flowState.stopped) return { ok: false, error: 'stopped' };
      if (chosen && typeof chosen === 'object') for (const p of plan.pages) { if (typeof chosen[p.file] === 'string') engineByFile[p.file] = chosen[p.file]; }
    }
    try { flow.saveEngines(dir, engineByFile); } catch {}
    if (multi) { flowEvent(event, { kind: 'engines', multi: true, map: engineLabelMap(engineByFile) }); flowlog.section(dir, '⬡ Engine assignment', plan.pages.map((p) => '- ' + p.file + ' → ' + engineLabel(engineFor(p.file))).join('\n')); }
    // 2) FOUNDATION (index.html + shared styles.css) — must exist before the swarm fans out
    flowlog.lane(dir, 'index.html', { engine: engineLabel(engineFor('index.html')) }).begin('foundation: tokens + nav + home');
    flowEvent(event, { kind: 'page', file: 'index.html', phase: 'start', engine: engineLabel(engineFor('index.html')), note: 'foundation: tokens + nav + home' });
    const fr = await flowBuilderTurn(event, { cwd: dir, prompt: flow.buildFoundationPrompt(plan, brief, readPlaybook(plan.pages[0] && plan.pages[0].skeleton), flowArt), model: engineFor('index.html'), libCtx, file: 'index.html' });
    if (_flowState.stopped) return { ok: false, error: 'stopped' };
    if (!fr.ok) { flowEvent(event, { kind: 'page', file: 'index.html', phase: 'failed', note: fr.error }); return { ok: false, error: 'foundation failed: ' + fr.error }; }
    // TASTE T1 host guarantee: DESIGN.md (the persistent source of truth grounding every later turn) must exist
    try {
      if (!fs.existsSync(path.join(dir, 'DESIGN.md'))) {
        fs.writeFileSync(path.join(dir, 'DESIGN.md'), flow.synthesizeDesignMd(plan, brief));
        flowEvent(event, { kind: 'note', note: '≡ DESIGN.md synthesized from the plan (the foundation agent did not write one) — it now grounds every later turn.' });
      }
    } catch {}
    flowEvent(event, { kind: 'page', file: 'index.html', phase: 'done' });
    if (!event.sender.isDestroyed()) { event.sender.send('project:tree', project.tree()); event.sender.send('project:reload'); }
    // 3) THE SWARM — remaining pages over a worker pool (parallel-safe: one agent = one file; styles.css read-only)
    const rest = plan.pages.filter((p) => p.file !== 'index.html');
    const results = await flow.runPool(rest, parallel, async (page) => {
      if (_flowState.stopped) return { ok: false, error: 'stopped' };
      const pageModel = engineFor(page.file); // Q9: this page's assigned engine (round-robin in multi mode; `model` otherwise)
      flowlog.lane(dir, page.file, { engine: engineLabel(pageModel) }).begin(page.title);
      flowEvent(event, { kind: 'page', file: page.file, phase: 'start', engine: engineLabel(pageModel), note: page.title });
      // KNOWLEDGE-WIRING for the swarm (2026-07-03 audit: page builders ran with libCtx:'' — the main build
      // path was BLIND to the library): per-page retrieval, query = this page's job + the plan's design language
      let pageCtx = ''; try { pageCtx = searchDesignLibrary(page.title + ' ' + page.brief + ' ' + String(plan.design).slice(0, 400)) || ''; } catch {}
      try { pageCtx += library.armSnippets(dir, page.title + ' ' + page.brief); } catch {}
      pageCtx = withTastePriors(pageCtx); // Q3: quantitative floor into each swarm page's grounding
      const r = await flowBuilderTurn(event, { cwd: dir, prompt: flow.buildPagePrompt(plan, page, brief, readPlaybook(page.skeleton), flowArt), model: pageModel, libCtx: pageCtx, file: page.file });
      flowEvent(event, { kind: 'page', file: page.file, phase: r.ok ? 'done' : 'failed', note: r.ok ? '' : r.error });
      if (r.ok && !event.sender.isDestroyed()) { event.sender.send('project:tree', project.tree()); }
      return r;
    });
    // 4) settle: relocate any stray-subfolder output (PSY1 class) → palette board + reload; imagery fill happens
    //    renderer-side (same post-turn path as normal builds — it scans the ROOT, another reason strays must move)
    try {
      const movedOut = flow.reconcileFlowOutput(dir, plan.pages.map((p) => p.file), _flowState && _flowState.startTs);
      if (movedOut.length) {
        flowlog.section(dir, '⚠ Relocated stray output', 'Builders wrote into a subfolder; the host moved these back to the project root:\n' + movedOut.join('\n'));
        flowEvent(event, { kind: 'note', note: '⚠ Builders wrote into a subfolder — relocated to the project root: ' + movedOut.join(', ') });
      }
    } catch {}
    // 4b) DETERMINISTIC STRUCTURE GATE (STRUCTURE LEVER): before the subjective reviewer, an LLM-free probe checks
    //     each page REALIZED its host-assigned skeleton (didn't collapse to a generic band stack); failing pages get
    //     ONE bounded structural rebuild (same ownership + engine contract). Skipped when everything passes — no tax.
    try {
      const probe0 = flow.structureProbe(dir, plan.pages);
      flowlog.section(dir, '▚ Structure probe', probe0.map((p) => (p.fail ? '✗ ' : '✓ ') + p.file + ' — ' + (p.skeleton || '?') + (p.fail ? ' — ' + p.reason : ' (sig ' + (p.sigPresent ? 'ok' : 'absent') + ', ' + p.markers + ' moves)')).join('\n'));
      const toFix = probe0.filter((p) => p.fail);
      if (toFix.length && !_flowState.stopped) {
        flowEvent(event, { kind: 'note', note: '▚ Structure gate: ' + toFix.length + ' page(s) fell back to a generic stack — forcing a structural rebuild…' });
        await flow.runPool(toFix, parallel, async (pr) => {
          if (_flowState.stopped) return { ok: false };
          const page = plan.pages.find((p) => p.file === pr.file); if (!page) return { ok: false };
          const eng = engineFor(page.file);
          flowlog.lane(dir, page.file, { engine: engineLabel(eng) }).begin('structure fix: ' + (page.skeleton ? page.skeleton.name : ''));
          flowEvent(event, { kind: 'page', file: page.file, phase: 'start', engine: engineLabel(eng), note: 'structure fix → ' + (page.skeleton ? page.skeleton.name : '') });
          let fixCtx = ''; try { fixCtx = withTastePriors(searchDesignLibrary((page.skeleton ? page.skeleton.name : '') + ' ' + page.title) || ''); } catch {}
          const rr = await flowBuilderTurn(event, { cwd: dir, prompt: flow.buildStructureFixPrompt(page, pr, readPlaybook(page.skeleton), flowArt), model: eng, libCtx: fixCtx, file: page.file });
          flowEvent(event, { kind: 'page', file: page.file, phase: rr.ok ? 'done' : 'failed', note: rr.ok ? '' : rr.error });
          return rr;
        });
        try { flow.reconcileFlowOutput(dir, plan.pages.map((p) => p.file), _flowState && _flowState.startTs); } catch {}
        const probe1 = flow.structureProbe(dir, plan.pages);
        const still = probe1.filter((p) => p.fail).map((p) => p.file);
        flowlog.section(dir, '▚ Structure probe (after fix)', probe1.map((p) => (p.fail ? '✗ ' : '✓ ') + p.file + ' — ' + (p.skeleton || '?')).join('\n'));
        flowEvent(event, { kind: 'note', note: still.length ? '▚ Structure gate: ' + (toFix.length - still.length) + '/' + toFix.length + ' rebuilt; still generic: ' + still.join(', ') : '▚ Structure gate: all ' + toFix.length + ' page(s) now realize their assigned architecture.' });
        if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
      }
    } catch (e) { console.error('[dz-flow] structure probe error:', e); }
    try { palette.generatePalette(dir); } catch {}
    if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
    const okPages = results.filter((r) => r && r.ok).length;
    flowEvent(event, { kind: 'done', built: okPages + 1, total: plan.pages.length, stopped: _flowState.stopped, multi, engines: multi ? engineLabelMap(engineByFile) : null });
    return { ok: true, built: okPages + 1, total: plan.pages.length };
  } catch (e) {
    flowEvent(event, { kind: 'error', note: String((e && e.message) || e).slice(0, 200) });
    return { ok: false, error: String((e && e.message) || e) };
  } finally { _flowState = null; }
});
ipcMain.handle('flow:stop', () => { if (_flowState) { _flowState.stopped = true; for (const ac of _flowState.acs) { try { ac.abort(); } catch {} } } clearFlowSession(); flushPendingAssign(); bridges.stopAll(); stop(); return true; }); // F31: a Stop also disarms the session belt
// AUDIT-2 F31: the renderer arms/disarms the main-side belt for its full build→imagery→prefetch→review session (main's
// _flowState is null for most of it — see the decl above). Begin from startFlowRun; end from endFlowSession / Stop / watchdog.
ipcMain.handle('flow:sessionBegin', () => { armFlowSession(); return true; });
ipcMain.handle('flow:sessionEnd', () => { clearFlowSession(); return true; });
// FLOW IMAGERY PRE-ASK (owner 2026-07-03: there was no choice of whether to use imagery or not): the chat path asks about
// imagery mid-turn (QA-ASK v2), but /flow never did — expose the same unit-tested detection so the renderer can
// ask BEFORE the swarm starts when the brief leaves the medium unstated.
ipcMain.handle('imagery:probe', (_e, brief) => {
  try { return { photoCentric: imagery.isPhotoCentricBuild(String(brief || '')), stated: imagery.MEDIUM_STATED_RE.test(String(brief || '')), genCap: genCapabilityOf(readSettings()) }; } // genCap → /flow offers the AI-generated option (§1a parity)
  catch (e) { return { photoCentric: false, stated: false, error: String((e && e.message) || e) }; } // F5: fail OPEN (stated:false) on a real error — the renderer still blocks on !error, but this drops the 'catch returns the disabled shape' anti-pattern that hid the ReferenceError
});
// FLOW REVIEWER (Stage-0 bar × the swarm): renderer sends one downscaled frame per page → the judge router
// (Claude / BYOK vendor / Grok subscription — the Settings judge pick) reviews the whole site against the
// STRIKING bar → pages with must_fix get a parallel FIX round on the build engine. One round per call.
ipcMain.handle('flow:review', async (event, payload = {}) => {
  if (_flowState) return { ok: false, error: 'a flow is already running' };
  const dir = project.getDir();
  if (!dir || !fs.existsSync(dir)) return { ok: false, error: 'no valid project folder open' };
  const frames = Array.isArray(payload.frames) ? payload.frames.filter((f) => f && f.file && /^data:image\//.test(String(f.dataUrl || ''))) : [];
  if (!frames.length) return { ok: false, error: 'no page frames to review' };
  const _s = readSettings();
  const model = _s.model || '';
  _flowState = { acs: new Set(), stopped: false, startTs: Date.now() }; // F7: capture the flow-start wall clock BEFORE preFlowSnapshot so reconcile can classify strays by mtime
  const reviewAc = new AbortController(); _flowState.acs.add(reviewAc); // AUDIT 2026-07-07: Stop aborts the in-flight HTTP judge (CLI judges die via stopAll)
  try {
    // 1) persist the frames (dot-folder: ignored by imagery/misdirect; overwritten per round)
    const fdir = path.join(dir, '.dezign-review-frames');
    try { fs.mkdirSync(fdir, { recursive: true }); } catch {}
    const rels = [];
    for (const f of frames) {
      const safe = String(f.file).replace(/[^a-z0-9._-]+/gi, '-');
      const m = String(f.dataUrl).match(/^data:image\/(png|jpe?g);base64,(.+)$/i);
      if (!m) continue;
      const rel = '.dezign-review-frames/' + safe + (/png/i.test(m[1]) ? '.png' : '.jpg');
      try { fs.writeFileSync(path.join(dir, rel), Buffer.from(m[2], 'base64')); rels.push({ file: f.file, rel }); } catch {}
    }
    if (!rels.length) return { ok: false, error: 'could not persist review frames' };
    // 2) judge (vision) — same router as the loop critic; grounded with the project's own tokens
    flowEvent(event, { kind: 'review', phase: 'judging', pages: rels.length });
    let tokens = ''; try { tokens = (fs.readFileSync(path.join(dir, 'styles.css'), 'utf8').match(/:root\s*\{[\s\S]*?\}/) || [''])[0].slice(0, 2400); } catch {}
    let design = ''; try { design = fs.readFileSync(path.join(dir, 'DESIGN.md'), 'utf8').trim().slice(0, 3200); } catch {} // T1: the source of truth outranks raw tokens as judge grounding
    let rubric = ''; try { rubric = fs.readFileSync(path.join(appPaths.libDir(), 'standards', 'visual-quality-rubric.md'), 'utf8').trim().slice(0, 2200); } catch {} // same grounding the loop critic gets (audit 2026-07-03)
    const jr = await judgeWith({ cwd: dir, system: flow.flowReviewCard(), userText: flow.buildReviewUserText(payload.brief || '', rels.map((r) => r.file), { tokens, design, rubric }), imageRels: rels.map((r) => r.rel), signal: reviewAc.signal });
    if (!jr.ok) { flowEvent(event, { kind: 'review', phase: 'failed', note: jr.error }); return jr; }
    let report = flow.parseReviewReport(jr.text, rels.map((r) => r.file));
    flowlog.section(dir, '◎ Reviewer (' + jr.judge + ')', (jr.text || '').slice(0, 5000));
    if (!report) {
      // REPAIR ROUND-TRIP: the judge wrote prose/an off-schema novel — make it reformat ITS OWN review (text-only, cheap)
      flowEvent(event, { kind: 'review', phase: 'reformat' });
      const jr2 = await judgeWith({ cwd: dir, system: 'You convert a design review into a strict JSON schema. Output ONLY the JSON.', userText: flow.buildReformatPrompt(jr.text, rels.map((r) => r.file)), imageRels: [], signal: reviewAc.signal });
      if (jr2.ok) { report = flow.parseReviewReport(jr2.text, rels.map((r) => r.file)); if (report) flowlog.section(dir, '◎ Reviewer report (reformatted)', (jr2.text || '').slice(0, 3000)); }
    }
    if (!report) { flowEvent(event, { kind: 'review', phase: 'no-report' }); return { ok: true, judge: jr.judge, report: null, fixed: 0, raw: (jr.text || '').slice(0, 800) }; }
    const toFix = report.pages.filter((p) => p.mustFix.length);
    flowEvent(event, { kind: 'review', phase: 'report', verdict: report.verdict, variety: report.siteVariety, notes: report.siteNotes.slice(0, 300), pages: report.pages.map((p) => ({ file: p.file, score: p.score, fixes: p.mustFix.length })) });
    if (report.siteVariety != null) { try { flowlog.section(dir, '◎ Cross-page variety', report.siteVariety + '/3 — ' + (report.siteVariety <= 1 ? 'pages are re-skins (fixes route to the weaker pages)' : report.siteVariety === 2 ? 'some pages differ' : 'each page has its own composition')); } catch {} }
    if (_flowState.stopped || !toFix.length) return { ok: true, judge: jr.judge, report, fixed: 0 };
    // 3) FIX round — parallel pool, same ownership contract as the build round (index.html owns styles.css)
    // Q9: route each page's fix to the SAME engine that built it (persisted in .dezign-flow-engines.json); a
    // standalone /review with no prior multiflow → every page falls back to the current chat model.
    const fixEngines = flow.loadEngines(dir);
    // AUDIT-2 F36: a persisted per-page engine (or the current model) that is bridge:codex would rebuild a flagged page
    // UNSANDBOXED. When experimental is OFF, coerce a codex fix-engine to the default Claude engine (never build a fix
    // with full machine access). One note if any coercion applied — parity with the chat/flow dispatch gates.
    const _codexOff = !codexAllowed(_s);
    if (_codexOff && (/^bridge:codex/.test(model) || Object.values(fixEngines).some((e) => /^bridge:codex/.test(e || '')))) flowEvent(event, { kind: 'note', note: '⚠ Codex is experimental (off) — flagged pages will be fixed on the default Claude engine.' });
    const fixEngineFor = (file) => { let e = (fixEngines[file] !== undefined ? fixEngines[file] : model); if (_codexOff && /^bridge:codex/.test(e || '')) e = ''; return e; };
    const parallel = Math.max(1, Math.min(4, (payload.parallel | 0) || 2));
    const results = await flow.runPool(toFix, parallel, async (page) => {
      if (_flowState.stopped) return { ok: false, error: 'stopped' };
      const pageModel = fixEngineFor(page.file);
      flowlog.lane(dir, page.file, { engine: engineLabel(pageModel) }).begin('review fixes: ' + page.mustFix.length);
      flowEvent(event, { kind: 'page', file: page.file, phase: 'start', engine: engineLabel(pageModel), note: 'review fixes (' + page.mustFix.length + ')' });
      let fixCtx = ''; try { fixCtx = withTastePriors(searchDesignLibrary(page.mustFix.join(' ') + ' ' + page.file) || ''); } catch {} // the reviewer's directives often NAME a structure → its playbook rides along; + the taste floor so a fix can't drop below the corpus floor (mirrors the structure-fix round)
      const r = await flowBuilderTurn(event, { cwd: dir, prompt: flow.buildFixPrompt(page, report), model: pageModel, libCtx: fixCtx, file: page.file });
      flowEvent(event, { kind: 'page', file: page.file, phase: r.ok ? 'done' : 'failed', note: r.ok ? '' : r.error });
      return r;
    });
    try { const movedOut = flow.reconcileFlowOutput(dir, toFix.map((p) => p.file), _flowState && _flowState.startTs); if (movedOut.length) flowEvent(event, { kind: 'note', note: '⚠ Relocated stray output: ' + movedOut.join(', ') }); } catch {}
    const fixed = results.filter((r) => r && r.ok).length;
    // B3b — CONFIRMED LIVE on /review (2026-07-08, LEGO1): a FIX round can ADD <img data-gen>/<img data-gen-ai>
    // slots (the revised hero emitted one → shipped as an empty black panel, because the fulfillment pass runs
    // only after normal chat turns, never after review revisions). Any turn that can add slots must be followed
    // by the SAME post-turn fulfillment — run it here BEFORE the reload/re-capture so the owner (and any later
    // judge pass) sees filled frames. Advisory: failures leave the page as-is, never fail the review round.
    if (fixed && !_flowState.stopped) {
      try {
        const s2 = readSettings();
        const fr = await imagesource.fulfillImages(dir, { unsplashKey: s2.unsplashKey, pexelsKey: s2.pexelsKey, openaiKey: s2.openaiKey, openrouterKey: s2.openrouterKey, xaiKey: s2.xaiKey, imageModel: effSettingsForGen(s2).imageModel, genCli: genCliOf(s2), domain: imagesource.siteDomain(dir) }); // A8: codex gen exp-gated
        const nOk = fr.filter((r) => r.ok).length;
        if (fr.length) flowEvent(event, { kind: 'note', note: '▣ Imagery after fixes: filled ' + nOk + '/' + fr.length + ' slot(s) added by the fix round.' });
        try { if (fr.length && fs.existsSync(flowlog.logPath(dir))) flowlog.section(dir, '▣ Imagery (post-fix)', 'filled ' + nOk + '/' + fr.length); } catch {}
      } catch {}
      try { await assetsource.fulfillHDRIs(dir, { domain: imagesource.siteDomain(dir) }); } catch {} // same class for data-hdri anchors
    }
    try { palette.generatePalette(dir); } catch {} // F15: re-sync the palette board after the review fix round (parity with the ungated flow initial pass)
    if (!event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
    flowEvent(event, { kind: 'review', phase: 'done', fixed, total: toFix.length });
    return { ok: true, judge: jr.judge, report, fixed, total: toFix.length };
  } catch (e) {
    return { ok: false, error: String((e && e.message) || e) };
  } finally { _flowState = null; }
});
// PROMPT VOCABULARY cheatsheet for the /guide command
ipcMain.handle('promptlang:guide', () => { try { return promptlang.cheatsheet(); } catch (e) { return 'guide unavailable: ' + ((e && e.message) || e); } });
// BUILD LOG viewer: the current run (live) or any ARCHIVED run from .dezign-logs/ (P8: runs are never lost)
ipcMain.handle('flow:log', (_e, which) => {
  const dir = project.getDir(); if (!dir) return { ok: false, error: 'no project open' };
  const runs = flowlog.listRuns(dir);
  const text = which && which !== 'current' ? flowlog.readRun(dir, which) : flowlog.read(dir);
  return { ok: true, text, running: !!_flowState, path: flowlog.logPath(dir), runs, which: which || 'current' };
});

// CLI-BRIDGES (19): probe vendor CLIs for the Settings status block + picker ("installed & signed in?")
ipcMain.handle('bridge:probe', async (_e, name) => { try { return await bridges.probe(name || 'codex'); } catch (e) { return { name, installed: false, loggedIn: false, hint: String((e && e.message) || e) }; } });
// DYNAMIC per-user model list — run the CLI's live list command → the models THAT account serves (falls back to static).
ipcMain.handle('bridge:models', async (_e, name) => { try { return { ok: true, models: await bridges.listModels(name) }; } catch (e) { return { ok: false, models: [], error: String((e && e.message) || e) }; } });
// M3 3b: "Connect" — launch the vendor login (browser OAuth); the renderer re-probes on return.
ipcMain.handle('bridge:login', async (_e, name) => { try { return await bridges.login(name); } catch (e) { return { ok: false, error: String((e && e.message) || e) }; } });
// M3 3c (EXPERIMENTAL, UI-gated): "Install for me" — run the exact install command, streaming output to a visible pane.
ipcMain.handle('bridge:install', async (event, name) => { try { return await bridges.install(name, (chunk) => { if (!event.sender.isDestroyed()) event.sender.send('bridge:install:chunk', { name, chunk }); }); } catch (e) { return { ok: false, error: String((e && e.message) || e) }; } });

// A1 (audit cold-eye 2026-07-09): Claude Code connection status + sign-in. Claude is THE default builder, but — unlike
// the CLI bridges — the app showed NO install/login status and no way to connect, so a stranger couldn't tell HOW to
// reach Claude (the primary path is a Claude Code sign-in, which uses your Claude subscription). `claude auth status`
// prints JSON {loggedIn,email,subscriptionType,authMethod}; `claude auth login` opens the browser OAuth. We probe the
// former for status and spawn the latter for Connect (mirrors the bridge probe/login shape).
const claudeRun = (args, ms) => new Promise((resolve) => {
  const { spawn } = require('child_process');
  let out = '', err = '', done = false, ch;
  // AUDIT-2 F8: drive the SAME binary the SDK build path resolves (resolveClaudeExe) so auth + build can never diverge.
  // An absolute exe → shell:false (no win32 cmd.exe wrapper to orphan the OAuth waiter); dev fallback keeps bare 'claude'.
  const exe = appPaths.resolveClaudeExe();
  const useShell = !exe && process.platform === 'win32';
  try { ch = spawn(exe || 'claude', args, { shell: useShell, windowsHide: true }); }
  catch (e) { return resolve({ code: -1, out: '', err: String((e && e.message) || e) }); }
  try { bridges.registerChild(ch); } catch {} // F27: reachable by chat:stop/flow:stop's stopAll + the before-quit reaper
  const settle = (r) => { if (done) return; done = true; clearTimeout(t); try { bridges.unregisterChild(ch); } catch {} resolve(r); };
  const t = setTimeout(() => { try { bridges.killTree(ch); } catch {} settle({ code: -1, out, err, timeout: true }); }, ms || 8000); // killTree (F24 taskkill-first), not ch.kill(): a shell:true win32 kill takes only the wrapper and orphans the claude.exe OAuth waiter
  ch.stdout && ch.stdout.on('data', (d) => { out += d; });
  ch.stderr && ch.stderr.on('data', (d) => { err += d; });
  ch.on('error', (e) => settle({ code: -1, out, err: String((e && e.message) || e) }));
  ch.on('close', (code) => settle({ code, out, err }));
});
ipcMain.handle('claude:probe', async () => {
  try {
    const keySet = !!(process.env.ANTHROPIC_API_KEY || String((readSettings().anthropicKey) || '').trim());
    const st = await claudeRun(['auth', 'status'], 8000);
    const missing = st.code !== 0 && /not recognized|not found|ENOENT|no such file|command not found/i.test((st.err || '') + (st.out || ''));
    if (missing) return { installed: false, loggedIn: false, keySet, installCmd: 'npm install -g @anthropic-ai/claude-code' };
    let j = null; for (const s of [st.out, st.err]) { try { const p = JSON.parse(String(s || '').trim()); if (p && typeof p === 'object') { j = p; break; } } catch {} }
    if (j && typeof j.loggedIn === 'boolean') return { installed: true, loggedIn: j.loggedIn, keySet, email: j.email || '', plan: j.subscriptionType || '', method: j.authMethod || '' };
    return { installed: true, loggedIn: false, keySet, hint: String(st.err || st.out || '').trim().slice(0, 140) };
  } catch (e) { return { installed: false, loggedIn: false, keySet: false, hint: String((e && e.message) || e) }; }
});
ipcMain.handle('claude:login', async () => { try { const r = await claudeRun(['auth', 'login'], 180000); return { ok: r.code === 0, code: r.code, out: String(r.out || r.err || '').slice(-400) }; } catch (e) { return { ok: false, error: String((e && e.message) || e) }; } });
// BYOK — DYNAMIC model lists (owner: "the user should be able to pick among ALL available models, not a hardcoded few").
// Fetched from each provider's real list endpoint with the SAVED key; the picker groups them by provider. Claude has no
// subscription-side list endpoint — its group stays curated + a free custom-id entry.
ipcMain.handle('settings:listModels', async (_e, provider) => {
  const s = readSettings();
  try {
    // server-side capability filter (live-verified 2026-07-02): only TOOL-CAPABLE models make sense as build/judge
    // agents — ?supported_parameters=tools returns 245 of 338 (the server filter is stricter than client matching; see docs/MULTI-PROVIDER-BRIEF.md)
    // Bug3 (owner): every provider list is SORTED alphabetically (they arrived in API order = scattered). For OpenRouter,
    // the AUTO router (`openrouter/auto` — picks the model itself) is prepended as the default pick above the A-Z list.
    if (provider === 'openrouter') { if (!s.openrouterKey) return { ok: false, error: 'no key' }; const d = await imagesource.getJSON('https://openrouter.ai/api/v1/models?supported_parameters=tools', { Authorization: 'Bearer ' + s.openrouterKey });
      const tierOf = (p) => (p <= 0 ? 'free' : (p <= 2 ? '$' : (p <= 15 ? '$$' : '$$$'))); // U4: budget tier by completion price $/1M tokens (free · $ ≤2 · $$ ≤15 · $$$ >15)
      const list = (d.data || []).map((m) => { const price = Number((m.pricing && m.pricing.completion) || 0) * 1e6; return { id: m.id, label: m.name || m.id, price, tier: tierOf(price), vision: !!(m.architecture && Array.isArray(m.architecture.input_modalities) && m.architecture.input_modalities.includes('image')) }; }).filter((m) => m.id !== 'openrouter/auto').sort((a, b) => a.label.localeCompare(b.label)).slice(0, 400);
      list.unshift({ id: 'openrouter/auto', label: 'Auto — OpenRouter picks the model', tier: null }); return { ok: true, models: list }; }
    if (provider === 'openai') { if (!s.openaiKey) return { ok: false, error: 'no key' }; const d = await imagesource.getJSON('https://api.openai.com/v1/models', { Authorization: 'Bearer ' + s.openaiKey }); return { ok: true, models: (d.data || []).map((m) => ({ id: m.id, label: m.id })).sort((a, b) => a.label.localeCompare(b.label)).slice(0, 250) }; }
    if (provider === 'gemini') { if (!s.geminiKey) return { ok: false, error: 'no key' }; const d = await imagesource.getJSON('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=' + encodeURIComponent(s.geminiKey)); return { ok: true, models: (d.models || []).map((m) => ({ id: String(m.name || '').replace(/^models\//, ''), label: m.displayName || m.name })).sort((a, b) => a.label.localeCompare(b.label)).slice(0, 250) }; }
    if (provider === 'xai') { if (!s.xaiKey) return { ok: false, error: 'no key' }; const d = await imagesource.getJSON('https://api.x.ai/v1/models', { Authorization: 'Bearer ' + s.xaiKey }); return { ok: true, models: (d.data || []).map((m) => ({ id: m.id, label: m.id })).sort((a, b) => a.label.localeCompare(b.label)).slice(0, 150) }; }
    // IMAGE-GENERATION model discovery (OpenRouter Unified Image API, verified: GET /api/v1/images/models) — feeds the
    // Settings "Generation model" select so e.g. Grok Imagine can paint while Claude builds (no xAI key needed).
    if (provider === 'openrouter-images') { if (!s.openrouterKey) return { ok: false, error: 'no key' }; const d = await imagesource.getJSON('https://openrouter.ai/api/v1/images/models', { Authorization: 'Bearer ' + s.openrouterKey }); return { ok: true, models: (d.data || []).map((m) => ({ id: m.id, label: m.name || m.id })).slice(0, 100) }; }
    return { ok: false, error: 'unknown provider' };
  } catch (e) { return { ok: false, error: String((e && e.message) || e).slice(0, 140) }; }
});
// #5 (2026-07-05): persist the imagery MEDIUM choice per project so the post-turn fill honors an "illustration / no
// photos" opt-out DETERMINISTICALLY (the /flow imagery ask is renderer-side; the swarm's post-fill needs the choice on
// disk). 'illustration' => STRIP any leaked <img data-gen>/<img data-gen-ai>; anything else => clear (fill normally).
// AUDIT-2 F38: a renderer-supplied cwd must NOT let a fulfill/palette handler read or write OUTSIDE the open project.
// Accept a non-falsy cwd ONLY if it resolves inside the project root (realpath-backed isInside); else fall back to the root.
function confineCwd(cwd) { const root = project.getDir(); if (!root) return null; if (!cwd) return root; try { return isInside(root, cwd) ? cwd : root; } catch { return root; } }
ipcMain.handle('imagery:setMedium', (_e, medium) => { try { const dir = project.getDir(); if (dir) imagesource.writeMedium(dir, medium === 'illustration' ? 'illustration' : (medium === 'generative' ? 'generative' : null)); return { ok: true }; } catch (e) { return { ok: false, error: String((e && e.message) || e) }; } });
ipcMain.handle('images:fulfill', async (event, cwd) => {
  const dir = confineCwd(cwd); if (!dir) return { ok: false, error: 'no project open' };
  const s = readSettings();
  let results = [];
  try { results = await imagesource.fulfillImages(dir, { unsplashKey: s.unsplashKey, pexelsKey: s.pexelsKey, openaiKey: s.openaiKey, openrouterKey: s.openrouterKey, xaiKey: s.xaiKey, imageModel: effSettingsForGen(s).imageModel, genCli: genCliOf(s), domain: imagesource.siteDomain(dir) }); } // A8: codex gen exp-gated
  catch (e) { return { ok: false, error: (e && e.message) || 'fulfill failed' }; }
  if (results.some((r) => r.ok) && !event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
  // P8: the imagery pass writes its result into the build log (only when this project HAS one — no stray files)
  try { if (results.length && fs.existsSync(flowlog.logPath(dir))) flowlog.section(dir, '▣ Imagery', 'filled ' + results.filter((r) => r.ok).length + '/' + results.length + (results.vetoed ? ' · vision vetoed & swapped ' + results.vetoed : '') + (results.limited && results.limited.length ? ' · ⚠ limited: ' + results.limited.join('/') : '') + '\n' + results.filter((r) => r.ok).map((r) => '- ' + (r.file || '') + ' ← ' + (r.provider || '') + ' "' + (r.usedQuery || r.subject || '') + '"').slice(0, 30).join('\n')); } catch {}
  return { ok: true, filled: results.filter((r) => r.ok).length, total: results.length, simplified: results.filter((r) => r.ok && r.simplified).length, limited: results.limited || [], vetoed: results.vetoed || 0, visionChecked: !!results.visionChecked, hasPexels: !!s.pexelsKey, stripped: results.stripped || 0, medium: results.medium || null, results };
});
// 3D-ASSET HARVEST (2026-07-04): fill <div data-hdri="sky subject" id=…> anchors with a real CC0 Poly Haven HDRI
// (assets/hdri/<id>.hdr) so WebGL scenes get real image-based lighting. Keyless (Poly Haven CC0) — no settings/keys.
// Post-turn, idempotent, mirrors images:fulfill; every failure leaves the agent's procedural sky (never a broken page).
ipcMain.handle('hdri:fulfill', async (event, cwd) => {
  const dir = confineCwd(cwd); if (!dir) return { ok: false, error: 'no project open' };
  let results = [];
  try { results = await assetsource.fulfillHDRIs(dir, { domain: imagesource.siteDomain(dir) }); }
  catch (e) { return { ok: false, error: (e && e.message) || 'hdri fulfill failed' }; }
  if (results.some((r) => r.ok) && !event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
  try { if (results.length && fs.existsSync(flowlog.logPath(dir))) flowlog.section(dir, '◍ HDRI (Poly Haven CC0)', 'filled ' + results.filter((r) => r.ok).length + '/' + results.length + '\n' + results.map((r) => (r.ok ? '- ' + r.rel + ' ← ' + r.slug + ' (' + r.res + ') "' + (r.usedQuery || r.subject) + '"' : '✗ ' + (r.subject || '') + ' — ' + r.reason)).slice(0, 20).join('\n')); } catch {}
  return { ok: true, filled: results.filter((r) => r.ok).length, total: results.length, results };
});
// PALETTE BOARD — (re)generate palette.html from a project's styles.css :root tokens (host-side, deterministic). Auto-runs
// after a build (chat:send); also exposed so a renderer control / smoke can trigger it. cwd optional (defaults to open project).
ipcMain.handle('palette:generate', (event, cwd) => {
  const dir = confineCwd(cwd); if (!dir) return { ok: false, reason: 'no project open' };
  let r; try { r = palette.generatePalette(dir); } catch (e) { r = { ok: false, reason: (e && e.message) || 'error' }; }
  if (r && r.ok && r.wrote && !event.sender.isDestroyed()) { event.sender.send('project:reload'); event.sender.send('project:tree', project.tree()); }
  return r;
});

// loop-mode CRITIC (seam B): judge the last-saved rendered frame (.dezign-verify.png) against the visual-quality
// rubric in a FRESH, tool-less, isolated query (agent.cjs runCritic). The renderer saves the frame via
// verify:saveFrame first, then calls this. Reads the rubric (repo) + the project's DESIGN.md/DECISIONS.md as text
// context (the critic has no file tools). Returns the raw verdict text for the renderer to parse.
// STUDIO Inc 4: read-only Reviewer pass over the built site (for the loop's final QA in Studio mode). Returns { ok, text }.
ipcMain.handle('reviewer:run', async (_e, context) => {
  const dir = project.getDir(); if (!dir) return { ok: false, error: 'no project open' };
  try { const r = await runReviewer({ cwd: dir, model: claudeOnlyModel(readSettings().model), libraryContext: reviewerGrounding(), context: context || '' }); return { ok: true, text: r.text || '', usage: r.usage || null }; }
  catch (e) { return { ok: false, error: (e && (e.message || String(e))) || 'reviewer failed' }; }
});
// THE JUDGE ROUTER (Stage 5 · 17a, extracted 2026-07-03 for the flow Reviewer): one seam, three engines —
// bridge:grok (subscription CLI, frames as ACP resource_link) · provider-prefixed criticModel (OpenAI-compatible
// BYOK: Claude builds, another vendor judges) · default = SDK runCritic. Same system card + frames whoever judges.
async function judgeWith({ cwd, system, userText, imageRels, signal }) {
  const _s = readSettings();
  const _ref = providers.parseModelRef(_s.criticModel || '');
  const _jbr = /^bridge:/.test(_s.criticModel || '') ? (bridges.parseBridgeRef(_s.criticModel) || { cli: '', model: '' }) : null; // CLI judge (grok · codex · copilot · mimo), optional @model
  let r;
  if (_jbr && _jbr.cli === 'grok') {
    r = await bridges.judgeGrok({ cwd, system, userText: userText + '\n\nJudge the linked frames now. Output the JSON verdict first, no preamble.', imagePaths: imageRels.map((rel) => path.join(cwd, rel)), model: _jbr.model });
    if (!r.ok) return { ok: false, error: r.error || 'grok judge failed' };
  } else if (_jbr && ['codex', 'copilot', 'mimo'].includes(_jbr.cli)) {
    r = await bridges.judgeCli(_jbr.cli, { cwd, system, userText, imagePaths: imageRels.map((rel) => path.join(cwd, rel)), model: _jbr.model }); // codex -i · copilot --attachment · mimo -f (all SEE the frames, live-verified)
    if (!r.ok) return { ok: false, error: r.error || (_jbr.cli + ' judge failed') };
  } else if (_ref) {
    const key = _s[providers.TABLE[_ref.provider].keyName];
    if (!key) return { ok: false, error: 'Judge model needs a ' + providers.TABLE[_ref.provider].label + ' key (Settings → AI providers)' };
    r = await providers.chatComplete({ provider: _ref.provider, model: _ref.model, key, system, userText: userText + '\n\nJudge the ATTACHED screenshot(s) now. Output the JSON verdict first, no preamble.', imagePaths: imageRels.map((rel) => path.join(cwd, rel)), maxTokens: 16000, totalTimeoutMs: 240000, signal }); // AUDIT: total deadline (no idle-false-fire / infinite hang) + headroom so a reasoning judge doesn't exhaust the budget + Stop aborts it
  } else {
    r = await runCritic({ cwd, images: imageRels, context: userText, model: _s.criticModel || claudeOnlyModel(_s.model), systemOverride: system === getCriticCard() ? undefined : system }); // F2: criticModel here is Claude-or-empty (bridge/provider judges routed above); only the _s.model fallback needs sanitizing
  }
  return { ok: true, text: r.text, usage: r.usage || null, stopped: !!r.stopped, judge: _jbr ? (_jbr.cli + ' (subscription)' + (_jbr.model ? ' · ' + _jbr.model : '')) : (_ref ? (_ref.provider + ':' + _ref.model) : 'claude') };
}
ipcMain.handle('critic:judge', async (_e, goal, frames, measures, ctx) => {
  try {
    const dir = project.getDir();
    if (!dir) return { ok: false, error: 'no project open' };
    const readIf = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } };
    const rubric = readIf(path.join(appPaths.libDir(), 'standards', 'visual-quality-rubric.md'));
    const designMd = readIf(path.join(dir, 'DESIGN.md'));
    const decisions = readIf(path.join(dir, 'DECISIONS.md'));
    // resolve which device-width frames the renderer actually saved this turn (so a stale prior-turn frame is never reused)
    const want = (Array.isArray(frames) && frames.length) ? frames : [{ rel: '.dezign-verify.png', label: 'DESKTOP 1280px' }];
    const have = want.filter((f) => { try { return f && f.rel && fs.existsSync(path.join(dir, f.rel)); } catch { return false; } });
    const images = have.map((f) => f.rel);
    const haveNarrow = have.some((f) => /tablet|phone/.test(f.rel));
    const haveMotion = have.some((f) => /motion/.test(f.rel));
    const parts = [];
    parts.push('GOAL (the brief this site must satisfy):\n' + (goal ? String(goal) : '(no explicit goal given — judge general craft + FIT to DESIGN.md)'));
    parts.push('ATTACHED FRAMES, in order: ' + (have.map((f) => f.label).join(' · ') || 'DESKTOP') + '.\nJudge most dimensions from the DESKTOP frame. Judge `responsive` ONLY from the TABLET/PHONE frame(s): look for overflow, clipped/cut-off text, horizontal scroll, and tap targets < 44px. ' + (haveNarrow ? '' : 'NO tablet/phone frame is attached this turn, so you CANNOT verify `responsive` — it is a hard-fail, so score it 0.') + (haveMotion ? ' Frames labelled MOTION N/3 are a TIME STRIP (unfrozen, ~0.5s apart) — judge `motion_polish` from how they PROGRESS across the strip (intentional & settled vs janky / half-rendered / nothing moving); a single still cannot show motion.' : ''));
    if (Array.isArray(measures) && measures.length) parts.push('MEASURED responsive facts (GROUND TRUTH — your `responsive` reason MUST cite these numbers and must not contradict them; overflow > 2px or a tap target < 44px is a fail): ' + measures.map((m) => m.label + ' → ' + (m.overflow | 0) + 'px horizontal overflow, smallest tap target ' + (m.minTap | 0) + 'px' + (m.tapEl ? ' (' + m.tapEl + ')' : '')).join(' · '));
    // #4 critic MEMORY (anti-flip-flop): hand the critic its own prior verdict so it judges whether THOSE issues are fixed, not invent contradictory new demands each round.
    if (ctx && Array.isArray(ctx.prior) && ctx.prior.length) parts.push("YOUR PRIOR ROUND'S blocking_issues (you said these LAST turn — judge whether THESE specific issues are now FIXED in the attached frames; do NOT contradict your own prior guidance or demand the OPPOSITE of last round; if you catch yourself flip-flopping vs last round, say so in \"notes\" and PASS the now-addressed point rather than re-opening it):\n" + ctx.prior.map((b) => '- ' + b).join('\n'));
    // #3 critic can't see HOVER (static frames): don't penalize the invisible hover effect.
    if (ctx && ctx.hover) parts.push('INTERACTION NOTE: this goal is a HOVER / interaction effect. The attached frames are STATIC (no cursor was moved), so you physically CANNOT see the hover state. Do NOT mark matches_brief / motion_polish / ambition as failed merely because the hover effect is invisible in a still — judge the DEFAULT (resting) state quality and assume the hover works unless the default state itself is broken.');
    // MOTION MANIFEST: programmatic ground truth on what's animating → motion perception + don't false-flag a mid-transition capture frame (the will-change composite artifact) as a defect.
    if (ctx && ctx.motion) { const mo = ctx.motion; parts.push('MOTION MANIFEST (what is ACTUALLY animating right now, from document.getAnimations + GSAP): ' + (mo.total | 0) + ' active animation(s), ' + (mo.looping | 0) + ' looping, ' + (mo.opacityAnim | 0) + ' animating OPACITY, ' + (mo.running | 0) + ' running' + (mo.gsap ? ', GSAP active (' + (mo.gsapTweens | 0) + ' tweens)' : '') + '.' + (mo.sample && mo.sample.length ? ' Sample: ' + mo.sample.map((s) => s.el + '/' + s.name + (s.loop ? '(loop)' : '') + ' ' + s.state).join(', ') + '.' : '') + ' CRITICAL: a captured frame catching an element MID-transition (opacity between 0 and 1, or a transform partway) is EXPECTED motion, NOT a defect — do NOT fail motion_polish / finish_no_slop just because one still shows an element faded or mid-move. Judge motion from how the MOTION strip PROGRESSES across frames + this manifest. Flag motion ONLY if an element is STUCK at a clearly-unfinished state across ALL frames, the strip shows NO change when motion was intended, or motion is janky / half-rendered.'); }
    if (designMd) parts.push("SITE DESIGN.md (the site's OWN declared direction — score FIT against THIS, not a generic preference):\n" + designMd);
    if (decisions) parts.push('SETTLED / OVERRIDDEN owner decisions (DECISIONS.md) — OUT OF SCOPE; a negative finding here goes in "warnings", NEVER "blocking_issues":\n' + decisions);
    if (rubric) parts.push('FULL RUBRIC (grounding reference for your dimension reasons):\n' + rubric);
    const jr = await judgeWith({ cwd: dir, system: getCriticCard(), userText: parts.join('\n\n'), imageRels: images.length ? images : ['.dezign-verify.png'] });
    if (!jr.ok) return jr;
    return { ok: true, text: jr.text, usage: jr.usage || null, stopped: !!jr.stopped, haveNarrow, judge: jr.judge };
  } catch (e) {
    return { ok: false, error: (e && (e.message || String(e))) || 'critic failed' };
  }
});

// import an asset (image / svg) into the open project's assets/ folder, return its relative path.
// the file copy happens here (binary-safe); the agent then wires the new path into the markup.
ipcMain.handle('asset:import', async (_e, kind) => {
  const dir = project.getDir();
  if (!dir) return null;
  const filters = kind === 'svg'
    ? [{ name: 'SVG', extensions: ['svg'] }]
    : [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'svg'] }];
  const r = await dialog.showOpenDialog({ properties: ['openFile'], filters, title: 'Choose a file to import' });
  if (r.canceled || !r.filePaths[0]) return null;
  const srcPath = r.filePaths[0];
  const assetsDir = path.join(dir, 'assets');
  try { fs.mkdirSync(assetsDir, { recursive: true }); } catch {}
  const ext = path.extname(srcPath);
  const stem = path.basename(srcPath, ext);
  let base = stem + ext;
  let target = path.join(assetsDir, base);
  for (let i = 1; fs.existsSync(target); i++) { base = `${stem}-${i}${ext}`; target = path.join(assetsDir, base); }
  try { fs.copyFileSync(srcPath, target); } catch (e) { return { error: String(e && e.message || e) }; }
  return { rel: 'assets/' + base, name: base };
});

// kind of a file by extension, for chat-attachment chips + telling the agent what it is
function assetKind(ext) {
  ext = String(ext || '').toLowerCase().replace(/^\./, '');
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'svg', 'bmp', 'ico'].includes(ext)) return 'image';
  if (['mp4', 'webm', 'mov', 'm4v', 'ogv'].includes(ext)) return 'video';
  if (['mp3', 'wav', 'ogg', 'm4a', 'flac', 'aac'].includes(ext)) return 'audio';
  if (['woff', 'woff2', 'ttf', 'otf'].includes(ext)) return 'font';
  return 'file';
}
function copyIntoAssets(dir, src) { // binary-safe copy into <project>/assets/, unique name
  const assetsDir = path.join(dir, 'assets');
  try { fs.mkdirSync(assetsDir, { recursive: true }); } catch {}
  const ext = path.extname(src), stem = path.basename(src, ext) || 'file';
  let base = stem + ext, target = path.join(assetsDir, base);
  for (let i = 1; fs.existsSync(target); i++) { base = `${stem}-${i}${ext}`; target = path.join(assetsDir, base); }
  fs.copyFileSync(src, target);
  return { rel: 'assets/' + base, name: base, kind: assetKind(ext) };
}
// attach files to the chat: copy any files (from a drop = paths, or a dialog) into the project's assets/.
// returns [{ rel, name, kind }] — these become part of the project; the agent can insert/use them by path.
ipcMain.handle('assets:import', async (_e, paths) => {
  const dir = project.getDir();
  if (!dir) return [];
  let files = Array.isArray(paths) && paths.length ? paths : null;
  if (!files) {
    const r = await dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'], title: 'Attach files to the chat' });
    if (r.canceled || !r.filePaths.length) return [];
    files = r.filePaths;
  }
  const out = [];
  for (const f of files) { try { if (f) out.push(copyIntoAssets(dir, f)); } catch (e) { /* skip unreadable */ } }
  return out;
});
// drag-drop attach: the renderer reads the dropped files to base64 (no OS path needed). items=[{name,data}].
ipcMain.handle('assets:importData', async (_e, items) => {
  const dir = project.getDir();
  if (!dir) return [];
  const assetsDir = path.join(dir, 'assets');
  try { fs.mkdirSync(assetsDir, { recursive: true }); } catch {}
  const out = [];
  for (const it of (items || [])) {
    try {
      const ext = path.extname(it.name || ''), stem = path.basename(it.name || 'file', ext) || 'file';
      let base = stem + ext, target = path.join(assetsDir, base);
      for (let i = 1; fs.existsSync(target); i++) { base = `${stem}-${i}${ext}`; target = path.join(assetsDir, base); }
      fs.writeFileSync(target, Buffer.from(String(it.data || ''), 'base64'));
      out.push({ rel: 'assets/' + base, name: base, kind: assetKind(ext) });
    } catch (e) { /* skip */ }
  }
  return out;
});

// HARVEST (step 8): download enumerated EXTERNAL asset URLs into <project>/assets/ from the MAIN process (Node fetch = no CORS).
// items = [{ url, kind, name, inline }] — `inline` = SVG markup written directly (no fetch). Per-asset failures never abort the batch.
const HARVEST_CAP = { count: 40, perFileMB: 25, videoMB: 40, totalMB: 150 };
// S2 (audit 2026-07-09): host-level SSRF filter for harvest downloads (hostname heuristics; DNS-rebinding is out of
// scope for a local single-user tool — the goal is stopping loopback/LAN pulls a hostile page could request).
const { harvestUrlOk } = require('./nethost.cjs'); // AUDIT-2 F39: SSRF host filter extracted to a pure, unit-testable module (IPv4-mapped IPv6 + numeric-IPv4 encodings)
ipcMain.handle('harvest:download', async (_e, items) => {
  const dir = project.getDir();
  if (!dir) return { ok: false, error: 'no project open', results: [] };
  const assetsDir = path.join(dir, 'assets');
  try { fs.mkdirSync(assetsDir, { recursive: true }); } catch {}
  const writeBuf = (buf, name) => { const ext = path.extname(name) || '.bin', stem = path.basename(name, ext) || 'asset'; let base = stem + ext, target = path.join(assetsDir, base); for (let i = 1; fs.existsSync(target); i++) { base = `${stem}-${i}${ext}`; target = path.join(assetsDir, base); } fs.writeFileSync(target, buf); return { ok: true, rel: 'assets/' + base, name: base, kind: assetKind(ext) }; };
  const nameFromUrl = (u, ct, hint) => { try { let nm = decodeURIComponent((new URL(u).pathname.split('/').pop() || '')).split('?')[0].replace(/[^\w.\-]+/g, '-').slice(0, 60); if (!path.extname(nm)) { let e = '.bin'; const im = ct && ct.match(/image\/([\w+]+)/), vm = ct && ct.match(/video\/(\w+)/); if (im) e = '.' + im[1].replace('jpeg', 'jpg').replace('svg+xml', 'svg'); else if (vm) e = '.' + vm[1]; nm = (nm || hint || 'asset') + e; } return nm || ((hint || 'asset') + '.bin'); } catch { return (hint || 'asset') + '.bin'; } };
  const results = []; let total = 0, n = 0;
  for (const it of (items || [])) {
    try {
      if (n >= HARVEST_CAP.count) { results.push({ url: it.url, ok: false, skipped: 'count cap' }); continue; }
      if (it.inline) { results.push(writeBuf(Buffer.from(String(it.inline), 'utf8'), (it.name || 'graphic') + '.svg')); n++; continue; }
      if (!it.url || /^data:/.test(it.url)) { results.push({ url: it.url, ok: false, skipped: 'inline data: URL' }); continue; }
      // S2 (audit 2026-07-09): SSRF guard — the URL comes from the renderer / an external page. Only public http(s);
      // loopback / RFC1918 / link-local / .local hosts rejected, and RE-CHECKED on every redirect hop (manual follow).
      if (!harvestUrlOk(it.url)) { results.push({ url: it.url, ok: false, skipped: 'blocked URL (non-http or private/loopback host)' }); continue; }
      let origin = ''; try { origin = new URL(it.url).origin; } catch {}
      const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 20000);
      let res, blockedHop = false;
      try {
        let cur = it.url;
        for (let hop = 0; hop <= 4; hop++) {
          res = await fetch(cur, { signal: ctrl.signal, redirect: 'manual', headers: { Referer: origin + '/', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' } });
          if (res.status >= 300 && res.status < 400) {
            const loc = res.headers.get('location'); if (!loc) break;
            cur = new URL(loc, cur).href;
            if (!harvestUrlOk(cur)) { blockedHop = true; break; }
            continue;
          }
          break;
        }
      } finally { clearTimeout(t); }
      if (blockedHop) { results.push({ url: it.url, ok: false, skipped: 'redirects to a blocked (private/loopback) host' }); continue; }
      if (!res || !res.ok) { results.push({ url: it.url, ok: false, error: 'HTTP ' + (res ? res.status : '?') }); continue; }
      const capMB = it.kind === 'video' ? HARVEST_CAP.videoMB : HARVEST_CAP.perFileMB;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length / 1e6 > capMB) { results.push({ url: it.url, ok: false, skipped: '>' + capMB + 'MB' }); continue; }
      total += buf.length / 1e6; if (total > HARVEST_CAP.totalMB) { results.push({ url: it.url, ok: false, skipped: 'total size cap' }); break; }
      results.push(writeBuf(buf, nameFromUrl(it.url, res.headers.get('content-type'), it.name))); n++;
    } catch (e) { results.push({ url: it.url, ok: false, error: String((e && e.message) || e) }); }
  }
  return { ok: true, results };
});

ipcMain.handle('project:get', () => ({ dir: project.getDir(), url: project.url(), tree: project.tree() }));
ipcMain.handle('project:reopen', (_e, dir) => {
  try {
    if (dir && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      // NB: do NOT resetSession() here. reopen is used for startup AND project-switching; the renderer's
      // adoptProject re-points the agent to the right conversation (and each send re-asserts it), so a
      // reset here would only race that and risk dropping the conversation context on switch.
      project.setDir(dir);
      return { dir: project.getDir(), url: project.url(), tree: project.tree() };
    }
  } catch {}
  return null;
});

// create a NEW site: name a folder (defaults under baseline/sites/), scaffold a blank canvas, open it
ipcMain.handle('project:new', async () => {
  try { fs.mkdirSync(appPaths.sitesDir(), { recursive: true }); } catch {}
  const r = await dialog.showSaveDialog({
    title: 'New site — name its folder',
    defaultPath: path.join(appPaths.sitesDir(), 'new-site'),
    buttonLabel: 'Create site',
    properties: ['createDirectory'],
  });
  if (r.canceled || !r.filePath) return null;
  const dir = r.filePath;
  const sc = starter.scaffoldNewSite(dir); // AUDIT-2 F44d: shared scaffold (same code the test:newSite probe exercises)
  if (sc && sc.error) return { error: sc.error };
  project.setDir(dir);
  resetSession(); // fresh project => fresh conversation context
  return { dir: project.getDir(), url: project.url(), tree: project.tree() };
});

ipcMain.handle('project:open', async () => {
  const r = await dialog.showOpenDialog({ properties: ['openDirectory'], title: 'Open a site project folder' });
  if (r.canceled || !r.filePaths[0]) return null;
  project.setDir(r.filePaths[0]);
  resetSession(); // new project => fresh conversation context
  return { dir: project.getDir(), url: project.url(), tree: project.tree() };
});

// export the active page to a file: PNG (capturePage data-URL) or PDF (printToPDF bytes) -> save dialog. No agent, instant.
ipcMain.handle('export:save', async (_e, kind, data, name) => {
  try {
    const ext = kind === 'pdf' ? 'pdf' : (kind === 'jpg' || kind === 'jpeg') ? 'jpg' : kind === 'svg' ? 'svg' : 'png';
    const r = await dialog.showSaveDialog({ title: 'Export ' + ext.toUpperCase(), defaultPath: (name || 'page') + '.' + ext, filters: [{ name: ext.toUpperCase(), extensions: [ext] }] });
    if (r.canceled || !r.filePath) return { ok: false, canceled: true };
    // pdf + jpg arrive as raw bytes (Buffer); svg as a markup string; png/jpeg-dataURL as a base64 data URL
    const buf = (kind === 'pdf' || kind === 'jpg' || kind === 'jpeg') ? Buffer.from(data) : kind === 'svg' ? Buffer.from(String(data), 'utf8') : Buffer.from(String(data).replace(/^data:[^,]+,/, ''), 'base64');
    fs.writeFileSync(r.filePath, buf);
    return { ok: true, path: r.filePath };
  } catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
});

app.whenReady().then(async () => {
  // R3: first packaged run under productName "Loupe" gets a fresh userData (Roaming/Loupe) while the owner's dev
  // profile lives in Roaming/dezign-pro-app — COPY settings + art-direction memory once (copy, never move; dev
  // userData stays untouched). Dev runs skip this entirely.
  if (app.isPackaged) {
    try {
      const cur = app.getPath('userData');
      const old = path.join(path.dirname(cur), 'dezign-pro-app');
      for (const f of ['dezign-settings.json', 'dezign-artdirection.json']) {
        const src = path.join(old, f), dst = path.join(cur, f);
        if (!fs.existsSync(dst) && fs.existsSync(src)) { fs.mkdirSync(cur, { recursive: true }); fs.copyFileSync(src, dst); }
      }
    } catch {}
  }
  // P5: knowledge-layer startup guard — say it loudly ONCE in the terminal; the renderer shows its own chat banner.
  // (global.__libBareWarned = the probe-readable witness that this exact line fired — stdout capture races whenReady.)
  try {
    const lh = libraryHealth();
    if (lh.bare) { global.__libBareWarned = true; console.warn('[library] Design library NOT FOUND at ' + lh.path + ' (INDEX.md: ' + lh.lib + ', references: ' + lh.refs + ') — running in BARE mode: no technique library, no reference corpus, no design standards. Sites will be less grounded.'); }
  } catch {}
  applyPermissionLockdown(); // AUDIT-2 F34: deny sensitive permissions on default + reference-browser sessions (before any load)
  await project.startServer();
  createWindow();
  // Update check (notify-only): the packaged app asks GitHub Releases whether a newer version exists and, if so,
  // tells the RENDERER, which shows an in-app banner (styled like the app) with a button to the download — it never
  // downloads or installs anything silently (the right call for an unsigned build). Best-effort — a failed/offline
  // check never blocks the app. Packaged-only (dev + smoke are not packaged, so this is skipped).
  if (app.isPackaged) {
    try {
      const { autoUpdater } = require('electron-updater');
      autoUpdater.autoDownload = false; // notify only — no silent download/install
      autoUpdater.on('update-available', (info) => {
        for (const w of BrowserWindow.getAllWindows()) {
          if (!w.webContents.isDestroyed()) w.webContents.send('update:available', { version: (info && info.version) || '', current: app.getVersion() });
        }
      });
      autoUpdater.checkForUpdates().catch(() => {});
    } catch {}
  }
  // file changes (e.g. the agent edited a file) -> reload the preview + refresh the tree
  project.watch(() => {
    for (const w of BrowserWindow.getAllWindows()) {
      if (w.webContents.isDestroyed()) continue;
      w.webContents.send('project:reload');
      w.webContents.send('project:tree', project.tree());
    }
  });
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

// never let the preview spawn OS windows (e.g. Shift/Ctrl+click on a link, target=_blank, window.open)
app.on('web-contents-created', (_e, contents) => {
  contents.setWindowOpenHandler(() => ({ action: 'deny' }));
  // Bug2: keep the PREVIEW webview pinned to the project site. A link/redirect the agent baked in (e.g. a Telegram bot
  // URL) otherwise navigates the guest AWAY on click OR re-fires on every post-edit reload — and a webview has no
  // browser "back". Block foreign-origin navigations (will-navigate only fires for PAGE-initiated nav, never our
  // programmatic src/loadURL page switches). The REFERENCE browser (partition persist:dzref) must roam freely, so
  // scope this to the default-session preview webview only.
  try {
    if (contents.getType && contents.getType() === 'webview') {
      let refSession = null; try { refSession = session.fromPartition('persist:dzref'); } catch {}
      if (contents.session !== refSession) {
        const stayOnSite = (ev, navUrl) => {
          try {
            const cur = project.url(); const origin = cur ? new URL(cur).origin : null;
            if (origin && new URL(navUrl).origin !== origin) ev.preventDefault(); // external → block; the preview is a design canvas, not a browser
          } catch {}
        };
        contents.on('will-navigate', stayOnSite);
        contents.on('will-redirect', stayOnSite);
      }
    }
  } catch {}
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// AUDIT-2 F27: on quit, reap EVERY spawned CLI child (bridge/judge/runCmd/login/install/claude probe) so a paid
// worker is never orphaned to keep running after the window closes. Awaits taskkill completion (bounded) — exiting
// before taskkill reaps would orphan the very worker we're killing (taskkill is itself a spawned child). Null-guard
// _flowState (null outside a flow) and a re-entrancy flag (app.exit re-fires quit).
let _quitting = false;
app.on('before-quit', async (e) => {
  if (_quitting) return;
  _quitting = true;
  e.preventDefault();
  try { stop(); } catch {}
  try { if (_provAbort) _provAbort.abort(); } catch {}
  try { if (_flowState && _flowState.acs) for (const ac of _flowState.acs) { try { ac.abort(); } catch {} } } catch {}
  try { await bridges.reapAllAndWait(2500); } catch {}
  app.exit(0);
});
