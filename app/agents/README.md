# Studio agents — editable role cards + how they're orchestrated

Each `.md` here is ONE agent's behaviour (a "role card"), loaded at runtime by `electron/agent.cjs` (`loadCard`).
- **EDIT** a card to tune that agent — changes apply on the **NEXT turn** (no restart needed).
- **DELETE** a card to re-seed it from the shipped default baked into the code.
- The four role cards (`director.md`, `builder.md`, `critic.md`, `reviewer.md`) **bootstrap here on first run.**

## The roles (cards)
- **`director.md` — DIRECTOR** — plans a build BEFORE the builder: direction · palette · type · structure · motion · asset SOURCING. Pre-pass, no file edits.
- **`builder.md` — BUILDER** — writes/edits the actual site files. The only role with edit tools (Read/Glob/Grep/Edit/Write).
- **`critic.md` — CRITIC** — judges the rendered result against the visual-quality rubric (loop only). Emits the JSON verdict + per-dimension scores.
- **`reviewer.md` — REVIEWER** — a read-only second-lens QA (brand/flow · violated settled decisions · dead controls/code · brief match). Reports, never edits.

## Orchestration — the HOST is the conductor (agents do NOT talk to each other directly)
Every role is an ISOLATED `query()` (no `settingSources`, scoped tools); none of them can see another. The **host** relays each one's OUTPUT into the next one's INPUT:

- **Interactive Studio build** (`electron/main.cjs` → `chat:send`): `Director → Builder → Reviewer`.
  The Director's plan is injected into the Builder's system prompt; the Reviewer gets that plan as context and reviews the built result.
- **Loop** (`src/App.jsx` → `runLoop`): `Builder → Critic → Builder → … → Reviewer (final QA)`.
  The Critic's `blocking_issues` become the Builder's next task each iteration; the library retrieval + the motion manifest also feed the relevant roles.
- **Solo mode** (default): just `Builder + library` — no Director/Reviewer.

So "the agents give each other tasks" = the host passes **structured output** (the Director's plan, the Critic's issues) as the next role's task. The host-as-conductor is deliberate: **deterministic, debuggable, cheaper, and safe for isolated agents** — versus autonomous agent-to-agent chatter, which is non-deterministic, pricier, and would require un-isolating them.

Full design + build order: `../docs/MULTI-AGENT-STUDIO.md`.
