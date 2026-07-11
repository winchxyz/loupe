---
technique: Frontend performance budgets and critical-path optimization
section: frontend-architecture
source: system-design.space/chapter/frontend-performance-architecture
tags: [frontend, performance, web-vitals, budgets, code-splitting]
apply-when: a page feels heavy/janky, or before shipping any interactive site that must stay fast on mid-range hardware
---

# Frontend performance architecture — applied rules

Treat performance as a **chain**, not a single fix: Request → HTML/CSS → JavaScript → Data → Rendering → Interaction. Find the link that owns the regression before optimizing. Measure with **real user monitoring (RUM)** — synthetic benchmarks lie about real-device cost.

## Set four explicit budgets and assign an owner to each
1. **Client code budget** — bundle size, hydration cost, third-party script impact. Budget third-party scripts *explicitly* against this.
2. **Rendering budget** — DOM updates and layout recalculations. This is the budget that matters for feeds, tables, and drag interfaces.
3. **Static-assets budget** — images, fonts, CSS, video previews — managed through a CDN strategy, not ad-hoc per screen.
4. **Interaction budget** — INP is driven by work done during clicks, typing, filtering, scrolling. Every handler spends from this budget.

For each key screen, write down target LCP / INP / bundle size / rendering cost, and name which feature or library owns each allocation. A budget with no owner gets blown.

## Concrete tactics
- **Code-split along user journeys, not technical entry points.** Rule of thumb: *"cut code at points where users shouldn't pay for the entire product immediately."* Splitting purely by route file misses where journeys actually diverge.
- **Virtualize long lists/tables/trees** — never render the full DOM for large collections; it causes memory pressure and layout thrashing.
- **Make assets a platform decision**: adaptive images, lazy-loading, modern formats (WebP/AVIF), CDN-level transforms. Assets must "enter the static-asset strategy, not land on screen by habit."
- **Critical CSS + load order drive LCP and visual stability** — get above-the-fold CSS inline/early; defer the rest.
- JS download + parse + execute must finish before the UI is interactive — shrinking and deferring JS is the highest-leverage INP fix.

## Build checklist
- [ ] Wire up RUM (LCP, INP, CLS) before optimizing anything
- [ ] Write a per-screen budget: LCP / INP / bundle / rendering cost, each with a named owner
- [ ] Code-split on journey boundaries; lazy-load below-the-fold and rarely-used features
- [ ] Virtualize any list/table/feed that can grow large
- [ ] Route all images/fonts through a CDN/asset pipeline with modern formats + lazy-loading
- [ ] Inline critical CSS; defer non-critical CSS/JS
- [ ] Account for every third-party script against the client-code budget

> Ties to our experience: this is the systems-level frame for 02b's perf-tiers backlog — instead of one "high/default" toggle, define explicit budgets per screen (the WebGL hero owns the rendering+client-code budget) and gate features against them. The "measure on real devices, degrade gracefully" framing matches our poster-fallback and dynamic-resolution approach.
