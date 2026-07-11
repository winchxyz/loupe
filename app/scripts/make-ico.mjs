/* make-ico.mjs — build brand/loupe-icon.ico from brand/loupe-icon-256.png (R3 packaging).
   Multi-size ICO: 16/32/64/128 as classic 32-bit BGRA BMP entries (box-downscaled from the 256 source),
   256 as a PNG-compressed entry (the Vista+ convention). No native deps — pngjs only. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PNG } from 'pngjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(here, '..', 'brand', 'loupe-icon-256.png');
const OUT = path.join(here, '..', 'brand', 'loupe-icon.ico');

const src = PNG.sync.read(fs.readFileSync(SRC));
if (src.width !== 256 || src.height !== 256) { console.error(`source must be 256x256, got ${src.width}x${src.height}`); process.exit(1); }

// box-downscale by an integer factor (256 -> 128/64/32/16), averaging RGBA over each block
function downscale(png, size) {
  const f = png.width / size;
  const out = new PNG({ width: size, height: size });
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let r = 0, g = 0, b = 0, a = 0;
    for (let dy = 0; dy < f; dy++) for (let dx = 0; dx < f; dx++) {
      const i = (((y * f + dy) * png.width) + (x * f + dx)) * 4;
      r += png.data[i]; g += png.data[i + 1]; b += png.data[i + 2]; a += png.data[i + 3];
    }
    const n = f * f, o = ((y * size) + x) * 4;
    out.data[o] = Math.round(r / n); out.data[o + 1] = Math.round(g / n); out.data[o + 2] = Math.round(b / n); out.data[o + 3] = Math.round(a / n);
  }
  return out;
}

// classic ICO BMP entry: BITMAPINFOHEADER (height doubled) + bottom-up BGRA rows + 1bpp AND mask (all opaque)
function bmpEntry(png) {
  const s = png.width;
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); header.writeInt32LE(s, 4); header.writeInt32LE(s * 2, 8);
  header.writeUInt16LE(1, 12); header.writeUInt16LE(32, 14); header.writeUInt32LE(0, 16);
  header.writeUInt32LE(s * s * 4 + (s * Math.ceil(s / 32) * 4), 20);
  const xor = Buffer.alloc(s * s * 4);
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const i = ((y * s) + x) * 4, o = (((s - 1 - y) * s) + x) * 4; // bottom-up
    xor[o] = png.data[i + 2]; xor[o + 1] = png.data[i + 1]; xor[o + 2] = png.data[i]; xor[o + 3] = png.data[i + 3]; // BGRA
  }
  const andMask = Buffer.alloc(s * Math.ceil(s / 32) * 4); // all 0 = rely on the alpha channel
  return Buffer.concat([header, xor, andMask]);
}

const sizes = [16, 32, 64, 128];
const images = sizes.map((s) => ({ size: s, data: bmpEntry(downscale(src, s)) }));
images.push({ size: 256, data: fs.readFileSync(SRC) }); // 256 stays PNG-compressed

const count = images.length;
const dir = Buffer.alloc(6);
dir.writeUInt16LE(0, 0); dir.writeUInt16LE(1, 2); dir.writeUInt16LE(count, 4);
let offset = 6 + count * 16;
const entries = [], blobs = [];
for (const img of images) {
  const e = Buffer.alloc(16);
  e.writeUInt8(img.size === 256 ? 0 : img.size, 0); // 0 = 256
  e.writeUInt8(img.size === 256 ? 0 : img.size, 1);
  e.writeUInt8(0, 2); e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(img.data.length, 8); e.writeUInt32LE(offset, 12);
  offset += img.data.length;
  entries.push(e); blobs.push(img.data);
}
fs.writeFileSync(OUT, Buffer.concat([dir, ...entries, ...blobs]));
console.log(`wrote ${OUT} (${fs.statSync(OUT).size} bytes, sizes: ${sizes.join('/')}/256)`);
