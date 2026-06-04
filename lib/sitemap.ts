import { readdirSync, existsSync } from "fs";
import { join } from "path";
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

// ── Filesystem route auto-discovery ──────────────────────────────
// Walks app/ and returns every STATIC (non-parameterised) route that has a
// page file. Dynamic [param] routes are skipped — those are enumerated from
// data (EVS, BRANDS, CATEGORIES) below. This means any new page.tsx — English
// or Hindi, hand-built or added by an automation — lands in the sitemap
// automatically, and only real files are listed (never a 404).
const APP_DIR = join(process.cwd(), "app");
const PAGE_RE = /^page\.(t|j)sx?$/;
// /catalog/all (+ /hi) now 308-redirect to /catalog — keep their leftover
// route files out of the sitemap.
const NOINDEX = new Set<string>(["/search", "/catalog/all", "/hi/catalog/all"]);

function discoverRoutes(): string[] {
  const out: string[] = [];
  const walk = (dir: string, segs: string[]) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    if (entries.some((e) => e.isFile() && PAGE_RE.test(e.name))) {
      out.push(segs.length ? `/${segs.join("/")}` : "/");
    }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const n = e.name;
      if (n.startsWith("[") || n.startsWith("@") || n.startsWith("_") || n === "api") continue;
      // route groups like (marketing) add no URL segment
      if (n.startsWith("(") && n.endsWith(")")) walk(join(dir, n), segs);
      else walk(join(dir, n), [...segs, n]);
    }
  };
  if (existsSync(APP_DIR)) walk(APP_DIR, []);
  return out.filter((r) => !NOINDEX.has(r));
}

/** Localized (non-English) URLs. Auto-discovered + data-driven dynamic routes. */
export function localeEntries(): UrlEntry[] {
  const discovered = discoverRoutes().filter((r) => r === "/hi" || r.startsWith("/hi/"));
  const dynamicHi = [
    ...CATEGORIES.map((c) => `/hi/blog/category/${c.slug}`),
    ...BRANDS.map((b) => `/hi/catalog/brand/${b.slug}`),
    ...EVS.map((e) => `/hi/catalog/${e.id}`),
  ];
  const paths = Array.from(new Set([...discovered, ...dynamicHi]));
  return paths.map((path) => ({ path, lastmod: TODAY, changefreq: "weekly", priority: 0.7 }));
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
  const curated: UrlEntry[] = [
    { path: "/", lastmod: TODAY, changefreq: "weekly", priority: 1.0 },
    { path: "/catalog", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    ...BRANDS.map((b) => ({
      path: `/catalog/brand/${b.slug}`,
      lastmod: TODAY,
      changefreq: "weekly" as const,
      priority: 0.6,
    })),
    { path: "/compare-electric-vehicles", lastmod: TODAY, changefreq: "monthly", priority: 0.8 },
    { path: "/ev-calculators", lastmod: TODAY, changefreq: "monthly", priority: 0.7 },
    { path: "/ev-guides", lastmod: TODAY, changefreq: "monthly", priority: 0.7 },
    { path: "/ev-subsidies-india", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    { path: "/ev-charging-station-setup-india", lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
    { path: "/about-ev-batteries", lastmod: TODAY, changefreq: "monthly", priority: 0.6 },
    { path: "/ev-news", lastmod: TODAY, changefreq: "daily", priority: 0.7 },
    { path: "/contact", lastmod: TODAY, changefreq: "yearly", priority: 0.3 },
    { path: "/privacy", lastmod: TODAY, changefreq: "yearly", priority: 0.2 },
    { path: "/terms", lastmod: TODAY, changefreq: "yearly", priority: 0.2 },
  ];

  // Safety net: auto-include any other static English page that isn't already
  // covered by this list or the cars/scooters/bikes/blog sitemaps.
  const covered = new Set<string>([
    ...curated.map((e) => e.path),
    ...blogEntries().map((e) => e.path),
    ...carEntries().map((e) => e.path),
    ...scooterEntries().map((e) => e.path),
    ...bikeEntries().map((e) => e.path),
  ]);
  const extras: UrlEntry[] = discoverRoutes()
    .filter((r) => !r.startsWith("/hi") && !covered.has(r))
    .map((path) => ({ path, lastmod: TODAY, changefreq: "weekly" as const, priority: 0.5 }));

  return [...curated, ...extras];
}
