// source: baseline/sites/02b-cube-B2-slipstream (v-c.html + scene.js) · project: deZign-pro 02b/TESQ · saved: 2026-06-18
// Scroll-journey wiring: ONE normalized progress value (pCur) drives BOTH the WebGL camera
// path AND every DOM/scene beat. Lenis owns smooth scroll; GSAP ScrollTrigger is synced to it;
// the full-screen canvas is FIXED (no ScrollTrigger pinning) and simply reads window.scrollY.
// Faithful reconstruction of the shipped wiring — constants are the real production values.
// Pairs with techniques/scroll-journey-choreography.md.

/* ============ PAGE SIDE (v-c.html) ============ */
// Vendor: vendor/lenis.min.js, vendor/gsap.min.js, vendor/ScrollTrigger.min.js
const hasGsap = typeof gsap !== 'undefined';

if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });    // Lenis owns native scroll
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }   // its own RAF loop
  requestAnimationFrame(raf);

  // Sync GSAP ScrollTrigger to the SMOOTHED scroll position so DOM + scene never drift.
  if (hasGsap && typeof ScrollTrigger !== 'undefined') lenis.on('scroll', ScrollTrigger.update);

  // Anchor nav scrolls THROUGH Lenis so it stays smooth.
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const sel = a.getAttribute('href');
      const tg = sel === '#top' ? document.body : document.querySelector(sel);
      if (!tg) return;
      e.preventDefault();
      lenis.scrollTo(tg, { duration: 1.4 });
    });
  });
}

// ScrollTrigger is used ONLY for lightweight DOM reveals — NEVER to pin the canvas.
if (hasGsap && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.eyebrow,.panel')
    .filter((el) => !el.closest('.tab-panel'))
    .forEach((el) => gsap.from(el, {
      opacity: 0, y: 22, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    }));
}

/* ============ SCENE SIDE (scene.js render loop) ============ */
// The fixed WebGL canvas reads window.scrollY (which Lenis moves) ONCE per frame, normalizes
// to 0..1, then glides it into pCur. pCur is the single source of truth for the whole journey.
let pCur = 0;
function frame() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? window.scrollY / max : 0;   // raw scroll progress 0..1
  pCur += (p - pCur) * 0.07;                       // cinematic glide (less twitchy than raw)

  const camPoint = pathAt(pCur);                   // pCur -> point on the camera path spline
  camera.position.copy(camPoint);

  // Every journey beat is a smoothstep DIRECTLY on pCur (water -> space -> sun/moon), e.g.:
  //   const climbUp = smoothstep01(0.02, 0.44, pCur);              // ascent out of the sea
  //   const turnP   = smoothstep01(0.74, 0.82, pCur);              // landing 180deg yaw
  //   const arcP    = smoothstep01(0.87, 1.0,  pCur);              // slow arc down to the surface
  // DOM section state (active nav, scrims, reveals) reads the SAME pCur, so canvas + UI stay locked.

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
// frame();

// WHY no ScrollTrigger pinning of the canvas: it is position:fixed and always full-screen, so
// "pinning" is unnecessary and would fight Lenis. Scroll simply advances pCur; the scene follows.
