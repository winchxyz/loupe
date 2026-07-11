---
technique: Static vs. dynamic — picking a site architecture
section: web-design
source: figma-resource-library/static-vs-dynamic-website.md
tags: [architecture, performance, scalability, hosting, decision]
apply-when: at project kickoff, before writing any code, to decide whether a build ships as flat static files or needs a server/DB
---

# Static vs. dynamic — architecture decision rules

Core idea: the static/dynamic choice is made ONCE at kickoff and is expensive to reverse, so derive it from content behavior and feature needs — not from habit. Default to static; escalate to dynamic only when a concrete requirement forces it. "Static" here means pre-rendered files served as-is (HTML/CSS/JS, client-side interactivity allowed); "dynamic" means the server generates the page per request from a DB / session.

## The rules (each = a build decision)
1. Default to static — choose static unless a listed dynamic trigger applies. You get faster loads (no server round-trip to render), a smaller attack surface (no DB/server code to exploit), simpler builds, and cheaper hosting. Don't pay the dynamic tax speculatively.
2. Go dynamic ONLY on a real trigger — per-user personalized content, user logins/auth, dynamic form processing, a CMS for non-technical editors, e-commerce with live prices/stock, search over a dataset, or storing/analyzing visitor data. If none apply, stay static.
3. Match the archetype — portfolio, resume, marketing/landing page, docs, "coming soon", brochure → static. E-commerce store, social platform, news site with frequent posts, forum → dynamic.
4. Let update frequency decide, not gut feel — content that rarely changes (company brochure, project portfolio) → static; content updated often by non-devs (news, blog, product listings) → dynamic + CMS so editors don't hand-edit pages.
5. Don't conflate "interactive" with "dynamic" — client-side JS (animations, carousels, sliders, AJAX, interactive forms) runs fine on a static site. You only need a dynamic backend when state must persist server-side or vary per user/request. Reach for the backend last.
6. Respect the perf trade — static is fast by construction (pre-rendered, served directly). Dynamic can be slower under complex interactions or large DBs; if you go dynamic, optimize (caching, query tuning) up front rather than after it drags.
7. Budget for the lifetime, not the launch — dynamic costs more to build AND maintain (server, DB, updates). On tight money/time, ship static; a landing-page template publishes in a fraction of the time.
8. Weigh team skill honestly — dynamic adds server-side languages (PHP/Python/Ruby), databases, and more failure modes to develop, maintain, and troubleshoot. Don't adopt a stack the team can't operate; a static build (or a design-to-publish tool) keeps creative control without server overhead.
9. Plan for scale early — expecting traffic surges or steady feature growth favors dynamic (scale horizontally by adding servers; extend features without breaking existing pages). For a fixed-scope site that won't grow, static's simplicity wins.
10. Pick the trigger to escalate — if requirements are genuinely mixed, isolate the dynamic part (e.g. a checkout or a search endpoint) and keep the rest static, rather than making the whole site dynamic.

## Build checklist (run at kickoff)
- [ ] Listed the site's primary purpose, audience, and the exact features it must do?
- [ ] Confirmed no dynamic trigger applies (auth / personalization / live data / CMS / e-commerce / search / data capture) before defaulting to static?
- [ ] Separated "needs client-side interactivity" (still static) from "needs server-side state" (dynamic)?
- [ ] Classified content by update frequency and who edits it (dev vs non-dev)?
- [ ] Sized the build against budget, time, and the team's actual stack skill?
- [ ] Checked expected growth/traffic — does scalability force dynamic, or is scope fixed?
- [ ] If mixed, scoped the dynamic surface to the smallest piece and kept the rest static?
