---
technique: Hamburger menu design
section: web-design
source: figma-resource-library/hamburger-menu.md
tags: [navigation, mobile, ui, accessibility, iconography]
apply-when: deciding whether and how to collapse site/app navigation behind a single icon on small screens
---

# Hamburger menu — applied rules

Core idea: the hamburger (three-line) icon trades visible navigation for screen space. It's a deliberate tradeoff — discoverability and click-through drop in exchange for a cleaner, denser view. Reach for it only when the items behind it are genuinely secondary, and only on viewports where the space matters.

## Decide first: use it or not

1. Use it when — mobile-first / tight viewport, clean-minimal aesthetic, the hidden items are SECONDARY (primary content stays on screen), and the audience already knows the pattern.
2. Avoid it when — navigation is complex/deep, primary pages must be visible, the page is already interaction-heavy, OR quick access to features matters. On desktop with room to spare, show the nav inline; don't hide it just to look tidy.
3. Accept the cost knowingly — hiding nav lowers click rates, adds a cognitive step, and risks screen-reader accessibility. If conversion depends on a nav item, do NOT bury it behind the icon.

## Build decisions when you do use it

4. Icon — use the standard three-line glyph; don't invent a custom mark for "menu." Signal submenus with an explicit chevron/arrow, not by guesswork.
5. Placement — put it in a top corner (left or right) and keep that choice consistent everywhere. Top-left reads as "main menu / back to nav"; top-right pairs with a right-aligned toolbar. Bottom-corner placement only works when it sits among an established bottom toolbar (Amazon-style) the user already scans.
6. Ordering — rank menu items by user intent: highest-priority action first, related items grouped. Decide the single "most common destination" and put it at the top (Southwest puts "flights" first).
7. Feedback — every item needs a visible interaction state: a hover tint (Dropbox's subtle gray), a color change, or a small open/close animation. The panel open/close should animate so the state change reads.
8. Accessibility — make the toggle keyboard-operable (focusable, Enter/Space, Esc to close), give it an ARIA label (e.g. `aria-label="Menu"`, `aria-expanded`), and ensure the revealed list is screen-reader navigable. Don't rely on the icon alone to convey "menu."

## Alternatives to weigh before defaulting to it

9. Tabbed top nav — few main categories, want them all visible.
10. Side navigation — many subcategories; a persistent vertical list.
11. Slide-out drawer — mobile space-saving but a clear visible trigger.
12. Vertical dropdown — compact reveal of a complex tree on click.

## Build checklist
- [ ] Confirmed the hidden items are genuinely secondary (primary nav/content still visible)?
- [ ] Standard three-line icon, in a consistent top corner, with ARIA label + `aria-expanded`?
- [ ] Highest-priority action sits at the top; related items grouped?
- [ ] Open/close animates and each item has a hover/active state?
- [ ] Keyboard: toggle is focusable, Esc closes, focus is managed into the panel?
- [ ] On wide viewports, considered showing nav inline instead of hiding it?
- [ ] Usability/A-B tested that users find the buried items at all?

> Ties to our experience: maps to our 02b glassmorphism nav and mobile/perf backlog — the menu's open/close is exactly the kind of animated state change our PAIN.md verification gaps bite on (trusting a settled frame, leaving a mode untested); screenshot it OPEN, not just closed, and confirm the `aria-expanded` toggle, not the wrong CSS property.
