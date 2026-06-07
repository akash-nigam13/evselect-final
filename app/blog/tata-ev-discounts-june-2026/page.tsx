import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tata Offers Up to ₹3.35 Lakh Off on Its EVs in June 2026",
  description:
    "Tata Motors is offering discounts of up to ₹3.35 lakh across its EV range in June 2026, with the Harrier EV alone eligible for benefits of up to ₹2.75 lakh. Here's the full breakdown.",
  alternates: altsFor("/blog/tata-ev-discounts-june-2026", "en"),
  openGraph: {
    title: "Tata Offers Up to ₹3.35 Lakh Off on Its EVs in June 2026",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="tata-ev-discounts-june-2026">
      <p>
        Tata Motors has rolled out its most aggressive electric-vehicle offers of
        the year. Through June 2026, buyers can claim discounts of up to{" "}
        <strong>₹3.35 lakh</strong> across the carmaker&apos;s EV range — a mix of
        exchange and scrappage benefits, loyalty bonuses and additional dealer
        incentives spread over the Tiago, Punch, Nexon, Curvv and Harrier EVs.
      </p>

      <h2>How the discounts break down</h2>
      <p>
        The headline benefit sits on the flagship{" "}
        <Link href="/brand/tata">Tata</Link> Harrier EV, where all variants are
        eligible for total benefits of up to <strong>₹2.75 lakh</strong>. That
        figure typically combines an exchange bonus of about ₹50,000 (or a
        scrappage benefit of around ₹75,000), a loyalty bonus of roughly ₹1 lakh
        for existing Tata owners, and an additional consumer offer of about ₹1
        lakh. Stack the highest-value combination across the lineup and the top
        saving climbs to ₹3.35 lakh on select models.
      </p>

      <h2>Why Tata is discounting now</h2>
      <p>
        Mid-year, pre-monsoon months are traditionally slower for car sales, and
        deep offers help keep showroom momentum going before the festive season.
        Tata also has a commercial reason to clear stock: the outgoing Tiago and
        Punch EVs are being offered alongside the newer, born-electric Curvv and
        Harrier EVs, so discounts help manage the transition. It comes on the back
        of a record May, when Tata crossed{" "}
        <Link href="/blog/tata-ev-sales-cross-10000-may-2026">
          10,000 EV sales in a single month
        </Link>{" "}
        for the first time.
      </p>

      <h2>What buyers should check</h2>
      <p>
        The most important caveat: these benefits are not uniform. Discounts vary
        city to city, depend on stock availability, and the headline number almost
        always assumes you qualify for every component — exchange or scrappage,
        loyalty and the consumer offer together. A first-time buyer with no car to
        exchange will see a much smaller figure. Always ask the dealer for an
        itemised on-road quote and confirm which benefits actually apply to you.
      </p>

      <h2>The bottom line</h2>
      <p>
        For anyone who was already shortlisting a Tata EV, June is a genuinely good
        window — provided the benefits you personally qualify for are sizeable.
        Run the numbers on a loan with our{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>,
        then compare the discounted Tata against rivals in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> before you
        commit.
      </p>

      <h2>Sources</h2>
      <p>
        Offer details as reported by{" "}
        <a href="https://www.autocarindia.com/car-news/tata-harrier-ev-gets-discounts-of-up-to-rs-275-lakh-in-june-2026-439892" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.team-bhp.com/news/tata-evs-receive-discounts-rs-335-lakh-june-2026" target="_blank" rel="noopener noreferrer">
          Team-BHP
        </a>
      </p>
    </ArticleShell>
  );
}
