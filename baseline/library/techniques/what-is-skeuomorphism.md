---
technique: Skeuomorphism (real-world visual affordances)
section: ui-ux-principles
source: figma-resource-library/what-is-skeuomorphism.md
tags: [skeuomorphism, neumorphism, affordance, texture, usability, performance]
apply-when: deciding how much real-world realism (texture/shadow/material) a control or surface should carry to read as interactive
---

# Skeuomorphism — applied rules

Core idea: borrow the texture, shape, or behavior of a physical object so a UI element reads as familiar and obviously interactive (a typewriter-key keyboard, a leather notebook, a recessed switch). The affordance does the explaining; the user already knows how the real thing works. The danger is realism for its own sake — it dates fast, clutters, and costs frames.

## The rules (each = a build decision)
1. Use a skeuomorph only to teach an affordance — when the control's interaction isn't obvious from flat shapes alone (a knob to turn, a switch to flip, a card to peel). If a plain flat element already reads, do NOT add realism; it buys nothing.
2. Default to mostly-flat, then spend realism deliberately — start flat (the iOS 7 / Material baseline) and add a touch of skeuomorphism only where usability improves. This is the article's "strike a balance" rule, not a license to texture everything.
3. Prefer the Material-Design middle path over full realism — keep layout flat and clean, but use depth cues (layered shadows, elevation, motion) to signal hierarchy and interactivity. You get the affordance without the maintenance cost of photoreal chrome.
4. Match the real-world reference to the metaphor — when you do imitate, the texture/color/shape must map to a function the user recognizes (engine "up front" = horsepower; creamy pale = dairy). A skeuomorph that references nothing the user knows is just decoration.
5. Budget the render cost — highly detailed realism (gradients, soft shadows, baked textures, layered fills) slows load and frame time. Treat heavy skeuomorphic surfaces like any other expensive asset: measure their cost, and degrade them on weaker hardware.
6. Don't over-populate — too many skeuomorphs read as cluttered and overwhelming. Realism competes for attention; reserve it for the few controls that genuinely need the cue, and keep everything else quiet.
7. Avoid metaphors that will date — a skin tied to obsolete hardware (the floppy-disk save icon) ages badly. Favor timeless physical references (paper, glass, light, depth) over period-specific gadgets.
8. For "soft UI" / neumorphism, watch contrast — the 2019 soft-UI revival uses subtle shadows and low-contrast fills; that softness easily fails contrast/legibility. Add realism for warmth, but verify text and edges still pass contrast against the surface.

## Build checklist (use when adding any realistic / textured surface)
- [ ] Does this skeuomorph teach an affordance, or is it decoration I can cut?
- [ ] Is the base layout still mostly-flat, with realism spent only where it helps?
- [ ] Does the real-world reference map to a function the user already recognizes?
- [ ] Have I measured the render cost (shadows/gradients/textures) and set a lighter fallback for weak hardware?
- [ ] Is the screen free of clutter — only the few controls that need the cue carry it?
- [ ] If soft-UI / low-contrast: do text and edges still pass contrast on the surface?

> Ties to our experience: 02b's matte stacked-blur glassmorphism is exactly the "spend realism deliberately" rule — depth and material as an affordance, gated behind hardware-adaptive performance tiers + dynamic resolution because heavy realistic surfaces cost frames (rule 5). And the low-contrast watchout (rule 8) is our PAIN.md verification-coverage theme: a soft surface can look settled in one frame yet quietly fail legibility — check the actual contrast, not the pretty screenshot.
