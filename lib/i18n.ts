// ── Locale configuration ─────────────────────────────────────────
// "en" is the default (served at the root, no prefix).
// "hi" is the live pilot. te/ta/bn are planned (architecture ready,
// content not yet populated — keep them OUT of LOCALES until ready
// so we never publish empty/duplicate pages).
export const DEFAULT_LOCALE = "en" as const;
export const LOCALES = ["en", "hi"] as const;
export const PLANNED_LOCALES = ["te", "ta", "bn"] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  hi: "हिन्दी",
  te: "తెలుగు",
  ta: "தமிழ்",
  bn: "বাংলা",
};

/** BCP-47 lang attribute per locale. */
export const LOCALE_LANG: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  te: "te-IN",
  ta: "ta-IN",
  bn: "bn-IN",
};

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

/** URL prefix for a locale ("" for en, "/hi" for hi…). */
export const localePrefix = (l: Locale): string => (l === DEFAULT_LOCALE ? "" : `/${l}`);

/**
 * Which root-relative paths have a published translation per locale.
 * As we roll out more Hindi pages, add their paths here. English ("en")
 * is the source and always "has" every page.
 */
const TRANSLATED: Partial<Record<Locale, Set<string>>> = {
  hi: new Set<string>([
    "/",
    "/compare",
    "/catalog",
    "/catalog/all",
    "/tools",
    "/learn",
    "/news",
    "/blog",
    "/privacy",
    "/terms",
    "/about-ev-batteries",
    "/blog/category/buying-guide",
    "/blog/category/battery-tech",
    "/blog/category/charging",
    "/blog/category/cost-ownership",
    "/blog/category/range-efficiency",
    "/blog/category/policy-incentives",
    "/blog/category/market-news",
    "/blog/home-ev-charging-cost-india",
    "/blog/how-to-choose-first-ev-india",
    "/blog/real-world-range-vs-arai-india",
    "/blog/ev-resale-value-battery-health-india",
    "/blog/ev-subsidies-road-tax-by-state-india-2026",
    "/blog/india-ev-sales-fy2026",
    "/blog/maruti-e-vitara-first-ev-launch",
    "/blog/india-ev-charging-network-2026",
    "/blog/tesla-model-y-price-cut-india-2026",
    "/ev-subsidies-india",
    "/ev-charging-station-setup-india",
    "/about",
    "/editorial-policy",
    "/advertising-disclosure",
  ]),
};

const normPath = (path: string) => {
  const clean = path === "/" ? "/" : path.replace(/\/+$/, "");
  return clean || "/";
};

/** Strip any query string / hash, returning just the route path. */
const basePath = (path: string) => normPath(path.split(/[?#]/)[0]);

/**
 * Dynamic route families that are fully translated for Hindi via a single
 * /hi/... route (so we don't enumerate every id/slug in the set above):
 *  - /catalog/<vehicle-id>
 *  - /catalog/brand/<brand-slug>
 */
const HI_DYNAMIC: RegExp[] = [/^\/catalog\/brand\/[^/]+$/, /^\/catalog\/[^/]+$/];

/** Is there a published translation of `path` for locale `l`? */
export function hasTranslation(path: string, l: Locale): boolean {
  if (l === DEFAULT_LOCALE) return true;
  const base = basePath(path);
  if (TRANSLATED[l]?.has(base)) return true;
  if (l === "hi" && HI_DYNAMIC.some((re) => re.test(base))) return true;
  return false;
}

/**
 * Build a locale-aware href. Falls back to the English route when the
 * localized version isn't published yet (avoids dead /hi/* links).
 * localizedHref("/", "hi") -> "/hi"   (translated)
 * localizedHref("/compare", "hi") -> "/compare"  (not yet translated)
 */
export function localizedHref(path: string, l: Locale): string {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  if (l !== DEFAULT_LOCALE && !hasTranslation(path, l)) return clean || "/";
  const pref = localePrefix(l);
  return `${pref}${clean}` || "/";
}

/** Detect the locale from a pathname (e.g. "/hi/compare" -> "hi"). */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg && isLocale(seg) ? (seg as Locale) : "en";
}

/** Strip the locale prefix, returning the root-relative path. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0]) && parts[0] !== "en") parts.shift();
  return "/" + parts.join("/");
}

// ── Dictionaries ──────────────────────────────────────────────────
type Dict = Record<string, string>;

const en: Dict = {
  "nav.catalog": "Catalog",
  "nav.brands": "Brands",
  "nav.compare": "Compare",
  "nav.tools": "Tools",
  "nav.learn": "Learn",
  "nav.news": "News",
  "nav.blog": "Blog",
  "nav.compareCta": "Compare EVs",
  "nav.cars": "Electric Cars",
  "nav.scooters": "Electric Scooters",
  "nav.bikes": "Electric Bikes",
  "nav.allBrands": "All brands",
  "footer.tagline":
    "India's one-stop EV knowledge hub. Learn about electric vehicles, compare 140+ models, calculate running costs, and choose with confidence — updated for 2026.",
  "footer.explore": "Explore",
  "footer.learnTools": "Learn & Tools",
  "footer.company": "Company",
  "footer.rights": "All rights reserved.",
  "home.badge": "Updated for 2026",
  "home.h1a": "Learn. Compare.",
  "home.h1b": "Choose your EV.",
  "home.sub":
    "India's one-stop hub for everything electric. Browse cars, scooters and bikes, compare them side by side, calculate your savings, and learn the tech — all in one place.",
  "home.compare": "Compare EVs",
  "home.browse": "Browse the catalog",
  "common.models": "EV models",
  "common.brands": "Brands",
  "common.categories": "Categories",
  // catalog / facets
  "cat.all": "All",
  "cat.cars": "Cars",
  "cat.scooters": "Scooters",
  "cat.bikes": "Bikes",
  "facet.filters": "Filters",
  "facet.clear": "Clear",
  "facet.maxPrice": "Max price",
  "facet.minRange": "Min range",
  "facet.dcFast": "DC fast charging",
  "facet.brand": "Brand",
  "facet.bodyType": "Body type",
  "facet.drivetrain": "Drivetrain",
  "facet.seats": "Seats",
  "facet.seatsWord": "seats",
  "facet.searchModels": "Search models…",
  "facet.showing": "Showing",
  "facet.of": "of",
  "facet.modelsWord": "models",
  "facet.noMatch": "No EVs match these filters.",
  "facet.clearAll": "Clear all filters",
  "facet.showResults": "Show {n} results",
  "sort.priceAsc": "Price: low to high",
  "sort.priceDesc": "Price: high to low",
  "sort.rangeDesc": "Range: high to low",
  "sort.powerDesc": "Power: high to low",
  "sort.name": "Name: A–Z",
  // brand explorer
  "brand.allTab": "All brands",
  "brand.search": "Search brands…",
  "brand.model": "model",
  "brand.models": "models",
  "brand.viewLineup": "View lineup",
  "brand.browseAll": "Or browse all {n} models with filters",
  "brand.noMatch": "No brands match.",
  "brand.compareBrand": "Compare {name}",
  // EV card
  "card.viewSpecs": "View specs",
  "card.compare": "Compare",
  "card.upcoming": "Upcoming",
  "card.kmRange": "km range",
  // compare
  "picker.select": "Select",
  "picker.vehicle": "a vehicle",
  "picker.searchByName": "Search by name or brand",
  "picker.changeVehicle": "Change vehicle",
  "picker.searchAll": "Search 140+ EVs…",
  "picker.noMatch": "No EVs match that search.",
  "cmp.spec": "Spec",
  "cmp.highlights": "Highlights",
  "cmp.leads": "Leads {n} specs",
  "cmp.swap": "Swap",
  "cmp.reset": "Reset",
  "cmp.addThird": "Add a third EV",
  "cmp.empty": "Select two vehicles above to generate a live comparison",
  "cmp.popular": "Popular comparisons",
  "cmp.fullSpecs": "Full specs:",
  "row.price": "Starting price",
  "row.body": "Body type",
  "row.battery": "Battery",
  "row.rangeArai": "Range (claimed)",
  "row.rangeReal": "Real-world range",
  "row.power": "Power",
  "row.torque": "Torque",
  "row.accel": "Acceleration",
  "row.top": "Top speed",
  "row.fastkw": "Fast charge",
  "row.fasttime": "Fast charge time",
  "row.actime": "Full charge",
  "row.drive": "Drivetrain",
  "row.seat": "Seating",
  "row.boot": "Boot / storage",
  "row.weight": "Kerb weight",
  "row.year": "Model year",
  // glossary
  "gl.search": "Search terms — e.g. CCS2, regen, kWh…",
  "gl.term": "term",
  "gl.terms": "terms",
  "gl.found": "found",
  "gl.noMatch": "No terms match",
  // article shell
  "article.related": "Related reads",
  "article.keep": "Keep reading",
  "article.read": "Read",
  "article.readWord": "read",
  "article.ctaTitle": "Compare before you buy",
  "article.ctaSub": "Line up any two or three EVs on range, battery, price and charging — side by side.",
  "article.ctaBtn": "Open Compare Tool",
  "article.ctaTools": "Cost & range calculators",
  // vehicle detail page
  "ev.back": "Back to catalog",
  "ev.exShowroom": "ex-showroom",
  "ev.compareThis": "Compare this EV",
  "ev.specsEyebrow": "Specifications",
  "ev.specsTitle": "The full picture",
  "ev.grpBattery": "Battery & Range",
  "ev.grpPerf": "Performance",
  "ev.grpCharging": "Charging",
  "ev.grpPractical": "Practicality",
  "ev.acCharge": "AC charging",
  "ev.fullChargeTime": "Full charge time",
  "ev.highlights": "Highlights",
  "ev.similarEyebrow": "Compare with similar",
  "ev.closestRivals": "Closest rivals",
  "ev.similarSub": "{cat} priced nearest to the {name}. Put them head-to-head in the compare tool.",
  "ev.compareBoth": "Compare both",
  "ev.ctaTitle": "Ready to make a decision?",
  "ev.ctaSub": "Stack the {name} against any other EV — specs, charging and value, side by side.",
  "ev.tileRange": "ARAI Range",
  "ev.tileAccel": "Acceleration",
  "ev.catcar": "Electric Cars",
  "ev.catscooter": "Electric Scooters",
  "ev.catbike": "Electric Bikes",
  "ev.summary": "{name} is a {body} in the {cat} segment.",
  // site search
  "search.aria": "Search EVSelect",
  "search.gVehicles": "Vehicles",
  "search.gBrands": "Brands",
  "search.gArticles": "Articles",
  "search.gPages": "Tools & pages",
  "search.popular": "Popular searches",
  "search.hint": "Type to search vehicles, brands & guides",
  "search.viewAll": "See all results",
  // blog search
  "blog.search": "Search articles…",
  "blog.results": "{n} matching articles",
  "blog.noMatch": "No exact match — showing all articles",
};

const hi: Dict = {
  "nav.catalog": "कैटलॉग",
  "nav.brands": "ब्रांड",
  "nav.compare": "तुलना करें",
  "nav.tools": "टूल्स",
  "nav.learn": "जानें",
  "nav.news": "समाचार",
  "nav.blog": "ब्लॉग",
  "nav.compareCta": "EV तुलना करें",
  "nav.cars": "इलेक्ट्रिक कारें",
  "nav.scooters": "इलेक्ट्रिक स्कूटर",
  "nav.bikes": "इलेक्ट्रिक बाइक",
  "nav.allBrands": "सभी ब्रांड",
  "footer.tagline":
    "भारत का वन-स्टॉप EV नॉलेज हब। इलेक्ट्रिक वाहनों के बारे में जानें, 140+ मॉडलों की तुलना करें, चलने का खर्च निकालें और भरोसे के साथ चुनें — 2026 के लिए अपडेटेड।",
  "footer.explore": "एक्सप्लोर करें",
  "footer.learnTools": "जानें और टूल्स",
  "footer.company": "कंपनी",
  "footer.rights": "सर्वाधिकार सुरक्षित।",
  "home.badge": "2026 के लिए अपडेटेड",
  "home.h1a": "जानें। तुलना करें।",
  "home.h1b": "अपनी EV चुनें।",
  "home.sub":
    "इलेक्ट्रिक से जुड़ी हर चीज़ के लिए भारत का वन-स्टॉप हब। कारें, स्कूटर और बाइक ब्राउज़ करें, उनकी साथ-साथ तुलना करें, अपनी बचत निकालें और तकनीक को समझें — सब एक ही जगह।",
  "home.compare": "EV तुलना करें",
  "home.browse": "कैटलॉग ब्राउज़ करें",
  "common.models": "EV मॉडल",
  "common.brands": "ब्रांड",
  "common.categories": "श्रेणियाँ",
  // catalog / facets
  "cat.all": "सभी",
  "cat.cars": "कारें",
  "cat.scooters": "स्कूटर",
  "cat.bikes": "बाइक",
  "facet.filters": "फ़िल्टर",
  "facet.clear": "साफ़ करें",
  "facet.maxPrice": "अधिकतम कीमत",
  "facet.minRange": "न्यूनतम रेंज",
  "facet.dcFast": "DC फ़ास्ट चार्जिंग",
  "facet.brand": "ब्रांड",
  "facet.bodyType": "बॉडी टाइप",
  "facet.drivetrain": "ड्राइवट्रेन",
  "facet.seats": "सीटें",
  "facet.seatsWord": "सीटें",
  "facet.searchModels": "मॉडल खोजें…",
  "facet.showing": "दिखा रहे हैं",
  "facet.of": "में से",
  "facet.modelsWord": "मॉडल",
  "facet.noMatch": "इन फ़िल्टर से कोई EV मेल नहीं खाती।",
  "facet.clearAll": "सभी फ़िल्टर साफ़ करें",
  "facet.showResults": "{n} परिणाम दिखाएँ",
  "sort.priceAsc": "कीमत: कम से ज़्यादा",
  "sort.priceDesc": "कीमत: ज़्यादा से कम",
  "sort.rangeDesc": "रेंज: ज़्यादा से कम",
  "sort.powerDesc": "पावर: ज़्यादा से कम",
  "sort.name": "नाम: A–Z",
  // brand explorer
  "brand.allTab": "सभी ब्रांड",
  "brand.search": "ब्रांड खोजें…",
  "brand.model": "मॉडल",
  "brand.models": "मॉडल",
  "brand.viewLineup": "लाइनअप देखें",
  "brand.browseAll": "या सभी {n} मॉडल फ़िल्टर के साथ देखें",
  "brand.noMatch": "कोई ब्रांड मेल नहीं खाता।",
  "brand.compareBrand": "{name} की तुलना करें",
  // EV card
  "card.viewSpecs": "स्पेक्स देखें",
  "card.compare": "तुलना",
  "card.upcoming": "आगामी",
  "card.kmRange": "किमी रेंज",
  // compare
  "picker.select": "चुनें",
  "picker.vehicle": "वाहन",
  "picker.searchByName": "नाम या ब्रांड से खोजें",
  "picker.changeVehicle": "वाहन बदलें",
  "picker.searchAll": "140+ EVs खोजें…",
  "picker.noMatch": "उस खोज से कोई EV मेल नहीं खाती।",
  "cmp.spec": "स्पेक",
  "cmp.highlights": "मुख्य बातें",
  "cmp.leads": "{n} स्पेक्स में आगे",
  "cmp.swap": "अदला-बदली",
  "cmp.reset": "रीसेट",
  "cmp.addThird": "तीसरी EV जोड़ें",
  "cmp.empty": "लाइव तुलना के लिए ऊपर दो वाहन चुनें",
  "cmp.popular": "लोकप्रिय तुलनाएँ",
  "cmp.fullSpecs": "पूरे स्पेक्स:",
  "row.price": "शुरुआती कीमत",
  "row.body": "बॉडी टाइप",
  "row.battery": "बैटरी",
  "row.rangeArai": "रेंज (दावा)",
  "row.rangeReal": "वास्तविक रेंज",
  "row.power": "पावर",
  "row.torque": "टॉर्क",
  "row.accel": "त्वरण",
  "row.top": "टॉप स्पीड",
  "row.fastkw": "फ़ास्ट चार्ज",
  "row.fasttime": "फ़ास्ट चार्ज समय",
  "row.actime": "फ़ुल चार्ज",
  "row.drive": "ड्राइवट्रेन",
  "row.seat": "सीटिंग",
  "row.boot": "बूट / स्टोरेज",
  "row.weight": "कर्ब वज़न",
  "row.year": "मॉडल वर्ष",
  // glossary
  "gl.search": "शब्द खोजें — जैसे CCS2, regen, kWh…",
  "gl.term": "शब्द",
  "gl.terms": "शब्द",
  "gl.found": "मिले",
  "gl.noMatch": "कोई शब्द मेल नहीं खाता",
  // article shell
  "article.related": "संबंधित लेख",
  "article.keep": "और पढ़ें",
  "article.read": "पढ़ें",
  "article.readWord": "का पठन",
  "article.ctaTitle": "खरीदने से पहले तुलना करें",
  "article.ctaSub": "किन्हीं भी दो या तीन EVs को रेंज, बैटरी, कीमत और चार्जिंग पर साथ-साथ रखें।",
  "article.ctaBtn": "तुलना टूल खोलें",
  "article.ctaTools": "कॉस्ट और रेंज कैलकुलेटर",
  // vehicle detail page
  "ev.back": "कैटलॉग पर वापस",
  "ev.exShowroom": "एक्स-शोरूम",
  "ev.compareThis": "इस EV की तुलना करें",
  "ev.specsEyebrow": "स्पेसिफिकेशन",
  "ev.specsTitle": "पूरी जानकारी",
  "ev.grpBattery": "बैटरी और रेंज",
  "ev.grpPerf": "परफॉर्मेंस",
  "ev.grpCharging": "चार्जिंग",
  "ev.grpPractical": "प्रैक्टिकैलिटी",
  "ev.acCharge": "AC चार्जिंग",
  "ev.fullChargeTime": "फुल चार्ज समय",
  "ev.highlights": "मुख्य खूबियाँ",
  "ev.similarEyebrow": "समान विकल्पों से तुलना",
  "ev.closestRivals": "सबसे करीबी प्रतिद्वंद्वी",
  "ev.similarSub": "{cat} जो {name} के सबसे करीब कीमत वाले हैं। इन्हें कम्पेयर टूल में आमने-सामने रखें।",
  "ev.compareBoth": "दोनों की तुलना करें",
  "ev.ctaTitle": "फैसला लेने के लिए तैयार हैं?",
  "ev.ctaSub": "{name} को किसी भी दूसरी EV के सामने रखें — स्पेक्स, चार्जिंग और वैल्यू, साथ-साथ।",
  "ev.tileRange": "ARAI रेंज",
  "ev.tileAccel": "त्वरण",
  "ev.catcar": "इलेक्ट्रिक कार",
  "ev.catscooter": "इलेक्ट्रिक स्कूटर",
  "ev.catbike": "इलेक्ट्रिक बाइक",
  "ev.summary": "{name}, {cat} सेगमेंट की एक {body} है।",
  // site search
  "search.aria": "EVSelect पर खोजें",
  "search.gVehicles": "वाहन",
  "search.gBrands": "ब्रांड",
  "search.gArticles": "लेख",
  "search.gPages": "टूल और पेज",
  "search.popular": "लोकप्रिय खोजें",
  "search.hint": "वाहन, ब्रांड और गाइड खोजने के लिए टाइप करें",
  "search.viewAll": "सभी परिणाम देखें",
  // blog search
  "blog.search": "लेख खोजें…",
  "blog.results": "{n} मिलते-जुलते लेख",
  "blog.noMatch": "कोई सटीक मेल नहीं — सभी लेख दिखाए जा रहे हैं",
};

const DICTS: Record<string, Dict> = { en, hi };

/** Translate a key for a locale, falling back to English then the key. */
export function t(key: string, l: Locale): string {
  return DICTS[l]?.[key] ?? en[key] ?? key;
}

// ── SEO alternates (canonical + hreflang) ────────────────────────
const SITE_URL = "https://www.evselect.in";

/**
 * Build Next.js `alternates` for a page: a self-referencing canonical for
 * the given locale, plus hreflang links to every locale + x-default.
 * Usage in metadata: `alternates: altsFor("/compare", "hi")`
 */
export function altsFor(path: string, locale: Locale) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[LOCALE_LANG[l]] = `${SITE_URL}${localizedHref(path, l)}`;
  languages["x-default"] = `${SITE_URL}${localizedHref(path, DEFAULT_LOCALE)}`;
  return {
    canonical: `${SITE_URL}${localizedHref(path, locale)}`,
    languages,
  };
}

