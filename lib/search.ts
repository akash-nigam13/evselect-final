import { EVS, BRANDS, priceLabel, CATEGORY_LABELS } from "@/lib/ev-data";
import { POSTS, postsByDate } from "@/lib/blog-posts";
import { localizedHref, type Locale } from "@/lib/i18n";

export type SearchGroup = "vehicle" | "brand" | "article" | "page";

export interface SearchItem {
  group: SearchGroup;
  title: string; // English display
  titleHi?: string; // Hindi display (optional)
  sub?: string;
  subHi?: string;
  path: string; // English route; localized at render time
  keywords: string; // lowercased haystack (incl. Hindi)
  weight: number; // base popularity
}

const lc = (s: string) => s.toLowerCase();

/** Static tool / section pages, bilingual. */
const PAGES: SearchItem[] = [
  { group: "page", title: "Compare EVs", titleHi: "EVs की तुलना करें", sub: "Side-by-side tool", subHi: "साथ-साथ टूल", path: "/compare-electric-vehicles", keywords: "compare ev tool तुलना साथ", weight: 9 },
  { group: "page", title: "All electric vehicles", titleHi: "सभी इलेक्ट्रिक वाहन", sub: "Full catalogue with filters", subHi: "फ़िल्टर के साथ कैटलॉग", path: "/catalog/all", keywords: "all catalog catalogue vehicles filter सभी कैटलॉग", weight: 7 },
  { group: "page", title: "Browse by brand", titleHi: "ब्रांड से ब्राउज़ करें", sub: "Every EV brand", subHi: "हर EV ब्रांड", path: "/catalog", keywords: "brands browse ब्रांड", weight: 6 },
  { group: "page", title: "Cost & range calculators", titleHi: "कॉस्ट और रेंज कैलकुलेटर", sub: "EV vs petrol, range estimator", subHi: "EV बनाम पेट्रोल, रेंज", path: "/ev-calculators", keywords: "tools cost range calculator petrol टूल कॉस्ट रेंज कैलकुलेटर", weight: 8 },
  { group: "page", title: "EV Learn hub", titleHi: "EV लर्न हब", sub: "EV basics explained", subHi: "EV की बुनियादी बातें", path: "/ev-guides", keywords: "learn basics glossary guide लर्न सीखें", weight: 5 },
  { group: "page", title: "EV battery guide", titleHi: "EV बैटरी गाइड", sub: "How EV batteries work", subHi: "EV बैटरी कैसे काम करती है", path: "/about-ev-batteries", keywords: "battery guide बैटरी", weight: 5 },
  { group: "page", title: "EV news", titleHi: "EV समाचार", sub: "Latest India EV news", subHi: "ताज़ा EV खबरें", path: "/ev-news", keywords: "news latest समाचार खबर", weight: 5 },
  { group: "page", title: "EV blog & guides", titleHi: "EV ब्लॉग और गाइड", sub: "Buying guides & analysis", subHi: "खरीद गाइड और विश्लेषण", path: "/blog", keywords: "blog guides articles ब्लॉग लेख गाइड", weight: 6 },
];

function buildIndex(): SearchItem[] {
  const vehicles: SearchItem[] = EVS.map((ev) => ({
    group: "vehicle",
    title: ev.name + (ev.variant ? ` ${ev.variant}` : ""),
    sub: `${ev.brand} · ${priceLabel(ev)}`,
    path: `/catalog/${ev.id}`,
    keywords: lc(
      [ev.name, ev.fullName, ev.brand, ev.model, ev.variant ?? "", ev.bodyType, CATEGORY_LABELS[ev.category]].join(" ")
    ),
    weight: ev.upcoming ? 2 : 3,
  }));

  const brands: SearchItem[] = BRANDS.map((b) => ({
    group: "brand",
    title: b.name,
    sub: `${b.count} ${b.count === 1 ? "model" : "models"}`,
    subHi: `${b.count} मॉडल`,
    path: `/catalog/brand/${b.slug}`,
    keywords: lc(`${b.name} ${b.slug}`),
    weight: 4,
  }));

  const articles: SearchItem[] = POSTS.map((p) => ({
    group: "article",
    title: p.title,
    titleHi: p.hiTitle,
    sub: p.category,
    path: `/blog/${p.slug}`,
    keywords: lc([p.title, p.hiTitle ?? "", p.subtitle, p.hiSubtitle ?? "", p.excerpt, p.category].join(" ")),
    weight: p.news ? 3 : 2,
  }));

  return [...PAGES, ...vehicles, ...brands, ...articles];
}

const INDEX = buildIndex();

const isSubsequence = (q: string, hay: string): boolean => {
  let i = 0;
  for (let j = 0; j < hay.length && i < q.length; j++) {
    if (hay[j] === q[i]) i++;
  }
  return i === q.length;
};

function displayTitle(item: SearchItem, locale: Locale): string {
  return locale === "hi" && item.titleHi ? item.titleHi : item.title;
}

function scoreItem(item: SearchItem, q: string, tokens: string[], locale: Locale): number {
  const title = lc(displayTitle(item, locale));
  const enTitle = lc(item.title);
  const kw = item.keywords;
  let s = 0;
  if (title === q || enTitle === q) s = 1000;
  else if (title.startsWith(q) || enTitle.startsWith(q)) s = 600;
  else if (title.includes(q) || enTitle.includes(q)) s = 350;
  else if (kw.includes(q)) s = 200;
  else if (tokens.length > 1 && tokens.every((tk) => kw.includes(tk))) s = 160;
  else if (q.length >= 3 && isSubsequence(q, kw)) s = 50;
  else return 0;
  return s + item.weight;
}

export interface SearchResult {
  groups: Record<SearchGroup, SearchItem[]>;
  isPopular: boolean;
  total: number;
}

const CAPS_QUERY: Record<SearchGroup, number> = { vehicle: 6, brand: 4, article: 4, page: 3 };
const CAPS_POPULAR: Record<SearchGroup, number> = { vehicle: 4, brand: 4, article: 3, page: 2 };

/** Curated "never empty" defaults shown when the query is blank or has no hits. */
function popular(): Record<SearchGroup, SearchItem[]> {
  const prefBrands = ["Tata", "Ola", "Ather", "Mahindra", "MG", "Tesla"];
  const vehicles = prefBrands
    .map((bn) => INDEX.find((i) => i.group === "vehicle" && i.keywords.includes(lc(bn))))
    .filter((x): x is SearchItem => !!x)
    .slice(0, CAPS_POPULAR.vehicle);
  const brands = prefBrands
    .map((bn) => INDEX.find((i) => i.group === "brand" && lc(i.title) === lc(bn)))
    .filter((x): x is SearchItem => !!x)
    .slice(0, CAPS_POPULAR.brand);
  const newestSlugs = postsByDate().slice(0, CAPS_POPULAR.article).map((p) => `/blog/${p.slug}`);
  const articles = newestSlugs
    .map((path) => INDEX.find((i) => i.group === "article" && i.path === path))
    .filter((x): x is SearchItem => !!x);
  const pages = INDEX.filter((i) => i.group === "page").slice(0, CAPS_POPULAR.page);
  return { vehicle: vehicles, brand: brands, article: articles, page: pages };
}

/** Main search. Always returns something (falls back to popular). */
export function search(rawQuery: string, locale: Locale = "en"): SearchResult {
  const q = lc(rawQuery.trim());
  if (!q) {
    const groups = popular();
    return { groups, isPopular: true, total: countGroups(groups) };
  }
  const tokens = q.split(/\s+/).filter(Boolean);
  const scored = INDEX.map((item) => ({ item, score: scoreItem(item, q, tokens, locale) })).filter((x) => x.score > 0);
  scored.sort((a, b) => b.score - a.score);

  const groups: Record<SearchGroup, SearchItem[]> = { vehicle: [], brand: [], article: [], page: [] };
  for (const { item } of scored) {
    if (groups[item.group].length < CAPS_QUERY[item.group]) groups[item.group].push(item);
  }
  const total = countGroups(groups);
  if (total === 0) {
    const pop = popular();
    return { groups: pop, isPopular: true, total: countGroups(pop) };
  }
  return { groups, isPopular: false, total };
}

const countGroups = (g: Record<SearchGroup, SearchItem[]>) =>
  g.vehicle.length + g.brand.length + g.article.length + g.page.length;

/** Resolve an item's locale-aware href. */
export const itemHref = (item: SearchItem, locale: Locale): string => localizedHref(item.path, locale);

/** Group display order for the dropdown. */
export const GROUP_ORDER: SearchGroup[] = ["vehicle", "brand", "article", "page"];

/** Rotating placeholder suggestions (the "blinking" prompts), per locale. */
export const PLACEHOLDERS: Record<Locale, string[]> = {
  en: [
    "Tata Nexon EV range",
    "best EV under ₹15 lakh",
    "Ola S1 Pro price",
    "Ather 450X vs Ola S1",
    "home charging cost",
    "Tesla Model Y price",
    "longest range electric SUV",
    "cheapest electric scooter",
  ],
  hi: [
    "Tata Nexon EV रेंज",
    "₹15 लाख से कम बेस्ट EV",
    "Ola S1 Pro कीमत",
    "Ather 450X बनाम Ola S1",
    "घर पर चार्जिंग खर्च",
    "Tesla Model Y कीमत",
    "सबसे ज़्यादा रेंज वाली इलेक्ट्रिक SUV",
    "सबसे सस्ता इलेक्ट्रिक स्कूटर",
  ],
};
