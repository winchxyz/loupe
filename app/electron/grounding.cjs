/* Loupe · grounding.cjs — AUDIT-2 F42. A reliably-ENGLISH library/reference retrieval query for a build turn, so a
   NON-English brief still grounds. The English-indexed corpus (library.cjs scoreEntry does English substring matching)
   was only re-grounded with an English query on the /flow path; the CHAT path re-grounded off directorPlan, which
   LANGUAGE_POLICY forces to MIRROR the user's language → a Russian brief yielded keyword-lottery junk, and on an
   existing-project rebuild (the Art Director is skipped, so there is NO plan) grounding was genuinely ZERO.
   groundingQuery composes, in priority: (1) the AD labelled-header lines (ARCHETYPE/PALETTE/HERO/TYPE/MOTION — English
   design vocab by card contract), (2) the full directorPlan (rich structure nouns; a superset of the old query), (3) the
   persisted English DESIGN.md text (covers the existing-project-rebuild zero case), (4) the raw prompt.
   Pure + node-loadable (reviewnote requires only node builtins) so the smoke can execute it against the real library. */
'use strict';
const reviewnote = require('./reviewnote.cjs');

// The AD card's labelled headers are English design terms by contract — a dependable English retrieval seed even when
// the blueprint prose mirrors the user's language.
function adHeader(plan) {
  // F42 residual fix: tolerant like artdirection.parseDirection — the live model writes "ARCHETYPE — …" (em/en-dash,
  // sometimes **bold**/`code`/# md wrappers); the old colon-only form matched NOTHING on real AD output (a silent no-op).
  const m = String(plan || '').match(/^\s*[*_`#]*\s*(?:ARCHETYPE|PALETTE|HERO|TYPE|MOTION)\s*[*_`]*\s*(?::|—|–|-)\s*.*$/gim);
  return m ? m.join(' ').replace(/[*_`#]+/g, ' ') : '';
}

// F42: a DESIGN.md-independent ENGLISH retrieval seed for the solo-chat-built REBUILD case (_hadIndex0 → the Art
// Director is skipped → no plan, no DESIGN.md). CSS class/id names are English by convention even when the visible
// copy is not, so they re-ground a non-English rebuild that would otherwise collapse to the raw foreign prompt (ZERO).
function indexSeed(cwd) {
  try {
    const fs = require('node:fs'); const path = require('node:path');
    let html = '';
    for (const f of ['index.html', 'index.htm']) { const p = path.join(String(cwd || '.'), f); if (fs.existsSync(p)) { html = fs.readFileSync(p, 'utf8'); break; } }
    if (!html) return '';
    const toks = new Set();
    for (const m of html.matchAll(/\b(?:class|id)\s*=\s*["']([^"']+)["']/gi)) for (const t of m[1].split(/[\s_-]+/)) { const w = t.toLowerCase(); if (/^[a-z][a-z]{2,}$/.test(w)) toks.add(w); }
    return [...toks].slice(0, 60).join(' ');
  } catch { return ''; }
}

function groundingQuery(prompt, directorPlan, cwd) {
  let dm = '';
  try { dm = reviewnote.designText(cwd) || ''; } catch { dm = ''; }
  // priority: (1) AD English headers, (2) full plan, (3) persisted English DESIGN.md, (4) index.html English class/id
  // seed (the solo-rebuild fallback), (5) raw prompt. Non-English input never grounds off the raw prompt alone now.
  return [adHeader(directorPlan), String(directorPlan || ''), dm.slice(0, 700), indexSeed(cwd), String(prompt || '').slice(0, 300)]
    .filter(Boolean).join(' ').replace(/\s+/g, ' ').trim().slice(0, 2000);
}

module.exports = { groundingQuery, adHeader, indexSeed };
