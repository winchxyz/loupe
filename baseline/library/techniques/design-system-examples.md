---
technique: Design system structure (what a reusable system must contain)
section: ui-ux-principles
source: figma-resource-library/design-system-examples.md
tags: [design-system, tokens, components, consistency, documentation, scalability]
apply-when: starting a site/UI where the same elements recur (buttons, cards, sections) and you want consistency without rebuilding each one
---

# Design system structure — applied rules

Core idea: before placing pixels, define a small shared vocabulary (tokens + components + patterns + docs) and build everything from it. The system is the single source of truth; improvising one-off styles per section is the failure mode it prevents. Reuse over rebuild — every duplicate styling decision is a future inconsistency.

## The four layers every system needs (build in this order)
1. **Design tokens first.** Define brand primitives as named values — color, spacing scale, typography (sizes/weights/line-heights), radii, shadows — BEFORE any component. Components reference tokens, never raw hex/px. Add a dark-mode token set up front if the site has one; retrofitting later is painful.
2. **UI kit (components).** Build the reusable atoms — buttons, inputs, icons, cards — once, with explicit variants (states, sizes) rather than copy-paste clones. A new instance should be a variant choice, not a fresh hand-styled element.
3. **Patterns.** Codify how composite elements behave — nav bars, modals, section layouts. Pattern = the agreed solution for a recurring interaction, so behavior stays identical everywhere it appears.
4. **Documentation.** For each token/component/pattern, write when and how to use it. Undocumented = it will be misused or re-invented. Docs are what make the system survive past the original author.

## Reusable patterns from the 12 examples (extract the model, not the brand)
- **Neutral-base kit, brand-skinned via tokens** (TapTap, Simple, Wanted): build components in a neutral aesthetic, then swap brand identity entirely through tokens. Use when one structure must serve multiple looks or an undecided brand.
- **Dynamic/adaptive theming** (Material 3 "Material You", Arco Design Lab): theme is generated from a seed (user color, brand input) rather than hand-painted. Use when color must adapt to user/context — maps cleanly to our hardware-adaptive tiers mindset (one structure, parameterized output).
- **Accessibility baked into the primitives** (Carbon, Polaris, Atlassian, HIG): contrast, focus states, and a11y standards live in the token/component layer, not bolted on at the end. Use this default always — never defer a11y to a polish pass.
- **Content + visual guidelines together** (Polaris, Atlassian): the system governs copy/voice as well as pixels. Use when product surfaces carry a lot of microcopy (forms, errors, empty states).
- **Platform-spec system as law** (Apple HIG): when targeting a specific platform, treat its native guidelines as the system — don't fight platform conventions.
- **Multi-product cohesion from shared foundations** (Uber Base, Atlassian): define type/color/icon/spacing centrally so distinct products still feel like one family. Use across a suite or a multi-section journey site that must read as one piece.
- **Community template as a head start** (Dialect, Finesse, Simple): start from a structured template and customize, rather than from a blank canvas — for speed/prototyping. Trade-off: token depth and docs are often thin, so audit before trusting it.

## Build checklist (use when starting or reviewing a UI)
- [ ] Tokens defined and named (color/spacing/type/radius/shadow) before any component is styled?
- [ ] Components reference tokens — zero raw hex/px hardcoded in instances?
- [ ] Recurring elements built once with variants, not copy-pasted clones?
- [ ] Dark-mode / adaptive token set planned up front if needed (not retrofitted)?
- [ ] Accessibility (contrast, focus, states) lives in the primitives, not deferred to polish?
- [ ] Each token/component/pattern has a one-line "when to use" note?
- [ ] Across all sections, the same role looks/behaves the same (no per-section drift)?
