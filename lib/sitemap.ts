import { EVS, BRANDS } from "@/lib/ev-data";
import { POSTS, CATEGORIES } from "@/lib/blog-posts";
import { SITE, toISODate } from "@/lib/seo";

const BASE = SITE.url;
const TODAY = new Date().toISOString().slice(0, 10);

export interface UrlEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderUrlset(entries: UrlEntry[]): string {
  const body = entries
    .map((e) => {
      const lines = [`    <loc>${esc(BASE + e.path)}</loc>`];
      if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
      if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority != null) lines.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function renderSitemapIndex(files: string[]): string {
  const body = files
    .map(
      (f) =>
        `  <sitemap>\n    <loc>${esc(`${BASE}/${f}`)}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export const SITEMAP_FILES = [
  "sitemap-cars.xml",
  "sitemap-scooters.xml",
  "sitemap-bikes.xml",
  "sitemap-blog.xml",
  "sitemap-others.xml",
  "sitemap-i18n.xml",
];

/** Localized (non-English) URLs that are published. Grows with the rollout. */
export function localeEntries(): UrlEntry[] {
  const hiPaths = [
    "/hi",
    "/hi/compare",
    "/hi/catalog",
    "/hi/catalog/all",
    "/hi/tools",
    "/hi/learn",
    "/hi/news",
    "/hi/blog",
    "/hi/privacy",
    "/hi/terms",
    "/hi/about-ev-batteries",
    "/hi/blog/category/buying-guide",
    "/hi/blog/category/battery-tech",
    "/hi/blog/category/charging",
    "/hi/blog/category/cost-ownership",
    "/hi/blog/category/range-efficiency",
    "/hi/blog/category/policy-incentives",
    "/hi/blog/category/market-news",
    "/hi/blog/home-ev-charging-cost-india",
    "/hi/blog/how-to-choose-first-ev-india",
    "/hi/blog/real-world-range-vs-arai-india",
    "/hi/blog/ev-resale-value-battery-health-india",
    "/hi/blog/ev-subsidies-road-tax-by-state-india-2026",
    "/hi/blog/india-ev-sales-fy2026",
    "/hi/blog/maruti-e-vitara-first-ev-launch",
    "/hi/blog/india-ev-charging-network-2026",
    "/hi/blog/tesla-model-y-price-cut-india-2026",
    "/hi/ev-subsidies-india",
    "/hi/ev-charging-station-setup-india",
    // dynamic detail routes (one /hi/... route serves all)
    ...BRANDS.map((b) => `/hi/catalog/brand/${b.slug}`),
    ...EVS.map((e) => `/hi/catalog/${e.id}`),
  ];
  return hiPaths.map((path) => ({ path, lastmod: TODAY, changefreq: "weekly", priority: 0.8 }));
}

// ── Per-section collectors ───────────────────────────────────────
const vehicleEntries = (cat: "car" | "scooter" | "motorcycle"): UrlEntry[] =>
  EVS.filter((e) => e.category === cat).map((e) => ({
    path: `/catalog/${e.id}`,
    lastmod: TODAY,
    changefreq: "weekly",
    priority: 0.7,
  }));

export const carEntries = () => vehicleEntries("car");
export const scooterEntries = () => vehicleEntries("scooter");
export const bikeEntries = () => vehicleEntries("motorcycle");

export function blogEntries(): UrlEntry[] {
  return [
    { path: "/blog", lastmod: TODAY, changefreq: "daily", priority: 0.8 },
    ...CATEGORIES.map((c) => ({
      path: `/blog/category/${c.slug}`,
      lastmod: TODAY,
      changefreq: "weekly" as const,
      priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      path: `/blog/${p.slug}`,
      lastmod: toISODate(p.date),
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

export function otherEntries(): UrlEntry[] {
  return [
    { path: "/", lastmod: TODAY, changefreq: "weekly", priority: 1.0 },
    { path: "/catalog", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    { path: "/catalog/all", lastmod: TODAY, changefreq: "weekly", priority: 0.8 },
    ...BRANDS.map((b) => ({
      path: `/catalog/brand/${b.slug}`,
      lastmod: TODAY,
      changefreq: "weekly" as const,
      priority: 0.6,
    })),
    { path: "/compare", lastmod: TODAY, changefreq: "monthly", priority: 0.8 },
    { path: "/tools", lastmod: TODAY, changefreq: "monthly", priority: 0.7 },
    { path: "/learn", lastmod: TODAY, changefreq: "monthly", priority: 0.7 },
    { path: "/ev-subsidies-india", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    { path: "/ev-charging-station-setup-india", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    { path: "/about-ev-batteries", lastmod: TODAY, changefreq: "monthly", priority: 0.6 },
    { path: "/news", lastmod: TODAY, changefreq: "daily", priority: 0.7 },
    { path: "/contact", lastmod: TODAY, changefreq: "yearly", priority: 0.3 },
    { path: "/privacy", lastmod: TODAY, changefreq: "yearly", priority: 0.2 },
    { path: "/terms", lastmod: TODAY, changefreq: "yearly", priority: 0.2 },
  ];
}
