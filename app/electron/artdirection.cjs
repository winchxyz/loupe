/* deZign — artdirection.cjs · the SHARED, generative, divergence-aware ART-DIRECTION pre-pass (2026-07-05).
 *
 * WHY (STRUCTURE-SAMENESS-DIAGNOSIS.md): every generated site rhymes because variety is manufactured by DETERMINISTIC
 * rules (brief→keywords→a fixed table of 6 shapes→corpus-median style) with NO memory of prior sites — a stack of
 * regression-to-the-mean operators, so the mean ships. The fix is to move the variety decision UP into a committed,
 * brief-specific, GENERATIVE direction that REMEMBERS what was already built and is REQUIRED to diverge, and to treat
 * the pattern library as reference (help), not a cage of 6.
 *
 * This module is PURE (no Electron / no network): prompt + parse + a small JSON "divergence memory" keyed on a file
 * path the host supplies (main.cjs → userData/dezign-artdirection.json). The generative agent that consumes the prompt
 * lives in agent.cjs (runArtDirector); the host (main.cjs) wires read→run→parse→persist→inject-as-binding-blueprint.
 */
'use strict';
const fs = require('node:fs');

// ── the ART-DIRECTOR card (shipped default; the live source of truth is the editable app/agents/art-director.md) ──
const ART_DIRECTOR_BEHAVIOR = [
  'You are the ART DIRECTOR. Before a single line is built, you COMMIT to a distinctive, brief-specific creative',
  'direction that the builder will execute as a BINDING blueprint. You AUTHOR the composition for THIS brand — you do',
  'NOT pick a layout from a menu, and you do NOT default to a safe tasteful average. A generic vertical stack of',
  'full-width sections is a FAILED direction.',
  '',
  'HARD RULE — DIVERGE: you are given RECENT SITES you already directed. Your new direction MUST differ from EVERY one',
  'of them on the major axes — aesthetic archetype, palette temperature/value, hero architecture, and type personality.',
  'If your instinct matches a recent one, deliberately choose a different, brief-appropriate territory. Reach PAST the',
  'LLM defaults: no warm-paper-editorial-by-default, no centered hero on a dark mesh, no three equal cards, no',
  'Inter-by-default, no everything-symmetrical. Palette temperature and value are ALL legal (dark, saturated, cool,',
  'high-contrast, monochrome-plus-one) — vary them across sites.',
  '',
  'AUTHOR THE STRUCTURE (this is the point): design a COMPOSITIONAL STRATEGY specific to this brief — the spine of the',
  'page as a sequence of DISTINCT section architectures that differ from one another (not a repeated band). Name each',
  "section's job AND its distinct structural form (e.g. an asymmetric split hero, a diagram-as-layout process, an",
  'oversized-numeral rail, a full-bleed inverted poster band, a span-choreographed bento, a pinned scroll sequence,',
  'layered overlap with real z-depth). At least 4 genuinely different section forms; never the same shape twice.',
  '',
  'The library entries below (techniques / patterns / real references) are HELP and INSPIRATION, never a cage or a',
  'fixed menu — borrow ideas, combine them, invent your own; do not just select one playbook. Lead with your own taste.',
  '',
  'OUTPUT — begin with EXACTLY this labelled header (one value per line, for the app to remember and diverge from next',
  'time), then a blank line, then the binding blueprint:',
  'ARCHETYPE: <2-4 word named aesthetic, e.g. "brutalist trading terminal", "sun-bleached coastal editorial">',
  'PALETTE: <temperature + value + the accent, e.g. "cool near-black + electric lime", "warm cream + oxblood">',
  'HERO: <the home hero architecture in a few words, e.g. "asymmetric split with a live product stage">',
  'TYPE: <display + body pairing, named, not Inter-by-default, + the scale intent>',
  'MOTION: <the one signature motion / interaction idea>',
  'LANGUAGE — the labelled-header VALUES above (archetype / palette / type / structure vocabulary) are DESIGN TERMS: write them in ENGLISH so they are a dependable retrieval seed, even for a non-English brief. The "## Composition" and "## Guardrails" blueprint prose below follows the brief\'s / user\'s language.',
  '',
  'BLUEPRINT — then, under a "## Composition" heading, the section-by-section spine (each section: job + its DISTINCT',
  'structural form + the 2-3 signature moves layered in), plus a one-line "## Guardrails" for THIS site. Keep the whole',
  'reply under ~28 lines, concrete and buildable, specific to THIS brief. This IS the builder\'s binding brief.',
  '',
  'HARD RULE — PROSE ONLY, NEVER CODE: your reply must contain NO code of any kind — no HTML, no CSS, no JS, no',
  'fenced ``` blocks, no <tags>, no hex-perfect stylesheets. You author the DIRECTION; the builder authors every',
  'line of code. Even for a tiny one-section brief, describe the composition in WORDS (the host strips any code',
  'you emit before the builder sees it, so code is pure waste).',
].join('\n');

// ── R3 class-fix (owner-approved 2026-07-10): on trivial briefs the live model collapsed its blueprint into a FULL
// HTML page in a code fence — burning tokens, cluttering the chat, and landing verbatim page code in the BUILDER's
// system prompt (invites copy-the-code instead of authoring). The card now forbids it (prose-only); this is the
// HOST-GUARANTEED half: strip fenced blocks and raw document dumps from the direction before ANY downstream
// consumer (builder directorPlan · flow planner artDirection · build log). Header parsing is unaffected.
function stripCodeBlocks(text) {
  let s = String(text || '');
  s = s.replace(/```[\s\S]*?```/g, '\n[code removed — the blueprint is composition prose; the builder authors all code]\n');
  s = s.replace(/```[\s\S]*$/, '\n[unterminated code block removed]\n'); // a fence the model never closed
  const doc = s.search(/<!doctype\s|<html[\s>]/i); // raw page dump without a fence
  if (doc >= 0) s = s.slice(0, doc) + '\n[raw page markup removed — composition prose only]\n';
  return s.trim();
}

// ── divergence memory (a small JSON array of prior directions, newest last) ──────────────────────────────────────
function _read(file) { try { const a = JSON.parse(fs.readFileSync(file, 'utf8')); return Array.isArray(a) ? a : []; } catch { return []; } }
// last k prior directions (most recent first for the prompt), each { archetype, palette, hero, type, brief, ts }
function readDirections(file, k = 6) { const a = _read(file); return a.slice(-k).reverse(); }
// append a parsed direction, cap the store to the last `cap` (cross-site memory, not per-project)
function pushDirection(file, dir, cap = 12) {
  if (!dir || typeof dir !== 'object') return false;
  const a = _read(file);
  a.push({ archetype: String(dir.archetype || '').slice(0, 80), palette: String(dir.palette || '').slice(0, 80), hero: String(dir.hero || '').slice(0, 100), type: String(dir.type || '').slice(0, 80), brief: String(dir.brief || '').slice(0, 120), ts: dir.ts || '' });
  const trimmed = a.slice(-Math.max(1, cap));
  try { fs.writeFileSync(file, JSON.stringify(trimmed)); return true; } catch { return false; }
}

// ── the "you already built these — DIVERGE" block injected into the art-director prompt ──────────────────────────
function divergenceBlock(dirs) {
  if (!Array.isArray(dirs) || !dirs.length) return '';
  const lines = dirs.map((d, i) => (i + 1) + '. archetype "' + (d.archetype || '?') + '" · palette ' + (d.palette || '?') + ' · hero ' + (d.hero || '?') + ' · type ' + (d.type || '?')).join('\n');
  return 'RECENT SITES YOU ALREADY DIRECTED (newest first) — your NEW direction MUST differ from EVERY one of these on'
    + ' archetype AND palette temperature AND hero architecture AND type. Do NOT repeat any of them:\n' + lines;
}

// ── parse the labelled header the art-director emits (for the memory) — tolerant to prose/fences around it ───────
// R2 (F1b, proven live): the card canonicalises "ARCHETYPE: <...>" but the live model reliably writes
// "ARCHETYPE — <...>" (em-dash, sometimes **bold** labels) — the colon-only regex matched NOTHING, so
// hasDirection() was false on every real direction and the divergence memory NEVER accumulated (the memory
// file did not exist on disk anywhere). Accept :, —, –, or - after the label, with optional md wrappers.
function parseDirection(text) {
  const s = String(text || '');
  const grab = (label) => { const m = s.match(new RegExp('^\\s*[*_`#]*\\s*' + label + '\\s*[*_`]*\\s*(?::|—|–|-)\\s*(.+)$', 'im')); return m ? m[1].trim().replace(/[*_`]+/g, '').slice(0, 100) : ''; };
  return { archetype: grab('ARCHETYPE'), palette: grab('PALETTE'), hero: grab('HERO'), type: grab('TYPE') };
}
// did the model actually commit a usable direction (at least an archetype)?
function hasDirection(text) { return !!parseDirection(text).archetype; }

module.exports = { ART_DIRECTOR_BEHAVIOR, readDirections, pushDirection, divergenceBlock, parseDirection, hasDirection, stripCodeBlocks };
