// Curated, high-intent "X vs Y" comparison pairs.
// These power the statically-generated, indexable versus pages at
// /compare/<idA>-vs-<idB>. Only pairs listed here are rendered (dynamicParams
// is disabled on the route) so we control indexation and avoid thin/duplicate
// permutations. Add new popular matchups here as the catalog grows.
import { getById, type EV } from "@/lib/ev-data";

/** Each pair is [vehicleIdA, vehicleIdB]. Order = display order (A vs B). */
export const COMPARE_PAIRS: [string, string][] = [
  // ── Mass-market electric cars (highest search demand) ──
  ["tata-nexon-ev-long-range-45-kwh", "mg-windsor-ev-38-kwh"],
  ["tata-nexon-ev-long-range-45-kwh", "mg-zs-ev"],
  ["tata-punch-ev-long-range-40-kwh", "tata-nexon-ev-long-range-45-kwh"],
  ["mg-windsor-ev-pro-52-9-kwh", "tata-nexon-ev-long-range-45-kwh"],
  ["hyundai-creta-electric-long-range-51-4-kwh", "tata-curvv-ev-55-kwh"],
  ["mahindra-be-6-79-kwh", "tata-curvv-ev-55-kwh"],
  ["mahindra-be-6-79-kwh", "hyundai-creta-electric-long-range-51-4-kwh"],
  ["maruti-suzuki-e-vitara-61-kwh", "hyundai-creta-electric-long-range-51-4-kwh"],
  ["maruti-suzuki-e-vitara-61-kwh", "mahindra-be-6-79-kwh"],
  ["tata-harrier-ev-qwd-75-kwh", "mahindra-xev-9e-79-kwh"],
  ["byd-atto-3-superior-60-48-kwh", "mg-zs-ev"],
  // ── Premium / global EVs ──
  ["tesla-model-y-premium-rwd", "byd-sealion-7-premium-rwd"],
  ["tesla-model-y-premium-rwd", "mahindra-be-6-79-kwh"],
  ["hyundai-ioniq-5-84-kwh", "kia-ev6-gt-line-awd-84-kwh"],
  // ── Electric scooters ──
  ["ola-s1-pro-gen-3-4-kwh", "ather-450x-3-7-kwh"],
  ["ola-s1-pro-gen-3-4-kwh", "tvs-iqube-st-5-3-kwh"],
  ["ather-450x-3-7-kwh", "tvs-iqube-st-5-3-kwh"],
  ["ather-rizta-z-3-7-kwh", "tvs-iqube-3-5-kwh"],
  ["bajaj-chetak-c3501-35-series", "tvs-iqube-3-5-kwh"],
  ["ola-s1-x-gen-3-4-kwh", "hero-vida-v2-pro-3-94-kwh"],
  // ── Electric motorcycles ──
  ["ultraviolette-f77-mach-2-standard-7-1-kwh", "revolt-rv400-brz-standard"],
  ["ola-roadster-x-4-5-kwh", "revolt-rv400-brz-standard"],
  ["tork-kratos-r", "revolt-rv400-brz-standard"],
  ["ultraviolette-f77-mach-2-standard-7-1-kwh", "ola-roadster-pro-8-kwh"],

  // ── Expanded cluster: more high-demand matchups ──
  // Budget & compact cars
  ["tata-tiago-ev-long-range-24-kwh", "mg-comet-ev"],
  ["tata-punch-ev-long-range-40-kwh", "mahindra-xuv-3xo-ev-39-4-kwh"],
  ["tata-nexon-ev-long-range-45-kwh", "mahindra-xuv-3xo-ev-39-4-kwh"],
  // Mid-size electric SUVs
  ["hyundai-creta-electric-long-range-51-4-kwh", "mahindra-xev-9e-79-kwh"],
  ["mahindra-be-6-79-kwh", "mahindra-xev-9e-79-kwh"],
  ["tata-curvv-ev-55-kwh", "mahindra-xev-9e-79-kwh"],
  ["maruti-suzuki-e-vitara-61-kwh", "tata-curvv-ev-55-kwh"],
  ["byd-atto-3-superior-60-48-kwh", "hyundai-creta-electric-long-range-51-4-kwh"],
  ["tata-harrier-ev-qwd-75-kwh", "mahindra-be-6-79-kwh"],
  // Premium / global
  ["kia-ev6-gt-line-awd-84-kwh", "byd-seal-premium-82-56-kwh"],
  ["tesla-model-y-premium-rwd", "hyundai-ioniq-5-84-kwh"],
  // Scooters
  ["ather-rizta-z-3-7-kwh", "ola-s1-air-3-kwh"],
  ["bajaj-chetak-c3501-35-series", "ather-rizta-z-3-7-kwh"],
  ["ola-s1-pro-gen-3-4-kwh", "ather-450-apex"],
  ["tvs-iqube-3-5-kwh", "hero-vida-v2-pro-3-94-kwh"],
  // Motorcycles
  ["ola-roadster-x-4-5-kwh", "tork-kratos-r"],
  ["oben-rorr-original-4-4-kwh", "revolt-rv400-brz-standard"],
];

const SEP = "-vs-";

/** URL slug for a pair, e.g. "tata-nexon-ev-...-vs-mg-zs-ev". */
export const pairSlug = (a: string, b: string): string => `${a}${SEP}${b}`;

/** Root-relative path to a versus page (no locale prefix). */
export const comparePath = (a: string, b: string): string => `/compare/${pairSlug(a, b)}`;

/** All versus-page slugs (for generateStaticParams + sitemap). */
export const allPairSlugs = (): string[] =>
  COMPARE_PAIRS.map(([a, b]) => pairSlug(a, b));

/**
 * Resolve a pair slug back to two EVs. Returns null if the slug isn't a
 * recognised curated pair or either id is unknown.
 */
export function resolvePair(slug: string): { a: EV; b: EV } | null {
  const idx = slug.indexOf(SEP);
  if (idx === -1) return null;
  const aId = slug.slice(0, idx);
  const bId = slug.slice(idx + SEP.length);
  const known = COMPARE_PAIRS.some(([x, y]) => x === aId && y === bId);
  if (!known) return null;
  const a = getById(aId);
  const b = getById(bId);
  if (!a || !b) return null;
  return { a, b };
}

/** Other curated pairs that share a brand/category with the given pair (for internal links). */
export function relatedPairs(slug: string, count = 6): { slug: string; a: EV; b: EV }[] {
  const out: { slug: string; a: EV; b: EV }[] = [];
  for (const [x, y] of COMPARE_PAIRS) {
    const s = pairSlug(x, y);
    if (s === slug) continue;
    const a = getById(x);
    const b = getById(y);
    if (a && b) out.push({ slug: s, a, b });
    if (out.length >= count) break;
  }
  return out;
}
