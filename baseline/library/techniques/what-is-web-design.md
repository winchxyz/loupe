---
technique: Web design fundamentals (form + function balance)
section: web-design
source: figma-resource-library/what-is-web-design.md
tags: [layout, ux, visual-hierarchy, responsive, performance, navigation]
apply-when: scoping or reviewing a whole site/page before diving into pixels — to make sure form AND function are both covered
---

# Web design fundamentals — applied rules

Core idea: web design = balancing strong visuals (form) with sound usability (function). Users form an opinion in ~50ms, so the first paint must read as intentional. Treat the five fundamentals below as a coverage checklist, not a phase order — skip one and the build has a hole.

## The 5 fundamentals (each = a build decision)
1. Content first — decide what the user actually needs (headers, body text, images, CTA buttons) BEFORE choosing a layout. Don't design a frame and then pour content into it; let the content's job drive the structure.
2. Layout — wireframe the information hierarchy in plain boxes/headings first, then prototype the interaction flow. Validate flows on the prototype, not after build. Arrange for scan-ability and accessibility, not decoration.
3. Navigation — pick ONE nav pattern that gets users to their goal fastest (menu, bar, breadcrumb, slider). Validate that nav actually reaches every key destination; a pretty nav that hides a path is a defect.
4. Visual style — drive color, imagery, and typeface from a single style guide so siblings stay consistent. Bake in hierarchy, balance, movement, and white space deliberately — white space is a tool, not leftover.
5. Function — treat performance as a design constraint, not an afterthought. Budget load time and design mobile usage in. Concrete stake: a 1s-loading ecommerce page converts ~2.5x better than a 5s one — so an animation/asset that costs seconds is a design decision with a revenue cost.

## Best-practice rules (do/choose/avoid)
- Design FOR real users — start from user research, not your own taste; it's the generative first step.
- Choose mobile-first when >50% of traffic is mobile (the common case) — design the smartphone layout first, scale up.
- Apply responsive layout on a flexible grid so pages reflow to any screen size — don't ship a fixed desktop frame.
- Use interactive elements (animation, video) to GUIDE attention, not just to decorate — every motion should direct the eye.
- Design for readability: vary font size, weight, and pairing so the page is scannable at a glance.
- Build accessible, shareable, user-centric content — it doubles as SEO (mobile-friendly + responsive ranks better).
- Test and refine with real user testing BEFORE translating the design to HTML/CSS/JS — cheaper to fix in the prototype.

## Build checklist (tick while scoping/reviewing a page)
- [ ] Content defined by user need before any layout was drawn?
- [ ] Wireframe → prototype → flow validated before pixel polish?
- [ ] One nav pattern chosen, and every key destination reachable from it?
- [ ] Color/type/imagery all sourced from one style guide (siblings consistent)?
- [ ] Load-time / mobile budget treated as a design constraint (does any asset cost seconds)?
- [ ] Responsive on a flexible grid, mobile-first if traffic warrants?
- [ ] User-tested before handing to code?

> Ties to our experience: on 02b the "function" fundamental is exactly why we built hardware-adaptive performance tiers + dynamic resolution scaling — a cinematic WebGL journey only earns its visuals if it still hits a load/frame budget on weaker hardware. The 50ms-first-impression and load-time-vs-conversion stakes are the design argument behind that work.
