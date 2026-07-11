---
technique: Site-archetype layout patterns (SaaS / dashboard / e-commerce / portfolio / service)
section: web-design
source: figma-resource-library/ai-website-examples.md
tags: [layout, landing-page, dashboard, ecommerce, portfolio, hero]
apply-when: choosing the structural skeleton + hero treatment for a new site, before you touch visual style
---

# Site-archetype layout patterns — applied rules

Core idea: every site type has a proven structural skeleton. Pick the archetype first, lift its skeleton, then differentiate with palette/type/motion — never the other way around. Each pattern below = a reusable structure with a clear "use when".

## The reusable patterns (each = a build decision)

1. **SaaS conversion landing** — Lead with a high-contrast CTA above the fold (demo/trial), ONE floating product asset for interest, feature blocks in a bento/8px grid below, FAQ accordions at the bottom to keep the page clean. Use when the goal is sign-ups and the product is software. Avoid: more than one hero image competing with the headline.

2. **Bento + glassmorphism tech grid** — Dark charcoal background, layered glass icons, modular panels snapped to an 8px grid; tune corner radius to set tone (sharp = technical, soft = welcoming/corporate). Use for AI/agency/dev-tool sites that must feel technical and scannable. Avoid: misaligned panels — the grid math is the whole effect.

3. **Glass-effect hero for "premium/executive"** — Backdrop-blur hero + bold oversized type, validated in BOTH light and dark mode. Use when selling high-end strategy/consulting and for large multi-page IA where you must hold layout logic consistent from homepage to deep subpages. Avoid: glass that only works on one background — test both modes.

4. **Data-dense dashboard** — Lead with big-picture stat cards, then drill into tables/feeds/graphs; use a consistent color-coded tag system for status (e.g. red = at-capacity/urgent), a sticky sidebar for nav between overview and analytics, and top-row dropdown filters so users narrow data before reading it. A monochromatic scheme makes a heavy dashboard feel cohesive. Use when the screen must stay legible under a full data load. Pressure-test hierarchy with realistic (not empty) data — confirm primary buttons stay the focal point on a packed screen.

5. **E-commerce grid + strong hero** — Organized product grid (clear photo, price, star rating), with a hero that establishes brand before the orderly grid. Each card carries the essentials on the thumbnail (price, key specs); add comparison/affordance tools (price comparison, payment calculator, price-history sparkline) inline so the shopper never leaves the page. Use for any catalog/marketplace. For high-ticket items, let large photography sell the lifestyle and add generous spacing per item.

6. **Single-product guided tour** — Moody dark theme, 3D/floating hero animation, scroll-driven callouts explaining the hardware, interactive color picker. Use when one premium product needs motion to feel like a guided experience rather than a spec sheet.

7. **Portfolio = split/centered hero + modular scannable sections** — Headshot beside a bold headline (or centered hero), card-based skill/history sections, sticky nav, embedded contact form at the end. Pill tags for skills (optionally color-coded by category) and an embedded contact form so the visitor can act the moment they stop scrolling. Use for any personal/professional portfolio; lean editorial (cinema-scale hero image, wide margins) when the work itself is the visual.

8. **Service / public-sector "find-the-answer" layout** — Dependable palette (royal blue/white, or high-contrast black + bright accent for emergencies), CTA-first hero, service grid broken into icon + checklist blocks, persona-based cards routing distinct groups, contact form embedded on every page. For large gov portals: prominent search, nested menus, well-mapped footer, live news/agenda widgets. Use when users arrive needing one specific answer fast.

## Cross-cutting moves worth stealing
- High-contrast CTA as the single focal point; everything else recedes.
- One feature accent per section (gradient header, sparkles, glow ring) — not five.
- Validate light AND dark mode as a design check, not an afterthought.
- Color-coded status tags wherever state matters (orders, occupancy, priority).
- Embed the contact form in-page (often per-page) instead of a separate "Contact" route.

## Build checklist (tick while applying)
- [ ] Archetype chosen first; skeleton lifted before any styling decisions
- [ ] Exactly one high-contrast CTA owns the fold; no second image fighting the headline
- [ ] Bento/grid panels actually align to an 8px grid (no eyeballed offsets)
- [ ] Dashboard hierarchy pressure-tested with realistic full data, not empty placeholders
- [ ] Status/state uses a consistent color-coded tag system
- [ ] Glass/blur and the whole layout verified in both light and dark mode
- [ ] One accent feature per section — restraint over piling on effects
