/* deZign-pro · REAL-SITE reference-pick probe
 * Owner: "the bar hides UNDER the site — load the REAL site I use (https://mont-fort.com/) and check."
 * This drives the FULL flow on a real cross-origin page (not about:blank, not a fake pick):
 *   open Reference → navigate the ref <webview> to mont-fort.com → ARM "Pick element" (real UI) →
 *   dispatch a REAL mousemove+mousedown INSIDE the guest page → wait for the host 200ms poll to read
 *   window.__dzRefPick → handleRefPick → capturePage → the floating bar. Then screenshot the WHOLE window
 *   (Electron composites the webview into the shot) so we can SEE if the bar paints OVER or UNDER the site.
 *
 *   cd app && node test/refsite-probe.mjs   (or: npm run refsite)
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'artifacts');
const SITE = process.env.REF_SITE || 'https://mont-fort.com/';

const log = (s) => console.log(s);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let electronApp = null, previewServer = null;
  const errors = [];

  try {
    log('• building renderer…');
    await build({ root: APP, logLevel: 'error' });
    previewServer = await preview({ root: APP, preview: { port: 5274, strictPort: false } });
    const rendererUrl = (previewServer.resolvedUrls.local[0] || 'http://localhost:5274/').replace(/\/$/, '');
    log('• renderer at ' + rendererUrl);

    electronApp = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: rendererUrl } });
    const page = await electronApp.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    page.on('pageerror', (e) => errors.push('pageerror: ' + (e && e.message)));
    await page.waitForLoadState('domcontentloaded');

    // open the Reference browser (works without a project, as the owner uses it)
    await page.waitForFunction(() => !!document.querySelector('.tb-tools'), { timeout: 15000 });
    await page.evaluate(() => { const b = [...document.querySelectorAll('.tb-tools .pickbtn')].find((x) => /Reference browser/i.test(x.title || '')); if (b) b.click(); });
    await page.waitForSelector('.refbrowser webview', { timeout: 15000 });
    log('• Reference open');

    // navigate the ref webview to the REAL site
    await page.fill('.rb-url input', SITE);
    await page.press('.rb-url input', 'Enter');
    log('• navigating ref webview → ' + SITE);

    // wait for the real page to actually load (poll the guest location); tolerate slow/blocked network
    let loaded = '', t0 = Date.now();
    while (Date.now() - t0 < 40000) {
      await sleep(800);
      try {
        loaded = await page.evaluate(async () => { const wv = document.querySelector('.refbrowser webview'); try { return await wv.executeJavaScript('location.href + " :: ready=" + (document.readyState) + " :: bodyKids=" + (document.body?document.body.children.length:0)'); } catch (e) { return 'EXEC_ERR ' + (e && e.message); } });
      } catch (e) { loaded = 'ERR ' + (e && e.message); }
      if (/mont-fort|montfort/i.test(loaded) && /bodyKids=[1-9]/.test(loaded)) break;
    }
    log('• guest location: ' + loaded);
    const realSiteLoaded = /mont-fort|montfort/i.test(loaded);
    await sleep(1500); // let hero render

    // ARM via the real UI button (sets refPicking → starts the host poll; re-injects REF_PICKER). The arm is async (executeJavaScript) — wait until the guest actually reports armed.
    await page.click('.rb-pick');
    let armedNow = false;
    for (let k = 0; k < 16 && !armedNow; k++) { await sleep(150); armedNow = await page.evaluate(async () => { const wv = document.querySelector('.refbrowser webview'); try { return await wv.executeJavaScript('!!(window.__dzRefActive && window.__dzRefDown)'); } catch (_) { return false; } }); }
    log('• armed (real .rb-pick path): ' + armedNow + (armedNow ? '' : ' — arm did NOT take after the real button click'));

    // dispatch a REAL mousemove+mousedown INSIDE the guest at a visible element → exercises __dzRefMove/__dzRefDown
    const guest = await page.evaluate(async () => {
      const wv = document.querySelector('.refbrowser webview');
      return await wv.executeJavaScript(`(function(){
        var active = !!window.__dzRefActive;
        var picker = !!(window.__dzRefImpl && window.__dzRefDown);
        var el = document.querySelector('h1, header a, nav a, [class*="menu" i], main, section') || document.body;
        var r = el.getBoundingClientRect();
        var cx = Math.round(r.left + Math.min(r.width/2, 200)), cy = Math.round(r.top + Math.min(Math.max(r.height/2, 8), 40));
        el.dispatchEvent(new MouseEvent('mousemove', {bubbles:true, clientX:cx, clientY:cy}));
        el.dispatchEvent(new PointerEvent('pointerdown', {bubbles:true, clientX:cx, clientY:cy}));
        el.dispatchEvent(new MouseEvent('mousedown', {bubbles:true, clientX:cx, clientY:cy}));
        var bar = window.__dzRefBarEl; var barR = bar ? bar.getBoundingClientRect() : null;
        var btns = bar ? bar.querySelectorAll('button').length : 0;
        return JSON.stringify({ armed: active, hasDown: !!window.__dzRefDown, target: el.tagName + (el.className&&typeof el.className==='string'?('.'+el.className.split(/\\s+/)[0]):''), atPoint:(cx+','+cy), refPickSet: !!window.__dzRefPick, refPickLabel: window.__dzRefPick && window.__dzRefPick.label, inGuestBar: !!bar, guestBarBtns: btns, guestBarRect: barR ? {t:Math.round(barR.top),b:Math.round(barR.bottom),l:Math.round(barR.left),r:Math.round(barR.right)} : null, vw: innerWidth, vh: innerHeight });
      })()`);
    });
    log('• guest after click: ' + guest);

    // wait for the host poll (200ms) → handleRefPick → the chat-panel confirmation sysNote (the host-side delivery signal now that the host floating bar was removed)
    let hostChat = false;
    for (let i = 0; i < 12; i++) {
      await sleep(300);
      hostChat = await page.evaluate(() => /Reference captured/i.test(document.body.innerText || ''));
      if (hostChat) break;
    }
    log('• host chat confirmation: ' + (hostChat ? 'YES ("Reference captured" line in the chat panel)' : 'NO'));

    await page.screenshot({ path: path.join(OUT, 'refsite-probe.png') }).catch(() => {});
    log('• screenshot → test/artifacts/refsite-probe.png');

    // exercise the IN-GUEST action channel (non-invasive: "Pick another" → re-arm, no agent call). Read window.__dzRefAction SYNCHRONOUSLY after .click() (before the host 200ms poll clears it).
    const action = await page.evaluate(async () => {
      const wv = document.querySelector('.refbrowser webview');
      return await wv.executeJavaScript(`(function(){ var bar=window.__dzRefBarEl; if(!bar)return 'NO_BAR'; var b=[].slice.call(bar.querySelectorAll('button')).find(function(x){return /Pick another/i.test(x.textContent)}); if(!b)return 'NO_AGAIN_BTN'; b.click(); return 'clicked Pick-another, action=' + (window.__dzRefAction||'(null/consumed)'); })()`);
    });
    log('• in-guest action channel: ' + action);
    log('• console/page errors: ' + (errors.length ? errors.slice(0, 8).join(' | ') : 'none'));

    // verdict
    log('\n=== VERDICT ===');
    let g = {}; try { g = JSON.parse(guest); } catch {}
    const guestBarOK = !!(g.inGuestBar && g.guestBarBtns === 4);
    log('real site loaded : ' + realSiteLoaded + '  (' + loaded + ')');
    log('IN-GUEST bar     : ' + (guestBarOK ? ('YES — ' + g.guestBarBtns + ' buttons, rect ' + JSON.stringify(g.guestBarRect) + ' (in the SITE layer → webview cannot hide it) — the ONLY ref bar now') : 'NO (the click never reached the picker in the guest)'));
    log('action channel   : ' + (/action=again/.test(action) ? 'YES (button → window.__dzRefAction)' : 'NO (' + action + ')'));
    log('host delivery    : ' + (hostChat ? 'YES (chat sysNote)' : 'NO (pick never reached the host poll)'));
    log('VERDICT          : ' + (guestBarOK && hostChat ? 'PASS — single in-guest bar visible + host confirms' : 'CHECK — see fields above + screenshot'));
  } catch (e) {
    log('PROBE ERROR: ' + (e && e.stack || e));
  } finally {
    try { await electronApp?.close(); } catch {}
    try { await previewServer?.close(); } catch {}
    process.exit(0);
  }
})();
