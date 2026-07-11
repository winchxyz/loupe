---
technique: Seven core UI design principles
section: ui-ux-principles
source: figma-resource-library/ui-design-principles.md
tags: [ui, visual-hierarchy, consistency, contrast, accessibility, layout]
apply-when: building or reviewing any screen/section so structure, attention, and flow read intuitively without extra chrome
---

# Seven core UI design principles — applied rules

Core idea: the interface should be the signpost, not the map. Each principle below is a build decision that lowers the user's cognitive load — do X, choose Y, avoid Z. Treat them as a layout review pass, not theory.

## The 7 rules (each = a build decision)
1. Hierarchy — decide the read order BEFORE styling. Rank what the user cares about most, then encode that rank with size/weight, contrast, and spacing. Put the highest-priority element above the fold; demote everything that can be scrolled to. Avoid two elements competing for "first thing seen."
2. Progressive disclosure — sequence a long flow into steps; surface only the choices needed at each step. Split any overwhelming form/onboarding into stages. ALWAYS show a "where am I / how many left" orienting cue (step counter, progress bar) so staged flows don't lose people.
3. Consistency — reuse one pattern per role: a button looks and behaves the same everywhere. Pull from a token/component system, not ad-hoc values. Deviate from an established pattern ONLY with a deliberate reason — an unexplained size/style change reads as a bug and adds hesitation.
4. Contrast — spend contrast like a budget on the ONE thing you want noticed. Reserve the loudest, most jarring contrast for the critical/primary action; mute secondary actions (e.g. primary = saturated/red, "keep account" = gray) so the eye is steered, not split. Avoid making everything high-contrast — then nothing wins.
5. Accessibility — bake WCAG in, don't bolt it on. Ensure foreground/background contrast passes a checker; provide alt text; honor padding rules; guarantee full keyboard navigation and assistive-tech compatibility. Don't rely on color alone to carry meaning (1 in 4 users have a vision impairment).
6. Proximity — group by distance: related controls sit close (play / rewind / fast-forward share a row); unrelated or destructive controls (quit, delete) live in their own zone with a bigger gap to prevent mis-clicks. Spacing is the grouping signal — let it do the work before borders.
7. Alignment — commit to a grid. Align edges and baselines so lines stay clean; consistent alignment buys readability and predictability for free. Avoid one-off offsets that break the column rhythm.

## Build checklist (use when reviewing a screen)
- [ ] Is the single most important element clearly the first thing seen (hierarchy)?
- [ ] Are long flows staged with an orienting progress/step cue (progressive disclosure)?
- [ ] Does every repeated role (button, card, nav) use one consistent pattern — any unexplained deviation (consistency)?
- [ ] Is the loudest contrast reserved for the primary action, secondary actions muted (contrast)?
- [ ] Does text/background contrast pass a checker, with keyboard nav + alt text in place (accessibility)?
- [ ] Are related controls grouped by proximity and destructive ones separated by a bigger gap (proximity)?
- [ ] Do elements share a grid — edges and baselines aligned, no stray offset (alignment)?

> Ties to our experience: the repos-table header misalignment was a Principle 7 (alignment) failure — a broken grid column read as crooked; and 02b's glassmorphism section UI leans on Principle 1/4 (hierarchy + reserved contrast) to keep the cinematic background from swallowing the readable controls.
