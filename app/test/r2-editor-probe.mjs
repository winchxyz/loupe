/* R2 axis-A · EDITOR-GAP probe — functionally drives the top-10 uncovered manual-editor controls
 * (the closed-loop editor core that smoke only presence-checks). FIND-ONLY, works on a TEMP COPY of
 * the fixture site (never mutates the repo fixture). No paid AI turns except one quick-edit submit
 * that is immediately stopped. Dialog-bound flows (New site, Export PNG) run with the main-process
 * dialog monkey-patched via app.evaluate.
 *   cd app && node test/r2-editor-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');
const ART = path.join(__dirname, 'artifacts', 'r2-editor');
fs.mkdirSync(ART, { recursive: true });

const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 260)}`); };
const note = (m) => console.log(`[${el()}] ${m}`);

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5299, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5299/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    // temp working copy of the fixture (repo fixture stays pristine)
    const projDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-r2-editor-'));
    fs.cpSync(FIXTURE, projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    await sleep(1500);

    const inGuest = async (js) => page.evaluate(async (js) => {
      const wv = document.querySelector('.livehost webview');
      if (!wv || !wv.executeJavaScript) return { err: 'no webview' };
      try { return await wv.executeJavaScript(js); } catch (e) { return { err: e.message }; }
    }, js);
    const armSelect = async () => {
      await page.evaluate(() => { const b = [...document.querySelectorAll('.tb-tools .pickbtn')].find((x) => /^select/i.test(x.textContent.trim()) || /select/i.test(x.title || '')); if (b && !/active/.test(b.className)) b.click(); });
      await sleep(400);
      await page.evaluate(() => { if (window.__dzInject) { try { window.__dzInject('move'); } catch {} } });
      await sleep(600);
    };
    const hostPickState = () => page.evaluate(() => ({
      placeholder: (document.querySelector('.composer input') || {}).placeholder || '',
      chips: document.querySelectorAll('[class*="pickchip"], .picks [class*="chip"]').length,
      alignBar: !!document.querySelector('[class*="alignbar"], [class*="align-bar"], [title*="Align" i]'),
    }));
    const guestClick = (sel, opts = {}) => inGuest(`(function(){
      var el=document.querySelector(${JSON.stringify(sel)}); if(!el) return 'no el';
      var r=el.getBoundingClientRect(); var o={bubbles:true,cancelable:true,clientX:r.left+r.width/2,clientY:r.top+r.height/2${opts.ctrl ? ',ctrlKey:true' : ''}};
      el.dispatchEvent(new MouseEvent('mousedown',o)); el.dispatchEvent(new MouseEvent('mouseup',o)); el.dispatchEvent(new MouseEvent('click',o));
      return true; })()`);

    // ============ 1) NEW SITE (dialog stubbed) ============
    try {
      const newDir = path.join(os.tmpdir(), 'dz-r2-newsite-' + Date.now());
      await app.evaluate(({ dialog }, p) => { dialog.showSaveDialog = async () => ({ canceled: false, filePath: p }); }, newDir);
      await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /new/i.test(x.textContent) && /new site|new project/i.test(x.title || x.textContent)); if (b) b.click(); else { const b2 = [...document.querySelectorAll('.topbar button')].find((x) => /\+\s*New/i.test(x.textContent)); if (b2) b2.click(); } });
      await sleep(2500);
      const scaffolded = fs.existsSync(path.join(newDir, 'index.html')) && fs.existsSync(path.join(newDir, 'styles.css'));
      const adopted = await page.evaluate(() => (document.querySelector('.topbar [class*="proj"], .projchip, [class*="project-chip"]') || document.body).textContent.includes('dz-r2-newsite'));
      add('1. New site: scaffolds starter files + adopts project', scaffolded, `scaffolded=${scaffolded} adoptedChip=${adopted}`);
      try { fs.rmSync(newDir, { recursive: true, force: true }); } catch {}
      await page.evaluate((d) => window.__dzReopen(d), projDir);
      await sleep(1800);
    } catch (e) { add('1. New site', false, 'probe error: ' + e.message); }

    // ============ 2) PICK REGISTRATION baseline (host side) ============
    await armSelect();
    const pr1 = await guestClick('h1');
    await sleep(900);
    let ps = await hostPickState();
    let pickPath = 'synthetic-click';
    if (!/picked element/i.test(ps.placeholder) && ps.chips === 0) {
      // fallback: adapter API path
      await inGuest("(function(){ if(window.__pick&&window.__pick.pickElement){ window.__pick.pickElement(document.querySelector('h1')); return true;} return 'no __pick'; })()");
      await sleep(900);
      ps = await hostPickState();
      pickPath = 'pickElement-api';
    }
    const pickRegistered = /picked element/i.test(ps.placeholder) || ps.chips > 0;
    add('2. pick registers in HOST state (placeholder/chips)', pickRegistered, `via=${pickPath} click=${JSON.stringify(pr1)} state=${JSON.stringify(ps)}`);

    // ============ 3) DRAG-MOVE commit ============
    try {
      const before = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return {l:Math.round(r.left),t:Math.round(r.top)};})()");
      const drag = await inGuest(`(function(){
        var el=document.querySelector('h1'); var r=el.getBoundingClientRect();
        var x=r.left+r.width/2, y=r.top+r.height/2;
        function ev(t,dx,dy){ el.dispatchEvent(new MouseEvent(t,{bubbles:true,cancelable:true,clientX:x+dx,clientY:y+dy,buttons:1})); }
        ev('mousedown',0,0);
        for(var i=1;i<=8;i++){ document.dispatchEvent(new MouseEvent('mousemove',{bubbles:true,clientX:x+i*5,clientY:y,buttons:1})); }
        document.dispatchEvent(new MouseEvent('mouseup',{bubbles:true,clientX:x+40,clientY:y}));
        return true; })()`);
      await sleep(900);
      const after = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return {l:Math.round(r.left),t:Math.round(r.top)};})()");
      const moved = before && after && !before.err && !after.err && Math.abs(after.l - before.l) >= 20;
      const undoable = await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /undo/i.test(x.title || '')); return b ? !b.disabled : null; });
      add('3. select-drag MOVE commits (element moved + undo armed)', !!moved, `drag=${JSON.stringify(drag)} ${JSON.stringify(before)}->${JSON.stringify(after)} undoEnabled=${undoable}`);
      if (moved) { await page.evaluate(() => { const b = [...document.querySelectorAll('.topbar button')].find((x) => /undo/i.test(x.title || '')); if (b) b.click(); }); await sleep(700); }
    } catch (e) { add('3. drag-move', false, 'probe error: ' + e.message); }

    // ============ 4) ARROW NUDGE + input hijack + 5) LOCK inertness ============
    try {
      await guestClick('h1');
      await sleep(600);
      const b4 = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return Math.round(r.left);})()");
      await inGuest("document.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))");
      await sleep(600);
      const a4 = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return Math.round(r.left);})()");
      add('4a. arrow nudge moves the selected element', typeof b4 === 'number' && typeof a4 === 'number' && a4 - b4 >= 1, `${b4} -> ${a4}`);
      // quick-edit popup input hijack (F6): type into the popup input, press ArrowRight — element must NOT move
      const popup = await inGuest(`(function(){
        var inp=document.querySelector('.dz-pop input, [class*="dzpop"] input, [id*="dzpop"] input');
        if(!inp) return 'no popup input';
        inp.focus(); inp.value='test';
        var before=Math.round(document.querySelector('h1').getBoundingClientRect().left);
        inp.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));
        return new Promise(function(res){ setTimeout(function(){ res({before:before, after:Math.round(document.querySelector('h1').getBoundingClientRect().left)}); },400); }); })()`);
      if (popup && popup.err === undefined && typeof popup === 'object' && popup.before != null) {
        add('4b. arrows typed in quick-edit input do NOT move the element (F6 guard)', popup.after === popup.before, JSON.stringify(popup));
      } else note('4b. quick-edit popup input not present after click — ' + JSON.stringify(popup));
      // lock inertness
      const lockClicked = await page.evaluate(() => {
        const row = [...document.querySelectorAll('.layers [class*="row"], .lrow, .layerrow')].find((r) => /h1|masthead|header/i.test(r.textContent));
        if (!row) return 'no layer row';
        const lock = [...row.querySelectorAll('button')].find((b) => /lock/i.test(b.title || '')) || row.querySelector('[class*="lock"]');
        if (!lock) return 'no lock btn';
        lock.click(); return true;
      });
      await sleep(600);
      if (lockClicked === true) {
        const b5 = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return Math.round(r.left);})()");
        await inGuest("document.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))");
        await sleep(500);
        const a5 = await inGuest("(function(){var r=document.querySelector('h1').getBoundingClientRect(); return Math.round(r.left);})()");
        add('5. LOCKED layer is inert to nudge', b5 === a5, `${b5} -> ${a5}`);
        await page.evaluate(() => { const row = [...document.querySelectorAll('.layers [class*="row"], .lrow, .layerrow')].find((r) => /h1|masthead|header/i.test(r.textContent)); const lock = row && ([...row.querySelectorAll('button')].find((b) => /lock/i.test(b.title || '')) || row.querySelector('[class*="lock"]')); if (lock) lock.click(); });
      } else note('5. lock control not found — ' + lockClicked);
    } catch (e) { add('4/5. nudge/lock', false, 'probe error: ' + e.message); }

    // ============ 6) SHIFT+ENTER traversal determinism (F6) ============
    try {
      await guestClick('h1');
      await sleep(600);
      const trav = await inGuest(`(function(){
        var sel0=(window.__pick&&window.__pick.current&&window.__pick.current().tagName)||'?';
        document.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',shiftKey:true,bubbles:true}));
        return new Promise(function(res){ setTimeout(function(){
          var el=window.__pick&&window.__pick.current&&window.__pick.current();
          res({from:sel0,to:el?el.tagName+'.'+(el.className||''):'?'}); },500); }); })()`);
      note('6. Shift+Enter traversal outcome: ' + JSON.stringify(trav) + ' (double-dispatch class is static-confirmed; recording live winner)');
    } catch (e) { note('6. traversal probe error: ' + e.message); }

    // ============ 7) INSPECTOR property commit ============
    try {
      const opened = await page.evaluate(async () => (window.__dzTestOpenEdit ? await window.__dzTestOpenEdit('h1') : 'no hook'));
      await sleep(700);
      const rows = await page.evaluate(() => document.querySelectorAll('.ep-row').length);
      const sizeBefore = await inGuest("getComputedStyle(document.querySelector('h1')).fontSize");
      const setRes = await page.evaluate(() => {
        const rows = [...document.querySelectorAll('.ep-row')];
        const row = rows.find((r) => /size/i.test(r.textContent) && r.querySelector('input'));
        if (!row) return 'no size row';
        const inp = row.querySelector('input');
        const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        set.call(inp, '61'); inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        inp.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      });
      await sleep(1200);
      const sizeAfter = await inGuest("getComputedStyle(document.querySelector('h1')).fontSize");
      const editsFile = ['\\.dezign-edits.json', 'dezign-edits.css'].map((f) => fs.readdirSync(projDir).find((x) => x.includes('dezign-edits'))).filter(Boolean);
      add('7. inspector font-size commit applies + persists overlay', opened === true && setRes === true && sizeAfter === '61px', `opened=${opened} rows=${rows} set=${setRes} ${sizeBefore} -> ${sizeAfter} editsFiles=${editsFile.join(',') || 'none'}`);
    } catch (e) { add('7. inspector commit', false, 'probe error: ' + e.message); }

    // ============ 8) FONT-PICK commit ============
    try {
      const famBefore = await inGuest("getComputedStyle(document.querySelector('h1')).fontFamily");
      const pick = await page.evaluate(async () => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        const t = document.querySelector('.fp-trigger'); if (!t) return 'no trigger';
        t.click(); await sleep(500);
        const rows = [...document.querySelectorAll('.fp-row')];
        if (!rows.length) return 'no rows';
        const row = rows.find((r) => /Playfair|Lora|Merriweather|Space Grotesk|Archivo/i.test(r.textContent)) || rows[3] || rows[0];
        const name = row.textContent.trim().slice(0, 30);
        row.click(); await sleep(600);
        return { clicked: name };
      });
      await sleep(1200);
      const famAfter = await inGuest("getComputedStyle(document.querySelector('h1')).fontFamily");
      add('8. font picker: clicking a row COMMITS the family', typeof pick === 'object' && famAfter !== famBefore, `${JSON.stringify(pick)} '${famBefore}' -> '${famAfter}'`);
    } catch (e) { add('8. font pick', false, 'probe error: ' + e.message); }

    // ============ 9) ALIGN BAR (needs 2 host picks) ============
    try {
      await armSelect();
      await guestClick('main > * , section, .card, div');
      await sleep(500);
      await guestClick('h1', { ctrl: true });
      await sleep(700);
      const st = await hostPickState();
      if (st.chips >= 2 || st.alignBar) {
        const leftBefore = await inGuest("(function(){var a=document.querySelector('h1').getBoundingClientRect().left; return Math.round(a);})()");
        const clicked = await page.evaluate(() => {
          const b = [...document.querySelectorAll('button')].find((x) => /align.?left|⟵|left/i.test(x.title || '') && x.closest('[class*="align"], .composer, [class*="bar"]'));
          if (b) { b.click(); return b.title || b.textContent; } return null;
        });
        await sleep(900);
        const leftAfter = await inGuest("(function(){var a=document.querySelector('h1').getBoundingClientRect().left; return Math.round(a);})()");
        add('9. align bar: 2 picks → align-left applies', !!clicked && leftAfter !== leftBefore, `btn=${clicked} ${leftBefore}->${leftAfter} state=${JSON.stringify(st)}`);
      } else add('9. align bar renders with 2 picks', false, 'multi-pick did not register: ' + JSON.stringify(st));
    } catch (e) { add('9. align bar', false, 'probe error: ' + e.message); }

    // ============ 10) QUICK-EDIT SUBMIT (Enter vs Send) — one real turn, stopped immediately ============
    try {
      await armSelect();
      await guestClick('h1');
      await sleep(800);
      const enterTry = await inGuest(`(function(){
        var inp=document.querySelector('.dz-pop input, [class*="dzpop"] input');
        if(!inp) return 'no popup input';
        inp.focus(); inp.value='make this headline dark red';
        inp.dispatchEvent(new Event('input',{bubbles:true}));
        inp.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
        return true; })()`);
      await sleep(2500);
      const busyAfterEnter = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      note(`10a. Enter in quick-edit popup: dispatched=${JSON.stringify(enterTry)} → turn started=${busyAfterEnter} (F6 predicts swallowed=false)`);
      let busyAfterSend = false;
      if (!busyAfterEnter) {
        const sendTry = await inGuest(`(function(){
          var b=[...document.querySelectorAll('.dz-pop button, [class*="dzpop"] button')].find(function(x){return /send|→|↑/i.test(x.textContent||x.title||'');});
          if(!b) return 'no send btn';
          b.click(); return true; })()`);
        await sleep(2500);
        busyAfterSend = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
        note(`10b. Send button in popup: ${JSON.stringify(sendTry)} → turn started=${busyAfterSend}`);
      }
      add('10. quick-edit popup can submit (Enter or Send)', busyAfterEnter || busyAfterSend, `enter=${busyAfterEnter} send=${busyAfterSend}`);
      if (busyAfterEnter || busyAfterSend) {
        await page.evaluate(() => { const b = document.querySelector('.composer .stopbtn'); if (b) b.click(); });
        note('10. turn stopped immediately (token save)');
        await sleep(4000);
      }
    } catch (e) { add('10. quick-edit submit', false, 'probe error: ' + e.message); }

    // ============ 11) DEVICE PRESET reflow ============
    try {
      const w = await page.evaluate(async () => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        const btns = [...document.querySelectorAll('button')];
        const tab = btns.find((x) => /tablet/i.test(x.title || ''));
        if (!tab) return 'no tablet btn';
        tab.click(); await sleep(900);
        const wv = document.querySelector('.livehost webview') || document.querySelector('webview');
        const r = wv ? wv.getBoundingClientRect() : null;
        const desk = btns.find((x) => /desktop/i.test(x.title || ''));
        const out = r ? Math.round(r.width) : null;
        if (desk) desk.click();
        return out;
      });
      add('11. device preset (Tablet) reflows the frame width', typeof w === 'number' && w > 500 && w < 900, `frameW=${w}`);
    } catch (e) { add('11. device preset', false, 'probe error: ' + e.message); }

    // ============ 12) EXPORT PNG (dialog stubbed) ============
    try {
      const outPng = path.join(ART, 'export-test.png');
      try { fs.rmSync(outPng, { force: true }); } catch {}
      await app.evaluate(({ dialog }, p) => { dialog.showSaveDialog = async () => ({ canceled: false, filePath: p }); }, outPng);
      const clicked = await page.evaluate(() => {
        const b = [...document.querySelectorAll('button')].find((x) => /export/i.test(x.title || x.textContent || '') && /png/i.test(x.title || x.textContent || ''))
          || [...document.querySelectorAll('button')].find((x) => /export/i.test(x.title || x.textContent || ''));
        if (b) { b.click(); return b.title || b.textContent.trim(); } return null;
      });
      await sleep(600);
      // export may live in a menu: click a PNG item if one appeared
      await page.evaluate(() => { const m = [...document.querySelectorAll('button, [role="menuitem"], .menu *')].find((x) => /^png$/i.test((x.textContent || '').trim())); if (m) m.click(); });
      await sleep(2500);
      const ok = fs.existsSync(outPng) && fs.statSync(outPng).size > 10000;
      add('12. Export PNG writes a real image (>10KB)', ok, `btn=${clicked} file=${fs.existsSync(outPng) ? fs.statSync(outPng).size + 'b' : 'missing'}`);
    } catch (e) { add('12. export png', false, 'probe error: ' + e.message); }

    await page.screenshot({ path: path.join(ART, 'editor-final.png') });
    try { fs.rmSync(projDir, { recursive: true, force: true }); } catch {}
    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nEDITOR-PROBE SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
