import type { Metadata } from "next";
import Link from "next/link";
import { altsFor } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import BrandDirectory from "@/components/catalog/BrandDirectory";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All EV Brands in India 2026 — Electric Car, Scooter & Bike Makers | EVSelect.in",
  description:
    "Browse every electric vehicle brand in India in 2026 — car, scooter and motorcycle makers in one place. Filter by type and open any brand to see its full EV lineup, prices and specs.",
  alternates: altsFor("/brand", "en"),
};

const carBrands = BRANDS.filter((b) => b.categories.includes("car")).length;
const scooterBrands = BRANDS.filter((b) => b.categories.includes("scooter")).length;
const bikeBrands = BRANDS.filter((b) => b.categories.includes("motorcycle")).length;

const faqs = [
  {
    q: "How many EV brands are there in India?",
    a: `EVSelect tracks ${BRANDS.length} electric-vehicle brands in India in 2026 across cars, scooters and motorcycles — from home-grown makers to global names. Use the filter to see brands by vehicle type.`,
  },
  {
    q: "Which brands make electric cars in India?",
    a: `Around ${carBrands} brands offer electric cars in India, including Tata, Mahindra, MG, Hyundai, BYD, Kia and premium names like Tesla, BMW and Mercedes-Benz. Open any brand to see its full car lineup.`,
  },
  {
    q: "Which brands make electric scooters and bikes?",
    a: `Roughly ${scooterBrands} brands make electric scooters and ${bikeBrands} make electric motorcycles in India — including Ola, Ather, TVS, Bajaj, Revolt and Ultraviolette. Filter by Scooters or Bikes to explore them.`,
  },
];

export default function BrandIndexPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs items={[{ name: "Brands", path: "/brand" }]} className="mb-6" />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              EV Brands
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              All <span className="text-gradient-brand">EV brands</span> in India
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              Every electric car, scooter and motorcycle maker on sale in India,
              in one place. Filter by vehicle type, then open a brand to see its
              full lineup with prices, range and specs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { n: BRANDS.length, label: "Brands" },
                { n: EVS.length, label: "Total EVs" },
                { n: carBrands, label: "Car brands" },
                { n: scooterBrands, label: "Scooter brands" },
                { n: bikeBrands, label: "Bike brands" },
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

        {/* PRIMARY: brand grid with logos + type filter */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <BrandDirectory />

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="prose-ev max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Every electric vehicle brand in India
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ev-text/70">
                This is the complete directory of EV makers in India in 2026,
                spanning electric cars, scooters and motorcycles. Use the filter
                above to narrow by vehicle type, or jump straight to a category:{" "}
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
                . Prefer to browse everything together? See the{" "}
                <Link href="/catalog" className="text-brand hover:underline">
                  full EV catalog
                </Link>{" "}
                or{" "}
                <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
                  compare models side by side
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
            "All EV Brands in India 2026",
            "Every electric car, scooter and motorcycle brand in India, in one place.",
            "/brand"
          ),
          itemListSchema(BRANDS.map((b) => ({ name: b.name, path: `/brand/${b.slug}` }))),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
