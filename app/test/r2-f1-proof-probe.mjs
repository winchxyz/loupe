/* R2 · F1 end-to-end PROOF: after the maxTurns-graceful + sanitize fixes, a real (tiny) Solo build must
 * (1) stream "— Builder executing the direction —", (2) write the "★ Art Direction (binding)" section to
 * the build log, (3) create/append the cross-site divergence memory (dezign-artdirection.json in userData),
 * (4) NOT stream the "Art Director skipped" note. Burns one small build (owner-approved scope).
 *   cd app && node test/r2-f1-proof-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const CAP = 15 * 60 * 1000;
const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (n, p, i) => { checks.push({ n, p }); console.log(`${p ? 'PASS' : 'FAIL'}  [${el()}] ${n}  ${i == null ? '' : String(i).slice(0, 220)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5303, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5303/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const memPath = path.join(await app.evaluate(async ({ app }) => app.getPath('userData')), 'dezign-artdirection.json');
    const memBefore = fs.existsSync(memPath) ? JSON.parse(fs.readFileSync(memPath, 'utf8')) : null;
    const memCountBefore = Array.isArray(memBefore) ? memBefore.length : (memBefore && memBefore.directions ? memBefore.directions.length : 0);
    console.log(`[${el()}] divergence memory: ${memPath} · exists=${!!memBefore} · entries=${memCountBefore}`);

    const projDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-r2-f1-'));
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);

    const sent = await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, "Build a tiny one-page site for 'Chai Stand' — a street tea stall. Hero with name + tagline, one menu section (3 items), footer. Compact, illustrated style, no photos.");
      inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    });
    add('build submitted', sent);

    let done = false, asksAnswered = 0;
    const seen = { art: false, builderLine: false, skipNote: false };
    const s = Date.now();
    while (Date.now() - s < CAP) {
      await sleep(4000);
      const st = await page.evaluate(() => {
        const askBtns = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((b) => b.offsetParent);
        return {
          busy: !!document.querySelector('.composer .stopbtn'),
          chat: (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(0, 120000),
          asks: askBtns.length,
        };
      });
      if (/Art Director — committing/i.test(st.chat)) seen.art = true;
      if (/Builder executing the direction/i.test(st.chat)) seen.builderLine = true;
      if (/Art Director skipped/i.test(st.chat)) seen.skipNote = true;
      // ANSWER the imagery ASK ourselves (the owner used to click this by hand → the probe was never headless).
      if (st.asks > 0) {
        const clicked = await page.evaluate(() => { const b = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((x) => x.offsetParent)[0]; if (b) { const t = b.textContent.trim().slice(0, 40); b.click(); return t; } return null; });
        if (clicked) { asksAnswered++; console.log(`[${el()}] answered imagery ASK: "${clicked}"`); await sleep(1500); }
      }
      if (!st.busy && Date.now() - s > 30000) { done = true; break; }
    }
    console.log(`[${el()}] asks answered by the probe: ${asksAnswered}`);
    add('build finished within cap', done, el());
    add('F1: "Builder executing the direction" streamed (was NEVER seen pre-fix)', seen.builderLine);
    add('F1: no "Art Director skipped" note (AD succeeded)', !seen.skipNote);

    const log = fs.existsSync(path.join(projDir, '.dezign-flow-log.md')) ? fs.readFileSync(path.join(projDir, '.dezign-flow-log.md'), 'utf8') : '';
    add('F1: build log has "★ Art Direction (binding)" section (was absent in G1/G2)', /★ Art Direction \(binding\)/.test(log));
    const memAfter = fs.existsSync(memPath) ? JSON.parse(fs.readFileSync(memPath, 'utf8')) : null;
    const memCountAfter = Array.isArray(memAfter) ? memAfter.length : (memAfter && memAfter.directions ? memAfter.directions.length : 0);
    add('F1: divergence memory file created/appended (cross-site memory ALIVE)', memCountAfter > memCountBefore, `${memCountBefore} -> ${memCountAfter} (${memPath})`);
    add('site built (index.html)', fs.existsSync(path.join(projDir, 'index.html')));

    // INSTRUMENT (keep artifacts, dump ground truth): what the AD actually produced this turn
    console.log('\n--- flow log head (500) ---\n' + log.slice(0, 500));
    console.log('\n--- flow log has AD section: ' + /★ Art Direction \(binding\)/.test(log) + ' · Grounded section: ' + /Grounded with/.test(log));
    const adHeader = (log.match(/ARCHETYPE[\s\S]{0,400}/i) || [''])[0].slice(0, 400);
    console.log('--- ARCHETYPE header in log:\n' + (adHeader || '(none found)'));
    if (memAfter) console.log('--- memory entries: ' + JSON.stringify(memAfter).slice(0, 400));
    console.log('--- project kept at: ' + projDir);
    // (do NOT delete projDir — leave it for inspection)
    const fails = checks.filter((c) => !c.p).length;
    console.log(`\nF1-PROOF SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
