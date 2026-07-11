/* deZign+ · library.cjs — host-side RETRIEVAL of the knowledge base into the (isolated) builder agent.
   The builder runs settingSources:[] and is cwd-scoped, so it CANNOT see baseline/library/ itself. This module
   reads the catalog (INDEX.md), scores entries against the turn's prompt, and returns a BOUNDED context block to
   inject into the builder's system prompt — so the methodology actually reaches generation (KNOWLEDGE-WIRING.md L1a).
   Library = HELP not a cage (CLAUDE.md): the injected block says so; the agent leads with its own judgment. */
const fs = require('fs');
const path = require('path');

const { libDir } = require('./paths.cjs'); // R3: dev repo tree · packaged extraResource · settings.libraryDir override

// Parse INDEX.md markdown tables → entries { title, rel, hint }, then MERGE a directory scan so a file that
// never got its own INDEX row is still findable (2026-07-03 audit: 34 techniques + the visual-quality rubric
// were catalog-ORPHANS because INDEX listed them inside combined rows). INDEX rows win (richer hints);
// the scan guarantees "everything on disk is reachable" regardless of INDEX hygiene.
let _warnedNoLib = false; // P5: the first failed read logs ONCE (was a silent empty-degrade — the audited bug)
function loadCatalog() {
  const out = [], seen = new Set();
  let idx = '';
  try { idx = fs.readFileSync(path.join(libDir(), 'INDEX.md'), 'utf8'); }
  catch { if (!_warnedNoLib) { _warnedNoLib = true; try { console.warn('[library] INDEX.md not readable at ' + libDir() + ' — knowledge retrieval degrades to a bare directory scan (or nothing).'); } catch {} } }
  for (const line of idx.split('\n')) {
    if (line[0] !== '|') continue; // table rows only
    const m = line.match(/\[([^\]]+)\]\(((?:recipes|techniques|standards|patterns)\/[^)]+\.md)\)/);
    if (!m) continue;
    if (seen.has(m[2])) continue; seen.add(m[2]);
    // hint = the row's cells with links flattened to their visible text (title + "apply when" + one-line)
    const hint = line.replace(/^\||\|$/g, '').split('|')
      .map((c) => c.trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')).filter(Boolean).join(' · ');
    out.push({ title: m[1], rel: m[2], hint });
  }
  for (const dir of ['recipes', 'techniques', 'standards', 'patterns']) {
    let files = [];
    try { files = fs.readdirSync(path.join(libDir(), dir)).filter((f) => f.endsWith('.md')); } catch { continue; }
    for (const f of files) {
      const rel = dir + '/' + f;
      if (seen.has(rel)) continue; seen.add(rel);
      let title = f.replace(/\.md$/, '').replace(/-/g, ' '), lead = '';
      try {
        const head = fs.readFileSync(path.join(libDir(), rel), 'utf8').slice(0, 800).split('\n');
        const h1 = head.find((l) => l.startsWith('# ')); if (h1) title = h1.slice(2).trim();
        lead = (head.find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('tags:')) || '').trim().slice(0, 140);
      } catch {}
      out.push({ title, rel, hint: title + (lead ? ' · ' + lead : '') });
    }
  }
  return out;
}

const STOP = new Set(('the a an and or of to for in on with your you build site page pages make add create new when any from into use using is are it its as be by per not no do how what why this that these those need want give me my our we us i').split(' '));
function tokens(s) { return (String(s || '').toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}.+-]*/gu) || []).filter((w) => w.length > 2 && !STOP.has(w)); } // C1 (audit 2026-07-09): Unicode-aware — a Cyrillic brief no longer tokenizes to NOTHING (silent zero-grounding)

function scoreEntry(qSet, e) {
  const hay = (e.title + ' ' + e.hint + ' ' + e.rel).toLowerCase();
  let s = 0;
  // patterns (composition playbooks) > recipes (concrete styles) > techniques (articles) — structure knowledge
  // is what kills the template-sameness, so it must win ties against keyword-lottery article matches
  const w = e.rel.startsWith('patterns/') ? 1.6 : e.rel.startsWith('recipes/') ? 1.3 : 1;
  for (const q of qSet) if (hay.includes(q)) s += w;
  return s;
}

// STRUCTURE GUARANTEE: when the query names a composition (bento / marquee / pinned / diagram / poster / splits /
// numerals / hero-demo), the matching playbook is included FULL — never truncated mid-skeleton, never out-ranked
// by an article that happened to share a keyword.
const STRUCTURE_HINTS = [
  [/\bbento|mosaic|tile/i, 'patterns/bento-span-choreography.md'],
  [/\bdiagram|pipeline|how.?it.?works|process|loop\b/i, 'patterns/diagram-as-layout.md'],
  [/\bmarquee|kinetic|ticker|outline t|running (text|type)/i, 'patterns/kinetic-type-marquee.md'],
  [/\bnumeral|numbered (steps|phases)|chapters|01\b/i, 'patterns/numeral-rail.md'],
  [/\bdemo|self.?demonstrat|product hero|saas|app\b|tool\b/i, 'patterns/self-demonstrating-hero.md'],
  [/\bposter|full.?bleed|festival|campaign|loud|editorial dark/i, 'patterns/poster-scroll.md'],
  [/\bsplit|two.?column|landing|template/i, 'patterns/split-discipline.md'],
  [/\bpinned?\b|sticky|scrolltell|dwell|sequence/i, 'patterns/scroll-dwell-sequence.md'],
];
function structureMatches(query) {
  const q = String(query || '');
  return STRUCTURE_HINTS.filter(([re]) => re.test(q)).map(([, rel]) => rel);
}

const ASSET_RE = /\b(3d|webgl|three\.?js|r3f|texture|textures|hdri|model|models|asset|assets|icon|icons|svg|sprite|material|glb|gltf|mesh|font|fonts|illustration|photo|photos|image|images)\b/i;

// Build the bounded context block for a prompt. Returns '' when nothing scores (e.g. a trivial follow-up).
function retrieve(query, opts = {}) {
  const maxRows = opts.maxRows || 7, maxFull = opts.maxFull || 3, perFile = opts.perFile || 1800, maxChars = opts.maxChars || 11000;
  const cat = loadCatalog();
  if (!cat.length) return '';
  const qSet = [...new Set(tokens(query))];
  if (!qSet.length) return '';
  const ranked = cat.map((e) => ({ e, s: scoreEntry(qSet, e) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
  if (!ranked.length && !ASSET_RE.test(String(query || ''))) return '';

  let block = 'RELEVANT LIBRARY ENTRIES (your curated knowledge base — the library is HELP not a cage: apply what genuinely fits, lead with your OWN design judgment, and note in one line what you leaned on):';
  for (const { e } of ranked.slice(0, maxRows)) block += '\n• ' + e.hint;

  // structure playbooks named by the query come FIRST and FULL (they're authored ≤90 lines for whole injection)
  const guaranteed = structureMatches(query);
  let detail = '';
  const used = new Set();
  for (const rel of guaranteed.slice(0, 2)) {
    try {
      const c = fs.readFileSync(path.join(libDir(), rel), 'utf8').trim();
      detail += '\n\n## STRUCTURE PLAYBOOK — ' + rel + ' (apply its skeleton + variation axes; vary, don\'t clone)\n' + c.slice(0, 3400);
      used.add(rel);
    } catch {}
  }
  for (const { e } of ranked.slice(0, maxFull)) {
    if (used.has(e.rel)) continue;
    try {
      let c = fs.readFileSync(path.join(libDir(), e.rel), 'utf8').trim();
      const cap = e.rel.startsWith('patterns/') ? 3400 : perFile; // playbooks go whole; articles stay excerpts
      if (c.length > cap) c = c.slice(0, cap) + '\n…[truncated]';
      detail += '\n\n## ' + e.title + ' — ' + e.rel + '\n' + c;
    } catch {}
  }
  if (detail) block += '\n\n— DETAIL (the most relevant entries) —' + detail;

  // ASSET SOURCING: when the task implies assets, arm the proactive-sourcing mandate with the real source registry.
  if (ASSET_RE.test(String(query || ''))) {
    try {
      let a = fs.readFileSync(path.join(libDir(), 'asset-sources.md'), 'utf8').trim();
      if (a.length > 2400) a = a.slice(0, 2400) + '\n…[truncated]';
      block += '\n\n— ASSET SOURCES (where to get real 3D / textures / HDRI / icons / fonts — PROPOSE specific ones from here before building; search → propose → approve) —\n' + a;
    } catch {}
  }

  if (block.length > maxChars) block = block.slice(0, maxChars) + '\n…[library context truncated]';
  return block;
}

// Score + return the top-K curated entries (title + hint + full content) for the on-demand search tool.
function search(query, k = 4) {
  const cat = loadCatalog();
  const qSet = [...new Set(tokens(query))];
  if (!cat.length || !qSet.length) return [];
  const ranked = cat.map((e) => ({ e, s: scoreEntry(qSet, e) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, k);
  return ranked.map(({ e }) => { let content = ''; try { content = fs.readFileSync(path.join(libDir(), e.rel), 'utf8').trim(); } catch {} return { title: e.title, rel: e.rel, hint: e.hint, content }; });
}

// ── SNIPPET DELIVERY (the last unreachable knowledge class, 2026-07-03): snippets are REAL runnable code the
// cwd-isolated agent can't read from the library — so the HOST copies the matched files into <cwd>/.dezign-kb/
// and tells the agent to Read + ADAPT them. Dot-folder: ignored by the misdirect detector and imagery scan. ──
function loadSnippets() {
  const out = [], seen = new Set();
  // (a) curated catalog rows (techniques/codepen-picks.md) — rich descriptions
  try {
    const cp = fs.readFileSync(path.join(libDir(), 'techniques', 'codepen-picks.md'), 'utf8');
    for (const line of cp.split('\n')) {
      const m = line.match(/\((?:\.\.\/)?(snippets\/[^)]+\.(?:html|css|js|tsx))\)/i);
      if (!m || seen.has(m[1])) continue; seen.add(m[1]);
      const desc = line.replace(/\|/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim().slice(0, 200);
      out.push({ rel: m[1], desc });
    }
  } catch {}
  // (b) directory scan — desc from folder + filename + the first header comment line
  const walk = (dir) => {
    let es = []; try { es = fs.readdirSync(path.join(libDir(), dir), { withFileTypes: true }); } catch { return; }
    for (const e of es) {
      const rel = dir + '/' + e.name;
      if (e.isDirectory()) { walk(rel); continue; }
      if (!/\.(html|css|js|tsx)$/i.test(e.name) || seen.has(rel)) continue;
      seen.add(rel);
      let head = ''; try { head = fs.readFileSync(path.join(libDir(), rel), 'utf8').slice(0, 400); } catch {}
      const cm = head.match(/(?:<!--|\/\*|\/\/)\s*([^\n]*)/);
      out.push({ rel, desc: (rel.replace(/[\/_-]/g, ' ') + ' ' + (cm ? cm[1] : '')).replace(/\s+/g, ' ').trim().slice(0, 200) });
    }
  };
  walk('snippets');
  return out;
}
function searchSnippets(query, k = 2) {
  const qSet = [...new Set(tokens(query))];
  if (!qSet.length) return [];
  return loadSnippets()
    .map((s) => ({ s, score: qSet.reduce((a, q) => a + (s.desc.toLowerCase().includes(q) ? 1 : 0), 0) }))
    .filter((x) => x.score >= 2) // require a real match — never copy noise into the project
    .sort((a, b) => b.score - a.score).slice(0, k).map((x) => x.s);
}
function armSnippets(cwd, query, k = 2) {
  try {
    const hits = searchSnippets(query, k);
    if (!hits.length) return '';
    const kb = path.join(cwd, '.dezign-kb');
    fs.mkdirSync(kb, { recursive: true });
    const names = [];
    for (const h of hits) {
      const flat = h.rel.replace(/^snippets\//, '').replace(/[\\/]/g, '__');
      try { fs.copyFileSync(path.join(libDir(), h.rel), path.join(kb, flat)); names.push({ file: '.dezign-kb/' + flat, desc: h.desc }); } catch {}
    }
    if (!names.length) return '';
    return '\n\nREAL RUNNABLE REFERENCE CODE (copied into your project — Read these files and ADAPT: retheme to THIS project\'s tokens/type, extract the technique, never paste verbatim or keep foreign branding):\n'
      + names.map((n) => '• ' + n.file + ' — ' + n.desc).join('\n');
  } catch { return ''; }
}

// TASTE PRIORS (Q3 / Taste-Layer T2): the quantitative design floor distilled from the 1288-ref corpus by
// app/scripts/distill-taste-priors.cjs → standards/taste-priors.md. Injected host-GUARANTEED into every real
// builder grounding (not tool-gated — KNOWLEDGE-WIRING's lesson: the agent won't call a tool for it). Read fresh
// (tiny file) so a re-run of the distiller takes effect without a code change. Priors raise the FLOOR; the
// builder's own composition/taste still leads (CLAUDE.md).
// ASSET SOURCES for the FLOW path (2026-07-04): retrieve() already injects asset-sources.md on ASSET_RE for single
// builds; searchDesignLibrary (the /flow grounding) omitted it, so the swarm was blind to the 3D/asset registry.
// This exported helper returns the same labelled block when the query implies assets, '' otherwise — so both paths
// learn the registry + governance (Poly Haven CC0 auto-fetch via the host harvester; Sketchfab/Poly Pizza propose).
function assetSources(query, cap = 2400) {
  if (!ASSET_RE.test(String(query || ''))) return '';
  try {
    let a = fs.readFileSync(path.join(libDir(), 'asset-sources.md'), 'utf8').trim();
    if (a.length > cap) a = a.slice(0, cap) + '\n…[truncated]';
    return '— ASSET SOURCES (where to get real 3D / textures / HDRI / icons / fonts — PROPOSE specific ones; for a Poly Haven HDRI sky the HOST auto-fetches it, emit <div data-hdri="sky subject" id="…"> + load assets/hdri/<id>.hdr) —\n' + a;
  } catch { return ''; }
}

function tastePriors(cap = 6000) {
  try {
    let t = fs.readFileSync(path.join(libDir(), 'standards', 'taste-priors.md'), 'utf8').trim();
    if (!t) return '';
    if (t.length > cap) t = t.slice(0, cap) + '\n…[truncated]';
    return '— TASTE PRIORS (quantitative design floor from 1288 curated references; treat as defaults to match or beat with intent, NOT rules — your own composition/taste leads) —\n' + t;
  } catch { return ''; }
}

module.exports = { retrieve, loadCatalog, search, structureMatches, loadSnippets, searchSnippets, armSnippets, tastePriors, assetSources };

// CLI: node library.cjs "<query>"  → prints the retrieved block (manual check)
if (require.main === module) {
  const q = process.argv.slice(2).join(' ') || 'dark portfolio with webgl three.js hero and bold typography';
  const r = retrieve(q);
  console.log('QUERY:', q, '\nCATALOG ENTRIES:', loadCatalog().length, '\n--- BLOCK (' + r.length + ' chars) ---\n' + r.slice(0, 1600));
}
