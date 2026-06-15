# SEO Audit — `/compare-electric-vehicles`

**Page:** https://www.evselect.in/compare-electric-vehicles
**Target keywords:** compare electric vehicles · EV compare · compare EV · EV comparison (+ "EV comparison tool", "compare EVs India")
**Audited:** 15 June 2026 · Live page + source code (`app/compare-electric-vehicles/page.tsx`, `components/compare/CompareClient.tsx`, `lib/seo.ts`, `lib/i18n.ts`, `app/layout.tsx`)

---

## 1. Honest verdict first

Your **technical SEO foundation on this page is genuinely good** — better than most affiliate/info sites. Title, canonical, hreflang, breadcrumb + WebApplication + FAQ schema, sitemap inclusion and server-rendered intro copy are all correctly implemented. Do not let the long list below make you think the page is broken; most of it is hygiene and upside, not bleeding.

But there are **two structural problems that cap how far this page can ever rank**, and no amount of meta-tag polishing fixes them:

1. **The core value of the page — the actual spec comparison — is invisible to Google.** The comparison table only renders client-side *after* a user selects two vehicles. Googlebot sees the empty state ("Select two vehicles above to generate a live comparison"), ~250 words of intro prose, and 4 FAQs. That is thin for a head term.
2. **You have zero indexable comparison pages.** The "Popular comparisons" are `<button>` elements (not links), and live comparisons sit behind `?ids=…` which canonicalises back to the bare URL. So the long-tail that actually converts in this niche — *"Tata Nexon EV vs MG ZS EV"*, *"Ola S1 Pro vs Ather 450X"* — is being thrown away. **This is your single biggest organic opportunity.**

Also be realistic about the head term: **"compare electric vehicles" / "EV comparison" in India is dominated by CarWale, CarDekho, ZigWheels and EVINDIA** — domains with enormous authority and millions of indexed comparison permutations. As a newer site, your realistic path to traffic is *long-tail "X vs Y" pages + topical authority*, not winning the bare head term head-on in the short term. The recommendations below are sequenced accordingly.

---

## 2. Scoreboard

| Area | Status | Priority to fix |
|---|---|---|
| Title tag | ✅ Good (has primary keyword) | — |
| Meta description | 🟡 Good, slightly improvable | P2 |
| URL slug | ✅ Excellent (`/compare-electric-vehicles`) | — |
| H1 | 🟡 Missing exact keyword ("any EVs" not "electric vehicles") | P1 |
| Heading structure | ✅ One H1, logical H2s | — |
| On-page content depth | 🔴 Thin (~250 words) for a head term | P1 |
| Core content crawlability (table) | 🔴 JS-gated, not in HTML | P1 |
| Indexable "vs" comparison pages | 🔴 None exist | **P0 (biggest win)** |
| Internal links *into* the page | 🟡 Few; mostly nav/footer | P1 |
| Internal links *out* of the page | 🟡 3 contextual (could add more) | P2 |
| Structured data | ✅ Strong (5 schema types) | small tweak P2 |
| Canonical | ✅ Self-referencing, correct | — |
| Hreflang (en/hi/x-default) | ✅ Configured correctly | — |
| Open Graph / Twitter (page-level) | 🔴 Falls back to homepage defaults | P1 |
| Robots / indexability | ✅ index,follow; in sitemap | — |
| Images / alt | ✅ No raster images (icons only) — but no image asset either | P2 |
| Core Web Vitals | ⚠️ Not measured — AdSense + GA + hydration; verify | P1 |
| E-E-A-T signals on page | 🟡 Weak (no author/freshness/"how we source data") | P2 |

Legend: ✅ fine · 🟡 improve · 🔴 problem · ⚠️ verify

---

## 3. Keyword & search-intent analysis

**Intent:** "compare electric vehicles / EV comparison" is **transactional-tool intent** — users want to *do* a comparison, not read an article. Google rewards pages that (a) clearly are a working tool **and** (b) provide indexable spec content + supporting copy. You nail (a) for users but fail (b) for crawlers.

**Keyword placement audit:**

| Element | Contains target keyword? | Notes |
|---|---|---|
| URL | ✅ `compare-electric-vehicles` | Ideal |
| Title tag | ✅ "Compare Electric Vehicles Side by Side" | Strong |
| Meta description | 🟡 "Compare any two (or three) EVs…" | Uses "EVs", not the exact phrase "EV comparison" |
| H1 | 🔴 "Compare **any EVs**, instantly" | Misses exact "electric vehicles" / "EV comparison" |
| H2 | ✅ "Compare electric vehicles in India, side by side" | Good |
| Body prose | ✅ "Our EV comparison tool lets you compare electric vehicles in India…" | Natural, well done |
| FAQ | ✅ "EV comparison tool" used 3× | Good |
| Image alt | n/a | No images |

**Verdict:** Keyword coverage is *mostly* there thanks to the title, H2 and prose. The **one real gap is the H1** — your most weighted on-page signal currently says "any EVs, instantly" and skips the phrase you're targeting. The variations "compare EV" and "EV compare" are covered implicitly; don't keyword-stuff them.

---

## 4. On-page elements (detail)

### 4.1 Title — ✅ keep
`Compare Electric Vehicles Side by Side | EVSelect.in` (~52 chars). Within length, primary keyword front-loaded, brand suffix. No change needed. (Optional test: append a number/benefit, e.g. *"Compare Electric Vehicles Side by Side — 140+ EVs | EVSelect.in"* to lift CTR — but watch the ~60-char limit.)

### 4.2 Meta description — 🟡 P2
Current is solid (~160 chars) but the exact phrase **"EV comparison"** isn't in it. Suggested:
> *"Free EV comparison tool — compare any 2–3 electric vehicles in India side by side on price, range, battery, power & charging. Live data on 140+ electric cars, scooters & bikes."*

### 4.3 H1 — 🔴 → 🟢 P1 (highest-leverage single tweak)
Change the H1 to contain the primary keyword while keeping your brand voice. In `app/compare-electric-vehicles/page.tsx` line 51-53:
```
Current: Compare <span>any EVs</span>, instantly
Better:  Compare <span>Electric Vehicles</span>, instantly
   or:   Compare Electric Vehicles <span>side by side</span>
```
Keep it a single H1. This is a 2-minute change with outsized weighting.

### 4.4 Heading hierarchy — ✅
One H1; H2s = "Popular comparisons", "Compare electric vehicles in India, side by side", "Frequently asked questions". Logical and keyword-relevant. No H2→H4 skips of concern.

### 4.5 Content depth — 🔴 P1
Crawlable body ≈ 250 words + 4 FAQ. Competitors back their comparison tools with substantial supporting content (how to compare, what each spec means, buyer guidance, popular pairings). **Add 400–700 words** of genuinely useful copy below the tool:
- "What to look at when comparing EVs" (range claimed vs real, battery kWh, fast-charge kW, ex-showroom vs on-road) — you already own glossary content to link to.
- "Cars vs scooters vs bikes — comparing like-for-like."
- 6–10 **popular comparison pairings as real text links** (see §6).
- Expand FAQ to 6–8 (add: "Claimed vs real-world range?", "Does it include on-road price/subsidy?", "How often is the data updated?", "Can I compare an EV with a petrol car?" → link the cost calculator).

### 4.6 Internal links OUT — 🟡 P2
Currently 3 (`/catalog`, `/ev-calculators/ev-emi-calculator`, `/ev-subsidies-india`). Good anchors. Add contextual links to: `/catalog/electric-cars`, `/catalog/electric-scooters`, `/catalog/electric-bikes`, `/ev-vs-petrol-cost-calculator`, top brand pages, and the new "vs" pages. Aim 6–10 contextual in-content links.

### 4.7 Internal links IN — 🟡 P1
The page is reachable from the global nav and footer (good, site-wide equity) but has **few *contextual* in-content links pointing to it** from high-value pages. Add "Compare these head-to-head →" links from: each vehicle detail page (link to a pre-filled comparison), catalog category pages, brand pages, and relevant blog posts (e.g. "best electric cars", "Tata vs MG"). Contextual links with descriptive anchors ("compare electric vehicles") pass more topical signal than nav links.

---

## 5. Structured data — ✅ strong (one tweak)

Emitted on this page: **Organization, WebSite** (layout) + **BreadcrumbList** (Breadcrumbs) + **WebApplication** + **FAQPage** (page). That's a strong, valid stack and the FAQ is eligible for rich results.

- 🟡 **WebApplication** uses `applicationCategory: "UtilitiesApplication"` with a free Offer — fine. Consider it's the right type (it is, for a tool). No SoftwareApplication review fields needed.
- 🟡 Minor: the FAQ JSON-LD answers must remain **verbatim** to the on-page FAQ text (they currently match — keep them in sync if you edit copy).
- ✅ Breadcrumb correctly Home › Compare.
- Action: validate post-changes in **Google Rich Results Test** and watch **Search Console → Enhancements → FAQ**.

---

## 6. THE big opportunity — indexable "X vs Y" comparison pages (P0)

Right now:
- `components/compare/CompareClient.tsx` renders "Popular comparisons" as **`<button onClick>`** (lines ~320–342) — **not crawlable links**.
- Live comparisons live at `?ids=a,b` and the page **canonicalises to the bare URL** — so permutations are intentionally not indexed.

**Result: you have one indexable URL where competitors have thousands.** This is where comparison traffic actually lives ("nexon ev vs windsor", "ola s1 pro vs ather 450x" — high intent, far less competitive than the head term).

**Recommended fix — static, server-rendered comparison routes:**
1. Create a dynamic route, e.g. `app/compare/[pair]/page.tsx` resolving slugs like `tata-nexon-ev-vs-mg-zs-ev`.
2. **Server-render the full spec table** (reuse your `ROWS` config) so the comparison HTML is in the initial response — not JS-gated.
3. Per page: unique `<title>` ("Tata Nexon EV vs MG ZS EV: Price, Range & Specs Compared"), unique meta description, self-canonical, breadcrumb, and a `Product`-pair or `ItemList`/`FAQPage` schema.
4. `generateStaticParams()` for a curated set first (your existing PRESETS + obvious rivals), then expand programmatically. Add them all to the sitemap.
5. On the main `/compare-electric-vehicles` page, **turn the "Popular comparisons" buttons into real `<Link>`s** to these pages (keeps the interactive tool, but now also crawlable) — and link 8–12 popular pairings in the body copy.
6. Keep the interactive `?ids=` tool as-is for UX; canonical the dynamic state back to the relevant static "vs" page where one exists.

This single initiative is worth more than every other item on this list combined.

---

## 7. Technical SEO

| Check | Result |
|---|---|
| Canonical | ✅ `https://www.evselect.in/compare-electric-vehicles`, self-referencing (`altsFor`) |
| Hreflang | ✅ en-IN, hi-IN, x-default — `/hi/compare-electric-vehicles` exists; planned te/ta/bn correctly excluded from `LOCALES` |
| Robots meta | ✅ `index, follow` |
| robots.txt | ✅ Allows all except `/search`; sitemap referenced |
| Sitemap | ✅ Included (`otherEntries`, priority 0.8, monthly) |
| SSR | ✅ Intro prose + FAQ + shell are server-rendered (confirmed via fetch) |
| ⚠️ Render-gating | 🔴 Comparison **table** is client-only → not in crawlable HTML (see §1, §6) |
| Open Graph (page) | 🔴 No page-level `openGraph`/`twitter` → falls back to homepage defaults ("EVSelect.in — India's EV Knowledge Hub") |
| OG image | 🟡 Generic `og-default.png`; no comparison-specific share image |
| Mobile viewport | ✅ Present |
| Core Web Vitals | ⚠️ Not measured here — page loads GA4 + AdSense (`beforeInteractive`) + React hydration. AdSense `beforeInteractive` can hurt LCP/INP. **Measure in PageSpeed Insights / CrUX and Search Console → Core Web Vitals.** |

### 7.1 Open Graph fix — P1 (easy)
Add to the page's `metadata` export so shares/previews use the right title+description (helps social CTR and is a quality signal):
```ts
openGraph: {
  title: "Compare Electric Vehicles Side by Side",
  description: "Free tool to compare 2–3 EVs in India on price, range, battery, power & charging. 140+ models.",
  url: "https://www.evselect.in/compare-electric-vehicles",
  type: "website",
},
twitter: { card: "summary_large_image", title: "Compare Electric Vehicles Side by Side" },
```

### 7.2 Core Web Vitals — P1 (verify, then act)
- Reconsider loading AdSense `beforeInteractive`; `afterInteractive`/lazy usually improves LCP/INP with negligible revenue impact.
- Confirm the leaderboard ad slot reserves height (avoid CLS).
- Confirm fonts (4 Google families) use `display: swap` (Next does this by default) and subset correctly.

---

## 8. E-E-A-T & content trust — 🟡 P2

This is a YMyL-adjacent purchase-decision page. Strengthen trust signals:
- Add a visible **"How we source our data / last updated"** line near the tool (you already disclaim in the footer — surface a freshness date on-page). Helps with the "how often updated?" intent and Google's freshness read.
- Link to your **Editorial & Data Policy** contextually from the tool, not just the footer.
- Consider a short **author/maintainer** byline or "maintained by the EVSelect editorial team" with the org schema you already have.
- Your `dateModified`-style freshness isn't expressed on this page type — add a "Prices indicative, updated <month> 2026" stamp.

---

## 9. Prioritised action plan

**P0 — do first (biggest traffic upside)**
1. Build server-rendered, indexable **"X vs Y" comparison pages** (`/compare/[pair]`), reuse the spec table, unique meta + schema, add to sitemap (§6).
2. Convert "Popular comparisons" buttons → real `<Link>`s to those pages.

**P1 — high value, low effort**
3. Rewrite **H1** to include "Electric Vehicles" (§4.3).
4. Add **page-level Open Graph/Twitter** tags (§7.1).
5. Expand crawlable **body content to 400–700 words** + 6–8 FAQs (§4.5).
6. Add **contextual internal links INTO** the page from vehicle/brand/catalog/blog pages with descriptive anchors (§4.7).
7. **Measure Core Web Vitals**; move AdSense off `beforeInteractive` if it hurts LCP/INP (§7.2).

**P2 — polish**
8. Tighten **meta description** to include "EV comparison" (§4.2).
9. Add **freshness + data-source/E-E-A-T** signals on-page (§8).
10. Add more **outbound contextual links** (cars/scooters/bikes/cost calculator/brands) (§4.6).
11. Create a **comparison-specific OG share image**.

---

## 10. What's already right (don't touch)
Self-referencing canonical · correct hreflang with x-default · clean keyword-rich URL · strong title · valid Organization/WebSite/Breadcrumb/WebApplication/FAQ schema · SSR intro + FAQ · sitemap inclusion · indexable robots. Solid base — the wins are in surfacing the comparison content to crawlers and building the long-tail "vs" layer.
