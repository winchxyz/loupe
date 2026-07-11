---
technique: Fitts' Law (target size & distance → acquisition time)
section: ui-ux-principles
source: figma-resource-library/fitts-law.md
tags: [interaction, buttons, cta, navigation, touch, mobile]
apply-when: sizing and placing any clickable target — CTA, nav item, menu, form submit, mobile tap target
---

# Fitts' Law — applied rules

Core idea: time-to-acquire a target grows with DISTANCE and shrinks with target SIZE (MT = A + B·log₂(2D/W)). Big + near = fast and likely clicked; small + far = slow and skipped. Every clickable target is a cost-of-reach decision — pay it down for the actions you want, raise it for the ones you don't.

## The rules (each = a build decision)
1. Size by importance — make the primary CTA / submit the LARGEST interactive target on the view; demote secondary actions to smaller ones. Importance should be legible from hit-area alone.
2. Grow the hit target with padding, not font — expand click area via generous padding (and an invisible/`::before` overlay if needed) while keeping the label text crisp. Don't scale the type just to win area.
3. Place primaries near the "prime pixel" — the user's likely cursor origin: screen center or the spot of the last click. Put the next-step CTA close to where the hand already is, not across the viewport.
4. Dump low-value elements in the corners ("magic pixels") — the four corners are farthest from the cursor; reserve them for rarely-used or dismissible controls, never the hero CTA.
5. Honor the mobile thumb zone — keep primary tap targets in the comfortable thumb arc (center / lower portion), not the top-left. The user shouldn't re-grip the phone to reach your CTA.
6. Meet a minimum tap size — touch targets need enough width/height to hit reliably (~44px is the common floor); never ship a tap target that demands precision aiming.
7. Order nav/menus by frequency-of-use → proximity — the more often an item is used, the closer it sits to the user's starting point and the larger/clearer it is. Reduce menu depth and complexity to cut movement time.
8. Space related actions: close enough to compare, far enough to not mis-hit — e.g. Save/Cancel adjacent for easy scan, but with a gap that defeats fat-finger errors. Proximity speeds the choice; spacing prevents the wrong one.
9. Give selection a clear state cue — color/weight change on hover/active so users track where they are mid-reach (especially in menus).

## Build checklist (use when placing any clickable target)
- [ ] Is the single most important action the biggest, easiest-to-hit target on the view?
- [ ] Hit area enlarged via padding (label still crisp), not by bloating font size?
- [ ] Primary CTA near the prime pixel (center / last click), not banished to a corner?
- [ ] On mobile, every primary target inside the thumb zone and ≥ ~44px?
- [ ] Adjacent destructive/confirm pairs spaced enough to prevent mis-clicks?
- [ ] Nav/menu items ordered so high-frequency = closer + larger, with a visible selected state?

> Ties to our experience: 02b's matte glass UI (CTAs, section controls, loader dismiss) sits over a moving WebGL scroll-journey — every tappable control must win Fitts' on touch (thumb-zone + ≥44px hit area via padding, not by enlarging glass chrome) so reach cost stays low against the busy background.
