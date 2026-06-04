import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webAppSchema, faqPageSchema } from "@/lib/seo";
import CompareClient from "@/components/compare/CompareClient";
import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Compare Electric Vehicles Side by Side",
  description:
    "Compare any two (or three) EVs in India side by side — range, battery, price, power, charging speed and more. Live data on 140+ electric cars, scooters and bikes.",
  alternates: altsFor("/compare-electric-vehicles", "en"),
};

const faqs = [
  {
    q: "How many EVs can I compare at once?",
    a: "You can compare two or three electric vehicles at once. Pick any two EVs for a clean head-to-head, or add a third to weigh up three options on the same screen.",
  },
  {
    q: "What specs can I compare?",
    a: "The EV comparison tool puts every spec that matters side by side — ex-showroom price, real-world range, battery capacity, power and torque, top speed, charging time and fast-charging support — with the leading value highlighted for each row.",
  },
  {
    q: "Is the comparison tool free?",
    a: "Yes. The EV comparison tool is completely free to use, with no sign-up required. It runs on live data covering 140+ electric cars, scooters and bikes sold in India.",
  },
  {
    q: "Which electric vehicles can I compare?",
    a: "You can compare electric cars, scooters and bikes from every major brand available in India, including Tata, MG, Mahindra, Hyundai, BYD, Ola, Ather, TVS and more.",
  },
];

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Compare", path: "/compare-electric-vehicles" }]} className="mb-6 justify-center" />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              Comparison Engine
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Compare <span className="text-gradient-brand">any EVs</span>, instantly
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-ev-text/60">
              Pick two or three electric vehicles and get a full side-by-side
              breakdown — every spec that matters, with the leader highlighted.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CompareClient />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />

          <div className="prose-ev mx-auto mb-12 mt-16 max-w-3xl">
            <h2>Compare electric vehicles in India, side by side</h2>
            <p>
              Choosing between two or three EVs is far easier when you can see every number in
              one place. Our EV comparison tool lets you compare electric vehicles in India on the
              specs that actually decide a purchase — ex-showroom price, real-world range, battery
              capacity, power, charging time and more — with the leading value highlighted in each
              row so the trade-offs are obvious at a glance.
            </p>
            <p>
              <strong>How to use the comparison tool:</strong> pick your first EV, add a second
              (and optionally a third), then scroll the side-by-side EV specs table. It works
              across electric cars, scooters and bikes, so you can line up direct rivals or weigh
              up two very different options. Want a wider shortlist first? Browse the{" "}
              <Link href="/catalog/all">full EV catalog</Link>, work out the monthly cost with our{" "}
              <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>, or check
              what you can save through{" "}
              <Link href="/ev-subsidies-india">EV subsidies in India</Link>.
            </p>
          </div>

          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="cursor-pointer list-none font-display font-bold text-white marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
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
            "EV Comparison Tool",
            "Compare any two or three electric vehicles in India side by side — range, battery, price, power and charging.",
            "/compare-electric-vehicles",
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
