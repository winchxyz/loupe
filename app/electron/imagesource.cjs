/* deZign — host-side relevant-image source (Tier 2 fallback for "smart imagery").
 * Source-agnostic: given a content description, search a stock provider and download a RELEVANT photo.
 * Adapters: unsplash + pexels (free key, beautiful + clean license) · openverse (keyless, mediocre, last resort).
 * The isolated builder agent can't call APIs — it only emits <img data-gen="description">; THIS runs host-side
 * (main process, post-turn, like verify) to fulfil those into real local assets.
 */
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
// AUDIT-2 F26: spawnImageCLI joins the shared kill/registry class. bridges.cjs imports only node builtins (acyclic —
// imagesource→bridges is a one-way chain; providers→imagesource→bridges stays a chain, no cycle).
const { killTree, registerChild, unregisterChild, winQuoteArgv } = require('./bridges.cjs');
const { childEnv } = require('./childenv.cjs'); // AUDIT-2 F33: image-gen CLI must not inherit ANTHROPIC_API_KEY / CLAUDE*

// AUDIT-2 F29: a mid-body socket close (the server drops the connection AFTER headers) fires 'aborted'/'error' on the
// IncomingMessage but NOT 'end' — without these listeners the read promise pends FOREVER (the global uncaughtException
// then silently swallows it). Attach to EVERY raw https response so a premature close rejects instead of hanging.
function attachHttpsGuards(res, reject) {
  res.on('error', reject);
  res.on('aborted', () => reject(new Error('response aborted (connection closed mid-body)')));
}
function getJSON(url, headers = {}, opts = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'deZign/1.0', Accept: 'application/json', ...headers }, timeout: 20000 }, (res) => {
      if (res.statusCode >= 300) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      attachHttpsGuards(res, reject);
      let b = ''; res.on('data', (d) => (b += d)); res.on('end', () => { try { resolve(JSON.parse(b)); } catch (e) { reject(e); } });
    }).on('error', reject).on('timeout', function () { this.destroy(new Error('timeout')); });
    if (opts.totalTimeoutMs) { const dl = setTimeout(() => { try { req.destroy(new Error('timeout (' + Math.round(opts.totalTimeoutMs / 1000) + 's deadline)')); } catch {} }, opts.totalTimeoutMs); if (dl.unref) dl.unref(); req.on('close', () => clearTimeout(dl)); }
    if (opts.signal) { const onAbort = () => { try { req.destroy(new Error('aborted')); } catch {} }; if (opts.signal.aborted) onAbort(); else opts.signal.addEventListener('abort', onAbort, { once: true }); }
  });
}

function postJSON(url, body, headers = {}, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(body);
    const req = https.request({ hostname: u.hostname, path: u.pathname + u.search, method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data), 'User-Agent': 'deZign/1.0', ...headers }, timeout: opts.idleTimeoutMs || opts.totalTimeoutMs || 120000 }, (res) => {
      attachHttpsGuards(res, reject); // F29: a mid-body close now rejects (the try/catch at the call site never fired because the promise never settled)
      let b = ''; res.on('data', (d) => (b += d));
      res.on('end', () => { try { const j = JSON.parse(b); if (res.statusCode >= 300) reject(new Error('HTTP ' + res.statusCode + ' ' + ((j.error && j.error.message) || '').slice(0, 120))); else resolve(j); } catch (e) { reject(new Error('HTTP ' + res.statusCode + ' (bad json)')); } });
    });
    req.on('error', reject); req.on('timeout', () => req.destroy(new Error('timeout')));
    // AUDIT 2026-07-07: the socket-idle `timeout` FALSE-FIRES on a strong reasoning judge that "thinks" >120s before the
    // first byte. An opt-in TOTAL wall-clock deadline (the judge passes 240s) bounds the request without killing a
    // legitimately-slow-to-first-token model early; an optional AbortSignal lets Stop cancel an in-flight judge. Image-gen
    // passes neither, so its 120s idle behaviour is unchanged.
    let deadline = null;
    if (opts.totalTimeoutMs) deadline = setTimeout(() => { try { req.destroy(new Error('timeout (' + Math.round(opts.totalTimeoutMs / 1000) + 's deadline)')); } catch {} }, opts.totalTimeoutMs);
    if (opts.signal) { const onAbort = () => { try { req.destroy(new Error('aborted')); } catch {} }; if (opts.signal.aborted) onAbort(); else opts.signal.addEventListener('abort', onAbort, { once: true }); }
    req.on('close', () => { if (deadline) clearTimeout(deadline); });
    req.write(data); req.end();
  });
}

// ── ASPECT-RATIO wiring (§3, pure — smoke-unit-tested). The <img data-ar="W:H"> intent maps per provider: OpenAI
// gpt-image-1 takes a fixed ENUM (arbitrary WxH errors); OpenRouter takes an aspect_ratio snapped to its supported
// set; xAI grok-2-image has NO size param → the host crops the fixed ~4:3 output to the target ratio after download.
const OR_RATIOS = ['1:1', '3:2', '2:3', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9', '21:9'];
function parseAspect(ar) {
  const mm = String(ar || '').match(/^\s*(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)\s*$/i);
  if (!mm) return 0;
  const w = parseFloat(mm[1]), h = parseFloat(mm[2]);
  return (w > 0 && h > 0) ? w / h : 0;
}
function snapRatio(r) {
  let best = OR_RATIOS[0], bd = Infinity;
  for (const s of OR_RATIOS) { const a = s.split(':').map(Number); const d = Math.abs((a[0] / a[1]) - r); if (d < bd) { bd = d; best = s; } }
  return best;
}
// enum ONLY for OpenAI; aspect_ratio for OpenRouter; cropTo (host-side) for xAI. No aspect → OpenAI's legacy default.
function aspectParams(provider, aspect) {
  const r = parseAspect(aspect);
  if (provider === 'openai') return { size: !r ? '1536x1024' : (r > 1.2 ? '1536x1024' : (r < 0.83 ? '1024x1536' : '1024x1024')) };
  if (provider === 'openrouter') return r ? { aspect_ratio: snapRatio(r) } : {};
  if (provider === 'xai') return r ? { cropTo: aspect } : {};
  return {};
}
// crop b64 (JPEG/PNG) to the target ratio (cover, centred). Degrades to the uncropped image if the ratio is unset,
// already matches, or the image can't be decoded — never throws (a crop failure must not drop a real image).
// AUDIT-2 F10: was require('sharp'), which resolves NOWHERE (not a dep, not in node_modules) → the crop was a
// guaranteed no-op in dev AND packaged. Use Electron's built-in nativeImage (zero new deps, works packaged; this
// module runs in the main process). Format is preserved via a magic-byte sniff so a JPEG stays a JPEG (no PNG bloat).
async function cropToAspect(b64, aspect) {
  const r = parseAspect(aspect); if (!r || !b64) return b64;
  try {
    const { nativeImage } = require('electron');
    const buf = Buffer.from(b64, 'base64');
    const img = nativeImage.createFromBuffer(buf);
    if (img.isEmpty()) return b64;
    const { width: W, height: H } = img.getSize(); if (!W || !H) return b64;
    const cur = W / H; if (Math.abs(cur - r) < 0.02) return b64;
    let cw, ch;
    if (cur > r) { ch = H; cw = Math.round(H * r); } else { cw = W; ch = Math.round(W / r); }
    const left = Math.max(0, Math.round((W - cw) / 2)), top = Math.max(0, Math.round((H - ch) / 2));
    const cropped = img.crop({ x: left, y: top, width: Math.min(cw, W), height: Math.min(ch, H) });
    if (cropped.isEmpty()) return b64;
    const isJpeg = buf.length > 2 && buf[0] === 0xFF && buf[1] === 0xD8; // sniff input format so a JPEG stays a JPEG
    const outBuf = isJpeg ? cropped.toJPEG(90) : cropped.toPNG();
    return outBuf.toString('base64');
  } catch { return b64; }
}

// ── SUBSCRIPTION-CLI generation (§9, Option B universal). The HOST spawns the chosen agent CLI headless into a scratch
// dir per image, instructs it (strategy B — the agent has the bytes) to save the raster to an ABSOLUTE path, then
// validates + reads it. Grok = PROVEN LIVE (SuperGrok sub, ~34s, saves to the requested path AND
// ~/.grok/sessions/<enc(cwd)>/<sid>/images/N.jpg). Codex = built from verified docs (needs a paid ChatGPT plan via
// OAuth + --dangerously-bypass-approvals-and-sandbox for network); LIVE-VERIFY PENDING a credential. ──

// HONEST-FAILURE guard (non-negotiable): a CLI lacking the entitlement may emit a fabricated placeholder (the spike saw
// Codex draw a PIL image) or nothing — the host must reject any non-raster / suspiciously-tiny / undecodable result and
// fall back to stock, NEVER ship a fake. Checks magic bytes + a real-image minimum size. (Pure — smoke-unit-tested.)
function isRaster(buf) {
  if (!buf || buf.length < 1024) return false; // a real generated image is KBs+; a tiny file is a placeholder/error/SVG
  const b = buf;
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return true; // PNG
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return true; // JPEG
  if (b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38) return true; // GIF8
  if (b.length > 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return true; // RIFF....WEBP
  return false;
}

// spawn one image-gen CLI turn; resolve true iff it exited 0 within the timeout (we read the file, not the transcript)
// AUDIT-2 F26: hardened to the CLI-spawn family standard — timeout kill routes through killTree (win32 shell:true spawns
// `cmd.exe /c <bin>`; bare child.kill() reaps only cmd.exe and ORPHANS the real image-gen worker), the child registers in
// activeChildren so chat:stop/flow:stop's stopAll + the before-quit reaper (F27) can reach it, argv is winQuoteArgv'd on
// the win32 shell path (a scratch dir with spaces/metachars would otherwise shatter codex's `-C <scratch>` arg), and a
// stdin 'error' handler swallows the async EPIPE so a fast-fail closed pipe can't crash the Electron main.
function spawnImageCLI(bin, args, { cwd, shell, stdin, timeout = 180000 } = {}) {
  return new Promise((resolve) => {
    const useShell = !!shell;
    const argv = (useShell && process.platform === 'win32') ? winQuoteArgv(args) : args; // A6/F26: DEP0190 passes argv unquoted into cmd.exe
    let child;
    try { child = spawn(bin, argv, { cwd, shell: useShell, stdio: ['pipe', 'ignore', 'ignore'], windowsHide: true, env: childEnv() }); } // F33: scrubbed env
    catch { return resolve(false); }
    registerChild(child); // F26: reachable by stopAll + the before-quit reaper
    let done = false;
    const finish = (v) => { if (done) return; done = true; clearTimeout(t); unregisterChild(child); resolve(v); };
    const t = setTimeout(() => { try { killTree(child); } catch {} finish(false); }, timeout); // F26: kill the whole tree, not just cmd.exe
    child.on('error', () => finish(false));
    child.on('close', (code) => finish(code === 0));
    try { child.stdin.on('error', () => {}); } catch {} // F26: closed stdin → async EPIPE must not become an uncaught exception
    try { if (stdin != null) child.stdin.write(String(stdin)); child.stdin.end(); } catch {}
  });
}

// strategy-A fallback for Grok: harvest the newest image written to ~/.grok/sessions/<enc(cwd)>/<sid>/images/ this run
function newestGrokImage(cwd, since) {
  try {
    const base = path.join(os.homedir(), '.grok', 'sessions', encodeURIComponent(cwd));
    if (!fs.existsSync(base)) return null;
    let best = null, bestT = since - 1;
    for (const sid of fs.readdirSync(base)) {
      const imgs = path.join(base, sid, 'images');
      if (!fs.existsSync(imgs)) continue;
      for (const f of fs.readdirSync(imgs)) {
        if (!/\.(jpe?g|png|webp|gif)$/i.test(f)) continue;
        const fp = path.join(imgs, f); let st; try { st = fs.statSync(fp); } catch { continue; }
        if (st.mtimeMs > bestT) { bestT = st.mtimeMs; best = fp; }
      }
    }
    return best;
  } catch { return null; }
}

// generate ONE image via a subscription CLI → { b64, provider } or null (honest-failure → caller falls back to stock).
async function generateImageViaCLI(prompt, opts = {}) {
  const cli = String(opts.cli || '').replace(/^cli:/, '');
  if (cli !== 'grok' && cli !== 'codex') return null;
  const arNote = opts.aspect ? (' The image MUST be ' + opts.aspect + ' aspect ratio.') : '';
  let scratch = '';
  try {
    scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'dz-genimg-'));
    const outAbs = path.join(scratch, 'out.png');
    const outFwd = outAbs.replace(/\\/g, '/');
    const instr = 'Generate ONE image using your built-in image-generation tool and save it as a PNG at EXACTLY this absolute path: ' + outFwd + '\n\nImage to generate: ' + String(prompt).slice(0, 3200) + arNote + '\n\nUse ONLY your image-generation tool. Do NOT write code, do NOT create any other file, and do NOT draw or fake a placeholder — if you cannot generate a real image, do nothing. Output nothing else.';
    const tStart = Date.now();
    if (cli === 'grok') {
      const taskFile = path.join(scratch, '.dz-imgtask.md');
      fs.writeFileSync(taskFile, instr);
      await spawnImageCLI('grok', ['--prompt-file', taskFile, '--output-format', 'streaming-json', '--always-approve', '--cwd', scratch], { cwd: scratch, shell: false });
      if (!fs.existsSync(outAbs)) { const h = newestGrokImage(scratch, tStart); if (h) { try { fs.copyFileSync(h, outAbs); } catch {} } } // strategy-A fallback
    } else { // codex — verified-docs path (needs paid ChatGPT OAuth + network-bypass); prompt via a CLOSING stdin (exec hangs on an open pipe)
      await spawnImageCLI('codex', ['exec', '--dangerously-bypass-approvals-and-sandbox', '--skip-git-repo-check', '-C', scratch, '--json'], { cwd: scratch, shell: process.platform === 'win32', stdin: instr });
    }
    if (fs.existsSync(outAbs)) {
      const buf = fs.readFileSync(outAbs);
      if (isRaster(buf)) {
        let b64 = buf.toString('base64');
        if (opts.aspect) b64 = await cropToAspect(b64, opts.aspect); // grok honours AR from the prompt; codex may not → host-crop is the safety net
        return { b64, provider: 'cli:' + cli };
      }
    }
    return null; // honest-failure: no real raster produced
  } catch { return null; }
  finally { try { if (scratch) fs.rmSync(scratch, { recursive: true, force: true }); } catch {} }
}

// ── Tier-1 GENERATIVE imagery (BYOK): the agent emits <img data-gen-ai="detailed visual prompt"> and the HOST
// generates the image (agent never sees the key — the smart-imagery capability pattern). Providers: OpenAI
// gpt-image-1, OR the OpenRouter Unified Image API (verified 2026-07-02: POST /api/v1/images, 30+ models, base64
// out — see docs/MULTI-PROVIDER-BRIEF.md). OpenAI preferred when both keys exist. ~$0.02-0.2/image either way.
// opts.aspect ("W:H") threads the <img data-ar> intent through per-provider (see aspectParams / cropToAspect above).
async function generateImage(prompt, opts = {}) {
  const p = String(prompt).slice(0, 3800);
  // An EXPLICITLY chosen generation model (Settings → "Generation model") wins over the default order — the user
  // picked WHO paints. Model refs are provider-prefixed: "openai:gpt-image-1" · "xai:grok-2-image" (Grok Imagine, via
  // the xAI key) · "openrouter:<id>". A BARE id (no ":") is treated as OpenRouter for backward-compat with older saves.
  const m = String(opts.imageModel || '');
  // Subscription-CLI backend, EXPLICIT pick "cli:grok" / "cli:codex" (Settings → Generation model): the host spawns the
  // CLI per image (Option B, universal — works for any build engine). Honest-failure returns null → caller → stock.
  if (m.startsWith('cli:')) return generateImageViaCLI(p, { cli: m.slice(4), aspect: opts.aspect });
  // xAI (Grok Imagine) — direct via the xAI key (OpenAI-compatible images endpoint), no OpenRouter needed
  if (m.startsWith('xai:') && opts.xaiKey) {
    const model = m.slice(4) || 'grok-2-image';
    const d = await postJSON('https://api.x.ai/v1/images/generations', { model, prompt: p, n: 1, response_format: 'b64_json' }, { Authorization: 'Bearer ' + opts.xaiKey });
    const item = d.data && d.data[0];
    if (item && item.b64_json) return { b64: await cropToAspect(item.b64_json, opts.aspect), provider: 'xai:' + model, revised: item.revised_prompt || '' };
    if (item && item.url) return { url: item.url, provider: 'xai:' + model, revised: item.revised_prompt || '' };
    return null;
  }
  // OpenAI (gpt-image-1) — explicit pick
  if (m.startsWith('openai:') && opts.openaiKey) {
    const model = m.slice(7) || 'gpt-image-1';
    const d = await postJSON('https://api.openai.com/v1/images/generations', { model, prompt: p, size: aspectParams('openai', opts.aspect).size, n: 1 }, { Authorization: 'Bearer ' + opts.openaiKey });
    const item = d.data && d.data[0];
    if (item && item.b64_json) return { b64: item.b64_json, provider: 'openai:' + model };
    if (item && item.url) return { url: item.url, provider: 'openai:' + model };
    return null;
  }
  // OpenRouter — explicit "openrouter:<id>" OR a bare legacy id
  const orModel = m.startsWith('openrouter:') ? m.slice(11) : (m && !m.includes(':') ? m : '');
  if (orModel && opts.openrouterKey) {
    const d = await postJSON('https://openrouter.ai/api/v1/images', { model: orModel, prompt: p, n: 1, ...aspectParams('openrouter', opts.aspect) }, { Authorization: 'Bearer ' + opts.openrouterKey });
    const item = (d.data && d.data[0]) || (d.images && d.images[0]);
    if (item && item.b64_json) return { b64: item.b64_json, provider: 'openrouter:' + orModel };
    if (item && item.url) return { url: item.url, provider: 'openrouter:' + orModel };
    return null;
  }
  // AUTO (no explicit model) — FREE-FIRST: a connected subscription CLI (opts.genCli, host-detected) is preferred over a
  // paid API, matching the app's "drive your own subscription" thesis. Only fires when the caller passes genCli.
  if (opts.genCli === 'grok' || opts.genCli === 'codex') return generateImageViaCLI(p, { cli: opts.genCli, aspect: opts.aspect });
  // No explicit model (or its key missing) → default order: OpenAI first, then OpenRouter default, then xAI.
  if (opts.openaiKey) {
    const d = await postJSON('https://api.openai.com/v1/images/generations', { model: 'gpt-image-1', prompt: p, size: aspectParams('openai', opts.aspect).size, n: 1 }, { Authorization: 'Bearer ' + opts.openaiKey });
    const item = d.data && d.data[0];
    if (item && item.b64_json) return { b64: item.b64_json, provider: 'openai' };
    if (item && item.url) return { url: item.url, provider: 'openai' };
    return null;
  }
  if (opts.openrouterKey) {
    const d = await postJSON('https://openrouter.ai/api/v1/images', { model: 'google/nano-banana-2', prompt: p, n: 1, ...aspectParams('openrouter', opts.aspect) }, { Authorization: 'Bearer ' + opts.openrouterKey });
    const item = (d.data && d.data[0]) || (d.images && d.images[0]);
    if (item && item.b64_json) return { b64: item.b64_json, provider: 'openrouter' };
    if (item && item.url) return { url: item.url, provider: 'openrouter' };
    return null;
  }
  if (opts.xaiKey) {
    const d = await postJSON('https://api.x.ai/v1/images/generations', { model: 'grok-2-image', prompt: p, n: 1, response_format: 'b64_json' }, { Authorization: 'Bearer ' + opts.xaiKey });
    const item = d.data && d.data[0];
    if (item && item.b64_json) return { b64: await cropToAspect(item.b64_json, opts.aspect), provider: 'xai', revised: item.revised_prompt || '' };
    if (item && item.url) return { url: item.url, provider: 'xai', revised: item.revised_prompt || '' };
    return null;
  }
  return null;
}

// follow one redirect; write binary to file.
// S3 (audit 2026-07-09): hard byte cap — Content-Length reject up front + a stream counter (a lying/absent length
// can no longer fill the disk from a hostile/broken source).
const MAX_IMAGE_BYTES = 25 * 1024 * 1024;
function download(url, filepath, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'deZign/1.0' }, timeout: 25000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 3) { res.resume(); return resolve(download(res.headers.location, filepath, redirects + 1)); }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      const ct = res.headers['content-type'] || '';
      if (!/image\//.test(ct)) { res.resume(); return reject(new Error('not an image: ' + ct)); }
      const len = parseInt(res.headers['content-length'] || '0', 10);
      if (len > MAX_IMAGE_BYTES) { res.resume(); return reject(new Error('image too large: ' + len + ' bytes')); }
      const out = fs.createWriteStream(filepath);
      let got = 0;
      // AUDIT-2 F29: res.pipe(out) does NOT forward SOURCE errors — a mid-stream connection drop fires res 'error'/'aborted'
      // but never out 'finish', so the promise hangs AND a half-written image is left. Destroy `out`, unlink the partial, reject.
      const failPartial = (err) => { try { res.unpipe(out); } catch {} try { out.destroy(); } catch {} try { fs.unlinkSync(filepath); } catch {} reject(err); };
      res.on('error', failPartial);
      res.on('aborted', () => failPartial(new Error('download aborted (connection closed mid-stream)')));
      res.on('data', (d) => { got += d.length; if (got > MAX_IMAGE_BYTES) { failPartial(new Error('image exceeded the ' + MAX_IMAGE_BYTES + '-byte cap mid-stream')); } });
      res.pipe(out);
      out.on('finish', () => out.close(() => resolve({ filepath, bytes: fs.statSync(filepath).size, contentType: ct })));
      out.on('error', reject);
    }).on('error', reject).on('timeout', function () { this.destroy(new Error('timeout')); });
  });
}

// ══ v2 RELEVANCE CORE (pure, unit-tested by the smoke) ══════════════════════════════════════════════
// v1 failure the owner hit (MRDN4): "coffee cherries drying on raised beds" had NO good stock match, and
// pick-best-of-N was OBLIGED to return the least-bad frame → wet asphalt with leaves on a $38 product card.
// v2 rules: (a) a candidate must CLEAR A RELEVANCE THRESHOLD or it is rejected; (b) when a query yields no
// valid candidate anywhere, the query is SIMPLIFIED down a deterministic ladder (a plain "coffee cherries"
// photo beats a junk photo of an exotic query); (c) photos are chosen as a tonally COHERENT SET, not
// best-of-N individually (kills the dark-macro/bright-green/cream/asphalt patchwork row).
const STOP_WORDS = new Set(['the', 'a', 'an', 'of', 'in', 'on', 'at', 'with', 'and', 'or', 'for', 'to', 'from', 'by', 'over', 'under', 'into', 'near']);
const PHOTO_MODIFIERS = new Set(['closeup', 'close-up', 'macro', 'warm', 'cool', 'soft', 'golden', 'hour', 'light', 'lighting', 'moody', 'cozy', 'aerial', 'overhead', 'view', 'shot', 'photo', 'photography', 'style', 'tone', 'natural', 'morning', 'evening', 'sunlit', 'dramatic', 'minimal', 'background', 'texture', 'fresh', 'beautiful', 'professional']);
const contentWords = (q) => String(q || '').toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w));
// GRACEFUL-FALLBACK query for a FAILED generation: the whole artistic paragraph is a terrible stock search query and
// almost always misses. Prefer the tag's alt="" subject (why §2a asks the agent for one); else the first ~5 content
// words of the prompt. (Pure — smoke-unit-tested.)
function fallbackQuery(tag, prompt) {
  const alt = (String(tag || '').match(/\balt=("|')([\s\S]*?)\1/i) || [])[2];
  if (alt && alt.trim()) return alt.trim().slice(0, 120);
  const cw = contentWords(prompt).slice(0, 5).join(' ');
  return cw || String(prompt || '').trim().slice(0, 80);
}

// deterministic simplification ladder: full → before-comma (agents append style tails there) → modifiers
// stripped → first 3 content words → first 2. Deduped, in order of decreasing specificity.
function simplifyLadder(query) {
  const q0 = String(query || '').trim();
  const steps = [q0];
  const beforeComma = q0.split(',')[0].trim();
  steps.push(beforeComma);
  const content = contentWords(beforeComma).filter((w) => !PHOTO_MODIFIERS.has(w));
  steps.push(content.join(' '));
  steps.push(content.slice(0, 3).join(' '));
  steps.push(content.slice(0, 2).join(' '));
  return [...new Set(steps.filter(Boolean))];
}

// ── v3 DOMAIN ANCHORING (the MRDN5/"eyewear vs camera lens" class): keyword search is blind to word SENSES, so the
// SITE's domain is injected into every query. The domain is derived deterministically from the project's own
// index.html (title + h1 + meta description) — works for any site, no agent cooperation needed. ──
const DOMAIN_STOP = new Set(['welcome', 'home', 'official', 'site', 'website', 'page', 'best', 'premium', 'quality', 'shop', 'store', 'online', 'independent', 'studio', 'modern', 'local']);
function siteDomain(dir) {
  try {
    const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
    const title = (html.match(/<title[^>]*>([^<]*)</i) || [])[1] || '';
    const h1 = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '').replace(/<[^>]+>/g, ' ');
    const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)/i) || [])[1] || '';
    // The BRAND lives in the title HEAD ("Nord Frame — independent optician…") and must NOT become an anchor word —
    // MRDN7 incident: the anchor injected "nord frame" into every stock query. The TOPIC lives in the title tail +
    // meta description → count word frequency THERE; brand-only words never occur there and drop out naturally
    // (while a topical brand like "…Coffee Roasters" still surfaces via the tail/description mentions of coffee).
    const sep = title.split(/\s+[—–|:-]\s+/);
    const tail = sep.length > 1 ? sep.slice(1).join(' ') : '';
    let source = (tail + ' ' + desc).trim();
    if (!source) source = (title + ' ' + h1).trim(); // no tail/description → better than nothing
    const keep = (w) => !PHOTO_MODIFIERS.has(w) && !DOMAIN_STOP.has(w);
    const descWords = contentWords(desc).filter(keep);
    const freq = new Map();
    for (const w of contentWords(source)) { if (keep(w)) freq.set(w, (freq.get(w) || 0) + 1); }
    // tie-break: the description is business PROSE ("an optician and eyewear studio in Oslo"), the title tail is often
    // a stylized TAGLINE ("Eyewear, considered.") — at equal frequency, description words outrank tagline words
    // (MRDN7: "considered" beat "optician" on first-occurrence order).
    const rank = (w) => (freq.get(w) || 0) * 100 + (descWords.includes(w) ? 50 - Math.min(49, descWords.indexOf(w)) : 0);
    return [...freq.keys()].sort((a, b) => rank(b) - rank(a)).slice(0, 6).join(' ');
  } catch { return ''; }
}
function domainWordsOf(domain) { return contentWords(domain).filter((w) => !PHOTO_MODIFIERS.has(w) && !DOMAIN_STOP.has(w)).slice(0, 2); }
// the ladder, domain-anchored: every rung missing the domain words gets an ANCHORED variant tried FIRST
// ("lens close-up" on an eyewear site → "lens close-up eyewear" before the bare, ambiguous rung)
function anchorLadder(query, domain) {
  const base = simplifyLadder(query);
  const dw = domainWordsOf(domain || '');
  if (!dw.length) return base;
  const out = [];
  for (const q of base) {
    const t = q.toLowerCase();
    const missing = dw.filter((w) => !t.includes(w));
    if (missing.length) out.push(q + ' ' + missing.join(' '));
    // a SHORT rung ("panto shaped", "pale grey horn") is ambiguous fragments — with an anchor available, never try
    // it bare (MRDN7: bare fragments won and matched off-domain photos). Fuller rungs keep their bare variant.
    if (!missing.length || contentWords(q).length > 3) out.push(q);
  }
  out.push(dw.join(' ')); // emergency floor: the bare anchor itself — generic but always on-topic
  return [...new Set(out)];
}

// distinct query-content-words found in a candidate's title/alt/tags text
function scoreText(text, query) {
  const t = String(text || '').toLowerCase();
  return contentWords(query).reduce((n, w) => n + (t.includes(w) ? 1 : 0), 0);
}
// validity threshold: long queries need ≥2 word hits, short ones ≥1 — AND the candidate must mention one of
// the first two content words (the subject head), so "raised beds" alone can't smuggle in a garden photo.
function validCandidates(cands, query) {
  const words = contentWords(query);
  const need = words.length >= 4 ? 2 : 1;
  const heads = words.slice(0, 2);
  return cands
    .map((c) => ({ ...c, score: scoreText(c.text, query) }))
    .filter((c) => c.score >= need && heads.some((h) => String(c.text || '').toLowerCase().includes(h)))
    .sort((a, b) => b.score - a.score);
}

// ── tone math (avg-color coherence) ──
function toneOf(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim()); if (!m) return null;
  const n = parseInt(m[1], 16), r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  let h = 0; const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d) { if (mx === r) h = ((g - b) / d) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h = (h * 60 + 360) % 360; }
  return { h, s, l: l * 100 };
}
// perceptual-ish distance: lightness gap + hue gap (hue only matters when both are saturated)
function toneDist(a, b) {
  if (!a || !b) return 25; // unknown colour = neutral penalty
  const dl = Math.abs(a.l - b.l);
  const dh = Math.min(Math.abs(a.h - b.h), 360 - Math.abs(a.h - b.h)) / 180 * 100;
  return dl + 0.8 * dh * Math.min(a.s, b.s);
}
// choose one candidate per pool so the SET sits in one tonal family: start from top relevance, find the
// medoid tone, then per slot re-pick the tonally-closest candidate among near-top relevance (score ≥ top-1),
// never reusing a URL. Two refinement passes. Pure → unit-testable.
function pickCoherentSet(pools) {
  // initial assignment enforces URL uniqueness OUTRIGHT (a set with the same photo twice is worse than a
  // slightly-less-relevant pick); refinement below also never switches INTO an already-used URL
  const taken = new Set();
  const picks = pools.map((p) => {
    if (!p || !p.length) return -1;
    let j = p.findIndex((c) => !taken.has(c.url));
    if (j < 0) j = 0; // pool exhausted → a duplicate beats an empty slot
    taken.add(p[j].url);
    return j;
  });
  const tone = (p, i) => (i >= 0 && p[i] && p[i].color ? toneOf(p[i].color) : null);
  for (let iter = 0; iter < 2; iter++) {
    const tones = pools.map((p, i) => tone(p, picks[i])).filter(Boolean);
    if (tones.length < 2) break;
    let anchor = tones[0], bestSum = Infinity; // medoid
    for (const t of tones) { const sum = tones.reduce((s, o) => s + toneDist(t, o), 0); if (sum < bestSum) { bestSum = sum; anchor = t; } }
    pools.forEach((p, i) => {
      if (picks[i] < 0) return;
      const top = p[0].score;
      const used = new Set(pools.map((q, k) => (k !== i && picks[k] >= 0 ? q[picks[k]].url : null)).filter(Boolean));
      let bi = picks[i], bd = toneDist(tone(p, picks[i]), anchor);
      p.forEach((c, j) => {
        if (c.score < top - 1 || used.has(c.url)) return;
        const d = c.color ? toneDist(toneOf(c.color), anchor) : 25;
        if (d < bd) { bd = d; bi = j; }
      });
      picks[i] = bi;
    });
  }
  return picks;
}

// ── adapters: query -> candidate LIST [{url,title,text,color,provider,license,attribution}] ──
const adapters = {
  async unsplash(query, key) {
    const u = 'https://api.unsplash.com/search/photos?per_page=12&orientation=landscape&content_filter=high&query=' + encodeURIComponent(query);
    const d = await getJSON(u, { Authorization: 'Client-ID ' + key });
    return (d.results || []).map((r) => ({
      url: r.urls.regular, title: r.description || r.alt_description || query,
      text: [r.description || '', r.alt_description || ''].concat((r.tags || []).map((t) => t.title || '')).join(' '),
      color: r.color || null, provider: 'unsplash', license: 'Unsplash License (free commercial, no attribution required)', attribution: r.user && r.user.name,
    }));
  },
  async pexels(query, key) {
    const u = 'https://api.pexels.com/v1/search?per_page=12&orientation=landscape&query=' + encodeURIComponent(query);
    const d = await getJSON(u, { Authorization: key });
    return (d.photos || []).map((r) => ({ url: r.src.large2x || r.src.large, title: r.alt || query, text: r.alt || '', color: r.avg_color || null, provider: 'pexels', license: 'Pexels License (free commercial)', attribution: r.photographer }));
  },
  async openverse(query) {
    // P7 (audit 2026-07-09, owner-resolved: CC0 / PUBLIC DOMAIN ONLY): the old license_type=commercial,modification
    // ADMITTED CC-BY / CC-BY-SA, whose legally-required visible credit the write path dropped — a stranger could
    // publish a license-violating site the app called done. license=cc0,pdm at the API + a belt filter on the
    // returned license field, so every shipped photo carries ZERO attribution obligation.
    const u = 'https://api.openverse.org/v1/images/?page_size=12&mature=false&license=cc0,pdm&q=' + encodeURIComponent(query);
    const d = await getJSON(u);
    return (d.results || []).filter((x) => x.url && /^https/.test(x.url) && /^(cc0|pdm)$/i.test(x.license || '')).map((r) => ({ url: r.url, title: r.title || query, text: [r.title || ''].concat(r.tags ? r.tags.map((t) => t.name || '') : []).join(' '), color: null, provider: 'openverse', license: r.license + ' ' + (r.license_version || ''), attribution: r.creator }));
  },
};

function providerOrder(opts = {}) {
  const order = [];
  if (opts.unsplashKey) order.push(['unsplash', opts.unsplashKey]);
  if (opts.pexelsKey) order.push(['pexels', opts.pexelsKey]);
  order.push(['openverse', null]);
  return order;
}

// candidate POOL for one subject: walk the simplification ladder; at each rung try every provider; first
// rung+provider yielding VALID (threshold-clearing) candidates wins. Precise-query-elsewhere beats vague-query-here.
// opts._runCache (per fulfill run): rung→pool cache — a swarm emitting 10 near-identical subjects ("X bag flat-lay…")
// converges to the same simplified rungs; without the cache that BURNED the Unsplash hourly limit (50/h demo) and the
// tail of the run fell back to weak Openverse picks (the MRDN5 "strange images" incident, 2026-07-02).
// opts._exhausted (per run): providers that returned 403/429 are skipped for the REST of the run instead of erroring per query.
async function searchCandidates(query, opts = {}) {
  const cache = opts._runCache;
  const exhausted = opts._exhausted;
  for (const q of anchorLadder(query, opts.domain)) {
    for (const [name, key] of providerOrder(opts)) {
      if (exhausted && exhausted.has(name)) continue;
      const ck = name + '::' + q;
      try {
        let raw;
        if (cache && cache.has(ck)) raw = cache.get(ck);
        else { raw = await adapters[name](q, key); if (cache) cache.set(ck, raw); }
        const cands = validCandidates(raw, q);
        if (cands.length) return { query: q, simplified: q !== String(query).trim(), provider: name, candidates: cands.slice(0, 12) };
      } catch (e) {
        if (exhausted && /\b(403|429)\b|rate.?limit/i.test(String((e && e.message) || e))) exhausted.add(name); // hourly cap hit → stop hammering it this run
      }
    }
  }
  return null;
}

// single-hit API (CLI + img-swap tool keep working): top valid candidate across the ladder
async function searchImage(query, opts = {}) {
  const pool = await searchCandidates(query, opts);
  if (!pool) return null;
  const c = pool.candidates[0];
  return { url: c.url, title: c.title, score: c.score + '/' + contentWords(pool.query).length, license: c.license, attribution: c.attribution, provider: c.provider, usedQuery: pool.query, simplified: pool.simplified };
}

// ── v3 VISION VERIFY — the layer keyword-matching can never reach: a cheap vision model LOOKS at the picked photo and
// answers "does it really show <subject> and suit a site about <domain>?" (rejects wrong word-senses, memes, unrelated
// buildings — the Berlin-Wall-for-"Meridian House" class). Needs an OpenRouter key; silently skipped without one.
// A verifier ERROR is treated as "can't verify" (keep the pick), never as a rejection.
async function verifyImage(urlOrPath, subject, domain, opts = {}) {
  if (!opts.openrouterKey) return null;
  let url = String(urlOrPath || '');
  try {
    if (!/^https?:/i.test(url)) { const b64 = fs.readFileSync(url).toString('base64'); url = 'data:image/' + (/\.png$/i.test(urlOrPath) ? 'png' : 'jpeg') + ';base64,' + b64; }
    const d = await postJSON('https://openrouter.ai/api/v1/chat/completions', {
      model: opts.imageVerifyModel || 'google/gemini-2.5-flash',
      max_tokens: 60,
      messages: [{ role: 'user', content: [
        { type: 'text', text: 'This photo will illustrate "' + String(subject).slice(0, 160) + '" on a website about: "' + String(domain || 'the same topic').slice(0, 120) + '". REJECT only if it is OFF-TOPIC for that website (wrong sense of an ambiguous word, unrelated place/object/profession) or unusable (meme, text screenshot, watermark, collage) or it CONTRADICTS the subject. A generic but on-topic photo that does not match every detail of the subject is OK — accept it. Reply ONLY JSON: {"ok":true|false,"why":"<max 6 words>"}' },
        { type: 'image_url', image_url: { url } },
      ] }],
    }, { Authorization: 'Bearer ' + opts.openrouterKey });
    const c = d.choices && d.choices[0];
    const txt = c && c.message && (typeof c.message.content === 'string' ? c.message.content : JSON.stringify(c.message.content));
    const m = String(txt || '').match(/\{[\s\S]*?\}/);
    if (!m) return null;
    const j = JSON.parse(m[0]);
    return { ok: !!j.ok, why: String(j.why || '').slice(0, 60) };
  } catch { return null; }
}

// #5 IMAGERY MEDIUM (2026-07-05): the user's photography-vs-illustration choice is persisted per project so the
// POST-TURN fill (which runs renderer-side, without the build turn's in-memory decision) can HONOR it deterministically.
// 'illustration' => self-contained, no host raster imagery. Absence / 'photography' => fill normally (default).
const MEDIUM_FILE = '.dezign-imagery.json';
function readMedium(dir) { try { const o = JSON.parse(fs.readFileSync(path.join(dir, MEDIUM_FILE), 'utf8')); return (o && typeof o.medium === 'string') ? o.medium : null; } catch { return null; } }
function writeMedium(dir, medium) { try { if (medium) fs.writeFileSync(path.join(dir, MEDIUM_FILE), JSON.stringify({ medium })); else fs.unlinkSync(path.join(dir, MEDIUM_FILE)); return true; } catch { return false; } }

// Host-side fulfillment: scan the project's HTML for <img data-gen="subject"> placeholders, fetch a relevant
// photo for each, save under assets/, and rewrite the tag's src. Idempotent: an <img> already pointing at a
// generated asset (data-gen-done) is skipped, so re-running only fills NEW placeholders. The isolated builder
// agent emits the data-gen intent; THIS runs in the main process (it has the network + the key).
async function fulfillImages(dir, opts = {}) {
  const out = [];
  let htmlFiles = [];
  try { htmlFiles = fs.readdirSync(dir).filter((f) => /\.html?$/i.test(f)); } catch { return out; }
  // #5 ILLUSTRATION opt-out — ENFORCED HOST-SIDE (best-practice: an explicit "no photos" choice must be honored in
  // code, not left to a prompt the model may ignore — the audit proved foreign engines emit <img data-gen> regardless).
  // STRIP every unfilled host-imagery placeholder (data-gen search + data-gen-ai generative): filling would silently
  // override the user's choice (a dark-pattern-shaped behavior — NN/g "user control and freedom"), and leaving an empty
  // <img> renders a broken-image icon (MDN). Full node removal lets siblings reflow (flex/auto-flow collapse the gap).
  // The prompt directive is the SECONDARY layer; this strip is the guarantee. data-gen-done (already-filled) is left alone.
  if ((opts.medium || readMedium(dir)) === 'illustration') {
    let stripped = 0;
    const stripRe = /<img\b(?![^>]*\bdata-gen-done\b)[^>]*\bdata-gen(?:-ai)?=("|')[\s\S]*?\1[^>]*>\s*/gi;
    for (const f of htmlFiles) {
      const fp = path.join(dir, f);
      let html; try { html = fs.readFileSync(fp, 'utf8'); } catch { continue; }
      const before = html;
      html = html.replace(stripRe, () => { stripped++; return ''; });
      if (html !== before) { try { fs.writeFileSync(fp, html); } catch {} }
    }
    out.stripped = stripped; out.medium = 'illustration';
    return out; // illustration = self-contained: no host imagery fill at all
  }
  const assetsRel = 'assets';
  fs.mkdirSync(path.join(dir, assetsRel), { recursive: true });
  let n = Date.now() % 100000; // unique-ish base so re-runs don't collide
  const tagRe = /<img\b[^>]*\bdata-gen=("|')([\s\S]*?)\1[^>]*>/gi;
  // v2 pass 1 — collect EVERY pending slot across all pages first (set-coherence needs the whole set)
  const slots = [];
  for (const f of htmlFiles) {
    const fp = path.join(dir, f);
    let html; try { html = fs.readFileSync(fp, 'utf8'); } catch { continue; }
    for (const m of html.matchAll(tagRe)) {
      const tag = m[0], desc = (m[2] || '').trim();
      if (/\bdata-gen-done\b/.test(tag) || !desc) continue; // already fulfilled or empty
      slots.push({ f, tag, desc, pool: null });
    }
  }
  // GEN-ONLY FIX (2026-07-07 cold-eye): the STOCK passes below apply only to data-gen slots. A page whose imagery is
  // ALL data-gen-ai (generative) has ZERO stock slots — do NOT early-return here, or the GENERATIVE pass further down is
  // skipped entirely (owner hit this: an all-AI-imagery build produced no images, no strip, no report). Gate the stock
  // work on stock slots; the generative pass always runs afterwards (it no-ops when there are no data-gen-ai tags).
  if (slots.length) {
  // v2 pass 2 — a candidate pool per slot (threshold + simplification ladder inside; run-level cache + provider-exhaustion shared across slots)
  const runOpts = { ...opts, _runCache: new Map(), _exhausted: new Set() };
  for (const s of slots) { try { s.pool = await searchCandidates(s.desc, runOpts); } catch {} }
  // v2 pass 3 — pick a tonally COHERENT set (never the same photo twice); relevance stays within top-1 of best
  const picks = pickCoherentSet(slots.map((s) => (s.pool ? s.pool.candidates : [])));
  // v3 pass 3b — VISION VERIFY each pick (parallel, pennies each): a reject moves to the next candidate (max 6 looks
  // per slot — MRDN7: 3 looks exhausted on junky pools and shipped vetoed picks); verifier unavailable → picks stand
  // as-is. This is the semantic layer ("coffee site ⇒ coffee photos").
  let vetoed = 0;
  if (opts.openrouterKey) {
    await Promise.all(slots.map(async (s, i) => {
      if (!s.pool || picks[i] < 0) return;
      const pool = s.pool.candidates;
      let idx = picks[i];
      for (let look = 0; look < 6; look++) {
        const v = await verifyImage(pool[idx].url, s.desc, opts.domain, opts);
        if (!v) { s.verified = 'skip'; return; }             // verifier down → keep the scored pick
        if (v.ok) { s.verified = true; picks[i] = idx; return; }
        pool[idx]._vetoed = true; vetoed++;
        const next = pool.findIndex((c) => !c._vetoed);
        if (next < 0) { s.verified = false; picks[i] = idx; return; } // everything vetoed → keep last (reported unverified)
        idx = next;
      }
      s.verified = false; picks[i] = idx;
    }));
  }
  // v2 pass 4 — download + rewrite tags (grouped per file so each file is written once)
  const byFile = new Map();
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    if (!s.pool || picks[i] < 0) { out.push({ desc: s.desc, ok: false, reason: 'no valid result (all rungs)' }); continue; }
    const c = s.pool.candidates[picks[i]];
    const file = assetsRel + '/gen-' + (++n) + '.jpg';
    try { await download(c.url, path.join(dir, file)); } catch (e) { out.push({ desc: s.desc, ok: false, reason: 'download ' + e.message }); continue; }
    if (!byFile.has(s.f)) byFile.set(s.f, []);
    byFile.get(s.f).push({ tag: s.tag, file, provider: c.provider, usedQuery: s.pool.query });
    out.push({ desc: s.desc, ok: true, file, title: c.title, provider: c.provider, score: c.score + '/' + contentWords(s.pool.query).length, usedQuery: s.pool.query, simplified: s.pool.simplified, color: c.color, verified: s.verified });
  }
  for (const [f, edits] of byFile) {
    const fp = path.join(dir, f);
    let html; try { html = fs.readFileSync(fp, 'utf8'); } catch { continue; }
    for (const e of edits) {
      let newTag = /\bsrc=("|')[\s\S]*?\1/.test(e.tag) ? e.tag.replace(/\bsrc=("|')[\s\S]*?\1/, 'src="' + e.file + '"') : e.tag.replace(/<img\b/i, '<img src="' + e.file + '"');
      // data-gen-src stamps WHO picked it + WHAT query won — the audit trail that made the MRDN5 diagnosis slow to get
      newTag = newTag.replace(/<img\b/i, '<img data-gen-done data-gen-src="' + String(e.provider || '?') + ':' + String(e.usedQuery || '').replace(/"/g, '') + '"');
      html = html.replace(e.tag, newTag);
    }
    fs.writeFileSync(fp, html);
  }
  out.limited = runOpts._exhausted.size ? [...runOpts._exhausted] : []; // providers whose hourly cap was hit this run (surfaced to the user)
  out.vetoed = vetoed; // picks the vision check rejected + replaced (surfaced to the user)
  out.visionChecked = !!opts.openrouterKey;
  } // end STOCK passes — skipped when there are no data-gen slots so the generative pass below is always reachable
  // ── GENERATIVE pass: <img data-gen-ai="prompt"> → host generates (BYOK). Separate marker from data-gen (search);
  // both are idempotent via data-gen-done. Costs real money per image, so it only runs on tags the agent chose to emit
  // (and the agent only emits them when the capability-injection said a generation key is configured).
  const aiRe = /<img\b[^>]*\bdata-gen-ai=("|')([\s\S]*?)\1[^>]*>/gi;
  for (const f of htmlFiles) {
    const fp = path.join(dir, f);
    let html; try { html = fs.readFileSync(fp, 'utf8'); } catch { continue; }
    let changed = false;
    for (const m of [...html.matchAll(aiRe)]) {
      const tag = m[0], prompt = (m[2] || '').trim();
      if (/\bdata-gen-done\b/.test(tag) || !prompt) continue;
      const _hasGen = opts.openaiKey || opts.openrouterKey || opts.xaiKey || /^cli:/.test(opts.imageModel || '') || opts.genCli;
      if (!_hasGen) { out.push({ desc: prompt, ok: false, ai: true, reason: 'no generation capability (Settings → Generation model: an API key, or a connected image-capable CLI — Grok / Codex)' }); continue; }
      let gen = null, genErr = '';
      const ar = (tag.match(/\bdata-ar=("|')([\s\S]*?)\1/i) || [])[2] || ''; // §3: the aspect intent; empty → provider default
      try { gen = await generateImage(prompt, { ...opts, aspect: ar }); } catch (e) { genErr = (e && e.message) || 'error'; }
      if (!gen) {
        // FALLBACK (owner-requested): AI generation FAILED or hit a rate/quota LIMIT → don't leave an empty slot.
        // If a stock search key is configured, use a real relevant photo for the same prompt instead of nothing.
        if (opts.unsplashKey || opts.pexelsKey) {
          let hit = null; try { hit = await searchImage(fallbackQuery(tag, prompt), opts); } catch {}
          if (hit && hit.url) {
            const ffile = assetsRel + '/genfallback-' + (++n) + '.jpg';
            try {
              await download(hit.url, path.join(dir, ffile));
              let ftag = /\bsrc=("|')[\s\S]*?\1/.test(tag) ? tag.replace(/\bsrc=("|')[\s\S]*?\1/, 'src="' + ffile + '"') : tag.replace(/<img\b/i, '<img src="' + ffile + '"');
              ftag = ftag.replace(/<img\b/i, '<img data-gen-done');
              html = html.replace(tag, ftag); changed = true;
              out.push({ desc: prompt, ok: true, ai: true, fallback: true, file: ffile, provider: (hit.provider || 'stock') + ' (fallback — gen failed: ' + (genErr || 'no image') + ')' });
              continue;
            } catch {}
          }
        }
        out.push({ desc: prompt, ok: false, ai: true, reason: 'generate ' + (genErr || 'no image returned') + (opts.unsplashKey || opts.pexelsKey ? ' · stock fallback also failed' : ' · add an Unsplash/Pexels key to enable a stock fallback') });
        continue;
      }
      const file = assetsRel + '/genai-' + (++n) + '.png';
      try {
        if (gen.b64) fs.writeFileSync(path.join(dir, file), Buffer.from(gen.b64, 'base64'));
        else await download(gen.url, path.join(dir, file));
      } catch (e) { out.push({ desc: prompt, ok: false, ai: true, reason: 'save ' + e.message }); continue; }
      let newTag = /\bsrc=("|')[\s\S]*?\1/.test(tag) ? tag.replace(/\bsrc=("|')[\s\S]*?\1/, 'src="' + file + '"') : tag.replace(/<img\b/i, '<img src="' + file + '"');
      newTag = newTag.replace(/<img\b/i, '<img data-gen-done');
      // audit trail (matches the stock path's data-gen-src): stamp the provider's internally-revised prompt when it returns one
      if (gen.revised) newTag = newTag.replace(/<img\b/i, '<img data-gen-ai-revised="' + String(gen.revised).replace(/"/g, '').slice(0, 160) + '"');
      html = html.replace(tag, newTag); changed = true;
      out.push({ desc: prompt, ok: true, ai: true, file, provider: gen.provider, revised: gen.revised || '' });
    }
    if (changed) fs.writeFileSync(fp, html);
  }
  return out;
}

module.exports = { searchImage, searchCandidates, download, fulfillImages, generateImage, getJSON, postJSON, simplifyLadder, anchorLadder, domainWordsOf, siteDomain, verifyImage, scoreText, validCandidates, toneOf, toneDist, pickCoherentSet, readMedium, writeMedium, MEDIUM_FILE, fallbackQuery, aspectParams, parseAspect, snapRatio, cropToAspect, isRaster, generateImageViaCLI, spawnImageCLI, attachHttpsGuards };

// CLI:  node imagesource.cjs "query" <outfile>   |   node imagesource.cjs --fulfill <dir>
if (require.main === module) {
  (async () => {
    const opts0 = { unsplashKey: process.env.UNSPLASH_KEY, pexelsKey: process.env.PEXELS_KEY };
    if (process.argv[2] === '--fulfill') {
      const res = await fulfillImages(process.argv[3], opts0);
      for (const r of res) console.log((r.ok ? 'OK   ' : 'FAIL ') + (r.file || r.reason) + '  "' + (r.desc || '').slice(0, 38) + '"' + (r.score ? ' (kw ' + r.score + ')' : '') + (r.simplified ? ' [simplified -> "' + r.usedQuery + '"]' : '') + (r.color ? ' ' + r.color : ''));
      console.log('filled ' + res.filter((r) => r.ok).length + '/' + res.length);
      return;
    }
    const query = process.argv[2] || 'aerial ethiopian coffee farm golden hour';
    const out = process.argv[3] || path.join(os.tmpdir(), 'dezign-imgtest.jpg'); // R3 secrets sweep: neutral default (was a personal absolute path)
    const opts = { unsplashKey: process.env.UNSPLASH_KEY, pexelsKey: process.env.PEXELS_KEY };
    const hit = await searchImage(query, opts);
    if (!hit) { console.log('NO RESULT for: ' + query); process.exit(1); }
    console.log('source=' + hit.provider + ' | ' + (hit.title || '').slice(0, 50) + ' | ' + hit.license + ' | by ' + (hit.attribution || '?'));
    const dl = await download(hit.url, out);
    console.log('downloaded ' + dl.bytes + ' bytes (' + dl.contentType + ') -> ' + out);
  })().catch((e) => { console.error('ERR', e.message); process.exit(1); });
}
