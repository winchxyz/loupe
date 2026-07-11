/* AUDIT 2026-07-09 · Step 2 (P5) one-off verify — the BARE-MODE firing path.
 * Temporarily renames baseline/library away, launches the REAL app with a CLEAN userData (so the banner never
 * lands in the owner's persisted chat), and asserts: (1) the app still BOOTS (no crash), (2) the renderer shows
 * the one-time "bare mode" chat banner, (3) the main process logs the terminal BARE-mode warning. Restores the
 * library in `finally` no matter what. The steady-state (library PRESENT → bare:false + NO banner) is locked
 * permanently in smoke.mjs; this probe proves the other half once.  cd app && node test/p5-baremode-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const LIB = path.resolve(APP, '..', 'baseline', 'library');
const OFF = LIB + '._p5off';

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null, renamed = false, code = 1;
  const mainOut = [];
  const cleanUserData = fs.mkdtempSync(path.join(os.tmpdir(), 'loupe-p5bare-'));
  try {
    if (!fs.existsSync(LIB)) throw new Error('baseline/library not found at ' + LIB + ' — nothing to rename (already bare?)');
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5291, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5291/').replace(/\/$/, '');

    fs.renameSync(LIB, OFF); renamed = true;
    console.log('• baseline/library renamed away — launching');

    app = await _electron.launch({ args: ['.', `--user-data-dir=${cleanUserData}`], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    try { app.process().stdout.on('data', (d) => mainOut.push(String(d))); app.process().stderr.on('data', (d) => mainOut.push(String(d))); } catch {}
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await page.waitForTimeout(2000); // let the mount health() round-trip + sysNote land

    const facts = await page.evaluate(async () => {
      const h = (window.dezign && window.dezign.health) ? await window.dezign.health() : null;
      const banner = [...document.querySelectorAll('.panel.chat [class*="msg"]')].some((m) => /running in bare mode/i.test(m.textContent || ''));
      return { h, banner, booted: !!document.querySelector('.topbar, .emptystate, .canvas') };
    });
    const mainWarned = mainOut.some((l) => /BARE mode/.test(l)); // stdout race-prone (whenReady beats the attach) — informational
    const warnFired = await app.evaluate(async () => !!global.__libBareWarned); // the deterministic witness of the warn line
    console.log(JSON.stringify({ ...facts, mainWarned, warnFired }, null, 2));

    const pass = facts.booted && facts.h && facts.h.bare === true && facts.banner && warnFired;
    console.log(pass ? '✓ P5 BARE-MODE PROBE PASSED (app boots + banner + terminal warning)' : '✗ P5 BARE-MODE PROBE FAILED');
    code = pass ? 0 : 1;
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); code = 1; }
  finally {
    try { await app?.close(); } catch {}
    try { await srv?.close(); } catch {}
    if (renamed) { try { fs.renameSync(OFF, LIB); console.log('• baseline/library RESTORED'); } catch (e) { console.log('!! RESTORE FAILED — rename ' + OFF + ' back to ' + LIB + ' BY HAND: ' + e.message); } }
    try { fs.rmSync(cleanUserData, { recursive: true, force: true }); } catch {}
    process.exit(code);
  }
})();
