---
technique: Vibe coding tools — pick the right archetype for the prototyping job
section: prototype-wireframe
source: figma-resource-library/vibe-coding-tools.md
tags: [prototyping, tooling, ai-codegen, workflow, wireframe]
apply-when: choosing how to spin up a prototype/wireframe (or which AI codegen tool) before committing real build effort
---

# Vibe coding tools — applied rules

Core idea: "vibe coding" = drive code generation with natural-language prompts. The 10 named tools collapse into a few ARCHETYPES distinguished by job-to-be-done. Pick by the job in front of you, not by brand. None ship error-free code unattended — treat every output as a draft that a human verifies (this is our closed-loop thesis, restated by the article).

## Reusable patterns (each = pick X when Y)

1. **Design-source-of-truth generator** (Figma Make archetype) — generates code-backed prototypes wired to an existing design system, so output looks like the real thing and feeds real feedback. CHOOSE when a design system / DESIGN.md already exists and fidelity-to-tokens matters more than raw speed. AVOID for throwaway spikes where setup cost outweighs the prototype.
2. **Prompt-to-full-stack app** (Lovable / Replit / Bolt archetype) — one prompt yields frontend + backend + DB, often browser-based with instant deploy. CHOOSE for an MVP / internal tool / shareable demo you need TODAY and don't have a spec for; "a direction, not a perfect spec" is enough. AVOID when you need design-system accuracy or long-term maintainability — these optimize speed over precision.
3. **In-editor codebase agent** (Cursor / Windsurf archetype) — AI lives in an IDE, is context-aware of YOUR existing code, and takes on scoped tasks (refactor, bugfix, multi-file edits). CHOOSE for large-scale refactors and edits inside an existing, complex codebase (e.g. our Three.js/WebGL build). AVOID as a from-zero generator for non-coders.
4. **Conversational reasoning agent** (Claude Code archetype) — reasons about the task rather than pattern-completing; integrates with terminal, filesystem, git. CHOOSE for intensive, logic-heavy work (big refactors, "why is this broken") where an explanation of the change matters. This is the tool driving deZign-pro itself.
5. **Autocomplete pair-programmer** (GitHub Copilot archetype) — inline next-step prediction + chat, not a full-stack generator. CHOOSE to accelerate boilerplate, unblock tricky logic, and learn patterns while hand-writing code. Don't expect it to scaffold a whole app.
6. **Frontend-from-prompt component generator** (v0 archetype) — clean UI from a prompt, but framework-locked (React only) and backend-light; Figma imports are RECREATED, not design-system-accurate. CHOOSE for fast React UI when you have no visual direction. AVOID when you need backend/DB wiring or token-exact fidelity.
7. **Big-context-window assistant** (Gemini Code Assist archetype) — up to ~1M-token window + MCP access to real external context. CHOOSE when the task requires reasoning over a very large codebase that won't fit smaller windows, or live context beyond the prompt.

## Selection criteria (vet a tool before trusting it on a real site)
- **Reliable outputs over a long session** — quality degrades as a chat grows; test that it still follows directions, doesn't hallucinate non-existent files/codebases, and is syntax-clean deep into a thread, not just on turn one.
- **Privacy / data handling** — prefer zero-data-retention; confirm code and inputs aren't training future models before feeding anything proprietary.
- **Code-completion quality** — verify suggestions actually run and predict your intent (needs an experienced eye to judge).
- **Testing generation** — favor tools that can emit tests for functionality, accessibility, and security.
- **Document generation** — README / comments / docs are a hard requirement; undocumented generated code is unmaintainable.

## Build checklist (use when reaching for a vibe coding tool)
- [ ] Named the JOB first (design-faithful prototype / fast MVP / refactor-in-place / boilerplate assist) and matched it to the archetype above?
- [ ] Picked design-source-of-truth (#1) when token/design-system fidelity matters — not a recreate-it-from-scratch importer?
- [ ] Treated the output as a DRAFT and verified it (no tool ships error-free unattended)?
- [ ] Checked the output still holds up deep into a long session, not just the first reply?
- [ ] Confirmed privacy / zero-data-retention before feeding proprietary code?
- [ ] Confirmed it can emit tests AND docs, so the result is maintainable?
