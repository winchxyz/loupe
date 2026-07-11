---
technique: Load balancing (L4 vs L7, health checks, safe rollout)
section: backend-architecture
source: system-design.space/chapter/load-balancing
tags: [load-balancing, l4, l7, health-checks, deployment]
apply-when: putting traffic in front of more than one instance, or fixing 5xx spikes during deploys/failover
---

# Load balancing — applied build decisions

The takeaway that gets missed: **load balancing earns its keep during degradation, releases, and failover — not normal traffic.** Describe the full request path (entry point, instance health, timeouts, behavior during infra changes), not just the distribution algorithm.

## L4 vs L7 — choose by workload
- **L4 (transport)** — stateful/transport workloads (databases, Redis, brokers, MQTT). Lower CPU, minimal latency, high throughput; simple algorithms (least-connections, round-robin, consistent hashing). Less routing flexibility.
- **L7 (application)** — APIs, web apps, gRPC. Path/host/header routing, canary, A/B, sticky sessions. Higher per-request cost.
- **Rule:** L4 where minimal delay matters; L7 where application-level routing control is required.

## Health checks — always both kinds
- **Active** (balancer probes a health endpoint) catches hard failures fast.
- **Passive** (watch live traffic: 5xx, timeouts, dropped connections, latency spikes) catches *soft* degradation when a service "formally works but degrades under load."
- Kubernetes liveness/readiness probes are **not** a substitute for passive monitoring.

## Safe deployment mechanics (apply on EVERY release, not just failover)
- **Slow start** — ramp new instances up gradually so caches, runtime, and connection pools warm; avoids cold-start incidents.
- **Connection draining** — stop sending *new* connections to an instance being removed; let existing ones finish. Skipping this causes 5xx spikes on WebSocket/gRPC-streaming during deploys.

## Global vs local (two separate decisions)
- **GSLB / DNS-based** picks a region by latency/geo/health — but failover is bounded by DNS TTL (seconds to tens of seconds). Don't pair long TTLs with regional failover expectations.
- **Anycast** announces one IP from many regions; fast, but less L7 control.
- Separate "pick the region" (global) from "distribute within region" (local).

## Build checklist
- [ ] Choose L4 vs L7 per workload (transport → L4, app routing → L7)
- [ ] Configure active **and** passive health checks; don't rely on k8s probes alone
- [ ] Enable slow-start and connection draining on every release
- [ ] Set per-server max_fails / fail_timeout (see HAProxy/Nginx snippet)
- [ ] Keep DNS TTLs short if you expect fast regional failover
