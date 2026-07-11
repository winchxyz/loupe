---
technique: Product design principles (scope, function, consistency, iteration)
section: ui-ux-principles
source: figma-resource-library/what-is-product-design.md
tags: [process, user-centered, consistency, accessibility, iteration, ux]
apply-when: starting any build — to fix scope, sequence interactions before polish, and keep a system coherent as it grows
---

# Product design — applied rules

Core idea: product design owns the WHOLE thing — what it does, how it works, whether it matters — not just the screens. Treat every visual decision as downstream of a working interaction and a real user need. Use these to keep a build honest, not just pretty.

## The rules (each = a build decision)
1. Solve the root need, not the literal request. Users describe solutions, not problems ("add a button here") because that's how they talk about friction. Treat the ask as a symptom; trace it back to what's actually broken and for whom before you build the fix.
2. Get interactions right BEFORE polish. A product can be visually stunning and still fail (Apple Maps shipped beautiful and routed people to non-existent places). Pretty design over broken interaction is just a more attractive problem — wire up and test the flow first, style second.
3. Don't let aesthetics be useless either. Looks build trust and affect perceived accessibility — so once the interaction works, polish is a real lever, not a nice-to-have. Sequence, don't skip.
4. Consistency = transferable learning. Keep patterns predictable and language clear so users carry knowledge from one part of the product to another; cognitive load drops and trust builds. Reuse one component/pattern instead of reinventing the button per section.
5. Lean on a system at scale. When multiple sections/platforms/codebases ship in parallel, the same problem gets solved five different ways unless something holds it together — shared components, shared patterns, shared decisions. This is what design systems are for.
6. Chase coherence, not just consistency. A product can use identical patterns everywhere and still feel like five teams who never talked. Ask: do the pieces feel connected? Do features reflect the same underlying values? Coherence is whether it feels meant to exist.
7. Build accessibility at the component level, from the start. Decide color contrast, focus states, semantic structure, and touch-target sizes up front — not as a post-launch audit. Bolting it on later forces structural rework, not just a visual repaint. Include color-vision-deficiency-safe schemes and screen-reader support.
8. Ship to learn, then iterate. No design survives first contact with users; something will confuse or break. Build feedback loops (behavior tracking, follow-up research, support tickets) and have the resilience to drop a design you liked when it doesn't work.
9. Make tradeoffs explicit in the room. When user needs and product goals collide, surface what you gain and what you give up against agreed criteria — don't default to the loudest voice and don't expect a pre-read doc to resolve it.
10. Run the process as a loop, not a line. Goals → Research → Analyze → Strategize → Execute, but expect to loop back: a late testing insight can reopen something you thought settled. Start with SMART goals so everyone shares one definition of success before work begins.

## Build checklist (use when reviewing a build)
- [ ] Does each element trace back to a real user need, not a literal feature request?
- [ ] Interactions wired and tested BEFORE visual polish was applied?
- [ ] Patterns/components reused (consistency) — is anything solving a solved problem a new way?
- [ ] Does the whole thing feel coherent — like one product, not stitched sections?
- [ ] Contrast, focus states, semantic structure, touch targets decided at component level, not bolted on?
- [ ] Is there a feedback loop to catch what breaks on first contact, and am I willing to drop a design that fails?
