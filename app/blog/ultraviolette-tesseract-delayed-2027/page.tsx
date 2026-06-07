import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ultraviolette Tesseract Pushed to January 2027",
  description:
    "Ultraviolette has delayed its Tesseract electric scooter to January 2027 — its third slip since the 2025 unveil — but will honour the ₹1.45 lakh introductory price for early bookings.",
  alternates: altsFor("/blog/ultraviolette-tesseract-delayed-2027", "en"),
  openGraph: {
    title: "Ultraviolette Tesseract Pushed to January 2027",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ultraviolette-tesseract-delayed-2027">
      <p>
        Bengaluru-based{" "}
        <Link href="/brand/ultraviolette">Ultraviolette</Link> has confirmed a fresh
        delay for its much-hyped Tesseract electric scooter, now slated for a
        production-spec launch in <strong>January 2027</strong>, with deliveries to
        follow shortly after. It is the third time the timeline has slipped since
        the scooter was first unveiled in March 2025 — but the company is softening
        the blow for the people who matter most: early customers.
      </p>

      <h2>Early bookings keep the launch price</h2>
      <p>
        Ultraviolette says it will honour the original introductory price of{" "}
        <strong>₹1.45 lakh</strong> (ex-showroom) for the first 50,000 reservation
        holders, despite the extensive hardware and engineering upgrades made during
        the delay. For buyers who booked early, that is a meaningful guarantee — new
        components and re-engineering usually push prices up, not hold them flat.
      </p>

      <h2>Why the Tesseract slipped again</h2>
      <p>
        According to the company, the biggest hurdle was delivering the promised{" "}
        <strong>15 kW peak power</strong> reliably under real Indian operating
        conditions — heat, load and sustained use. Rather than ship a detuned
        version, Ultraviolette chose to re-engineer the hardware to hit its
        performance targets, and opened the development cycle to customer feedback
        through multiple interaction sessions. A near-final production model is
        rumoured to be shown at the EICMA motorcycle show in November 2026 before the
        market launch.
      </p>

      <h2>What the Tesseract promises</h2>
      <p>
        On paper the Tesseract is one of India&apos;s most ambitious scooters: a
        battery of up to 6 kWh, a claimed ARAI range of around 261 km, a 0–60 km/h
        sprint in roughly 2.9 seconds, and a radar-based ADAS suite with blind-spot
        and collision alerts that is rare at this price. Those numbers are exactly
        why the wait has frustrated buyers — and why the price lock matters.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        If you have been holding out for the Tesseract, the realistic message is to
        plan around early 2027, not 2026. Anyone who needs a scooter sooner has
        plenty of capable options on sale today — compare current models in our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link> or
        see how this segment is moving in our roundup of the{" "}
        <Link href="/blog/top-5-electric-scooters-india-2026">
          top 5 electric scooters in India
        </Link>
        .
      </p>

      <h2>Sources</h2>
      <p>
        Reported by{" "}
        <a href="https://www.autocarindia.com/bike-news/ultraviolette-tesseract-electric-scooter-delayed-but-improved-439822" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.zigwheels.com/news-features/general-news/even-thanos-got-his-tesseract-quicker-than-you-ultraviolettes-e-scooter-launch-in-january-2027-now/57931/" target="_blank" rel="noopener noreferrer">
          ZigWheels
        </a>
      </p>
    </ArticleShell>
  );
}
