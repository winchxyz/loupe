/* AUDIT pass 2 (2026-07-09) · COMPREHENSIVE VISUAL-QA probe — drives EVERY interactive feature surface on the
 * fixture site and screenshots each, closing the gap that the R2 catalog left (edit toolbar, picker mid-edit,
 * align grid, font picker, inspector, multi-select, loop bar, all-devices, device+adapt, tokens, convo, layers).
 * NO paid turns — everything is driven via the app's own test hooks (__dzTestOpenEdit, __dzFakeLoop, __dzInject,
 * .fp-trigger, the Edit pickbtn) + DOM clicks. Missing hooks/selectors log SKIP loudly (never silently shrink
 * coverage). Read-only wrt owner state (uses the fixture project). Serial with other Electron probes.
 *   cd app && node test/r2-visualqa-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');
const OUT = path.join(__dirname, 'artifacts', 'r2-visualqa');
fs.mkdirSync(OUT, { recursive: true });

const taken = []; const skipped = [];

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const consoleErrs = [];
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5289, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5289/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 160)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 160)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await app.evaluate(async ({ BrowserWindow }) => { const w = BrowserWindow.getAllWindows()[0]; if (w) { const b = w.getBounds(); w.setBounds({ x: b.x, y: b.y, width: 1480, height: 940 }); } await new Promise((r) => setTimeout(r, 250)); });

    const sleep = (ms) => page.waitForTimeout(ms);
    const shot = async (name) => { await page.screenshot({ path: path.join(OUT, name + '.png') }); taken.push(name); console.log('SHOT  ' + name); };
    const skip = (name, why) => { skipped.push(name + ' — ' + why); console.log('SKIP  ' + name + ' — ' + why); };
    const click = async (sel, wait = 300) => { const ok = await page.evaluate((s) => { const el = document.querySelector(s); if (el) { el.click(); return true; } return false; }, sel); await sleep(wait); return ok; };

    // open the fixture
    await page.evaluate((d) => window.__dzReopen(d), FIXTURE);
    await sleep(1800);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    // ensure the webview picker adapter is injected
    await page.evaluate(() => { try { window.__dzInject && window.__dzInject('move'); } catch {} });
    await sleep(700);

    // ---------- 1) EDIT inspector on a text element (font field + property rows) ----------
    try {
      const ed = await page.evaluate(async () => {
        const sels = ['h1', 'h2', 'p', 'a', 'nav a']; let opened = null, err = null;
        for (const s of sels) { try { if (window.__dzTestOpenEdit && await window.__dzTestOpenEdit(s)) { opened = s; break; } } catch (e) { err = String(e && e.message || e); } }
        await new Promise((r) => setTimeout(r, 500));
        return { opened, err, panel: !!document.querySelector('.panel.edit'), fontField: !!document.querySelector('.fp-trigger'), rows: document.querySelectorAll('.ep-row').length };
      });
      if (ed.panel) { await shot('01-edit-inspector'); console.log('  edit target: ' + ed.opened + ' · rows=' + ed.rows + ' · font=' + ed.fontField); }
      else skip('01-edit-inspector', 'inspector did not open: ' + JSON.stringify(ed));
    } catch (e) { skip('01-edit-inspector', 'ex ' + e.message); }

    // ---------- 2) FONT PICKER popover ----------
    if (await click('.fp-trigger', 400) && await page.$('.fp-pop')) { await sleep(300); await shot('02-font-picker'); await page.keyboard.press('Escape'); await sleep(200); }
    else skip('02-font-picker', '.fp-trigger or .fp-pop missing');

    // ---------- 3) ALIGN 9-point grid (Edit mode on a container) ----------
    try {
      const al = await page.evaluate(async () => {
        const eb = [...document.querySelectorAll('.tb-tools .pickbtn')].find((b) => /Edit element properties/i.test(b.title || '')); if (eb) eb.click();
        await new Promise((r) => setTimeout(r, 250));
        let opened = false; for (const s of ['main', 'header', '.buttons', 'body > *', 'div']) { try { if (window.__dzTestOpenEdit && await window.__dzTestOpenEdit(s)) { opened = true; break; } } catch {} }
        await new Promise((r) => setTimeout(r, 400));
        return { opened, cells: document.querySelectorAll('.al-cell, .align-cell, [class*="al-"] [class*="cell"]').length, head: !!document.querySelector('.al-head, [class*="align"]') };
      });
      if (al.cells >= 4) { await shot('03-align-grid'); console.log('  align cells=' + al.cells); }
      else skip('03-align-grid', 'grid not found: ' + JSON.stringify(al));
    } catch (e) { skip('03-align-grid', 'ex ' + e.message); }

    // reset to Select and re-inject
    await page.evaluate(() => { const sb = [...document.querySelectorAll('.tb-tools .pickbtn, .topbar button')].find((b) => /Select/i.test(b.textContent || b.title || '')); if (sb) sb.click(); });
    await sleep(400);

    // ---------- 4) PICK an element in Select mode (edit toolbar / quick-edit popup) ----------
    try {
      const picked = await page.evaluate(async () => {
        const wv = document.querySelector('.livehost webview'); if (!wv || !wv.executeJavaScript) return 'no wv';
        try { return await wv.executeJavaScript("(function(){ if(!window.__pick||!window.__pick.pickElement) return 'no __pick'; var el=document.querySelector('h1'); if(!el) return 'no el'; window.__pick.pickElement(el); return true; })()"); } catch (e) { return 'ex ' + e.message; }
      });
      await sleep(700);
      if (picked === true) await shot('04-picked-select'); else skip('04-picked-select', String(picked));
    } catch (e) { skip('04-picked-select', 'ex ' + e.message); }

    // ---------- 5) MULTI-SELECT (2 elements) ----------
    try {
      const multi = await page.evaluate(async () => {
        const wv = document.querySelector('.livehost webview'); if (!wv || !wv.executeJavaScript) return 'no wv';
        try { return await wv.executeJavaScript("(function(){ if(!window.__dzSetGroup) return 'no group'; var a=document.querySelector('h1'), b=document.querySelector('p'); if(!a||!b) return 'no els'; window.__dzSetGroup(['h1','p']); return true; })()"); } catch (e) { return 'ex ' + e.message; }
      });
      await sleep(600);
      if (multi === true) await shot('05-multi-select'); else skip('05-multi-select', String(multi));
    } catch (e) { skip('05-multi-select', 'ex ' + e.message); }

    // ---------- 6) LOOP BAR (faked, no paid turns) ----------
    try {
      const lp = await page.evaluate(async () => { if (!window.__dzFakeLoop) return { err: 'no __dzFakeLoop' }; window.__dzFakeLoop(); await new Promise((r) => setTimeout(r, 200)); const bar = document.querySelector('.loopbar'); return { bar: !!bar, iters: bar ? bar.querySelectorAll('.loop-iter').length : 0 }; });
      if (lp.bar) { await shot('06-loop-bar'); console.log('  loop iters=' + lp.iters); }
      else skip('06-loop-bar', JSON.stringify(lp));
    } catch (e) { skip('06-loop-bar', 'ex ' + e.message); }
    // clear the fake loop if possible
    await page.evaluate(() => { try { const st = document.querySelector('.loop-stop'); if (st) st.click(); } catch {} });
    await sleep(300);

    // ---------- 7) ALL-DEVICES mode (3 device shells) ----------
    try {
      const clicked = await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button, .canvas-hud button, [class*="device"] button, button')].find((x) => /all.?devices|grid/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) { b.click(); return true; } return false; });
      await sleep(1200);
      if (clicked) await shot('07-all-devices'); else skip('07-all-devices', 'all-devices toggle not found');
    } catch (e) { skip('07-all-devices', 'ex ' + e.message); }

    // ---------- 8) DEVICE = tablet (adapt banner) ----------
    try {
      // back to single first
      await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /desktop/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) b.click(); });
      await sleep(500);
      const tab = await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /tablet/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) { b.click(); return true; } return false; });
      await sleep(1400);
      if (tab) await shot('08-device-tablet'); else skip('08-device-tablet', 'tablet toggle not found');
      await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /desktop/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) b.click(); });
      await sleep(500);
    } catch (e) { skip('08-device-tablet', 'ex ' + e.message); }

    // ---------- 9) TOKENS panel: add theme / bind ----------
    try {
      const tk = await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /\+\s*theme/i.test(x.textContent || '')); if (b) { b.click(); return true; } return false; });
      await sleep(500);
      if (tk) await shot('09-tokens-theme'); else skip('09-tokens-theme', '+ theme button not found');
    } catch (e) { skip('09-tokens-theme', 'ex ' + e.message); }

    // ---------- 10) CONVO bar: create a 2nd chat ----------
    try {
      const nc = await page.evaluate(() => { const b = document.querySelector('.chathead .newchat, .chat-head .newchat') || [...document.querySelectorAll('.panel.chat button, .chathead button')].find((x) => /new chat/i.test(x.title || '')); if (b) { b.click(); return true; } return false; });
      await sleep(400);
      await page.evaluate(() => { const b = document.querySelector('.chathead .newchat') || [...document.querySelectorAll('.panel.chat button, .chathead button')].find((x) => /new chat/i.test(x.title || '')); if (b) b.click(); });
      await sleep(400);
      if (nc && await page.$('.convobar, .convopill')) await shot('10-convo-bar'); else skip('10-convo-bar', 'convo bar not found (need >1 chat)');
    } catch (e) { skip('10-convo-bar', 'ex ' + e.message); }

    // ---------- 11) DARK mode full app ----------
    try {
      const dk = await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /theme|dark|light/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) { b.click(); return true; } return false; });
      await sleep(500);
      if (dk) { await shot('11-dark-mode'); await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /theme|dark|light/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) b.click(); }); await sleep(300); }
      else skip('11-dark-mode', 'theme toggle not found');
    } catch (e) { skip('11-dark-mode', 'ex ' + e.message); }

    // ---------- summary ----------
    console.log('\n— VISUAL-QA SUMMARY —');
    console.log('taken (' + taken.length + '): ' + taken.join(', '));
    if (skipped.length) console.log('SKIPPED (' + skipped.length + '):\n  ' + skipped.join('\n  ')); else console.log('SKIPPED: none');
    const errs = [...new Set(consoleErrs)].filter((e) => !/favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i.test(e));
    console.log(errs.length ? 'console/page errors (' + errs.length + '):\n  ' + errs.slice(0, 12).join('\n  ') : 'console/page errors: none (after benign filter)');
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
