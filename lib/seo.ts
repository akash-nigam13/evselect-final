import { CATEGORY_LABELS, priceLabel, type EV } from "@/lib/ev-data";
import { TERMS } from "@/lib/glossary";

export const SITE = {
  name: "EVSelect.in",
  shortName: "EVSelect",
  url: "https://www.evselect.in",
  logo: "https://www.evselect.in/logo.png",
  ogImage: "https://www.evselect.in/logo.png",
  email: "akash.nigam@evselect.in",
  author: "EVSelect Editorial Team",
  sameAs: ["https://www.linkedin.com/in/akash-shobha-nigam/"],
};

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

/** Convert a "₹ lakh" number to whole rupees. */
const lakhToInr = (lakh: number) => Math.round(lakh * 100000);

/** Parse a loose date string like "Jan 15, 2026" to ISO (date only). */
export function toISODate(input: string): string {
  const d = new Date(input);
  return isNaN(d.getTime()) ? input : d.toISOString().slice(0, 10);
}

// ── Global ───────────────────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: SITE.logo },
    email: SITE.email,
    sameAs: SITE.sameAs,
    areaServed: "IN",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ── Breadcrumbs ──────────────────────────────────────────────────
export interface Crumb {
  name: string;
  path?: string;
}
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: abs(c.path) } : {}),
    })),
  };
}

// ── Page-level ───────────────────────────────────────────────────
export function webPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: "en-IN",
  };
}

export function collectionPageSchema(
  name: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: "en-IN",
  };
}

export function webAppSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: abs(path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function contactPageSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact EVSelect.in",
    url: abs(path),
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
  };
}

// ── Lists ────────────────────────────────────────────────────────
export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  };
}

// ── Vehicle (Product) ────────────────────────────────────────────
export function productSchema(ev: EV) {
  const props: { "@type": "PropertyValue"; name: string; value: string }[] = [];
  const push = (name: string, value: string | number | null, unit = "") => {
    if (value != null && value !== "") props.push({ "@type": "PropertyValue", name, value: `${value}${unit}` });
  };
  push("Battery capacity", ev.batteryKwh, " kWh");
  push("Range (ARAI)", ev.rangeKmARAI, " km");
  push("Real-world range", ev.realRangeKm, " km");
  push("Power", ev.powerBhp, " bhp");
  push("Torque", ev.torqueNm, " Nm");
  push("Top speed", ev.topSpeedKmph, " km/h");
  push("DC fast charging", ev.fastChargeKw, " kW");
  push("Drivetrain", ev.driveType);
  push("Seating", ev.seating);
  push("Body type", ev.bodyType);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ev.fullName,
    description: `${ev.fullName} — ${[
      ev.rangeKmARAI ? `${ev.rangeKmARAI} km ARAI range` : null,
      ev.batteryKwh ? `${ev.batteryKwh} kWh battery` : null,
      `priced at ${priceLabel(ev)} (ex-showroom)`,
    ]
      .filter(Boolean)
      .join(", ")}.`,
    category: CATEGORY_LABELS[ev.category],
    brand: { "@type": "Brand", name: ev.brand },
    image: SITE.ogImage,
    url: abs(`/catalog/${ev.id}`),
    productionDate: ev.year ? String(ev.year) : undefined,
    additionalProperty: props,
  };

  if (ev.priceMinLakh != null) {
    const low = lakhToInr(ev.priceMinLakh);
    const high = lakhToInr(ev.priceMaxLakh ?? ev.priceMinLakh);
    schema.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: low,
      highPrice: high,
      offerCount: 1,
      availability: ev.upcoming
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      seller: { "@id": `${SITE.url}/#organization` },
    };
  }
  return schema;
}

// ── Articles / Blog ──────────────────────────────────────────────
export function blogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  section?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.path) },
    url: abs(opts.path),
    image: opts.image ?? SITE.ogImage,
    ...(opts.datePublished ? { datePublished: toISODate(opts.datePublished), dateModified: toISODate(opts.datePublished) } : {}),
    ...(opts.section ? { articleSection: opts.section } : {}),
    author: { "@type": "Organization", name: SITE.author, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
  };
}

export function blogSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}${path}`,
    name: "EVSelect Blog & Guides",
    url: abs(path),
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  section?: string;
}) {
  return { ...blogPostingSchema(opts), "@type": "Article" };
}

// ── FAQ ──────────────────────────────────────────────────────────
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ── HowTo ────────────────────────────────────────────────────────
export function howToSchema(opts: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
  totalTime?: string; // ISO 8601 duration, e.g. "P30D"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${abs(opts.path)}#step-${i + 1}`,
    })),
  };
}

// ── Glossary (DefinedTermSet) ────────────────────────────────────
export function definedTermSetSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "EV Jargon Buster — Glossary",
    url: abs(path),
    hasDefinedTerm: TERMS.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
    })),
  };
}
