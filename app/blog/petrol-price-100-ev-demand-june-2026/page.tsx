import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Petrol Tops ₹100 in Major Cities — and EV Interest Is Surging",
  description:
    "Petrol and diesel have risen nearly ₹7.5 a litre in under two weeks, pushing petrol past ₹100 in several Indian cities amid West Asia tensions. Here's what the fuel shock means for EV buyers.",
  alternates: altsFor("/blog/petrol-price-100-ev-demand-june-2026", "en"),
  openGraph: {
    title: "Petrol Tops ₹100 in Major Cities — and EV Interest Is Surging",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="petrol-price-100-ev-demand-june-2026">
      <p>
        A sharp run-up in fuel prices is putting electric vehicles back at the top
        of Indian buyers&apos; shopping lists. Petrol and diesel have climbed by
        close to <strong>₹7.5 a litre in under two weeks</strong>, pushing petrol
        above the symbolic <strong>₹100 mark</strong> in cities including Delhi and
        Chennai. The driver is global: escalating tensions in West Asia, including
        worries around the Strait of Hormuz, have lifted Brent crude past $110 a
        barrel and squeezed a country that imports more than 85% of the oil it
        consumes.
      </p>

      <h2>Why the pump is hurting</h2>
      <p>
        India&apos;s retail fuel prices track international crude with a lag, and a
        weaker rupee has amplified the pain. State-run oil marketers are absorbing
        heavy losses, and the government has flagged the situation as a national
        concern — the petroleum ministry has called the shock a &quot;wake-up
        call,&quot; while the Prime Minister has urged citizens to cut discretionary
        fuel use and lean on electric vehicles and work-from-home where possible.
        Whether the spike proves temporary or sticky, it is a reminder of how
        exposed petrol and diesel running costs are to events far outside any
        driver&apos;s control.
      </p>

      <h2>The EV maths looks better at ₹100+</h2>
      <p>
        Higher pump prices widen the per-kilometre gap between burning petrol and
        charging a battery. A typical petrol car costs several rupees per kilometre
        in fuel; a home-charged EV often runs at a fraction of that, and the gap
        only grows as petrol climbs. Two-wheelers tell the same story, which is one
        reason electric scooter demand has been running near record highs this year.
        You can put your own numbers in with our{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
          EV vs petrol cost calculator
        </Link>{" "}
        and see the five-year picture in our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">
          petrol-vs-electric cost breakdown
        </Link>
        .
      </p>

      <h2>What to weigh before you switch</h2>
      <p>
        Fuel-price spikes are a good prompt, but not the whole decision. An EV
        rewards you most if you can charge at or near home, drive enough kilometres
        for the running-cost savings to offset the higher upfront price, and pick a
        model whose real-world range fits your routine. If a full EV doesn&apos;t
        suit your situation yet, a CNG car can also blunt petrol-price pain — we
        compare the two in our{" "}
        <Link href="/blog/electric-car-vs-cng-car-india">
          electric vs CNG guide
        </Link>
        .
      </p>

      <h2>The bottom line</h2>
      <p>
        Petrol crossing ₹100 doesn&apos;t change the fundamentals of EV ownership,
        but it does sharpen them: lower, more predictable running costs are exactly
        what buyers want when crude is volatile. Run the numbers for your own usage,
        then browse current options in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        Fuel-price data and context as reported by{" "}
        <a href="https://www.deccanherald.com/national/fuel-prices-hiked-petrol-nears-rs-100-a-litre-in-chennai-1002733" target="_blank" rel="noopener noreferrer">
          Deccan Herald
        </a>{" "}
        ·{" "}
        <a href="https://www.goodreturns.in/petrol-price.html" target="_blank" rel="noopener noreferrer">
          Goodreturns
        </a>
      </p>
    </ArticleShell>
  );
}
