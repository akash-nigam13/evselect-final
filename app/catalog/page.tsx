import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import BrandExplorer from "@/components/catalog/BrandExplorer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Catalog — Browse by Brand | EVSelect.in",
  description:
    "Pick a brand to explore its electric vehicle lineup, or browse all EVs in India with full filters. Electric cars, scooters and motorcycles compared on range, battery, power and price.",
  alternates: altsFor("/catalog", "en"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

export default function CatalogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs items={[{ name: "Catalog", path: "/catalog" }]} className="mb-6" />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              The Catalog
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              Browse EVs <span className="text-gradient-brand">by brand</span>.
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              Choose a brand to explore its full lineup, then filter on the
              numbers that matter. Or jump straight to all {EVS.length} models
              with the complete filter set.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { n: BRANDS.length, label: "Brands" },
                { n: EVS.length, label: "Total EVs" },
                { n: carCount, label: "Cars" },
                { n: scooterCount, label: "Scooters" },
                { n: bikeCount, label: "Bikes" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ev-border bg-ev-card/60 px-4 py-3"
                >
                  <span className="font-mono text-2xl font-bold text-ev-text">{s.n}</span>
                  <span className="ml-2 font-mono text-xs uppercase tracking-wider text-ev-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333333" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <BrandExplorer />
        </div>
      </main>

      <Footer />
      <JsonLd
        data={[
          collectionPageSchema(
            "EV Catalog — Browse by Brand",
            "Browse electric vehicles in India by brand.",
            "/catalog"
          ),
          itemListSchema(
            BRANDS.map((b) => ({ name: b.name, path: `/catalog/brand/${b.slug}` }))
          ),
        ]}
      />
    </>
  );
}
