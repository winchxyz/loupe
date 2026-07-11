---
technique: UI design fundamentals (interface anatomy + first-principles)
section: ui-ux-principles
source: figma-resource-library/what-is-ui-design.md
tags: [ui, components, usability, accessibility, navigation, feedback]
apply-when: starting any screen/section build — to pick the right element category, give users control, and avoid frills
---

# UI design fundamentals — applied rules

Core idea: the UI is the contact surface between human and product. Its job is to make human↔machine communication fast and obvious, build an emotional connection, and give the user a sense of control. The best UI is practically invisible — users navigate instinctively, with no tutorial.

## Choose the right element category (every component belongs to one of four)
1. **Input controls** — when the user must give the product information, reach for the SIMPLEST control that fits: button/checkbox first, then toggle, dropdown, text field. Don't escalate to a complex control where a button does the job.
2. **Informational components** — when the product must report state back, use icons, notifications, progress bars, tooltips. Pair every user action with one of these so feedback is never silent.
3. **Navigational components** — to help users find their way, use sliders, search fields, tags, breadcrumbs as wayfinding. If a user can get lost, a navigational element is missing.
4. **Containers** — to organize and group related elements, use headers, tabs, accordions; have the container also cap content width per the user's screen size. Group with containers before adding visual chrome.

## Build decisions (do / choose / avoid)
5. **Put the user first as a literal gate.** For every choice ask "how does this impact the user?" If the answer isn't "makes it easier/better," cut or rethink it.
6. **Give a sense of control, not just service.** Favor clean, intuitive, frills-free layouts; strip distractions rather than adding flourishes.
7. **Lean on familiar patterns.** Use conventions users already know from similar products — don't reinvent a control the market has standardized. Run a competitor analysis to learn the written and unwritten rules before deviating.
8. **Make mistakes cheap.** Always provide undo / easy correction; never trap the user in an irreversible state.
9. **Give timely feedback.** Every action gets a prompt, visible response (an informational component) so the user knows it registered.
10. **Treat accessibility as a moving standard, not a checkbox.** Keep text, color, contrast, and tabbing order to current content-accessibility guidelines; re-check them as the product evolves.
11. **Match the input modality to the interface type.** GUI (touch/pointer), gesture-based (3D motion → command, for AR/VR), and voice (VUI). Pick controls and feedback appropriate to how the user actually drives the product.

## Build checklist (use while building a screen)
- [ ] Does each control map to the right category (input / informational / navigational / container) — and is it the simplest that works?
- [ ] Does every user action produce timely, visible feedback?
- [ ] Can the user undo or fix a mistake from here?
- [ ] Are familiar patterns used, with no needless reinvention?
- [ ] Frills removed, distractions stripped — would a user navigate this without a tutorial?
- [ ] Text/color/contrast/tab-order pass current accessibility guidelines?
