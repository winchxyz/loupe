/* R3 · packaged-build verification (instrument-don't-guess). Drives the REAL packaged Loupe.exe
 * (NOT the dev app): free phase asserts launch health — dist-renderer via file:// (no dev server),
 * bundled library reachable (extraResource), userData migration (Roaming/dezign-pro-app → Roaming/Loupe),
 * clean console. PAID phase (env R3_PAID=1, burns tokens) drives a mini Solo build + the closed-loop
 * pick-edit, and checks agent cards landed in userData/agents (the packaged cards-on-disk contract).
 *   cd app && node test/r3-packaged-probe.mjs           (free checks)
 *   cd app && R3_PAID=1 node test/r3-packaged-probe.mjs (adds the paid build+edit)
 * GOTCHA honored: a headless real build BLOCKS on the imagery ASK — a poller self-answers it.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// AUDIT-2 F44d: the SHIPPED starter module — the probe checks the packaged scaffold against the SAME marker/predicate.
const starter = createRequire(import.meta.url)(path.join(__dirname, '..', 'electron', 'starter.cjs'));
const EXE = process.env.R3_EXE || path.join(os.tmpdir(), 'loupe-release', 'win-unpacked', 'Loupe.exe');
const ART = path.join(__dirname, 'artifacts', 'r3-packaged');
fs.mkdirSync(ART, { recursive: true });
const NEW_UD = path.join(process.env.APPDATA || '', 'Loupe');
const OLD_UD = path.join(process.env.APPDATA || '', 'dezign-pro-app');

const BRIEF = "Build a tiny one-page site for 'Kova' — a specialty coffee cart in Rotterdam. One hero with a real photo, three menu items, a short story line, footer. Real copy, no lorem. Keep it compact.";
const BUILD_CAP_MS = 18 * 60 * 1000;
const EDIT_CAP_MS = 8 * 60 * 1000;

const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 300)}`); };

(async () => {
  const { _electron } = await import('playwright');
  let app = null;
  const consoleErrs = [];
  const BENIGN = /favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL|(?:Refused to execute|Executing) inline script/i; // last: the F35 CSP check DELIBERATELY injects an inline <script> to prove script-src 'self' blocks it → the resulting CSP-violation console message is EXPECTED proof, not an app error (the built output has no legit inline scripts). Chromium wording differs by version — Electron ≤34 said "Refused to execute inline script", Electron 43 says "Executing inline script violates…" — match both.
  try {
    add('packaged exe exists', fs.existsSync(EXE), EXE);

    // pre-launch migration witness: remember whether the new userData already had settings
    const hadNewSettings = fs.existsSync(path.join(NEW_UD, 'dezign-settings.json'));
    const hasOldSettings = fs.existsSync(path.join(OLD_UD, 'dezign-settings.json'));

    app = await _electron.launch({ executablePath: EXE, env: { ...process.env, DZ_SMOKE: '1' } }); // AUDIT-2 F44d: enable the DZ_SMOKE-gated test:newSite channel (proves the SHIPPED New-site scaffold works in the exe)
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error' && !BENIGN.test(m.text())) consoleErrs.push(m.text().slice(0, 200)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 200)));
    await page.waitForLoadState('domcontentloaded');
    const sleep = (ms) => page.waitForTimeout(ms);
    await page.waitForFunction(() => window.dezign && typeof window.dezign.health === 'function', { timeout: 20000 });

    // ---- free phase: packaged-run fundamentals ----
    add('renderer served from file:// (no dev-server dependency)', page.url().startsWith('file://'), page.url());
    const title = await page.title();
    add("window title is 'Loupe'", /loupe/i.test(title), title);

    const health = await page.evaluate(() => window.dezign.health());
    add('library health: INDEX.md reachable', !!(health && health.lib), JSON.stringify(health));
    add('library health: references/ reachable', !!(health && health.refs));
    add('library resolves to the bundled extraResource', !!(health && /resources[\\/]library/i.test(health.path || '')), health && health.path);

    // excluded-from-bundle content really absent (IP sweep)
    const bundleLib = health && health.path;
    if (bundleLib && fs.existsSync(bundleLib)) {
      add('bundle excludes sources/ (Figma article copies)', !fs.existsSync(path.join(bundleLib, 'sources')));
      add('bundle excludes recipes/assets/ (3rd-party screenshot)', !fs.existsSync(path.join(bundleLib, 'recipes', 'assets')));
      add('bundle excludes snippets/system-design-space/', !fs.existsSync(path.join(bundleLib, 'snippets', 'system-design-space')));
      add('bundle keeps references index.json (no Program-Files write needed)', fs.existsSync(path.join(bundleLib, 'references', 'index.json')));
    }

    // userData migration (only assertable when this launch was the first run)
    const newSettingsNow = fs.existsSync(path.join(NEW_UD, 'dezign-settings.json'));
    if (!hadNewSettings && hasOldSettings) add('userData migration: settings copied dev→Loupe on first run', newSettingsNow, NEW_UD);
    else add('userData present (migration ran on an earlier launch)', newSettingsNow, `preexisting=${hadNewSettings}`);
    const oldStill = fs.existsSync(path.join(OLD_UD, 'dezign-settings.json'));
    add('migration COPIED, never moved (dev settings intact)', !hasOldSettings || oldStill);

    const modelLabel = await page.evaluate(() => { const l = document.querySelector('.modellbl'); return l ? l.textContent.trim() : null; });
    add('model label present', !!modelLabel, modelLabel);

    await page.screenshot({ path: path.join(ART, 'packaged-launch.png') });

    // ---- F44d: the SHIPPED New-site scaffold works in the packaged exe ----
    // Native dialogs can't be driven headless, so scaffoldNewSite was factored out of project:new and exposed via the
    // DZ_SMOKE-gated test:newSite IPC (the SAME code project:new runs). Scaffold into a temp dir, assert it landed + is a
    // pristine starter against the SHIPPED marker, and that a non-empty dir is refused (parity with project:new).
    if (await page.evaluate(() => typeof window.dezign.testNewSite === 'function')) {
      const nsDir = path.join(os.tmpdir(), 'loupe-newsite-' + process.pid);
      try { fs.rmSync(nsDir, { recursive: true, force: true }); } catch {}
      const ns = await page.evaluate((d) => window.dezign.testNewSite(d), nsDir);
      const scaffolded = !!(ns && ns.ok) && fs.existsSync(path.join(nsDir, 'index.html')) && starter.isPristineStarter(nsDir);
      add('packaged New-site scaffold lands a pristine starter (shipped scaffoldNewSite via test:newSite)', scaffolded, JSON.stringify(ns));
      const ns2 = await page.evaluate((d) => window.dezign.testNewSite(d), nsDir); // non-empty now → must refuse
      add('packaged New-site refuses a non-empty dir (parity with project:new)', !!(ns2 && ns2.error), JSON.stringify(ns2));
      try { fs.rmSync(nsDir, { recursive: true, force: true }); } catch {}
    } else {
      add('packaged test:newSite channel present (DZ_SMOKE)', false, 'testNewSite missing — repackage with the F44d change');
    }

    // ---- F35: the packaged host renderer enforces the strict CSP (applied via onHeadersReceived on the file:// load) ----
    // Behavioral: an injected inline <script> must NOT execute (script-src 'self', no 'unsafe-inline'). If this FAILS, then
    // onHeadersReceived did not fire for the file:// document → fall back to a <meta> CSP in the built index.html.
    const cspBlocked = await page.evaluate(() => {
      try { const s = document.createElement('script'); s.textContent = 'window.__cspBypass=1;'; document.head.appendChild(s); s.remove(); } catch {}
      return window.__cspBypass !== 1; // true = inline script BLOCKED = CSP active
    });
    add('packaged renderer enforces strict CSP (inline <script> blocked · script-src self)', cspBlocked, cspBlocked ? 'inline script blocked' : 'NOT blocked — onHeadersReceived did not fire for file://; needs a <meta> CSP fallback');

    if (!process.env.R3_PAID) {
      add('no unexpected console/page errors', consoleErrs.length === 0, consoleErrs.slice(0, 5).join(' | '));
      const fails = checks.filter((c) => !c.pass).length;
      console.log(`\nR3 PACKAGED (free phase): ${checks.length - fails}/${checks.length} passed · ${el()} total`);
      process.exitCode = fails ? 2 : 0;
      return;
    }

    // ---- paid phase: mini Solo build through the packaged app ----
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    // FRESH dir per run — reusing one path lets the CLI resume the previous session transcript for that
    // cwd (identical session_id observed live), contaminating the run. pid keeps each attempt clean.
    const projDir = path.join(ART, 'kova-' + process.pid);
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);

    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);

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

    let done = false, askAnswered = false;
    const buildStart = Date.now();
    while (Date.now() - buildStart < BUILD_CAP_MS) {
      await sleep(5000);
      // GOTCHA: self-answer the imagery ASK so the headless build doesn't block
      const ask = await page.evaluate(() => {
        const b = document.querySelector('[class*="ask"] button');
        if (b) { b.click(); return (b.textContent || '').trim(); }
        return null;
      });
      if (ask && !askAnswered) { askAnswered = true; console.log(`[${el()}] imagery ASK self-answered: "${ask}"`); }
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy && Date.now() - buildStart > 20000) { done = true; break; }
    }
    add('mini build finished within cap', done, el());
    add('index.html written', fs.existsSync(path.join(projDir, 'index.html')));

    // packaged cards-on-disk contract: the build turn bootstrapped userData/agents
    const udAgents = path.join(NEW_UD, 'agents');
    const cards = fs.existsSync(udAgents) ? fs.readdirSync(udAgents).filter((f) => f.endsWith('.md')) : [];
    add('agent cards bootstrapped into userData/agents', cards.length > 0, cards.join(', '));

    await sleep(4000);
    const render = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      if (!wv || !wv.executeJavaScript) return { err: 'no webview' };
      try {
        return await wv.executeJavaScript(`(function(){
          const imgs=[...document.images];
          return { bodyH: document.body?document.body.scrollHeight:0, h1: (document.querySelector('h1')||{}).textContent||'', imgs: imgs.length, imgsLoaded: imgs.filter(i=>i.naturalWidth>0).length };})()`);
      } catch (e) { return { err: e.message }; }
    });
    console.log(`[${el()}] render probe: ${JSON.stringify(render)}`);
    add('page renders (bodyH > 600, h1 present)', !render.err && render.bodyH > 600 && !!render.h1, JSON.stringify(render).slice(0, 200));
    await page.screenshot({ path: path.join(ART, 'packaged-built.png') });
    const h1Before = render.h1 || '';

    // closed loop: pick h1 → edit → verify the rendered DOM changed
    const picked = await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      if (window.__dzInject) { try { window.__dzInject('move'); } catch {} }
      await sleep(700);
      const wv = document.querySelector('.livehost webview');
      try { return await wv.executeJavaScript("(function(){ if(!window.__pick) return 'no __pick'; var el=document.querySelector('h1'); if(!el) return 'no h1'; window.__pick.pickElement(el); return true; })()"); }
      catch (e) { return 'ex: ' + e.message; }
    });
    await sleep(1200);
    const editSent = await page.evaluate(() => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, "Change this headline's text to exactly 'Kova Coffee' (keep style)."); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    });
    add('pick-edit sent', picked === true && editSent, `pick=${picked}`);
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
    add('CLOSED LOOP in the packaged app: h1 changed in the rendered DOM', /Kova Coffee/i.test(h1After) && h1After !== h1Before, `'${h1Before.slice(0, 40)}' -> '${h1After.slice(0, 40)}'`);
    await page.screenshot({ path: path.join(ART, 'packaged-edited.png') });

    add('no unexpected console/page errors', consoleErrs.length === 0, consoleErrs.slice(0, 5).join(' | '));
    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nR3 PACKAGED SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()} total`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
