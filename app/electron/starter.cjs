/* Loupe · starter.cjs — AUDIT-2 F44b/F44d. The New-site STARTER scaffold + the pristine-starter predicate, extracted
   from main.cjs so (a) the smoke can UNIT-test the exact _hadIndex0 sign — the old regex lock passed even with the `!`
   dropped, which re-created the owner-hit regression (a pristine starter index judged an EDIT → the Art Director +
   anti-sameness + palette board were silently skipped) — and (b) the packaged probe checks the SHIPPED scaffold against
   the SHIPPED marker. Pure + node-loadable (fs/path only). */
'use strict';
const fs = require('node:fs');
const path = require('node:path');

// R3 cold-eye (owner-found): this sentence doubles as the PRISTINE-STARTER marker — an index.html still carrying it
// counts as an EMPTY project (see hadRealIndex + the Art Director gate), so the first real build gets the Art Director.
const STARTER_MARKER = 'Tell the assistant in the chat what to build';
const STARTER_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New site</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="canvas">
    <h1>New site</h1>
    <p>${STARTER_MARKER}. It edits the files in this folder and the preview reloads. Use the picker to select and refine elements directly.</p>
  </main>
</body>
</html>
`;
const STARTER_CSS = `:root { color-scheme: light; }
* { box-sizing: border-box; }
body { margin: 0; font: 16px/1.6 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; background: #fff; }
.canvas { max-width: 720px; margin: 0 auto; padding: 12vh 24px; }
h1 { font-size: clamp(2rem, 5vw, 3rem); margin: 0 0 0.4em; letter-spacing: -0.01em; }
p { color: #555; max-width: 62ch; }
`;

// TRUE iff the project already has a REAL (non-starter) index.html — the exact _hadIndex0 value. A pristine STARTER
// index, or no index at all, returns FALSE (= AD-eligible / an empty project the first real build art-directs).
function hadRealIndex(cwd) {
  try {
    const p = path.join(String(cwd || ''), 'index.html');
    if (!fs.existsSync(p)) return false;
    return !fs.readFileSync(p, 'utf8').includes(STARTER_MARKER);
  } catch { return false; }
}

// TRUE iff index.html exists AND still carries the pristine STARTER_MARKER (a freshly scaffolded, unbuilt site).
function isPristineStarter(cwd) {
  try {
    const p = path.join(String(cwd || ''), 'index.html');
    return fs.existsSync(p) && fs.readFileSync(p, 'utf8').includes(STARTER_MARKER);
  } catch { return false; }
}

// Scaffold a fresh site into `dir`: refuse a non-empty dir (parity with project:new), then write the STARTER files.
function scaffoldNewSite(dir) {
  try {
    if (!dir) return { error: 'no directory' };
    if (fs.existsSync(dir) && fs.readdirSync(dir).length) return { error: 'That folder already exists and is not empty — pick a new name.' };
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), STARTER_HTML);
    fs.writeFileSync(path.join(dir, 'styles.css'), STARTER_CSS);
    return { ok: true };
  } catch (e) { return { error: String((e && e.message) || e) }; }
}

module.exports = { STARTER_MARKER, STARTER_HTML, STARTER_CSS, hadRealIndex, isPristineStarter, scaffoldNewSite };
