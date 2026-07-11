---
technique: Design ethics (impact-aware build decisions)
section: ui-ux-principles
source: figma-resource-library/design-ethics.md
tags: [ethics, inclusivity, accessibility, i18n, privacy, bias]
apply-when: scoping a new site/feature and reviewing copy, data, and visuals before ship — to catch harm, exclusion, and dark patterns
---

# Design ethics — applied rules

Core idea: judge the work by the impact it has on real people, good or bad — not by how the pixels look. Each rule below is a build decision to make BEFORE and DURING the build, not a values statement. Run them as a pre-ship pass.

## The rules (each = a build decision)
1. Solve a real problem — before building, ask "does this need to exist, or am I reinventing a solved tool?" Choose the unmet need (e.g. a safe-restroom finder) over the redundant clone (e.g. another weather app). If you can't name whose real problem it solves, don't ship it.
2. Name the audience first — decide "who is this for?" before opening the canvas. Let the answer drive layout: a global audience forces i18n-safe components from day one, not as a retrofit.
3. Design for translation expansion — never size a button to fit English exactly. German/Finnish strings can run far longer and burst a tight button; reserve flexible width, allow wrapping, and avoid fixed-width text containers. Test the longest plausible string, not the demo one.
4. Make data control explicit — if you collect user data, show where it goes and who sees it BEFORE the first use, and offer delete controls. Default to no third-party sharing/selling unless the user explicitly opts in. Avoid silent data flows the user can't see or reverse.
5. Treat consent as opt-in, never opt-out — surface the choice up front and in plain language; don't bury it or pre-check it. The honest default is the one that protects the user, not the one that maximizes data capture.
6. Bake inclusivity in from the start — make representation a cornerstone of the brand/illustration voice at the beginning, not a patch at the end. Tacked-on inclusivity reads as tokenism; foundational inclusivity manifests naturally in the work.
7. Audit visuals and copy for unconscious bias — your defaults (default avatar, name examples, skin tones, gender in illustrations, who's shown in which role) carry implied messages. Vary them deliberately; don't let one stereotyped pattern stand in for "the user."
8. Lead with empathy, set your own boundaries — there's no Hippocratic Oath for designers, so decide your own line on what you'll build. Understand the audience by listening to their actual situation, not by projecting your assumptions; if you don't understand their need, the solution won't be effective.

## Build checklist (use before shipping)
- [ ] Can I name the real problem and the specific audience this solves for (rules 1–2)?
- [ ] Do buttons/labels survive the longest translated string without breaking (rule 3)?
- [ ] Is every data use shown up front, opt-in, and reversible with a delete control (rules 4–5)?
- [ ] Is inclusivity built into the visual voice from the start, not tacked on (rule 6)?
- [ ] Did I audit default avatars, names, and illustrated roles for stereotyped patterns (rule 7)?
- [ ] Have I decided where my own ethical boundary is for this build (rule 8)?
