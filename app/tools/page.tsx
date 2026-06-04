import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, TrendingDown, Gauge, GitCompare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Reveal from "@/components/ui/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { altsFor } from "@/lib/i18n";
import { webPageSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: altsFor("/tools", "en"),
  title: "Free EV Tools — EMI, Cost & Range Calculators (India 2026)",
  description:
    "Free interactive EV calculators for India: estimate your EV loan EMI, compare EV vs petrol running costs, and work out real-world range and charging time — all on real 2026 EV data.",
};

const tools = [
  {
    title: "EV EMI Calculator",
    desc: "Estimate your monthly EV loan EMI, total interest and amount payable. Adjust down payment, rate and tenure.",
    href: "/tools/ev-emi-calculator",
    Icon: Banknote,
    accent: "#8B7BFF",
  },
  {
    title: "EV vs Petrol Cost Calculator",
    desc: "See exactly how much you save running an electric vehicle instead of petrol, based on your real usage.",
    href: "/tools/ev-vs-petrol-cost-calculator",
    Icon: TrendingDown,
    accent: "#26E0C4",
  },
  {
    title: "EV Range & Charging Calculator",
    desc: "Estimate real-world driving range and charging time for any EV in Indian conditions.",
    href: "/tools/ev-range-calculator",
    Icon: Gauge,
    accent: "#34D399",
  },
  {
    title: "Compare EVs",
    desc: "Put any two or three electric vehicles side by side on range, battery, price and charging.",
    href: "/compare",
    Icon: GitCompare,
    accent: "#60A5FA",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <Reveal className="max-w-3xl">
              <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} className="mb-6" />
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brand">Free Tools</p>
              <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl text-balance">
                Run the numbers before you <span className="text-gradient-brand">go electric</span>
              </h1>
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
                Free, interactive calculators built on real 2026 Indian-market EV specs — work out your
                loan EMI, your savings versus petrol, and how far a real-world charge will take you.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map(({ title, desc, href, Icon, accent }) => (
              <Link
                key={href}
                href={href}
                className="card-hover group flex flex-col rounded-2xl border border-ev-border bg-ev-card p-7"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}40` }}
                >
                  <Icon className="h-6 w-6" style={{ color: accent }} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white transition-colors group-hover:text-brand">
                  {title}
                </h2>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ev-text/60">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand">
                  Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          webPageSchema(
            "Free EV Tools — EMI, Cost & Range Calculators",
            "Free interactive EV calculators for India: EMI, EV-vs-petrol running cost, and real-world range & charging.",
            "/tools"
          ),
          itemListSchema(tools.map((t) => ({ name: t.title, path: t.href }))),
        ]}
      />
    </>
  );
}
