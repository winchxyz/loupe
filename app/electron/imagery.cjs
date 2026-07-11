// #2 IMAGERY FORK — pure, electron-free module so the gate is UNIT-TESTABLE (smoke locks it on the owner's real prompt).
// The clarify LLM under-asks the photography-vs-illustration decision, so the HOST asks it deterministically for
// PHOTO-CENTRIC briefs (businesses whose sites normally live on real photography) UNLESS the brief already states the
// imagery MEDIUM.
//
// REGRESSION THIS FILE EXISTS FOR (2026-07-01): the MEDIUM regex matched bare substrings, so "strong typoGRAPHIC
// hierarchy" in a normal craft-bar sentence read as "medium already stated" and silently suppressed the ask on the
// owner's real coffee brief. CLASS FIX: every Latin stem is \b-anchored at its START (mid-word can never match);
// stems stay un-anchored at the END so plurals/derivations match (photo→photography, illustrat→illustrated).
// Cyrillic terms carry NO \b — JS \b is ASCII-only and never fires next to Cyrillic — ambiguous Cyrillic stems use a
// negative Cyrillic-letter lookahead instead, so the RU "fashion" stem below does not also swallow the RU word for "model".
const PHOTO_CENTRIC_RE = /\b(coffee|roaster|roastery|cafe|caf[eé]|restaurant|bistro|diner|bakery|patisserie|food|cuisine|chef|winery|vineyard|brewery|distillery|goods|boutique|e-?commerce|portfolio|photograph|travel|tours?\b|touring|tourism|hotel|hostel|resort|hospitality|salon|barber|gym|fitness|yoga|wedding|florist|interior|furniture|architect|realtor|realty|property|fashion|apparel|clothing|jewel|skincare|cosmetic|beauty\b|beautician|flower|farm|garden|shop|store)|real ?estate|кофе|кафе|обжар|ресторан|пекарн|отел|портфол|фитнес|салон|интерьер|недвижим|мебел|ферм|мод[аеы](?![а-яё])|одежд|космет|путешеств/i;
// Word-hazards deliberately EXCLUDED from PHOTO_CENTRIC_RE: "menu" (UI word — dropdown/hamburger menu), bare "tour"
// (tournament), bare "beaut" (beautiful), and the RU "fashion" stem vs the RU word for "model". Each earned its place by a real or obvious false hit.
const MEDIUM_STATED_RE = /\b(photo|illustrat|gradient|graphic)|no ?imagery|фото|иллюстрац|градиент/i;
function isPhotoCentricBuild(p) { p = String(p || ''); return PHOTO_CENTRIC_RE.test(p) && !MEDIUM_STATED_RE.test(p); }

module.exports = { PHOTO_CENTRIC_RE, MEDIUM_STATED_RE, isPhotoCentricBuild };
