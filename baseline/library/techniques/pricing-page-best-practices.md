---
technique: Pricing page best practices (high-converting layout)
section: web-design
source: figma-resource-library/pricing-page-best-practices.md
tags: [pricing, conversion, layout, cta, saas, comparison-table]
apply-when: building or reviewing a pricing / plans / subscription page or any tiered-offer section
---

# Pricing page — applied rules

Core idea: a pricing page is a conversion funnel disguised as a layout. Every decision serves one job — move a hesitant visitor from "what does this cost?" to "I'll click." Optimize for fast scanning and reduced doubt, not feature completeness.

## Build decisions (each = a do/choose/avoid)

1. **Cap tiers at 3–4.** Avoid analysis paralysis — never ship 5+ visible plans. Order them lowest→highest commitment, left→right. Fewer than 3 fails to serve distinct buyer segments; more than 4 frustrates.
2. **Anchor the middle tier (decoy effect).** Surround the target plan with a cheap-feeling basic and an expensive-feeling premium so the middle reads as the rational choice. Mark it with a high-contrast "recommended" / "most popular" / "best value" badge.
3. **Write benefits, not specs.** Choose outcome copy over feature copy: "manages over 10,000 customers" not "10 GB storage"; "spot trends in your data" not "advanced dashboard"; "built-in integrations" not "API platform." List only 4–6 features per card, tied to real use cases.
4. **Avoid repeating feature lists.** Use "Everything in [previous tier], plus…" so higher cards only show their delta — keeps cards short and scannable.
5. **State price transparently.** Use whole numbers; put the unit ("/month", "/user", "/unit") directly next to the price. No hidden fees or surprise add-ons — surface "no hidden fees" / "cancel any time" as explicit reassurance copy.
6. **Billing toggle shows the saving.** For monthly/annual, use a toggle and display the annual discount on the annual side, visually tied (same accent color) to the primary CTA. Place the toggle near the tier it actually applies to, not floating ambiguously.
7. **Usage-based pricing → interactive selector.** For metered products use a slider / volume selector so users see how users/credits/projects change cost. Use "starts at" when a tier can scale up; swap price for "let's talk" on enterprise.
8. **Strong, explicit CTAs, repeated + sticky.** High-contrast, large tap targets. Copy says what happens next: "start for free" (free trial), "get started" (paid), "book a demo" / "talk to sales" (high-value/enterprise). One CTA per card, visible above the fold, repeated down the page, and a sticky CTA that stays in view on scroll.
9. **Put social proof next to the CTA.** Doubt peaks at the click — place customer logos, star ratings, short outcome-focused testimonials right where hesitation is highest, not in a distant section. Borrow trust from recognizable logos (incl. integration partners).
10. **Comparison table for the full breakdown.** Below the cards, give a scannable table: group features into labeled sections, order by what drives the buyer's decision, use checkmarks/icons/tooltips instead of paragraphs. Long tables get sticky category labels or accordion sections.
11. **Tooltips over inline prose.** Hide explanatory copy behind a small info icon ("i" / "?"). Use tap/click-triggered tooltips (NOT hover-only — touchscreens have no hover state). Use feature previews (screenshot/short animation) for advanced features that are clearer when seen.
12. **Mobile-first (≈64% of traffic).** Stack cards vertically with generous spacing (no zoom-to-read), swap tables for accordions, sticky headers + bottom-anchored sticky CTA. Buttons/toggles/tooltips must be tap-sized. Test on real devices, not just a narrowed desktop preview.
13. **Short FAQ at the bottom.** ~5 questions on buying decisions (billing, cancellation, contract terms, free trial, data security) — not SEO filler. Answers 1–3 sentences, direct. Keep it on the pricing page; don't bounce the buyer to an off-page help center.
14. **Stay consistent with the site's design system.** Reuse the shared text styles, palette, button and badge components so the pricing page doesn't feel like a jarring island.

## Canonical layout order (curiosity → conversion)
Value headline → short subheading (who it's for) → pricing cards (3–4, badged middle) → trust badges / social proof near CTAs → comparison table → short FAQ → sticky CTA throughout.

## Measure & iterate
Pricing pages are experiments, not set-and-forget. Track **bounce rate** (slow/confusing/mismatched), **time on page** (too low = scanning away; too high = hunting for info), **conversion rate** (the one that matters). A/B test headlines and CTA copy; use heatmaps / session recordings to see what's actually working.

## Build checklist
- [ ] 3–4 tiers only, ordered low→high, middle tier badged and anchored?
- [ ] Copy sells benefits/outcomes, cards capped at 4–6 features with "Everything in X, plus…" deltas?
- [ ] Prices are whole numbers with the unit adjacent; billing toggle shows the annual saving?
- [ ] CTA is high-contrast, action-specific, repeated per card AND sticky on scroll?
- [ ] Social proof sits next to the CTA where doubt peaks?
- [ ] Tooltips are tap/click-triggered (no hover-only), tables collapse to accordions on mobile?
- [ ] Mobile checked on a real device — cards stacked, tap targets large, sticky CTA visible?
- [ ] Short outcome-focused FAQ (~5 Qs) lives on the page, and analytics/A-B hooks are in place?
