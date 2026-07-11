---
technique: Mobile website design (mobile-first build rules)
section: web-design
source: figma-resource-library/mobile-website-design.md
tags: [mobile, responsive, layout, touch, accessibility, performance]
apply-when: building or adapting any site for phones — single-column layouts, touch targets, mobile nav, and load-time budgets
---

# Mobile website design — applied build rules

Core idea: mobile is not "desktop, shrunk." The user is on the move, skimming, one-thumbing. Design for context (quick answers, interruptions, one column, fat fingers, flaky network), then let the layout scale UP to desktop — not the reverse.

## The rules (each = a build decision)
1. **Single-column by default.** Stack content vertically; reserve multi-column for desktop breakpoints. One reading path, no horizontal scan on a narrow viewport.
2. **Touch targets ≥ 44×44px, with gaps.** Size every button/link/form control to a 44px minimum and space them so an adjacent target can't be mis-tapped. Spacing between targets is part of the target.
3. **Primary CTA above the fold, color-popped.** Put the main action near the top so the next step reads instantly without scrolling. Give the CTA a color that contrasts the rest of the scheme — make it the one thing that breaks the palette.
4. **Cut text; keep font legible.** Ship only the most important copy, scannable, with a font size that stays clear at arm's length on a small screen. Choose web-optimized, clean families — **Roboto, Inter, or Montserrat** — for body/UI. (For a deliberately bold accent, a readable mono like **Martian Mono** works.) Cap variety at ~3 legible fonts max.
5. **Collapse nav behind a hamburger; keep labels short.** Save space with a hamburger that opens a short, plain-language list. Avoid long forms and button clutter. Prefer a sticky/fixed top bar so key pages stay one tap away while scrolling.
6. **Logo links to home; add breadcrumbs.** Wire the logo to `/` — the expected escape hatch, especially once nav is tucked away. Breadcrumbs show location and cut bounce.
7. **Add a "back to top" button.** Mobile pages are long; give a fast return to the top so deep-scroll pages don't trap the user.
8. **No pop-ups.** They block content and break flow on a small screen. Use inline banners or in-line messages instead.
9. **Budget load time hard.** Compress images, limit animations, strip anything that stalls the page. Use **JPEG** for photos, **PNG** for transparent graphics, and **WebP/AVIF** for large hero/full-bleed imagery (smaller files, same quality).
10. **Horizontal-scroll wide content, don't shrink it.** For tables/wide data, wrap in an overflow `<div>` and let it scroll sideways rather than cramming columns — keeps it compact, interactive, and fast.
11. **Use visual hierarchy to make long copy survive a small screen.** When you can't cut more text, break it with clear headers, scannable body, and alternating section background colors so long blocks feel manageable.
12. **Full-bleed imagery is fine — pair it with white space.** Bold edge-to-edge photos read well on phones if generous whitespace keeps the layout from feeling dense; let images double as tappable entry points where it fits the brand.
13. **Accessibility is non-negotiable.** Strong color contrast, readable fonts, screen-reader-processable labels, large touch targets, keyboard-friendly navigation, and alt text. It helps everyone, not just assistive-tech users.
14. **Verify on real devices and device-mode.** Don't trust the canvas — test in Chrome DevTools Device mode (touch + sizes) and on real phones. Responsive means one URL whose layout reflows by viewport, not a separate `m.` site.

## Build checklist (tick while building/reviewing a mobile view)
- [ ] Content is a single column; primary CTA sits above the fold and color-pops.
- [ ] Every tappable thing is ≥44×44px with enough gap to prevent mis-taps.
- [ ] Nav collapses to a hamburger with short labels; logo links home; "back to top" present on long pages.
- [ ] No pop-ups; interruptions are inline banners instead.
- [ ] Images compressed and in the right format (JPEG/PNG/WebP/AVIF); animations limited; load time checked.
- [ ] Wide tables scroll horizontally in an overflow container rather than shrinking.
- [ ] Contrast, alt text, labels, and keyboard nav pass; verified in DevTools Device mode AND on a real device.

> Ties to our experience: 02b's mobile/perf work is on BACKLOG.md, and our PAIN.md is full of verification-coverage misses (trusting a settled frame, checking the wrong CSS property, a clipped screenshot, leaving a mode untested) — exactly the trap rule 14 guards against. The format/compression budget (rule 9) and "no shrinking, scroll instead" (rule 10) line up with our hardware-adaptive perf-tier + dynamic-resolution approach.
