---
technique: Portfolio website patterns (reusable layouts from 23 examples)
section: web-design
source: figma-resource-library/portfolio-website-examples.md
tags: [portfolio, layout, case-study, interaction, navigation, personal-brand]
apply-when: building or restructuring a portfolio / personal-brand / work-showcase site and deciding how to present projects
---

# Portfolio website patterns — reusable build decisions

Don't copy any single brand site. Extract the underlying PATTERN, pick the one that fits the role being sold, and commit to it. The recurring lesson across all 23 examples: the *medium IS the message* — a developer proves skill through the site itself, a product designer proves rigor through case-study structure. Match the showcase mechanic to the discipline.

## Patterns (each = pick when it fits the goal)

1. **Device-mockup gallery with play buttons.** Show each project framed in a phone/laptop mockup; surface a play affordance for anything that moves (video, prototype). *Use when* the work is app/screen UI and "did it ship and feel good" matters more than process. (Mike Matas, Jordan Jenkins.)

2. **Long-form structured case study (phases).** Break each project into named phases — discovery / strategy / impact, or role / goal / constraints / outcome — and map design decisions to business results with real numbers. *Use when* selling product/UX thinking to hiring managers; rigor and reasoning are the product. (Perry Wang, Conor O'Hollaren, Simon Pan.) Avoid for pure visual/craft roles where it reads as filler.

3. **Continuous vertical feed, visuals-only.** One scroll, bio up top, big project images that zoom/snap into focus on scroll, minimal or no captions. *Use when* the work speaks for itself visually and you want zero-friction browsing. (William Bout.)

4. **Horizontal / side-scroll showcase.** Lay work out laterally (curved rows, milestone timelines, abstract shapes that link to projects). *Use when* you want a distinctive, exploratory feel and the project count is curated/small. (Spencer Gabor, Karina Sirqueira, Mike Matas career timeline.)

5. **Themed / metaphor interface.** Wrap navigation in a metaphor that matches the niche — a phone home-screen of app icons for an iOS person, a turntable of focus areas, a drivable 3D world. *Use when* the metaphor genuinely maps to the role; it's memorable. *Avoid* when the metaphor fights legibility — novelty must not cost findability of the actual work. (Raffi Chilingaryan, Jan Blunár, Bruno Simon.)

6. **Site-as-technical-demo (motion / WebGL / 3D).** Let the homepage itself be the proof: distortion effects reacting to input, fluid motion, Three.js gameplay, micro-interactions that establish polish before any case study opens. *Use when* selling creative-developer / motion skill — the experience is the portfolio. Budget performance accordingly. (Dion Pieters, Robin Noguier, Bruno Simon.)

7. **Card grid, two-tier.** Clean card layout with large thumbnails + clear titles, separating serious case studies from personal experiments/side work. *Use when* you need scannable breadth and want to signal range without diluting the headline work. (Pratibha Joshi.)

8. **Personality-injected contact + about.** Make the human visible: an About page with interests/photos/awards, a contact form styled like iOS messaging, viewer comments, testimonials for credibility. *Use when* trust and rapport close the deal — pair credibility signals (client logos, testimonials) with one genuine personal touch. (Marco Cornacchia, Gabriel Valdivia, Onur Çoban.)

## Cross-cutting build rules (apply regardless of pattern)
- Lead with credibility: surface recognizable client/employer names early (Google, Apple, Linear...) — instant trust.
- Quantify impact in descriptions: "reduced errors," "improved checkout load time" beats adjectives.
- Curate ruthlessly: only show work in the direction you want more of; cut everything else.
- Make contact frictionless and always reachable (email, socials, resume).
- Responsive + cross-device is table stakes, not a feature.

## Build checklist
- [ ] Showcase mechanic matches the discipline being sold (demo-site for devs, structured case study for product/UX, visual feed for craft)?
- [ ] Recognizable client/employer names visible above the fold for instant credibility?
- [ ] Every project description carries at least one measurable outcome (number), not just adjectives?
- [ ] Work curated to the direction you want more of — nothing off-brand left in?
- [ ] Contact (email/socials/resume) reachable from anywhere, not buried?
- [ ] If using a metaphor/3D/motion gimmick: does it stay legible and performant, and does the actual work remain easy to find?
- [ ] Responsive and verified across devices?

> Ties to our experience: pattern 6 (site-as-technical-demo) is exactly our TESQ/02b play — the cinematic Three.js water→space→sun scroll-journey is itself the proof of craft, so our hardware-adaptive perf tiers + dynamic resolution scaling are the "budget performance accordingly" rule made literal.
