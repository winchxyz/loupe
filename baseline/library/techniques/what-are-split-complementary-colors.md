---
technique: Split-complementary color schemes
section: color-theory
source: figma-resource-library/what-are-split-complementary-colors.md
tags: [color, palette, contrast, accent, accessibility, brand]
apply-when: picking a base + two accents for a UI/brand when straight complementary feels too loud but you still want real contrast
---

# Split-complementary color schemes — applied rules

Core idea: take a base color, find its complement (opposite on the wheel), then DON'T use the complement itself — use the two colors flanking it. You get a 3-color scheme with strong-but-softer contrast than a head-on complementary pair. Reach for this when a direct complement (e.g. red/green) reads like a traffic light.

## Build decisions (each = a do / choose / avoid)
1. Choose ONE base first, then derive — pick the base color to carry the brand/mood, then let the two accents fall out of the wheel (the colors either side of the base's complement). Don't pick three colors independently; derive the accents so harmony is guaranteed.
2. Use the split, not the complement — avoid putting the base against its exact opposite. The flanking pair gives the same legibility win with less visual tension. This is the whole reason to use the scheme.
3. Anchor on a known triplet — start from a canonical split-complementary set rather than eyeballing the wheel. Examples from the article: Red + yellow-green + blue-green; Blue + red-orange + yellow-orange; Purple + yellow-green + yellow-orange; Green + red-purple + red-orange. Pick the one whose base matches the mood you want.
4. Apply 60-30-10 — base color ~60% of the surface (backgrounds, large fields), one accent ~30% (secondary surfaces, supporting elements), the other ~10% (the CTA / focal hit). Never split the three evenly; even thirds kill the hierarchy.
5. Spend the accents, don't smear them — the 10% color is your attention currency. Reserve it for the single most important action per view; if everything is accented, nothing is.
6. Tune tint/shade/saturation to set mood — brighter, more saturated = energetic/upbeat; softer, desaturated = calm/serene. Keep editing the three until they stop clashing; the raw wheel hues are a starting point, not the final palette.
7. Mix temperature on purpose — combine warm and cool members of the triplet to steer emotion. A warm base with two cool accents (or vice-versa) reads more deliberate than three same-temperature hues.
8. Add neutrals to cool down brights — when the accents run hot, dilute with white / black / gray / beige rather than muting the brand colors themselves. Neutrals buy back breathing room without losing the palette.
9. Verify contrast for legibility, not just looks — a "softer" contrast is still contrast; check text/background pairs actually pass readability before shipping. Don't assume the scheme is accessible because it's harmonious.

## Pick-the-alternative cheat sheet (when split-complementary is the wrong tool)
- Want harmony with almost NO contrast → analogous (three neighbors on the wheel, e.g. violet, red-violet, red).
- Want maximum cohesion / single-hue → monochromatic (tints + shades of one color).
- Want balanced contrast with more pop → triadic (three colors evenly spaced).
- Want maximum drama → tetradic (two complementary pairs).

## Build checklist
- [ ] Base color chosen first to carry the mood, accents derived from the wheel (not picked independently)?
- [ ] Using the two flanking colors, NOT the exact complement?
- [ ] Proportions follow 60-30-10, with the 10% reserved for the primary CTA?
- [ ] Tint/shade/saturation tuned so the trio stops clashing (not raw wheel hues)?
- [ ] Warm/cool mix and any neutrals chosen on purpose to set temperature/mood?
- [ ] Text/background pairs actually checked for contrast/legibility, not assumed?
