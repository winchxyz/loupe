/* deZign — assetsource.cjs · HOST-SIDE 3D ASSET HARVESTER (the 3D analog of imagesource.cjs, 2026-07-04).
 *
 * The isolated builder (settingSources:[], no web/Bash) cannot fetch a 3D asset, so a real WebGL scene comes out
 * flat (no image-based lighting). This module closes that gap for the safe lane: Poly Haven HDRIs — CC0, keyless,
 * direct-download. Convention (mirrors <img data-gen>): the agent emits ONE anchor per scene
 *   <div data-hdri="clear blue mountain sky at dawn" data-hdri-res="2k" id="scene-hero"></div>
 * and its own Three.js loads the env map from the FIXED path assets/hdri/<id>.hdr via RGBELoader (with an onerror
 * that keeps a procedural sky). AFTER the turn the host matches the subject → a Poly Haven HDRI, downloads a
 * web-res .hdr into exactly that path, and stamps data-hdri-done. The host NEVER edits the agent's JS — it only
 * writes the binary the JS already references. HDRI is an UPGRADE layered on a self-sufficient procedural scene:
 * every failure (no net / no match / bad file) leaves the procedural fallback, never a broken page.
 *
 * Reuses imagesource.cjs's proven relevance core verbatim (scoreText/validCandidates/anchorLadder/siteDomain) so
 * the domain-anchoring + threshold lessons (MRDN5/7) apply to HDRIs too. Governance: Poly Haven CC0 → auto-fetch,
 * no attribution; Sketchfab/Poly Pizza stay propose-only (text-grounding, never auto). Doc: STRUCTURE-LEVER.md sibling.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const IS = require('./imagesource.cjs'); // getJSON · siteDomain · anchorLadder · scoreText · validCandidates

const PH_BASE = 'https://api.polyhaven.com';

// Fetch the HDRI catalog ONCE per run (swarms emit N similar requests — cache like imagesource._runCache). Each
// candidate carries a flattened `text` (name+categories+tags+description) that scoreText/validCandidates consume.
async function fetchHdriCatalog(opts = {}) {
  if (opts._hdriCatalog) return opts._hdriCatalog;
  let raw;
  try { raw = await IS.getJSON(PH_BASE + '/assets?type=hdris'); } catch (e) { opts._hdriCatalogError = String((e && e.message) || e); return (opts._hdriCatalog = []); } // capture WHY (an offline/5xx API vs a genuine empty catalog) so the log reason is honest
  const out = [];
  for (const slug of Object.keys(raw || {})) {
    const v = raw[slug] || {};
    const cats = Array.isArray(v.categories) ? v.categories : [];
    const tags = Array.isArray(v.tags) ? v.tags : [];
    out.push({ slug, name: v.name || slug, categories: cats, tags, description: v.description || '', text: [v.name || slug, cats.join(' '), tags.join(' '), v.description || ''].join(' ') });
  }
  return (opts._hdriCatalog = out);
}

const URBAN_RE = /\b(urban|city|interior|indoor|street|building|rooftop|room|office|studio)\b/i;
// relevance (imagesource scoreText) + a deterministic SKY-CLEANLINESS bias (the hdri-background-selection.md PAIN:
// "wanted a sky, got houses in the lower hemisphere"). No vision call — a flat equirect thumbnail can't be judged.
function scoreHDRI(cand, subject) {
  let s = IS.scoreText(cand.text, subject);
  const t = String(cand.text || '').toLowerCase();
  if (/\bskies?\b|pure ?sky/.test(t) || /sky|puresky/.test(String(cand.slug || ''))) s += 2;
  if (URBAN_RE.test(t) && !URBAN_RE.test(String(subject || ''))) s -= 3; // ground clutter loses unless the brief wants it
  return s;
}

// subject → best HDRI slug. Walks the domain-anchored ladder; at the first rung with valid candidates, re-ranks the
// survivors by scoreHDRI (relevance + sky bias) and returns the top. null when the catalog is empty or nothing fits.
async function matchHDRI(subject, opts = {}) {
  const catalog = await fetchHdriCatalog(opts);
  if (!catalog.length) return null;
  const rungs = IS.anchorLadder(subject, opts.domain || '');
  for (const rung of rungs) {
    const valid = IS.validCandidates(catalog, rung); // relevance gate on THIS rung (≥1-2 word hits + head word)
    if (!valid.length) continue;
    const best = valid.slice().sort((a, b) => scoreHDRI(b, subject) - scoreHDRI(a, subject))[0];
    return { slug: best.slug, name: best.name, score: scoreHDRI(best, subject), usedQuery: rung, simplified: rung !== subject };
  }
  return null;
}

// slug + wanted res → a web-appropriate .hdr download URL. CLAMP to {1k,2k} (never 4k/8k/16k — 16k .hdr = 372 MB);
// prefer the wanted res, then 2k, then 1k, then the smallest available. Only ever the .hdr variant (RGBELoader).
async function resolveHdriUrl(slug, res = '2k', opts = {}) {
  if (!/^[a-z0-9_-]+$/i.test(String(slug))) return null; // AUDIT-2 F39: strict slug allow-list BEFORE it enters the PH request URL and the data-hdri-src stamp (belts encodeURIComponent). PH slugs are already this shape → no legit loss.
  let files;
  try { files = await IS.getJSON(PH_BASE + '/files/' + encodeURIComponent(slug)); } catch { return null; }
  const hdri = files && files.hdri;
  if (!hdri || typeof hdri !== 'object') return null;
  const want = (res === '1k' || res === '2k') ? res : '2k';
  const sizeOrder = Object.keys(hdri).sort((a, b) => (parseInt(a) || 999) - (parseInt(b) || 999)); // 1k,2k,4k…
  for (const r of [want, '2k', '1k', ...sizeOrder]) {
    const h = hdri[r] && hdri[r].hdr;
    if (h && h.url) return { url: h.url, res: r, bytes: h.size };
  }
  return null;
}

// binary download for .hdr (imagesource.download rejects non-image/ content-types; a .hdr is image/vnd.radiance OR
// application/octet-stream). Follows redirects, validates size ≥200 KB + the Radiance magic header, deletes junk.
const MAX_HDR_BYTES = 150 * 1024 * 1024; // S3 (audit 2026-07-09): a 4k Poly Haven .hdr tops out well under this; anything bigger is broken/hostile
function downloadBinary(url, filepath, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'deZign/1.0' }, timeout: 60000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 4) { res.resume(); return resolve(downloadBinary(res.headers.location, filepath, redirects + 1)); }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      const ct = res.headers['content-type'] || '';
      if (!/octet-stream|radiance|image\/|application\/x-/i.test(ct)) { res.resume(); return reject(new Error('unexpected content-type: ' + ct)); }
      const clen = parseInt(res.headers['content-length'] || '0', 10);
      if (clen > MAX_HDR_BYTES) { res.resume(); return reject(new Error('HDRI too large: ' + clen + ' bytes')); } // S3: Content-Length reject
      const out = fs.createWriteStream(filepath);
      let got = 0, failed = false;
      // AUDIT-2 F29: res.pipe(out) does NOT forward SOURCE errors — a mid-stream connection drop fires res 'error'/'aborted'
      // but never out 'finish', so the promise hangs AND a half-written .hdr is left. One-shot: unpipe, destroy, unlink, reject.
      const failPartial = (err) => { if (failed) return; failed = true; try { res.unpipe(out); } catch {} try { res.destroy(); } catch {} try { out.destroy(); } catch {} try { fs.unlinkSync(filepath); } catch {} reject(err); };
      res.on('error', failPartial);
      res.on('aborted', () => failPartial(new Error('HDRI download aborted (connection closed mid-stream)')));
      res.on('data', (d) => { got += d.length; if (got > MAX_HDR_BYTES) failPartial(new Error('HDRI exceeded the byte cap mid-stream')); }); // S3: stream counter (lying/absent length)
      res.pipe(out);
      out.on('finish', () => { if (failed) return; out.close(() => {
        try {
          const size = fs.statSync(filepath).size;
          const fd = fs.openSync(filepath, 'r'); const buf = Buffer.alloc(16); fs.readSync(fd, buf, 0, 16, 0); fs.closeSync(fd);
          if (size < 200 * 1024 || !/#\?(RADIANCE|RGBE)/.test(buf.toString('latin1'))) { try { fs.unlinkSync(filepath); } catch {} return reject(new Error('invalid HDR (size ' + size + ')')); }
          resolve({ filepath, bytes: size });
        } catch (e) { reject(e); }
      }); });
      out.on('error', failPartial);
    }).on('error', reject).on('timeout', function () { this.destroy(new Error('timeout')); });
  });
}

// any element carrying data-hdri="subject" (the anchor); stateful global regex — reset lastIndex before each scan.
const ANCHOR_RE = /<[a-z][a-z0-9]*\b[^>]*\bdata-hdri\s*=\s*("|')([\s\S]*?)\1[^>]*>/gi;
const attrOf = (tag, name) => (tag.match(new RegExp('\\b' + name + '\\s*=\\s*("|\')([^"\']*)\\1', 'i')) || [])[2] || '';

// THE ORCHESTRATOR (mirrors fulfillImages): scan built HTML for data-hdri anchors, fill each into assets/hdri/<id>.hdr
// from Poly Haven, stamp data-hdri-done. Returns out[] of {file, ok, subject, slug, res, reason?}. Idempotent.
async function fulfillHDRIs(dir, opts = {}) {
  const out = [];
  let htmlFiles;
  try { htmlFiles = fs.readdirSync(dir).filter((f) => /\.html?$/i.test(f)); } catch { return out; }
  const shared = { ...opts, domain: opts.domain || IS.siteDomain(dir) };
  const seenIds = new Map(); // id → {file, subject, slug, res}: assets/hdri/<id>.hdr is keyed ONLY on id, so two /flow pages sharing an id collide — detect it (see below)
  for (const file of htmlFiles) {
    const abs = path.join(dir, file);
    let html; try { html = fs.readFileSync(abs, 'utf8'); } catch { continue; }
    const anchors = [];
    ANCHOR_RE.lastIndex = 0; let m;
    while ((m = ANCHOR_RE.exec(html))) anchors.push({ full: m[0], subject: String(m[2] || '').trim() });
    let changed = false;
    for (const a of anchors) {
      if (/data-hdri-done/.test(a.full)) continue; // idempotent: already filled
      if (!a.subject) { out.push({ file, ok: false, reason: 'empty data-hdri subject' }); continue; }
      const id = attrOf(a.full, 'id');
      if (!id) { out.push({ file, ok: false, subject: a.subject, reason: 'anchor has no id — cannot guarantee assets/hdri/<id>.hdr' }); continue; }
      // S4 (audit 2026-07-09): the id is agent-emitted text used in a filesystem path — strict slug only, so a
      // separator-carrying id can never escape assets/hdri/.
      if (!/^[A-Za-z0-9_-]+$/.test(id)) { out.push({ file, ok: false, subject: a.subject, id, reason: 'invalid id "' + id.slice(0, 40) + '" — letters/digits/dash/underscore only' }); continue; }
      // CROSS-PAGE id COLLISION (2026-07-04): the target is keyed ONLY on id, and two isolated /flow page builders can
      // pick the same id (the card example is literally "scene-hero"). Handle it instead of silently overwriting one
      // page's HDRI or wasting a second download: same subject → share the file already fetched (stamp only); different
      // subject → keep the FIRST, skip this one, and report it honestly (the loader still resolves a valid sky).
      const prior = seenIds.get(id);
      if (prior) {
        if (prior.subject === a.subject) {
          const stampedShare = a.full.replace(/^(<[a-z][a-z0-9]*)/i, '$1 data-hdri-done data-hdri-src="' + prior.slug + '|' + prior.res + '"');
          html = html.split(a.full).join(stampedShare); changed = true;
          out.push({ file, ok: true, subject: a.subject, id, rel: 'assets/hdri/' + id + '.hdr', slug: prior.slug, res: prior.res, shared: prior.file });
        } else {
          out.push({ file, ok: false, subject: a.subject, id, reason: 'id "' + id + '" already used by ' + prior.file + ' for a different sky ("' + prior.subject + '") — give each WebGL scene a UNIQUE id (e.g. scene-<page>); kept the first, this page reuses its HDRI' });
        }
        continue;
      }
      const resWant = attrOf(a.full, 'data-hdri-res') || '2k';
      const target = path.join(dir, 'assets', 'hdri', id + '.hdr');
      let matched = null, resolved = null, err = null;
      try {
        matched = await matchHDRI(a.subject, shared);
        if (matched) resolved = await resolveHdriUrl(matched.slug, resWant, shared);
        if (matched && resolved) { fs.mkdirSync(path.dirname(target), { recursive: true }); await downloadBinary(resolved.url, target); }
      } catch (e) { err = String((e && e.message) || e); }
      if (!matched) { out.push({ file, ok: false, subject: a.subject, reason: shared._hdriCatalogError ? 'Poly Haven API unreachable (' + shared._hdriCatalogError + ') — procedural fallback stands' : 'no HDRI match' }); continue; } // honest reason: API-down ≠ genuine no-match (review 2026-07-04)
      if (!resolved) { out.push({ file, ok: false, subject: a.subject, slug: matched.slug, reason: 'no web-res .hdr' }); continue; }
      if (err) { out.push({ file, ok: false, subject: a.subject, slug: matched.slug, reason: 'download failed: ' + err }); continue; }
      // stamp (additive attrs right after the tag name — never touches the inner script)
      const stamped = a.full.replace(/^(<[a-z][a-z0-9]*)/i, '$1 data-hdri-done data-hdri-src="' + matched.slug + '|' + resolved.res + '"');
      html = html.split(a.full).join(stamped);
      changed = true;
      seenIds.set(id, { file, subject: a.subject, slug: matched.slug, res: resolved.res }); // remember this id so a later page reusing it is detected, not silently overwritten
      out.push({ file, ok: true, subject: a.subject, id, rel: 'assets/hdri/' + id + '.hdr', slug: matched.slug, res: resolved.res, bytes: resolved.bytes, usedQuery: matched.usedQuery, simplified: matched.simplified });
    }
    if (changed) { try { fs.writeFileSync(abs, html); } catch {} }
  }
  return out;
}

module.exports = { fetchHdriCatalog, scoreHDRI, matchHDRI, resolveHdriUrl, downloadBinary, fulfillHDRIs, ANCHOR_RE };

// CLI (foreground; process.exit per the Node-harness-orphans memory):
//   node assetsource.cjs "clear blue mountain sky"     → print the top match + a 2k .hdr URL
//   node assetsource.cjs --fulfill <project-dir>        → fill every data-hdri anchor in that project
if (require.main === module) {
  const args = process.argv.slice(2);
  (async () => {
    try {
      if (args[0] === '--fulfill') { const r = await fulfillHDRIs(args[1] || process.cwd(), {}); console.log(JSON.stringify(r, null, 2)); }
      else { const subj = args.join(' ') || 'clear blue mountain sky at dawn'; const mt = await matchHDRI(subj, {}); console.log('subject:', subj, '\nmatch:', mt); if (mt) console.log('url:', await resolveHdriUrl(mt.slug, '2k', {})); }
    } catch (e) { console.error('error:', (e && e.message) || e); }
    process.exit(0);
  })();
}
