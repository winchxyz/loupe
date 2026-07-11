/* R2 axis-G · G4: Studio + bridge:codex — live proof (or refutation) of the silent Art-Director/Clarify
 * degradation on non-Claude engines (static finding M1), plus a real CLI-bridge build through the app.
 * MUTATES the build-model setting (records + RESTORES it, loudly, even on failure). FIND-ONLY otherwise.
 *   cd app && node test/r2-flow-g4-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const ART = path.join(__dirname, 'artifacts', 'r2-g4');
fs.mkdirSync(ART, { recursive: true });

const BRIEF = "Build a tiny one-page site for 'Kilp' — an Estonian board-game cafe. Hero with name + tagline, three feature cards, footer. Compact and clean.";
const CAP = 25 * 60 * 1000;
const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 250)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null, page = null;
  let priorEngine = null, priorModel = null, modelChanged = false;

  const setBuildModel = async (engineValue, modelValue) => page.evaluate(async ({ engineValue, modelValue }) => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const gear = document.querySelector('.tb-settings'); if (!gear) return { err: 'no gear' };
    gear.click(); await sleep(400);
    const cat = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => /build model/i.test(x.textContent));
    if (cat) cat.click(); await sleep(250);
    const eng = document.querySelector('.build-pick .engine-sel');
    const mod = () => document.querySelector('.build-pick .modelsel') || document.querySelector('.modelsel');
    if (!eng) return { err: 'no engine select' };
    const before = { engine: eng.value, model: (mod() || {}).value };
    const setSel = (sel, v) => { const set = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set; set.call(sel, v); sel.dispatchEvent(new Event('change', { bubbles: true })); };
    if (engineValue != null) { setSel(eng, engineValue); await sleep(400); }
    if (modelValue != null && mod()) { setSel(mod(), modelValue); await sleep(300); }
    const after = { engine: eng.value, model: (mod() || {}).value, modelOptions: mod() ? [...mod().options].slice(0, 6).map((o) => o.value) : [] };
    const x = document.querySelector('.set-x'); if (x) x.click(); await sleep(300);
    return { before, after };
  }, { engineValue, modelValue });

  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5297, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5297/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    const sleep = (ms) => page.waitForTimeout(ms);

    const projDir = path.join(ART, 'kilp-site');
    fs.rmSync(projDir, { recursive: true, force: true });
    fs.mkdirSync(projDir, { recursive: true });
    await page.evaluate((d) => window.__dzReopen(d), projDir);
    await sleep(1500);

    // Studio mode (should already be on after G2 — assert, set if not)
    await page.evaluate(() => {
      const act = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /studio/i.test(x.textContent) && /active|on(?![a-z])/i.test(x.className));
      if (!act) { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /studio/i.test(x.textContent)); if (b) b.click(); }
    });
    await sleep(300);

    // ---- record + switch the build model to bridge:codex ----
    const probe = await setBuildModel(null, null);
    if (probe.err) throw new Error('settings picker: ' + probe.err);
    priorEngine = probe.before.engine; priorModel = probe.before.model;
    console.log(`[${el()}] PRIOR build model: engine='${priorEngine}' model='${priorModel}'  (WILL RESTORE)`);
    const sw = await setBuildModel('bridge:codex', null);
    modelChanged = true;
    console.log(`[${el()}] switched: ${JSON.stringify(sw.after).slice(0, 250)}`);
    const label = await page.evaluate(() => (document.querySelector('.modellbl') || {}).textContent || '');
    add('header label reflects codex engine', /codex/i.test(label), label);

    // ---- build ----
    const sent = await page.evaluate((brief) => {
      const inp = document.querySelector('.composer input');
      const form = document.querySelector('form.composer');
      if (!inp || !form) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, brief); inp.dispatchEvent(new Event('input', { bubbles: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return true;
    }, BRIEF);
    add('brief submitted (Studio + bridge:codex)', sent);

    let done = false;
    const seen = { art: false, builderLine: false, viaBridge: false, reviewer: false, clarify: false, askShown: false };
    const s = Date.now();
    while (Date.now() - s < CAP) {
      await sleep(5000);
      const st = await page.evaluate(() => {
        // FULL chat text — tail slices miss markers drowned by the builder narration (G1 lesson)
        const chat = (document.querySelector('.chat-log, [class*="chatlog"], .msgs') || document.body).textContent.slice(0, 120000);
        const askBtns = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((b) => b.offsetParent);
        return { busy: !!document.querySelector('.composer .stopbtn'), tail: chat, asks: askBtns.length };
      });
      if (/Art Director/i.test(st.tail)) seen.art = true;
      if (/Builder executing|executing the direction/i.test(st.tail)) seen.builderLine = true;
      if (/Building via|bridge|codex/i.test(st.tail)) seen.viaBridge = true;
      if (/Reviewer|QA review/i.test(st.tail)) seen.reviewer = true;
      if (/clarif/i.test(st.tail)) seen.clarify = true;
      if (st.asks > 0) {
        seen.askShown = true;
        await page.evaluate(() => { const b = [...document.querySelectorAll('[class*="ask"] button, .askpicker button')].filter((x) => x.offsetParent)[0]; if (b) b.click(); });
        await sleep(1500);
      }
      if (!st.busy && Date.now() - s > 45000) { done = true; break; }
    }
    add('turn finished within cap', done, el());
    console.log(`[${el()}] observed: ${JSON.stringify(seen)}`);
    // The M1 finding predicts: Art-Director line SHOWN then silently dies -> no Builder-executing line; ask/clarify never fires.
    add('M1 DEGRADATION CONFIRMED (AD announced, no direction delivered)', seen.art && !seen.builderLine, `art=${seen.art} builderLine=${seen.builderLine}`);
    add('build actually ran via the bridge', seen.viaBridge);
    add('reviewer pass still ran after bridge build (sanitized path)', seen.reviewer);
    add('index.html written by codex', fs.existsSync(path.join(projDir, 'index.html')));
    await sleep(3000);
    await page.screenshot({ path: path.join(ART, 'g4-built.png') });

  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally {
    // ---- RESTORE the owner's build model, best-effort but loud ----
    try {
      if (modelChanged && page) {
        const back = await setBuildModel(priorEngine, priorModel);
        const label = await page.evaluate(() => (document.querySelector('.modellbl') || {}).textContent || '');
        console.log(`RESTORED build model: engine='${priorEngine}' model='${priorModel}' · header now '${label}' · ${JSON.stringify((back || {}).after || {}).slice(0, 160)}`);
      } else if (modelChanged) {
        console.log('!!! MODEL NOT RESTORED (page dead) — owner build model must be reset to: engine=' + priorEngine + ' model=' + priorModel);
      }
    } catch (e) { console.log('!!! RESTORE FAILED: ' + e.message + ' — owner build model must be reset to: engine=' + priorEngine + ' model=' + priorModel); }
    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nG4 SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    try { await app?.close(); } catch {} try { await srv?.close(); } catch {}
    process.exit(process.exitCode || (checks.filter((c) => !c.pass).length ? 2 : 0));
  }
})();
