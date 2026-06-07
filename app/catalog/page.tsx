import type { Metadata } from "next";
import Link from "next/link";
import { altsFor } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import BrandExplorer from "@/components/catalog/BrandExplorer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Catalog 2026 — All Electric Vehicles in India | EVSelect.in",
  description:
    "Browse every electric car, scooter and motorcycle on sale in India in 2026 with full filters — brand, body type, price, range and charging. Or browse the complete EV brand directory.",
  alternates: altsFor("/catalog", "en"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

const faqs = [
  {
    q: "How many electric vehicles are on sale in India?",
    a: `Our catalog tracks ${EVS.length} electric vehicles across ${BRANDS.length} brands in India in 2026, spanning ${carCount} electric cars, ${scooterCount} electric scooters and ${bikeCount} electric motorcycles. New models are added as they launch.`,
  },
  {
    q: "Which is the cheapest EV in India?",
    a: "Sort the list by price, low to high, to surface the most affordable models. Entry-level electric scooters often start around ₹1 lakh on-road, while the most budget-friendly electric cars typically begin in the ₹7–10 lakh range.",
  },
  {
    q: "How do I compare two EVs?",
    a: "Open any model and add it to the comparison tool, where you can place electric cars, scooters or bikes side by side and weigh range, battery capacity, charging time, power and price together before deciding.",
  },
  {
    q: "Are EVs eligible for subsidies in India?",
    a: "Many electric vehicles qualify for central and state incentives, road-tax waivers and registration benefits, though the exact amount varies by state, vehicle category and model. Always confirm the current scheme for your state before buying.",
  },
];

export default function CatalogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs items={[{ name: "Catalog", path: "/catalog" }]} className="mb-6" />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              The Catalog
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              All <span className="text-gradient-brand">electric vehicles</span> in India
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              Every {EVS.length} models in one filterable view — narrow by brand,
              body type, price, range and charging. Or scroll down to browse the
              full brand directory.
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

        {/* PRIMARY: full filterable catalog */}
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>

        {/* SECONDARY: brand directory */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <section className="mt-16">
            <h2 className="mb-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Or browse EVs <span className="text-gradient-brand">by brand</span>
            </h2>
            <p className="mb-8 max-w-2xl font-body text-ev-muted">
              Pick a manufacturer to explore its full lineup, then drill into
              prices, range, battery and charging specs.
            </p>
            <BrandExplorer />
          </section>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="prose-ev max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Every EV model and brand in India, in one place
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ev-text/70">
                This is the complete directory of every electric car, scooter and
                motorcycle on sale in India in 2026. Use the filters above to build
                your EV price list 2026 by brand, body type, price and range, or
                jump straight to a category:{" "}
                <Link href="/catalog/electric-cars" className="text-brand hover:underline">
                  electric cars
                </Link>
                ,{" "}
                <Link href="/catalog/electric-scooters" className="text-brand hover:underline">
                  electric scooters
                </Link>{" "}
                or{" "}
                <Link href="/catalog/electric-bikes" className="text-brand hover:underline">
                  electric motorcycles
                </Link>
                .
              </p>
              <p className="mt-3 font-body leading-relaxed text-ev-text/70">
                Ready to decide? Use the{" "}
                <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
                  tool to compare electric cars, scooters and bikes
                </Link>{" "}
                side by side, check which models qualify for{" "}
                <Link href="/ev-subsidies-india" className="text-brand hover:underline">
                  EV subsidies in India
                </Link>
                , or estimate your monthly payment with the{" "}
                <Link href="/ev-calculators/ev-emi-calculator" className="text-brand hover:underline">
                  EV EMI calculator
                </Link>
                .
              </p>
            </div>
          </div>

          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="cursor-pointer font-display font-bold text-white">
                    {f.q}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-ev-text/70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <JsonLd
        data={[
          collectionPageSchema(
            "EV Catalog 2026 — All Electric Vehicles in India",
            "Browse every electric vehicle in India with full filters, plus the complete brand directory.",
            "/catalog"
          ),
          itemListSchema(
            BRANDS.map((b) => ({ name: b.name, path: `/brand/${b.slug}` }))
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
