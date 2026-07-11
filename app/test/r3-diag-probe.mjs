/* R3 diag — capture the REAL failure signal from a packaged build turn: main-process stdout/stderr
 * + the chat log text. Instrument-don't-guess: the paid probe showed a 24s "build" that wrote nothing.
 *   cd app && node test/r3-diag-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXE = process.env.R3_EXE || path.join(os.tmpdir(), 'loupe-release', 'win-unpacked', 'Loupe.exe');
const ART = path.join(__dirname, 'artifacts', 'r3-packaged');

(async () => {
  const { _electron } = await import('playwright');
  let app = null;
  const mainOut = [];
  try {
    app = await _electron.launch({ executablePath: EXE, env: { ...process.env, DZ_SDK_DEBUG: '1' } });
    const proc = app.process();
    proc.stdout.on('data', (d) => mainOut.push('[out] ' + d.toString()));
    proc.stderr.on('data', (d) => mainOut.push('[err] ' + d.toString()));
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 20000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const projDir = path.join(ART, 'diag-site');
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);

    await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, 'Build a tiny one-page test site: one hero with an h1 and a short paragraph. No images.');
      inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });

    // answer any ask, watch for 90s
    for (let i = 0; i < 18; i++) {
      await sleep(5000);
      await page.evaluate(() => { const b = document.querySelector('[class*="ask"] button'); if (b) b.click(); });
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy && i > 2) break;
    }
    const chat = await page.evaluate(() => (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(-3000));
    console.log('==== CHAT TAIL ====\n' + chat);
    console.log('\n==== MAIN PROCESS OUTPUT (tail) ====\n' + mainOut.join('').slice(-4000));
    console.log('\n==== PROJECT DIR ====\n' + fs.readdirSync(projDir).join(', '));
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); }
  finally { try { await app?.close(); } catch {} process.exit(0); }
})();
