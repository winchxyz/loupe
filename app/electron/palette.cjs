/* deZign+ · palette.cjs — HOST-SIDE deterministic design-system board (owner req: the asset-board must appear as a
   labelled canvas frame showing the site's colours / fonts / accents / spacing). Parses the project's styles.css
   :root custom properties and renders a clean, always-accurate palette.html style-guide. Free, instant, reliable —
   the same host-does-the-deterministic-work pattern as smart-imagery + the verify loop (the agent-turn version was
   ~$1 / ~5min per site and flaky, so this replaces it). Reflects the REAL tokens, so it can never lie about them. */
const fs = require('fs');
const path = require('path');

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Pull the FIRST `:root { … }` declaration block (the light/base tokens). Returns the inner text or ''.
function rootBlock(css) {
  const m = css.match(/:root\s*\{([\s\S]*?)\}/);
  return m ? m[1] : '';
}
// Parse `--name: value;` pairs from a declaration block (values may contain commas / parens / functions).
function parseVars(block) {
  const vars = new Map();
  const re = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(block))) vars.set(m[1].trim(), m[2].trim().replace(/\s*\/\*[\s\S]*?\*\//g, '').trim());
  return vars;
}
// Resolve one level of var() references so a token like `--accent: var(--brand)` classifies by its real value.
function resolve(val, vars, depth = 0) {
  if (depth > 4) return val;
  const m = String(val).match(/^var\(\s*(--[a-z0-9-]+)\s*(?:,[^)]*)?\)$/i);
  if (m && vars.has(m[1])) return resolve(vars.get(m[1]), vars, depth + 1);
  return val;
}

const isGradient = (v) => /(?:linear|radial|conic)-gradient\s*\(/i.test(v);
const isColor = (v) => /^#[0-9a-f]{3,8}$/i.test(v) || /^(?:rgb|hsl|hwb|lab|lch|oklab|oklch|color)\s*\(/i.test(v) || /^(?:transparent|currentcolor|white|black|red|blue|green|orange|purple|teal|pink|gray|grey|navy|gold|ink|cream|charcoal)$/i.test(v);
const isLen = (v) => /^-?[\d.]+(?:px|rem|em|vw|vh|vmin|vmax|%)$/.test(v) || /^clamp\s*\(/i.test(v) || /^calc\s*\(/i.test(v);
const looksFont = (n, v) => /(?:^|--)(?:font|ui|mono|family|type|display|body|head|serif|sans)(?:-|$)/i.test(n) || /(?:serif|sans-serif|monospace|system-ui|['"][A-Za-z])/.test(v);
const looksRadius = (n) => /(?:^|-)(?:r|radius|rounded|corner)(?:-|$)/i.test(n);
const looksSpace = (n) => /(?:^|-)(?:space|spacing|gap|size|pad|margin|gutter|s)(?:-|\d|$)/i.test(n);
const looksEase = (n, v) => /(?:ease|motion|transition|dur|duration|timing)/i.test(n) || /cubic-bezier|\b\d*\.?\d+m?s\b/i.test(v);

// Classify every token into buckets for the board.
function classify(vars) {
  const colors = [], grads = [], fonts = [], radii = [], spaces = [], eases = [], other = [];
  for (const [name, raw] of vars) {
    const val = resolve(raw, vars);
    if (isGradient(val)) grads.push({ name, val });
    else if (isColor(val)) colors.push({ name, val });
    else if (looksFont(name, val)) fonts.push({ name, val });
    else if (isLen(val) && looksRadius(name)) radii.push({ name, val });
    else if (isLen(val) && looksSpace(name)) spaces.push({ name, val });
    else if (looksEase(name, val)) eases.push({ name, val });
    else other.push({ name, val });
  }
  return { colors, grads, fonts, radii, spaces, eases, other };
}

// A human role label from the token name (e.g. --accent-deep → "Accent deep").
const roleLabel = (name) => name.replace(/^--/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

function renderColor(c) {
  const code = /^--/.test(c.name) ? `<code>${esc(c.name)}</code>` : ''; // real token → show the --var; harvested literal → role + value only
  return `<div class="sw"><div class="sw-chip" style="background:${esc(c.val)}"></div>`
    + `<div class="sw-meta"><b>${esc(roleLabel(c.name))}</b>${code}<span>${esc(c.val)}</span></div></div>`;
}
function renderGrad(g) {
  return `<div class="sw"><div class="sw-chip grad" style="background:${esc(g.val)}"></div>`
    + `<div class="sw-meta"><b>${esc(roleLabel(g.name))}</b><code>${esc(g.name)}</code><span class="clip">${esc(g.val)}</span></div></div>`;
}
function renderFont(f) {
  const sizes = [{ px: 42, w: 700 }, { px: 26, w: 600 }, { px: 17, w: 400 }];
  const rows = sizes.map((s) => `<div class="spec-row" style="font-family:${esc(f.val)};font-size:${s.px}px;font-weight:${s.w}">The spectrum resolves. 0123</div>`).join('');
  return `<div class="font"><div class="font-h"><b>${esc(roleLabel(f.name))}</b><code>${esc(f.name)}</code><span class="clip">${esc(f.val)}</span></div>${rows}</div>`;
}
function renderToken(t, kind) {
  const box = kind === 'radius'
    ? `<div class="tok-box" style="border-radius:${esc(t.val)}"></div>`
    : `<div class="tok-bar" style="width:${esc(t.val)}"></div>`;
  return `<div class="tok">${box}<div class="tok-meta"><code>${esc(t.name)}</code><span>${esc(t.val)}</span></div></div>`;
}

// Build the whole board HTML. cssHref = relative link to the site's styles.css (so swatches use the REAL
// tokens); null = a single-file site — inlineRoot (the :root block extracted from index.html) is embedded.
function renderBoard(buckets, cssHref, projName, inlineRoot) {
  const { colors, grads, fonts, radii, spaces, eases, other } = buckets;
  const section = (title, inner, cls) => inner ? `<section><h2>${esc(title)}</h2><div class="${cls}">${inner}</div></section>` : '';
  const accent = (colors.find((c) => /accent|brand|primary/i.test(c.name)) || colors[0] || { val: '#171717' }).val;
  const ink = (colors.find((c) => /ink|text|fg|foreground/i.test(c.name)) || { val: '#171717' }).val;
  const bg = (colors.find((c) => /(^|-)bg|background|surface|panel/i.test(c.name)) || { val: '#ffffff' }).val;
  const comps = `
    <div class="comp"><button class="cbtn" style="background:${esc(accent)};color:${esc(bg)}">Primary action</button>
      <span class="cchip">chip</span>
      <input class="cinput" value="Input field" readonly></div>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Design System</title>
${cssHref ? `<link rel="stylesheet" href="${esc(cssHref)}">` : `<style>:root{${inlineRoot || ''}}</style>`}
<style>
  /* self-contained board layout (does not depend on the site's own classes; the linked styles.css supplies the :root vars) */
  .dzb{max-width:1080px;margin:0 auto;padding:56px 40px 80px;font-family:${esc(fonts[0] ? fonts[0].val : 'system-ui, sans-serif')};color:${esc(ink)};background:${esc(bg)};min-height:100vh;box-sizing:border-box}
  .dzb *{box-sizing:border-box}
  .dzb-head{display:flex;align-items:baseline;gap:14px;margin:0 0 6px}
  .dzb-head h1{font-size:34px;font-weight:800;letter-spacing:-.03em;margin:0}
  .dzb-head .k{font:600 11px/1 ui-monospace,monospace;letter-spacing:.18em;text-transform:uppercase;opacity:.55}
  .dzb-sub{opacity:.6;font-size:14px;margin:0 0 40px}
  .dzb section{margin:0 0 44px}
  .dzb h2{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;opacity:.5;margin:0 0 16px;padding-bottom:9px;border-bottom:1px solid rgba(128,128,128,.22)}
  .swgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}
  .sw{display:flex;flex-direction:column;gap:9px}
  .sw-chip{height:78px;border-radius:10px;border:1px solid rgba(128,128,128,.22)}
  .sw-chip.grad{border:0}
  .sw-meta{display:flex;flex-direction:column;gap:1px;font-size:12px}
  .sw-meta b{font-weight:600}
  .sw-meta code{font:11px/1.4 ui-monospace,monospace;opacity:.85}
  .sw-meta span{font:11px/1.4 ui-monospace,monospace;opacity:.55}
  .clip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}
  .type{display:flex;flex-direction:column;gap:26px}
  .font-h{display:flex;align-items:baseline;gap:10px;margin-bottom:10px}
  .font-h b{font-weight:600;font-size:14px}.font-h code{font:11px/1 ui-monospace,monospace;opacity:.7}.font-h span{font:11px/1 ui-monospace,monospace;opacity:.45}
  .spec-row{line-height:1.1;letter-spacing:-.02em;margin:2px 0}
  .toks{display:flex;flex-wrap:wrap;gap:22px;align-items:flex-end}
  .tok{display:flex;flex-direction:column;gap:8px}
  .tok-box{width:52px;height:52px;background:rgba(128,128,128,.18);border:1px solid rgba(128,128,128,.3)}
  .tok-bar{height:14px;min-width:2px;background:${esc(accent)};border-radius:3px}
  .tok-meta code{font:11px/1.3 ui-monospace,monospace;display:block}.tok-meta span{font:11px/1.3 ui-monospace,monospace;opacity:.55}
  .comp{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
  .cbtn{border:0;padding:12px 22px;border-radius:8px;font:600 14px/1 inherit;cursor:pointer}
  .cchip{padding:6px 13px;border-radius:999px;border:1px solid rgba(128,128,128,.3);font:500 12px/1 inherit}
  .cinput{padding:11px 14px;border-radius:8px;border:1px solid rgba(128,128,128,.3);background:transparent;color:inherit;font:14px/1 inherit}
</style></head><body>
<div class="dzb">
  <div class="dzb-head"><span class="k">Design System</span><h1>${esc(projName || 'Design System')}</h1></div>
  <p class="dzb-sub">The palette, type and tokens this site is built from. Generated from the site's design tokens, always in sync.</p>
  ${section('Colour', colors.map(renderColor).join(''), 'swgrid')}
  ${section('Gradients / accents', grads.map(renderGrad).join(''), 'swgrid')}
  ${section('Type', fonts.map(renderFont).join(''), 'type')}
  ${section('Radius', radii.map((t) => renderToken(t, 'radius')).join(''), 'toks')}
  ${section('Spacing', spaces.map((t) => renderToken(t, 'space')).join(''), 'toks')}
  ${section('Components', comps, 'comp-wrap')}
</div></body></html>`;
}

// Generate palette.html for a project from its styles.css :root tokens. Returns { ok, wrote, counts } | { ok:false, reason }.
// tokens from a CSS text, or null when it has no usable :root colour/type tokens
function extractTokens(css) {
  const block = rootBlock(css || '');
  if (!block) return null;
  const vars = parseVars(block);
  if (!vars.size) return null;
  const buckets = classify(vars);
  if (!buckets.colors.length && !buckets.grads.length && !buckets.fonts.length) return null;
  return { block, buckets };
}

// FALLBACK — no usable :root tokens anywhere. Many real sites (AI-built single-file pages, Tailwind/utility, or
// literal-colour designs) never declare `:root` custom properties, so extractTokens returns null and the board used
// to silently not appear. Harvest the actual colours + font-families the site USES (from styles.css + index.html —
// stylesheet text and inline styles), rank by frequency, and role-guess the top few so the board still reflects the
// real palette. Same host-guaranteed principle as smart-imagery: the frame must always appear.
function harvestFromRaw(dir) {
  let src = '';
  for (const f of ['styles.css', 'index.html']) { try { src += fs.readFileSync(path.join(dir, f), 'utf8') + '\n'; } catch {} }
  if (!src) return null;
  const norm = (c) => { let v = String(c).trim().toLowerCase().replace(/\s+/g, ''); const s = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(v); if (s) v = '#' + s[1] + s[1] + s[2] + s[2] + s[3] + s[3]; return v; };
  const bad = /^(transparent|currentcolor|inherit|initial|unset|none)$/;
  const colorRe = /#[0-9a-fA-F]{3,8}\b|(?:rgb|hsl)a?\([^)]*\)/g;
  const freq = new Map(); let m;
  while ((m = colorRe.exec(src))) { const v = norm(m[0]); if (v.length < 4 || bad.test(v)) continue; freq.set(v, (freq.get(v) || 0) + 1); }
  let ranked = [...freq.entries()].sort((a, b) => b[1] - a[1]).map(([v]) => v).slice(0, 14);
  if (!ranked.length) return null;
  const hex6 = (v) => { const h = /^#([0-9a-f]{6})$/.exec(v); return h ? parseInt(h[1], 16) : null; };
  const lum = (v) => { const n = hex6(v); if (n == null) return null; const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255; return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; };
  const sat = (v) => { const n = hex6(v); if (n == null) return 0; const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b); return mx === 0 ? 0 : (mx - mn) / mx; };
  const hexes = ranked.filter((v) => hex6(v) != null);
  const bg = hexes.slice().sort((a, b) => lum(b) - lum(a))[0];
  const ink = hexes.slice().sort((a, b) => lum(a) - lum(b))[0];
  const accent = hexes.slice().sort((a, b) => sat(b) - sat(a))[0];
  let idx = 0;
  const colors = ranked.map((v) => {
    let role = null;
    if (v === bg && lum(v) > 0.6) role = 'Background';
    else if (v === ink && lum(v) < 0.4) role = 'Text / ink';
    else if (v === accent && sat(v) > 0.25) role = 'Accent';
    return { name: role || ('Colour ' + (++idx)), val: v };
  });
  const fontRe = /font-family\s*:\s*([^;}"'\n{]+)/gi; const seen = new Set(); const fonts = []; let fm;
  while ((fm = fontRe.exec(src)) && fonts.length < 4) {
    const fam = fm[1].replace(/!important/i, '').trim(); const k = fam.toLowerCase();
    if (fam && !seen.has(k) && !bad.test(k) && !/var\(/i.test(fam)) { seen.add(k); fonts.push({ name: 'Font ' + (fonts.length + 1), val: fam }); } // skip bare var() fonts — no :root here to resolve them, they'd render as a broken fallback
  }
  return { colors, grads: [], fonts, radii: [], spaces: [], eases: [], other: [] };
}

function generatePalette(dir, opts = {}) {
  if (!dir) return { ok: false, reason: 'no dir' };
  // R3 cold-eye (owner-found): a SINGLE-FILE site keeps all styles inline in index.html — either there is
  // no styles.css at all, or (the New-site case) styles.css is still the token-less STARTER sheet. Both
  // used to skip the palette board silently on a perfectly valid build. Prefer styles.css when it carries
  // real tokens; otherwise fall back to the page's inline <style> blocks and EMBED the extracted :root
  // (there is no stylesheet to link).
  let cssHref = 'styles.css', tokens = null;
  try { tokens = extractTokens(fs.readFileSync(path.join(dir, 'styles.css'), 'utf8')); } catch {}
  if (!tokens) {
    try {
      const page = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
      const inline = (page.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || []).map((s) => s.replace(/<\/?style[^>]*>/gi, '')).join('\n');
      tokens = extractTokens(inline);
      cssHref = null;
    } catch {}
  }
  if (!tokens) { // no :root tokens anywhere → harvest the literal colours/fonts the site actually uses
    const buckets = harvestFromRaw(dir);
    if (buckets) { tokens = { block: '', buckets }; cssHref = null; }
  }
  if (!tokens) return { ok: false, reason: 'no colours found in styles.css or index.html' };
  const { block, buckets } = tokens;
  const projName = opts.name || path.basename(dir).replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const html = renderBoard(buckets, cssHref, projName, block);
  const out = path.join(dir, 'palette.html');
  // idempotent: skip the write (and the reload it would trigger) when the board is unchanged
  try { if (fs.readFileSync(out, 'utf8') === html) return { ok: true, wrote: false, unchanged: true }; } catch {}
  try { fs.writeFileSync(out, html); }
  catch (e) { return { ok: false, reason: 'write failed: ' + (e && e.message) }; }
  return { ok: true, wrote: 'palette.html', counts: { colors: buckets.colors.length, grads: buckets.grads.length, fonts: buckets.fonts.length, radii: buckets.radii.length, spaces: buckets.spaces.length } };
}

module.exports = { generatePalette, parseVars, classify, rootBlock };

// CLI: node palette.cjs <projectDir>  → generate + print the result (manual check)
if (require.main === module) {
  const dir = process.argv[2] || process.cwd();
  console.log(JSON.stringify(generatePalette(dir), null, 2));
}
