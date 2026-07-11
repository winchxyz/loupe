---
technique: One-page website (single-scroll site) — build decisions
section: web-design
source: figma-resource-library/one-page-website.md
tags: [layout, one-page, scroll-narrative, sticky-nav, cta, responsive]
apply-when: building a focused single-scroll site — product launch, campaign, event, portfolio, or small-business presence
---

# One-page website — applied rules

Core idea: a one-page site is a single scrollable page where all content lives in sequential sections. Its power is a GUIDED NARRATIVE — the user is walked through one journey toward one action, not handed a menu. Treat the scroll itself as the structure. This is the right form when the message is concise (launch, campaign, event, portfolio, small business); it is the wrong form for large catalogs, keyword-heavy SEO plays, or deep navigation.

## Decide first: is one page the right form?
1. Choose one-page when content is small/focused and you want ONE guided path to ONE primary action. Choose multi-page when you have lots of products, extensive info, e-commerce, or need to rank for many keywords.
2. Accept the tradeoffs up front: limited multi-keyword SEO, risk of overwhelm if you cram too much, and slow loads if assets aren't optimized. If any of those is a dealbreaker for the brief, don't force one page.

## Structure the scroll as a narrative (build decisions)
3. Plan before you design — even a one-pager needs it. Lock the single goal (lead-gen / promotion / brand awareness) and the audience BEFORE laying out sections; let those decisions drive content and visuals.
4. Order sections as a flow, not a pile: Header → Hero → Content sections → CTA → Footer. Each section should hand the eye down to the next; the narrative unfolds as the user scrolls.
5. Header: strong visual hierarchy + clear navigation up top. Hero: one compelling headline + supporting subheading — say what this is and why it matters in the first viewport.
6. Content sections: chunk into logical, easy-to-read blocks, each with one job. Don't let a section try to do two things.
7. Footer: contact info, social links, copyright — the practical close.

## CTAs and navigation
8. Make every CTA count and make them visually stand out — repeat the primary CTA in the header AND footer so it's always reachable. Use actionable language that points to ONE clear action; don't dilute with competing asks.
9. Add sticky navigation with jump links to in-page sections. A persistent nav bar keeps "time to value" low — the user can leap to what they want without hunting. (This is the one-page substitute for a real menu.)

## Layout & visual decisions
10. Embrace simplicity: clean minimalist layout, generous white space, limited color palette. White space is a tool — it builds hierarchy, improves readability, gives the eye a break, and stops the page feeling cluttered.
11. Build mobile-first / responsive. A single page makes cross-device consistency easier — exploit that; verify the layout adapts seamlessly at every breakpoint.
12. Drive the eye with hierarchy: font size, color contrast, and spacing. A proven hero recipe — large centered headline, surrounding white space, framing imagery — makes the key message unmissable.
13. Use color with intent (color psychology): pick accents for the emotion they carry (e.g. red → excitement/appetite for food/entertainment) and keep them consistent with brand voice and tone throughout.

## Build & ship details
14. Write tight copy — less is more on one page; clear and concise beats clever and long.
15. Use high-quality, high-resolution imagery to break up text — but compress it so file size doesn't sacrifice load speed.
16. Optimize loading times: compress images and code, then measure with a tool like Google PageSpeed Insights and fix what it flags. (One-pagers load everything at once, so weight matters more.)
17. Do on-page SEO even on one page: work target keywords naturally into headings, body, title tag, and meta description.
18. Before launch, test across devices/browsers, check for broken links and typos (they cost credibility), then publish. After launch, wire up analytics to learn which sections hold attention and where users click.

## Build checklist (use when shipping a one-pager)
- [ ] Single stated goal + audience locked before layout?
- [ ] Sections ordered Header → Hero → Content → CTA → Footer as a downward narrative?
- [ ] Primary CTA stands out and repeats (header + footer), one clear action?
- [ ] Sticky nav with working jump links to each section?
- [ ] White space + limited palette + clear visual hierarchy (size/contrast/spacing)?
- [ ] Mobile/responsive verified at every breakpoint?
- [ ] Images compressed and page weight checked on PageSpeed Insights?
- [ ] Links, typos, and cross-browser behavior verified before publish?

> Ties to our experience: 02b/TESQ IS a one-page scroll-narrative (water → space → sun) — rule 4 (scroll-as-structure) and our sticky-pin sections are the same instinct. Rule 16 (measure page weight, fix what the tool flags) maps to our hardware-adaptive perf tiers + dynamic resolution scaling. Rule 18 (verify across devices/breakpoints before shipping) is exactly the PAIN.md verification-coverage theme — trusting a settled frame or leaving a mode untested is where we've been burned.
