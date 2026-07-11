---
technique: CSS specificity (cascade conflict resolution)
section: css-architecture
source: css-tricks/specifics-on-css-specificity
tags: [css, specificity, cascade, architecture, maintainability]
apply-when: debugging "why won't this style apply", structuring selectors, or setting up a scalable CSS architecture
---

# CSS specificity — applied rules

Core idea: when two rules set the same property on the same element, the one with higher **specificity** wins; ties break by **source order** (later rule wins). Knowing the scoring stops the "I changed it but nothing happened / I had to use `!important`" cycle.

## The scoring model (read selectors as four columns: inline · ID · class · element)
Count each piece of the selector and tally:
- **Inline `style=""`** → `1,0,0,0` — beats any selector.
- **Each ID (`#id`)** → `0,1,0,0`.
- **Each class, attribute (`[type=...]`), or pseudo-class (`:hover`, `:nth-child`)** → `0,0,1,0`.
- **Each element (`div`, `a`) or pseudo-element (`::before`)** → `0,0,0,1`.
- **Universal `*` and combinators (`>`, `+`, `~`, descendant space)** add **nothing**.

Compare column by column, left to right — a single ID outranks any number of classes. Examples:
- `#nav .item a` → `0,1,1,1`
- `.item.active` → `0,0,2,0`
- `ul li.favorite` → `0,0,1,2` — loses to `.favorite` (`0,0,1,0`)? No: `0,0,1,2` > `0,0,1,0` (equal classes, more elements). But `#x` (`0,1,0,0`) beats both.

## The rules (each = a build decision)
1. **Keep specificity LOW and FLAT.** Style with single classes (`0,0,1,0`) as the default. Flat specificity means later rules and overrides "just work" by source order — the whole point of a maintainable cascade.
2. **Don't style with IDs.** An ID jumps you to the `0,1,0,0` tier; one stray `#thing` rule forces every override after it to also use an ID (or `!important`). Reserve IDs for JS hooks/anchors, style with classes.
3. **Avoid `!important`.** It's an automatic win that even beats inline styles, so it short-circuits the cascade and the only way to beat it is *another* `!important` of equal-or-higher specificity — an arms race. Use it only for genuine utility overrides you control, never to win a fight you created with over-specific selectors.
4. **When a style "won't apply," compute both selectors' scores** before touching the code — usually a more specific existing rule is winning, and the fix is to *lower* its specificity (or match it) rather than pile on more selectors.
5. **`:not()` adds nothing itself, but its argument is scored** — `:not(.x)` counts as one class.
6. **Use `:where()` for zero-specificity grouping.** `:where(...)` always scores `0,0,0,0` regardless of its contents — ideal for base/reset styles and library defaults you want any author class to override effortlessly. `:is()` by contrast takes the specificity of its *most specific* argument.
7. **Equal specificity → source order wins** (last declared). Order your stylesheet so general → specific, and let later utility classes override base component styles.

## Build checklist
- [ ] Default styling hook is a single class (specificity kept flat at `0,0,1,0`)?
- [ ] No IDs used purely for styling?
- [ ] No `!important` except in deliberate, self-contained utilities?
- [ ] "Won't apply" bugs diagnosed by scoring both selectors, then lowering the winner — not by adding selectors?
- [ ] Base/reset and overridable defaults wrapped in `:where()` for zero specificity?
- [ ] Stylesheet ordered general → specific so source-order ties resolve correctly?
