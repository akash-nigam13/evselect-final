import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Electric Cars Hit Record 6.6% Share in India in May 2026",
  description:
    "Electric passenger vehicle retail sales jumped 81% year-on-year to 26,682 units in May 2026, a record 6.6% of the market, FADA data shows. Tata led with 10,340 units, ahead of Mahindra and JSW MG.",
  alternates: altsFor("/blog/ev-cars-record-share-may-2026", "en"),
  openGraph: {
    title: "Electric Cars Hit Record 6.6% Share in India in May 2026",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-cars-record-share-may-2026">
      <p>
        India&apos;s electric car market had its strongest month yet in May 2026.
        Retail sales of electric passenger vehicles reached{" "}
        <strong>26,682 units</strong>, up 81.2% from 14,725 units a year earlier,
        according to data from the Federation of Automobile Dealers Associations
        (FADA). That pushed electric cars to a record <strong>6.6%</strong> of all
        passenger-vehicle registrations, up from 4.5% in May 2025 — a sign that
        EVs are steadily moving from early-adopter niche toward the mainstream.
      </p>

      <h2>Who sold what</h2>
      <p>
        <Link href="/brand/tata">Tata Motors</Link> held on to its lead in the
        electric-car race with 10,340 units retailed during the month.{" "}
        <Link href="/brand/mahindra">Mahindra &amp; Mahindra</Link> came second
        with 6,210 units — buoyed by its newer born-electric SUVs — while{" "}
        <Link href="/brand/mg">JSW MG Motor India</Link> took third with 4,984
        units. The gap between the top three has narrowed sharply over the past
        year, which is exactly the kind of competition that tends to drive better
        pricing, longer warranties and quicker feature upgrades for buyers.
      </p>

      <h2>Why the surge</h2>
      <p>
        May was a record month for the wider auto industry too, and EVs were a big
        part of the story. A sharp run-up in petrol and diesel prices has widened
        the running-cost gap between electric and combustion cars, making the
        monthly-fuel-bill argument harder to ignore. A broader line-up of models
        across price bands, growing public-charging coverage and aggressive
        manufacturer discounts have all helped lower the barrier to switching.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        Record penetration is more than a headline number. As volumes rise, the
        ownership ecosystem matures — more service touchpoints, better spares
        availability, richer real-world reliability data and stronger resale
        demand. It also signals that today&apos;s buyers are choosing from a far
        more competitive field than even a year ago. If you&apos;re weighing the
        switch, our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">
          petrol-vs-electric cost analysis
        </Link>{" "}
        and the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
          EV vs petrol cost calculator
        </Link>{" "}
        show how much the running-cost maths has shifted.
      </p>

      <h2>The bottom line</h2>
      <p>
        A record 6.6% EV share in a record-selling month confirms that electric
        cars are no longer a fringe choice in India. Compare the current options
        in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> or narrow
        the field with our{" "}
        <Link href="/ev-selection-tool">EV selection tool</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        FADA May 2026 retail data as reported by{" "}
        <a href="https://www.manufacturingtodayindia.com/fada-data-reveals-81-surge-in-ev-passenger-vehicle-retail" target="_blank" rel="noopener noreferrer">
          Manufacturing Today India
        </a>{" "}
        ·{" "}
        <a href="https://www.business-standard.com/industry/auto/auto-retail-sales-hit-record-may-high-as-ev-adoption-accelerates-126060800409_1.html" target="_blank" rel="noopener noreferrer">
          Business Standard
        </a>{" "}
        ·{" "}
        <a href="https://evreporter.com/indias-electric-vehicle-sales-trend-may-2026/" target="_blank" rel="noopener noreferrer">
          EVreporter
        </a>
      </p>
    </ArticleShell>
  );
}
