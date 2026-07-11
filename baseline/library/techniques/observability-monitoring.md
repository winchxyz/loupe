---
technique: Observability (three pillars, golden signals, RED/USE, SLO alerting)
section: sre-operations
source: system-design.space/chapter/observability-monitoring-design
tags: [observability, logging, metrics, tracing, alerting, slo]
apply-when: instrumenting any service/daemon, or designing alerts so you find out about breakage before users do
---

# Observability and monitoring — applied build decisions

The test that defines whether you have observability: **"Can the team explain a degradation before the user leaves?"** — not "do we have dashboards?" Build telemetry to answer that question.

## Three pillars + one action layer
- **Logs** — structured JSON events with correlation IDs (`trace_id`, `span_id`, `request_id`) for investigation.
- **Metrics** — time series for SLO tracking and capacity, modeled with RED or USE.
- **Traces** — request paths across services/queues/DBs end-to-end.
- **Alerts** — the action layer: wake on-call only for genuinely critical deviations.

## RED vs USE
- **RED** (request-driven services): **R**ate, **E**rrors, **D**uration.
- **USE** (infra/resources): **U**tilization, **S**aturation, **E**rrors.
- These map onto the four golden signals: latency (duration), traffic (rate), errors, saturation.

## Structured logging rules
- Mandatory fields: `ts`, `level`, `service`, `operation`, `trace_id`, `request_id`, plus context (`tenant`, `entity_id`) and outcome (`error_code`, `outcome`).
- **Mask secrets/PII before the pipeline.**
- Anti-pattern: raw stack traces with no operation context or input params — they destroy diagnostic value.

## Cardinality is a first-class cost
High-cardinality labels (`user_id`, full `path`, `tenant`) explode storage and query latency. Control them deliberately — don't put unbounded values in metric labels.

## Alert on symptoms (SLOs), not causes (CPU/RAM)
- Fast burn: 5–15 min window for critical unavailability.
- Slow burn: 1–6 hour window for sustained degradation.
- Business anomalies: 15–60 min for conversion/payment failures.
- **Rule: every on-call alert links to a runbook.** No owner + no runbook + no SLO basis → it's noise, delete it.

## Decision rules
- Sample at intake, not in code, to control storage early.
- Separate audit logs from product logs (different retention/access).
- Link metrics → traces → logs through shared IDs for fast root-cause.
- Every postmortem updates telemetry, alert rules, and dashboards — close the loop.

## Build checklist
- [ ] Emit structured JSON logs with `trace_id`/`request_id` and masked PII
- [ ] Instrument RED for services and USE for infra
- [ ] Keep metric-label cardinality bounded (no raw user_id/path labels)
- [ ] Alert on SLO burn rate (fast + slow windows), not raw CPU/RAM
- [ ] Attach a runbook + owner to every alert; delete owner-less alerts
- [ ] Correlate logs/metrics/traces via shared IDs; feed postmortems back into rules
