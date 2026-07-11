---
technique: Color theory (harmony schemes, temperature, hue/value/saturation)
section: color-theory
source: figma-resource-library/what-is-color-theory.md
tags: [color, palette, contrast, accessibility, branding, theme]
apply-when: choosing a palette, accent, or theme for any site/UI — pick a relationship deliberately instead of eyeballing swatches
---

# Color theory — applied palette decisions

Core idea: a palette is a set of *relationships on the color wheel*, not a bag of nice swatches. Pick the relationship first (it sets the mood and contrast ceiling), then assign roles (dominant / supporting / accent), then tune hue/value/saturation for legibility. Color does three jobs at once: visual impact, UX scanning/navigation, and brand expression — choose for all three.

## Scheme picker (each = a build decision)
Choose ONE relationship per surface; assign a dominant, a supporting, and an accent within it.

1. **Monochromatic** — one hue, vary tint/shade/value. Reach for it when you want a calm, cohesive, "designed" feel and brand minimalism. Lowest risk of clashing; carry contrast on value, not hue (this is the safest base for a glassmorphism/dark UI).
2. **Analogous** — 3 hues adjacent on the wheel (e.g. blue, blue-green, green). Use for serene, low-tension surfaces (long scrolls, immersive backgrounds). Low contrast by design — do NOT rely on it alone for a CTA; borrow an accent for the action.
3. **Complementary** — 2 hues opposite (yellow/purple, red/green, blue/orange). Use when one element MUST pop (CTA, alert, score). Maximum contrast — keep one color dominant and the opposite a small accent; equal amounts vibrate and tire the eye.
4. **Split-complementary** — base + the two neighbors of its complement. Use when you want complementary punch with more palette room and less tension. Balance is the catch — keep the two "split" colors subordinate or they clash.
5. **Triadic** — 3 hues evenly spaced (Firefox: orange/yellow/purple). Vibrant and balanced; pick one dominant + two accents. Use for playful, energetic brands; never give all three equal weight.
6. **Tetradic (rectangle)** — two complementary pairs, balancing warm + cool (Slack: red/green + yellow-orange/sky-blue). Maximum drama and the hardest to balance — let one pair lead, the other support; reserve for expressive, multi-section brands.
7. **Square** — four hues evenly spaced. Richest/most diverse, needs the most fine-tuning — only when the design genuinely needs four distinct color roles; otherwise drop to triadic.

## Temperature → emotion (brand decision)
- **Warm (red/orange)** → energy, passion, excitement (Coca-Cola, Red Bull). Use for urgency, appetite, action, intensity.
- **Cool (blue/green)** → trust, calm, stability (IBM, Blue Shield). Use for finance, health, productivity, "safe hands."
- **Neutrals (black/white/gray)** → let a single strong signature color carry identity; use neutrals as background/accent so the brand hue reads loud against quiet ground.

## Hue / value / saturation tuning (legibility decision)
- **Hue** = the color, **value** = lightness/shading, **saturation** = intensity. Tune value + saturation *after* picking the hue.
- High-saturation red (and warm hues) reads as **warning** — reserve vivid saturated reds for errors/alerts, not body or decoration. Tone down value/saturation for everyday UI.
- Too dull or too light = unreadable. When text or a message won't read on its hue, fix the **background contrast**, not just the foreground — adjust ground colors for contrast and accessibility before shipping.

## Model: RGB vs CMYK
- **RGB** (additive, ~16M colors) for all screen/web/app work — this is your model.
- **CMYK** (subtractive, ~16k colors) only for print (billboards, cards). Never spec a digital UI in CMYK.

## Build checklist
- [ ] Picked ONE wheel relationship per surface (mono / analogous / complementary / split / triadic / tetradic / square) — not eyeballed?
- [ ] Assigned explicit roles: one dominant, one supporting, one accent (not equal weights)?
- [ ] Temperature matches the intended emotion (warm=energy, cool=trust, neutral ground + signature accent)?
- [ ] Saturated red reserved for warnings, not used as casual decoration?
- [ ] Text/CTA contrast checked against its background for accessibility (fix the ground, not just the foreground)?
- [ ] Spec'd in RGB for screen (CMYK only if it's going to print)?
