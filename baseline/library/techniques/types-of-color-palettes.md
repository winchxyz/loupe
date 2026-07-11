---
technique: Types of color palettes (color-wheel schemes + selection workflow)
section: color-theory
source: figma-resource-library/types-of-color-palettes.md
tags: [color, palette, contrast, accessibility, branding, ui]
apply-when: choosing a site/UI palette — picking a scheme, assigning roles, and pressure-testing contrast before you commit
---

# Types of color palettes — applied rules

Core idea: a palette is structure, not decoration. Pick a wheel relationship first (it sets the contrast budget), assign each hue a role by proportion, then verify value/contrast. Don't sample pretty colors and hope; derive them from one base + a known relationship.

## Pick the scheme = pick your contrast budget
Each relationship is a different trade between harmony and tension. Choose by how much drama the product needs, then live within its budget.

1. **Complementary (opposite hues).** Reach for this when you need one thing to POP — a CTA against its surroundings. Max contrast, max attention. Use it for accents/calls-to-action, NOT for large fields side by side (it vibrates). Classic pairs: red+green, blue+orange, maroon+deep turquoise, lilac+green.
2. **Analogous (neighbors).** Default for calm, natural, "easy on the eyes" surfaces — wellness, editorial, nature. Low internal contrast means you MUST add a high-contrast accent or dark text for anything that has to be clicked or read.
3. **Monochromatic (one hue, many tints/shades).** Safest choice — "almost impossible to clash." Use one base, build a tint/shade ramp, carry hierarchy with value alone. Best for trust-heavy UIs (banking, healthcare, productivity). Add one contrasting neutral (brown/cream/gray) so it doesn't read flat.
4. **Split complementary (base + the two hues flanking its opposite).** Use when complementary is too loud. You keep contrast but it's softer and easier to balance — good for playful-but-not-harsh (kids' creative tools, party/wedding apps). Still needs neutrals to settle it.
5. **Triadic (three hues, evenly spaced).** High energy, playful — gaming, kids, creative. Rule: make ONE hue dominant and let the other two appear sparingly, or it exhausts the user. Never split three triadic hues equally.
6. **Square / tetradic (four hues, evenly spaced).** Maximum variety, maximum risk of overwhelm. Only viable if you ground it with plenty of neutrals (beige/tan base + pastels), and add pattern/texture so a low-contrast spread still has "bite."

## Assign roles by the 60-30-10 rule
Don't distribute colors evenly — proportion creates hierarchy.
- **60% dominant/primary** — ties to brand identity, sets the mood, usually the background/large fields.
- **30% secondary** — complements primary, supplies the pleasing contrast.
- **10% accent** — the pop; reserve it for CTAs and elements that must stand out.
- Concrete template (Hatch sleep app): dark-blue primary field → slightly lighter blue for buttons/visual interest → gray + light blue + soft orange as 10% accents on essential controls. Mirror this 3-tier structure for any scheme.

## Verify value and contrast (this is the accessibility gate, not a nicety)
- **Value = lightness/darkness of a single hue.** Use it to carry hierarchy; high value = soft/airy, low value = bold/dramatic. In a monochromatic ramp, value IS the design.
- **Contrast = value difference between two colors.** Text needs it. Enforce WCAG minimums: **4.5:1 for normal text, 3:1 for large text.** Treat these as a hard gate, not a target.
- Low-contrast palettes (analogous/square/pastel) are a readability trap — compensate with darker text, subtle patterns, or texture rather than shipping gray-on-white body copy.
- Design in **grayscale first**: lock layout and hierarchy with value alone, then add hue. If it doesn't read in gray, color won't save it.
- Colors shift across screens and lighting — verify on more than one display, don't trust a single settled frame.

## Match hue to meaning (and check culture)
Pick the base hue from the emotion the product should spark, then confirm it reads that way for the actual audience.
- Red = urgency / passion / danger (great for warnings, sparing for accents). Blue = trust / calm / security / professional. Green = nature / growth / freshness (and "success" feedback). Yellow = cheerful / energetic. Pink = romantic / playful / youthful. White = clean / neutral / harmonizing.
- Use color for **feedback**, not just style: red error vs green success is a UX signal, not a palette flourish.
- Color meaning is cultural — re-check choices for a global audience before locking. A/B test CTA shades against real click data rather than guessing.

## Build checklist (use when picking a palette)
- [ ] Chose ONE wheel relationship on purpose (and know its contrast budget)?
- [ ] Built the palette from one base hue + that relationship, not ad-hoc sampling?
- [ ] Roles assigned 60/30/10, with the accent reserved for CTAs only?
- [ ] One hue dominant in triadic/square (others sparing), grounded with neutrals?
- [ ] Body text and key controls pass WCAG 4.5:1 (3:1 for large)?
- [ ] Checked in grayscale — does hierarchy survive without color?
- [ ] Verified on a second screen + checked hue meaning for the target audience?

> Ties to our experience: maps to 02b's matte stacked-blur glass UI, where legibility over a cinematic water→space→sun background is exactly the low-contrast-trap this article warns about — value/contrast must be verified per scene, not on one settled frame (our PAIN.md verification-coverage theme: trusting a settled frame / checking the wrong property / leaving a mode untested).
