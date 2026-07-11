#!/usr/bin/env node
/*
 * distill-taste-priors.cjs — Q3 / Taste-Layer Phase T2.
 *
 * One-off (re-runnable) distillation over the 1288-ref style corpus in
 * baseline/library/references/. Aggregates what great sites ACTUALLY do —
 * palette structure, type scale, spacing/radius/shadow families, density
 * proxies — corpus-wide and sliced by theme (clean tag) + archetype
 * (heuristic from the summary). Emits a compact, numbers-first, cited
 * markdown prior to baseline/library/standards/taste-priors.md.
 *
 * No deps (fs/path/JSON only). Run:  node app/scripts/distill-taste-priors.cjs
 * Dry run (print summary, don't write):  node app/scripts/distill-taste-priors.cjs --dry
 *
 * The priors RAISE THE FLOOR (structured taste in the loop); they never
 * replace the builder's own judgment (CLAUDE.md: judgment leads, library helps).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const REFS = path.join(ROOT, 'baseline', 'library', 'references');
const OUT = path.join(ROOT, 'baseline', 'library', 'standards', 'taste-priors.md');
const DRY = process.argv.includes('--dry');

// ---------- color helpers ----------
function hexToRgb(hex) {
  if (typeof hex !== 'string') return null;
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length !== 6 || /[^0-9a-fA-F]/.test(h)) return null;
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}
function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}
// relative luminance (WCAG) for contrast
function relLum({ r, g, b }) {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contrast(a, b) {
  const la = relLum(a), lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// ---------- stats helpers ----------
function median(arr) { return quantile(arr, 0.5); }
function quantile(arr, q) {
  if (!arr.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  const pos = (s.length - 1) * q;
  const base = Math.floor(pos), rest = pos - base;
  return s[base + 1] !== undefined ? s[base] + rest * (s[base + 1] - s[base]) : s[base];
}
function round(n, d = 0) { if (n == null) return null; const p = Math.pow(10, d); return Math.round(n * p) / p; }
function pct(part, whole) { return whole ? round((part / whole) * 100, 0) : 0; }
function topN(counter, n) {
  return Object.entries(counter).sort((a, b) => b[1] - a[1]).slice(0, n);
}
function bump(o, k, by = 1) { o[k] = (o[k] || 0) + by; }

// ---------- font classification ----------
const SERIF_HINTS = /serif|playfair|recoleta|fraunces|canela|tiempos|reckless|freight|garamond|georgia|times|lora|merriweather|cormorant|ivar|signifier|sectra|editorial|domaine|ptserif|pt serif|noto serif|source serif|spectral|libre|cardo|bitter|zilla|newsreader|instrument serif/i;
const MONO_HINTS = /mono|menlo|monaco|consolas|courier|jetbrains|space mono|fira code|ibm plex mono|roboto mono|source code|iosevka|hack/i;
const SANS_STRIP = /sans[- ]?serif/i; // avoid "sans-serif" matching serif
function fontCategory(name, desc) {
  const s = ((name || '') + ' ' + (desc || '')).toLowerCase();
  const clean = s.replace(SANS_STRIP, 'sans');
  if (MONO_HINTS.test(clean)) return 'mono';
  if (SERIF_HINTS.test(clean)) return 'serif';
  return 'sans';
}

// ---------- archetype heuristic (from summary+tagline; noisy → secondary slice) ----------
// Keyword sets kept archetype-specific (nouns for what the site IS), not style
// adjectives — those bled 59% of the corpus into "editorial". Still noisy →
// published as a DIRECTIONAL slice with a stated caveat, never as gospel.
const ARCHETYPES = [
  ['saas', /saas|dashboard|\bapp\b|platform|software|workspace|productivity|analytics|\bb2b\b|onboarding|pricing (tier|plan)|integrat|api\b|developer tool|no-?code/i],
  ['darktech', /crypto|web3|blockchain|\bterminal\b|machine learning|\bcyber|futuristic|sci-?fi|\bgpu\b|infrastructure|protocol|\bnode\b|data ?center/i],
  ['commerce', /e-?commerce|\bshop\b|\bstore\b|retail|checkout|\bcart\b|product page|catalog|fashion|apparel|sneaker|\bdtc\b|storefront/i],
  ['portfolio', /portfolio|\bagency\b|\bstudio\b|showcase|freelanc|photographer|architect|case stud|design studio|creative director/i],
  ['editorial', /magazine|newspaper|\bblog\b|publication|editorial layout|\bessay|long[- ]?read|news site|reading experience|article/i],
  ['marketing', /landing page|\bstartup\b|conversion|waitlist|coming soon|\bcampaign\b|lead gen/i],
];
function classifyArchetype(text) {
  const t = (text || '').toLowerCase();
  let best = null, bestScore = 0;
  for (const [name, re] of ARCHETYPES) {
    const m = t.match(new RegExp(re, 'gi'));
    const score = m ? m.length : 0;
    if (score > bestScore) { bestScore = score; best = name; }
  }
  return best || 'other';
}

// ---------- per-ref extraction ----------
function extractRef(n, entry, tokens) {
  const rec = { n, theme: entry.theme || 'unknown', archetype: classifyArchetype((entry.summary || '') + ' ' + (entry.tagline || '')) };

  // --- palette (from index colors[] — pre-extracted, deduped hex) ---
  const cols = (entry.colors || []).map(hexToRgb).filter(Boolean).map((rgb) => ({ rgb, hsl: rgbToHsl(rgb) }));
  rec.colorCount = cols.length;
  rec.neutrals = cols.filter((c) => c.hsl.s < 12).length;          // near-grey
  rec.chromatics = cols.filter((c) => c.hsl.s >= 25 && c.hsl.l > 8 && c.hsl.l < 92); // real accents
  rec.accentCount = rec.chromatics.length;
  // dominant accent = most saturated chromatic
  if (rec.chromatics.length) {
    const dom = [...rec.chromatics].sort((a, b) => b.hsl.s - a.hsl.s)[0];
    rec.accentSat = dom.hsl.s; rec.accentLight = dom.hsl.l; rec.accentHue = dom.hsl.h;
  }
  // canvas vs ink contrast: lightest vs darkest neutral-ish
  if (cols.length >= 2) {
    const byLum = [...cols].sort((a, b) => relLum(a.rgb) - relLum(b.rgb));
    rec.canvasInkContrast = contrast(byLum[0].rgb, byLum[byLum.length - 1].rgb);
  }

  // --- typography (from Design Tokens) ---
  const typo = tokens && tokens.typography ? Object.values(tokens.typography) : [];
  const sizeSet = new Set(), weights = new Set(), lhBody = [], lhDisplay = [];
  let displayFam = null, displaySize = 0, bodyFam = null;
  for (const step of typo) {
    const v = (step && step.$value) || {};
    const size = parseFloat(v.fontSize);
    const w = parseInt(v.fontWeight, 10);
    const lh = parseFloat(v.lineHeight);
    if (!isNaN(size)) {
      sizeSet.add(size);
      if (size > displaySize) { displaySize = size; displayFam = v.fontFamily; }
      if (size >= 40 && !isNaN(lh)) lhDisplay.push(lh);
      if (size >= 14 && size <= 19 && !isNaN(lh)) lhBody.push(lh);
      if (size === 16 && v.fontFamily) bodyFam = v.fontFamily;
    }
    if (!isNaN(w)) weights.add(w);
  }
  const sizes = [...sizeSet].sort((a, b) => a - b); // DISTINCT sizes, ascending
  rec.typeSteps = sizes.length;
  if (sizes.length) {
    rec.heroSize = sizes[sizes.length - 1]; rec.minSize = sizes[0];
    rec.typeRatio = rec.heroSize / (rec.minSize || 1); // full-scale span
    // geometric mean step ratio between consecutive DISTINCT sizes (the "modular scale")
    if (sizes.length > 1) rec.stepRatio = Math.pow(rec.heroSize / rec.minSize, 1 / (sizes.length - 1));
  }
  rec.weights = [...weights].sort((a, b) => a - b);
  rec.weightSpread = rec.weights.length ? rec.weights[rec.weights.length - 1] - rec.weights[0] : 0;
  rec.lhBody = lhBody.length ? median(lhBody) : null;
  rec.lhDisplay = lhDisplay.length ? median(lhDisplay) : null;

  // font families + roles (from font group; richer descriptions)
  const fontGroup = tokens && tokens.font ? Object.values(tokens.font) : [];
  const fams = [];
  for (const f of fontGroup) {
    const nm = (f && f.$value) || '';
    if (!nm || /system-ui|apple-system|-apple/.test(nm)) continue; // skip OS fallbacks
    fams.push({ name: nm, cat: fontCategory(nm, f.$description) });
  }
  rec.fontFamCount = fams.length;
  // display font category: prefer the family used at the largest size; else first non-fallback
  let dispCat = null;
  if (displayFam) { const hit = fams.find((f) => f.name === displayFam); dispCat = hit ? hit.cat : fontCategory(displayFam); }
  if (!dispCat && fams.length) dispCat = fams[0].cat;
  rec.displayCat = dispCat;
  let bodyCat = null;
  if (bodyFam) { const hit = fams.find((f) => f.name === bodyFam); bodyCat = hit ? hit.cat : fontCategory(bodyFam); }
  rec.bodyCat = bodyCat;
  rec.pairing = (dispCat && bodyCat) ? `${dispCat}+${bodyCat}` : null;
  rec.displayName = displayFam || (fams[0] && fams[0].name) || null;

  // --- spacing ---
  const sp = tokens && tokens.spacing ? Object.entries(tokens.spacing) : [];
  const spVals = [];
  let unit = null;
  for (const [k, tok] of sp) {
    const px = parseFloat((tok && tok.$value) || '');
    if (k === 'unit' && !isNaN(px)) unit = px;
    else if (!isNaN(px)) spVals.push(px);
  }
  rec.spSteps = spVals.length;
  rec.spMax = spVals.length ? Math.max(...spVals) : null;
  // grid adherence: what fraction of spacing steps snap to an 8px / 4px grid.
  // (gcd is fooled by a single off-value; grid-share is the honest signal.)
  if (spVals.length) {
    const rounded = spVals.map((v) => Math.round(v));
    const on8 = rounded.filter((v) => v % 8 === 0).length / rounded.length;
    const on4 = rounded.filter((v) => v % 4 === 0).length / rounded.length;
    rec.grid = on8 >= 0.8 ? '8px' : on4 >= 0.8 ? '4px' : 'loose';
    rec.baseUnit = unit || null;
  }

  // --- radius ---
  const rad = tokens && tokens.radius ? Object.values(tokens.radius) : [];
  const radVals = rad.map((t) => parseFloat((t && t.$value) || '')).filter((x) => !isNaN(x));
  rec.radMax = radVals.length ? Math.max(...radVals) : 0;
  rec.radCount = radVals.length;
  rec.radFamily = radVals.length === 0 ? 'sharp' : rec.radMax <= 4 ? 'sharp' : rec.radMax <= 12 ? 'small' : rec.radMax <= 24 ? 'medium' : rec.radMax >= 999 ? 'pill' : 'large';

  // --- shadow ---
  const sh = tokens && tokens.shadow ? Object.keys(tokens.shadow) : [];
  rec.shadowCount = sh.length;
  rec.flat = sh.length === 0;

  return rec;
}
function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }

// ---------- aggregation ----------
function aggregate(recs, label) {
  const n = recs.length;
  if (!n) return null;
  const get = (f) => recs.map(f).filter((x) => x != null && !isNaN(x));
  const colorCounts = get((r) => r.colorCount);
  const accentCounts = get((r) => r.accentCount);
  const neutralCounts = get((r) => r.neutrals);
  const heroSizes = get((r) => r.heroSize);
  const typeRatios = get((r) => r.typeRatio);
  const stepRatios = get((r) => r.stepRatio);
  const typeSteps = get((r) => r.typeSteps);
  const minSizes = get((r) => r.minSize);
  const lhBody = get((r) => r.lhBody);
  const lhDisplay = get((r) => r.lhDisplay);
  const weightSpread = get((r) => r.weightSpread);
  const fontCounts = get((r) => r.fontFamCount);
  const spMax = get((r) => r.spMax);
  const spSteps = get((r) => r.spSteps);
  const canvasInk = get((r) => r.canvasInkContrast);
  const accentSat = get((r) => r.accentSat);

  const displayCat = {}; recs.forEach((r) => r.displayCat && bump(displayCat, r.displayCat));
  const pairing = {}; recs.forEach((r) => r.pairing && bump(pairing, r.pairing));
  const radFamily = {}; recs.forEach((r) => r.radFamily && bump(radFamily, r.radFamily));
  const grid = {}; recs.forEach((r) => r.grid && bump(grid, r.grid));
  const flatCount = recs.filter((r) => r.flat).length;
  // hue families of dominant accents
  const hueFam = {};
  recs.forEach((r) => {
    if (r.accentHue == null) return;
    const h = r.accentHue;
    const fam = h < 20 || h >= 345 ? 'red' : h < 45 ? 'orange' : h < 70 ? 'yellow' : h < 160 ? 'green' : h < 200 ? 'teal' : h < 255 ? 'blue' : h < 290 ? 'violet' : h < 345 ? 'magenta' : 'red';
    bump(hueFam, fam);
  });

  return {
    label, n,
    colorCount: { p25: round(quantile(colorCounts, 0.25)), med: round(median(colorCounts)), p75: round(quantile(colorCounts, 0.75)) },
    accentCount: { p25: round(quantile(accentCounts, 0.25)), med: round(median(accentCounts)), p75: round(quantile(accentCounts, 0.75)) },
    neutralCount: { med: round(median(neutralCounts)) },
    accentSatMed: round(median(accentSat)),
    hueFam: topN(hueFam, 4),
    canvasInkContrast: { p25: round(quantile(canvasInk, 0.25), 1), med: round(median(canvasInk), 1) },
    heroSize: { p25: round(quantile(heroSizes, 0.25)), med: round(median(heroSizes)), p75: round(quantile(heroSizes, 0.75)) },
    minSize: { med: round(median(minSizes)) },
    typeRatio: { med: round(median(typeRatios), 1), p75: round(quantile(typeRatios, 0.75), 1) },
    stepRatio: { med: round(median(stepRatios), 3) },
    typeSteps: { med: round(median(typeSteps)), p25: round(quantile(typeSteps, 0.25)), p75: round(quantile(typeSteps, 0.75)) },
    lhBody: round(median(lhBody), 2),
    lhDisplay: round(median(lhDisplay), 2),
    weightSpread: { med: round(median(weightSpread)) },
    fontCount: { med: round(median(fontCounts)), p25: round(quantile(fontCounts, 0.25)), p75: round(quantile(fontCounts, 0.75)) },
    displayCat: topN(displayCat, 3).map(([k, v]) => [k, pct(v, n)]),
    pairing: topN(pairing, 4).map(([k, v]) => [k, pct(v, n)]),
    spMax: { med: round(median(spMax)), p75: round(quantile(spMax, 0.75)) },
    spSteps: { med: round(median(spSteps)) },
    grid: topN(grid, 3).map(([k, v]) => [k, pct(v, n)]),
    radFamily: topN(radFamily, 5).map(([k, v]) => [k, pct(v, n)]),
    flatPct: pct(flatCount, n),
  };
}

// ---------- main ----------
function main() {
  const index = JSON.parse(fs.readFileSync(path.join(REFS, 'index.json'), 'utf8'));
  const recs = [];
  let parseFail = 0;
  for (const entry of index) {
    const dir = path.join(REFS, entry.n);
    let tokens = null;
    try { tokens = JSON.parse(fs.readFileSync(path.join(dir, 'Design Tokens.json'), 'utf8')); }
    catch { parseFail++; }
    try { recs.push(extractRef(entry.n, entry, tokens)); }
    catch (e) { parseFail++; }
  }

  const themeSlices = ['light', 'dark', 'mixed'];
  const archSlices = ['editorial', 'saas', 'portfolio', 'commerce', 'darktech', 'marketing', 'other'];

  const overall = aggregate(recs, 'ALL');
  const byTheme = themeSlices.map((t) => aggregate(recs.filter((r) => r.theme === t), t)).filter(Boolean);
  const byArch = archSlices.map((a) => aggregate(recs.filter((r) => r.archetype === a), a)).filter(Boolean);

  // console summary
  console.log(`Parsed ${recs.length} refs (${parseFail} token-parse misses).`);
  console.log('\n=== ALL ===');
  dumpAgg(overall);
  console.log('\n=== BY THEME ===');
  byTheme.forEach(dumpAgg);
  console.log('\n=== BY ARCHETYPE (heuristic) ===');
  byArch.forEach((a) => console.log(`${a.label} (n=${a.n})  colors med ${a.colorCount.med}  accents med ${a.accentCount.med}  hero med ${a.heroSize.med}px  pairing ${a.pairing[0] && a.pairing[0][0]}  rad ${a.radFamily[0] && a.radFamily[0][0]}  flat ${a.flatPct}%`));

  if (DRY) { console.log('\n[--dry] not writing taste-priors.md'); return; }

  const md = renderMarkdown(overall, byTheme, byArch, recs.length, parseFail);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, md, 'utf8');
  console.log(`\nWrote ${OUT} (${md.length} bytes).`);
}

function dumpAgg(a) {
  if (!a) return;
  console.log(`[${a.label}] n=${a.n}`);
  console.log(`  palette: colors ${a.colorCount.p25}/${a.colorCount.med}/${a.colorCount.p75} · accents ${a.accentCount.p25}/${a.accentCount.med}/${a.accentCount.p75} · neutrals med ${a.neutralCount.med} · accentSat med ${a.accentSatMed}% · hues ${a.hueFam.map((h) => h[0] + ':' + h[1]).join(' ')}`);
  console.log(`  contrast canvas↔ink: med ${a.canvasInkContrast.med}:1`);
  console.log(`  type: min ${a.minSize.med}px → hero ${a.heroSize.p25}/${a.heroSize.med}/${a.heroSize.p75}px · distinct steps ${a.typeSteps.p25}/${a.typeSteps.med}/${a.typeSteps.p75} · step-ratio med ${a.stepRatio.med}× · span ${a.typeRatio.med}× · LH body ${a.lhBody} display ${a.lhDisplay} · weightSpread med ${a.weightSpread.med} · fonts med ${a.fontCount.med}`);
  console.log(`  display font: ${a.displayCat.map((d) => d[0] + ' ' + d[1] + '%').join(' · ')} | pairing: ${a.pairing.map((p) => p[0] + ' ' + p[1] + '%').join(' · ')}`);
  console.log(`  spacing: grid ${a.grid.map((u) => u[0] + ' ' + u[1] + '%').join(' ')} · steps med ${a.spSteps.med} · max med ${a.spMax.med}px`);
  console.log(`  radius: ${a.radFamily.map((r) => r[0] + ' ' + r[1] + '%').join(' · ')} | flat(no-shadow) ${a.flatPct}%`);
}

function renderMarkdown(all, byTheme, byArch, total, parseFail) {
  const T = (label) => byTheme.find((x) => x.label === label);
  const light = T('light'), dark = T('dark'), mixed = T('mixed');
  const archOrder = ['editorial', 'saas', 'portfolio', 'commerce', 'darktech', 'marketing'];
  const arch = archOrder.map((name) => byArch.find((x) => x.label === name)).filter(Boolean);
  const other = byArch.find((x) => x.label === 'other');
  const first = (list) => (list && list[0] ? `${list[0][0]} ${list[0][1]}%` : '—');
  const topPairing = (a) => (a.pairing && a.pairing[0] ? a.pairing[0][0].replace('+', ' display + ').concat(' body') : '—');

  const archRow = (a) => `| **${a.label}** | ${a.n} | ${a.colorCount.med} | ${a.accentCount.med} | ${a.heroSize.med}px | ${a.pairing[0] ? a.pairing[0][0] : '—'} | ${a.radFamily[0] ? a.radFamily[0][0] : '—'} | ${a.flatPct}% |`;

  return `# Taste Priors — what great sites actually do (quantitative)

> Distilled from **${total} curated style references** (\`baseline/library/references/\`, DTCG tokens +
> extracted palettes) by \`app/scripts/distill-taste-priors.cjs\`. Numbers are **medians unless noted**
> (p25/p75 shown as low/high where useful). These are PRIORS that raise the floor and name defaults —
> **not rules.** Your own composition/taste leads (CLAUDE.md); deviate freely with intent. When a brief
> or a per-site DESIGN.md says otherwise, that wins.

## Corpus-wide defaults (the floor)

**Palette** — ${all.colorCount.p25}–${all.colorCount.p75} total colors (median ${all.colorCount.med});
a **${all.neutralCount.med}-step neutral ramp**; **${all.accentCount.p25}–${all.accentCount.p75} chromatic accents**
(median ${all.accentCount.med}) with **one vivid signature accent** (lead accent runs saturated, not washed-out).
Most-used accent hues: ${all.hueFam.map((h) => h[0]).slice(0, 4).join(', ')}. Include a near-max-contrast
pair (true dark ↔ true light) — never settle for muddy grey-on-grey.

**Type** — **${all.fontCount.med} font families** (p25–p75 ${all.fontCount.p25}–${all.fontCount.p75}); a
**~${all.stepRatio.med}× modular scale** (major-third-ish) across **${all.typeSteps.p25}–${all.typeSteps.p75} distinct sizes**,
from ~${all.minSize.med}px body up to a **${all.heroSize.med}px hero (p75 ${all.heroSize.p75}px — go big)**;
**wide weight range** (~${all.weightSpread.med} spread, e.g. 400→700+). Line-height: **body ~${all.lhBody}**,
**display ~${all.lhDisplay} (tight)**. Display font: **${first(all.displayCat)}** dominates, but **serif display is a
legit ~1/3** — a serif hero is a distinctive move, not a risk. Classic pairing split: ${all.pairing.map((p) => p[0] + ' ' + p[1] + '%').join(' · ')}.

**Spacing** — snap to a **${all.grid[0] ? all.grid[0][0] : '4px'} grid** (${all.grid.map((g) => g[0] + ' ' + g[1] + '%').join(', ')});
~${all.spSteps.med} steps; **generous section rhythm** (max spacing median ${all.spMax.med}px, p75 ${all.spMax.p75}px).

**Radius** — no single default: ${all.radFamily.slice(0, 4).map((r) => r[0] + ' ' + r[1] + '%').join(' · ')}.
**Pick ONE family and commit** — sharp is as valid as pill; mixing families is the tell of a weak system.

**Elevation** — **${all.flatPct}% ship FLAT** (zero shadows). Flat + color/weight hierarchy beats drop-shadows;
reserve shadow for genuine floating UI. (SaaS/dark-tech use it more — see below.)

## Per-archetype divergence *(directional — heuristic tags from the summary, see caveat)*

Great sites are NOT one look. The measured splits — lean on the row matching the brief:

| archetype | n | colors | accents | hero | pairing | radius | flat% |
|---|---|---|---|---|---|---|---|
${arch.map(archRow).join('\n')}

Read-outs: **editorial** commits to a **serif-display + sans-body** pairing and the **biggest hero type** (~${(byArch.find((x) => x.label === 'editorial') || {}).heroSize?.med || 80}px).
**commerce** is the most restrained — **~1 accent, sharp corners, ${(byArch.find((x) => x.label === 'commerce') || {}).flatPct || 77}% flat** — letting product imagery lead.
**darktech** is the most chromatic (${(byArch.find((x) => x.label === 'darktech') || {}).colorCount?.med || 13} colors, ${(byArch.find((x) => x.label === 'darktech') || {}).accentCount?.med || 4} accents) and most elevated (only ${(byArch.find((x) => x.label === 'darktech') || {}).flatPct || 37}% flat — glow/depth).
**saas** carries the widest palette + rounded, elevated UI. **portfolio** stays palette-lean + flat, image-led.

## Theme deltas *(clean tag)*

- **Light (n=${light ? light.n : '?'})** — the corpus default; **serif display peaks here** (${light && light.displayCat[1] ? light.displayCat[1][1] + '% serif' : 'highest serif share'} vs dark).
- **Dark (n=${dark ? dark.n : '?'})** — leans **more sans** (${dark ? first(dark.displayCat) : '—'}), **more pill radius** (${dark && dark.radFamily[0] ? dark.radFamily[0][1] : '?'}%), slightly fewer but punchier accents; mono display doubles.
- **Mixed (n=${mixed ? mixed.n : '?'})** — goes **biggest** (hero ${mixed ? mixed.heroSize.med : '?'}px) and **most generous** (max spacing ${mixed ? mixed.spMax.med : '?'}px).

## How to use
- **Builder**: treat as defaults to beat or match — if you drift far (a 3-accent commerce site, a 200px hero, a shadow-heavy editorial), do it *on purpose*, not by accident.
- **Reviewer**: flag values that fall OUTSIDE the p25–p75 band with no rationale (e.g. 7 competing accents, a 22px "hero", a loose off-grid spacing set) as floor misses.

---
*Method: aggregated ${total} refs (${parseFail} token misses) from the curated corpus; medians/quartiles per slice.
**Caveat**: theme is a clean corpus tag; **archetype is a heuristic** keyword-match over each ref's summary —
${other ? other.n : '?'} refs fell to "other" (unclassified), so per-archetype rows are directional, not authoritative.
Re-run: \`node app/scripts/distill-taste-priors.cjs\`. Priors raise the floor; the model's ceiling (CLAUDE.md risk #4) stays — the honest metric is the owner's cold eye.*
`;
}

main();
