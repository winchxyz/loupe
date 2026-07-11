/* Loupe · safepath.cjs — AUDIT-2 F38/F39. ONE realpath-backed path-confinement definition, replacing the lexical-only
   norm that the write-guard and the image-rel/IPC-cwd reads used.
   isInside(root, abs): true iff `abs` stays inside `root` after resolving symlinks/junctions of the deepest EXISTING
   ancestor of `abs` (so a win32 junction/symlink inside cwd cannot smuggle a path outside). Lexical check runs first
   (fast, case-insensitive + path.sep-boundary aware on win32) and is the primary guarantee; the realpath check is the
   junction-escape backstop. Fails CLOSED to the lexical result if realpath throws — never fail-open.
   safeJoin(root, rel): resolve `rel` against `root`, return the absolute path ONLY if it stays inside root (defeats
   ../ traversal, absolute-override, junction escape); null otherwise. A not-yet-created target is fine — we realpath
   the deepest existing ancestor and re-append the missing tail, so a legit first-write is never falsely blocked. */
const path = require('node:path');
const fs = require('node:fs');

const norm = (p) => { let s = path.resolve(String(p == null ? '' : p)); if (process.platform === 'win32') s = s.toLowerCase(); return s; };

function lexicalInside(root, abs) {
  const r = norm(root), a = norm(abs);
  if (a === r) return true;
  return a.startsWith(r.endsWith(path.sep) ? r : r + path.sep);
}

// Resolve symlinks/junctions on the deepest existing ancestor of `abs`, re-appending the non-existing tail.
// A path with nothing existing on its chain returns its lexical resolution unchanged.
function realResolve(abs) {
  let cur = path.resolve(String(abs == null ? '' : abs));
  const tail = [];
  for (let i = 0; i < 8192; i++) {
    try { const real = fs.realpathSync.native(cur); return tail.length ? path.join(real, ...tail.slice().reverse()) : real; }
    catch {
      const parent = path.dirname(cur);
      if (parent === cur) return path.resolve(String(abs == null ? '' : abs)); // reached a root with nothing existing
      tail.push(path.basename(cur));
      cur = parent;
    }
  }
  return path.resolve(String(abs == null ? '' : abs));
}

function isInside(root, abs) {
  if (!root || abs == null) return false;
  if (!lexicalInside(root, abs)) return false; // lexical first — the primary confinement guarantee
  try { return lexicalInside(realResolve(root), realResolve(abs)); }
  catch { return lexicalInside(root, abs); } // realpath failure → keep the lexical result (fail-closed to today's behavior)
}

function safeJoin(root, rel) {
  if (!root) return null;
  const abs = path.resolve(String(root), String(rel == null ? '' : rel));
  return isInside(root, abs) ? abs : null;
}

module.exports = { isInside, safeJoin };
