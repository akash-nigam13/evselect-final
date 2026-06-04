import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS } from "@/lib/ev-data";
import { collectionPageSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All Electric Vehicles — Filter & Compare | EVSelect.in",
  description:
    "Browse all electric cars, scooters and bikes in India with full faceted filters — brand, body type, price, range, charging and more.",
  alternates: altsFor("/catalog/all", "en"),
};

const faqs = [
  {
    q: "How many electric vehicles are on sale in India?",
    a: `This filterable list covers ${EVS.length} electric vehicles in India in 2026 — electric cars, scooters and motorcycles together — and grows as new models launch.`,
  },
  {
    q: "Which is the cheapest EV in India?",
    a: "Sort the list by price, low to high, to surface the most affordable models. Entry-level electric scooters usually start around ₹1 lakh, while budget electric cars typically begin in the ₹7–10 lakh range.",
  },
  {
    q: "How do I compare two EVs?",
    a: "Add any two models to the comparison tool to see range, battery capacity, charging time, power and price side by side, making it easy to weigh trade-offs before you buy.",
  },
  {
    q: "Are EVs eligible for subsidies in India?",
    a: "Many EVs qualify for central and state incentives, road-tax waivers and registration benefits, but the amount depends on your state, the vehicle category and the model, so confirm the current scheme locally.",
  },
];

export default function CatalogAllPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Catalog", path: "/catalog" },
                { name: "All models", path: "/catalog/all" },
              ]}
              className="mb-4"
            />
            <Link
              href="/catalog"
              className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-ev-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to brands
            </Link>
            <h1 className="font-display text-4xl font-bold text-ev-text sm:text-5xl">
              All <span className="text-gradient-brand">electric vehicles</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-muted">
              Every model in one filterable view. Narrow by brand, body type,
              price, range and more.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 pb-2 sm:px-6 lg:px-8">
          <div className="prose-ev max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Every EV model with filters, in one place
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ev-text/70">
              Browse every electric car, scooter and motorcycle on sale in India
              in 2026 — with prices, range, battery and charging specs, all
              filterable here. Use this EV price list 2026 to narrow by brand,
              body type, price and range, or jump to a category:{" "}
              <Link href="/catalog?type=car" className="text-brand hover:underline">
                electric cars
              </Link>
              ,{" "}
              <Link href="/catalog?type=scooter" className="text-brand hover:underline">
                electric scooters
              </Link>{" "}
              and{" "}
              <Link href="/catalog?type=motorcycle" className="text-brand hover:underline">
                electric motorcycles
              </Link>
              .
            </p>
            <p className="mt-3 font-body leading-relaxed text-ev-text/70">
              Ready to decide? Use the{" "}
              <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
                tool to compare electric cars, scooters and bikes
              </Link>{" "}
              head to head, see which models are eligible for{" "}
              <Link href="/ev-subsidies-india" className="text-brand hover:underline">
                EV subsidies in India
              </Link>
              , and work out your instalment with the{" "}
              <Link href="/ev-calculators/ev-emi-calculator" className="text-brand hover:underline">
                EV EMI calculator
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />

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
            "All Electric Vehicles",
            "Every electric car, scooter and bike in India with full filters.",
            "/catalog/all"
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
