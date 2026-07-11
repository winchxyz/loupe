---
technique: Design tokens (three-tier token architecture)
section: ui-ux-principles
source: figma-resource-library/design-tokens.md
tags: [design-system, tokens, color, theming, css-variables, naming]
apply-when: setting up the styling foundation of any site/UI so values are named once, reused everywhere, and themeable
---

# Design tokens — applied rules

Core idea: never hardcode a raw value (hex, px, font-size) where it's used. Store it once under a meaningful NAME, then reference the name everywhere. The name — not the value — is the stable contract across components, themes, and the design↔code boundary. A token = a name/value pair; the value can change, the name shouldn't.

## The rules (each = a build decision)

1. **Three tiers, in order — primitive → semantic → component.** Build the raw layer first, then the role layer, then the per-element layer. Each tier references only the tier below it.
2. **Primitives = raw constants, no meaning.** Name them by what they ARE: `blue-100…blue-900`, `space-2…space-64`, `font-size-14`. Cover the full range up front (a color ramp, a spacing scale `2px–64px`, type sizes) so every semantic token later has something to point at. Prioritize color, spacing, and typography first.
3. **Semantic tokens = name by ROLE, never appearance.** `action-color`, `text-secondary`, `bg-surface`, `border-default` — not `gray-text` or `blue-button`. A role name survives a rebrand; an appearance name doesn't. This is the layer teams most often skip — and skipping it means a primitive change forces a manual hunt through every component.
4. **Semantic points to primitive, never to another semantic.** No alias chains. `text-secondary → gray-300`, full stop. Chaining aliases makes the system unmaintainable.
5. **Component tokens = the per-element escape hatch.** `button-primary-bg`, `card-radius`, `input-padding`. Use one ONLY when a single element must deviate from the system default (e.g. the primary button needs a slightly different shade than the general action color) — so you change it without touching anything shared. Semantic = intent; component = execution.
6. **Pick ONE naming taxonomy and apply it everywhere.** A common pattern: `category/role/variant` → `color/action/primary`, `color/text/disabled`. There's no single correct convention; consistency beats cleverness. Varying the pattern per component makes the system unnavigable.
7. **Theme with MODES, not duplicate component sets.** Keep the semantic name constant across columns; swap what it resolves to. `text-primary` → `gray-900` in Light, `gray-100` in Dark. One component set, the mode does the switching. Same mechanism handles multi-brand and per-platform overrides (e.g. iOS corner-radius ≠ Web corner-radius).
8. **Expose tokens to code as the same name.** A token `color/action/primary` should surface in CSS as `--color-action-primary`, droppable straight into a stylesheet. The designer's name and the developer's name are literally the same string — that's the whole point.
9. **Store/serialize as JSON name/value pairs** when tokens cross tools (W3C Design Tokens Community Group format) so any part of the stack can consume them.
10. **Tokens beat styles for color and spacing; styles still win for gradients and complex type.** Reach for variables/tokens by default; fall back to a "style" object only where tokens can't yet express the value.

## Build checklist (use when setting up a UI's styling foundation)
- [ ] Raw values live in a primitive layer (color ramp, `2–64px` spacing scale, type sizes) — nothing hardcoded at point of use?
- [ ] A semantic layer named by ROLE (`text-secondary`, `action-color`, `bg-surface`) sits between primitives and components?
- [ ] Semantic tokens point only to primitives — no alias chains?
- [ ] One taxonomy (e.g. `category/role/variant`) applied to every token, no per-component drift?
- [ ] Light/dark (and any brand/platform variants) handled by MODES swapping a constant name — not by duplicated components?
- [ ] Core UI roles covered first: text, background, border, action?
- [ ] Tokens surface in code under the identical name (`--color-action-primary`)?

> Ties to our experience: 02b/TESQ already lives on this idea — its hardware-adaptive performance tiers are effectively "modes" swapping resolved values behind stable names, and the matte stacked-blur glass UI begs for semantic color/blur/spacing tokens so a single change propagates across every pinned section instead of being hunted down per component (the maintenance trap rule 3 warns about).
