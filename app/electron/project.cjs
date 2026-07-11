/* deZign-pro · project — the open site folder: static-serve it, list its file tree,
   and watch it for changes (so the preview reloads after the agent edits). */
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('node:crypto');

let projectDir = null; // empty by default — no project until the user picks New or Open…
let server = null, port = 0, watcher = null, onChange = null, debounce = null;

// shown in the preview when no project is open (matches the app's dark chrome)
const EMPTY_PAGE = `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{height:100%;margin:0}
body{display:flex;align-items:center;justify-content:center;background:#0d0f14;color:#5b6172;font:14px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
.empty{text-align:center;padding:24px}
.empty h2{margin:0 0 8px;color:#9aa1b4;font-size:15px;font-weight:600;letter-spacing:.01em}
.empty span{color:#cfd4e0}
</style></head><body><div class="empty"><h2>No project open</h2>Use <span>New</span> to scaffold a site, or <span>Open…</span> a folder.</div></body></html>`;

// V3 (audit 2026-07-09): an OPENED folder with no index.html used to render a bare "404" filling the canvas — a
// stranger's plausible first action ("Open…" an empty folder) read as "the app is broken". A missing PAGE now gets
// the same friendly treatment as the no-project state; missing assets (css/js/img) keep the plain 404.
const NO_PAGES_PAGE = `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{height:100%;margin:0}
body{display:flex;align-items:center;justify-content:center;background:#0d0f14;color:#5b6172;font:14px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
.empty{text-align:center;padding:24px}
.empty h2{margin:0 0 8px;color:#9aa1b4;font-size:15px;font-weight:600;letter-spacing:.01em}
.empty span{color:#cfd4e0}
</style></head><body><div class="empty"><h2>No pages yet</h2>Describe the site you want <span>in the chat</span> and it will be built right here.</div></body></html>`;

const EDITS_CSS = 'dezign-edits.css';   // app-managed manual-edits layer (generated; AI-free)
const EDITS_JSON = '.dezign-edits.json'; // its source of truth (selector -> {prop: value})

// AI edit history: snapshot the project's TEXT source before each agent turn so the user can undo it.
const HISTORY_DIR = '.dezign-history';
const SNAP_EXT = new Set(['.html', '.htm', '.css', '.js', '.mjs', '.json', '.svg', '.md', '.txt', '.xml']);
const SNAP_SKIP_DIRS = new Set(['node_modules', '.git', '.vite', 'dist', 'dist-renderer', HISTORY_DIR]);
let _seq = 0;                 // global monotonic snapshot counter (dirs are per-project, so no collisions)
const histories = {};         // projectDir -> { undo: [seq], redo: [seq] } — per-project so switching keeps it
const MAX_HISTORY = 30;
// IMAGE VERSIONING (2026-07-07): AI-undo also reverts binary images. Content-addressed dedup so identical images aren't
// recopied each turn — each unique image is stored ONCE in .dezign-history/_blobs/<sha1>; a per-seq manifest
// (.dezign-history/_manifests/<seq>.json) maps rel-path -> hash. Manifests/blobs live OUTSIDE the numbered snapshot dirs
// (loadHistory ignores non-numeric names; listAll/restoreSnapshot never see them).
const ASSET_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.ico', '.bmp']);
const BLOBS_DIR = '_blobs';
const MANIFESTS_DIR = '_manifests';

const IGNORE = new Set(['node_modules', '.git', '.vite', 'dist', 'dist-renderer', '.DS_Store', EDITS_CSS]);
const MIME = { '.html': 'text/html', '.htm': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.glb': 'model/gltf-binary', '.mp4': 'video/mp4' };

function startServer() {
  return new Promise((resolve) => {
    server = http.createServer((req, res) => {
      try {
        if (!projectDir) { res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }); return res.end(EMPTY_PAGE); }
        let rel = decodeURIComponent(req.url.split('?')[0]);
        if (rel.endsWith('/')) rel += 'index.html';
        const fp = path.join(projectDir, rel);
        // S1 (audit 2026-07-09): a bare startsWith let a SIBLING folder sharing the name-prefix be served
        // (mysite → mysite-secret via an encoded traversal). Exact-dir OR dir+separator, like safeResolve.
        if (!(fp === projectDir || fp.startsWith(projectDir + path.sep))) { res.writeHead(403); return res.end('403'); } // no escaping the project
        const ext = path.extname(fp).toLowerCase();
        // the managed manual-edits layer: always serve it (empty if not written yet)
        if (path.basename(fp) === EDITS_CSS && !fs.existsSync(fp)) {
          res.writeHead(200, { 'Content-Type': 'text/css', 'Cache-Control': 'no-store' });
          return res.end('');
        }
        const data = fs.readFileSync(fp);
        if (ext === '.html' || ext === '.htm') {
          // auto-wire the manual-edits stylesheet so direct (AI-free) edits show up
          let html = data.toString('utf8');
          if (!html.includes('/' + EDITS_CSS)) {
            const link = '<link rel="stylesheet" href="/' + EDITS_CSS + '">';
            html = html.includes('</head>') ? html.replace('</head>', link + '</head>') : link + html;
          }
          res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' });
          return res.end(html);
        }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        res.end(data);
      } catch {
        // V3: a missing HTML page (or the bare "/" of an empty project) gets the friendly empty-state, not a raw 404
        let p = String(req.url || '').split('?')[0]; try { p = decodeURIComponent(p); } catch {}
        if (/\.html?$/i.test(p) || p.endsWith('/')) { res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }); return res.end(NO_PAGES_PAGE); }
        res.writeHead(404); res.end('404');
      }
    });
    server.listen(0, '127.0.0.1', () => { port = server.address().port; resolve(port); });
  });
}

function url() { return `http://127.0.0.1:${port}/`; }
function getDir() { return projectDir; }

function tree(dir = projectDir, rel = '') {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
  return entries
    .filter((e) => !IGNORE.has(e.name) && !e.name.startsWith('.'))
    .sort((a, b) => (a.isDirectory() === b.isDirectory() ? a.name.localeCompare(b.name) : a.isDirectory() ? -1 : 1))
    .map((e) => {
      const r = rel ? rel + '/' + e.name : e.name;
      return e.isDirectory()
        ? { name: e.name, path: r, type: 'dir', children: tree(path.join(dir, e.name), r) }
        : { name: e.name, path: r, type: 'file' };
    });
}

function watch(cb) {
  onChange = cb;
  if (watcher) { try { watcher.close(); } catch {} watcher = null; }
  if (!projectDir) return; // nothing to watch until a project is opened
  try {
    const w = fs.watch(projectDir, { recursive: true }, (_evt, filename) => {
      // our own edits-layer writes already trigger an explicit reload via the IPC handler;
      // don't let the watcher fire a SECOND reload ~180ms later — that races the first load's
      // picker injection (executeJavaScript on a frame mid-navigation rejects).
      if (filename) {
        const parts = String(filename).split(/[\\/]/);
        if (parts[0] === HISTORY_DIR) return; // our own snapshot writes — don't reload
        const base = parts[parts.length - 1];
        if (base === EDITS_CSS || base === EDITS_JSON) return;
      }
      clearTimeout(debounce);
      debounce = setTimeout(() => { if (onChange) onChange(); }, 180);
    });
    // CRITICAL (R2): fs.watch emits async 'error' events (e.g. EPERM when the watched dir is
    // deleted/renamed, or under OneDrive-synced Documents). Without an 'error' LISTENER, Node
    // re-throws it as an uncaughtException → the whole Electron main process dies with a fatal
    // dialog. This listener keeps the failure LOCAL: log it and drop the dead watcher (a manual
    // reload / the next setDir re-attaches). The surrounding try/catch only guards the sync call.
    w.on('error', (err) => {
      try { console.error('[project.watch] watcher error (non-fatal):', err && err.code || err); } catch {}
      try { w.close(); } catch {}
      if (watcher === w) watcher = null;
    });
    watcher = w;
  } catch (e) { /* recursive watch unsupported — ignore; manual refresh still works */ }
}

function loadHistory(dir) {
  // Rebuild the undo stack from snapshots ALREADY on disk, so AI-undo survives reopen AND app restart
  // (the snapshots live in the project's own .dezign-history/). Each numbered dir is a "before a turn"
  // state; ascending order = the undo timeline. Redo doesn't persist across sessions (starts empty).
  const hdir = path.join(dir, HISTORY_DIR);
  let seqs = [];
  try {
    seqs = fs.readdirSync(hdir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && /^\d+$/.test(e.name))
      .map((e) => parseInt(e.name, 10)).sort((a, b) => a - b);
  } catch {}
  if (seqs.length) _seq = Math.max(_seq, seqs[seqs.length - 1]); // keep the global counter ahead of reused ids
  while (seqs.length > MAX_HISTORY) { const old = seqs.shift(); try { fs.rmSync(path.join(hdir, String(old)), { recursive: true, force: true }); } catch {} try { fs.unlinkSync(path.join(hdir, MANIFESTS_DIR, String(old) + '.json')); } catch {} }
  return { undo: seqs, redo: [] };
}
function setDir(dir) {
  projectDir = dir;
  // First time this dir is opened this session: rebuild its undo history from on-disk snapshots (durable),
  // not wipe it. Switching BACK to an already-open project keeps the in-session undo/redo stack.
  if (dir && !histories[dir]) histories[dir] = loadHistory(dir);
  watch(onChange); // re-attach watcher to the new dir
}

// ── manual-edits layer (AI-free) ───────────────────────────────────────────
// Source of truth = .dezign-edits.json { "<selector>": { "<prop>": "<value>" } }.
// We regenerate dezign-edits.css from it; the served HTML auto-links that file.
function getEdits() {
  try { return JSON.parse(fs.readFileSync(path.join(projectDir, EDITS_JSON), 'utf8')) || {}; } catch { return {}; }
}
// REPLACE the whole layer with `map` (selector -> {prop: value}). The host owns merge + undo/redo.
function applyEdits(map) {
  if (!map || typeof map !== 'object') return { ok: false, error: 'bad map' };
  const css = Object.entries(map)
    .map(([sel, props]) => {
      // keys starting with '$' are non-CSS metadata (e.g. $text = inline text override) — skip in the CSS
      const cssProps = Object.entries(props || {}).filter(([k]) => k[0] !== '$');
      if (!cssProps.length) return '';
      return `${sel} {\n${cssProps.map(([k, v]) => `  ${k}: ${v} !important;`).join('\n')}\n}`;
    })
    .filter(Boolean)
    .join('\n\n');
  try {
    fs.writeFileSync(path.join(projectDir, EDITS_JSON), JSON.stringify(map, null, 2));
    fs.writeFileSync(path.join(projectDir, EDITS_CSS),
      '/* deZign-pro — manual edits layer (generated, AI-free). Ask the AI to "bake into source" to fold these into clean rules. */\n\n' + css + '\n');
  } catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
  return { ok: true };
}

// Write the verification frame (base64 PNG) to a HIDDEN file the agent can Read — so the verify re-feed can SHOW the
// agent the actual rendered preview (which includes overlay + runtime JS it cannot see in source). One reused file.
function saveVerifyFrame(b64, name) {
  // loop-mode also saves device-width frames (.dezign-verify-tablet.png / -phone.png); validate the name to a fixed safe set (no path traversal)
  // AUDIT-2 F11: admit the multi-ref slot (-ref-N, N one-or-more digits so >10 refs don't fall off a cliff) and FAIL
  // CLOSED on any other name — the old code SILENTLY rewrote a non-whitelisted name to '.dezign-verify.png', so every
  // multi-reference Adapt crop collided on ONE file (all refs became copies of the last) AND clobbered the verify frame.
  const okName = typeof name === 'string' && /^\.dezign-verify(-tablet|-phone|-motion-[0-9]|-q[0-9]|-ref-[0-9]+)?\.png$/.test(name);
  if (!okName) return { ok: false, error: 'frame name rejected: ' + String(name) };
  const rel = name;
  try { fs.writeFileSync(path.join(projectDir, rel), Buffer.from(String(b64 || ''), 'base64')); return { ok: true, rel }; }
  catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
}

// loop-mode run-log persistence: a single state file + an append-only markdown log + per-iteration desktop frames,
// so the owner can audit WHY a run went as it did. Everything lives under the project so it travels with the site.
function loopPersist(p) {
  try {
    p = p || {};
    const dir = path.join(projectDir, '.dezign-loop');
    try { fs.mkdirSync(dir, { recursive: true }); } catch {}
    if (p.state != null) { try { fs.writeFileSync(path.join(projectDir, '.dezign-loop.json'), JSON.stringify(p.state, null, 2)); } catch {} }
    if (typeof p.logLine === 'string' && p.logLine) { try { fs.appendFileSync(path.join(dir, 'run-log.md'), p.logLine + '\n'); } catch {} }
    let frameRel = null;
    const it = p.iter | 0;
    if (typeof p.frame === 'string' && p.frame && it >= 0) { try { const rel = '.dezign-loop/iter-' + it + '.png'; fs.writeFileSync(path.join(projectDir, rel), Buffer.from(p.frame, 'base64')); frameRel = rel; } catch {} }
    return { ok: true, frameRel };
  } catch (e) { return { ok: false, error: String((e && e.message) || e) }; }
}

// ── AI edit history (snapshot stack — undo/redo the agent's direct file rewrites) ──────────
// Zero tokens: pure file copies. The manual-edits layer (EDITS_CSS/JSON) has its OWN undo, excluded here.
function snapEligible(name) {
  if (name === EDITS_CSS || name === EDITS_JSON) return false;
  return SNAP_EXT.has(path.extname(name).toLowerCase());
}
function listSrc(dir, rel) {
  dir = dir || projectDir; rel = rel || '';
  let out = []; let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) { if (!SNAP_SKIP_DIRS.has(e.name)) out = out.concat(listSrc(path.join(dir, e.name), r)); }
    else if (snapEligible(e.name)) out.push(r);
  }
  return out;
}
function listAll(dir, rel) { // every file under a snapshot dir
  rel = rel || ''; let out = []; let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) out = out.concat(listAll(path.join(dir, e.name), r)); else out.push(r);
  }
  return out;
}
// ── image versioning helpers (content-addressed blob store + per-seq manifest) ──
function assetEligible(name) { return ASSET_EXT.has(path.extname(name).toLowerCase()); }
function listAssets(dir, rel) {
  dir = dir || projectDir; rel = rel || '';
  let out = []; let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) { if (!SNAP_SKIP_DIRS.has(e.name)) out = out.concat(listAssets(path.join(dir, e.name), r)); }
    else if (assetEligible(e.name)) out.push(r);
  }
  return out;
}
function hashFile(fp) { try { return crypto.createHash('sha1').update(fs.readFileSync(fp)).digest('hex'); } catch { return null; } }
function manifestPath(seq) { return path.join(projectDir, HISTORY_DIR, MANIFESTS_DIR, String(seq) + '.json'); }
function readManifest(seq) { try { return JSON.parse(fs.readFileSync(manifestPath(seq), 'utf8')); } catch { return null; } }
// snapshot the project's images into the dedup blob store + write this seq's rel-path->hash manifest
function snapshotAssets(seq) {
  try {
    const bdir = path.join(projectDir, HISTORY_DIR, BLOBS_DIR); fs.mkdirSync(bdir, { recursive: true });
    const manifest = {};
    for (const rel of listAssets()) {
      const h = hashFile(path.join(projectDir, rel)); if (!h) continue;
      const blob = path.join(bdir, h);
      if (!fs.existsSync(blob)) { try { fs.copyFileSync(path.join(projectDir, rel), blob); } catch {} } // store each unique image once
      manifest[rel] = h;
    }
    fs.mkdirSync(path.dirname(manifestPath(seq)), { recursive: true });
    fs.writeFileSync(manifestPath(seq), JSON.stringify(manifest));
  } catch {}
}
// restore the project's images to the snapshot's exact set (drop images it didn't have, copy its blobs back)
function restoreAssets(seq) {
  const manifest = readManifest(seq); if (!manifest) return; // pre-versioning snapshot → leave images as-is (best effort)
  const bdir = path.join(projectDir, HISTORY_DIR, BLOBS_DIR);
  const want = new Set(Object.keys(manifest));
  for (const rel of listAssets()) { if (!want.has(rel)) { try { fs.unlinkSync(path.join(projectDir, rel)); } catch {} } }
  for (const rel of Object.keys(manifest)) {
    const dst = path.join(projectDir, rel);
    try { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(path.join(bdir, manifest[rel]), dst); } catch {}
  }
}
// drop blobs no longer referenced by ANY remaining manifest (keeps the store bounded as snapshots are pruned)
function gcBlobs() {
  try {
    const mdir = path.join(projectDir, HISTORY_DIR, MANIFESTS_DIR);
    const bdir = path.join(projectDir, HISTORY_DIR, BLOBS_DIR);
    const referenced = new Set();
    let mfiles = []; try { mfiles = fs.readdirSync(mdir); } catch {}
    for (const mf of mfiles) { try { const m = JSON.parse(fs.readFileSync(path.join(mdir, mf), 'utf8')); for (const k in m) referenced.add(m[k]); } catch {} }
    let blobs = []; try { blobs = fs.readdirSync(bdir); } catch {}
    for (const b of blobs) { if (!referenced.has(b)) { try { fs.unlinkSync(path.join(bdir, b)); } catch {} } }
  } catch {}
}
function takeSnapshot() {
  if (!projectDir) return null;
  const seq = ++_seq;
  const sdir = path.join(projectDir, HISTORY_DIR, String(seq));
  for (const rel of listSrc()) {
    const dst = path.join(sdir, rel);
    try { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(path.join(projectDir, rel), dst); } catch {}
  }
  snapshotAssets(seq); // also version the binary images (dedup blob store) so AI-undo can revert them
  return seq;
}
function rmSnap(seq) { try { fs.rmSync(path.join(projectDir, HISTORY_DIR, String(seq)), { recursive: true, force: true }); } catch {} try { fs.unlinkSync(manifestPath(seq)); } catch {} gcBlobs(); }
function snapEqualsCurrent(seq) {
  const sdir = path.join(projectDir, HISTORY_DIR, String(seq));
  const cur = listSrc().sort(); const snap = listAll(sdir).sort();
  if (cur.length !== snap.length || cur.join('|') !== snap.join('|')) return false;
  for (const rel of cur) {
    try { if (!fs.readFileSync(path.join(projectDir, rel)).equals(fs.readFileSync(path.join(sdir, rel)))) return false; } catch { return false; }
  }
  // images too: a turn that changed ONLY images still counts as an edit (compare current image hashes to the manifest)
  const man = readManifest(seq) || {};
  const curAssets = listAssets();
  if (curAssets.length !== Object.keys(man).length) return false;
  for (const rel of curAssets) { if (hashFile(path.join(projectDir, rel)) !== man[rel]) return false; }
  return true;
}
function restoreSnapshot(seq) {
  const sdir = path.join(projectDir, HISTORY_DIR, String(seq));
  for (const rel of listSrc()) { try { fs.unlinkSync(path.join(projectDir, rel)); } catch {} } // drop current source
  for (const rel of listAll(sdir)) {
    const dst = path.join(projectDir, rel);
    try { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(path.join(sdir, rel), dst); } catch {}
  }
  restoreAssets(seq); // revert the binary images to this snapshot's set (from the dedup blob store)
}
function H() { if (!projectDir) return { undo: [], redo: [] }; return histories[projectDir] || (histories[projectDir] = { undo: [], redo: [] }); }
function aiState() { const h = H(); return { canUndo: h.undo.length > 0, canRedo: h.redo.length > 0 }; }
function aiSnapshotBeforeTurn() {
  const seq = takeSnapshot();
  if (seq) H().undo.push(seq);
  return seq;
}
function aiCommitTurn(seq) { // after the turn: drop the point if NOTHING changed, else invalidate redo
  const h = H();
  if (!seq || h.undo[h.undo.length - 1] !== seq) return;
  if (snapEqualsCurrent(seq)) { h.undo.pop(); rmSnap(seq); } // no-edit turn -> leave no undo point, keep redo
  else { for (const s of h.redo) rmSnap(s); h.redo = []; while (h.undo.length > MAX_HISTORY) rmSnap(h.undo.shift()); }
}
function aiUndo() {
  const h = H();
  if (!h.undo.length) return aiState();
  const cur = takeSnapshot(); if (cur) h.redo.push(cur);
  const seq = h.undo.pop(); restoreSnapshot(seq); rmSnap(seq);
  return aiState();
}
function aiRedo() {
  const h = H();
  if (!h.redo.length) return aiState();
  const cur = takeSnapshot(); if (cur) h.undo.push(cur);
  const seq = h.redo.pop(); restoreSnapshot(seq); rmSnap(seq);
  return aiState();
}

module.exports = { startServer, url, getDir, setDir, tree, watch, applyEdits, getEdits, saveVerifyFrame, loopPersist,
  aiSnapshotBeforeTurn, aiCommitTurn, aiUndo, aiRedo, aiState };
