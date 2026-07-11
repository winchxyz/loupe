/* AUDIT 2026-07-09 · FINAL GATE — one LIVE PAID build end-to-end, Solo AND Studio (owner-resolved: YES).
 * Launches the REAL app on the owner's real userData (his Claude login/keys), creates a fresh project folder under
 * baseline/sites/, and sends a REAL chat turn per mode. Answers the imagery ASK through the real ask IPC round-trip.
 * Asserts per mode: the turn resolves ok, index.html EXISTS and is non-trivial, no work-limit flag, no console/page
 * errors. The built sites are KEPT for the owner's cold-eye (paths printed).  cd app && node test/audit-livebuild-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { submitBrief, installAskAutoAnswer, waitIdle, waitImagery } from './_harness.mjs'; // AUDIT-2 F43: drive the REAL user path (send→runPrompt→chat:send) + assert imagery filled (poll past the async fill+reload)

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const SITES = path.resolve(APP, '..', 'baseline', 'sites');
const STAMP = '2026-07-09';
const BRIEFS = {
  solo: 'Build a one-page landing site for "Kiln & Crumb" — a small artisan bakery. Warm, editorial, tactile; real photography; confident type and generous rhythm. Keep it to one focused page.',
  studio: 'Build a one-page landing site for "North Loom" — a small independent textile studio weaving wool throws. Calm, crafted, editorial; real photography; strong typographic hierarchy. One focused page.',
};

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null, code = 1;
  const consoleErrs = [];
  const results = {};
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5297, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5297/').replace(/\/$/, '');
    app = await _electron.launch({ args: ['.'], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 200)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 200)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await page.waitForFunction(() => typeof window.__dzTestSubmitBrief === 'function', { timeout: 15000 }); // F43: the real send→runPrompt hook
    await installAskAutoAnswer(page); // F43: answer the imagery ASK through the real ask IPC (persistent)

    const prevMode = await page.evaluate(async () => { const s = await window.dezign.settings.get(); return s.buildMode || null; });

    for (const mode of ['solo', 'studio']) {
      // AUDIT-2 F43: a FRESH dir per run (pid) — reusing a fixed path lets the Agent SDK RESUME the prior session for
      // that cwd, so the agent "remembers" building the site and skips a fresh build ("already built · didn't overwrite"),
      // even after the files are deleted (session state is not in the dir). Same fix r3-newflow uses.
      const dir = path.join(SITES, 'audit-live-' + mode + '-' + STAMP + '-' + process.pid);
      fs.rmSync(dir, { recursive: true, force: true });
      fs.mkdirSync(dir, { recursive: true });
      console.log('— ' + mode.toUpperCase() + ' live build → ' + dir);
      await page.evaluate((d) => window.__dzReopen(d), dir);
      await page.waitForTimeout(2500);
      await page.evaluate(async (m) => { await window.dezign.settings.set({ buildMode: m }); }, mode);
      const t0 = Date.now();
      await submitBrief(page, BRIEFS[mode]); // F43: the REAL send→runPrompt→chat:send path — registers onChunk AND runs the imagery/HDRI fill in runPrompt's .finally (the raw chat:send IPC did neither)
      const settled = await waitIdle(page, { timeoutMs: 600000 });
      const secs = Math.round((Date.now() - t0) / 1000);
      const rp = await waitImagery(page); // F43: assert imagery on the LIVE preview — POLL past the async fill+reload (a single read races it → false-fail)
      const idx = path.join(dir, 'index.html');
      const built = fs.existsSync(idx) && fs.statSync(idx).size > 2000;
      // AUDIT-2 F43 contract: the gate FAILs iff the imagery fill STOPS FIRING on the real user path. It FIRED iff at
      // least one <img> loaded (imgsLoaded>0) when there were images — i.e. the .finally fulfillImages ran and resolved
      // real assets. A perfect fill (imgsLoaded===imgs, unresolvedGen===0) needs an image-search API key; on a keyless
      // machine the fallback legitimately misses some slots (do NOT gate on perfection). The full ratio is reported for cold-eye.
      const imageryOk = !rp.err && (rp.imgs === 0 || rp.imgsLoaded > 0);
      results[mode] = { settled, built, indexBytes: built ? fs.statSync(idx).size : 0, render: rp, imageryOk, secs, dir };
      console.log(mode + ':', JSON.stringify(results[mode]));
    }

    await page.evaluate(async (m) => { await window.dezign.settings.set({ buildMode: m }); }, prevMode || 'studio'); // restore the owner's mode

    const errs = [...new Set(consoleErrs)].filter((e) => !/favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i.test(e));
    console.log('console/page errors:', errs.length ? errs.slice(0, 10).join('\n  ') : 'none (after benign filter)');
    const pass = results.solo && results.solo.settled && results.solo.built && results.solo.imageryOk
      && results.studio && results.studio.settled && results.studio.built && results.studio.imageryOk && errs.length === 0;
    console.log(pass ? '✓ LIVE BUILD GATE PASSED (solo + studio built real sites, imagery filled on the live preview)' : '✗ LIVE BUILD GATE FAILED');
    console.log('sites kept for the owner cold-eye:\n  ' + Object.values(results).map((r) => r.dir).join('\n  '));
    code = pass ? 0 : 1;
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); code = 1; }
  finally {
    try { await app?.close(); } catch {}
    try { await srv?.close(); } catch {}
    process.exit(code);
  }
})();
