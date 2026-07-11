/* R3 — fresh README screenshot: packaged app with the finished Kova site (images filled). Free run. */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXE = process.env.R3_EXE || path.join(os.tmpdir(), 'loupe-release', 'win-unpacked', 'Loupe.exe');
const ART = path.join(__dirname, 'artifacts', 'r3-packaged');
const SITE = fs.readdirSync(ART).filter((d) => d.startsWith('kova-') && fs.existsSync(path.join(ART, d, 'index.html'))).map((d) => path.join(ART, d)).pop();

(async () => {
  const { _electron } = await import('playwright');
  let app = null;
  try {
    app = await _electron.launch({ executablePath: EXE });
    const page = await app.firstWindow();
    await page.setViewportSize({ width: 1680, height: 1000 });
    await page.waitForLoadState('domcontentloaded');
    await page.waitForFunction(() => typeof window.__dzReopen === 'function', { timeout: 20000 });
    await page.evaluate((d) => window.__dzReopen(d), SITE);
    await page.waitForTimeout(5000);
    // open the Home page like a user would (the __dzReopen test hook doesn't auto-open a page)
    await page.evaluate(() => { const row = [...document.querySelectorAll('button.pagerow')].find((el) => /index\.html/.test(el.textContent)); if (row) row.click(); });
    await page.waitForTimeout(3000);
    // wait until the preview webview actually painted the page (h1 present) before shooting
    for (let i = 0; i < 12; i++) {
      const ok = await page.evaluate(async () => {
        const wv = document.querySelector('.livehost webview');
        if (!wv || !wv.executeJavaScript) return false;
        try { return await wv.executeJavaScript("!!document.querySelector('h1')"); } catch { return false; }
      });
      if (ok) break;
      await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(2500);
    const diag = await page.evaluate(async () => {
      const wv = document.querySelector('.livehost webview');
      let inner = null; try { inner = wv && wv.executeJavaScript ? await wv.executeJavaScript('({url: location.href, h1: !!document.querySelector("h1"), body: document.body ? document.body.childElementCount : -1})') : null; } catch (e) { inner = 'ex:' + e.message; }
      return { wvSrc: wv ? wv.getAttribute('src') : 'NO WEBVIEW', inner };
    });
    console.log('WEBVIEW DIAG:', JSON.stringify(diag));
    await page.screenshot({ path: path.join(ART, 'readme-shot.png') });
    console.log('shot saved for site', SITE);
  } catch (e) { console.log('ERR ' + ((e && e.stack) || e)); }
  finally { try { await app?.close(); } catch {} process.exit(0); }
})();
