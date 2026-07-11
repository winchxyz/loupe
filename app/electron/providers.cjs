/* deZign — multi-provider BYOK client (17a judge + 17b BUILD). Table-driven OpenAI-compatible chat client.
 * Consumers: (1) the CROSS-VENDOR JUDGE — the loop critic runs on GPT/Gemini/Grok/anything on OpenRouter while
 * Claude builds; (2) runBuild() — a full non-Claude BUILD engine, wired into chat:send + /flow. Endpoints verified 2026-07-02.
 * Model refs are provider-prefixed strings: "openrouter:openai/gpt-5.2" · "openai:gpt-5.2" · "gemini:gemini-3-pro"
 * · "xai:grok-4". Un-prefixed ids (claude-*) stay on the Claude Agent SDK path — parseModelRef returns null for them.
 */
const fs = require('node:fs');
const path = require('node:path');
const { postJSON } = require('./imagesource.cjs');

const TABLE = {
  openrouter: { base: 'https://openrouter.ai/api/v1', keyName: 'openrouterKey', label: 'OpenRouter' },
  openai: { base: 'https://api.openai.com/v1', keyName: 'openaiKey', label: 'OpenAI' },
  gemini: { base: 'https://generativelanguage.googleapis.com/v1beta/openai', keyName: 'geminiKey', label: 'Gemini' }, // Google's OpenAI-compatibility layer
  xai: { base: 'https://api.x.ai/v1', keyName: 'xaiKey', label: 'xAI' },
};

// "openrouter:openai/gpt-5.2" -> { provider:'openrouter', model:'openai/gpt-5.2' }; claude-*/plain ids -> null (SDK path)
function parseModelRef(ref) {
  const s = String(ref || '').trim();
  const i = s.indexOf(':');
  if (i <= 0) return null;
  const provider = s.slice(0, i);
  if (!TABLE[provider]) return null;
  const model = s.slice(i + 1).trim();
  return model ? { provider, model } : null;
}

// image file -> OpenAI-compatible content part (data URL; png/jpeg by extension)
function imagePart(absPath) {
  let b64 = null; // AUDIT 2026-07-07: a frame freshly written by flow:review can be transiently locked (Windows AV/indexer) — retry before giving up
  for (let i = 0; i < 4 && b64 === null; i++) { try { b64 = fs.readFileSync(absPath).toString('base64'); } catch (e) { if (i === 3) throw e; } }
  const mime = /\.jpe?g$/i.test(absPath) ? 'image/jpeg' : 'image/png';
  return { type: 'image_url', image_url: { url: 'data:' + mime + ';base64,' + b64 } };
}

// build the messages array (exported separately so the smoke can unit-test the shape without a network call)
function buildMessages({ system, userText, imagePaths = [] }) {
  const content = [{ type: 'text', text: String(userText || '') }];
  let attached = 0;
  for (const p of imagePaths) { try { content.push(imagePart(p)); attached++; } catch { /* transient/missing frame */ } }
  // AUDIT 2026-07-07: if frames were expected but NONE could be read, FAIL CLOSED — never let a vision judge/build proceed
  // text-only and fabricate a confident verdict about a screenshot it never received.
  if (imagePaths.length && attached === 0) throw new Error('could not read any of the ' + imagePaths.length + ' attached frame(s) — refusing a text-only judgment on an unseen frame');
  const messages = [];
  if (system) messages.push({ role: 'system', content: String(system) });
  messages.push({ role: 'user', content });
  return messages;
}

// One OpenAI-compatible chat completion. Returns { text, usage } in the same shape runCritic returns, so the
// caller (critic:judge) can route Claude-vs-provider transparently and the renderer's verdict parser just works.
async function chatComplete({ provider, model, key, system, userText, imagePaths, maxTokens = 4000, totalTimeoutMs, signal }) {
  const t = TABLE[provider];
  if (!t) throw new Error('unknown provider: ' + provider);
  if (!key) throw new Error('no ' + t.label + ' key configured (Settings)');
  const body = { model, messages: buildMessages({ system, userText, imagePaths }), max_tokens: maxTokens };
  if (provider === 'openrouter') body.usage = { include: true }; // OpenRouter returns real cost when asked
  const d = await postJSON(t.base + '/chat/completions', body, { Authorization: 'Bearer ' + key }, { totalTimeoutMs, signal });
  const choice = d.choices && d.choices[0];
  const text = (choice && choice.message && (typeof choice.message.content === 'string' ? choice.message.content : (choice.message.content || []).map((c) => c.text || '').join(''))) || '';
  // AUDIT 2026-07-07: a reasoning judge can spend the whole completion budget on reasoning → empty content + finish 'length'.
  // Surface it explicitly instead of {text:''} (which the reviewer reads as "no verdict" and silently gives up).
  if (!text && choice && choice.finish_reason === 'length') throw new Error('the judge model hit the ' + maxTokens + '-token cap before answering — no verdict (raise max_tokens)');
  const u = d.usage || {};
  return { text, usage: { input: u.prompt_tokens || 0, inUncached: u.prompt_tokens || 0, cacheRead: 0, cacheCreate: 0, output: u.completion_tokens || 0, cost: (typeof u.cost === 'number' ? u.cost : 0) }, provider, model };
}

// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
// 17b — NON-CLAUDE BUILD ENGINE. A generic OpenAI-compatible tool-calling agent loop: the model gets file tools
// (write/read/edit/list) scoped to the project cwd, and we run the completion→tool→completion cycle until it stops
// calling tools. Claude keeps building on the Agent SDK; this lets any tool-capable OpenRouter/OpenAI/Gemini/xAI
// model build a page too. The OpenRouter model list the picker offers is already server-filtered to tool-capable
// models, so a chosen OpenRouter builder supports this loop. Non-streaming per turn (postJSON is request/response);
// each iteration surfaces the assistant text + Write/Edit tool events for the theater + misdirect detector.
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
const BUILD_TOOLS = [
  { type: 'function', function: { name: 'write_file', description: 'Create or overwrite a file in the project. `path` is RELATIVE to the project root (e.g. "index.html", "styles.css"). Writes the full file content.', parameters: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } } },
  { type: 'function', function: { name: 'read_file', description: 'Read a text file from the project (relative path).', parameters: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } } },
  { type: 'function', function: { name: 'edit_file', description: 'Replace the FIRST exact occurrence of old_text with new_text in a project file.', parameters: { type: 'object', properties: { path: { type: 'string' }, old_text: { type: 'string' }, new_text: { type: 'string' } }, required: ['path', 'old_text', 'new_text'] } } },
  { type: 'function', function: { name: 'list_dir', description: 'List file/dir names in a project directory (relative path; "" = project root).', parameters: { type: 'object', properties: { path: { type: 'string' } } } } },
];

// resolve a model-supplied relative path INSIDE cwd; null if it escapes the project (path-traversal guard)
function safeResolve(cwd, p) {
  const r = path.resolve(cwd, String(p || '').replace(/^[\\/]+/, ''));
  if (r !== cwd && !r.startsWith(cwd + path.sep)) return null;
  return r;
}
// execute one tool call against the project; returns { result:<string for the model>, toolEvent?:{name,input} }
function execBuildTool(cwd, name, args) {
  try {
    if (name === 'write_file') {
      const abs = safeResolve(cwd, args.path); if (!abs) return { result: 'error: path is outside the project' };
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, String(args.content == null ? '' : args.content));
      return { result: 'wrote ' + args.path, toolEvent: { name: 'Write', input: { file_path: args.path, content: String(args.content == null ? '' : args.content) } } };
    }
    if (name === 'read_file') {
      const abs = safeResolve(cwd, args.path); if (!abs) return { result: 'error: path is outside the project' };
      if (!fs.existsSync(abs)) return { result: 'error: file not found: ' + args.path };
      return { result: fs.readFileSync(abs, 'utf8').slice(0, 24000) };
    }
    if (name === 'edit_file') {
      const abs = safeResolve(cwd, args.path); if (!abs) return { result: 'error: path is outside the project' };
      if (!fs.existsSync(abs)) return { result: 'error: file not found: ' + args.path };
      let c = fs.readFileSync(abs, 'utf8');
      if (!c.includes(String(args.old_text))) return { result: 'error: old_text not found in ' + args.path };
      c = c.replace(String(args.old_text), () => String(args.new_text == null ? '' : args.new_text)); // AUDIT-2 F12: a FUNCTION replacement so $$, $&, $`, $' in new_text are written LITERALLY (String.replace would interpret them and corrupt the edited file)
      fs.writeFileSync(abs, c);
      return { result: 'edited ' + args.path, toolEvent: { name: 'Edit', input: { file_path: args.path, old_string: String(args.old_text), new_string: String(args.new_text == null ? '' : args.new_text) } } };
    }
    if (name === 'list_dir') {
      const abs = safeResolve(cwd, args.path || ''); if (!abs) return { result: 'error: path is outside the project' };
      if (!fs.existsSync(abs)) return { result: 'error: not found' };
      return { result: fs.readdirSync(abs).slice(0, 200).join('\n') || '(empty)' };
    }
    return { result: 'error: unknown tool ' + name };
  } catch (e) { return { result: 'error: ' + String((e && e.message) || e) }; }
}

// Run a full build turn on a provider model. Resolves { ok, text, usage, error, maxIters? } — same shape the
// bridge/SDK builders return, so flowBuilderTurn + chat:send treat all three engines uniformly. `signal` (an
// AbortSignal) is polled between iterations so Stop ends it promptly.
async function runBuild({ provider, model, key, system, userText, cwd, maxIters = 40, signal, reqTimeoutMs, onText, onTool }) {
  const t = TABLE[provider];
  if (!t) return { ok: false, error: 'unknown provider: ' + provider };
  if (!key) return { ok: false, error: 'no ' + t.label + ' key configured (Settings)' };
  const messages = [];
  if (system) messages.push({ role: 'system', content: String(system) });
  messages.push({ role: 'user', content: String(userText || '') });
  const usage = { input: 0, inUncached: 0, cacheRead: 0, cacheCreate: 0, output: 0, cost: 0 };
  let finalText = '';
  for (let i = 0; i < maxIters; i++) {
    if (signal && signal.aborted) return { ok: false, error: 'stopped', text: finalText, usage };
    const body = { model, messages, tools: BUILD_TOOLS, tool_choice: 'auto', max_tokens: 8000 };
    if (provider === 'openrouter') body.usage = { include: true };
    let d;
    // AUDIT-2 F29: thread signal + an opt-in per-request wall-clock into postJSON. Without signal, an in-flight request
    // could NOT be Stop-aborted or lane-timeout-aborted (the try/catch below never fired because the promise never
    // settled — a mid-body close hung the whole build turn). postJSON now honors both (attachHttpsGuards + opts.signal).
    try { d = await postJSON(t.base + '/chat/completions', body, { Authorization: 'Bearer ' + key }, { signal, totalTimeoutMs: reqTimeoutMs }); }
    catch (e) { return { ok: false, error: String((e && e.message) || e), text: finalText, usage }; }
    const choice = d.choices && d.choices[0];
    const msg = choice && choice.message;
    if (!msg) return { ok: false, error: 'no message in provider response', text: finalText, usage };
    const u = d.usage || {}; usage.input += u.prompt_tokens || 0; usage.inUncached += u.prompt_tokens || 0; usage.output += u.completion_tokens || 0; usage.cost += (typeof u.cost === 'number' ? u.cost : 0);
    messages.push(msg); // keep the assistant turn (with tool_calls) so the tool results reference its ids
    const content = typeof msg.content === 'string' ? msg.content : Array.isArray(msg.content) ? msg.content.map((c) => c.text || '').join('') : '';
    if (content) { finalText += (finalText ? '\n' : '') + content; if (onText) onText(content); }
    const calls = Array.isArray(msg.tool_calls) ? msg.tool_calls : [];
    if (!calls.length) return { ok: true, text: finalText, usage }; // no tools this turn → the build is done
    for (const c of calls) {
      const fn = (c.function && c.function.name) || '';
      // A malformed tool-call (invalid JSON in function.arguments) used to default to {} → write_file(undefined) →
      // EISDIR, and the model got only a generic write error, so it could loop unproductively to maxIters. Give it a
      // clear signal instead so it can re-issue valid JSON. (audit #8, 2026-07-05)
      let args, parseErr = null;
      try { args = JSON.parse((c.function && c.function.arguments) || '{}'); } catch (e) { parseErr = String((e && e.message) || e); }
      if (parseErr) { messages.push({ role: 'tool', tool_call_id: c.id, content: 'error: could not parse your tool arguments as JSON (' + parseErr + '). Re-issue the `' + fn + '` call with valid JSON arguments.' }); continue; }
      const { result, toolEvent } = execBuildTool(cwd, fn, args);
      if (toolEvent && onTool) onTool(toolEvent);
      messages.push({ role: 'tool', tool_call_id: c.id, content: String(result) });
    }
  }
  return { ok: true, text: finalText, usage, maxIters: true }; // hit the safety cap — keep whatever was written
}

module.exports = { TABLE, parseModelRef, buildMessages, chatComplete, runBuild, execBuildTool, safeResolve, BUILD_TOOLS };
