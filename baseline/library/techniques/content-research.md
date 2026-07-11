---
technique: Content-first design (real copy before layout)
section: ui-ux-principles
source: figma-resource-library/content-research.md
tags: [content, copywriting, layout, hierarchy, placeholders, information-architecture]
apply-when: starting any page/section before you commit to a layout, and whenever you reach for lorem-ipsum or guess at text length
---

# Content-first design — applied rules

Core idea: the words come before the pixels. A layout that looks clean on lorem-ipsum breaks the moment real copy (longer lines, missing sections, duplicate pages) flows in. Design to the actual content, or design to a content *map* you've committed to — never to placeholder text you'll "fill in later."

## The rules (each = a build decision)
1. Map content BEFORE you open the layout — list the things you actually need to tell the user, per page. This surfaces pages that aren't needed and pages that duplicate each other, and exposes the real flow before you've spent effort styling the wrong screens.
2. Design with real (or near-final) copy whenever you can get it — it's the only way the mock matches the shipped app. Mocks built on fake text hide the failure mode: real lines run longer than the box you drew for them.
3. If you don't have final copy, you still must know the content — which sections exist and the gist of each paragraph. "Don't have the words yet" is fine; "don't know what goes here" is not. Decide the message first, refine the wording later.
4. Use placeholders deliberately, not as filler — placeholders are for establishing hierarchy, blocking out content zones, and checking spacing. Make them reflect realistic length/role, not a uniform gray brick.
5. Make placeholders OBVIOUSLY temporary — if temp text/imagery looks too finished, reviewers critique it as real content and you lose the review. Flag it (e.g. visible "PLACEHOLDER", off-tone copy) so stakeholders/devs read it as a stand-in.
6. Stress-test the longest realistic string, not the prettiest one — pad with worst-case content length so the design survives long names, long headings, and wrapping before it ships, not after.
7. Write copy like speech — only put down what you'd say to someone out loud, in person; read every line aloud before signing off. Keep it simple and clear, kill jargon, and remember less is more (Zinsser: most words on the page serve no purpose — cut them).
8. Treat copy as a first-class design surface, not an afterthought — "lousy copy ruins the whole experience." Budget real time for words; bad text sinks a good layout faster than bad pixels.
9. Source assets legally — fonts, icon libraries, and photography don't all have to be made from scratch, but use them within license and with permission where required.

## Build checklist (use when starting a page)
- [ ] Did I map what each page must say BEFORE laying it out — and kill duplicate/unneeded pages?
- [ ] Is the design built on real/near-final copy, or at least a committed content map (not blind lorem-ipsum)?
- [ ] Did I test the LONGEST realistic string for every text slot — does anything overflow or clip?
- [ ] Are any placeholders visibly marked as temporary so reviewers don't mistake them for final content?
- [ ] Did I read the copy aloud — is it plain, jargon-free, and as short as it can be?
- [ ] Are all borrowed fonts/icons/photos used within their license?
