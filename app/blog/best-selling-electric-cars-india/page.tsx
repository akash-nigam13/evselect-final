import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Best-Selling Electric Cars in India 2026: Top Models & India's No. 1 EV | EVSelect.in",
  description:
    "Which is the top-selling electric car in India? See the best-selling EV cars of 2026, India's No. 1 EV brand and the most sold electric car — with what the numbers mean for buyers.",
  alternates: altsFor("/blog/best-selling-electric-cars-india", "en"),
  openGraph: { title: "Best-Selling Electric Cars in India 2026", type: "article" },
};

const faqs = [
  { q: "Which is the top-selling EV car in India?", a: "The Tata Nexon EV has consistently been the top-selling electric car in India, supported by the Punch EV and Tata Tiago EV. The MG Windsor has also climbed the charts rapidly. Exact monthly rankings shift, but Tata models dominate the best-seller list." },
  { q: "What is the most sold EV car in India?", a: "By cumulative sales, the Tata Nexon EV is the most sold electric car in India — it pioneered the affordable EV segment and has sold the most units of any electric car in the country." },
  { q: "Which is India's No. 1 EV brand?", a: "Tata Motors is India's No. 1 electric-car brand by market share, though its lead has narrowed as Mahindra, MG, JSW and Maruti expand their EV line-ups. Tata still sells the most electric cars overall." },
  { q: "Which are the top 5 best-selling electric cars in India?", a: "The top five typically include the Tata Nexon EV, Tata Punch EV, MG Windsor, Tata Tiago EV and a Mahindra model (BE 6 / XEV 9e), though the exact order changes month to month as per industry sales data." },
];

export default function Page() {
  return (
    <ArticleShell slug="best-selling-electric-cars-india">
      <p>
        Sales figures are one of the most useful signals for a buyer: the cars
        Indians actually buy tend to have the best service support, parts
        availability and resale value. So which is the top-selling electric car in
        India, who is the No. 1 EV brand, and what does it mean for you? Here&apos;s
        the 2026 picture, with the usual caveat that monthly figures shift as new
        models launch. Browse the full range of{" "}
        <Link href="/catalog/electric-cars">electric cars in India</Link> alongside this.
      </p>

      <h2>Which is the most sold electric car in India?</h2>
      <p>
        The <Link href="/brand/tata">Tata</Link> Nexon EV is the most sold electric
        car in India by cumulative volume. It effectively created the affordable
        electric-car segment and remains the benchmark that newer rivals are
        measured against — see the full{" "}
        <Link href="/blog/tata-electric-cars">Tata electric cars line-up</Link>.
      </p>

      <h2>India&apos;s No. 1 EV brand</h2>
      <p>
        Tata Motors is India&apos;s No. 1 electric-car brand by market share, though
        its lead has narrowed as <Link href="/brand/mahindra">Mahindra</Link>,{" "}
        <Link href="/brand/mg">MG</Link> and others expand. For buyers, a fragmenting
        market is good news — more choice, sharper pricing and faster feature
        upgrades. We cover the broader market shift in our{" "}
        <Link href="/blog/india-ev-sales-fy2026">India EV sales report</Link>.
      </p>

      <h2>Top 5 best-selling electric cars in India (2026)</h2>
      <ul>
        <li><strong>Tata Nexon EV</strong> — the long-standing No. 1.</li>
        <li><strong>Tata Punch EV</strong> — compact, affordable, hugely popular.</li>
        <li><strong>MG Windsor</strong> — a fast-rising challenger.</li>
        <li><strong>Tata Tiago EV</strong> — the budget entry point.</li>
        <li><strong>Mahindra BE 6 / XEV 9e</strong> — feature-rich newcomers gaining share.</li>
      </ul>
      <p>
        Figures are as reported by industry sales data and change month to month.
        To judge which best-seller suits you, put them side by side in the{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>What the sales numbers mean for buyers</h2>
      <p>
        A best-seller usually means a denser service network, easier parts, more
        used-car demand and stronger resale — all of which lower your real cost of
        ownership. But popularity isn&apos;t everything: always match range, safety
        and price to your own needs. Check the{" "}
        <Link href="/blog/safest-electric-cars-india">safest electric cars</Link> and
        run the <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">cost calculator</Link>{" "}
        before deciding.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="not-prose my-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
            <summary className="cursor-pointer font-display text-sm font-bold text-white">{f.q}</summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
          </details>
        ))}
      </div>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
