/* deZign+ · promptlang.cjs — the PROMPT VOCABULARY (owner-designed 2026-07-03): a controlled set of
   `key=value` terms the user can put in a /flow brief. Each term is BOUND to real knowledge (structure
   playbooks in baseline/library/patterns/, authored archetype/motion/imagery expansions) and unfolds
   host-side into a binding block appended to the brief — so a word like `structure=bento` reliably means
   the bento playbook, not whatever the model improvises. The vocabulary is a MENU, not a cage: free-text
   briefs work exactly as before; unknown values are reported, never silently dropped. */

const STRUCTURES = {
  bento: { rel: 'patterns/bento-span-choreography.md', line: 'the page is carried by a span-choreographed bento (6-col melody like 4+2 / 2+2-tall / 2+4); every tile earns its cell with a drawn CSS micro-visualization' },
  poster: { rel: 'patterns/poster-scroll.md', line: 'the page is a sequence of full-viewport typographic posters — 9-12vw scale moments, inversion as punctuation, deliberate edge tension' },
  diagram: { rel: 'patterns/diagram-as-layout.md', line: 'the core section IS a diagram: nodes in a 1fr-auto grid with real SVG arrows and a dashed return arc drawn on scroll' },
  editorial: { rel: 'patterns/split-discipline.md', line: 'editorial long-form spine under strict split discipline: max two splits, never 50/50 twice, one full-bleed break, modulated rhythm' },
  dwell: { rel: 'patterns/scroll-dwell-sequence.md', line: 'a pinned scroll-dwell sequence (CSS sticky stage over a tall track, 3-5 beats lit by scroll progress, stacked mobile fallback)' },
  marquee: { rel: 'patterns/kinetic-type-marquee.md', line: 'a kinetic outline-type marquee band divides sections (poster scale at whisper weight, mask-faded edges)' },
  'numeral-rail': { rel: 'patterns/numeral-rail.md', line: 'steps/chapters ride an oversized outline-numeral rail (sticky 8rem numerals dwelling beside their copy)' },
  'demo-hero': { rel: 'patterns/self-demonstrating-hero.md', line: 'the hero PERFORMS the product: a chrome-framed CSS miniature runs a scripted loop (act → status → verified), 6-10s cycle' },
};

const ARCHETYPES = {
  'engineer-grid': 'flat paper #fafafa + ink #171717, hairlines instead of shadows, JetBrains-Mono machine voice for labels/values, ONE prism accent moment; calm, exact, instrument-like',
  'luxury-dark': 'near-black ground, ONE metallic/antique accent, serif display over a quiet sans, letter-spaced caps, slow confident motion, generous negative space',
  'brutalist-tech': 'raw visible grids, extreme type-scale contrast (poster display vs micro-mono), utilitarian black/white + one signal color, zero rounding, structure exposed',
  'swiss-grid': 'strict 12-column grid, ONE saturated accent (Klein blue / safety orange class), grotesk sans, asymmetric compositions, whitespace as the material',
  'retro-terminal': 'phosphor mono type on near-black, scanline/dither texture, terminal chrome panels, data-dense HUD blocks, blinking-caret life',
  'editorial-serif': 'magazine serif display + humanist sans, column rules and drop caps, warm paper, photography-led sections, classical proportions',
  'soft-organic': 'cream ground, rounded organic shapes, gentle tonal gradients inside ONE hue family, airy rhythm, humane warm copy',
};

const AXES = {
  imagery: {
    photo: 'IMAGERY: real photography — the hero and key sections use <img data-gen="concise subject"> real licensed photos.',
    illustration: 'IMAGERY: CSS/SVG illustrations only — no stock photos, no <img data-gen>; deliberate drawn visuals and diagrams.',
    minimal: 'IMAGERY: typography-led, minimal imagery — no photos; layout, type and color carry the design.',
  },
  motion: {
    calm: 'MOTION: calm and exact — transform-only entrance reveals, precise hovers, one quiet continuous system; nothing decorative.',
    rich: 'MOTION: rich — GSAP via CDN allowed: scroll-driven reveals, one kinetic/continuous system, hover physics; everything eased, transform-only, nothing jitters.',
    webgl: 'MOTION: rich + a WebGL moment (three.js via CDN) as the hero or a background texture, plus smooth scrolling (Lenis via CDN) and GSAP reveals; ship a static fallback if WebGL fails to init.',
  },
  density: {
    airy: 'DENSITY: airy — few ideas per viewport, oversized whitespace, each section one statement.',
    dense: 'DENSITY: dense — packed information design: tight grids, data readouts, micro-labels; density is the aesthetic, legibility still wins.',
  },
};

// scan a brief for key=value vocabulary; returns { expanded, used, unknown }
function expandBrief(brief) {
  const b = String(brief || '');
  const used = [], unknown = [], lines = [];
  const grab = (key) => {
    const m = b.match(new RegExp('\\b' + key + '=([a-z0-9-]+)', 'i'));
    return m ? m[1].toLowerCase() : null;
  };
  const st = grab('structure');
  if (st) {
    if (STRUCTURES[st]) { used.push('structure=' + st); lines.push('STRUCTURE (binding): ' + STRUCTURES[st].line + '. Its playbook is provided — apply the skeleton, use the variation axes, respect the don\'ts.'); }
    else unknown.push('structure=' + st + ' (known: ' + Object.keys(STRUCTURES).join(', ') + ')');
  }
  const ar = grab('archetype');
  if (ar) {
    if (ARCHETYPES[ar]) { used.push('archetype=' + ar); lines.push('ARCHETYPE (binding): ' + ar + ' — ' + ARCHETYPES[ar] + '. Commit fully; name it in DESIGN.md.'); }
    else unknown.push('archetype=' + ar + ' (known: ' + Object.keys(ARCHETYPES).join(', ') + ')');
  }
  for (const axis of Object.keys(AXES)) {
    const v = grab(axis);
    if (!v) continue;
    if (AXES[axis][v]) { used.push(axis + '=' + v); lines.push(AXES[axis][v]); }
    else unknown.push(axis + '=' + v + ' (known: ' + Object.keys(AXES[axis]).join(', ') + ')');
  }
  if (!lines.length) return { expanded: b, used, unknown };
  return {
    expanded: b + '\n\n[USER VOCABULARY — these are the user\'s explicit, BINDING choices:\n- ' + lines.join('\n- ') + '\n]',
    used, unknown,
  };
}

// compact in-chat cheatsheet for /guide
function cheatsheet() {
  return [
    '**Prompt vocabulary** — add `key=value` words to a `/flow` brief; each is bound to real library knowledge (free text still works; full guide: `app/docs/PROMPT-GUIDE.md`):',
    '`structure=` ' + Object.keys(STRUCTURES).join(' · '),
    '`archetype=` ' + Object.keys(ARCHETYPES).join(' · '),
    '`imagery=` ' + Object.keys(AXES.imagery).join(' · ') + '   `motion=` ' + Object.keys(AXES.motion).join(' · ') + '   `density=` ' + Object.keys(AXES.density).join(' · '),
    '**Template:** `/flow Site for "<NAME>" — <what it is, who for>. structure=bento archetype=swiss-grid imagery=photo motion=rich density=airy. Pages: <3-5 pages>. <2-3 sentences of real content demands>`',
  ].join('\n');
}

module.exports = { expandBrief, cheatsheet, STRUCTURES, ARCHETYPES, AXES };
