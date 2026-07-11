/* Loupe · buildintent.cjs — AUDIT-2 F5/F6/F44b. Pure, electron-free build-intent predicates, extracted so the smoke
   harness can unit-test the exact classes the owner hit (main.cjs is the Electron entry and cannot be require()'d
   standalone). These decide which build machinery a chat turn deserves; the host stays the orchestrator. */

// A genuine "build me a site" turn (not a loop/critique/small-edit). Gates the interactive Studio machinery
// (Director / Clarify / imagery-ask / palette). B1: Unicode-aware boundary — JS \b is ASCII-only, so Cyrillic
// keywords never matched and realBuild was OFF on Russian briefs.
function isStudioBuildPrompt(p) {
  p = String(p || '');
  if (/^(LOOP MODE|The ATTACHED IMAGE|The page was critiqued|Your last change REGRESSED|🔁|↻)/.test(p)) return false;
  return /(?<![\p{L}\p{N}])(build|create|design|generate|landing|website|web ?site|portfolio|redesign|home ?page|hero section|сайт|лендинг|портфолио|построй|создай|св[её]рстай|редизайн)(?![\p{L}\p{N}])/iu.test(p);
}

// A loop / critique-fix builder turn IS a build (taste-priors floor + a reference exemplar) but NOT the interactive
// studio machinery. isBuildLikeTurn gates GROUNDING; isStudioBuildPrompt gates the interactive pre/post passes.
function isLoopBuildPrompt(p) { return /^(LOOP MODE|The page was critiqued|Your last change REGRESSED|🔁|↻)/.test(String(p || '').trim()); }
function isBuildLikeTurn(p) { return isStudioBuildPrompt(p) || isLoopBuildPrompt(p); }

// AUDIT-2 F6: a genuine FIRST build brief on a pristine project. The positive keyword list silently UNDER-fired on
// natural briefs ("a site for my bakery", "make a storefront", RU "магазин/страница") → the Art Director, imagery ask,
// grounding floor, capability line, build log, zero-write guard, palette and Studio Reviewer all silently skipped.
// Fix: on a pristine project the user is BY DEFINITION building, so treat the first substantive prompt as a real build
// regardless of keyword match. A CLOSED negative list (loop/internal prefixes + pure greetings/meta) — so the fix
// cannot silently OVER-fire the way the positive list silently under-fired. Only consulted when the project is pristine.
function isFirstBuildIntent(p) {
  p = String(p || '').trim();
  if (!p || p.length < 6) return false;
  if (/^(LOOP MODE|The ATTACHED IMAGE|The page was critiqued|Your last change REGRESSED|🔁|↻)/.test(p)) return false;
  // Pure greeting / meta message = the WHOLE prompt is a greeting (only trailing punctuation). NB: no \b after the
  // alternation — JS \b is ASCII-only, so `привет\b` never matched (the same class B1 fixed in isStudioBuildPrompt);
  // anchor the end with `[\s!.?,]*$` instead and use /u. "help me build a site" is NOT caught (letters follow "help").
  if (/^(hi|hello|hey|yo|help|thanks|thank you|what can you do|what's up|whats up|hi there|hello there|привет|здравствуйте?|что ты (умеешь|можешь)|что умеешь)[\s!.?,]*$/iu.test(p)) return false;
  return true;
}

module.exports = { isStudioBuildPrompt, isLoopBuildPrompt, isBuildLikeTurn, isFirstBuildIntent };
