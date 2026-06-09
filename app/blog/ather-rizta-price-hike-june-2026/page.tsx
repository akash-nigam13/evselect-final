import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ather Hikes Rizta Prices; Now Starts at ₹1.21 Lakh",
  description:
    "Ather Energy has raised prices of its best-selling Rizta family scooter by ₹3,000–4,000, effective June 1, 2026. The lineup now spans ₹1.21–1.59 lakh ex-showroom. Here's the variant-wise breakdown.",
  alternates: altsFor("/blog/ather-rizta-price-hike-june-2026", "en"),
  openGraph: {
    title: "Ather Hikes Rizta Prices; Now Starts at ₹1.21 Lakh",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ather-rizta-price-hike-june-2026">
      <p>
        <Link href="/brand/ather">Ather Energy</Link> has increased prices across
        its best-selling family scooter, the Rizta, with the revised rates
        effective from <strong>June 1, 2026</strong>. Depending on the variant,
        the e-scooter is now <strong>₹3,000–4,000 dearer</strong>, with the
        four-variant range spanning roughly ₹1.21 lakh to ₹1.59 lakh (ex-showroom).
      </p>

      <h2>The variant-wise breakdown</h2>
      <p>
        The entry S with the 2.9 kWh pack now starts at about ₹1,21,046 — up
        ₹3,000. The Z 2.9 kWh moves to roughly ₹1,39,045, the S 3.7 kWh to about
        ₹1,43,547, and the top Z 3.7 kWh to around ₹1,59,046 — each up by ₹4,000.
        The line-up and features are otherwise unchanged; this is a pricing
        revision, not a model update.
      </p>

      <h2>Why prices went up</h2>
      <p>
        Ather has attributed the increase to rising raw-material and production
        costs — the same input-cost pressure that periodically pushes two-wheeler
        prices up across the industry. Small, mid-cycle hikes like this are common
        and tend to be passed on quietly rather than announced with fanfare.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        A few thousand rupees won&apos;t change the Rizta&apos;s case as a practical
        family e-scooter, but it is a reminder that the on-road price you were
        quoted last month may no longer hold. If you are cross-shopping, the gap to
        rivals has narrowed only marginally. Note too that central PM E-Drive
        incentives and any state subsidy are applied separately — so your effective
        cost still depends heavily on where you buy. Check the latest support in our{" "}
        <Link href="/ev-subsidies-india">EV subsidies guide</Link>.
      </p>

      <h2>The bottom line</h2>
      <p>
        The hike is modest and unlikely to deter committed buyers, but it is worth
        getting a fresh, itemised quote before booking. Compare the Rizta against
        the rest of the field in our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>{" "}
        before you decide.
      </p>

      <h2>Sources</h2>
      <p>
        Price details as reported by{" "}
        <a href="https://www.bikedekho.com/news/category-price-updates/ather-rizta-prices-increased-by-up-to-rs-4000-now-starts-at-rs-121-lakh-19601" target="_blank" rel="noopener noreferrer">
          BikeDekho
        </a>{" "}
        ·{" "}
        <a href="https://www.drivespark.com/two-wheelers/2026/ather-energy-hikes-rizta-family-electric-scooter-prices-085891.html" target="_blank" rel="noopener noreferrer">
          DriveSpark
        </a>
      </p>
    </ArticleShell>
  );
}
