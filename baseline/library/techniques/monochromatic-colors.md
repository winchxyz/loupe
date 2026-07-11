---
technique: Monochromatic color schemes
section: color-theory
source: figma-resource-library/monochromatic-colors.md
tags: [color, palette, contrast, accessibility, branding, minimalism]
apply-when: building a cohesive minimalist palette from one hue, or grounding a section/whole site in a single color family with controlled accents
---

# Monochromatic color schemes — applied rules

Core idea: pick ONE base hue, then generate the whole palette from it using tints, shades, and tones. You get instant cohesion and a modern/minimal feel — but you must engineer contrast and an accent in, because mono does not give them for free.

## The rules (each = a build decision)
1. Pick the base hue first, by intent, not by eye. Choose it for the emotion it carries (warm = energetic, cool = calm, neutral = restrained), because every variation will inherit that mood. In OKLCH/HSL terms: lock one hue value and only move lightness/chroma from here on.
2. Generate variations along three axes — do NOT introduce a second hue:
   - **Tints** = base + white → lighter, pastel steps (raise lightness, drop chroma slightly). Use for backgrounds, surfaces, disabled states.
   - **Shades** = base + black → darker steps (drop lightness). Use for text, depth, pressed/active states.
   - **Tones** = base + gray → desaturated, muted steps (drop chroma). Use for secondary text, borders, quiet UI chrome.
3. Build a ramp, not three colors. Produce ~5–9 steps from lightest tint to darkest shade so you have enough range to assign every UI role (bg → surface → border → muted text → body text). One color, many jobs.
4. Engineer contrast on purpose. Mono palettes drift muddy because adjacent steps look alike. Guarantee a real lightness gap between any text step and its background step and verify WCAG (4.5:1 body, 3:1 large/UI). Do not trust that "same hue" implies "readable."
5. Reserve ONE accent to break monotony. A pure-mono screen reads flat. Keep a single contrasting accent (a complementary hue, or a far brighter/darker step) for CTAs and the one focal point per view — exactly where you want the eye to land.
6. Use undertones to warm or correct a cold/dead neutral: mix a little yellow or red into a gray base to warm it, or shift it deliberately. But test the shift before committing — too much red reads as alarm/danger, over-blue reads as sad/cold. The undertone is a seasoning, not a second color.
7. Know when to reach for it vs. an alternative:
   - **Monochromatic** → cohesion, minimalism, strong single-brand identity, calm focus.
   - **Analogous** (3 adjacent wheel hues, e.g. blue / blue-violet / violet) → richer but still harmonious; use when pure-mono feels too austere.
   - **Complementary** (opposite hues) → maximum contrast/vibrancy; use for the accent in rule 5 or when energy beats calm.

## Build checklist (tick while applying)
- [ ] One base hue chosen for its mood; no second hue smuggled into the ramp.
- [ ] 5–9 step ramp built from tints (white) / shades (black) / tones (gray), each mapped to a UI role.
- [ ] Every text-on-surface pair verified for WCAG contrast (4.5:1 body, 3:1 large/UI) — not eyeballed.
- [ ] Exactly one accent reserved for CTAs / the single focal point per view.
- [ ] Undertone shift (if any) tested so it doesn't read as alarm-red or sad-blue.
- [ ] Adjacent ramp steps have a real lightness gap so the design doesn't go muddy.

> Ties to our experience: 02b's matte stacked-blur glassmorphism UI rides a near-mono cool palette over the water→space→sun journey; the accent-and-contrast discipline above is exactly what keeps glass surfaces legible instead of muddy. And PAIN.md's "checked the wrong CSS property" maps to rule 4 — verify contrast with a real measurement, don't trust that same-hue steps are readable.
