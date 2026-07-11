---
technique: Simplicity in design (progressive disclosure + convention)
section: ui-ux-principles
source: figma-resource-library/simplicity-design-principles.md
tags: [simplicity, progressive-disclosure, white-space, conventions, ux, information-architecture]
apply-when: deciding what to show vs hide on a screen, taming a feature-dense UI, or cutting FUD on a high-stakes flow
---

# Simplicity in design — applied rules

Core idea: simplicity is NOT the opposite of complexity — it's revealing complex information in a measured, digestible order. Reveal over time (like a movie or deck builds an idea); don't dump everything at once. The payoff is less fear/uncertainty/doubt (FUD) — most valuable on flows touching money, health, or long-term decisions.

## The rules (each = a build decision)
1. Lead with the 1-2 jobs the user actually opened the screen to do. Surface those; everything else is secondary. (Google Photos shows just photos + search bar; sharing/sorting/ML live elsewhere.)
2. Don't delete capability — relocate it. Push non-crucial controls behind a menu or make them contextual (appear only when relevant) instead of stripping the feature.
3. Disclose progressively. Break a large payload into staged pieces that build on each other rather than one dense view. Match this to a scroll-journey: each section earns the next reveal.
4. Strip the inconsequential, keep the essential. Use real user research to decide what's "inconsequential" — cut by data, not by taste. If a thing doesn't help solve the user's problem, it's noise.
5. Reuse familiar paradigms — don't reinvent the wheel. Borrow established patterns (hamburger menu, standard landing/pricing layouts) so users spend zero learning budget. Conventional ≠ lazy; recognizable is faster.
6. Lean on a design system / known visual language (Material, Apple HIG, your own tokens) for consistency at scale; reserve novelty for where it actually differentiates.
7. Make a mood/vision board first. Study how others solved the same problem-and-solution set before drawing — convention is discovered by research, not guessed.
8. Watch iconography across cultures. Icons carry meaning only by shared convention (emoji succeed/fail this way). Don't assume a glyph reads the same everywhere; pair ambiguous icons with labels.
9. Add white space to create focus. Space around an element isolates it from its neighbors so the eye can land on it; generous space around a button/CTA makes it easier to find and tap.
10. Guard against OVER-simplification. Simplicity is a balance between reducing noise and hiding things the user needs — hide too much and you obfuscate. Don't bury an essential action to look clean.
11. Apply the 3-5 tap test. A user should reach the standard/primary action (why they came) within three to five taps/clicks. If it takes more, the IA is too deep.

## Build checklist (use when reviewing a screen)
- [ ] Top 1-2 user jobs are immediately visible; secondary stuff is behind a menu or contextual?
- [ ] Primary action reachable in 3-5 taps/clicks?
- [ ] Every visible element earns its place (helps solve the user's problem), or is it noise?
- [ ] Reusing a known pattern instead of inventing a new one — and any custom icon has a label?
- [ ] White space isolates the key element / CTA so the eye lands on it?
- [ ] Complex info revealed in staged pieces, not dumped all at once?
- [ ] Not so stripped that an essential action got buried (over-simplification)?

> Ties to our experience: 02b is a staged scroll-journey (water -> space -> sun) — rule 3 (progressive disclosure) is literally its structure, and the matte stacked-blur glass UI lives or dies on white space (rule 9) keeping each section legible over a busy WebGL background.
