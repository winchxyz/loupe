---
technique: Accessible & inclusive design
section: ui-ux-principles
source: figma-resource-library/creating-accessible-and-inclusive-design.md
tags: [accessibility, color-contrast, color-vision, usability, readability, screen-reader]
apply-when: building or reviewing any UI so it stays usable for low-vision, color-deficient, motor-limited, and older users — not just yourself
---

# Accessible & inclusive design — applied rules

Core idea: every design decision either includes or excludes someone. Accessibility is not a checkbox added at the end — it is a default you bake in, because by default you'll design for your own abilities and biases. Over 1 billion people (~15% of the world) have some impairment; the accessible version is almost always better for *everyone* (the curb-cut / ramp effect).

## The rules (each = a build decision)
1. Never encode meaning in color alone — color-vision deficiency hits ~1 in 12 men, 1 in 200 women (260–320M people); orange vs. green can read as identical under protanopia. Pair every color signal (error/success, active state, chart series, status dot) with a second cue: icon, label, shape, underline, or pattern.
2. Hit WCAG contrast, and verify it — don't eyeball it. Test text/background and UI-element contrast with a tool (Figma plugins like Able, or any contrast checker) rather than trusting how it looks on your good monitor. Reduced vision and aging eyes (cataract yellowing) need stark separation.
3. Simulate the deficiency before shipping — preview the design through protanopia/deuteranopia/tritanopia simulation. If two states collapse into one color, redesign the cue.
4. Make it keyboard- and screen-reader-operable — test the page with no mouse and with a voice/text browser. If you can't complete the core flow by keyboard, it's broken for many users.
5. Give every meaningful image alt text — in the actual code, so screen-reader users get the content. Decorative-only images get empty alt so they're skipped.
6. Design for readability as an accessibility lever — higher contrast, larger text, shorter line length, deliberate kerning/leading, and a legible typeface. Simple, well-spaced layouts that focus the eye also raise readability for everyone.
7. Put primary actions in thumb reach on mobile — on large phones the one-handed reachable area shrinks; move menu bars, search, and key CTAs toward the bottom of the screen.
8. Lower the effort cost (usability) — minimize the learning curve, the need for instructions, and the number of taps/steps to finish a task. Easy + intuitive + efficient is the bar.
9. Don't assume who your users are — many older people with age-related impairment won't self-identify as "disabled." Design for the capability, not the label; when unsure of terminology or needs, consult disabled people directly.
10. Pick a target group, then widen — you can't serve the whole world in one product (cf. one language only). Solve deeply for the most people plausible, and consider derivative versions rather than one bloated catch-all.
11. Remove journey barriers — audit the end-to-end flow for real and imagined obstacles and clear them, so progress through the product is unblocked.
12. Don't let aesthetics override usability — the Aesthetic-Usability Effect means pretty feels usable, but make it actually usable first, then make it look the part too.

## Build checklist (tick while reviewing a UI)
- [ ] No state/meaning conveyed by color alone — every color cue has an icon/label/shape backup
- [ ] Text and UI contrast verified with a tool against WCAG, not eyeballed
- [ ] Ran a color-blindness simulation; no two states collapse into one color
- [ ] Full core flow completable by keyboard + screen reader; focus order sane
- [ ] Every meaningful image has alt text; decorative images have empty alt
- [ ] Type is readable (size, line length, leading, contrast) at default zoom
- [ ] Primary mobile actions sit in one-handed thumb reach
