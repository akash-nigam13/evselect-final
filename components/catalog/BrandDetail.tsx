import Link from "next/link";
import { ArrowLeft, GitCompare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BrandLogo from "@/components/ui/BrandLogo";
import ToolsCTA from "@/components/ToolsCTA";
import { byBrandSlug, type Brand, type EVCategory } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";
import { Locale, t, localizedHref } from "@/lib/i18n";
import { brandOverview, brandFaqs } from "@/lib/brand-content";

function catLabelKey(c: EVCategory): "ev.catcar" | "ev.catscooter" | "ev.catbike" {
  if (c === "motorcycle") return "ev.catbike";
  if (c === "scooter") return "ev.catscooter";
  return "ev.catcar";
}

export default function BrandDetail({ brand, locale = "en" }: { brand: Brand; locale?: Locale }) {
  const isHi = locale === "hi";
  const L = (en: string, hiKey: string) => (isHi ? t(hiKey, "hi") : en);
  const href = (p: string) => localizedHref(p, locale);
  const evs = byBrandSlug(brand.slug);
  const overview = brandOverview(brand, evs, locale);
  const faqs = brandFaqs(brand, evs, locale);

  const cats = brand.categories.map((c) => t(catLabelKey(c), locale)).join(" · ");
  const modelsWord = brand.count === 1 ? t("brand.model", locale) : t("brand.models", locale);
  const compareLabel = (isHi ? t("brand.compareBrand", "hi") : "Compare {name}").replace("{name}", brand.name);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div
            className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full opacity-20 blur-[100px]"
            style={{ background: brand.accent }}
          />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName={isHi ? "होम" : "Home"}
              homeHref={isHi ? "/hi" : "/"}
              items={[
                { name: t("nav.catalog", locale), path: href("/catalog") },
                { name: brand.name, path: href(`/catalog/brand/${brand.slug}`) },
              ]}
              className="mb-4"
            />
            <Link
              href={href("/catalog")}
              className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-ev-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {L("All brands", "brand.allTab")}
            </Link>

            <div className="flex flex-wrap items-center gap-5">
              <BrandLogo
                domain={brand.domain}
                monogram={brand.monogram}
                accent={brand.accent}
                name={brand.name}
                className="h-20 w-20 text-3xl"
              />
              <div>
                <h1 className="font-display text-4xl font-bold text-ev-text sm:text-5xl">
                  {brand.name}
                </h1>
                <p className="mt-2 font-mono text-sm text-ev-muted">
                  {brand.count} {modelsWord} · {cats}
                </p>
              </div>
              <Link
                href={href(`/compare-electric-vehicles?ids=${evs.slice(0, 2).map((e) => e.id).join(",")}`)}
                className="ml-auto inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 font-display text-sm font-bold text-ev-bg transition-all hover:shadow-ev-glow"
              >
                <GitCompare className="h-4 w-4" />
                {compareLabel}
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* SEO overview */}
          <div className="prose-ev mb-10 max-w-3xl">
            <h2>{brand.name} {isHi ? "इलेक्ट्रिक वाहन — भारत में कीमत और मॉडल" : "electric vehicles in India — prices & models"}</h2>
            {overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm">
              {isHi ? "और देखें: " : "Explore more: "}
              <Link href={href("/catalog")}>{isHi ? "सभी ब्रांड" : "all EV brands"}</Link>,{" "}
              <Link href={href("/compare-electric-vehicles")}>{isHi ? "EVs की तुलना" : "compare EVs"}</Link>,{" "}
              <Link href={href("/ev-subsidies-india")}>{isHi ? "EV सब्सिडी" : "EV subsidies"}</Link> {isHi ? "और" : "and the"}{" "}
              <Link href={href("/ev-calculators/ev-emi-calculator")}>{isHi ? "EMI कैलकुलेटर" : "EMI calculator"}</Link>.
            </p>
          </div>

          <FacetedCatalog pool={evs} lockBrand />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
          <ToolsCTA locale={locale} tools={["compare", "emi", "cost"]} className="mt-10" />

          {/* FAQ */}
          <section className="mx-auto mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ev-text sm:text-3xl">
              {isHi ? `${brand.name} EV — अक्सर पूछे जाने वाले सवाल` : `${brand.name} EVs — frequently asked questions`}
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
      <JsonLd
        data={[
          collectionPageSchema(
            `${brand.name} Electric Vehicles`,
            `All ${brand.name} EV models in India.`,
            localizedHref(`/catalog/brand/${brand.slug}`, locale)
          ),
          itemListSchema(
            evs.map((e) => ({ name: e.name, path: localizedHref(`/catalog/${e.id}`, locale) }))
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
