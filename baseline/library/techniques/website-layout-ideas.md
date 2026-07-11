---
technique: Website layout patterns (page-structure archetypes)
section: web-design
source: figma-resource-library/website-layout-ideas.md
tags: [layout, grid, hero, visual-hierarchy, responsive, web-design]
apply-when: choosing the overall page skeleton for a new site/section — match the archetype to content type and the natural eye-scan path before placing anything
---

# Website layout patterns — applied build decisions

Core idea: layout is information architecture, not decoration. Pick the page skeleton FIRST from the content type and the eye-scan path, then place hierarchy on top. Two levers govern every choice below: the natural eye pattern (Z / F / upper-left) the visitor will use, and visual weight (size + color + contrast) that tells them where to look. Each pattern is a reusable skeleton with a "when to use" — pick what fits the content and skip the rest; archetypes can stack (e.g. magazine = grid + hero).

## Reusable patterns (each = a build decision + when to use)

1. **Anchor to an eye pattern before placing anything** — Decide the dominant scan path up front and put the most important element where the eye already goes: top-left for nav/CTA/search, Z-path for sparse hero pages, F-path for text-dense pages. Avoid burying the primary action off the path. *When:* always — this is the gate the skeleton passes through.

2. **Grid layout** — Organize content into rows/columns for scan-ability and automatic responsiveness. Pick the grid variant by content: **single-column** for long-form text/blogs; **column grid** (3-12 vertical columns) for mixed text+image+interactive pages needing alignment and consistent spacing; **modular grid** (blocks) for product/image-heavy e-commerce that needs per-cell flexibility. *When:* default for blogs, e-commerce, and any content set that must reflow across screen sizes.

3. **Split-screen (50/50)** — Divide into two equal halves to show two things at once — image vs. text, form vs. value props, compare vs. contrast. *When:* sign-up/registration and product/landing pages where keeping the offer and the action in one view speeds the decision (Dropbox-trial pattern).

4. **Asymmetrical split** — Same two-section idea but unequal proportions; the larger panel pulls the eye, so put the key message/CTA there. Use uneven weight deliberately to create more interest than a symmetric split. *When:* landing/product pages showcasing distinct use cases, each with its own image + CTA (FigJam-page pattern).

5. **Full-screen visual** — One image/design fills the viewport as background; text and buttons overlay it. Captures brand essence at a glance. Hard requirement: maintain text contrast and button findability over the image — choose/treat the background so overlaid content stays legible. *When:* homepages and minimalist landing pages where one image carries the brand story.

6. **Side-scrolling (horizontal)** — Content flows left-to-right instead of top-to-bottom; good for browsing collections/categories without a long vertical page. Because default scrolling is vertical, add explicit affordances (arrows, partial peek of the next item) so the sideways move feels natural. *When:* category rows and image galleries (Netflix-row pattern) — never as the primary page-scroll without cues.

7. **Card layout** — Square/rectangular cards, each an image/icon + short summary, for scannable browsing of many comparable items. Reveal extra detail on hover and the full record on click. *When:* product grids, blog indexes, and galleries where users compare options at a glance (keeps siblings visually consistent — a similarity/grouping win).

8. **Magazine** — Grid-based editorial structure: one large hero image + prominent headline for the lead story, remaining content flowing below organized by topic/recency. *When:* news sites and publications with many stories at mixed priority (Wired pattern).

9. **Gallery** — Visuals carry the page; text recedes, images get equal space in the grid. *When:* portfolios and image galleries where the work should speak (Dribbble pattern) — keep chrome and copy minimal.

10. **Zig-zag (Z-flow)** — Alternate image/text blocks down the page so the eye zigzags left-right-down, with white space pacing the journey toward a single end CTA. *When:* landing/product/home pages that tell a sequential story leading to one action (Headspace free-trial pattern).

11. **F-pattern** — For text-heavy pages, front-load each section: strong headline across the top, key points down the left edge, supporting images inline so a scanner grasps the gist without reading every word. *When:* long-form content, blog posts, and nav-heavy pages (Zoom-blog pattern).

12. **Interactive** — Buttons, sliders, scroll effects, zoom/explore, try-ons, quizzes invite participation for memorable, higher-converting experiences. Keep controls simple with clear instructions so everyone can use it. *When:* gaming, e-commerce (virtual try-on), and educational sites (PamPam map-explore pattern).

13. **Animated** — Motion graphics, scroll transitions, hover/click animations add life and tell the brand story. Keep movement light to protect load time — a little goes a long way; never let animation block content or tank performance. *When:* homepages/landing pages showing a product in action (Atlassian pattern).

## Build checklist
- [ ] Dominant eye pattern (Z / F / upper-left) chosen, and the primary CTA sits on that path?
- [ ] Skeleton archetype matched to content type (text -> single-column/F; products -> modular grid/cards; story -> zig-zag; visuals -> gallery)?
- [ ] Visual weight (size/color/contrast) makes the one key element clearly heaviest?
- [ ] Grid is responsive and reflows cleanly phone -> desktop (rule of thirds for placement)?
- [ ] White space balanced — page reads uncluttered, groupings clear?
- [ ] Overlay/animation/horizontal-scroll patterns keep text legible, perform well, and give scroll cues?
- [ ] Tested with a real person to catch usability/navigation issues, then tuned?

> Ties to our experience: our flagship 02b IS a layout archetype taken to the extreme — a zig-zag/animated scroll-journey (water -> space -> sun) with sticky-pinned responsive sections and hardware-adaptive performance tiers, exactly the "keep animation light / protect load time" discipline above. And the "make visual weight tell the eye where to look" rule is the same hierarchy discipline our PAIN.md bugs broke — the per-cell stagger that read as crooked (common-fate violation) and the repos-table header misalignment (broken column similarity/continuity).
