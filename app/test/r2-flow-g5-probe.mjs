/* R2 axis-G · G5: negative path — Stop mid-build. FIND-ONLY.
 * Starts a real Solo build in a throwaway dir, hits Stop ~25s in, asserts: busy clears fast,
 * a stop note is posted, file writes cease, and the app stays responsive (a /help works after).
 *   cd app && node test/r2-flow-g5-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');

const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 250)}`); };
const treeSig = (dir) => {
  let sig = '';
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else { const st = fs.statSync(p); sig += `${p}:${st.size}:${st.mtimeMs};`; } } };
  try { walk(dir); } catch {}
  return sig;
};

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5293, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5293/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const projDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-r2-g5-'));
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);

    const sent = await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, 'Build a one-page landing site for a small bakery. Hero, three products, footer.'); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    });
    add('build started', sent);
    // R2: self-answer the imagery ASK (the owner used to click it by hand — the probe must be headless),
    // and only START the stop-timer once the build is genuinely past the gate.
    for (let i = 0; i < 10; i++) {
      await sleep(2500);
      const clicked = await page.evaluate(() => { const b = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((x) => x.offsetParent)[0]; if (b) { b.click(); return true; } return false; });
      if (clicked) { console.log('answered imagery ASK'); break; }
    }
    await sleep(20000);
    const busyBefore = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
    add('busy at t+~45s (post-gate)', busyBefore);

    // ---- STOP ----
    const stopClicked = await page.evaluate(() => { const b = document.querySelector('.composer .stopbtn'); if (b) { b.click(); return true; } return false; });
    add('Stop clicked', stopClicked);
    let clearedAt = null;
    const s = Date.now();
    while (Date.now() - s < 90000) {
      await sleep(500); // F7: fine-grained timing — quantify the real stop-to-idle latency
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy) { clearedAt = ((Date.now() - s) / 1000).toFixed(1); break; }
    }
    add('busy cleared after Stop (≤30s)', clearedAt != null && parseFloat(clearedAt) <= 30, clearedAt + 's (fine-grained)');
    const chatTail = await page.evaluate(() => (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(-600));
    add('stop acknowledged in chat', /stop|abort|cancell/i.test(chatTail), chatTail.replace(/\s+/g, ' ').slice(-160));

    // ---- writes must cease ----
    await sleep(4000);
    const sig1 = treeSig(projDir);
    await sleep(15000);
    const sig2 = treeSig(projDir);
    add('no file writes after stop (+15s window)', sig1 === sig2);

    // ---- app responsive after stop ----
    const helpRan = await page.evaluate(() => (window.__dzTestSlash ? window.__dzTestSlash('help', '') : 'no hook'));
    await sleep(1200);
    const lastMsg = await page.evaluate(() => (window.__dzTestLastMsg ? window.__dzTestLastMsg() : ''));
    add('app responsive after stop (/help answers)', helpRan === true && /command|\/create|\/bake/i.test(lastMsg), String(lastMsg).slice(0, 100));

    try { fs.rmSync(projDir, { recursive: true, force: true }); } catch {}
    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nG5 SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
