/* deZign+ · references.cjs — retrieval over the curated STYLE-REFERENCE corpus (baseline/library/references/, 1288
   refs, each a rich Design.md: aesthetic narrative + token tables + an "Agent Prompt Guide"). The corpus is too big to
   inject wholesale, so: buildIndex() precomputes a compact searchable catalog (index.json) ONCE; search(query) scores a
   query against it (field-weighted keywords + bigram bonus) and returns the top-K refs; getExemplar(n) returns a trimmed
   Design.md (summary + colour/type tokens + do/don't + agent guide) to inject as a real, on-aesthetic exemplar.
   This is what makes the corpus actually reach generation (the agent SEARCHES it, or the host injects the top match). */
const fs = require('fs');
const path = require('path');

const { libDir } = require('./paths.cjs'); // R3: dev repo tree · packaged extraResource · settings.libraryDir override
const REFS = () => path.join(libDir(), 'references');
const INDEX = () => path.join(REFS(), 'index.json');

const STOP = new Set(('the a an and or of to for in on with your you build site page pages make add create new when any from into use using is are it its as be by per not no do how what why this that these those need want give me my our we us i site website web design designed look feel style clean modern').split(' '));
function tokens(s) { return (String(s || '').toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}-]{1,}/gu) || []).filter((w) => w.length > 2 && !STOP.has(w)); } // C1 (audit 2026-07-09): Unicode-aware — a Cyrillic brief no longer tokenizes to NOTHING (silent zero-grounding)

// ── build the index once (reads all Design.md, extracts a compact searchable record per ref) ─────────────────
function extract(md, n) {
  const lines = md.split('\n');
  const titleM = (lines[0] || '').match(/^#\s*(.+?)\s*(?:—|--|-)\s*Style Reference/i) || (lines[0] || '').match(/^#\s*(.+)/);
  const title = titleM ? titleM[1].trim() : ('ref ' + n);
  const tagM = md.match(/^>\s*(.+)$/m); const tagline = tagM ? tagM[1].trim() : '';
  const themeM = md.match(/\*\*Theme:\*\*\s*([A-Za-z]+)/); const theme = themeM ? themeM[1].toLowerCase() : '';
  // summary = prose between the theme line and the first "## " section
  const cut = md.indexOf('\n## ');
  let head = (cut > 0 ? md.slice(0, cut) : md);
  head = head.replace(/^#.*$/m, '').replace(/^>.*$/m, '').replace(/\*\*Theme:\*\*[^\n]*/i, '');
  const summary = head.replace(/\s+/g, ' ').trim().slice(0, 900);
  // colour hexes + font-family names (for palette / type queries)
  const colors = [...new Set((md.match(/#[0-9a-fA-F]{6}\b/g) || []).map((c) => c.toLowerCase()))].slice(0, 14);
  const fonts = [...new Set((md.match(/'([A-Za-z][A-Za-z0-9 .-]{1,30})'|font-family:\s*["']?([A-Za-z][A-Za-z0-9 .-]{1,30})/g) || [])
    .map((f) => f.replace(/font-family:\s*/i, '').replace(/['"]/g, '').trim()).filter((f) => f && !/^\d/.test(f)))].slice(0, 8);
  return { n, title, tagline, theme, summary, colors, fonts };
}
function buildIndex(opts = {}) {
  const dirs = (() => { try { return fs.readdirSync(REFS()).filter((d) => /^\d+$/.test(d)); } catch { return []; } })();
  const out = [];
  for (const d of dirs) {
    try { const md = fs.readFileSync(path.join(REFS(), d, 'Design.md'), 'utf8'); out.push(extract(md, d)); } catch {}
  }
  out.sort((a, b) => a.n.localeCompare(b.n));
  try { fs.writeFileSync(INDEX(), JSON.stringify(out)); } catch (e) { return { ok: false, reason: (e && e.message) || 'write failed' }; }
  return { ok: true, count: out.length, bytes: fs.statSync(INDEX()).size };
}

let _idx = null;
let _warnedNoRefs = false; // P5: a missing corpus logs ONCE (was a silent empty-degrade — the audited bug)
function loadIndex() {
  if (_idx) return _idx;
  if (!fs.existsSync(REFS()) && !_warnedNoRefs) { _warnedNoRefs = true; try { console.warn('[references] Style-reference corpus not found at ' + REFS() + ' — reference grounding is OFF for this run.'); } catch {} }
  if (!fs.existsSync(INDEX())) { try { buildIndex(); } catch {} } // self-heal: build the index on first use if it's missing
  try { _idx = JSON.parse(fs.readFileSync(INDEX(), 'utf8')); } catch { _idx = []; }
  // precompute the weighted search blob per ref (title/tagline weighted higher via repetition = cheap TF)
  for (const r of _idx) r._blob = ((r.title + ' ') .repeat(3) + (r.tagline + ' ').repeat(2) + r.summary + ' ' + (r.fonts || []).join(' ') + ' theme-' + r.theme).toLowerCase();
  return _idx;
}

// ── score a query against the corpus, return the top-K refs ──────────────────────────────────────────────────
function search(query, k = 5) {
  const idx = loadIndex();
  if (!idx.length) return [];
  const qs = [...new Set(tokens(query))];
  if (!qs.length) return [];
  const q = String(query || '').toLowerCase();
  const bigrams = qs.slice(0, -1).map((w, i) => w + ' ' + qs[i + 1]);
  const scored = [];
  for (const r of idx) {
    let s = 0;
    for (const t of qs) { const hits = (r._blob.match(new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length; s += hits; }
    if (!s) continue;
    for (const bg of bigrams) if (r._blob.includes(bg)) s += 4; // phrase bonus
    // light theme/colour intent alignment
    if (/\bdark\b/.test(q) && r.theme === 'dark') s += 2;
    if (/\blight\b/.test(q) && r.theme === 'light') s += 2;
    scored.push({ r, s });
  }
  scored.sort((a, b) => b.s - a.s);
  return scored.slice(0, k).map((x) => x.r);
}

// ── a trimmed, injectable exemplar of one ref (summary + colour/type tokens + do/don't + agent guide) ─────────
function getExemplar(n, cap = 2400) {
  try {
    const md = fs.readFileSync(path.join(REFS(), String(n), 'Design.md'), 'utf8');
    const wanted = ['## Tokens — Colors', '## Tokens — Typography', "## Do's and Don'ts", '## Agent Prompt Guide'];
    const head = (md.indexOf('\n## ') > 0 ? md.slice(0, md.indexOf('\n## ')) : md).trim();
    let out = head; // title + tagline + theme + summary
    for (const h of wanted) {
      const i = md.indexOf(h); if (i < 0) continue;
      const j = md.indexOf('\n## ', i + 3);
      out += '\n\n' + md.slice(i, j < 0 ? undefined : j).trim();
      if (out.length > cap) break;
    }
    return out.slice(0, cap);
  } catch { return ''; }
}

module.exports = { buildIndex, loadIndex, search, getExemplar, extract };

// CLI: node references.cjs build          → (re)build index.json
//      node references.cjs "<query>"      → search + print top matches
if (require.main === module) {
  const arg = process.argv.slice(2).join(' ');
  if (arg === 'build' || !fs.existsSync(INDEX())) { console.log('building index…', JSON.stringify(buildIndex())); if (arg === 'build') process.exit(0); }
  if (arg && arg !== 'build') {
    const hits = search(arg, 6);
    console.log('QUERY:', arg, '\nTOP', hits.length, 'REFS:');
    for (const r of hits) console.log(`  #${r.n} ${r.title} [${r.theme}] — ${r.tagline}`);
  }
}
