/* Render the Loupe app icon (the night tile from loupe-app-icon.svg) to PNG at 256 + 512 for the
 * Electron taskbar/dock icon. cd app && node brand/render-icon.mjs */
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname);
const svg = fs.readFileSync(path.join(DIR, 'loupe-app-icon.svg'), 'utf8').replace(/^﻿/, '');
const browser = await chromium.launch();
for (const S of [256, 512]) {
  const page = await browser.newPage({ viewport: { width: S, height: S }, deviceScaleFactor: 1 });
  await page.setContent(`<html><head><style>*{margin:0}svg{display:block;width:${S}px;height:${S}px}</style></head><body>${svg}</body></html>`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(DIR, `loupe-icon-${S}.png`), clip: { x: 0, y: 0, width: S, height: S }, omitBackground: true });
  await page.close();
  console.log('• loupe-icon-' + S + '.png');
}
await browser.close();
