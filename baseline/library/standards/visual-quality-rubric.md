---
title: Visual Quality Rubric — the checkable IDEAL for loop-mode's critic
tags: [standards, rubric, critic, loop-mode, verification]
status: v0
source: consolidated from baseline/library techniques + standards/design-standards.md; skeleton adapted from looper (MIT) references/*-rubric.md
---

# Visual Quality Rubric

The **single, cited** standard the loop-mode critic scores a rendered website against. It exists so the
critic's grounding is **one hop, not eight** — every judgment names a library entry, never improvised taste
(`design-standards.md`: "judgments are grounded in named library entries"). It judges **rendered pixels, not
source** — the founding rule that fixes "said done, nothing visually changed" (`CLAUDE.md` core thesis).

This is a *floor for shippable*, not a ceiling for taste. The loop clears the cheaply-detectable failures
so the **owner's eye** spends itself on taste, not on catching obvious breakage. The owner's judgment is the
real metric (`design-standards.md`: "USER DECIDES"); this rubric is an **iteration driver, never the arbiter**.

---

## Two axes

The critic returns a verdict on **two independent axes** (`design-standards.md` two-axis verdict):

1. **QUALITY** — is it good craft, and is it STRIKING? (the 10 dimensions below)
2. **FIT** — does it match *the site's own* `DESIGN.md` direction? A duotone-editorial site is not failing
   for being un-colorful; it fails if it **drifts from its own declared direction**. If `DESIGN.md` names a
   recipe seed, pull that `recipes/<seed>` entry as a concrete **exemplar** to compare against.

Anything the owner has **SETTLED / overridden** (project `DECISIONS.md`, or known settled calls) is **out of
scope** — a negative finding there is a **WARNING logged**, never an iterate trigger
(`design-standards.md` precedence 0: settled owner decisions win).

---

## Pre-gate (programmatic — runs BEFORE the judge)

A judge call is wasted tokens if the page is literally broken. Run deterministic checks first; any failure
short-circuits to `revise` **without** spending a judge turn (`looper` `verification-rubric.md`: prefer
deterministic checks before a judge).

| check | pass |
|---|---|
| `impeccable` lint (`npx impeccable detect`) | exit zero |
| console-error probe in the webview | no errors |
| text contrast (axe-style) | WCAG: body ≥ 4.5:1, large/UI ≥ 3:1 |
| `diffChanged` vs the pre-turn frame | ≠ 0 (something actually changed) |

---

## QUALITY — the 10 dimensions

Each scored **0–3**: `0` broken · `1` weak · `2` acceptable · `3` strong. Every score line **must name the
library entry it is grounded in**. Judge BOTH ends — the FLOOR (is anything broken?) AND the CEILING (is it
STRIKING, or merely competent?). **Gate bar (RAISED — aim for striking, not just shippable):** the CRAFT axes
— `hierarchy` · `rhythm` · `composition_density` · `finish_no_slop` · `ambition` — must ALL be **≥ 3**; the
floor axes (`contrast_legibility` · `responsive` · `color_type_discipline` · `motion_polish` · `matches_brief`)
**≥ 2** with no hard-fail; and `fit` ≥ 2. A page with nothing broken but no point of view does NOT pass — at
least one `blocking_issue` then names the concrete BOLDER move that would make it striking.

| id | PASS test (failing it = a blocking issue) | grounded in |
|---|---|---|
| `rhythm` | Section gaps cluster into ≤3 repeated values; clear breathing room; no two unrelated blocks <16px apart | `techniques/single-shot-page-robustness.md` |
| `hierarchy` | Exactly ONE dominant element per viewport; type steps ≥1.25× between levels; the eye lands on the primary action first | `what-is-visual-hierarchy.md` |
| `contrast_legibility` ⛔ | Body ≥4.5:1, large/UI ≥3:1 against the *actual* background (incl. text over images); no clipped or overlapping text | `types-of-color-palettes.md` *(best run as the axe pre-gate)* |
| `composition_density` | Shared alignment edges; balanced left/right margins; neither sparse-empty nor maxed-out-noisy | `gestalt-principles.md`, `graphic-design-principles.md` |
| `color_type_discipline` | Bounded palette (≈1 dominant + 1 accent + neutrals, 60/30/10); ≤2 type families; no rogue accent | `website-color-schemes.md`, `typography-in-design.md` |
| `responsive` ⛔ | At 768px & 390px nothing overflows / clips / horizontally scrolls; tap targets ≥44px; multi-column reflows sensibly | the deZign UI-robustness class (`app/docs/UI-ROBUSTNESS-GATE.md`) |
| `motion_polish` | Motion reads as intentional and settled; no half-rendered frame, no infinite attention-grab. **Do NOT penalize a missing reduced-motion fallback** — deZign sites are motion-always-on by design | (project: motion always-on) |
| `matches_brief` | A reader given only the brief + the screenshot agrees the brief is satisfied; no missing requested section | `looper` `goal-rubric.md` (names the consumer) |
| `finish_no_slop` ⛔ | No lorem / broken-image / AI-default tells (everything-centered, generic gradient-blob hero, untouched component-library look) | (anti-slop) |
| `ambition` | A DISTINCTIVE design idea executed with conviction — memorable, would place on Awwwards — vs generic/templated. `3` = a real idea boldly executed · `2` = competent but safe/forgettable · `≤1` = templated/default | (own judgment — the "striking, not shippable" bar) |

**⛔ Hard-fail dimensions** — a `0` or `1` here forces `verdict: revise` regardless of the others, because
they are cheaply and objectively true: `contrast_legibility`, `responsive`, `finish_no_slop`.

---

## Verdict contract (machine-parsed)

The critic returns a single fenced ```json block FIRST, then 2–3 highest-leverage concrete fixes. Each
`blocking_issue` names the failing dimension id + the specific element. The next iteration's builder prompt is
the `blocking_issues` list verbatim ("fix the class, not the instance" — `CLAUDE.md` bug-fix protocol).

```json
{
  "verdict": "revise",
  "scores": { "rhythm": 2, "hierarchy": 1, "contrast_legibility": 3, "composition_density": 2,
              "color_type_discipline": 2, "responsive": 3, "motion_polish": 2,
              "matches_brief": 2, "finish_no_slop": 3, "ambition": 1 },
  "fit": 2,
  "blocking_issues": [
    "hierarchy: two competing focal points in the hero — demote the badge (what-is-visual-hierarchy.md)",
    "ambition: the hero is a safe centered headline + button — commit to ONE bold idea (oversized editorial type bleeding off-canvas, an asymmetric split, a striking grid) to make it memorable"
  ],
  "warnings": [],
  "confidence": 0.78,
  "notes": ""
}
```

- `verdict ∈ pass | revise`. `pass` requires every dimension ≥2, no hard-fail, and `fit` ≥2.
- **Unparseable output → treat as `revise` + warn** (degrade, don't hard-fail — `looper-spec.md` "lean degrade+warn").
- The critic has **no edit tools, a fresh context, and an adversarial brief** ("assume it is flawed; find what
  is WRONG") — it must never defend code it did not write. For v0 the critic is **Claude judging Claude**
  (deZign is Claude-only; true cross-vendor judging is a later BYOK module): a *partial* check with an honest
  ceiling — it cannot escape Claude's own blind spots. That is why the **owner's eye remains the arbiter**.
