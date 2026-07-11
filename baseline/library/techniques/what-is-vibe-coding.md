---
technique: Vibe coding (intention-first, prompt-driven build)
section: web-design
source: figma-resource-library/what-is-vibe-coding.md
tags: [workflow, prompting, prototyping, ai-assisted, iteration, design-process]
apply-when: kicking off a new site/UI from a brief, or exploring directions before committing to structure
---

# Vibe coding — applied rules

Core idea: start from INTENTION (how it should feel + what it should do), not from wireframes/components/code. Describe the vibe and the function in plain language, generate a testable interface fast, then refine. It is a creative accelerator for early/mid-fidelity work — NOT a replacement for design systems, accessibility, or hand refinement on complex layouts.

## The rules (each = a build decision)
1. Lead with a prompt, not a wireframe — open by writing what the thing should FEEL like and DO before drawing any layout. Example shape: "Design a budgeting dashboard that feels calm and encouraging. Soft tones, rounded cards, gentle transitions. Supports daily check-ins and quick expense categorization." Mood + concrete UI cues + behavior in one sentence.
2. Put emotional tone IN the prompt, not as late polish — name the feeling (cozy / bold / playful / calm / earthy) up front and let it drive type, color, layout, and interaction together, so the result reads cohesive instead of skinned-on at the end.
3. Translate brand adjectives into UI decisions — when the brief says "playful" or "calm," convert it to specifics (rounded vs. sharp corners, soft vs. high-contrast palette, gentle vs. snappy transitions) rather than leaving the adjective abstract.
4. Generate several versions, don't perfect one — spin up multiple directions cheaply, judge each by how it FEELS, and refine the winner instead of restarting. Use this for divergence before you lock structure.
5. Prototype rough and testable first, polish later — get something interactive in front of people early even if crude; experiment with motion and micro-interactions once the direction holds.
6. Work non-linearly — jump between feel and function as needed; don't trap yourself in a strict step-by-step pipeline. Refine structure, code, and performance downstream after the mood/intent is shared.
7. Refine with selective edits, not rebuilds — once a design exists, change it with short targeted prompts ("make the cards feel more organic with a soft leafy border; lighten the background to feel like morning light") so you tweak without losing the rest.
8. Treat generated code as a starting point, not a deliverable — AI-generated component/layout code is a reviewable, editable seed; expect a human pass for correctness, integration, and wiring to real data/APIs/backend.
9. Don't skip the trade-offs — subjective prompts give inconsistent results, complex layouts still need hands-on work, and accessibility + performance are EXTRA steps the prompt won't hand you. Add them deliberately.

## Run a "vibe check" before polishing
Bring designers/devs/writers/stakeholders to react to an early prototype and ask:
- How does this design make you feel?
- What mood or tone does it suggest?
- Does the interaction feel intuitive and engaging?
- Anything that feels off or distracting?
- How well does it align with expectations/needs?

## Build checklist
- [ ] Opened with an intention prompt (feeling + behavior), not a wireframe?
- [ ] Emotional tone named up front and carried through type/color/layout/motion?
- [ ] Generated 2+ directions and chose by feel before committing structure?
- [ ] Got a rough testable prototype out before polishing details?
- [ ] Iterated via small selective-edit prompts instead of restarting?
- [ ] Reviewed/edited any generated code rather than shipping it raw?
- [ ] Accessibility + performance added as explicit follow-up steps?

> Ties to our experience: this is exactly how 02b is built — intention-first prompts ("water -> space -> sun" cinematic journey, matte stacked-blur glass) iterated via selective edits, with generated visuals never trusted raw (PAIN.md verification-coverage gaps: trusting a settled frame, checking the wrong CSS property, a clipped screenshot) — the "polish later / verify deliberately" rules here map straight onto those misses.
