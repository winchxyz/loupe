---
technique: No code vs. low code — choosing a build approach
section: prototype-wireframe
source: figma-resource-library/no-code-vs-low-code.md
tags: [tooling, prototyping, workflow, scalability, governance, build-strategy]
apply-when: deciding how to build a site/tool — fast visual no-code vs. code-backed low-code — based on scope, integrations, and who's building
---

# No code vs. low code — applied build decisions

Core idea: pick the build approach by matching scope, integration needs, and the builder's skill, NOT by defaulting to whatever's fastest. No-code = fully visual, fastest zero-to-one, but capped at the platform's built-in features. Low-code = visual + a code escape hatch, more overhead but real customization and governance. They're a spectrum, not a binary — many projects mix both.

## The rules (each = a build decision)
1. Scope first — for a one-off landing page, quick prototype, or small internal tool, choose no-code (or hand-code it fast); don't drag in low-code's testing/deploy overhead for something disposable.
2. Scale triggers low-code — the moment a build must span teams, pull from custom/proprietary data sources, or handle sensitive workflows, choose the code-backed path; no-code "quick wins" weren't built for long-term stability.
3. Integration gates the choice — if you only need common connectors (Google Sheets, basic CRM) no-code is fine; the instant you need custom APIs, proprietary systems, or a unique workflow, drop to where you can write the code.
4. Match the tool to the builder — non-technical owner leading → no-code so they validate ideas without waiting on a dev; engineering team → low-code so they skip repetitive UI/boilerplate and spend coding time on critical logic and security.
5. Don't fight the wall — no-code limits you to the components the platform ships; if the functionality isn't built in, that's a hard stop, so check feature coverage BEFORE committing, not after you've hit the wall.
6. Budget for the hidden steps — even small amounts of custom logic add testing and deployment work; "low-code is faster than from-scratch" is true, but each customization is a decision with overhead, so don't promise no-code speed on a low-code build.
7. Bake in governance for high-stakes work — when security and scale matter, prefer the path with version control, access permissions, and audit trails from the start; an app built and used with zero IT involvement is a risk once it grows or touches sensitive data.
8. Use the middle-ground tools deliberately — prompt/drag tools that ALSO emit exportable code (e.g. Figma Make) let you prototype no-code then hand clean code into a low-code/real-code environment; reach for these to accelerate both the explore and the harden phase.
9. Wireframe and diagram before building — diagram user flows, data structures, and logic trees first (FigJam-style), then prototype interfaces from component/wireframe kits; design the structure before you pick the build tool.

## The 3-question chooser (run in order)
1. Required complexity & scale? Small/one-off → no-code. Scales / custom data / sensitive → low-code.
2. Custom coding & integration needed? Only common services → no-code. Custom APIs / proprietary data / unique workflows → low-code.
3. Who is the primary builder? Non-technical → no-code. Engineering team → low-code.

## Build checklist (tick while choosing an approach)
- [ ] Scoped the real complexity/scale — is this a disposable artifact or a system that must grow?
- [ ] Listed the integrations — are they all out-of-the-box, or is a custom API / proprietary source in there?
- [ ] Identified the primary builder and matched the tool to their actual skill set?
- [ ] Confirmed the no-code platform actually ships the features needed (no late "wall")?
- [ ] Accounted for governance — version control, access, audit trails — if this is high-stakes or sensitive?
- [ ] Considered a middle-ground tool that prototypes visually AND exports clean code, if both speed and customization matter?
