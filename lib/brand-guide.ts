import { byBrandSlug, getBrandBySlug, priceLabel, type EV, type EVCategory } from "@/lib/ev-data";

export const TYPE_WORD: Record<EVCategory, string> = { car: "Cars", scooter: "Scooters", motorcycle: "Bikes" };
export const TYPE_LC: Record<EVCategory, string> = {
  car: "electric cars",
  scooter: "electric scooters",
  motorcycle: "electric bikes",
};
export const TYPE_SINGULAR: Record<EVCategory, string> = {
  car: "electric car",
  scooter: "electric scooter",
  motorcycle: "electric bike",
};
export const CAT_PATH: Record<EVCategory, string> = {
  car: "/catalog/electric-cars",
  scooter: "/catalog/electric-scooters",
  motorcycle: "/catalog/electric-bikes",
};

export interface BrandGuide {
  slug: string; // blog slug, e.g. "tata-electric-cars"
  brandSlug: string; // ev-data brand slug, e.g. "tata"
  category: EVCategory;
}

/** The full set of brand-guide listicles. Add new entries here; pages + POSTS read from this. */
export const BRAND_GUIDES: BrandGuide[] = [
  // Cars
  { slug: "tata-electric-cars", brandSlug: "tata", category: "car" },
  { slug: "mg-electric-cars", brandSlug: "mg", category: "car" },
  { slug: "byd-electric-cars", brandSlug: "byd", category: "car" },
  { slug: "kia-electric-cars", brandSlug: "kia", category: "car" },
  { slug: "tesla-electric-cars-india", brandSlug: "tesla", category: "car" },
  { slug: "hyundai-electric-cars", brandSlug: "hyundai", category: "car" },
  { slug: "mahindra-electric-cars", brandSlug: "mahindra", category: "car" },
  { slug: "bmw-electric-cars", brandSlug: "bmw", category: "car" },
  { slug: "mercedes-benz-electric-cars", brandSlug: "mercedes-benz", category: "car" },
  { slug: "audi-electric-cars", brandSlug: "audi", category: "car" },
  { slug: "volvo-electric-cars", brandSlug: "volvo", category: "car" },
  { slug: "vinfast-electric-cars", brandSlug: "vinfast", category: "car" },
  { slug: "citroen-electric-cars", brandSlug: "citroen", category: "car" },
  // Scooters
  { slug: "ola-electric-scooters", brandSlug: "ola", category: "scooter" },
  { slug: "ather-electric-scooters", brandSlug: "ather", category: "scooter" },
  { slug: "tvs-electric-scooters", brandSlug: "tvs", category: "scooter" },
  { slug: "bajaj-electric-scooters", brandSlug: "bajaj", category: "scooter" },
  { slug: "hero-electric-scooters", brandSlug: "hero", category: "scooter" },
  { slug: "ampere-electric-scooters", brandSlug: "ampere", category: "scooter" },
  // Bikes
  { slug: "ola-electric-bikes", brandSlug: "ola", category: "motorcycle" },
  { slug: "ultraviolette-electric-bikes", brandSlug: "ultraviolette", category: "motorcycle" },
  { slug: "revolt-electric-bikes", brandSlug: "revolt", category: "motorcycle" },
  { slug: "tork-electric-bikes", brandSlug: "tork", category: "motorcycle" },
  { slug: "oben-electric-bikes", brandSlug: "oben", category: "motorcycle" },
];

export const getGuide = (slug: string): BrandGuide | undefined => BRAND_GUIDES.find((g) => g.slug === slug);

export const brandName = (brandSlug: string): string => getBrandBySlug(brandSlug)?.name ?? brandSlug;

export const brandAccent = (brandSlug: string): string => getBrandBySlug(brandSlug)?.accent ?? "#26E0C4";

/** Models for a guide, cheapest first. */
export function guideModels(g: BrandGuide): EV[] {
  return byBrandSlug(g.brandSlug)
    .filter((e) => e.category === g.category)
    .sort((a, b) => (a.priceMinLakh ?? 1e9) - (b.priceMinLakh ?? 1e9));
}

export function guideTitle(g: BrandGuide): string {
  return `${brandName(g.brandSlug)} Electric ${TYPE_WORD[g.category]} in India 2026: Models, Prices & Range`;
}

export function guideMetaDesc(g: BrandGuide): string {
  const n = guideModels(g).length;
  const name = brandName(g.brandSlug);
  return `Every ${name} ${TYPE_LC[g.category]} on sale in India in 2026 — all ${n} models compared on price, real-world range, battery and features to help you choose the right ${name} EV.`;
}

export function guideExcerpt(g: BrandGuide): string {
  const n = guideModels(g).length;
  const name = brandName(g.brandSlug);
  return `A complete list of ${name} ${TYPE_LC[g.category]} in India for 2026 — ${n} models compared on price, range, battery and value.`;
}

export function guideSubtitle(g: BrandGuide): string {
  return `Full lineup, prices & which one to buy`;
}

/** Related guides of the same category (for cross-linking). */
export function relatedGuides(g: BrandGuide, n = 4): BrandGuide[] {
  return BRAND_GUIDES.filter((x) => x.category === g.category && x.slug !== g.slug).slice(0, n);
}

const fmtRange = (ev: EV) => (ev.rangeKmARAI ? `${ev.rangeKmARAI} km` : "—");
const fmtBattery = (ev: EV) => (ev.batteryKwh ? `${ev.batteryKwh} kWh` : "—");
const fmtPower = (ev: EV) => (ev.powerBhp ? `${ev.powerBhp} bhp` : "—");

export interface GuidePick {
  cheapest?: EV;
  longest?: EV;
  powerful?: EV;
}
export function guidePicks(g: BrandGuide): GuidePick {
  const m = guideModels(g);
  if (!m.length) return {};
  const withRange = m.filter((e) => e.rangeKmARAI != null);
  const withPower = m.filter((e) => e.powerBhp != null);
  return {
    cheapest: m[0],
    longest: withRange.sort((a, b) => (b.rangeKmARAI ?? 0) - (a.rangeKmARAI ?? 0))[0],
    powerful: withPower.sort((a, b) => (b.powerBhp ?? 0) - (a.powerBhp ?? 0))[0],
  };
}

export function guideFaqs(g: BrandGuide): { q: string; a: string }[] {
  const name = brandName(g.brandSlug);
  const models = guideModels(g);
  const n = models.length;
  const picks = guidePicks(g);
  const tw = TYPE_LC[g.category];
  const sing = TYPE_SINGULAR[g.category];
  const faqs: { q: string; a: string }[] = [
    {
      q: `How many ${name} ${tw} are there in India?`,
      a: `${name} currently offers ${n} ${tw} in India in 2026: ${models.map((m) => m.name).join(", ")}. New variants are added as they launch.`,
    },
  ];
  if (picks.cheapest) {
    faqs.push({
      q: `Which is the cheapest ${name} ${sing}?`,
      a: `The most affordable ${name} ${sing} is the ${picks.cheapest.name}, priced at ${priceLabel(picks.cheapest)}. Use the price filter on the catalog to sort every model from low to high.`,
    });
  }
  if (picks.longest && picks.longest.rangeKmARAI) {
    faqs.push({
      q: `Which ${name} ${sing} has the longest range?`,
      a: `The ${picks.longest.name} offers the highest claimed range in the ${name} ${tw} lineup at about ${picks.longest.rangeKmARAI} km. Real-world range is usually lower depending on driving style, load and conditions.`,
    });
  }
  faqs.push({
    q: `Is ${name} a good EV brand in India?`,
    a: `${name} is among the brands shaping India's EV market in 2026. The right choice depends on your budget, daily distance and priorities — compare the ${name} ${tw} below against rivals on range, price and features before deciding.`,
  });
  return faqs;
}

export { priceLabel, fmtRange, fmtBattery, fmtPower };
