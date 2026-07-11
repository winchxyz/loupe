---
technique: Website structure (information architecture)
section: web-design
source: figma-resource-library/website-structure.md
tags: [information-architecture, navigation, layout, seo, scalability]
apply-when: deciding page model, nav, and link/URL hierarchy before building or restructuring any multi-page site or scroll-journey
---

# Website structure — applied rules

Core idea: structure is how content is grouped and connected. Decide it FIRST — it drives navigation, SEO crawlability, content-update sanity, and growth headroom. Pick a page model, then wire the components (nav, links, URLs) to match it.

## Pick a structure model (each = a build decision)
1. Hierarchical / tree — default for content that splits into categories. Home → main categories → subcategories. Choose this for e-commerce, business, or informational sites. Cap depth: too many subcategory levels buries content behind clicks — keep important pages ≤3 clicks from home.
2. Linear / sequential — force a fixed order with next/previous only. Choose for onboarding, tutorials, courses, multi-step forms. Lean on storytelling + one clear CTA + visual hierarchy per step. Avoid for browse/discovery — it has no lateral escape.
3. Matrix / web — let the user pick their own path via dense cross-links; home acts as a hub. Choose for knowledge bases, encyclopedias, portfolios, interactive platforms. Guard against "lost user": still give orientation cues (breadcrumbs, active-section state).
4. Database / dynamic — generate pages from data via filters/search instead of a fixed tree. Choose for large product catalogs, news, big CMS. Organize around filter/search facets, not hand-authored menus.
5. Hybrid — combine the above; most real sites do. E.g. hierarchical category tree + matrix-style "related" links. Match the model to each content zone (courses = linear, resources = hierarchical). Plan the seams deliberately so the mix doesn't confuse.

## Wire the components to the model
6. Homepage = the anchor: it states what the site offers and routes to the most important areas. Treat it as the entry to the whole structure, not just another page.
7. Main nav = the spine: clear, consistent, identical across devices. Group related pages; use concise, logical, descriptive labels (not clever ones).
8. Categories: one distinct theme per category; they ARE the scannable hierarchy for both users and crawlers.
9. Content pages: each lives in exactly one right place so "where am I / what's next" is always answerable. Include foundational About + Contact for trust/completeness.
10. Internal links: link key pages naturally from supporting content — they guide users, signal hierarchy to search engines, and pass link equity. No orphan pages (nothing should be unreachable from any link).
11. Footer: secondary nav + contact + social + sitemap. Don't waste it — it's a real second navigation surface, not decoration.
12. Breadcrumbs: horizontal trail near the top (Home → Category → Subcategory → Page), every step clickable, recognizable labels. Use whenever depth ≥2 so users can backtrack without the browser button.
13. URLs: readable keyword slugs that mirror the hierarchy. Prefer `/blog/web-design/website-structure-tips` over `/page?id=123&cat=45`. Keep short, hyphen-separated, consistent.

## Avoid the four structure failures
14. Difficult navigation → limit menu items, recognizable labels, important pages easy to reach, zero orphan pages, user-test friction points.
15. Broken/dead links → routine audits (Search Console / link checkers); fix or remove 404s promptly — they read as "unmaintained" to users and crawlers.
16. Repetitive/duplicate content → consolidate so each page has unique value; if duplication is unavoidable, set a canonical to name the primary version.
17. Poor responsiveness → responsive framework that adapts to screen size and input; test layouts, menus, and content on real device widths (Chrome → inspect → device toolbar).

## Build checklist (tick while structuring a site)
- [ ] Chosen a primary model (tree / linear / matrix / dynamic / hybrid) that fits the content, not by default
- [ ] Important pages reachable in ≤3 clicks; no orphan pages
- [ ] Main nav consistent across all breakpoints, with concise descriptive labels
- [ ] Breadcrumbs present wherever depth ≥2, every step clickable
- [ ] URLs are readable keyword slugs that mirror the hierarchy
- [ ] Internal links connect key pages; footer carries real secondary nav
- [ ] Audited for dead links, duplicate content (canonicals), and tested on real device widths

> Ties to our experience: 02b is a single linear/sequential scroll-journey (water → space → sun) — rule 2 is the live model, so each pinned section needs one clear CTA and forward momentum, while rule 17 maps directly to our deferred mobile/perf backlog (test real device widths before calling responsiveness done).
