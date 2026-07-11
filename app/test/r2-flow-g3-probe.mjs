/* R2 axis-G · G3: /explore → variant → Apply-to-site (the explorations promote loop; never smoke-covered).
 * Reuses the G1-built project (test/artifacts/r2-g1/vetka-site). FIND-ONLY, Solo mode, exp ON expected.
 *   cd app && node test/r2-flow-g3-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const PROJ = path.join(__dirname, 'artifacts', 'r2-g1', 'vetka-site');
const ART = path.join(__dirname, 'artifacts', 'r2-g3');
fs.mkdirSync(ART, { recursive: true });

const CAP = 12 * 60 * 1000;
const t0 = Date.now();
const el = () => Math.round((Date.now() - t0) / 1000) + 's';
const checks = [];
const add = (name, pass, info) => { checks.push({ name, pass }); console.log(`${pass ? 'PASS' : 'FAIL'}  [${el()}] ${name}  ${info == null ? '' : String(info).slice(0, 250)}`); };

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  try {
    if (!fs.existsSync(path.join(PROJ, 'index.html'))) { console.log('G1 project missing — run G1 first'); process.exit(3); }
    const idxBefore = fs.readFileSync(path.join(PROJ, 'index.html'), 'utf8');
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5291, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5291/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await page.evaluate((d) => window.__dzReopen(d), PROJ);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    const sleep = (ms) => page.waitForTimeout(ms);
    await sleep(1500);

    // ensure Solo for a cheap explore turn
    await page.evaluate(() => { const b = [...document.querySelectorAll('.panel.chat .mt-b')].find((x) => /solo/i.test(x.textContent)); if (b) b.click(); });
    await sleep(300);

    // ---- /explore ----
    const ran = await page.evaluate(() => (window.__dzTestSlash ? window.__dzTestSlash('explore', 'hero headline treatments — 3 distinct variants') : 'no hook'));
    add('/explore dispatched', ran === true, String(ran));
    let exploreDone = false, explorePage = null;
    const s1 = Date.now();
    while (Date.now() - s1 < CAP) {
      await sleep(5000);
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      const ex = fs.existsSync(path.join(PROJ, 'explorations')) ? fs.readdirSync(path.join(PROJ, 'explorations')).filter((f) => f.endsWith('.html')) : [];
      if (ex.length && !busy) { exploreDone = true; explorePage = ex[0]; break; }
      if (!busy && Date.now() - s1 > 30000) break;
    }
    add('exploration page created', exploreDone, explorePage);
    add('live index.html untouched by /explore', fs.readFileSync(path.join(PROJ, 'index.html'), 'utf8') === idxBefore);
    await sleep(2500);
    const tabState = await page.evaluate(() => ({
      active: (document.querySelector('.tab.active') || {}).title || null,
      applyBtn: !![...document.querySelectorAll('button')].find((x) => /apply to site/i.test(x.textContent || '')),
    }));
    add('exploration tab auto-opened + Apply-to-site visible', !!tabState.active && /explorations\//.test(tabState.active) && tabState.applyBtn, JSON.stringify(tabState));
    await page.screenshot({ path: path.join(ART, 'g3-explore.png') });

    // ---- pick a variant then Apply to site ----
    const picked = await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      if (window.__dzInject) { try { window.__dzInject('move'); } catch {} }
      await sleep(700);
      const wv = document.querySelector('.livehost webview');
      try {
        return await wv.executeJavaScript("(function(){ if(!window.__pick) return 'no __pick'; var el=document.querySelector('h1,h2,[class*=variant] , section'); if(!el) return 'no el'; window.__pick.pickElement(el); return true; })()");
      } catch (e) { return 'ex: ' + e.message; }
    });
    await sleep(1000);
    add('variant picked on exploration page', picked === true, String(picked));
    const applyClicked = await page.evaluate(() => {
      const b = [...document.querySelectorAll('button')].find((x) => /apply to site/i.test(x.textContent || ''));
      if (b) { b.click(); return true; } return false;
    });
    add('Apply to site clicked', applyClicked);
    let applyDone = false;
    const s2 = Date.now();
    await sleep(6000);
    while (Date.now() - s2 < CAP) {
      await sleep(5000);
      const busy = await page.evaluate(() => !!document.querySelector('.composer .stopbtn'));
      if (!busy) { applyDone = true; break; }
    }
    add('apply turn finished', applyDone, el());
    const idxAfter = fs.readFileSync(path.join(PROJ, 'index.html'), 'utf8');
    add('index.html modified by apply', idxAfter !== idxBefore, `bytes ${idxBefore.length} -> ${idxAfter.length}`);
    const backOnIndex = await page.evaluate(() => ((document.querySelector('.tab.active') || {}).title || '').includes('index.html'));
    add('view jumped back to index.html', backOnIndex);
    await sleep(2500);
    await page.screenshot({ path: path.join(ART, 'g3-applied.png') });

    const fails = checks.filter((c) => !c.pass).length;
    console.log(`\nG3 SUMMARY: ${checks.length - fails}/${checks.length} passed · ${el()}`);
    process.exitCode = fails ? 2 : 0;
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(process.exitCode || 0); }
})();
