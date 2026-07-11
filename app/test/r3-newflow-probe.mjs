/* R3 cold-eye verify — the OWNER's exact path: a New-site scaffold (starter index.html + starter styles.css)
 * then a real build in the PACKAGED app. Asserts the Art Director actually runs (it used to be silently
 * skipped: the starter index made the first build look like an edit), the direction is prose (no code
 * fences downstream), and the palette board appears even for a single-file build. PAID mini-build.
 *   cd app && node test/r3-newflow-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXE = process.env.R3_EXE || path.join(os.tmpdir(), 'loupe-release', 'win-unpacked', 'Loupe.exe');
const ART = path.join(__dirname, 'artifacts', 'r3-packaged');

// AUDIT-2 F44b/F44d: the scaffold is imported from the SHIPPED starter module, so "the scaffold the probe tests" is
// byte-identical to "the scaffold users get" (no drifting inline copy).
const { STARTER_HTML, STARTER_CSS } = createRequire(import.meta.url)(path.join(__dirname, '..', 'electron', 'starter.cjs'));
const BRIEF = "Build a one-page site for 'Mosswick' — a tiny moss-terrarium studio in Utrecht. Hero, three terrarium kits, a care note, footer. Real copy, no lorem, keep it compact.";

const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 240)}`); };

(async () => {
  const { _electron } = await import('playwright');
  let app = null;
  try {
    app = await _electron.launch({ executablePath: EXE });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 20000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const projDir = path.join(ART, 'newflow-' + process.pid); // fresh per run (cwd-resume trap)
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    fs.writeFileSync(path.join(projDir, 'index.html'), STARTER_HTML);
    fs.writeFileSync(path.join(projDir, 'styles.css'), STARTER_CSS);
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);

    await page.evaluate((brief) => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, brief); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }, BRIEF);

    let adStreamed = false, done = false;
    const start = Date.now();
    while (Date.now() - start < 18 * 60 * 1000) {
      await sleep(5000);
      await page.evaluate(() => { const b = document.querySelector('[class*="ask"] button'); if (b) b.click(); }); // imagery ASK self-answer
      const st = await page.evaluate(() => ({
        busy: !!document.querySelector('.composer .stopbtn'),
        chat: (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(-3000),
      }));
      if (/Art Director/i.test(st.chat)) adStreamed = true;
      if (!st.busy && Date.now() - start > 20000) { done = true; break; }
    }
    add('build finished', done, el());
    add('ART DIRECTOR ran on the New-site flow (was silently skipped)', adStreamed);

    const log = (() => { try { return fs.readFileSync(path.join(projDir, '.dezign-flow-log.md'), 'utf8'); } catch { return ''; } })();
    add('direction committed in the build log', /★ Art Direction \(binding\)/.test(log));
    const adSection = log.split(/## [^★]/)[0] || log;
    add('direction is PROSE (no code fences reached downstream)', !/```/.test(adSection));
    const built = fs.readFileSync(path.join(projDir, 'index.html'), 'utf8');
    add('starter replaced by the real site', !built.includes('Tell the assistant in the chat what to build'));
    await sleep(2500);
    add('palette board generated (single-file or styles.css)', fs.existsSync(path.join(projDir, 'palette.html')));

    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nR3 NEWFLOW SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
