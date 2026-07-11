// REVIEWER-REPORT GROUNDING — pure, electron-free module (unit-tested by the smoke, like imagery.cjs).
//
// CLASS THIS FIXES (2026-07-02): "text the user SEES in the chat but the builder's session never received".
// The Reviewer is a separate one-shot agent; its numbered QA findings stream to the chat UI only. The user then says
// "Fix #2 #3 #5" and the builder — whose session contains only the user's messages and its own replies — has no idea
// what the numbers mean (it literally asked "which numbering do you mean?"). Same divergence class as the render
// overlay: the user's transcript and the agent's world model are different documents.
//
// FIX, host-guaranteed: after each review the host persists the report to <project>/.dezign-review.md; every
// subsequent builder/Director turn gets it injected (bounded), until a new review overwrites it. Per-project by
// construction (lives in the project folder) and survives app restarts. A dot-file, so the misdirect detector's
// maxMtime (which skips dot-entries) is not affected.
const fs = require('fs');
const path = require('path');

const REVIEW_FILE = '.dezign-review.md';

// Persist the latest Reviewer report for a project (overwrites the previous one). Returns true when written.
function saveReview(dir, text) {
  try {
    const t = String(text || '').trim();
    if (!dir || !t) return false;
    fs.writeFileSync(path.join(dir, REVIEW_FILE), t);
    return true;
  } catch { return false; }
}

// The injection block for the next agent turn — '' when the project has no saved review.
function reviewNote(dir) {
  try {
    if (!dir) return '';
    let t = fs.readFileSync(path.join(dir, REVIEW_FILE), 'utf8').trim();
    if (!t) return '';
    if (t.length > 6000) t = t.slice(0, 6000) + '\n…[trimmed]';
    return '\n\n[LATEST QA REVIEW of this project — the user saw this in the chat and may reference its numbered items'
      + ' (e.g. "fix #2" = item 2 below). Use it to resolve such references. Items may already be fixed by later turns —'
      + ' verify against the current files before re-fixing:\n' + t + '\n]';
  } catch { return ''; }
}

// PROJECT DESIGN.md GROUNDING (Taste-layer T1, 2026-07-03): the site's PERSISTENT design source of truth —
// written by /flow's foundation agent (or synthesized by the host, or hand-edited by the owner). Injected into
// EVERY build turn (chat edits, fix rounds, bridge engines) so taste survives sessions without relying on the
// agent choosing to Read the file — the same host-guaranteed-grounding lesson as the review note above.
function designNote(dir) {
  try {
    if (!dir) return '';
    const raw = fs.readFileSync(path.join(dir, 'DESIGN.md'), 'utf8').trim();
    if (!raw) return '';
    const clipped = raw.length > 2800 ? raw.slice(0, 2800) + '\n…[clipped — the FULL DESIGN.md is in your working directory; Read it before large changes]' : raw;
    return '\n\n[PROJECT DESIGN.md — the design SOURCE OF TRUTH for this site. Follow its tokens, type system, and guardrails in every change; deviations need an explicit user request (state the conflict, then record it in DECISIONS.md):\n' + clipped + '\n]';
  } catch { return ''; }
}

// ENFORCEMENT ROUND (2026-07-08, PAIN #20 "reviewer catches drift, nothing closes the loop"): extract the
// review's P0 / blocking section so the host can feed it to ONE strict fixer pass. Pure text parsing — the
// reviewer card mandates the "P0 —" convention, but this also tolerates the emoji/wording variants observed
// in real reviews ("🔴 Blocking — must fix this turn", "P0 — Breaks the core design system").
// Returns the P0 block text, or null when the review is clean / has no P0-grade findings (then no fix round runs).
const P0_HEAD_RE = /^[ \t>*#]*(?:\*\*)?\s*(?:🔴|P0\b|BLOCKING\b)/im;
const NEXT_SECTION_RE = /^[ \t>*#]*(?:\*\*)?\s*(?:🟡|🟢|✅|P1\b|P2\b|What'?s right|Nice touches|Bottom line|Net:)/im;
function extractP0Block(text) {
  const t = String(text || '').trim();
  if (!t) return null;
  if (/^Reviewer:\s*clean/im.test(t)) return null;
  const start = t.search(P0_HEAD_RE);
  if (start < 0) return null;
  const rest = t.slice(start);
  // find the next non-P0 section heading AFTER the P0 heading line itself
  const firstLineEnd = rest.indexOf('\n');
  const body = firstLineEnd >= 0 ? rest.slice(firstLineEnd + 1) : '';
  const nextIdx = body.search(NEXT_SECTION_RE);
  const block = (nextIdx >= 0 ? rest.slice(0, firstLineEnd + 1 + nextIdx) : rest).trim();
  if (!block) return null;
  return block.length > 4000 ? block.slice(0, 4000) + '\n…[trimmed]' : block;
}

// AUDIT-2 F42: RAW DESIGN.md text (unwrapped) — reused by grounding.groundingQuery as a reliably-ENGLISH retrieval seed
// for existing-project rebuilds (DESIGN.md is English on disk by policy). '' when absent/unreadable.
function designText(dir) { try { if (!dir) return ''; return fs.readFileSync(path.join(dir, 'DESIGN.md'), 'utf8').trim(); } catch { return ''; } }
module.exports = { saveReview, reviewNote, designNote, designText, extractP0Block, REVIEW_FILE };
