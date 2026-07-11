/* R2 axis-G · G1: FULL Solo build + the closed-loop edit cycle (v0.1 core thesis path). FIND-ONLY.
 * Drives the REAL app end-to-end: fresh project → real Solo build (burns tokens; owner-approved) →
 * render probe (imgs by naturalWidth, per the PAIN #19 lesson) → pick → edit via chat → verify the
 * DOM actually changed (the closed loop) → undo/redo → /bake. Reports PASS/FAIL per step + timings.
 * Uses the owner's saved build model (expects Claude; does NOT mutate settings).
 *   cd app && node test/r2-flow-g1-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const ART = path.join(__dirname, 'artifacts', 'r2-g1');
fs.mkdirSync(ART, { recursive: true });

const BRIEF = "Build a one-page landing site for 'Vetka' — a small florist studio in Amsterdam. Warm, editorial, premium feel with real photography. Keep it compact: hero, three offerings, one story section, footer. Real copy, no lorem.";
const BUILD_CAP_MS = 18 * 60 * 1000;
const EDIT_CAP_MS = 8 * 60 * 1000;

const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 300)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const consoleErrs = [];
  const BENIGN = /favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5289, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5289/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error' && !BENIGN.test(m.text())) consoleErrs.push(m.text().slice(0, 200)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 200)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    // fresh project dir (persists after the run so the owner can eyeball the site)
    const projDir = path.join(ART, 'vetka-site');
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);

    // ensure Solo mode for G1 (records prior mode; G2 will use Studio explicitly)
    const priorMode = await page.evaluate(() => {
      const act = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo|studio/i.test(x.textContent) && /active|on(?![a-z])/i.test(x.className));
      return act ? act.textContent.trim().toLowerCase() : null;
    });
    if (priorMode !== 'solo') await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);
    console.log(`[${el()}] prior mode = ${priorMode} (G1 runs Solo; restore to '${priorMode || 'unknown'}' is the session-end debt)`);

    const modelLabel = await page.evaluate(() => { const l = document.querySelector('.modellbl'); return l ? l.textContent.trim() : null; });
    add('model label present (build engine visible)', !!modelLabel, modelLabel);

    // ---- send the brief through the real composer ----
    const sent = await page.evaluate((brief) => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, brief); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    }, BRIEF);
    add('brief submitted via composer', sent);
    await sleep(3000);
    const busyStarted = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
    add('build started (Stop button live)', busyStarted);

    // U5 mode-cover check ~25s in: single-edit/build should show construction cover on canvas
    await sleep(25000);
    const coverInfo = await page.evaluate(() => ({
      cover: !!document.querySelector('[class*="cover"], [class*="constru"], .dz-cover'),
      caption: (document.querySelector('[class*="cover"] [class*="cap"], [class*="constru"]') || {}).textContent || '',
    }));
    console.log(`[${el()}] mid-build cover state: ${JSON.stringify(coverInfo).slice(0, 200)}`);

    // ---- wait for the build to finish ----
    let done = false, art = false, builderLine = false;
    const buildStart = Date.now();
    while (Date.now() - buildStart < BUILD_CAP_MS) {
      await sleep(5000);
      const st = await page.evaluate(() => ({
        busy: !!document.querySelector('.composer .stopbtn'),
        chat: (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(-2500),
      }));
      if (/Art Director/i.test(st.chat)) art = true;
      if (/Builder executing|executing the direction/i.test(st.chat)) builderLine = true;
      if (!st.busy) { done = true; break; }
    }
    add('build finished within cap', done, el());
    add('Art Director line streamed', art);
    add('Builder-executing line streamed', builderLine);

    // ---- artifacts on disk ----
    const idx = path.join(projDir, 'index.html');
    add('index.html written', fs.existsSync(idx), idx);
    const css = fs.readdirSync(projDir).filter((f) => f.endsWith('.css'));
    console.log(`[${el()}] project files: ${fs.readdirSync(projDir).join(', ').slice(0, 300)}`);

    // ---- render probe in the live webview (naturalWidth per PAIN #19) ----
    await sleep(4000);
    const render = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      if (!wv || !wv.executeJavaScript) return { err: 'no webview' };
      try {
        return await wv.executeJavaScript(`(function(){
          const imgs=[...document.images];
          return {
            bodyH: document.body ? document.body.scrollHeight : 0,
            sections: document.querySelectorAll('section, header, footer, main > div').length,
            h1: (document.querySelector('h1')||{}).textContent || '',
            imgs: imgs.length,
            imgsLoaded: imgs.filter(i=>i.naturalWidth>0).length,
            unresolvedGen: [...document.querySelectorAll('[data-gen]')].filter(el=>{
              if (el.tagName==='IMG') return !(el.src && !el.src.startsWith('data:') || el.naturalWidth>0);
              const bg=getComputedStyle(el).backgroundImage; return !bg || bg==='none';
            }).length,
          };})()`);
      } catch (e) { return { err: e.message }; }
    });
    console.log(`[${el()}] render probe: ${JSON.stringify(render)}`);
    add('page renders (bodyH > 800, h1 present)', !render.err && render.bodyH > 800 && !!render.h1, JSON.stringify(render).slice(0, 200));
    add('imagery: all <img> loaded (naturalWidth > 0)', !render.err && (render.imgs === 0 || render.imgsLoaded === render.imgs), `${render.imgsLoaded}/${render.imgs}`);
    add('imagery: no unresolved data-gen slots', !render.err && !render.unresolvedGen, String(render.unresolvedGen));
    await page.screenshot({ path: path.join(ART, 'g1-built.png') });

    const h1Before = render.h1 || '';

    // ---- closed loop: pick the h1 → edit via chat → verify the DOM changed ----
    const picked = await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      if (window.__dzInject) { try { window.__dzInject('move'); } catch {} }
      await sleep(700);
      const wv = document.querySelector('.livehost webview');
      try { return await wv.executeJavaScript("(function(){ if(!window.__pick) return 'no __pick'; var el=document.querySelector('h1'); if(!el) return 'no h1'; window.__pick.pickElement(el); return true; })()"); }
      catch (e) { return 'ex: ' + e.message; }
    });
    await sleep(1200);
    const pickRegistered = await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      return inp ? /picked element/i.test(inp.placeholder || '') : false;
    });
    add('pick registered on host (composer placeholder)', picked === true && pickRegistered, `pick=${picked} placeholder=${pickRegistered}`);

    const editSent = await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, "Change this headline's text to exactly 'Vetka Flowers' (keep style)."); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    });
    add('edit request sent with pick', editSent);
    let editDone = false;
    const editStart = Date.now();
    while (Date.now() - editStart < EDIT_CAP_MS) {
      await sleep(4000);
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy) { editDone = true; break; }
    }
    add('edit turn finished', editDone, el());
    await sleep(3500);
    const h1After = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      try { return await wv.executeJavaScript("(document.querySelector('h1')||{}).textContent || ''"); } catch { return ''; }
    });
    add('CLOSED LOOP: h1 actually changed in the rendered DOM', /Vetka Flowers/i.test(h1After) && h1After !== h1Before, `'${h1Before.slice(0, 40)}' -> '${h1After.slice(0, 40)}'`);
    await page.screenshot({ path: path.join(ART, 'g1-edited.png') });

    // ---- undo / redo (AI history tier) ----
    await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /undo/i.test(x.title || '')); if (b) b.click(); });
    await sleep(3500);
    const h1Undo = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      try { return await wv.executeJavaScript("(document.querySelector('h1')||{}).textContent || ''"); } catch { return ''; }
    });
    add('undo restores the previous headline', h1Undo === h1Before || !/Vetka Flowers/i.test(h1Undo), `'${h1Undo.slice(0, 40)}'`);
    await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /redo/i.test(x.title || '')); if (b) b.click(); });
    await sleep(3500);
    const h1Redo = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      try { return await wv.executeJavaScript("(document.querySelector('h1')||{}).textContent || ''"); } catch { return ''; }
    });
    add('redo re-applies the edit', /Vetka Flowers/i.test(h1Redo), `'${h1Redo.slice(0, 40)}'`);

    // ---- /bake (no manual edits case → honest no-op note) ----
    const bakeRan = await page.evaluate(() => (window.__dzTestSlash ? window.__dzTestSlash('bake', '') : 'no hook'));
    await sleep(2500);
    const lastMsg = await page.evaluate(() => (window.__dzTestLastMsg ? window.__dzTestLastMsg() : ''));
    add('/bake responds (guard or bake note)', bakeRan === true && !!lastMsg, String(lastMsg).slice(0, 120));

    // ---- usage + console health ----
    const usage = await page.evaluate(() => { const u = document.querySelector('.usagebar'); return u ? u.textContent : null; });
    console.log(`[${el()}] usage: ${usage}`);
    add('no unexpected console/page errors', consoleErrs.length === 0, consoleErrs.slice(0, 5).join(' | '));

    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nG1 SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()} total`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
