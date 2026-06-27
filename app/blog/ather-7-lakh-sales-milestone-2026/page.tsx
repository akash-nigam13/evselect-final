import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ather Energy Crosses 7 Lakh Scooter Sales — India's 4th-Biggest EV Two-Wheeler Brand",
  description:
    "Ather Energy has crossed 7 lakh cumulative electric-scooter sales in India (7,04,447 units as of June 25, 2026), becoming the fourth e-two-wheeler brand to hit the mark after Ola, TVS and Bajaj. The Rizta now drives nearly 75% of monthly volumes.",
  alternates: altsFor("/blog/ather-7-lakh-sales-milestone-2026", "en"),
  openGraph: {
    title: "Ather Energy Crosses 7 Lakh Scooter Sales — India's 4th-Biggest EV Two-Wheeler Brand",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ather-7-lakh-sales-milestone-2026">
      <p>
        Ather Energy has crossed <strong>7 lakh cumulative electric-scooter
        sales</strong> in India, becoming only the fourth electric two-wheeler
        maker to reach the milestone after Ola Electric, TVS Motor and Bajaj Auto.
        According to Vahan registration data, the Bengaluru-based company has
        delivered <strong>7,04,447 units</strong> as of June 25, 2026, since it
        began sales in 2018. It is a notable marker for one of India&apos;s oldest
        pure-play EV brands — and a sign of how quickly the two-wheeler segment is
        consolidating around a handful of large players.
      </p>

      <h2>How fast Ather got here</h2>
      <p>
        What stands out is the acceleration. Ather added its most recent{" "}
        <strong>2 lakh units in just eight months</strong> — a pace that would
        have been unthinkable in its early years, when it was a niche premium
        brand selling a few thousand scooters a month. Between January 1 and June
        25, 2026, it delivered <strong>1,63,788 units</strong>, already about 76%
        of its entire 2025 tally and roughly a <strong>17.5% share</strong> of the
        9.34 lakh electric two-wheelers sold in India so far this year.{" "}
        <strong>March 2026</strong> was its best-ever month at 36,362 units, and it
        has now topped 20,000 units in eight of the past nine months.
      </p>

      <h2>The Rizta is doing the heavy lifting</h2>
      <p>
        The single biggest driver is the <strong>Rizta</strong>, the family-focused
        scooter Ather launched in April 2024 to move beyond its sportier 450
        line-up. The Rizta now accounts for nearly <strong>75% of Ather&apos;s
        monthly volumes</strong>, and its cumulative sales crossed 3 lakh units in
        just 25 months. That shift — from enthusiast scooters to a practical,
        wider-appeal family product — is the same playbook that has powered rivals
        like the TVS iQube and Bajaj Chetak. You can see how Ather&apos;s full
        range stacks up in our{" "}
        <Link href="/blog/ather-electric-scooters">Ather electric scooters guide</Link>.
      </p>

      <h2>Where Ather sits in the pecking order</h2>
      <p>
        Crossing 7 lakh makes Ather India&apos;s fourth-largest electric
        two-wheeler brand by cumulative deliveries. Ola Electric and TVS have both
        passed the <strong>10 lakh (1 million)</strong> mark, with Bajaj also ahead
        of Ather on the all-time tally. But Ather&apos;s recent monthly momentum has
        been among the strongest in the segment, helped by rising fuel prices and a
        broader buyer base. For shoppers, more scale usually means a denser service
        network, better spares availability and stronger resale — all things worth
        weighing when you{" "}
        <Link href="/catalog/electric-scooters">compare electric scooters</Link>.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        Milestones like this matter beyond bragging rights. A maker shipping 20,000+
        scooters a month has the volume to invest in charging, software updates and
        after-sales support — and the financial stability that reduces the risk of
        buying into an EV brand that might not be around in five years. If
        you&apos;re weighing an Ather against an Ola, TVS or Bajaj, it&apos;s worth
        lining them up on range, charging and price rather than headline sales
        numbers alone. Our{" "}
        <Link href="/ev-selection-tool">EV selection tool</Link> can help narrow the
        field to the scooters that actually fit your commute and budget.
      </p>

      <h2>Sources</h2>
      <p>
        Figures as reported from Vahan data by{" "}
        <a href="https://www.autocarindia.com/bike-news/ather-energy-crosses-7-lakh-electric-scooter-sales-440054" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.autocarpro.in/analysis/ather-energy-becomes-fourth-indian-ev-maker-to-surpass-700000-sales-133245" target="_blank" rel="noopener noreferrer">
          Autocar Professional
        </a>{" "}
        ·{" "}
        <a href="https://www.team-bhp.com/news/ather-energy-crosses-7-lakh-sales-milestone" target="_blank" rel="noopener noreferrer">
          Team-BHP
        </a>
      </p>
    </ArticleShell>
  );
}
