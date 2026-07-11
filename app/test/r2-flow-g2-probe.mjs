/* R2 axis-G · G2: FULL Studio build (Clarify → Art Director → Builder → Reviewer → Enforcer). FIND-ONLY.
 * Fresh project; Studio mode is SET and LEFT ON afterwards (that is the owner's persisted mode — settles
 * the probe-session debt). Handles a mid-turn ASK gate by picking the first option. Burns tokens (approved).
 *   cd app && node test/r2-flow-g2-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const ART = path.join(__dirname, 'artifacts', 'r2-g2');
fs.mkdirSync(ART, { recursive: true });

const BRIEF = "Build a one-page landing site for 'Nord Sauna' — a small private sauna studio in Tallinn. Calm, nordic, premium; hero, pricing (3 tiers), one ritual/story section, booking CTA, footer. Real copy.";
const CAP = 30 * 60 * 1000;
const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 250)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const consoleErrs = [];
  const BENIGN = /favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5295, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5295/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error' && !BENIGN.test(m.text())) consoleErrs.push(m.text().slice(0, 200)); });
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const projDir = path.join(ART, 'nordsauna-site');
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);

    // Studio ON (and stays on — owner's persisted mode)
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /studio/i.test(x.textContent)); if (b) b.click(); });
    await sleep(400);
    const mode = await page.evaluate(() => { const act = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo|studio/i.test(x.textContent) && /active|on(?![a-z])/i.test(x.className)); return act ? act.textContent.trim() : null; });
    add('Studio mode active', /studio/i.test(mode || ''), mode);

    const sent = await page.evaluate((brief) => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, brief); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    }, BRIEF);
    add('brief submitted', sent);

    // ---- watch the full Studio chain; answer an ASK gate if it appears ----
    let done = false, askAnswered = 0, coverSeen = false;
    const seen = { clarify: false, art: false, builder: false, reviewer: false, enforcer: false, p0: false };
    const s = Date.now();
    while (Date.now() - s < CAP) {
      await sleep(5000);
      const st = await page.evaluate(() => {
        // FULL chat text (not a tail slice) — a tail can miss a marker drowned by the builder's text flood (G1 lesson)
        const chat = (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(0, 120000);
        const askBtns = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((b) => b.offsetParent);
        return { busy: !!document.querySelector('.composer .stopbtn'), tail: chat, asks: askBtns.length,
          cover: !!document.querySelector('[class*="cover"], [class*="constru"], .dz-cover') };
      });
      if (st.cover) coverSeen = true;
      if (/clarif/i.test(st.tail)) seen.clarify = true;
      if (/Art Director/i.test(st.tail)) seen.art = true;
      if (/Builder executing|executing the direction/i.test(st.tail)) seen.builder = true;
      if (/Reviewer|QA review/i.test(st.tail)) seen.reviewer = true;
      if (/Enforcer|enforcement/i.test(st.tail)) seen.enforcer = true;
      if (/P0/i.test(st.tail)) seen.p0 = true;
      if (st.asks > 0) {
        const clicked = await page.evaluate(() => {
          const b = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((x) => x.offsetParent)[0];
          if (b) { const t = b.textContent.trim().slice(0, 60); b.click(); return t; } return null;
        });
        if (clicked) { askAnswered++; console.log(`[${el()}] ASK gate answered: "${clicked}"`); await sleep(1500); }
      }
      if (!st.busy && Date.now() - s > 60000) { done = true; break; }
    }
    add('Studio turn finished within cap', done, el());
    console.log(`[${el()}] chain: ${JSON.stringify(seen)} · asks answered: ${askAnswered}`);
    add('Art Director ran', seen.art);
    add('Builder-executing line streamed', seen.builder);
    add('Reviewer pass ran', seen.reviewer);
    add('U5 construction cover appeared during the build', coverSeen);
    console.log(`[${el()}] enforcer: ${seen.enforcer} (only fires when the review has a P0 block: ${seen.p0})`);

    add('index.html written', fs.existsSync(path.join(projDir, 'index.html')));
    // imagery-lag measurement (G1 lesson: fulfil completes AFTER busy clears; quantify the gap)
    const renderProbe = () => page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      if (!wv || !wv.executeJavaScript) return { err: 'no webview' };
      try {
        return await wv.executeJavaScript(`(function(){ const imgs=[...document.images]; return {
          bodyH: document.body?document.body.scrollHeight:0, h1:(document.querySelector('h1')||{}).textContent||'',
          imgs: imgs.length, imgsLoaded: imgs.filter(i=>i.naturalWidth>0).length };})()`);
      } catch (e) { return { err: e.message }; }
    });
    let render = null, imageryLagS = null;
    const idleAt = Date.now();
    for (let i = 0; i < 24; i++) {
      await sleep(10000);
      render = await renderProbe();
      if (!render.err && render.imgs > 0 && render.imgsLoaded === render.imgs) { imageryLagS = Math.round((Date.now() - idleAt) / 1000); break; }
      if (!render.err && render.imgs === 0 && i >= 2) break;
    }
    console.log(`[${el()}] imagery lag after idle: ${imageryLagS == null ? 'NEVER completed within 4min' : imageryLagS + 's'} · ${JSON.stringify(render)}`);
    add('site renders (bodyH>800, h1)', !render.err && render.bodyH > 800 && !!render.h1, JSON.stringify(render));
    add('imagery eventually loaded (naturalWidth)', !render.err && (render.imgs === 0 || render.imgsLoaded === render.imgs), `${render.imgsLoaded}/${render.imgs} lag=${imageryLagS}s`);
    await page.screenshot({ path: path.join(ART, 'g2-built.png') });

    const usage = await page.evaluate(() => { const u = document.querySelector('.usagebar'); return u ? u.textContent : null; });
    console.log(`[${el()}] usage: ${usage}`);
    add('no unexpected console/page errors', consoleErrs.length === 0, consoleErrs.slice(0, 5).join(' | '));

    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nG2 SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()} · mode left = Studio (owner default)`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
