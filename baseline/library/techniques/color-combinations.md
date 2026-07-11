---
technique: Color combinations (mood-driven palette building)
section: color-theory
source: figma-resource-library/color-combinations.md
tags: [color, palette, mood, contrast, brand, accessibility]
apply-when: choosing a site/app palette from a target mood or industry, or assigning roles (bg / text / accent / CTA) inside one
---

# Color combinations — applied rules

The article is a 100-palette roundup. The reusable signal is NOT the named palettes — it's
(a) which harmony *scheme* to reach for, (b) how a target *mood/industry* maps to a hue family,
and (c) how to assign *roles* (background, depth, accent, CTA) within a chosen palette. Build
the palette from the mood backward, then verify contrast.

## Scheme decisions (pick the harmony first)
1. **Monochromatic** (one hue, light→dark shades) — choose when you want calm, cohesive, "serious/professional" with zero clash risk. Lightest shade = background, mid = surfaces, darkest = text/depth, one brighter step = the only accent. Safest default for a content-heavy or dark-mode UI.
2. **Analogous** (neighbors on the wheel) — choose for a "natural, harmonious" feel that's a touch richer than mono but still low-tension (e.g. green + sage + olive). Good for wellness, outdoor, editorial.
3. **Complementary** (opposite hues, e.g. orange + blue) — choose when you need one decisive high-contrast accent against a calm field. Use the dominant hue for ~70% and the opposite ONLY for CTAs/highlights — never 50/50 or it vibrates.
4. **Split-complementary** (base + the two neighbors of its complement) — choose when complementary feels too harsh; gives vibrant contrast with more balance. Better default than raw complementary for most UIs.
5. **Triadic** (3 evenly spaced) — choose for "vibrant, eye-catching, playful." One color leads, the other two are accents — do not give all three equal area.
6. **Tetradic** (4 in a square) — only when you genuinely need a multi-accent system (e.g. status colors, product categories). Hard to balance; let one dominate and keep the other three muted/small.

## Mood → hue family (choose the base by the feeling you're selling)
7. **Trust / professional / fintech / security** → blue, blue-gray, navy. Dark blue reads tranquil + reliable; pair with white/light-gray for clarity. This is the Zoom/Microsoft move.
8. **Premium / luxury / sophisticated** → black + white + a neutral gray (space-gray, charcoal, "salt & pepper"); or deep jewel tones (burgundy, emerald, amethyst); or muted "quiet luxury" warm neutrals (beige, taupe, cream). Let products/content be the color; keep the chrome neutral.
9. **Health / wellness / nature / eco** → greens (kelly, forest, sage, mint, olive) and earthy neutrals; soft, low-saturation for calm/meditation, brighter green for energy/fitness.
10. **Energy / appetite / food / restaurant** → warm reds, chili red, coral, amber, orange; high saturation stimulates. Great for CTAs and food/delivery; anchor with a dark neutral (charcoal) so it doesn't fatigue.
11. **Playful / youthful / kids / gaming** → bright yellows, lime, bubblegum pink, teal, candy pastels; high saturation + high contrast. Pair a bright with a grounding dark or crisp white so it stays legible.
12. **Calm / sleep / meditation / coastal** → pale blues, lavender, mint, sand, soft grays; low saturation, light values. Avoid pure black; use deep navy/charcoal for "night" variants.
13. **Warm / cozy / nostalgic / artisanal** → browns, cream, caramel, terracotta, sepia, muted gold; "coffee" and "harvest" families. For food, lifestyle, craft.
14. **Seasonal cue** → spring = pale pink/green/cream; summer = cyan/yellow/aqua; autumn = burnt orange/sienna/gold/brown; winter = icy blue/white/silver. Use for time-bound marketing, not permanent brand.

## Role assignment inside a palette (the build-time decision)
15. **Lightest shade → background**; keeps the UI "fresh and airy." Darkest shade → primary text and depth/shadow. One brighter/most-saturated step → CTAs and buttons ONLY, so the eye is guided to the action.
16. **Reserve the most vibrant hue for guiding attention** (CTA, key metric, active state); keep softer/muted hues for the backdrop. Vibrancy = hierarchy signal, not decoration — don't spend it everywhere.
17. **Add ONE warm/neutral grounding tone** (brown, charcoal, taupe) to an otherwise bright or pastel set to "add depth" and stop it reading flat or toy-like.
18. **Match value/temperature to the job:** softening a hue (add white tint → pastel) lowers arousal/tension; deepening/saturating raises it. Same hue, different value = different emotional read — tune value before you swap hues.

## Build checklist (tick while assembling a palette)
- [ ] Picked a harmony scheme on purpose (mono / analogous / complementary / split-comp / triadic / tetradic), not random hand-picked swatches?
- [ ] Base hue chosen from the target MOOD/industry, not personal preference?
- [ ] One dominant color (~70%), supporting tones (~20%), and a single accent (~10%) — not equal areas?
- [ ] Vibrant/saturated reserved for CTAs + key elements; muted reserved for background/surfaces?
- [ ] Text vs background meets contrast guidelines (the article names accessibility as a harmony requirement — verify, don't eyeball)?
- [ ] Dark-mode variant uses deep navy/charcoal, not pure #000, to cut eye strain?

> Ties to our experience: 02b's journey-by-environment palettes (water → space → sun) are
> exactly mood→hue mapping with one grounding neutral; and "reserve vibrancy for the CTA"
> is the same hierarchy discipline that, when violated by uniform emphasis, produced our
> PAIN.md visual-flatness reads. Contrast-verify-don't-eyeball mirrors our checking-the-wrong-
> -CSS-property and clipped-screenshot misses.
