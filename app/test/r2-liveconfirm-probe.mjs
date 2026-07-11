/* R2 · live-confirm probe for disputed/needs-live-probe findings (FIND-ONLY, no app edits).
 * Confirms or refutes with the RENDERED DOM (instrument, don't guess):
 *  1. Reference tool visibility with experimental OFF (static says gated :4792, screenshots say visible)
 *  2. Layers panel staleness after switching the active page
 *  3. Topbar external-URL input hijacking the MAIN preview webview
 *  4. Draw mode: does Escape close it?
 *  5. All-devices mode: pick/draw/export controls left enabled while the main webview is hidden
 * Mutations: experimental toggle (restored ON), draw/all-devices toggles (restored), preview nav (restored via reopen).
 *   cd app && node test/r2-liveconfirm-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');

const out = [];
const say = (k, v) => { out.push([k, v]); console.log(k.padEnd(46), JSON.stringify(v)); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5287, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5287/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await page.evaluate((d) => window.__dzReopen(d), FIXTURE);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    await page.waitForTimeout(1500);
    const sleep = (ms) => page.waitForTimeout(ms);

    const refButtons = () => page.evaluate(() => {
      const btns = [...document.querySelectorAll('button')].filter((b) => /reference/i.test((b.title || '') + ' ' + (b.textContent || '')));
      return btns.map((b) => ({ cls: (b.className || '').split(/\s+/).slice(0, 2).join('.'), txt: (b.textContent || '').trim().slice(0, 20), vis: !!(b.offsetWidth || b.offsetHeight) }));
    });
    const flipExp = (wantOn) => page.evaluate(async (wantOn) => {
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

    // ---------- 1) Reference visibility at exp ON vs OFF ----------
    say('1.refButtons expON', await refButtons());
    say('1.flip OFF', await flipExp(false));
    await sleep(400);
    say('1.refButtons expOFF', await refButtons());
    say('1.buildlogbtn expOFF (must be false)', await page.evaluate(() => !!document.querySelector('.buildlogbtn')));
    say('1.flip back ON', await flipExp(true));

    // ---------- 2) Layers staleness across page switch ----------
    const layersRows = () => page.evaluate(() => [...document.querySelectorAll('.layers .lrow, [class*="layer"] [class*="row"], .layerrow')].map((r) => (r.textContent || '').trim().slice(0, 40)).slice(0, 8));
    const clickPage = (rx) => page.evaluate((rx) => {
      const r = [...document.querySelectorAll('.pagerow')].find((x) => new RegExp(rx).test(x.getAttribute('title') || ''));
      if (r) { r.click(); return r.getAttribute('title'); } return null;
    }, rx);
    await clickPage('about\\.html'); await sleep(1800);
    const layersAfterAbout = await layersRows();
    say('2.layers after ABOUT active', layersAfterAbout);
    await clickPage('index\\.html'); await sleep(1800);
    const layersAfterIndex = await layersRows();
    say('2.layers after INDEX active', layersAfterIndex);
    say('2.layers stale (still shows About footer)', JSON.stringify(layersAfterIndex).includes('About'));

    // ---------- 3) Topbar external-URL input hijacks MAIN preview ----------
    const openRef = () => page.evaluate(() => { const b = document.querySelector('.tb-ref') || [...document.querySelectorAll('button')].find((x) => /reference/i.test(x.title || x.textContent || '')); if (b) { b.click(); return true; } return false; });
    if (await openRef()) {
      await sleep(600);
      const urlbarInfo = await page.evaluate(() => {
        const inp = [...document.querySelectorAll('.topbar input')].find((i) => /external url/i.test(i.placeholder || ''));
        return inp ? { found: true, placeholder: inp.placeholder } : { found: false };
      });
      say('3.topbar urlbar input', urlbarInfo);
      if (urlbarInfo.found) {
        const srcBefore = await page.evaluate(() => { const wv = document.querySelector('.livehost webview'); return wv ? wv.getAttribute('src') : null; });
        await page.evaluate(() => {
          const inp = [...document.querySelectorAll('.topbar input')].find((i) => /external url/i.test(i.placeholder || ''));
          const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          set.call(inp, 'https://example.com'); inp.dispatchEvent(new Event('input', { bubbles: true }));
          const form = inp.closest('form');
          if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          else inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        });
        await sleep(1200);
        const srcAfter = await page.evaluate(() => { const wv = document.querySelector('.livehost webview'); return wv ? wv.getAttribute('src') : null; });
        say('3.main webview src before', srcBefore);
        say('3.main webview src after Enter', srcAfter);
        say('3.MAIN PREVIEW HIJACKED', srcBefore !== srcAfter && /example\.com/.test(srcAfter || ''));
      }
      await openRef(); // close reference
      await sleep(300);
      await page.evaluate((d) => window.__dzReopen(d), FIXTURE); // restore preview
      await sleep(1200);
    } else say('3.reference open', 'no reference button found');

    // ---------- 4) Draw mode vs Escape ----------
    const drawState = () => page.evaluate(() => ({
      barVisible: !!document.querySelector('[class*="drawbar"], [class*="draw-bar"]'),
      btnActive: (() => { const b = [...document.querySelectorAll('button')].find((x) => /draw/i.test(x.title || x.getAttribute('aria-label') || '') && !/redraw/i.test(x.title || '')); return b ? /active|on(?![a-z])/.test(b.className) : null; })(),
    }));
    await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /draw/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) b.click(); });
    await sleep(400);
    say('4.draw ON state', await drawState());
    await page.keyboard.press('Escape');
    await sleep(350);
    const afterEsc = await drawState();
    say('4.after Escape', afterEsc);
    say('4.ESCAPE DOES NOT CLOSE DRAW', afterEsc.barVisible === true);
    await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /draw/i.test(x.title || x.getAttribute('aria-label') || '')); if (b) b.click(); });
    await sleep(300);
    say('4.after toggle-off click', await drawState());

    // ---------- 5) All-devices mode: controls left armed while main webview hidden ----------
    const allDev = await page.evaluate(() => {
      const b = [...document.querySelectorAll('button')].find((x) => /all devices|all-devices/i.test(x.title || x.textContent || ''));
      if (b) { b.click(); return true; } return false;
    });
    await sleep(900);
    if (allDev) {
      const st = await page.evaluate(() => {
        const q = (rx) => { const b = [...document.querySelectorAll('button')].find((x) => new RegExp(rx, 'i').test(x.title || x.textContent || '')); return b ? { disabled: b.disabled, cls: /active/.test(b.className) } : null; };
        const wv = document.querySelector('.livehost webview');
        return {
          mainWebviewHidden: wv ? getComputedStyle(wv.closest('.livehost') || wv).display === 'none' : 'no wv',
          selectBtn: q('^select$|select tool'), drawBtn: q('draw'), exportVisible: !!document.querySelector('[title*="Export" i]'),
        };
      });
      say('5.all-devices state', st);
      await page.evaluate(() => {
        const b = [...document.querySelectorAll('button')].find((x) => /all devices|all-devices/i.test(x.title || x.textContent || ''));
        if (b) b.click();
      });
      await sleep(400);
    } else say('5.all-devices', 'toggle not found');

    console.log('\nDONE - live-confirm complete');
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
