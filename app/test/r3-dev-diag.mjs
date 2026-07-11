/* R3 dev-baseline diag — same instrumentation as r3-diag-probe.mjs but against the DEV app,
 * to compare the SDK child's init (tools/mcp/permissionMode) dev vs packaged.
 *   cd app && node test/r3-dev-diag.mjs   (needs dist-renderer built; uses vite preview like g1)
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const ART = path.join(__dirname, 'artifacts', 'r3-packaged');

(async () => {
  const { preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const mainOut = [];
  try {
    srv = await preview({ root: APP, preview: { port: 5291, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5291/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url, DZ_SDK_DEBUG: '1' } });
    const proc = app.process();
    proc.stdout.on('data', (d) => mainOut.push('[out] ' + d.toString()));
    proc.stderr.on('data', (d) => mainOut.push('[err] ' + d.toString()));
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 20000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    // FRESH dir per run — reusing one path lets the CLI find & RESUME the previous (failed) session
    // transcript for that cwd, contaminating the A/B (caught live: identical session_id across runs).
    const projDir = path.join(ART, 'dev-diag-' + process.pid);
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);
    // force SOLO — the packaged failures are all Solo; the first dev run inherited the owner's Studio setting (confound)
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(400);

    await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, 'Build a tiny one-page test site: one hero with an h1 and a short paragraph. No images.');
      inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });

    for (let i = 0; i < 24; i++) {
      await sleep(5000);
      await page.evaluate(() => { const b = document.querySelector('[class*="ask"] button'); if (b) b.click(); });
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy && i > 2) break;
    }
    const init = mainOut.join('').match(/\[sdk-sys\] (\{"type":"system","subtype":"init".{0,1400})/);
    console.log('==== DEV INIT ====\n' + (init ? init[1] : 'NOT CAPTURED'));
    console.log('\n==== PROJECT DIR ====\n' + fs.readdirSync(projDir).join(', '));
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(0); }
})();
