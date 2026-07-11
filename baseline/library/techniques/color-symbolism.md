---
technique: Color symbolism (hue meaning + temperature)
section: color-theory
source: figma-resource-library/color-symbolism.md
tags: [color, palette, branding, accessibility, emotion, culture]
apply-when: choosing a palette, accent, or brand color so the hue's meaning matches the site's mood and audience
---

# Color symbolism — applied build rules

Core idea: a hue is never neutral. It carries emotional and cultural meaning before a user reads a word. Pick colors for the FEELING you want, verify the meaning holds for the audience, then enforce contrast/restraint. Meaning is context-dependent — the same color reads differently across cultures and eras.

## Hue decisions (each = a build decision)
1. Pick by temperature first. Warm (red / orange / yellow) = energy, excitement, attention-grab → use for heroes, CTAs, playful brands. Cool (blue / green / purple) = calm, trust, professionalism → use for finance, tech, wellness, long-read UI.
2. Red = vitality / passion / urgency. Use it for ONE thing per view — the CTA, an alert, a danger flag. Avoid red as a large fill; too much overwhelms. It is the loudest accent you have, so spend it once.
3. Orange = playful, enthusiastic, creative. Good for energetic/youthful brands. Use restraint — large orange areas erode a sense of credibility/authority. Prefer it as an accent, not a body background.
4. Yellow = cheerful, optimistic, fun. Never put yellow text on a light background (fails contrast/legibility). Use yellow as: an accent, a solid background with DARK text on top, or text only on a dark background.
5. Blue = trust, dependability. Default for banks, tech, anything that must feel reliable. Avoid an ice-cold blue when the brand should feel human — shift slightly warmer/toward teal so it doesn't read impersonal.
6. Green = nature, growth, abundance → eco / wholesome / health positioning. Watch the shade: the wrong green reads as greed, envy, or sickness. Choose a clean, vegetal green, not a murky yellow-green, for "wholesome."
7. Purple = wealth, leadership, power. Effective as a premium accent. Use a light touch — large purple fields tip into pompous/elitist. Pair with a neutral to ground it.
8. White = cleanliness, purity, minimalism (Western context). Lean on whitespace to set off other elements. Cultural caveat: white = mourning in Japan/India — check before shipping to those audiences.
9. Black = sophistication, strength, mystery → luxury and minimalist designs. Avoid all-black expanses; too much reads heavy or bleak. Use black for type/structure and let it frame, not smother.
10. Brown = earthy, reliable, comforting → good for packaging/heritage warmth. Pair with a complementary accent so the design doesn't read dull or overly rustic.

## Scheme decisions (color-wheel relationships)
- Want drama / a punchy accent? Use COMPLEMENTARY (opposite sides of the wheel) — e.g. blue base + orange CTA. Maximum contrast, maximum attention on the accent.
- Want a calm, cohesive mood? Use ANALOGOUS (same side — all warm or all cool). Lower contrast, more subtle and harmonious.
- Neutrals (white/black/brown) aren't on the wheel — use them as the canvas/structure that lets one or two real hues do the symbolic work.

## Build checklist (tick while choosing colors)
- [ ] Does each chosen hue's meaning match the intended mood (warm=energy / cool=trust)?
- [ ] Is the loud accent (red/orange/purple) used sparingly — one job per view, not a large fill?
- [ ] Yellow / low-contrast hues checked for legibility (no yellow text on light)?
- [ ] Complementary for a high-contrast accent, analogous for a calm scheme — chosen on purpose, not by accident?
- [ ] Cultural meaning verified for the target audience (e.g. white = mourning in JP/IN)?
- [ ] Colors tested in real lighting/dark-vs-light contexts, not just the design canvas?

> Ties to our experience: 02b's journey is literally a hue-temperature arc — cool water → deep space → warm sun — so the warm/cool emotional split above IS the structure of the site, not just an accent palette. And the yellow-on-light legibility rule echoes our PAIN.md "wrong CSS property / clipped frame" verification gaps: a color that looks fine on the settled design canvas can still fail contrast in a real rendered context, so test in situ.
