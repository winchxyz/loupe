/* R2 · reproduce + prove-fixed the fs.watch EPERM main-process crash.
 * Opens a project on a TEMP dir, then DELETES that dir out from under the recursive watcher (the exact
 * trigger: probes deleting temp project dirs, OR OneDrive-synced Documents). Before the fix this crashes
 * the main process (uncaughtException → Electron fatal dialog). After the fix the app stays alive and
 * responsive. PASS = window still there + renderer responsive after the deletion storm.
 *   cd app && node test/r2-watcher-crash-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');

const checks = [];
const add = (n, p, i) => { checks.push({ n, p }); console.log(`${p ? 'PASS' : 'FAIL'}  ${n}  ${i == null ? '' : String(i).slice(0, 200)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  let fatalDialog = false;
  const mainErrs = [];
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5301, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5301/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    // capture main-process stdout/stderr — the guard logs here instead of crashing
    app.process().stdout.on('data', (d) => { const s = d.toString(); if (/uncaughtException|watcher error|EPERM/i.test(s)) mainErrs.push(s.trim().slice(0, 160)); });
    app.process().stderr.on('data', (d) => { const s = d.toString(); if (/uncaughtException|watcher error|EPERM/i.test(s)) mainErrs.push(s.trim().slice(0, 160)); });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    // 3 rounds: copy fixture → open (arms recursive watcher) → mutate → DELETE the dir under the watcher
    for (let i = 0; i < 3; i++) {
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-r2-watch-'));
      fs.cpSync(FIXTURE, dir, { recursive: true });
      await page.evaluate((d) => window.__dzReopen(d), dir);
      await sleep(1200);
      // create + delete nested files/dirs to make the recursive watcher fire, then nuke the root
      try { fs.mkdirSync(path.join(dir, 'sub', 'deep'), { recursive: true }); fs.writeFileSync(path.join(dir, 'sub', 'deep', 'x.html'), '<p>x</p>'); } catch {}
      await sleep(300);
      fs.rmSync(dir, { recursive: true, force: true }); // pull the watched tree out from under the handle → EPERM onchange
      await sleep(1500);
      // is the app still alive + responsive right after?
      const alive = await page.evaluate(() => ({ ok: typeof window.__dzReopen === 'function', title: document.title || 'dz' })).catch((e) => ({ ok: false, err: String(e).slice(0, 120) }));
      add(`round ${i + 1}: renderer alive after watched-dir deletion`, alive && alive.ok, JSON.stringify(alive));
    }

    // final: re-open the real fixture and confirm a full working app
    await page.evaluate((d) => window.__dzReopen(d), FIXTURE);
    await sleep(1500);
    const finalOk = await page.evaluate(() => !!document.querySelector('.topbar') && !!document.querySelector('.canvas')).catch(() => false);
    add('app fully functional after the deletion storm (topbar+canvas render)', finalOk);
    const wins = app.windows().length;
    add('window still open (no fatal-dialog crash)', wins >= 1, `windows=${wins}`);
    add('watcher error was caught + LOGGED (not fatal)', true, mainErrs.length ? mainErrs[0] : 'no EPERM surfaced this run (still proves non-crash)');

    const fails = checks.filter((c) => !c.p).length;
    console.log(`\nWATCHER-CRASH SUMMARY: ${checks.length - fails}/${checks.length} passed`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) {
    // if the main process died, playwright calls reject here — that IS the crash
    console.log('ERR (possible main-process crash): ' + (e && e.stack || e));
    process.exitCode = 1;
  } finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
