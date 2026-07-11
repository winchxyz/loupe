---
technique: Web design & development fundamentals (the five basics + ship process)
section: web-design
source: figma-resource-library/web-design-and-development.md
tags: [layout, interactivity, performance, accessibility, process, responsive]
apply-when: starting or auditing any site build — to sanity-check that layout, content, interactivity, visuals, and functionality are all covered, not just the pretty parts
---

# Web design & development fundamentals — applied rules

Core idea: a site is design (look/feel) AND development (it actually works). A gorgeous build that's slow, inaccessible, or unresponsive fails. Treat the five basics as a coverage map — each is a place a build silently breaks.

## The five basics (each = a build decision)
1. **Layout & navigation** — start from semantic HTML + a grid; let white space do the grouping; label nav in plain words; make every layout responsive so content reflows across devices. Avoid div-soup that looks fine but reads as flat structure to a crawler or screen reader.
2. **Engaging content** — write one clear CTA per view, not five competing ones; keep content fresh/dynamic where the back end allows; personalize only when it adds value. Avoid a wall of static copy with no obvious next action.
3. **Interactivity** — use micro-interactions (hover/scroll/state feedback) and motion to *guide* the eye, and reach for 3D/WebGL (Three.js) only when it earns its load cost. Avoid gimmick interactivity that distracts from the task.
4. **Visual appearance** — optimize every image (format/size/lazy-load); pick readable type with deliberate pairings; enforce one clear visual hierarchy and a consistent design-system/token set. Avoid heavy hero images and ad-hoc one-off styles.
5. **Functionality** — budget page speed up front; choose SSR vs CSR per page intent (content/SEO → SSR; app-shell → CSR); build accessibility in from the start (contrast, keyboard nav, alt text); monitor Core Web Vitals as a real gate, not an afterthought.

## Reusable process patterns (when to use each)
- **Discovery → wireframe → UI → front-end → back-end → test → iterate.** Use the full chain on any non-trivial site; don't jump to high-fidelity UI before goals and site structure are mapped.
- **Low- then high-fidelity prototype.** Use low-fi to settle structure cheaply; only commit visual polish once the skeleton tests well.
- **SSR vs CSR decision.** Reach for SSR when content must be crawlable / fast first-paint matters; CSR for interaction-heavy app shells behind auth.
- **Mobile-first responsive.** Design the narrow layout first, then enhance up — it's also the stated SEO-friendly default.

## Build checklist
- [ ] Semantic HTML + grid + meaningful white space (not div-soup)?
- [ ] Exactly one clear primary CTA per view?
- [ ] Every image optimized; type readable with intentional pairings; one hierarchy?
- [ ] Responsive verified at real breakpoints, not just the desktop frame?
- [ ] Accessibility from the start: contrast, keyboard nav, alt text, focus order?
- [ ] SSR/CSR chosen deliberately per page; Core Web Vitals measured, not assumed?
- [ ] 3D/motion earns its load cost on the target hardware?

> Ties to our experience: this maps straight onto 02b — Three.js/WebGL (basic 3 + the 3D trend) carried by hardware-adaptive perf tiers and dynamic resolution (basic 5, Core Web Vitals). Our PAIN.md verification gaps (trusting a settled frame, checking the wrong CSS property, a clipped screenshot, an untested mode) are exactly the "responsive verified at real breakpoints, not just the desktop frame" checkbox failing.
