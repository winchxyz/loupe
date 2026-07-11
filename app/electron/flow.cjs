/* deZign — AGENT SWARM `/flow` (Stage 6 · step 21, owner-requested). Pure, electron-free helpers so the smoke can
 * unit-test the load-bearing parsing/prompting without spawning agents. The orchestrator itself lives in main.cjs
 * (flow:start): PLANNER (site map + design system, strict JSON) → FOUNDATION turn (index.html + styles.css tokens +
 * shared nav/footer) → PER-PAGE turns (each agent OWNS one page file; parallel-safe by file ownership) → done.
 */

// ── STRUCTURE LEVER (2026-07-04, workflow-designed): make the playbook library LOAD-BEARING. The prior Q3
// `composition` field was INERT because Opus emits its own rich shape ({pages:[{sections:[{type,layout}]}]})
// WITHOUT that field. Fix: the HOST deterministically deals each page ONE distinct whole-page skeleton from the
// 8 patterns/ playbooks (derived from the signal the planner ACTUALLY emits — sections[].type/layout + purpose +
// title + filename), attaches it to the parsed page object, and main.cjs force-injects that playbook's FULL body
// as the page's mandatory BLUEPRINT. Distinctness is a code invariant (a shrinking pool), not a prompt hope.
// The 8 rel paths MUST equal library.cjs STRUCTURE_HINTS (a smoke guard locks this). 6 spines + 2 non-spines.
const ARCH_PLAYBOOKS = [
  { id: 'self-demo-hero', rel: 'patterns/self-demonstrating-hero.md', name: 'self-demonstrating hero', role: 'hero',
    roleRe: /index|home|hero|demo|product|saas|app|tool|platform|dashboard|realtime|api/i, scrollModel: 'mixed',
    definingMove: 'an asymmetric split (~1.04fr / .96fr) with a chrome-framed stage running a looping product vignette',
    signatureRe: /grid-template-columns:\s*[0-9.]+fr\s+[0-9.]+fr/i },
  { id: 'bento', rel: 'patterns/bento-span-choreography.md', name: 'span-choreographed bento', role: 'interior',
    roleRe: /feature|capabilit|product|studio|service|what.?we.?do|grid|module|integration/i, scrollModel: 'mixed',
    definingMove: 'an unequal 6-column bento whose rows sum to 6, anchored by one tall accent tile — NOT equal cards',
    signatureRe: /grid-column:\s*(?:span\s*\d|\d\s*\/\s*span)/i },
  { id: 'diagram', rel: 'patterns/diagram-as-layout.md', name: 'diagram-as-layout', role: 'interior',
    roleRe: /how|process|pipeline|flow|loop|architecture|works|method|system|docs|infrastructure/i, scrollModel: 'mixed',
    definingMove: 'the section IS the diagram — arrows are grid columns, nodes are mini-mocks of each step',
    signatureRe: /<svg[\s\S]{0,600}?<(?:path|line|polyline|marker)/i },
  { id: 'numeral-rail', rel: 'patterns/numeral-rail.md', name: 'oversized numeral rail', role: 'interior',
    roleRe: /pricing|plan|tier|docs|step|onboard|phase|chapter|guide|method|reference/i, scrollModel: 'dwell',
    definingMove: 'a sticky outline-stroked numeral rail (2-col: narrow numeral / 1fr body) that dwells per phase',
    signatureRe: /-webkit-text-stroke/i },
  { id: 'poster-scroll', rel: 'patterns/poster-scroll.md', name: 'poster scroll', role: 'hero',
    roleRe: /about|story|manifesto|work|portfolio|gallery|case|festival|editorial|team|vision|culture/i, scrollModel: 'poster',
    definingMove: 'full-viewport poster slabs (≥92svh), one element at 9–12vw, at least one inverted (flipped-polarity) band',
    signatureRe: /min-height:\s*(?:8[2-9]|9\d|100)\s*(?:svh|dvh|vh)/i },
  { id: 'scroll-dwell', rel: 'patterns/scroll-dwell-sequence.md', name: 'scroll-dwell sequence', role: 'interior',
    roleRe: /timeline|journey|before.?after|changelog|walkthrough|sequence|milestone/i, scrollModel: 'dwell',
    definingMove: 'a sticky stage that pins while a tall virtual track scrolls, each beat revealing on scroll progress',
    signatureRe: /position:\s*sticky/i },
  // non-spines: never a page skeleton
  { id: 'marquee', rel: 'patterns/kinetic-type-marquee.md', name: 'kinetic type marquee', role: 'accent',
    roleRe: /(?!)/, scrollModel: 'accent', definingMove: 'a horizontal kinetic outline-type marquee band', signatureRe: /@keyframes[\s\S]{0,200}?translateX/i },
  { id: 'split-discipline', rel: 'patterns/split-discipline.md', name: 'split discipline', role: 'discipline',
    roleRe: /(?!)/, scrollModel: 'n/a', definingMove: 'max two 50/50 splits, varied ratios, at least one bleeding section', signatureRe: /(?!)/ },
];
const SPINE_PLAYBOOKS = ARCH_PLAYBOOKS.filter((p) => p.role === 'hero' || p.role === 'interior');

// Build a weighted keyword bag from the RAW planner page object (called inside parseFlowPlan where sections[] is
// still in scope). Strongest signals repeated so they dominate the roleRe match count: composition ×3, section
// layout/type ×2, purpose ×1, title/stem ×1. This harvests what the planner ACTUALLY emits, not a demanded field.
function skeletonBag(rawPage, file, title, brief, composition) {
  const secs = Array.isArray(rawPage && rawPage.sections) ? rawPage.sections : [];
  const secType = secs.map((s) => String((s && (s.type || s.kind || s.name)) || '')).join(' ');
  const secLayout = secs.map((s) => String((s && (s.layout || s.variant || s.style)) || '')).join(' ');
  const purpose = String((rawPage && (rawPage.purpose || rawPage.summary || rawPage.goal)) || '');
  const stem = String(file || '').replace(/\.html?$/, '').replace(/[-_]/g, ' ');
  const rep = (s, n) => (s ? (s + ' ').repeat(n) : '');
  return (rep(composition, 3) + rep(secLayout, 2) + rep(secType, 2) + purpose + ' ' + title + ' ' + stem + ' ' + String(brief || '').slice(0, 300)).toLowerCase();
}
// Rank the 6 spine playbooks best-first by how strongly the bag hits each roleRe (stable sort → ARCH order on ties).
function deriveOrder(bag) {
  return SPINE_PLAYBOOKS
    .map((p) => ({ p, score: (String(bag || '').match(new RegExp(p.roleRe.source, 'gi')) || []).length }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p);
}
// Deal every page ONE distinct spine (a shrinking pool guarantees ≤6 pages get 6 different skeletons; index is
// pinned to a hero-capable spine; overflow >6 rotates with a mutation counter → a different variation axis).
// Pure + order-stable (mirrors assignEngines). Mutates pages: sets page.skeleton (non-null) + backfills composition.
function assignSkeletons(pages) {
  if (!Array.isArray(pages) || !pages.length) return pages;
  const used = new Map(); // id -> times used (0 = fresh, >0 = a variation)
  const assignOne = (page, pb) => {
    const mutation = used.get(pb.id) || 0; used.set(pb.id, mutation + 1);
    page.skeleton = { id: pb.id, rel: pb.rel, name: pb.name, scrollModel: pb.scrollModel, definingMove: pb.definingMove, mutation };
    if (!page.composition) page.composition = pb.name;
  };
  // index.html (pages[0]) → a HERO-capable spine: poster-scroll for editorial/portfolio briefs, else self-demo-hero
  const heroes = SPINE_PLAYBOOKS.filter((p) => p.role === 'hero');
  const idxBag = pages[0]._bag || '';
  const idxHero = /editorial|portfolio|festival|gallery|magazine|manifesto|story|photograph/i.test(idxBag)
    ? (heroes.find((p) => p.id === 'poster-scroll') || heroes[0]) : (heroes.find((p) => p.id === 'self-demo-hero') || heroes[0]);
  assignOne(pages[0], idxHero);
  for (let i = 1; i < pages.length; i++) {
    const order = deriveOrder(pages[i]._bag || '');
    let pick = order.find((p) => !used.has(p.id)); // first PREFERRED still-unused spine
    if (!pick) pick = SPINE_PLAYBOOKS[i % SPINE_PLAYBOOKS.length]; // pool exhausted (>6 pages) → rotate + mutate
    assignOne(pages[i], pick);
  }
  return pages;
}

// Extract the planner's STRICT-JSON site plan from a model reply (models wrap JSON in prose/fences despite orders).
// Returns { design, pages:[{file,title,brief,composition,skeleton}] } or null. Guarantees: index.html first, 2..8
// pages, .html files, de-duped, sanitized names, and every page a DISTINCT host-assigned structural skeleton.
function parseFlowPlan(text) {
  const s = String(text || '');
  const m = s.match(/\{[\s\S]*\}/); // first {...} block (greedy to the last brace — planner emits one object)
  if (!m) return null;
  let obj; try { obj = JSON.parse(m[0]); } catch { return null; }
  if (!obj || typeof obj !== 'object') return null;
  // TOLERANT SHAPE (live-probed 2026-07-02): strong models ignore the exact schema and emit richer plans
  // ({site, designSystem, pages:[{href, description, …}]}). Deep-find the `pages` array BY KEY NAME; accept
  // file/filename/path/href synonyms; serialize an OBJECT design system when `design` isn't a plain string.
  const findPages = (o, depth) => {
    if (!o || typeof o !== 'object' || depth > 4) return null;
    if (Array.isArray(o.pages) && o.pages.length) return o.pages;
    for (const k of Object.keys(o)) { const r = findPages(o[k], depth + 1); if (r) return r; }
    return null;
  };
  const rawPages = findPages(obj, 0);
  if (!Array.isArray(rawPages)) return null;
  const seen = new Set();
  const pages = [];
  for (const p of rawPages) {
    if (!p || typeof p !== 'object') continue;
    const rawFile = p.file || p.filename || p.slug || p.path || (p.href ? String(p.href).replace(/^\/+/, '') : '') || (p.url ? String(p.url).replace(/^\/+/, '') : '');
    if (!rawFile) continue;
    let file = String(rawFile).trim().toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
    if (!file) {
      if (String(rawFile).trim().replace(/\/+/g, '') === '') file = 'index.html'; // slug "/" = the site root (live-probed: Opus emits {"slug":"/"} for home)
      else continue;
    }
    if (!/\.html?$/.test(file)) file = file.replace(/\.[a-z0-9]+$/, '') + '.html';
    if (file === 'home.html' && !seen.has('index.html') && !rawPages.some((q) => /index\.html?/i.test(String(q && (q.file || q.filename || q.path || q.href) || '')))) file = 'index.html'; // "home" IS the index when no explicit index exists
    if (seen.has(file)) continue;
    seen.add(file);
    let brief = p.brief || p.description || p.summary || p.purpose || p.content || '';
    if (typeof brief !== 'string') { try { brief = JSON.stringify(brief); } catch { brief = ''; } }
    if (!brief && p.sections) { try { brief = 'Sections: ' + JSON.stringify(p.sections); } catch {} }
    const composition = String(p.composition || p.archetype || p.layout || p.skeleton || '').replace(/\s+/g, ' ').trim().slice(0, 160); // Q3: optional planner hint (a scoring bias now — the host skeleton is binding)
    const title = String(p.title || p.name || p.label || file.replace(/\.html?$/, '')).slice(0, 60);
    // _bag = the weighted keyword bag from the RAW page (sections[] etc. — only available HERE); drives skeleton assignment
    pages.push({ file, title, brief: String(brief).slice(0, 700), composition, _bag: skeletonBag(p, file, title, brief, composition) });
  }
  if (pages.length < 2 || pages.length > 8) return null;
  const idx = pages.findIndex((p) => p.file === 'index.html');
  if (idx < 0) return null;
  if (idx > 0) pages.unshift(pages.splice(idx, 1)[0]); // index.html builds first (it owns the foundation)
  assignSkeletons(pages); // STRUCTURE LEVER: deal each page a DISTINCT host-assigned skeleton (index-first hero pin, shrinking pool)
  for (const p of pages) delete p._bag; // scratch field — done its job
  let design = obj.design;
  if (typeof design !== 'string' || !design.trim()) {
    const d = obj.design || obj.designSystem || obj.design_system || (obj.site && (obj.site.design || obj.site.designSystem)) || null;
    if (d && typeof d === 'object') { try { design = JSON.stringify(d, null, 1); } catch { design = ''; } }
    else if (typeof d === 'string') design = d;
    else { try { const { pages: _p, ...rest } = obj; design = JSON.stringify(rest, null, 1); } catch { design = ''; } } // last resort: the whole plan minus pages IS the design context
  }
  return { design: String(design || '').slice(0, 4000), pages };
}

// The FULL playbook body force-injected as a page's mandatory architecture (STRUCTURE LEVER). The isolated builder
// can't read the library, so the host injects the bytes; naming the skeleton + its defining move + a hard ban on
// the band-stack removes the escape hatch. `skeletonBody` is the playbook markdown (main.cjs reads it off disk).
// STRUCTURE-SAMENESS Variant-1 (2026-07-05): when an ART DIRECTION leads (asReference=true), the host-dealt skeleton
// drops from a NON-NEGOTIABLE cage to a REFERENCE the builder may draw from — realigning /flow with the project's own
// "library is HELP, not a cage" rule. With no art direction (legacy fallback) it stays the binding blueprint.
function blueprintBlock(skeleton, skeletonBody, asReference) {
  if (!skeleton) return '';
  const variant = skeleton.mutation > 0
    ? '\n\nVARIANT NOTICE: another page already draws on this skeleton — if you use it, take a DIFFERENT option from its "Variation axes" (different column base / node count / numeral treatment / polarity). Never a visual clone.'
    : '';
  if (asReference) {
    return '▒ STRUCTURAL REFERENCE (a proven composition you MAY draw from — the ART DIRECTION above LEADS; use this "' + skeleton.name + '" skeleton only where it serves the direction, and adapt or replace it freely). Its defining move: ' + skeleton.definingMove + '.\n\n' + String(skeletonBody || '').trim().slice(0, 2200) + variant;
  }
  return '▓ YOUR PAGE\'S STRUCTURAL BLUEPRINT (host-assigned, NON-NEGOTIABLE) — build the "' + skeleton.name + '" skeleton below. It IS this page\'s architecture, not a suggestion: the host dealt THIS page this skeleton so the site is NOT one layout re-skinned on every page. Realize its DEFINING MOVE: ' + skeleton.definingMove + '. Adapt it to THIS brand\'s tokens and real content — never clone the playbook\'s demo copy.\n\n' + String(skeletonBody || '').trim() + variant;
}
// ★ the BINDING art direction (Variant-1): the committed, brief-specific, divergent creative direction the builder
// authors FROM — it LEADS the composition. Injected FIRST in the foundation + page prompts, above the skeleton reference.
function artDirectionBlock(artDirection) {
  if (!artDirection || !String(artDirection).trim()) return '';
  return '★ ART DIRECTION — the BINDING creative direction for this whole site; it LEADS the composition, author the page FROM it. Realize its committed archetype / palette / type / signature moves AND its section-by-section composition of DISTINCT forms. Never collapse to a generic vertical band stack:\n\n' + String(artDirection).trim();
}
// The ban on the canonical template — re-pointed to the ART DIRECTION when present (Variant-1), else the assigned skeleton.
function bandStackBan(skeleton, artDirection) {
  const spine = artDirection ? "the ART DIRECTION's distinct section composition above" : (skeleton ? 'the "' + skeleton.name + '" skeleton above' : 'your assigned structure');
  return 'BANNED — the vertical-band stack: a chain of <section> → .container → grid/split blocks stacked top-to-bottom, all full-width, same rhythm. Your spine is ' + spine + ' — if your first instinct is a stack of full-width bands, you are building the banned default and it is a FAILED build. Also banned: more than TWO alternating 50/50 splits on the page, and equal-weight uniform card grids.';
}

// The FOUNDATION turn prompt — page #1 (index.html) also authors the shared design system every later page reuses.
function buildFoundationPrompt(plan, brief, skeletonBody = '', artDirection = '') {
  const skel = plan.pages[0] && plan.pages[0].skeleton;
  return [
    'You are building the FOUNDATION of a multi-page site — the home page AND the shared design system every other page will reuse.',
    artDirectionBlock(artDirection),
    blueprintBlock(skel, skeletonBody, !!artDirection),
    'SITE BRIEF:\n' + brief,
    'DESIGN SYSTEM (follow exactly):\n' + plan.design,
    'SITE MAP (these pages will exist — link between them with real <a href> in the shared nav):\n' + plan.pages.map((p) => '- ' + p.file + ' — ' + p.title + ': ' + p.brief).join('\n'),
    'FILE PATHS (hard rule): your working directory IS the project root — pass BARE filenames to the Write tool, exactly `styles.css`, `index.html`, `DESIGN.md`. Never absolute paths, never any subfolder (no app/, src/, site/, pages/). Do not probe other locations.',
    'BUILD NOW:',
    '1. `styles.css` — the design tokens as :root CSS variables (palette, type, spacing, radii) + base styles + the shared NAV and FOOTER classes. This file becomes READ-ONLY for the other pages\' builders.',
    '2. `index.html` — the full home page using those tokens, with the shared nav linking to every site-map page and a shared footer.',
    '0. IF `DESIGN.md` ALREADY EXISTS in this directory it is a LOCKED brand brief — READ it first, build inside it, and only APPEND missing sections (signature moves, guardrails); never replace its tokens or direction.',
    '3. `DESIGN.md` — the site\'s persistent design SOURCE OF TRUTH (every later agent is grounded with it). Keep it ≤120 lines: YAML front matter with the core tokens (colors, type faces/scale, spacing, radii), then short markdown sections — Overview (the atmosphere in 2-3 sentences), Color roles, Typography rules, Layout & rhythm principles, Components, **Signature moves** (the 3 moves below), and Guardrails (concrete do/don\'ts for THIS site, e.g. "never center body text", "photography warm-toned only"). Rationale over inventory: WHY each choice serves the brief.',
    'COMPOSITION AMBITION (anti-template contract — audited 2026-07-03: every generated site wore the same skeleton of alternating 50/50 splits, ≤76px type, zero JS, while the owner\'s hand-built reference had 16 distinct layout moves, 82px display type and a full motion layer):',
    '- Declare **3 SIGNATURE MOVES** in DESIGN.md — named, concrete compositional/motion ideas unique to THIS site. Your home page\'s BLUEPRINT above is the first; add two more (examples of the CALIBER: a diagram-as-layout with inline SVG arrows; a scroll-pinned sequence; an oversized numeral rail; a full-bleed inverted band; layered overlap with real z-depth).',
    '- REQUIRED: include ONE kinetic outline-type marquee band as a between-section accent on the home page — it guarantees the site has a horizontal-scroll element (a between-section accent, not the page spine).',
    '- ' + bandStackBan(skel, artDirection),
    '- TYPE: the hero gets a true DISPLAY moment (~clamp(3rem, 7vw, 6rem) at desktop); pair the macro scale with fine mono/caps micro-labels — scale contrast is the voice.',
    '- MOTION IS REQUIRED (JavaScript allowed and encouraged; GSAP via CDN is fine): entrance reveals (transform-only — never hide text behind animated opacity), ONE continuous or scroll-driven system (marquee / pinned sequence / cursor-reactive layer / looping vignette), and hover physics on interactive elements. Motion plays for EVERYONE — do NOT gate it behind prefers-reduced-motion.',
    'Real specific copy (no lorem), responsive, accessible contrast, <img data-gen="subject"> for photos. data-gen subjects are STOCK-SEARCH queries: generic photographable scenes — NEVER invented brand/product names, and vary the scenes across a set.',
    'Prefer <img data-gen="subject"> stock photos. IF a generation key is configured, you MAY use <img data-gen-ai="prose prompt" data-ar="16:9" alt="short subject"> for a SINGLE hero that genuinely needs a bespoke/abstract image stock can\'t provide — see the imagery capability note. Never more than one generated image per page; never for ordinary content photos.',
    'For a photoreal WebGL sky / image-based lighting, emit ONE anchor <div data-hdri="sky subject, mood + time-of-day" id="scene-home"></div> and load assets/hdri/scene-home.hdr with RGBELoader as scene.environment — the host fetches a real CC0 Poly Haven HDRI into that path after the turn. ALWAYS build a procedural sky first as the onerror fallback (the HDRI is an upgrade, never a dependency).',
  ].filter(Boolean).join('\n\n');
}

// A PER-PAGE swarm turn prompt — the agent OWNS exactly one file; shared files are read-only (parallel-safe).
function buildPagePrompt(plan, page, brief, skeletonBody = '', artDirection = '') {
  const sceneId = 'scene-' + (String(page.file || 'page').replace(/\.html?$/i, '') || 'page'); // PAGE-UNIQUE HDRI anchor id: sibling pages build in parallel; a shared id collides on assets/hdri/<id>.hdr (one page mis-lit)
  return [
    'You are ONE builder in a team building a multi-page site IN PARALLEL. You own EXACTLY ONE page. The shared foundation (DESIGN.md source of truth + styles.css tokens + nav/footer classes, index.html) already exists in this directory — READ `DESIGN.md` and `index.html` first and match them.',
    artDirectionBlock(artDirection),
    blueprintBlock(page.skeleton, skeletonBody, !!artDirection),
    'SITE BRIEF:\n' + brief,
    'DESIGN SYSTEM (already implemented in styles.css — reuse its variables and classes, do NOT restyle the basics):\n' + plan.design,
    'SITE MAP (link to other pages with real <a href>; copy the nav/footer markup from index.html so navigation is identical everywhere):\n' + plan.pages.map((p) => '- ' + p.file + ' — ' + p.title).join('\n'),
    'YOUR PAGE (the ONLY file you may create): `' + page.file + '` — ' + page.title + '.\n' + page.brief,
    'HARD RULES (other agents are writing their pages at the same time):',
    '- Write `' + page.file + '` ONLY. Do NOT modify styles.css, index.html, or any other page — they belong to other agents.',
    '- FILE PATH: your working directory IS the project root — pass the BARE filename `' + page.file + '` to the Write tool. Never absolute paths, never any subfolder (no app/, src/, site/, pages/), even if you saw one used elsewhere.',
    '- Page-specific styles go in a <style> block INSIDE your page file.',
    '- Reuse the shared nav/footer markup + styles.css tokens so the site feels like ONE site.',
    '- Build the ART DIRECTION\'s composition above as this page\'s spine (draw on the structural reference where it serves the direction); layer the DESIGN.md SIGNATURE MOVES on top where they fit. ' + bandStackBan(page.skeleton, artDirection) + ' Give the page a real display-type moment. MOTION IS REQUIRED (JS/GSAP-CDN fine): transform-only entrance reveals + hover physics; never gate motion behind prefers-reduced-motion.',
    '- Real specific copy, responsive, accessible contrast, <img data-gen="subject"> for photos. data-gen subjects are STOCK-SEARCH queries: generic photographable scenes ("barista pouring pour-over", "coffee bag on wooden shelf") — NEVER invented brand/product names ("Meridian House Blend bag" finds nothing), and vary the scenes instead of repeating one template.',
    '- Stock is the default. IF a generation key is configured, you MAY use <img data-gen-ai="prose prompt" data-ar="16:9" alt="short subject"> for at most ONE bespoke/abstract hero this page genuinely needs and stock can\'t provide — never for ordinary content photos, never more than one per page.',
    '- For a photoreal WebGL sky / IBL: emit <div data-hdri="sky subject" id="' + sceneId + '"></div> and load assets/hdri/' + sceneId + '.hdr with RGBELoader as scene.environment (host fetches a CC0 Poly Haven HDRI post-turn) — always with a procedural onerror fallback. Keep THIS page-unique id: sibling pages build in parallel and a shared id would collide on the same HDRI file.',
  ].filter(Boolean).join('\n\n');
}

// POST-FLOW RECONCILIATION (PSY1 incident 2026-07-03): a builder hallucinated an absolute /Users/ path, hit the
// sandbox wall, probed `app/…`, decided "the working directory is app/" — and the whole crew built the site into
// PSY1/app/ while the canvas showed the root stub. Prompts now forbid subfolders, but the HOST guarantees it:
// after the pool, any first-level subfolder containing PLANNED page files gets its web files moved into the root.
// Deterministic + conservative: only plan-listed subfolders trigger; a real (non-stub) root file is never clobbered.
const fs = require('fs');
const path = require('path');
// AUDIT-2 F7: `flowStartTs` (main-process wall clock captured before preFlowSnapshot) turns the stray classifier from
// "filename + length" into "mtime-vs-flow-start". The old "longer file wins" guard let a LONGER same-named file in a
// pre-existing user subfolder (e.g. the owner's 02b dev-site folders) overwrite the freshly-built ROOT page —
// unrecoverable, since preFlowSnapshot only snapshots pre-existing ROOT files. Now: a subfolder whose planned pages
// are all OLDER than the flow is a user folder (never entered/gutted); a stray file older than the flow is skipped;
// any real root file (>40 lines) is protected outright; and anything about to be overwritten is snapshotted first.
// When flowStartTs is falsy (legacy/omitted caller) it degrades safely to the old length-based classification.
function reconcileFlowOutput(dir, pageFiles, flowStartTs) {
  const moved = [];
  let subs = [];
  try { subs = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && !/^(assets|node_modules)$/i.test(e.name) && !e.name.startsWith('.')).map((e) => e.name); } catch { return moved; }
  const mtimeOf = (p) => { try { return fs.statSync(p).mtimeMs; } catch { return 0; } };
  let snapDir = null; // lazily-created reconcile-time snapshot of anything about to be overwritten
  const snapshotBeforeOverwrite = (to) => {
    try {
      if (!fs.existsSync(to)) return;
      if (!snapDir) { const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19); snapDir = path.join(dir, '.dezign-history', 'pre-reconcile-' + stamp); fs.mkdirSync(snapDir, { recursive: true }); }
      fs.copyFileSync(to, path.join(snapDir, path.basename(to)));
    } catch {}
  };
  for (const sub of subs) {
    const sd = path.join(dir, sub);
    let files = []; try { files = fs.readdirSync(sd).filter((f) => { try { return fs.statSync(path.join(sd, f)).isFile(); } catch { return false; } }); } catch { continue; }
    const plannedHere = files.filter((f) => pageFiles.includes(f));
    if (!plannedHere.length) continue; // not a stray build folder — leave user folders alone
    // F7: a WHOLLY-OLD folder (no planned page written since the flow started) is a user folder — never enter/gut it.
    if (flowStartTs && !plannedHere.some((f) => mtimeOf(path.join(sd, f)) >= flowStartTs)) continue;
    for (const f of files) {
      if (!/\.(html?|css|js)$/i.test(f)) continue;
      const from = path.join(sd, f), to = path.join(dir, f);
      if (flowStartTs && mtimeOf(from) < flowStartTs) continue; // a stray file older than the flow is a user file — skip
      let rootLines = -1; try { rootLines = fs.readFileSync(to, 'utf8').split('\n').length; } catch {}
      if (flowStartTs) { if (rootLines > 40) continue; } // protect ANY real root file outright (mtime already proved the stray is fresh)
      else { let strayLines = 0; try { strayLines = fs.readFileSync(from, 'utf8').split('\n').length; } catch {} if (rootLines > 40 && rootLines >= strayLines) continue; } // legacy length-based fallback when no flowStartTs
      snapshotBeforeOverwrite(to); // recoverability: any overwrite lands in .dezign-history/pre-reconcile-*
      try { fs.copyFileSync(from, to); fs.unlinkSync(from); moved.push(sub + '/' + f); } catch {}
    }
    try { if (!fs.readdirSync(sd).length) fs.rmdirSync(sd); } catch {}
  }
  return moved;
}

// ── DETERMINISTIC STRUCTURE PROBE (STRUCTURE LEVER, 2026-07-04): the LLM-free gate that turns "don't ship a band
// stack" from a wish into a measurement (the project's INSTRUMENT-DON'T-GUESS directive). For each page, scan its
// built HTML + inline <style> (+ styles.css for index) for its ASSIGNED skeleton's signature markup, and detect the
// generic "vertical stack of full-width bands" anti-pattern. GATED by scrollModel so a legit full-bleed poster page
// or a sticky dwell page is not false-flagged. Advisory (feeds a bounded fix round), never a hard gate. ──
const _DISTINCT_MARKERS = [
  /grid-column:\s*(?:span\s*\d|\d\s*\/\s*span)/i, // bento span choreography
  /position:\s*sticky/i,                           // dwell / rail
  /<svg[\s\S]{0,600}?<(?:path|line|polyline|marker)/i, // diagram
  /min-height:\s*(?:8[2-9]|9\d|100)\s*(?:svh|dvh|vh)/i, // poster full-bleed
  /-webkit-text-stroke/i,                          // outline numerals / marquee
  /@keyframes[\s\S]{0,200}?translateX/i,           // marquee kinetics
];
function structureProbe(dir, pages) {
  const out = [];
  for (const page of pages) {
    if (!page || !page.skeleton) { out.push({ file: page && page.file, fail: false, reason: 'no skeleton' }); continue; }
    let html = ''; try { html = fs.readFileSync(path.join(dir, page.file), 'utf8'); } catch { out.push({ file: page.file, fail: false, reason: 'unreadable' }); continue; }
    let hay = html;
    if (page.file === 'index.html') { try { hay += '\n' + fs.readFileSync(path.join(dir, 'styles.css'), 'utf8'); } catch {} }
    // resolve the signature RegExp from ARCH_PLAYBOOKS by id (the skeleton object stays JSON-clean for events — no RegExp)
    const pb = ARCH_PLAYBOOKS.find((x) => x.id === page.skeleton.id);
    const sigPresent = pb && pb.signatureRe ? pb.signatureRe.test(hay) : true;
    const sections = (html.match(/<section\b/gi) || []).length;
    const hits = _DISTINCT_MARKERS.map((re) => re.test(hay)); // evaluate each marker once
    const markers = hits.filter(Boolean).length;
    const markerSig = hits.map((b) => (b ? '1' : '0')).join(''); // WHICH markers fired, not just how many
    const bandStackish = sections >= 3 && markers === 0; // many full-width sections + ZERO distinct structural moves
    let fail = false, reason = '';
    // Variant-1 backstop (2026-07-05): the ART DIRECTION now leads the composition, so the probe no longer enforces the
    // assigned skeleton's signature (that would false-fail an authored distinct structure). It fails ONLY on a genuine
    // vertical-BAND-STACK collapse — the real anti-pattern — which any distinct composition (markers > 0) clears.
    if (bandStackish) {
      fail = true; reason = 'the page reads as a vertical-band stack (' + sections + ' full-width sections, 0 distinct structural moves) — realize the art-directed composition of DISTINCT section forms instead';
    }
    // fingerprint keyed on skeleton ID + the marker BITMASK (not a count) so DIFFERENT skeletons that happen to
    // fire the same NUMBER of markers (bento's grid-span vs diagram's svg, both "1") never collide — only true
    // re-skins (same skeleton reused on overflow, built identically) share a fingerprint. (review 2026-07-04)
    out.push({ file: page.file, skeleton: page.skeleton.name, sigPresent, sections, markers, fingerprint: page.skeleton.id + ':' + sections + ':' + markerSig, fail, reason });
  }
  // cross-page duplication: two pages with the SAME skeleton + identical section/marker signature are re-skins
  // (only reachable when the >6-page overflow reused a skeleton and the builder ignored the mutation axis) →
  // flag the later one (advisory) unless it already failed for a stronger reason.
  const seen = new Map();
  for (const r of out) {
    if (r.fail || r.fingerprint == null) continue;
    if (seen.has(r.fingerprint)) { r.fail = true; r.reason = 'structurally identical to ' + seen.get(r.fingerprint) + ' — the reused skeleton was built as the same layout (use a different variation axis)'; }
    else seen.set(r.fingerprint, r.file);
  }
  return out;
}
// Turn a probe failure into a hard STRUCTURAL rebuild directive (re-injects the same playbook — same ownership
// contract as the review fix round). skeletonBody = the assigned playbook markdown (main.cjs reads it off disk).
function buildStructureFixPrompt(page, probe, skeletonBody, artDirection = '') {
  const ownsStyles = page.file === 'index.html';
  return [
    'STRUCTURAL FIX for `' + page.file + '`. A deterministic check FAILED: ' + (probe && probe.reason || 'the page collapsed to a generic vertical-band stack') + '.',
    'The page collapsed to a generic vertical-band stack — a FAILED build. Re-architect its SPINE to REALIZE the ART DIRECTION\'s committed composition of DISTINCT section forms (below), drawing on the structural reference where it serves the direction. This is a STRUCTURAL change — re-architect the sections, do not merely restyle.',
    artDirectionBlock(artDirection),
    blueprintBlock(page.skeleton, skeletonBody, !!artDirection),
    'HARD RULES: edit ONLY `' + page.file + '` (BARE filename, never a subfolder). ' + (ownsStyles ? 'You OWN styles.css too — shared structural CSS may go there.' : 'styles.css and every other page are READ-ONLY — page-specific structure goes in a <style> block inside your file.') + ' Reuse the shared nav/footer + styles.css tokens; keep the real copy. ' + bandStackBan(page.skeleton, artDirection),
  ].filter(Boolean).join('\n\n');
}

// ── FLOW REVIEWER (Stage-0 "raise the bar" × the swarm; owner-approved 2026-07-03): after the swarm builds, a
// senior-art-director judge reviews EVERY page (vision, one frame per page) + cross-page coherence, and the pool
// runs a FIX round on the pages with must_fix directives. The bar is deliberately above "shippable":
// "merely correct" fails; the reviewer must name the striking-vs-correct gap in concrete, buildable terms. ──
function flowReviewCard() {
  return [
    'You are a RUTHLESS senior art director reviewing a finished multi-page website. One screenshot per page is attached, in the order listed.',
    'THE BAR: Awwwards-shortlist. "Merely correct" is a FAILING grade — name what would make each page STRIKING, not just clean.',
    'Judge each page on: visual hierarchy · rhythm & whitespace (varied, intentional) · composition density/ambition · typography (scale contrast, pairing discipline) · color cohesion · finish. Hunt the AI-slop tells: centered-everything, equal-weight sections, timid type scale, generic gradients, uniform card grids, decoration instead of content, AND hollow/outline text that fragments into broken wireframe letters (transparent fill + thin/low-alpha text-stroke, or outline type below poster scale) — a must_fix (fill it solid or enlarge + solid-stroke it).',
    'Also judge CROSS-PAGE VARIETY explicitly (Q3): the site must be ONE design system (shared tokens/nav/type) yet EACH page a DISTINCT layout skeleton — not the home page re-skinned five times. Score `site_variety` 0-3: 0 = every page the same spine (e.g. all a stack of 50/50 splits or all identical bento), 1 = mostly same with token/color swaps, 2 = a few pages differ, 3 = each page has its own composition (hero vs bento vs diagram vs numeral-rail vs poster). When two+ pages share a spine, put a must_fix on the WEAKER page naming the distinct composition it should adopt.',
    'AMBITION GATE: a page whose composition is a chain of alternating 50/50 splits with no motion system, no display-scale type moment and no layering CANNOT score above 3 — and name which SIGNATURE MOVE from DESIGN.md is missing or under-realized in a must_fix.',
    'OUTPUT STRICT JSON ONLY (no prose before it). EXACTLY these fields, NOTHING more (no score breakdowns, no systemFit, no essays), and `pages` MUST be the FIRST key:',
    '{"pages":[{"file":"index.html","score":0-5,"must_fix":["<concrete, buildable instruction naming the section and the change>"],"nice":["<optional smaller polish>"]}],"verdict":"striking|good|correct|weak","site_variety":0-3,"site_notes":"<2-4 sentences on the site as a whole, incl. one on cross-page variety>"}',
    'HARD LENGTH CAP: the whole reply under 3500 characters — one line per must_fix, no multi-sentence notes per page. A verbose reply gets TRUNCATED mid-word and the whole review is wasted.',
    'must_fix rules: only things a builder can DO (name the section, say what to change, give target values where possible — "hero h1 to clamp(64px,9vw,120px), cut subhead to one line"), max 3 per page, [] if the page genuinely passes the bar.',
  ].join('\n');
}
function buildReviewUserText(brief, pageFiles, extras = {}) {
  return [
    'SITE BRIEF (what this site was asked to be):\n' + (brief || '(not recorded — judge general craft)'),
    'PAGES (frames attached in THIS order):\n' + pageFiles.map((f, i) => (i + 1) + '. ' + f).join('\n'),
    extras.design ? 'PROJECT DESIGN.md (the site\'s declared SOURCE OF TRUTH — judge FIT against THIS system, and demand fixes inside it):\n' + extras.design
      : (extras.tokens ? 'DESIGN TOKENS (styles.css :root — fixes should stay inside this system):\n' + extras.tokens : ''),
    extras.rubric ? 'QUALITY RUBRIC (grounding reference for your judgments):\n' + extras.rubric : '',
    'Review now. STRICT JSON only.',
  ].filter(Boolean).join('\n\n');
}
// tolerant report parse (same discipline as parseFlowPlan: models wrap JSON in prose; keys drift)
function parseReviewReport(text, validFiles) {
  const s = String(text || '');
  const m = s.match(/\{[\s\S]*\}/);
  if (!m) return null;
  let obj = null; try { obj = JSON.parse(m[0]); } catch {}
  const findArr = (o, key, depth) => {
    if (!o || typeof o !== 'object' || depth > 3) return null;
    if (Array.isArray(o[key]) && o[key].length) return o[key];
    for (const k of Object.keys(o)) { const r = findArr(o[k], key, depth + 1); if (r) return r; }
    return null;
  };
  const valid = new Set(validFiles || []);
  // FUZZY file resolution (run-3 incident: 'features.html (DZGN1 design-system page)' and 'index.html / all'
  // were dropped as invalid): pull the first real *.html token out of whatever the judge wrote in the field.
  const okFile = (raw) => {
    let f = (String(raw || '').toLowerCase().match(/[a-z0-9][a-z0-9._-]*\.html?\b/) || [])[0] || '';
    if (!f) { f = String(raw || '').trim().toLowerCase().replace(/^\/+/, ''); if (f && !/\.html?$/.test(f)) f += '.html'; }
    return f && (!valid.size || valid.has(f)) ? f : '';
  };
  const pagesMap = new Map();
  const touch = (f) => { if (!pagesMap.has(f)) pagesMap.set(f, { file: f, score: null, mustFix: [], nice: [] }); return pagesMap.get(f); };
  const addPageShape = (p) => { // {file, score, must_fix[], nice[]} — OUR schema + drifted synonyms
    const file = okFile(p.file || p.page || p.filename || p.path || '');
    if (!file) return;
    let fixes = p.must_fix || p.mustFix || p.fixes || p.issues || p.blocking_issues || p.recommendations || p.improvements || p.fix || p.finding || [];
    if (typeof fixes === 'string') fixes = [fixes];
    if (!Array.isArray(fixes)) fixes = [];
    const e = touch(file);
    if (Number(p.score) >= 0) e.score = Math.min(5, Number(p.score));
    for (const f of fixes.map((x) => String(x).trim()).filter(Boolean)) { if (e.mustFix.length < 4) e.mustFix.push(f.slice(0, 300)); }
    if (Array.isArray(p.nice)) for (const n of p.nice) { if (e.nice.length < 3) e.nice.push(String(n).slice(0, 300)); }
  };
  const sevRank = (x) => { const v = String((x && x.severity) || '').toLowerCase(); return (v === 'high' || v === 'critical') ? 0 : (v === 'low' || v === 'minor') ? 2 : 1; };
  const addIssueShape = (list) => { // the judge's OWN dialect (real run 3): issues:[{page, severity, finding, fix}] — grouped per page; high/medium → must_fix, low → nice
    for (const it of [...list].filter((x) => x && typeof x === 'object').sort((a, b) => sevRank(a) - sevRank(b))) {
      const file = okFile(it.page || it.file || it.location || '');
      if (!file) continue;
      const txt = String(it.fix || it.recommendation || it.suggestion || it.finding || it.issue || '').trim();
      if (!txt) { touch(file); continue; }
      const e = touch(file);
      if (sevRank(it) === 2) { if (e.nice.length < 3) e.nice.push(txt.slice(0, 300)); }
      else if (e.mustFix.length < 4) e.mustFix.push(txt.slice(0, 300));
    }
  };
  const rawPages = obj ? findArr(obj, 'pages', 0) : null;
  if (rawPages) for (const p of rawPages) { if (p && typeof p === 'object') addPageShape(p); }
  const rawIssues = obj ? (findArr(obj, 'issues', 0) || findArr(obj, 'findings', 0)) : null;
  if (rawIssues && rawIssues.some((x) => x && typeof x === 'object')) addIssueShape(rawIssues);
  if (!pagesMap.size) {
    // TRUNCATION SALVAGE (run 2: verbose novel cut mid-word → broken JSON): harvest flat objects individually;
    // route each by shape (fix/finding/severity → issue dialect; otherwise page dialect).
    const found = [];
    const re = /\{[^{}]*?"(?:file|page|filename)"\s*:\s*"[^"]+"[^{}]*\}/g;
    let mm; while ((mm = re.exec(s))) { try { found.push(JSON.parse(mm[0])); } catch {} }
    const iss = found.filter((x) => x.fix != null || x.finding != null || x.severity != null);
    addIssueShape(iss);
    for (const p of found) { if (!iss.includes(p)) addPageShape(p); }
  }
  if (!pagesMap.size) return null;
  if (valid.size && pagesMap.size) for (const f of valid) { if (!pagesMap.has(f)) touch(f); } // judged-but-unmentioned pages = passing (the summary covers every frame the judge saw)
  const pages = [...pagesMap.values()];
  // verdict/notes survive truncation via regex fallbacks (obj may be null when only the salvage path succeeded)
  const g = (o, keys) => { if (o) for (const k of keys) { if (typeof o[k] === 'string' && o[k]) return o[k]; } return ''; };
  // Q3 site-level variety (0-3): obj first, regex fallback for the truncation-salvage path (obj may be null)
  const siteVariety = (() => {
    let v = obj ? (obj.site_variety != null ? obj.site_variety : (obj.siteVariety != null ? obj.siteVariety : obj.variety)) : null;
    if (v == null) { const mm = s.match(/"site_?variety"\s*:\s*(\d)/i); v = mm ? mm[1] : null; }
    if (v == null) return null; // absent → null (NOT 0 — Number(null) coerces to 0, which would fake a "worst variety" score)
    v = Number(v);
    return Number.isFinite(v) ? Math.max(0, Math.min(3, Math.round(v))) : null;
  })();
  // AUDIT 2026-07-07: a raw-capture judge (copilot) can ECHO the schema template before its answer; the first-match regex
  // fallback then locks onto the PLACEHOLDER ("striking|good|correct|weak" / "<2-4 sentences…>") and poisons the fix
  // prompt. Reject any capture carrying template tokens (| < >) — a real verdict/notes never contains them.
  const clean = (v) => (v && !/[|<>]/.test(v)) ? v : '';
  return {
    verdict: (g(obj, ['verdict', 'overall']) || clean((s.match(/"verdict"\s*:\s*"([^"]+)"/) || [])[1]) || '').slice(0, 24) || 'unrated',
    siteNotes: (g(obj, ['site_notes', 'siteNotes', 'notes', 'summary', 'one_line', 'one_liner']) || clean((s.match(/"(?:site_notes|summary|one_liner?)"\s*:\s*"([^"]{1,600})/) || [])[1]) || '').slice(0, 1200),
    siteVariety,
    pages,
  };
}
// REPAIR ROUND-TRIP (DZGN1 runs 2+3: the judge ignored the schema twice and wrote truncated novels): when the
// report doesn't parse, hand the judge ITS OWN text back with a text-only "reformat into exactly this schema"
// order — models reformat their own prose reliably, and the pass is cheap (no frames attached).
function buildReformatPrompt(rawText, pageFiles) {
  return [
    'Below is YOUR design review of a multi-page site. Convert it into EXACTLY this JSON and output NOTHING else (no prose, no extra fields):',
    '{"pages":[{"file":"<one of: ' + pageFiles.join(', ') + '>","score":0-5,"must_fix":["<concrete buildable fix>"],"nice":[]}],"verdict":"striking|good|correct|weak","site_notes":"<2-3 sentences>"}',
    'Rules: EVERY listed file appears exactly once in pages; must_fix = up to 3 concrete fixes per page distilled from your review ([] if that page passes); whole reply under 3000 characters.',
    'YOUR REVIEW:',
    String(rawText || '').slice(0, 7000),
  ].join('\n\n');
}

// one fix turn per flagged page — same ownership contract as the build round
function buildFixPrompt(page, report, opts = {}) {
  const ownsStyles = page.file === 'index.html';
  return [
    'You built `' + page.file + '` as part of a multi-page site. A senior design REVIEWER judged the finished site against a STRIKING (Awwwards-shortlist) bar — apply their required fixes to YOUR page.',
    report.siteNotes ? 'SITE-WIDE reviewer notes (context — fix what applies to your page):\n' + report.siteNotes : '',
    'REQUIRED FIXES for `' + page.file + '` (apply ALL, concretely):\n' + page.mustFix.map((f, i) => (i + 1) + '. ' + f).join('\n'),
    page.nice && page.nice.length ? 'Optional polish (do if quick): ' + page.nice.join(' · ') : '',
    'HARD RULES (other builders may be fixing their pages at the same time):',
    '- Edit `' + page.file + '` ONLY.' + (ownsStyles ? ' You also OWN styles.css — you may adjust shared tokens/base styles CAREFULLY (they affect every page; prefer additive changes).' : ' styles.css and every other page are READ-ONLY (they belong to other agents) — page-specific style changes go in the <style> block inside your file.'),
    '- FILE PATH: your working directory IS the project root — pass the BARE filename to your tools. No subfolders, no absolute paths.',
    '- `DESIGN.md` is the design SOURCE OF TRUTH — apply the fixes INSIDE its system (tokens, type rules, guardrails), never by inventing a parallel one.',
    '- Keep the shared nav/footer markup and the token system; do not regress sections the reviewer did not flag.',
    '- Keep existing <img data-gen…> images; if a fix needs a NEW photo, add <img data-gen="stock-search subject"> (generic photographable scene, never invented names) — that is a STOCK query (default); only if a generation key is set and the slot needs a bespoke/abstract image stock can\'t serve, use <img data-gen-ai="prose prompt" data-ar="16:9" alt="short subject"> instead.',
    '- Aim past "correct" to STRIKING: decisive scale contrast, intentional whitespace rhythm, real density where demanded — without breaking legibility or responsiveness.',
  ].filter(Boolean).join('\n\n');
}

// TASTE T1 host guarantee: the foundation agent is ASKED to write DESIGN.md, but taste persistence must not
// depend on agent compliance — if the file is missing after the foundation turn, synthesize a valid one from
// the Director plan (deterministic; clearly labelled so a later agent/owner knows its provenance).
function synthesizeDesignMd(plan, brief) {
  return [
    '---',
    'format: design-md/alpha',
    'source: deZign+ flow planner (host-synthesized — the foundation agent did not write DESIGN.md)',
    'pages: [' + plan.pages.map((p) => p.file).join(', ') + ']',
    '---',
    '',
    '# Design system — source of truth',
    '',
    '## Brief',
    String(brief || '').replace(/\s+/g, ' ').slice(0, 600),
    '',
    '## Direction (from the Director plan — binding)',
    String(plan.design || '').slice(0, 2400),
    '',
    '## Guardrails',
    '- styles.css `:root` tokens are the ONLY values — never invent parallel colors/sizes inline.',
    '- Reuse the shared nav/footer markup on every page; page-specific styles live inside that page.',
    '- Deviations from this file need an explicit user request; record them in DECISIONS.md.',
    '',
  ].join('\n');
}

// PRE-FLOW SNAPSHOT (Pulse-District incident 2026-07-03: /flow ran inside DZGN1 and overwrote the deZign+ site;
// .dezign-history was EMPTY because flow turns bypass the renderer's per-turn undo snapshots): before ANY swarm
// write, copy the project's text files into .dezign-history/pre-flow-<stamp>/ — a manual restore point that makes
// an overwritten site recoverable. Text files only (html/css/md/js/json/svg) — generated photos are never
// overwritten by builders and can be large.
function preFlowSnapshot(dir) {
  try {
    const files = fs.readdirSync(dir).filter((f) => /\.(html?|css|md|js|json|svg)$/i.test(f) && (() => { try { return fs.statSync(path.join(dir, f)).isFile(); } catch { return false; } })());
    if (!files.length) return null;
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const rel = path.join('.dezign-history', 'pre-flow-' + stamp);
    const dst = path.join(dir, rel);
    fs.mkdirSync(dst, { recursive: true });
    for (const f of files) { try { fs.copyFileSync(path.join(dir, f), path.join(dst, f)); } catch {} }
    return rel;
  } catch { return null; }
}

// ── MULTI-AI SWARM (`/multiflow`, Q9): assign an engine (model string) to each page. The foundation (index.html)
// gets the LEAD engine (it authors the shared design system — keep it on one strong, calibrated engine). The
// remaining pages are dealt round-robin across the included POOL, so different AIs build different pages in
// parallel across SEPARATE rate limits. Engines are the same strings the model picker uses: '' = default Claude,
// 'claude-opus-4-8', 'bridge:grok', etc. Pure + order-stable so the smoke can lock the assignment. ──
function assignEngines(pages, lead, pool) {
  const list = (Array.isArray(pool) && pool.length) ? pool.slice() : [lead || ''];
  const out = {};
  let rr = 0;
  for (const p of pages) {
    if (!p || !p.file) continue;
    if (p.file === 'index.html') out[p.file] = lead || list[0] || '';
    else { out[p.file] = list[rr % list.length]; rr++; }
  }
  return out;
}
// Persist the per-page engine map so a later /review round routes each page's fix to the SAME engine that built it
// (dot-file → ignored by the misdirect detector + reconcile). Round-trips through loadEngines; both tolerate a
// missing/corrupt file (returns {}), so a standalone /review with no prior multiflow just falls back to the default.
const ENGINES_FILE = '.dezign-flow-engines.json';
function saveEngines(dir, map) { try { fs.writeFileSync(path.join(dir, ENGINES_FILE), JSON.stringify(map || {}, null, 2)); return true; } catch { return false; } }
function loadEngines(dir) { try { const o = JSON.parse(fs.readFileSync(path.join(dir, ENGINES_FILE), 'utf8')); return (o && typeof o === 'object') ? o : {}; } catch { return {}; } }

// run tasks over a worker pool (concurrency-capped, order-independent); collects per-task results, never rejects.
async function runPool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  const lanes = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (next < items.length) {
      const i = next++;
      try { results[i] = await worker(items[i], i); } catch (e) { results[i] = { ok: false, error: String((e && e.message) || e) }; }
    }
  });
  await Promise.all(lanes);
  return results;
}

module.exports = { parseFlowPlan, buildFoundationPrompt, buildPagePrompt, runPool, reconcileFlowOutput, flowReviewCard, buildReviewUserText, parseReviewReport, buildFixPrompt, buildReformatPrompt, synthesizeDesignMd, preFlowSnapshot, assignEngines, saveEngines, loadEngines, ENGINES_FILE, ARCH_PLAYBOOKS, assignSkeletons, blueprintBlock, structureProbe, buildStructureFixPrompt };
