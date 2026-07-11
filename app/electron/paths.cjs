/* Loupe · paths.cjs — ONE resolver for the app's data directories across dev and packaged runs (R3).
   Dev (repo checkout): everything lives in the repo tree — ../../baseline/library, ../../baseline/sites,
   ./agents — exactly as before; nothing moves for the owner.
   Packaged (installer/zip): the repo tree doesn't exist — the design library ships as an electron-builder
   extraResource (process.resourcesPath/library), new sites default to Documents/Loupe-sites, and agent cards
   are copied on first run into userData/agents so they stay owner-editable (the cards-on-disk contract;
   files inside the asar are read-only).
   A user-set "Design library folder" (settings.libraryDir) overrides the library location in BOTH modes —
   owner-blessed: users can point the app at their OWN harvested library. */
const path = require('path');
const fs = require('fs');
// Under PLAIN NODE (smoke unit probes / test harnesses require these modules directly) `require('electron')`
// resolves to the npm package whose export is a STRING (the electron.exe path) — `app` is then undefined.
// Every consumer below must degrade to the dev repo-tree paths in that case (the pre-R3 behaviour).
let app; try { ({ app } = require('electron')); } catch {}
const isPackaged = () => !!(app && app.isPackaged);

const REPO_LIB = path.join(__dirname, '..', '..', 'baseline', 'library');
const REPO_SITES = path.join(__dirname, '..', '..', 'baseline', 'sites');
const SHIPPED_AGENTS = path.join(__dirname, '..', 'agents'); // dev: the live editable cards; packaged: read-only seed inside the asar

// settings.libraryDir override — read lazily from the same store main.cjs owns (a direct file read avoids a
// circular require); cached until noteSettingsChanged() invalidates it on any settings:set.
let _libOverride; // undefined = not read yet · null = none set · string = validated override
function readLibOverride() {
  try {
    const s = JSON.parse(fs.readFileSync(path.join(app.getPath('userData'), 'dezign-settings.json'), 'utf8'));
    const v = s && typeof s.libraryDir === 'string' ? s.libraryDir.trim() : '';
    return v || null;
  } catch { return null; }
}
function noteSettingsChanged() { _libOverride = undefined; }

function libDir() {
  if (_libOverride === undefined) _libOverride = readLibOverride();
  if (_libOverride) {
    try { if (fs.existsSync(_libOverride)) return _libOverride; } catch {}
    // set but missing → fall through to the built-in copy; app:health surfaces the state
  }
  return isPackaged() ? path.join(process.resourcesPath, 'library') : REPO_LIB;
}

function sitesDir() {
  return isPackaged() ? path.join(app.getPath('documents'), 'Loupe-sites') : REPO_SITES;
}

function agentsDir() {
  return isPackaged() ? path.join(app.getPath('userData'), 'agents') : SHIPPED_AGENTS;
}

// ── AUDIT-2 F1b/F8 — ONE Claude Code CLI resolver, shared by the SDK BUILD path (agent.cjs sdkExec →
// pathToClaudeCodeExecutable) AND the AUTH path (main.cjs claude:probe/login), so the two can never diverge on which
// binary they drive (the F8 root: it was resolved once in agent.cjs and re-derived nowhere). NO boolean arg (critic:
// `packaged` is the wrong discriminator) — try each source in order, first that exists wins, null when none found.
// Post-AUDIT-2 Loupe does NOT redistribute the proprietary 215 MB claude.exe (Decision #1): a packaged install has no
// bundled sidecar, so on a stranger's machine this resolves the USER-installed Claude Code (PATH / npm-global / native
// installer). Dev keeps the node_modules sidecar → identical binary + auth as before, zero behaviour change for the owner.

// Pure, side-effect-free bundled-path branch — extracted so the smoke can unit-test it with a fabricated resourcesPath
// layout (the frozen-IIFE const it replaced was not re-invokable). Returns the unpacked sidecar path if it exists, else null.
function resolvePackagedClaudeExe(resourcesPath, platform, arch) {
  try {
    if (!resourcesPath) return null;
    const pkg = 'claude-agent-sdk-' + platform + '-' + arch;
    const bin = platform === 'win32' ? 'claude.exe' : 'claude';
    const p = path.join(resourcesPath, 'app.asar.unpacked', 'node_modules', '@anthropic-ai', pkg, bin);
    return fs.existsSync(p) ? p : null;
  } catch { return null; }
}

let _claudeExeCache; // undefined = not resolved; string = found (cached); a null result is NOT cached so a mid-session install is picked up
function resolveClaudeExe(force) {
  if (!force && typeof _claudeExeCache === 'string') { try { if (fs.existsSync(_claudeExeCache)) return _claudeExeCache; } catch {} _claudeExeCache = undefined; }
  const isWin = process.platform === 'win32';
  const bin = isWin ? 'claude.exe' : 'claude';
  const ok = (p) => { try { return p && fs.existsSync(p) ? p : null; } catch { return null; } };
  const cp = require('child_process');
  let found = null;
  // 1) a bundled asar-unpacked sidecar (absent by default post-AUDIT-2; kept first for a future permitted bundle)
  found = resolvePackagedClaudeExe(process.resourcesPath, process.platform, process.arch);
  // 2) the app's own node_modules sidecar (dev: the SDK's optional platform package — same binary + auth as today)
  if (!found) { const pkg = 'claude-agent-sdk-' + process.platform + '-' + process.arch; found = ok(path.join(__dirname, '..', 'node_modules', '@anthropic-ai', pkg, bin)); }
  // 3) a user-installed CLI on PATH (npm -g @anthropic-ai/claude-code puts `claude` here)
  if (!found) { try { const r = cp.spawnSync(isWin ? 'where' : 'which', ['claude'], { encoding: 'utf8', windowsHide: true, timeout: 6000 }); if (r.status === 0 && r.stdout) { const first = String(r.stdout).split(/\r?\n/).map((s) => s.trim()).filter(Boolean)[0]; found = ok(first); } } catch {} }
  // 4) the npm global prefix (install location when `claude` isn't on PATH)
  if (!found) { try { const r = cp.spawnSync(isWin ? 'npm.cmd' : 'npm', ['prefix', '-g'], { encoding: 'utf8', windowsHide: true, timeout: 8000 }); if (r.status === 0 && r.stdout) { const prefix = String(r.stdout).trim(); for (const c of (isWin ? [path.join(prefix, bin), path.join(prefix, 'claude.cmd')] : [path.join(prefix, 'bin', 'claude')])) { found = found || ok(c); } } } catch {} }
  // 5) well-known native-installer dirs
  if (!found) { try { const home = require('os').homedir(); const cands = isWin ? [path.join(home, '.claude', 'local', bin), path.join(process.env.LOCALAPPDATA || path.join(home, 'AppData', 'Local'), 'Programs', 'claude', bin)] : [path.join(home, '.claude', 'local', 'claude'), '/usr/local/bin/claude', path.join(home, '.local', 'bin', 'claude')]; for (const c of cands) found = found || ok(c); } catch {} }
  if (found) _claudeExeCache = found; // cache positives only
  return found;
}

module.exports = { libDir, sitesDir, agentsDir, noteSettingsChanged, SHIPPED_AGENTS, resolveClaudeExe, resolvePackagedClaudeExe };
