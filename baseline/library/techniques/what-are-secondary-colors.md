---
technique: Secondary colors in UI/brand palettes
section: color-theory
source: figma-resource-library/what-are-secondary-colors.md
tags: [color, palette, brand, accent, accessibility, visual-hierarchy]
apply-when: choosing an accent/brand hue and balancing it against neutrals/primaries in a UI
---

# Secondary colors — applied rules

Core idea: secondary colors (orange = red+yellow, green = yellow+blue, purple = blue+red) are the accent layer of a palette. They earn a brand its signature feel and carry visual hierarchy — but only when rationed against neutrals. Treat the secondary as the loud 10%, not the wallpaper.

## The rules (each = a build decision)
1. Cap the palette at 1–6 foundational hues. More than ~6 = sensory overload and a muddy brand. Pick one dominant brand color, then ONE secondary accent that complements it; resist adding a third "fun" hue.
2. Spend color by the 60-30-10 rule. Neutral ≈ 60% of the surface (backgrounds, large fields), primary/brand ≈ 30% (structural color, headers), secondary accent = the final 10% (CTAs, highlights, the one thing you want clicked). This is the default split — deviate only with reason.
3. Balance warm against cool. Pair a warm secondary (orange) with a cool one (green/blue) or set the accent against a cool neutral ground so it pops. A palette that's all-warm or all-cool reads flat.
4. Use the secondary as the click target, not decoration. FedEx pattern: reserve the loud accent (orange) for the single highest-priority action ("Track" button), keep the premium hue (purple) for brand chrome. One accent = one job per view.
5. Drive hierarchy with shades/tints of ONE secondary, not new hues. Need three levels of emphasis? Use a light tint, the base accent, and a dark shade of the same secondary — don't reach for a brand-new color. Keeps the system coherent while still guiding the eye through a workflow.
6. Let the accent carry meaning. Saturation and hue signal intent: max-saturation neon green = energy/freshness/growth (Spotify), warm yellow-orange = calm/uplift (Headspace), purple = premium/playful/creative (Twitch). Choose the secondary that matches the feeling the surface should evoke, then keep it consistent.
7. Verify contrast at the token level, not by eye. A secondary often becomes the highest-contrast element, so it must clear WCAG against its background — check the computed contrast ratio of the actual accent-on-its-real-ground pairing, not a swatch in isolation.
8. Pick the color MODEL for the medium. Screens are additive RGB (secondaries = cyan, magenta, yellow); print is subtractive CMYK. Author and store palette tokens in the model the output uses so the accent doesn't shift between design tool and shipped pixels.

## Reusable accent patterns
- Single neon signature (Spotify): one max-saturation secondary on a near-monochrome dark ground — instant recognition, zero ambiguity about the brand color.
- Two-secondary contrast logo (FedEx): two secondaries in tension (premium + urgent), one of them also doubling as the global CTA color.
- Monochromatic accent (Headspace): one secondary plus its tints/shades for the whole surface — calm, cohesive, low-stimulation.

## Build checklist
- [ ] Palette is 1–6 hues; one clear dominant + one secondary accent (not a confetti of colors)?
- [ ] Color spend roughly 60 neutral / 30 primary / 10 secondary accent?
- [ ] Accent reserved for the one highest-priority action per view, not sprinkled as decoration?
- [ ] Emphasis levels built from tints/shades of the SAME secondary, not new hues?
- [ ] Accent-on-its-real-background contrast ratio measured against WCAG (not eyeballed)?
- [ ] Hue choice actually matches the intended emotion (energy / calm / premium)?
- [ ] Palette tokens authored in the right model (RGB for screen) so the accent renders true?
