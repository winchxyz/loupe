---
technique: Web design statistics — defaults backed by data
section: web-design
source: figma-resource-library/design-statistics.md
tags: [web-design, accessibility, performance, conversion, layout, mobile]
apply-when: setting baseline layout/perf/accessibility defaults for a marketing site, landing page, or checkout, and resolving "should I do X" with the convention most sites actually use
---

# Web design statistics — build decisions from the data

Core idea: these numbers are not trivia — each one resolves a concrete "which way should I build this" question. Treat the dominant convention as the safe default and the failure stat as the thing to verify isn't happening on your own page.

## Conventions to default to (the 90%+ patterns)
1. Logo top-left — 93% of sites anchor the logo in the top-left and it links home. Do this unless you have a deliberate reason; novelty here just costs orientation.
2. Horizontal header nav — 90% use a standard horizontal nav bar. Use it as the default primary nav; reserve exotic nav (radial, hidden, scroll-jacked) for sites where exploration IS the content.
3. Usability over aesthetics — 80.3% of businesses rank usability as the single most important factor, above looks. When the two trade off, choose the legible/clickable option; do not sacrifice task success for a visual flourish.
4. Speed is a ranking and engagement gate — 92% of top-ranking pages load under 3s. Treat sub-3s as a hard budget; for a heavy WebGL/animation site, that means perf tiers, lazy loading, and a fast first paint, not "ship it and hope."

## Failure modes to actively avoid (the stats that are warnings)
5. Low-contrast text — 79.1% of home pages fail here; it's the #1 accessibility failure on the web. Verify computed contrast ratios (WCAG AA: 4.5:1 body, 3:1 large) — don't eyeball them, and re-check after any theme/overlay change.
6. Missing form labels — 34.2% of pages ship inputs with no label, breaking screen readers. Every input gets a real associated `<label>` (not just a placeholder); audit before shipping any form.
7. WCAG failures by default — 94.8% of top sites fail basic WCAG 2. Assume your page fails until checked; bake accessibility in at the design phase (only 27% of orgs do, which is why the failure rate is this high).
8. Hero carousels/sliders — 42% still use them despite consistently poor usability test results. Avoid auto-rotating hero sliders; pick one strong hero message instead of cycling several weak ones.
9. Request/script bloat — desktop pages average 71 requests and now ship more JS (24 scripts) than images (18), which drives layout shift and stutter. Budget requests; defer non-critical JS; reserve space for media to kill layout shift (CLS).

## Mobile and conversion defaults
10. Design mobile-first — 51.7% of traffic is mobile. Build and verify the mobile layout as a first-class case, not an afterthought scaled down from desktop.
11. Front-load content — average mobile scroll depth is only ~45% of the page. Put the core message and primary CTA in the first ~45% / above the fold; assume the bottom half is unseen on mobile.
12. Strip the checkout — average US checkout has 23.48 form fields (≈2x the ideal) and cart abandonment is 70.22%. Cut every non-essential field; fewer, well-labeled inputs is the conversion lever.
13. Video for dwell time — 84% of marketers report video raised dwell time. A short hero/explainer video is a reasonable engagement bet when it doesn't blow the 3s/perf budget.
14. Color carries the sale — half of customers say they've chosen a brand primarily on color. Lock a consistent, accessible palette early; consistency builds the recognition and trust that closes.

## Build checklist
- [ ] Logo top-left + links home; standard horizontal header nav unless there's a real reason not to.
- [ ] Page loads under 3s on target hardware (perf tiers / lazy-load / deferred JS verified, not assumed).
- [ ] Text contrast meets WCAG AA (measured computed ratios, re-checked after overlays/theme changes).
- [ ] Every form input has an associated label; checkout trimmed to essential fields only.
- [ ] Mobile layout verified as its own case; core message + primary CTA in the top ~45%.
- [ ] No auto-rotating hero carousel; one strong hero instead.
- [ ] Request/JS budget checked; media has reserved space (no layout shift).
