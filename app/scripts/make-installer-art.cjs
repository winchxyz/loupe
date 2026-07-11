// Render the NSIS installer art (sidebar 164x314 + header 150x57) from the Loupe brand, as 24-bit BMP
// (NSIS MUI WELCOMEFINISHPAGE / HEADERIMAGE want BMP). Runs UNDER electron so no chromium browser download is
// needed: a hidden BrowserWindow paints the HTML, capturePage() -> NativeImage.resize(exact) -> toBitmap() (BGRA)
// -> a tiny hand-written 24-bit BMP encoder. Usage:  npx electron scripts/make-installer-art.cjs
'use strict';
const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

const BRAND = path.join(__dirname, '..', 'brand');
const OUT = path.join(__dirname, '..', 'build');
const mark = fs.readFileSync(path.join(BRAND, 'loupe-mark.svg'), 'utf8').replace(/^﻿/, '').trim();

// BGRA (top-down, from NativeImage.toBitmap) -> 24-bit BMP (BGR, bottom-up, rows padded to 4 bytes)
function bgraToBmp24(bgra, w, h) {
  if (bgra.length !== w * h * 4) throw new Error('bitmap size mismatch: got ' + bgra.length + ' expected ' + (w * h * 4));
  const rowSize = Math.floor((24 * w + 31) / 32) * 4;
  const pix = rowSize * h;
  const buf = Buffer.alloc(54 + pix);
  buf.write('BM', 0);
  buf.writeUInt32LE(54 + pix, 2);
  buf.writeUInt32LE(54, 10);
  buf.writeUInt32LE(40, 14);
  buf.writeInt32LE(w, 18);
  buf.writeInt32LE(h, 22);
  buf.writeUInt16LE(1, 26);
  buf.writeUInt16LE(24, 28);
  buf.writeUInt32LE(pix, 34);
  buf.writeInt32LE(2835, 38);
  buf.writeInt32LE(2835, 42);
  let off = 54;
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      buf[off++] = bgra[i]; buf[off++] = bgra[i + 1]; buf[off++] = bgra[i + 2];
    }
    for (let p = 0; p < rowSize - w * 3; p++) buf[off++] = 0;
  }
  return buf;
}

const sidebarHTML = `<!doctype html><html><head><meta charset="utf8"><style>
  *{margin:0;box-sizing:border-box}
  html,body{width:164px;height:314px;background:#fafaf8;font-family:'Segoe UI',Arial,sans-serif;overflow:hidden}
  .wrap{width:164px;height:314px;position:relative;display:flex;flex-direction:column;align-items:center;border-right:1px solid #e6e5de}
  .h{position:absolute;left:0;right:0;border-top:1px solid #f0efe8}
  .mark{margin-top:44px;width:72px;height:72px}
  .mark svg{display:block;width:100%;height:100%}
  .word{margin-top:15px;font-size:19px;font-weight:600;letter-spacing:-.3px;color:#1b1917}
  .rule{margin-top:8px;width:22px;height:0;border-top:1px solid #1b1917}
  .foot{position:absolute;bottom:22px;left:0;right:0;text-align:center}
  .tag{font-family:'Cascadia Code','Consolas',monospace;font-size:9px;line-height:1.5;color:#8f8f8a}
  .ver{font-family:'Cascadia Code','Consolas',monospace;font-size:8.5px;color:#b4b3aa;margin-top:8px;letter-spacing:.2px}
</style></head><body><div class="wrap">
  <div class="h" style="top:82px"></div><div class="h" style="top:214px"></div>
  <div class="mark">${mark}</div>
  <div class="word">Loupe</div><div class="rule"></div>
  <div class="foot"><div class="tag">closed-loop<br>visual editor</div><div class="ver">v0.1.0 · work in progress</div></div>
</div></body></html>`;

const headerHTML = `<!doctype html><html><head><meta charset="utf8"><style>
  *{margin:0;box-sizing:border-box}
  html,body{width:150px;height:57px;background:#fafaf8;font-family:'Segoe UI',Arial,sans-serif;overflow:hidden}
  .wrap{width:150px;height:57px;display:flex;align-items:center;gap:9px;padding-left:14px}
  .mark{width:32px;height:32px;flex:none}
  .mark svg{display:block;width:100%;height:100%}
  .word{font-size:16px;font-weight:600;letter-spacing:-.3px;color:#1b1917}
</style></head><body><div class="wrap"><div class="mark">${mark}</div><div class="word">Loupe</div></div></body></html>`;

async function shoot(html, w, h, file) {
  const win = new BrowserWindow({
    width: w, height: h, show: false, frame: false, useContentSize: true,
    backgroundColor: '#fafaf8',
    webPreferences: { offscreen: false, paintWhenInitiallyHidden: true, backgroundThrottling: false },
  });
  const tmp = path.join(OUT, '_art-' + file.replace(/\.bmp$/, '') + '.html');
  fs.writeFileSync(tmp, html);
  await win.loadFile(tmp);
  await new Promise((r) => setTimeout(r, 400));
  let img = await win.webContents.capturePage();
  const s = img.getSize();
  img = img.resize({ width: w, height: h, quality: 'best' }); // force exact 1x dims regardless of display DPI
  const bmp = bgraToBmp24(img.toBitmap(), w, h);
  fs.writeFileSync(path.join(OUT, file), bmp);
  try { fs.writeFileSync(path.join(OUT, file.replace(/\.bmp$/, '.preview.png')), img.toPNG()); } catch {} // PNG copy for eyeballing only — NOT used by the build
  console.log('wrote', file, w + 'x' + h, bmp.length + ' bytes (captured ' + s.width + 'x' + s.height + ')');
  try { fs.rmSync(tmp); } catch {} // NOTE: do NOT win.destroy() here — dropping to zero windows triggers the default quit and aborts the next load
}

app.disableHardwareAcceleration();
app.on('window-all-closed', () => {}); // keep the app alive between captures (default would quit and abort loads)
app.whenReady().then(async () => {
  try {
    fs.mkdirSync(OUT, { recursive: true });
    await shoot(sidebarHTML, 164, 314, 'installerSidebar.bmp');
    await shoot(headerHTML, 150, 57, 'installerHeader.bmp');
    console.log('OK');
    app.exit(0);
  } catch (e) { console.error('FAILED', e && e.stack || e); app.exit(1); }
});
