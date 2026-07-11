---
technique: Typography in design (type system build rules)
section: typography
source: figma-resource-library/typography-in-design.md
tags: [typography, type-scale, hierarchy, readability, font-pairing, accessibility]
apply-when: setting up the type system for any site/UI — choosing typefaces, sizes, line-height, spacing, and case
---

# Typography in design — applied rules

Core idea: type is structure, not decoration. A small set of consistent decisions (scale, leading, measure, case, spacing) does most of the work of making a page read as intentional. Decide them once, apply them everywhere.

## Typeface selection (each = a build decision)
1. Match typeface mood to brand tone. Serious/professional → low-embellishment serif or clean sans (Roboto over Almendra). Youthful/tech → sans serif (Helvetica/Arial/Calibri-class). Don't pick a calligraphy/display face for a serious product.
2. Use the 5 categories deliberately: serif (formal, traditional, editorial trust), sans serif (modern, default for UI body), script (quotes/signatures/short headers only — never body), monospace (code, data, technical texture), display (logos/banners/headings only — never body or sustained reading).
3. Prefer a typeface with a real font family (multiple weights + true italics + international glyphs) so you can build hierarchy from one face instead of fighting mismatched fonts. Montserrat-class families ship ~18 styles; lean on that.
4. Validate the pick with REAL content at multiple sizes, not lorem at one size. A face that sings at 48px can fall apart at 14px and vice-versa.

## Type scale & hierarchy
5. Build the scale from body up, not heading down — devs implement in `em`/`rem` where body = 1em and everything else is a multiple/fraction. Web body baseline ≈ 16px.
6. Use the article's reference ratio as a starting H1: H1 ≈ 3em (≈48px) over a 16px body, then size subheads between. Headings > subheadings > body, always — size is your primary emphasis signal.
7. Reinforce hierarchy with more than size: weight, color, whitespace, alignment, and a second typeface. Don't rely on size alone.
8. Map weights to numeric values for handoff: Regular 400, Medium 500, Semi-Bold 600, Bold 700 (scale runs 100 hairline → 900 ultra-black). Name weights numerically in tokens/CSS so design and code agree.

## Spacing, leading & measure
9. Set line-height (leading) to ~1.125–1.20× font size (112.5%–120%) as a readable default, then fine-tune per typeface — every face needs its own adjustment.
10. Cap line length (measure) at ~40–60 characters including spaces/punctuation for body text. If a line must exceed 60 chars, increase line-height to compensate.
11. Fix kerning (space between specific letter pairs) for even rhythm; use tracking (uniform letter-spacing across a run) to tune readability — open up tracking on ALL-CAPS runs, which read better with extra space.
12. Kill "danglies" (single trailing/leading words, aka widows/orphans): adjust text-box width or letter-spacing so no line ends with a lone word.

## Case & alignment
13. Choose case by role: Sentence case for body/UI text; Title Case for some headings; ALL CAPS only for short labels/buttons/wordmarks/headings — never long text (no ascenders/descenders = hard to read), and avoid ALL CAPS in chat/conversational UI (reads as yelling). all-lowercase is a deliberate stylistic choice, not a default.
14. Pick justification by content: left-align (left-justified) long-form copy — the natural right rag is correct; center only short headings/quotes; avoid full-justify on the web (forced word-spacing creates rivers); never right-align body text.
15. Keep elements on a consistent vertical margin and fixed positions across screens (e.g. a title 100px from top stays 100px on every analogous screen). Repeatable placement is what makes a layout read as "designed."

## Color & contrast
16. Use bolder/brighter color for headings and subheads; neutral/lower-contrast color for large body blocks. Adjust text opacity rather than inventing new gray hues.
17. Verify contrast against WCAG ratios; if text fails, shift the background lighter or darker rather than only nudging the text. Test the type both ways: dark-on-light and light-on-dark, plus brand color on white and on black.

## Build checklist (tick while applying)
- [ ] Scale defined from a 16px body in em/rem, H1 ≈ 3em, clear size steps between roles
- [ ] Hierarchy carried by size + weight + color + space (not size alone)
- [ ] Line-height 1.125–1.20× and measure 40–60 chars (longer lines get more leading)
- [ ] Kerning even; ALL-CAPS runs given extra tracking; no widows/orphans ("danglies")
- [ ] Case + justification chosen per role (no full-justify, no ALL-CAPS body, body left-aligned)
- [ ] Body face is a real family with the weights/italics the design needs
- [ ] Contrast passes WCAG on every background it lands on (light, dark, brand color)

> Ties to our experience: 02b's glassmorphism UI and the TESQ wordmark live or die on these calls — our logo work already converged on a single weight/case decision (Inter Tight, square Q), exactly the "match face to tone, fix case" discipline above. And rule 15 (fixed positions across analogous screens) is the same consistency our PAIN.md repos-table header bug violated when its columns drifted out of alignment.
