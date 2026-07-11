---
technique: Designing with red shades (palette selection & pairing)
section: color-theory
source: figma-resource-library/shades-of-red.md
tags: [color, palette, red, accent, branding, accessibility]
apply-when: choosing a red for a CTA, alert, accent, or brand and deciding what to pair it with
---

# Designing with red shades — applied rules

Core idea: "red" is not one decision. Pick a red by its TEMPERATURE and JOB, then pair it with a neutral or near-complement so it commands attention without overwhelming. Hue family encodes meaning (warm = urgency/energy, cool = luxury, soft = calm, deep = sophistication). Choose the family that matches the emotional job, not just "a red that looks nice."

## Pick by job — which red family for what
1. Need urgency / a CTA / an error or alert → **warm red**. Choose `Scarlet #ED2100`, `Fire engine red #CE2029` (emergencies), `Cinnabar #E84B3D` (progress/notifications), or `Chili red #CD1C18`. These are the loudest; reserve them for the one action you want clicked.
2. Want luxury / premium / high-end branding → **cool red** with a blue undertone. Choose `Ruby red #9B111E`, `Wine red #722F37`, `Carmine #960018`, or `Venetian red #C80815` for heritage. Pair with gold, cream, navy, or slate — never neon.
3. Want calm / wellness / sensitive content → **soft red** as an accent, not a fill. Choose `Pastel red #FF746C`, `Dusty rose #DCA1A1`, `Pink #FF8DA1`, or `Rosewater #FFD6D1`. Use on icons/tabs/blush backgrounds to soothe, not to shout.
4. Want depth / richness / indulgence → **deep red**. Choose `Burgundy #660033`, `Garnet #8B0000`, `Maroon #550000`, or `Crimson red #B22222`. Great for hero backgrounds and luxury surfaces; darker = more sophisticated.
5. Romance / dating / Valentine's context → `Rose #FF1D8D` or `Rose red #FA003F` for a youthful, modern, romantic register.

## Pairing & contrast rules (do / choose / avoid)
6. Always pair red with a NEUTRAL (gray, white, cream, beige) or a near-complement (teal, navy, sage, turquoise) so the red reads as the accent and nothing fights it. Avoid two saturated warm hues side by side.
7. Build hierarchy with VALUE, not more hue: lighter/softer reds recede to background, darker/deeper reds advance to foreground. Let value do the depth work.
8. Restraint by default: too much red overwhelms and distracts. Keep the interface neutral and spend red only on the elements that must be seen (one CTA, the error, the active state) — Figma's own neutral UI + red logo is the model.
9. Match the red to the mood: maroon/burgundy = indulgent & sophisticated; crimson/scarlet = energetic & urgent. Don't use a deep luxury red for an error toast or a fire-engine red for a wellness app.
10. Apply ONE chosen brand red consistently across the whole UI for recognition — don't drift between five reds within one product.

## Accessibility & context (never skip)
11. Red text on a colored/dark background is a contrast trap. Check every red text/background combination with a contrast tool before shipping — especially small red text. Prefer red as a large fill or icon over red body text.
12. Red is culturally loaded (luck, danger, mourning vary by region). For anything shipping cross-culturally, verify the symbolism of your chosen red for the target audience before locking it.

## Example pairings to lift directly
- Urgent CTA: `Fire engine red #CE2029` on black/white/chrome (high-contrast, clean).
- Luxury surface: `Wine red #722F37` or `Burgundy #660033` with gold + cream + deep green.
- Calm accent: `Pastel red #FF746C` with teal, mint, lavender, light gray.
- Modern/youthful UI: `Rose red #FA003F` with midnight blue, charcoal, ivory.

## Build checklist
- [ ] Did I pick the red by JOB (warm=urgency / cool=luxury / soft=calm / deep=depth), not just by looks?
- [ ] Is red the accent, with a neutral or near-complement carrying the rest of the layout?
- [ ] Is depth done with value (light recedes / dark advances), not by stacking more hue?
- [ ] Is there exactly one dominant red per surface, used consistently?
- [ ] Did I run a contrast check on every red text/background pair?
- [ ] For cross-cultural launches, did I verify the red's cultural meaning?
