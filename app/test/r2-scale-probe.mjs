/* deZign-pro · R2 axis-D EMPIRICAL scale/resize/zoom robustness probe.
 * Guess-free: enumerates EVERY visible host-chrome interactive control + layout container,
 * across a window-size × in-app-zoom matrix (+ chat header full, non-index page 'Apply to site',
 * settings modal open), and reports every control that hides OFF-SCREEN, every container that
 * CLIPS/overflows without scroll, every sibling OVERLAP, and root-level document overflow.
 * FIND-ONLY: prints a report; a non-zero exit just flags 'issues found'. cd app && node test/r2-scale-probe.mjs */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const FIXTURE = path.join(__dirname, 'fixture-site');
const ART = path.join(__dirname, 'artifacts');
try { fs.mkdirSync(ART, { recursive: true }); } catch {}

// The in-page measurement. Returns offenders for the CURRENT window size / zoom / UI state.
const SCAN = () => {
  const IW = window.innerWidth, IH = window.innerHeight;
  const TOL = 2;
  const vis = (el) => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.02) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0.5 && r.height > 0.5;
  };
  const inPreview = (el) => !!el.closest('webview, iframe, .live, .webview');
  const label = (el) => {
    const cls = (el.className && typeof el.className === 'string') ? '.' + el.className.trim().split(/\s+/)[0] : '';
    const txt = ((el.textContent || '').trim() || el.getAttribute('aria-label') || el.title || el.getAttribute('placeholder') || '').replace(/\s+/g, ' ').slice(0, 14);
    return `${el.tagName.toLowerCase()}${cls}${txt ? '["' + txt + '"]' : ''}`;
  };
  const R = (el) => { const b = el.getBoundingClientRect(); return { l: Math.round(b.left), t: Math.round(b.top), r: Math.round(b.right), b: Math.round(b.bottom), w: Math.round(b.width), h: Math.round(b.height) }; };

  // 1) OFF-SCREEN visible interactive controls (the recurring 'hides off-screen at wrong scale' class).
  //    A control is only a REAL defect if it is off-viewport AND unreachable: NOT inside the pannable/zoomable
  //    canvas (artboards off-view is by-design → pan/fit reaches them) AND NOT rescued by a scrollable ancestor
  //    (a modal/panel that scrolls to it satisfies the 'wrap OR scroll OR shrink' rule). Otherwise it is a false positive.
  const scrollableAncestor = (el, axis) => {
    let p = el.parentElement;
    while (p && p !== document.body && p !== document.documentElement) {
      const cs = getComputedStyle(p);
      const ov = axis === 'y' ? cs.overflowY : cs.overflowX;
      const can = /(auto|scroll)/.test(ov) && (axis === 'y' ? p.scrollHeight - p.clientHeight > 4 : p.scrollWidth - p.clientWidth > 4);
      if (can) return true;
      p = p.parentElement;
    }
    return false;
  };
  const ctrls = [...document.querySelectorAll('button, select, input, textarea, a[href], [role="button"], [contenteditable="true"], .mt-b, .pickbtn, .pagerow')]
    .filter((el) => vis(el) && !inPreview(el) && !el.closest('.canvas'));
  const offscreen = [];
  for (const el of ctrls) {
    const r = R(el);
    const sides = [];
    if (r.r > IW + TOL && !scrollableAncestor(el, 'x')) sides.push(`right+${r.r - IW}`);
    if (r.b > IH + TOL && !scrollableAncestor(el, 'y')) sides.push(`bottom+${r.b - IH}`);
    if (r.l < -TOL && !scrollableAncestor(el, 'x')) sides.push(`left${r.l}`);
    if (r.t < -TOL && !scrollableAncestor(el, 'y')) sides.push(`top${r.t}`);
    if (sides.length) offscreen.push({ label: label(el), sides: sides.join(','), rect: `${r.l},${r.t} ${r.w}x${r.h}` });
  }

  // 2) CONTAINER CLIP/OVERFLOW without a scroller (content pushed past the edge)
  const clusters = [...document.querySelectorAll('.topbar, .composer, .tabbar, .canvas-hud, .chat-head, .chathead, .chat-header, .settings-modal, .edit-tb, .editbar, .loopbar, .loop-bar, .tb-tools, .dock-left, .dock-right, [class*="bar"], [class*="head"], [class*="hud"], [class*="toolbar"]')]
    .filter((el) => vis(el) && !inPreview(el));
  const clipped = [];
  for (const el of clusters) {
    const cs = getComputedStyle(el);
    // Only 'hidden'/'clip' actually HIDE overflow. 'visible' shows it (spills harmlessly), 'auto/scroll' scrolls to it.
    const clipX = /(hidden|clip)/.test(cs.overflowX), clipY = /(hidden|clip)/.test(cs.overflowY);
    const dx = el.scrollWidth - el.clientWidth, dy = el.scrollHeight - el.clientHeight;
    if (dx > TOL && clipX) clipped.push({ label: label(el), axis: 'x', px: dx });
    if (dy > TOL && clipY && el.clientHeight > 0) clipped.push({ label: label(el), axis: 'y', px: dy });
  }

  // 3) SIBLING OVERLAP within each cluster row (two controls physically overlapping)
  const overlap = [];
  for (const cont of clusters) {
    const kids = [...cont.querySelectorAll(':scope > button, :scope > .mt-b, :scope > .pickbtn, :scope > a, :scope > select')]
      .filter(vis).map((el) => ({ ...R(el), t2: label(el) })).sort((a, b) => a.l - b.l);
    for (let i = 1; i < kids.length; i++) {
      const ov = kids[i - 1].r - kids[i].l;
      // only count real overlap on the SAME visual row (vertical spans intersect)
      const sameRow = Math.min(kids[i - 1].b, kids[i].b) - Math.max(kids[i - 1].t, kids[i].t) > 4;
      if (ov > TOL && sameRow) overlap.push({ a: kids[i - 1].t2, b: kids[i].t2, px: ov, cluster: (cont.className || '').split(/\s+/)[0] });
    }
  }

  // 4) ROOT-level document overflow (the whole app shouldn't scroll; internal panels may)
  const de = document.documentElement, bd = document.body;
  const rootOverflowX = Math.max(de.scrollWidth - IW, bd.scrollWidth - IW);
  const rootOverflowY = Math.max(de.scrollHeight - IH, bd.scrollHeight - IH);

  return { IW, IH, offscreen, clipped, overlap, rootOverflowX, rootOverflowY };
};

const fmt = (m) => {
  const parts = [];
  if (m.offscreen.length) parts.push(`OFFSCREEN×${m.offscreen.length}: ` + m.offscreen.slice(0, 8).map((o) => `${o.label}(${o.sides})`).join(' · '));
  if (m.clipped.length) parts.push(`CLIP×${m.clipped.length}: ` + m.clipped.slice(0, 6).map((o) => `${o.label}[${o.axis}+${o.px}]`).join(' · '));
  if (m.overlap.length) parts.push(`OVERLAP×${m.overlap.length}: ` + m.overlap.slice(0, 6).map((o) => `${o.a}∩${o.b}=${o.px}px`).join(' · '));
  if (m.rootOverflowX > 2) parts.push(`ROOT-scrollX+${m.rootOverflowX}`);
  if (m.rootOverflowY > 2) parts.push(`ROOT-scrollY+${m.rootOverflowY}`);
  return parts.length ? parts.join(' || ') : 'clean';
};
const bad = (m) => m.offscreen.length || m.clipped.length || m.overlap.length || m.rootOverflowX > 2 || m.rootOverflowY > 2;

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null, code = 0;
  const consoleErrs = [];
  const fails = [];
  try {
    await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5281, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5281/').replace(/\/$/, '');
    // R2_DSF=<factor> → launch under a forced device-scale-factor (real-DPI arm of the display-scale sweep;
    // complements the in-app zoom sweep below, which only emulates it at the webContents level)
    const dsf = parseFloat(process.env.R2_DSF || '') || 0;
    const launchArgs = dsf ? ['.', `--force-device-scale-factor=${dsf}`] : ['.'];
    if (dsf) console.log(`(launching with --force-device-scale-factor=${dsf})`);
    app = await _electron.launch({ args: launchArgs, cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 160)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 160)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await page.evaluate((d) => window.__dzReopen(d), FIXTURE);
    await page.waitForSelector('.topbar', { timeout: 20000 });
    await page.waitForSelector('.canvas', { timeout: 20000 });
    await page.waitForTimeout(1200);
    // switch to a NON-index page → the 'Apply to site' button appears (owner's known overlap case)
    await page.evaluate(() => { const r = document.querySelector('.pagerow[title="svhtest.html"]') || [...document.querySelectorAll('.pagerow')].find((x) => !/index\.html/.test(x.getAttribute('title') || '')); if (r) r.click(); });
    await page.waitForTimeout(500);

    const setBounds = (w, h) => app.evaluate(async ({ BrowserWindow }, [w, h]) => {
      const win = BrowserWindow.getAllWindows()[0]; if (win) { const b = win.getBounds(); win.setBounds({ x: b.x, y: b.y, width: w, height: h }); }
      await new Promise((r) => setTimeout(r, 220));
    }, [w, h]);
    const setZoom = (z) => app.evaluate(async ({ BrowserWindow }, z) => { const win = BrowserWindow.getAllWindows()[0]; if (win) win.webContents.setZoomFactor(z); await new Promise((r) => setTimeout(r, 150)); }, z);

    const run = async (tag, m) => {
      const ok = !bad(m);
      if (!ok) { fails.push({ tag, m }); code = 2; }
      console.log(`${ok ? 'PASS' : 'FAIL'}  ${tag.padEnd(34)} [${m.IW}x${m.IH}]  ${fmt(m)}`);
    };

    console.log('\n— R2 axis-D · window-size sweep (zoom 1.0) —');
    for (const [w, h] of [[1600, 980], [1440, 940], [1280, 900], [1120, 860], [1000, 820], [900, 780], [820, 740]]) {
      await setBounds(w, h); await page.waitForTimeout(220);
      await run(`w${w}xh${h}`, await page.evaluate(SCAN));
    }
    console.log('\n— R2 axis-D · height sweep (width 1180) —');
    for (const h of [980, 820, 700, 600, 520, 460]) {
      await setBounds(1180, h); await page.waitForTimeout(220);
      await run(`h${h}@w1180`, await page.evaluate(SCAN));
    }
    console.log('\n— R2 axis-D · worst corners (small+short) —');
    for (const [w, h] of [[960, 560], [880, 520], [820, 480]]) {
      await setBounds(w, h); await page.waitForTimeout(220);
      await run(`corner${w}x${h}`, await page.evaluate(SCAN));
    }
    console.log('\n— R2 axis-D · in-app zoom sweep (emulates Windows display scale) @1440x900 —');
    await setBounds(1440, 900);
    for (const z of [1.0, 1.25, 1.5, 1.75, 2.0]) {
      await setZoom(z); await page.waitForTimeout(220);
      await run(`zoom${z}`, await page.evaluate(SCAN));
    }
    await setZoom(1.0);
    console.log('\n— R2 axis-D · SETTINGS MODAL open (dense) × sizes —');
    // UX-A moved the gear to the topbar (.tb-settings); keep the old selector as a fallback
    let opened = await page.evaluate(() => { const g = document.querySelector('.tb-settings') || document.querySelector('.chat-settings'); if (g) { g.click(); return true; } return false; });
    await page.waitForTimeout(400);
    if (opened && await page.$('.settings-modal')) {
      for (const [w, h] of [[1200, 900], [1000, 760], [900, 640], [820, 560]]) {
        await setBounds(w, h); await page.waitForTimeout(240);
        await run(`settings${w}x${h}`, await page.evaluate(SCAN));
      }
      await page.evaluate(() => { const x = document.querySelector('.set-x'); if (x) x.click(); });
      await page.waitForTimeout(250);
    } else {
      console.log('  (settings modal did not open via .chat-settings — skipped)');
    }

    // screenshot the single worst FAIL (most offenders) for the owner's eye
    if (fails.length) {
      fails.sort((a, b) => (b.m.offscreen.length + b.m.clipped.length + b.m.overlap.length) - (a.m.offscreen.length + a.m.clipped.length + a.m.overlap.length));
      const worst = fails[0];
      await setZoom(1.0);
      const [w, h] = (worst.tag.match(/(\d+)x(\d+)/) || []).slice(1).map(Number);
      if (w && h) { await setBounds(w, h); await page.waitForTimeout(300); }
      const shot = path.join(ART, 'r2-scale-worst.png');
      try { await page.screenshot({ path: shot }); console.log(`\n• worst-fail screenshot: ${shot}  (${worst.tag})`); } catch {}
    }

    console.log('\n— SUMMARY —');
    console.log(`combos run · FAILs=${fails.length}`);
    if (consoleErrs.length) console.log(`console/page errors (${consoleErrs.length}):\n  ` + [...new Set(consoleErrs)].slice(0, 12).join('\n  '));
    else console.log('console/page errors: none');
    console.log(fails.length ? `\nAXIS-D: ${fails.length} failing combo(s) — see lines above.` : '\nAXIS-D: CLEAN across the matrix.');
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); code = 1; }
  finally { try { await app?.close(); } catch {} try { await srv?.close(); } catch {} process.exit(code); }
})();
