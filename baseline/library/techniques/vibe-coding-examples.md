---
technique: Vibe coding — prompt-to-prototype patterns and session workflow
section: web-design
source: figma-resource-library/vibe-coding-examples.md
tags: [workflow, prototyping, ai-codegen, interaction-design, verification]
apply-when: turning a fuzzy idea into a working interactive prototype fast, and deciding what to prompt vs. design by hand before committing to a full build
---

# Vibe coding — applied build decisions

Core idea: describe the behavior, let the AI generate the front-end, and validate the *interaction* before paying for a dev cycle. The win is not "AI writes my code" — it's collapsing the loop between idea and a clickable thing you can judge. Treat each example below as a reusable pattern, not a brand to copy.

## Reusable patterns (each = when to reach for it)
1. **Material/visual sandbox** (liquid-glass editor) — when the deliverable is a *look* with live parameters (saturation, blur, distortion, color, shape). Build a draggable subject over a background and expose the knobs as controls. Use when you need to dial a material in by eye rather than guess values in CSS. Directly relevant to our matte stacked-blur glass UI.
2. **High-density data dashboard** (task scheduler, schedule grid, ATS analyzer) — when the screen must carry a lot at once: Gantt timelines, heat maps, color-coded tags, priority filters, insight panels. Prompt the *layout + filtering logic*, feed realistic demo data, and judge whether density stays legible before building the real data layer. Use when validating whether an information-heavy UX holds up for its actual user (recruiter, planner).
3. **Tactile/motion prototype** (record-player music player, brick-breaker) — when the value lives in *feel*: spinning records, shuffle/volume toggles, physics, collisions, score. Let the tool own the math (physics, collisions, coordinate work) so you spend time on level/interaction design. Use when motion or game-logic feel is the thing you're actually testing.
4. **3D / spatial viewer** (180° product rotation, 3D glyph visualizer) — when you'd normally skip 3D because the coordinate/rotation math is painful. Prompt the mouse-drag-to-rotation mapping or orbital speed/distance/depth, drop in your own assets, and get a high-fidelity spatial prototype. Use for product rotators or orbiting compositions where art direction matters more than the trig.
5. **Design-system generator** — when the repetitive setup (color schemes, type, variables) is the bottleneck. Generate reusable libraries with code exports (Flutter/React) and keep them synced to design variables so design and build don't drift. Use at project kickoff to skip boilerplate and documentation/handoff prep.
6. **Landing-page structure draft** (solar company site) — when you're still arguing about hierarchy and information flow. Prompt the page *structure* with one functional touch (e.g. newsletter signup) and see how the layout lands on a viewer before development. Use to A/B the skeleton, not the final pixels.

## The 4-step session workflow (do these in order)
1. **Map the logic first** — sketch the "if this, then that" flow and rough data structure (FigJam/flowchart) BEFORE prompting. Decide where data goes on submit and which screen each toggle reveals. Front-loading this kills back-and-forth later.
2. **Create a visual source of truth** — if a brand/design system exists, build the core screens and base components first so the AI has concrete color/type/button references and the output matches the product. Don't skip when brand consistency matters.
3. **Verify the behavior, then iterate the prompt** — generate the prototype, then actually click it: trigger every state, walk every screen transition, check it against your flowchart. If it's off, refine the prompt with clearer instructions and re-run. Validate the interaction, not a static frame.
4. **Bridge to code last** — only after behavior is validated, export production front-end (HTML/CSS/React) and move it into a real coding tool (Cursor/Replit) to wire the backend. Layout → live product is the final step, not the first.

## Build checklist (use when starting a vibe-coding session)
- [ ] Logic/flowchart mapped before the first prompt (data destinations + toggle-to-screen rules written down)?
- [ ] Visual source of truth set up first if a brand/design system applies?
- [ ] Picked the matching pattern above (sandbox / dashboard / motion / 3D / system / structure) rather than copying a brand?
- [ ] Realistic demo data loaded for any density-heavy screen before judging legibility?
- [ ] Every state and screen transition clicked and checked against the flow — not trusting one settled frame?
- [ ] Prompt refined and re-run on any behavior that felt off, before exporting code?
- [ ] Code export deferred until interactions are actually validated?
