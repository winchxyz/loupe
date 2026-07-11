---
technique: Business website build process (structure → wireframe → design → build → iterate)
section: web-design
source: figma-resource-library/how-to-make-a-business-website.md
tags: [web-design, information-architecture, layout, page-types, process, accessibility]
apply-when: scoping or building a multi-page business/marketing site and deciding what pages, layouts, and elements it needs
---

# Business website build — applied rules

Core idea: a business site is a storefront, not a portfolio. Work order is fixed — structure before pixels, pixels before code, code before "done." Each page earns its place by serving one user goal. Below, each step is a build decision, not a phase to admire.

## The 5 steps (each = a build decision)
1. Structure first — derive the sitemap from a written user persona (needs/behaviors/goals), NOT from your org chart. Every page gets one clear purpose that maps to a user goal; if a page has no goal, cut it.
2. Wireframe to validate IA, not to decorate — choose fidelity by intent: low-fi (sketch) to test flows/core features fast, mid-fi to pin down UX + real UI elements (buttons, nav), high-fi only to lock the final design before prototyping. Don't jump to high-fi while the flow is still unsettled.
3. List essential elements per page before styling — CTA buttons, search, shopping/content blocks. Trace them against a user-journey map so every touchpoint has the element it needs; a page missing its CTA is a dead end.
4. Pick the layout per page from its job — grid for product galleries / e-commerce; split-screen for landing or sign-up (side-by-side comparison); don't reuse one template for pages with different goals.
5. Iterate after launch, don't ship-and-forget — soft launch first, then heat-mapping (clicks/mouse) + A/B on conversion elements + surveys; prioritize updates by what the data says, not taste.

## Page recipes (build the ones the business needs)
- **Homepage** — communicate the brand message above all; hero image + dynamic background + subtle animation + clear CTA + nav. (ref: Mosey)
- **About** — build trust via storytelling: team photos, bios, awards, social links. (ref: Dropbox)
- **Service/Product** — drive the purchase: clear CTA + high-quality product shots + compelling copy; add price-comparison charts or testimonials to de-risk the decision.
- **Contact** — remove friction: explicit contact info + live chat or interactive map.
- **FAQ** — accordion-style Q&A + search bar + links to help articles; keep answers concise, link out for depth. (ref: Square pricing page)

## Layout / visual decisions
- **Color** — pick 2–3 primary brand colors + a few secondaries for accents; reserve a bold/high-contrast color specifically for CTAs and buttons so the action element wins the hierarchy.
- **Typography** — choose for readability first, brand personality second; drive hierarchy with consistent sizing across heading / subheading / body. (ref: Stripe)
- **Imagery** — high-quality custom photography, illustration, iconography; use product shots to show the tool actually working, not stock filler. (ref: UserJot)
- **UI elements** — keep buttons, menus, inputs consistent across the site (a design system / reusable components); add micro-interactions (hover, subtle motion) for engagement, not noise.
- **Interactivity** — animations, scroll triggers, quizzes earn their place only when they elevate static content; default to restraint.

## Build / dev decisions
- Prototype the risky flows (checkout, search-and-compare) before coding to surface unclear CTAs and friction early.
- Baseline stack: HTML (content) + CSS (style) + JS (interactivity); reach for Python/Node only when dynamic/complex functionality demands a backend.

## Build checklist (tick while applying)
- [ ] Sitemap traced from a written persona; every page maps to one user goal (no orphan pages)?
- [ ] Wireframe fidelity matches intent (not high-fi while the flow is unsettled)?
- [ ] Each page's essential elements (CTA/search/content) present and on the journey map?
- [ ] Layout chosen per-page from its job (grid vs split-screen), not copy-pasted?
- [ ] CTA color is the highest-contrast accent; type hierarchy consistent across H/sub/body?
- [ ] Responsive across screen sizes; WCAG basics (keyboard nav, alt text, color contrast) met?
- [ ] Post-launch loop wired: soft launch → heat-map / A/B / surveys → prioritized updates?
