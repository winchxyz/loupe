/* R2 axes E/F · screenshot CATALOG probe — captures every host-chrome panel/state for a cold-eye
 * design review, incl. empty states and the experimental-OFF "stranger pass". FIND-ONLY: takes
 * screenshots + logs SKIPPED shots loudly (a missing selector must never silently shrink coverage —
 * lesson: the stale .chat-settings skip in r2-scale-probe).
 * Mutations: ONLY the experimental toggle (restored ON) and the Solo/Studio header toggle (restored Solo).
 * Run serially with other probes (shared vite dist + settings store):  cd app && node test/r2-shots-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');
const OUT = path.join(__dirname, 'artifacts', 'r2-shots');
fs.mkdirSync(OUT, { recursive: true });

const skipped = [];
const taken = [];

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const consoleErrs = [];
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5285, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5285/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 160)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 160)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });

    await app.evaluate(async ({ BrowserWindow }) => {
      const w = BrowserWindow.getAllWindows()[0];
      if (w) { const b = w.getBounds(); w.setBounds({ x: b.x, y: b.y, width: 1440, height: 900 }); }
      await new Promise((r) => setTimeout(r, 250));
    });

    const sleep = (ms) => page.waitForTimeout(ms);
    const shot = async (name) => { const p = path.join(OUT, name + '.png'); await page.screenshot({ path: p }); taken.push(name); console.log('SHOT  ' + name); };
    const clickSel = async (sel, wait = 300) => {
      const ok = await page.evaluate((s) => { const el = document.querySelector(s); if (el) { el.click(); return true; } return false; }, sel);
      await sleep(wait);
      return ok;
    };
    const skip = (name, why) => { skipped.push(name + ' — ' + why); console.log('SKIP  ' + name + ' — ' + why); };

    // ---------- 1) EMPTY STATE first (before the fixture opens) ----------
    await shot('00-boot-initial');

    // empty project: a fresh temp dir with nothing in it
    const emptyDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-r2-empty-'));
    await page.evaluate((d) => window.__dzReopen(d), emptyDir);
    await sleep(1500);
    await shot('01-empty-project');

    // ---------- 2) fixture project: main states ----------
    await page.evaluate((d) => window.__dzReopen(d), FIXTURE);
    await sleep(1800);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    await shot('02-main-default');

    // Solo/Studio header toggle states — buildMode PERSISTS (App.jsx ~:2675), so restore the
    // owner's INITIAL mode, never assume Solo (lesson: the first run silently flipped Studio→Solo)
    const initMode = await page.evaluate(() => {
      const act = [...document.querySelectorAll('.panel.chat .mt-b, .chathead .mt-b, .chat-head .mt-b')].find((x) => /solo|studio/i.test(x.textContent) && /active|on|sel/i.test(x.className));
      return act ? act.textContent.trim() : null;
    });
    const clickMode = (name) => page.evaluate((name) => {
      const b = [...document.querySelectorAll('.panel.chat .mt-b, .chathead .mt-b, .chat-head .mt-b')].find((x) => new RegExp(name, 'i').test(x.textContent));
      if (b) { b.click(); return true; } return false;
    }, name);
    const other = /studio/i.test(initMode || '') ? 'solo' : 'studio';
    const modeSwitched = await clickMode(other);
    await sleep(300);
    if (modeSwitched) {
      await shot('03-' + other + '-mode');
      if (initMode) { await clickMode(initMode); await sleep(250); console.log('mode restored to initial: ' + initMode); }
      else console.log('WARN could not read the initial mode — left as ' + other);
    } else skip('03-mode-toggle', 'no Solo/Studio toggle button found');

    // slash autocomplete open — the composer is an <input> (App.jsx ~:5125), not a textarea
    const setComposer = (v) => page.evaluate((v) => {
      const inp = document.querySelector('.composer input');
      if (!inp) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, v); inp.dispatchEvent(new Event('input', { bubbles: true })); return true;
    }, v);
    const slashOpen = await setComposer('/');
    await sleep(350);
    if (slashOpen) { await shot('04-slash-menu'); await setComposer(''); }
    else skip('04-slash-menu', 'no .composer input');

    // ---------- 3) settings modal — every rail category ----------
    if (await clickSel('.tb-settings', 400) && await page.$('.settings-modal')) {
      const cats = await page.evaluate(() => [...document.querySelectorAll('.settings-modal .set-cat')].map((x) => x.textContent.trim()));
      console.log('rail categories: ' + JSON.stringify(cats));
      for (const c of cats) {
        await page.evaluate((label) => { const b = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => x.textContent.trim() === label); if (b) b.click(); }, c);
        await sleep(250);
        await shot('05-settings-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
      }
      await clickSel('.set-x', 250);
    } else skip('05-settings-*', 'gear .tb-settings or modal not found');

    // ---------- 4) non-index tab (Apply to site) ----------
    const nonIndex = await page.evaluate(() => {
      const r = [...document.querySelectorAll('.pagerow')].find((x) => !/index\.html/.test(x.getAttribute('title') || ''));
      if (r) { r.click(); return r.getAttribute('title'); } return null;
    });
    await sleep(700);
    if (nonIndex) await shot('06-nonindex-tab'); else skip('06-nonindex-tab', 'no non-index pagerow');

    // ---------- 5) build log viewer (exp ON default) ----------
    if (await clickSel('.buildlogbtn', 500) && await page.$('.buildlog, .buildlog-modal, [class*="buildlog"]')) {
      await shot('07-buildlog');
      await page.keyboard.press('Escape'); await sleep(250);
    } else skip('07-buildlog', '≡ .buildlogbtn missing or viewer did not open');

    // ---------- 6) reference browser (exp ON) ----------
    const refOpened = await page.evaluate(() => {
      const b = document.querySelector('.tb-ref') || [...document.querySelectorAll('.topbar button, .tb-tools button')].find((x) => /reference/i.test(x.title || x.textContent || ''));
      if (b) { b.click(); return true; } return false;
    });
    await sleep(600);
    if (refOpened) {
      await shot('08-reference-open');
      await page.evaluate(() => { const b = document.querySelector('.tb-ref') || [...document.querySelectorAll('.topbar button, .tb-tools button')].find((x) => /reference/i.test(x.title || x.textContent || '')); if (b) b.click(); });
      await sleep(300);
    } else skip('08-reference-open', 'no reference toggle button found');

    // ---------- 7) draw mode ----------
    await page.evaluate(() => { const r = [...document.querySelectorAll('.pagerow')].find((x) => /index\.html/.test(x.getAttribute('title') || '')); if (r) r.click(); });
    await sleep(500);
    const drawOn = await page.evaluate(() => {
      const b = [...document.querySelectorAll('button')].find((x) => /draw/i.test(x.title || '') || /draw/i.test(x.getAttribute('aria-label') || ''));
      if (b) { b.click(); return true; } return false;
    });
    await sleep(400);
    if (drawOn && await page.$('[class*="drawbar"], [class*="draw-bar"]')) {
      await shot('09-draw-mode');
      await page.keyboard.press('Escape'); await sleep(250);
    } else skip('09-draw-mode', 'draw button/drawbar not found');

    // ---------- 8) pick an element → edit toolbar + breadcrumb + quick-edit popup ----------
    const picked = await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wv = document.querySelector('.livehost webview');
      if (!wv || !wv.executeJavaScript) return 'no webview';
      if (window.__dzInject) { try { window.__dzInject('move'); } catch {} }
      await sleep(600);
      try {
        const ok = await wv.executeJavaScript("(function(){ if(!window.__pick||!window.__pick.pickElement) return 'no __pick'; var el=document.querySelector('h1,h2,section,main,div'); if(!el) return 'no el'; window.__pick.pickElement(el); return true; })()");
        return ok;
      } catch (e) { return 'ex: ' + e.message; }
    });
    await sleep(700);
    if (picked === true) await shot('10-picked-element'); else skip('10-picked-element', String(picked));

    // ---------- 9) STRANGER PASS: experimental OFF ----------
    const flip = async (wantOn) => page.evaluate(async (wantOn) => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const gear = document.querySelector('.tb-settings'); if (!gear) return 'no gear';
      gear.click(); await sleep(350);
      const b = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => x.textContent.trim() === 'General');
      if (b) b.click(); await sleep(200);
      const cb = document.querySelector('.set-exptoggle input[type="checkbox"]');
      if (!cb) return 'no toggle';
      if (cb.checked !== wantOn) { cb.click(); await sleep(120); }
      const x = document.querySelector('.set-x'); if (x) x.click(); await sleep(250);
      return true;
    }, wantOn);

    const off = await flip(false);
    if (off === true) {
      await sleep(300);
      await shot('11-expoff-main');
      // slash menu under OFF (should hide EXP_CMDS)
      await setComposer('/');
      await sleep(350);
      await shot('12-expoff-slash-menu');
      await setComposer('');
      // settings rail under OFF (Swarm must be gone)
      if (await clickSel('.tb-settings', 400)) {
        const catsOff = await page.evaluate(() => [...document.querySelectorAll('.settings-modal .set-cat')].map((x) => x.textContent.trim()));
        console.log('rail categories (exp OFF): ' + JSON.stringify(catsOff));
        await shot('13-expoff-settings');
        await clickSel('.set-x', 250);
      }
      // non-index tab under OFF — the Apply-to-site leak surface
      await page.evaluate(() => { const r = [...document.querySelectorAll('.pagerow')].find((x) => !/index\.html/.test(x.getAttribute('title') || '')); if (r) r.click(); });
      await sleep(600);
      await shot('14-expoff-nonindex-tab');
      const applyVisible = await page.evaluate(() => !![...document.querySelectorAll('button')].find((x) => /apply to site/i.test(x.textContent || '')));
      console.log('exp OFF · Apply-to-site button visible on non-index tab: ' + applyVisible + '  (leak A check)');
      const restored = await flip(true);
      console.log('experimental toggle restored ON: ' + (restored === true));
    } else skip('11..14-expoff-*', 'could not flip toggle: ' + off);

    // ---------- summary ----------
    console.log('\n— SHOTS SUMMARY —');
    console.log('taken (' + taken.length + '): ' + taken.join(', '));
    if (skipped.length) console.log('SKIPPED (' + skipped.length + '):\n  ' + skipped.join('\n  '));
    else console.log('SKIPPED: none');
    const errs = [...new Set(consoleErrs)].filter((e) => !/favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i.test(e));
    console.log(errs.length ? 'console/page errors (' + errs.length + '):\n  ' + errs.slice(0, 12).join('\n  ') : 'console/page errors: none (after benign filter)');
    try { fs.rmSync(emptyDir, { recursive: true, force: true }); } catch {}
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
