---
technique: No-code app patterns (interaction archetypes for rapid prototypes)
section: web-design
source: figma-resource-library/no-code-app-examples.md
tags: [prototyping, interaction, mvp, micro-interactions, ecommerce, dashboard]
apply-when: prototyping an interactive app/site fast and you need a proven interaction archetype to copy instead of inventing one
---

# No-code app patterns — reusable interaction archetypes

Core idea: most "apps" are one of a handful of interaction archetypes. When prototyping fast, pick the archetype that matches the hardest interaction your idea requires, build that loop first, and let the rest hang off it. The article is a brand list; what's reusable is the underlying pattern + when to reach for it.

## The patterns (each = pick-this-when)

1. **Grid-input game loop** (word search, block-builder) — the screen is a grid/space that must re-render instantly on every click without lag. Use when input is continuous and high-frequency. Build decision: keep state in one model, redraw from it on each event; never animate per-cell on a stagger that can desync (read as "crooked"). Stress-test interaction here first — if it survives, simpler screens will.

2. **One-tap randomizer** (fortune cookie, infinite-UI generator) — a single trigger produces a varied, surprising result. Use for delight moments, empty states, "shuffle/inspire me" features. Build decision: separate the *trigger* from the *result pool*; one input maps to N possible outputs. Add an optional auto-timer (refresh every few seconds) for ambient/screensaver modes.

3. **Instant-feedback micro-interaction** (crack the cookie → reveal) — a tiny input yields immediate, specific visual/audio feedback. Use on every primary action so the UI never feels dead. Build decision: every tap must produce a perceptible response within one frame; if nothing changes visibly, the action reads as broken.

4. **Time + data utility** (shader reminder, countdown) — the app reacts to *both* user input and elapsed time simultaneously. Use for timers, reminders, anything with a deadline. Build decision: model the time-based event and the user-data event as two independent streams that both write to one alert state; fire sound + visual together on completion.

5. **Filter-driven dashboard** (analytics) — charts re-compute the instant a filter (category/region/date) changes. Use for BI, admin panels, any multi-dimensional data view. Build decision: every control drives the same underlying dataset; all charts subscribe and update together — no stale panel left showing the old filter.

6. **Data-reactive cards + smart search** (expense tracker) — responsive cards, natural-language search ("show coffee expenses"), tappable charts that drill down, real-time summaries. Use for finance/tracker apps that must feel like a shipped banking app. Build decision: cards animate smoothly on data change; search and chart-tap are two routes into the same filtered view.

7. **High-speed input + audio** (MIDI controller) — mouse/keyboard drive realtime sound with togglable modes (synth, waveform, release). Use for instruments, audio toys, anything latency-sensitive. Build decision: gate audio behind an explicit "Initialize Audio" action (browsers block autoplay); keep the input→sound path as short as possible.

8. **Logic-heavy storefront / checkout** (gift shop, grocery, coffee app) — browse by category, filter by name/price, favorite, add-to-cart, checkout. Use for any e-commerce MVP where the point is proving the *flow* works, not the catalog size. Build decision: track user choices in a cart model from the first click; mix marketing content (hero carousel, reviews, newsletter) with utility (filters, cart) in one cohesive scroll; an accordion keeps a long nav tidy.

## Prompting / build-fast decisions (from the "how to start" section)
- Seed the model with existing frames/structure when you have them — gives it your layout + metadata for free.
- Put the *logic* in the prompt, not just the look: name the exact behavior ("a transaction list that filters by date", "a button that triggers a success sound"). More logic specified up front = less manual rework later.
- Iterate by pointing at a specific element and re-prompting that section, rather than regenerating the whole thing.

## Build checklist (use when prototyping an interactive app)
- [ ] Identified which archetype above the hardest interaction maps to, and built that loop first?
- [ ] Every primary action produces a perceptible response within one frame (no dead taps)?
- [ ] All controls/filters drive ONE shared data model — no panel left showing stale state?
- [ ] Time-based and input-based events modeled as independent streams writing to one state?
- [ ] Audio gated behind an explicit user gesture (browsers block autoplay)?
- [ ] Prompt spelled out the behavior/logic, not just the visual look?

> Ties to our experience: the grid-input loop (pattern 1) and the filter dashboard (pattern 5) map directly to our PAIN.md scars — the per-cell stagger that read as crooked (common-fate violation) and the repos-table header that broke column similarity/continuity. Both are "render the whole structure from one model" failures the way these patterns prescribe.
