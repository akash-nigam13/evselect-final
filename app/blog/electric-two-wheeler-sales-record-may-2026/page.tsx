import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Electric Two-Wheeler Sales Near Record High in May 2026",
  description:
    "India retailed about 1.7 lakh electric two-wheelers in May 2026 — up 63% YoY and the segment's second-best month ever. TVS led, with Bajaj, Ather and Hero Vida surging.",
  alternates: altsFor("/blog/electric-two-wheeler-sales-record-may-2026", "en"),
  openGraph: {
    title: "Electric Two-Wheeler Sales Near Record High in May 2026",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-two-wheeler-sales-record-may-2026">
      <p>
        India&apos;s electric two-wheeler market just had one of its strongest
        months on record. According to retail registration data, roughly{" "}
        <strong>1,70,570 electric two-wheelers</strong> were sold in May 2026 — a{" "}
        <strong>63% jump</strong> over the same month last year, and the
        segment&apos;s second-highest monthly total ever, behind only March 2026.
        The surge reinforces how quickly electric scooters and bikes are moving
        from early-adopter curiosity to mainstream choice in Indian cities.
      </p>

      <h2>What drove the spike</h2>
      <p>
        A big part of the story was at the petrol pump. Fuel prices climbed sharply
        in the second half of May, and the sales pattern followed: the back half of
        the month saw far more electric two-wheelers registered than the first half.
        When the running-cost gap between petrol and electric widens, the maths
        tilts further toward EVs — something you can see for yourself with our{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
          petrol-vs-electric cost calculator
        </Link>
        . For daily commuters covering 30–40 km a day, the monthly savings are now
        hard to ignore.
      </p>

      <h2>Who sold what</h2>
      <p>
        The leaderboard reshuffled meaningfully compared with a year ago.{" "}
        <strong>TVS Motor</strong> led the month with about{" "}
        <strong>42,415 units</strong> (up 64% year-on-year), giving it roughly a
        quarter of the market.{" "}
        <Link href="/brand/tvs">TVS</Link> was followed closely by{" "}
        <strong>Bajaj Auto</strong>, whose Chetak range sold around{" "}
        <strong>39,142 units</strong> (up 73%) for a ~23% share. <strong>Ather
        Energy</strong> roughly doubled its volumes year-on-year to about{" "}
        <strong>28,211 units</strong>, holding a ~17% share, while{" "}
        <strong>Hero MotoCorp&apos;s Vida</strong> brand posted the steepest growth
        of the top players — up about 158% to roughly{" "}
        <strong>19,051 units</strong>. Ola Electric, which once led this segment,
        slipped down the order to around 5,600 units for the month.
      </p>

      <h2>The bigger shift</h2>
      <p>
        Two trends stand out. First, the market is no longer a one-brand show: four
        manufacturers now each command double-digit share, which is healthier for
        buyers in terms of pricing, service competition and product choice. Second,
        legacy two-wheeler giants — TVS, Bajaj and Hero — are converting their
        dealer and service muscle into electric sales, narrowing the gap that
        startups opened early on. If you&apos;re weighing options, it&apos;s worth
        comparing the current crop on range, charging time and service reach; our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link> lays
        out the full field.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        Record volumes usually bring more variants, sharper pricing and wider
        availability — good news if you&apos;ve been holding off. They also signal
        that resale demand and parts ecosystems are maturing, which reduces the risk
        of buying into a fast-moving category. With the PM E-Drive incentive still
        in play for qualifying two-wheelers, the effective on-road price for many
        models remains attractive; see our{" "}
        <Link href="/ev-subsidies-india">EV subsidies guide</Link> for the current
        state of central and state support.
      </p>

      <h2>Sources</h2>
      <p>
        Sales figures as reported by{" "}
        <a href="https://www.autocarindia.com/industry/electric-two-wheeler-sales-hit-second-highest-monthly-total-in-may-2026-439863" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://evindia.online/news/ev-2-wheeler-sales-mid-may-2026-tvs-bajaj" target="_blank" rel="noopener noreferrer">
          EVINDIA
        </a>
      </p>
    </ArticleShell>
  );
}
