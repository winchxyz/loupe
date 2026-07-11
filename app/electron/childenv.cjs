/* Loupe · childenv.cjs — AUDIT-2 F33. ONE env scrubber for FOREIGN (non-Anthropic) CLI children.
   applyAnthropicEnv (main.cjs) seeds process.env.ANTHROPIC_API_KEY so the SDK/Claude path can authenticate; but every
   non-SDK spawn inherits process.env and would hand that key (plus any CLAUDE* session-attach vars) to
   codex/grok/copilot/mimo/image-gen/npm. childEnv() returns a clone of process.env with ANTHROPIC_API_KEY and every
   CLAUDE* var deleted, for foreign CLI children only.
   KEPT SEPARATE from agent.cjs sdkChildEnv (which KEEPS ANTHROPIC_API_KEY by design and strips only CLAUDE*) — do NOT
   unify: the SDK path needs the key, foreign CLIs must never see it. PATH and the rest are preserved so a win32
   shell:true spawn still resolves the bin. */
function childEnv() {
  const env = { ...process.env };
  delete env.ANTHROPIC_API_KEY;
  for (const k of Object.keys(env)) { if (/^CLAUDE/i.test(k)) delete env[k]; }
  return env;
}

module.exports = { childEnv };
