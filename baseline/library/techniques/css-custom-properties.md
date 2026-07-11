---
technique: CSS custom properties (variables)
section: css-architecture
source: css-tricks/a-complete-guide-to-custom-properties
tags: [css, variables, theming, design-tokens, dark-mode, javascript]
apply-when: wiring up any themeable/runtime-dynamic styling — color schemes, dark mode, JS-driven values, token systems
---

# CSS custom properties — applied rules

Core idea: a custom property is a **runtime, cascading, inheritable** variable — unlike Sass/preprocessor variables it lives in the browser, respects the cascade and DOM, and can be changed live by media queries, a parent selector, or JavaScript. Use them wherever a value must change *at runtime* (theme, state, viewport, user input); use preprocessor vars only for compile-time constants.

## The rules (each = a build decision)
1. **Declare on a selector with `--name`.** Global tokens go on `:root`; component-scoped overrides go on the component selector. A child reads whatever value is nearest up the tree — that inheritance IS the feature.
   ```css
   :root { --brand: #990000; --space: 1rem; }
   .sidebar { --space: 0.5rem; } /* scoped override, only descendants see it */
   ```
2. **Always read with `var(--name, fallback)`.** The second argument is the fallback when the property is unset — use it so a missing token degrades gracefully instead of dropping the whole declaration. Fallbacks can nest: `var(--scale, var(--backup, 1.2))`.
3. **Theme by swapping values behind constant names, not by duplicating rules.** Define `--bg`/`--text` once on `body`, consume them in your rules, then re-declare just the variables under a dark scope:
   ```css
   body { --bg: white; --text: black; background: var(--bg); color: var(--text); }
   @media (prefers-color-scheme: dark) { body { --bg: black; --text: white; } }
   ```
   A `.dark` class on `<html>` works identically and lets users toggle. This is the canonical dark-mode pattern — one set of consuming rules, two (or N) sets of variable values.
4. **Compose values from parts so you can tweak one dimension on a state.** Split a color/shadow/gradient into custom-prop pieces and change only what the interaction needs:
   ```css
   button { --h:220; --s:60%; --l:50%; background: hsl(var(--h) var(--s) var(--l)); }
   button:hover { --l: 65%; } /* lighten on hover, nothing else recomputed by hand */
   ```
   Same trick for `box-shadow` spread, `linear-gradient()` angle, grid edge columns, multiple backgrounds.
5. **Do math with `calc()`.** `padding: calc(var(--space) / 2)`, `width: calc(var(--cols) * var(--col-w))`. Custom props hold the operands; `calc()` evaluates at the point of use.
6. **Drive from JavaScript** — this is the bridge for interactive/cursor/scroll effects:
   ```js
   el.style.setProperty('--x', value);                       // set
   getComputedStyle(el).getPropertyValue('--x');             // read
   ```
   Setting via inline style is high-specificity and scopes to that element only.
7. **Animate them only after registering with `@property`.** A plain custom prop can't be interpolated; register a type so transitions/keyframes work:
   ```css
   @property --r { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
   ```
   (types: `<length> <number> <percentage> <color> <angle> <time> <image> <url> <transform-function>` …)

## Hard limits (don't fight these)
- **You CANNOT use a custom property as a media-query condition value** — `@media (max-width: var(--bp))` is invalid (resolves at runtime → would loop). Keep breakpoints in preprocessor vars or literals.
- **Invalid-at-computed-value-time:** if a var's value doesn't fit the property it's plugged into, that property resets to its *initial* value (not the inherited one) — a surprising failure mode; the `var()` fallback does NOT catch this.
- `!important` inside a custom-property declaration decides which *declaration of the variable* wins, but the `!important` is stripped when the value is finally applied — so it changes precedence of the var, not the property using it.

## Build checklist
- [ ] Global tokens on `:root`, component overrides scoped to the component (leveraging inheritance, not duplication)?
- [ ] Every `var()` has a sensible fallback?
- [ ] Theming/dark mode done by re-declaring variables under a scope, with ONE set of consuming rules?
- [ ] Per-state tweaks change a single composed sub-value (e.g. `--l` of an HSL) rather than rewriting the whole value?
- [ ] Any animated custom prop registered via `@property` with a `syntax` type?
- [ ] Breakpoints kept OUT of custom properties (literals/preprocessor instead)?

> Ties to our experience: this is the runtime engine behind our three-tier design-token plan — semantic names stay constant while modes swap resolved values (rule 3), and it's exactly the mechanism for the perf-tier toggles and any cursor/scroll-reactive values the cinematic Three.js sites feed in via `setProperty` (rule 6).
