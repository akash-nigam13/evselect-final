import type { Metadata } from "next";
import Link from "next/link";
import { GitCompare, Calculator, ArrowRight, Car, Bike, Zap } from "lucide-react";
import { altsFor } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { webAppSchema, collectionPageSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Selection Tool — Find the Right Electric Vehicle in India (2026) | EVSelect.in",
  description:
    "Free EV selection tool for India. Filter 150+ electric cars, scooters and bikes by budget, range, battery and brand, compare them side by side, and calculate costs — find your perfect EV in minutes.",
  alternates: altsFor("/ev-selection-tool", "en"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

const quick = [
  { label: "Electric Cars", href: "/catalog/electric-cars", icon: Car, n: carCount },
  { label: "Electric Scooters", href: "/catalog/electric-scooters", icon: Zap, n: scooterCount },
  { label: "Electric Bikes", href: "/catalog/electric-bikes", icon: Bike, n: bikeCount },
];

const faqs = [
  {
    q: "What is an EV selection tool?",
    a: "An EV selection tool helps you find the right electric vehicle for your needs by letting you filter and compare models on the factors that matter — budget, real-world range, battery size, body type, brand and charging. EVSelect's free tool covers 150+ electric cars, scooters and motorcycles on sale in India in 2026.",
  },
  {
    q: "How do I choose the right EV for me?",
    a: "Start with your daily distance and budget, then filter the selection tool to match. Shortlist two or three models, compare them side by side on range, battery, charging time and price, and use the cost and EMI calculators to check affordability before you decide.",
  },
  {
    q: "Is the EV selection tool free to use?",
    a: "Yes. The EVSelect selection tool, comparison tool and all calculators are completely free, with no sign-up required. Data is kept current for 2026 and new models are added as they launch.",
  },
  {
    q: "Does it cover electric cars, scooters and bikes?",
    a: `Yes — the tool spans all three categories: ${carCount} electric cars, ${scooterCount} electric scooters and ${bikeCount} electric motorcycles across ${BRANDS.length} brands in India.`,
  },
];

export default function EvSelectionToolPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs items={[{ name: "EV Selection Tool", path: "/ev-selection-tool" }]} className="mb-6" />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              EV Selection Tool
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              Find the right <span className="text-gradient-brand">electric vehicle</span> for you
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              India&apos;s free EV selection tool. Filter {EVS.length} electric cars,
              scooters and bikes by budget, range, battery and brand — then compare
              your shortlist and calculate the real cost before you buy.
            </p>

            {/* quick category entry + tool CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {quick.map(({ label, href, icon: Icon, n }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card/60 px-4 py-2.5 font-display text-sm font-medium text-ev-text/85 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4 text-brand" /> {label}
                  <span className="font-mono text-xs text-ev-muted">{n}</span>
                </Link>
              ))}
              <Link
                href="/compare-electric-vehicles"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 font-display text-sm font-bold text-ev-bg transition-all hover:shadow-ev-glow"
              >
                <GitCompare className="h-4 w-4" /> Compare EVs
              </Link>
              <Link
                href="/ev-calculators"
                className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card/60 px-4 py-2.5 font-display text-sm font-medium text-ev-text/85 transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Calculator className="h-4 w-4 text-brand" /> Cost & EMI calculators
              </Link>
            </div>
          </div>
        </section>

        {/* PRIMARY: the selection tool itself (filter/finder) */}
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>

        {/* SEO content */}
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="prose-ev mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              How to use the EV selection tool
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ev-text/70">
              Choosing an electric vehicle in India has never had more options — {EVS.length}{" "}
              models across {BRANDS.length} brands. Our EV selection tool turns that
              choice into a few simple steps. Start by filtering on what matters to
              you: set your budget, pick a body type, and narrow by real-world range,
              battery size or brand. The list updates instantly so you only see EVs
              that fit your needs.
            </p>
            <p className="mt-3 font-body leading-relaxed text-ev-text/70">
              Once you have a shortlist, put the models head to head with our{" "}
              <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
                EV comparison tool
              </Link>{" "}
              to weigh range, charging time, power and price together. Then confirm
              the money side with the{" "}
              <Link href="/ev-calculators/ev-vs-petrol-cost-calculator" className="text-brand hover:underline">
                EV vs petrol cost calculator
              </Link>{" "}
              and the{" "}
              <Link href="/ev-calculators/ev-emi-calculator" className="text-brand hover:underline">
                EV EMI calculator
              </Link>
              . In a few minutes you go from &ldquo;which EV?&rdquo; to a confident,
              data-backed choice.
            </p>
            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              What to consider when selecting an EV
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ev-text/70">
              The right EV depends on how you&apos;ll use it. For city commuting, an{" "}
              <Link href="/catalog/electric-scooters" className="text-brand hover:underline">
                electric scooter
              </Link>{" "}
              or compact{" "}
              <Link href="/catalog/electric-cars" className="text-brand hover:underline">
                electric car
              </Link>{" "}
              offers the lowest running cost; for highways and family trips, prioritise
              real-world range and fast-charging support. Performance riders can explore{" "}
              <Link href="/catalog/electric-bikes" className="text-brand hover:underline">
                electric motorcycles
              </Link>
              . Whatever you pick, also check which models qualify for{" "}
              <Link href="/ev-subsidies-india" className="text-brand hover:underline">
                EV subsidies in India
              </Link>{" "}
              and browse the full{" "}
              <Link href="/catalog" className="text-brand hover:underline">
                EV catalog
              </Link>{" "}
              and{" "}
              <Link href="/brand" className="text-brand hover:underline">
                brand directory
              </Link>{" "}
              to widen your options.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="cursor-pointer font-display font-bold text-white">{f.q}</summary>
                  <p className="mt-3 font-body leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          webAppSchema(
            "EV Selection Tool",
            "Free tool to find, filter and compare electric vehicles in India by budget, range, battery and brand.",
            "/ev-selection-tool"
          ),
          collectionPageSchema(
            "EV Selection Tool — Find the Right Electric Vehicle in India",
            "Filter and compare 150+ electric cars, scooters and bikes in India to find your perfect EV.",
            "/ev-selection-tool"
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
