/* AUDIT (2026-07-09) · FRESH-STRANGER probe — the true first-run experience R2 never tested.
 * Launches the REAL app with a CLEAN --user-data-dir (no BYOK keys, no last project, no settings), so we see
 * exactly what a stranger who just installed Loupe sees. Captures: boot/empty state, the chat panel, Settings in
 * the NO-KEYS state (every rail category), the build-model label, and the composer. It NEVER sends a real build
 * (no paid turns) — it only reads what the UI communicates. Read-only wrt the owner's real settings (isolated
 * userData). Serial with other Electron probes (shared vite dist).  cd app && node test/r2-freshuser-probe.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'artifacts', 'r2-freshuser');
fs.mkdirSync(OUT, { recursive: true });

const taken = [];
const skipped = [];
const facts = {};

(async () => {
  const { build, preview } = await import('vite');
  const { _electron } = await import('playwright');
  let app = null, srv = null;
  const consoleErrs = [];
  const cleanUserData = fs.mkdtempSync(path.join(os.tmpdir(), 'loupe-freshuser-'));
  try {
    if (!process.env.R2_SKIP_BUILD) await build({ root: APP, logLevel: 'error' });
    srv = await preview({ root: APP, preview: { port: 5288, strictPort: false } });
    const url = (srv.resolvedUrls.local[0] || 'http://localhost:5288/').replace(/\/$/, '');
    // clean userData => no keys, no reopened project => the genuine first-run state
    app = await _electron.launch({ args: ['.', `--user-data-dir=${cleanUserData}`], cwd: APP, env: { ...process.env, VITE_DEV_URL: url } });
    const page = await app.firstWindow();
    page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 160)); });
    page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + (e.message || e).slice(0, 160)));
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 15000 });
    await app.evaluate(async ({ BrowserWindow }) => {
      const w = BrowserWindow.getAllWindows()[0];
      if (w) { const b = w.getBounds(); w.setBounds({ x: b.x, y: b.y, width: 1440, height: 900 }); }
      await new Promise((r) => setTimeout(r, 250));
    });

    const sleep = (ms) => page.waitForTimeout(ms);
    const shot = async (name) => { await page.screenshot({ path: path.join(OUT, name + '.png') }); taken.push(name); console.log('SHOT  ' + name); };
    const skip = (name, why) => { skipped.push(name + ' — ' + why); console.log('SKIP  ' + name + ' — ' + why); };
    const clickSel = async (sel, wait = 300) => { const ok = await page.evaluate((s) => { const el = document.querySelector(s); if (el) { el.click(); return true; } return false; }, sel); await sleep(wait); return ok; };

    // ---------- 1) the genuine first-run state (no project, no keys) ----------
    await sleep(1500);
    await shot('00-first-boot');

    // What does the empty-state actually say? (texts + UX)
    facts.emptyState = await page.evaluate(() => {
      const es = document.querySelector('.emptystate');
      return es ? es.innerText.replace(/\s+/g, ' ').trim() : '(no .emptystate element rendered)';
    });
    facts.chatEmpty = await page.evaluate(() => {
      const c = document.querySelector('.panel.chat, .chat, [class*="chat"]');
      if (!c) return '(no chat panel)';
      // first-run greeting/onboarding text, if any
      const msgs = [...c.querySelectorAll('[class*="msg"], [class*="note"], [class*="sys"]')].map((x) => x.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean);
      return msgs.length ? msgs.slice(0, 6) : '(chat has no messages/notes at first run)';
    });
    facts.buildModelLabel = await page.evaluate(() => {
      const l = document.querySelector('[class*="model"], .mdl-label, .chathead [class*="mdl"]');
      return l ? l.innerText.replace(/\s+/g, ' ').trim() : '(no model label found)';
    });
    facts.composerPlaceholder = await page.evaluate(() => {
      const i = document.querySelector('.composer input, .composer textarea');
      return i ? (i.getAttribute('placeholder') || '(no placeholder)') : '(no composer input)';
    });

    // ---------- 2) Settings in the NO-KEYS state — every rail category ----------
    if (await clickSel('.tb-settings', 500) && await page.$('.settings-modal')) {
      const cats = await page.evaluate(() => [...document.querySelectorAll('.settings-modal .set-cat')].map((x) => x.textContent.trim()));
      facts.settingsCats = cats;
      console.log('rail categories (fresh user): ' + JSON.stringify(cats));
      for (const c of cats) {
        await page.evaluate((label) => { const b = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => x.textContent.trim() === label); if (b) b.click(); }, c);
        await sleep(300);
        await shot('01-settings-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
      }
      // capture the Providers & keys pane text — what a stranger is told about BYOK
      await page.evaluate(() => { const b = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => /provider|key/i.test(x.textContent)); if (b) b.click(); });
      await sleep(300);
      facts.providersPaneText = await page.evaluate(() => {
        const p = document.querySelector('.settings-modal .set-pane, .settings-modal .set-body, .settings-modal');
        return p ? p.innerText.replace(/\s+/g, ' ').trim().slice(0, 1200) : '(no pane)';
      });
      // are any key fields pre-filled (should be EMPTY for a fresh user)?
      facts.keyFieldsEmpty = await page.evaluate(() => {
        const fields = [...document.querySelectorAll('.settings-modal input[type="password"], .settings-modal input[type="text"]')];
        return { count: fields.length, anyFilled: fields.some((f) => (f.value || '').length > 0) };
      });
      await clickSel('.set-x', 250);
    } else skip('01-settings-*', 'gear or modal not found');

    // ---------- 3) build-model picker in Settings: what's the default engine for a no-subscription stranger? ----------
    if (await clickSel('.tb-settings', 400) && await page.$('.settings-modal')) {
      await page.evaluate(() => { const b = [...document.querySelectorAll('.settings-modal .set-cat')].find((x) => /build model/i.test(x.textContent)); if (b) b.click(); });
      await sleep(300);
      facts.buildModelPane = await page.evaluate(() => {
        const p = document.querySelector('.settings-modal .set-pane, .settings-modal .set-body, .settings-modal');
        return p ? p.innerText.replace(/\s+/g, ' ').trim().slice(0, 900) : '(no pane)';
      });
      await shot('02-build-model-default');
      await clickSel('.set-x', 250);
    }

    // ---------- 4) slash menu discoverability for a stranger (exp defaults?) ----------
    facts.expDefault = await page.evaluate(() => {
      // is experimental ON or OFF for a brand-new user? read the general toggle
      return null; // captured via settings shot; recorded below from the cats list
    });
    const setComposer = (v) => page.evaluate((v) => {
      const inp = document.querySelector('.composer input');
      if (!inp) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, v); inp.dispatchEvent(new Event('input', { bubbles: true })); return true;
    }, v);
    if (await setComposer('/')) { await sleep(350); await shot('03-slash-menu-fresh');
      facts.slashItems = await page.evaluate(() => [...document.querySelectorAll('[class*="slash"] [class*="item"], .slashmenu li, [class*="cmd"]')].map((x) => x.innerText.replace(/\s+/g,' ').trim()).filter(Boolean).slice(0, 40));
      await setComposer(''); }
    else skip('03-slash-menu-fresh', 'no composer input');

    // ---------- summary ----------
    console.log('\n— FRESH-USER FACTS —');
    console.log(JSON.stringify(facts, null, 2));
    console.log('\ntaken (' + taken.length + '): ' + taken.join(', '));
    if (skipped.length) console.log('SKIPPED:\n  ' + skipped.join('\n  '));
    const errs = [...new Set(consoleErrs)].filter((e) => !/favicon|Autofill|devtools|Electron Security Warning|ERR_ABORTED|GUEST_VIEW_MANAGER_CALL/i.test(e));
    console.log(errs.length ? 'console/page errors (' + errs.length + '):\n  ' + errs.slice(0, 12).join('\n  ') : 'console/page errors: none (after benign filter)');
    fs.writeFileSync(path.join(OUT, 'facts.json'), JSON.stringify(facts, null, 2));
  } catch (e) { console.log('ERR ' + (e && e.stack || e)); process.exitCode = 1; }
  finally {
    try { await app?.close(); } catch {}
    try { await srv?.close(); } catch {}
    try { fs.rmSync(cleanUserData, { recursive: true, force: true }); } catch {}
    process.exit(process.exitCode || 0);
  }
})();
