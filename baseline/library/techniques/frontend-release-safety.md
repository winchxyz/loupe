---
technique: Safe frontend releases (feature flags, RUM, error tracking, rollback)
section: frontend-architecture
source: system-design.space/chapter/frontend-observability-and-release-safety
tags: [frontend, feature-flags, rollback, sentry, rum, canary]
apply-when: shipping/redeploying a live site and you need a way to detect and undo a bad release fast
---

# Frontend release safety — applied build decisions

The maturity bar: a release pipeline can say **what broke, in which release, for which users, and the minimum safe action right now.** Relying only on server error rates misses broken UI flows, perf regressions, and silent conversion killers that throw no exceptions.

## Signal-to-action pipeline
Every client signal must connect: **Event → Grouping → Release/Flag → Audience → Action.** A signal you can't tie to a build version + flag variant + user segment is a chart you can't act on.

## Essential client signals
- **Error tracking with source maps + release tagging** — catches blank screens, hydration mismatches, route-level crashes invisible to server metrics. Tag every error with build version and active feature flags.
- **RUM** — Core Web Vitals, network quality, interaction delays; catches regressions server metrics miss.
- **Session recording / UX diagnostics** — reveals broken interactions, infinite spinners, route-transition race conditions.
- **Release-health metrics** — error rate *by build version*, feature adoption, affected routes, rollback triggers.

## Safe rollout practices
- **Feature flags are release tools, not permanent architecture.** Forgotten flags degrade client predictability — remove them after rollout.
- **Client errors must carry the release version** so you can target a rollback or exclude an audience fast.
- **Rollback is a product scenario, not just a deploy revert** — often it's safer to disable a single flag/widget than to roll back the whole build.
- **Tie health metrics to user journeys** (checkout completion, editor saves) — not just averaged error rates.

## Emergency cutoff checklist (have these ready BEFORE you ship)
- Quick disable path without a full rollback?
- Audience visibility by build version / flag variant / browser / network quality?
- Can you separate data failures from client regressions?
- Clear escalation: auto-alert vs ticket-for-later?

## Build checklist
- [ ] Wire error tracking with uploaded source maps + release + active-flag tags
- [ ] Add RUM (Core Web Vitals) and watch per-release regressions
- [ ] Gate risky changes behind feature flags; schedule flag removal
- [ ] Define rollback as flag-off first, full revert second
- [ ] Track journey-level health (key conversion/save events) per build version
- [ ] Pre-write the emergency cutoff: disable path, audience filters, escalation rule
