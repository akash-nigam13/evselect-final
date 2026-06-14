import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TVS Crosses 1 Million Electric Scooter Sales in India",
  description:
    "TVS Motor has crossed 10 lakh cumulative electric scooter sales in India — 10,04,148 iQube and Orbiter units as of June 11, 2026 — becoming the second EV maker after Ola Electric to hit the milestone.",
  alternates: altsFor("/blog/tvs-1-million-electric-scooter-sales-2026", "en"),
  openGraph: {
    title: "TVS Crosses 1 Million Electric Scooter Sales in India",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="tvs-1-million-electric-scooter-sales-2026">
      <p>
        <Link href="/brand/tvs">TVS</Link> Motor has crossed one million
        cumulative electric scooter sales in India. According to Vahan
        registration data recorded on June 11, 2026, the company has retailed{" "}
        <strong>10,04,148 units</strong> of its electric two-wheelers — the iQube
        and the newer Orbiter — since it entered the segment in January 2020. That
        makes TVS only the second electric two-wheeler maker in the country to
        reach the 10-lakh mark, after Ola Electric.
      </p>

      <h2>How quickly it got here</h2>
      <p>
        The headline isn&apos;t just the number — it&apos;s the acceleration. TVS
        took more than three years to retail its first one lakh iQubes, but only
        about ten months to climb from one lakh to two lakh. The most recent one
        lakh units were sold in just 75 days, between late March and June 10,
        averaging roughly 1,300 scooters a day. Since the start of 2026 alone, TVS
        has delivered 2,19,232 electric scooters — already around 70% of its full
        2025 tally — and posted its best-ever month in May with 51,605 units.
      </p>

      <h2>Why the segment is accelerating</h2>
      <p>
        The milestone lands during a broader surge in India&apos;s electric
        two-wheeler market, which has been averaging well over 1.5 lakh units a
        month in 2026 and is on track to approach two million annual sales for the
        first time. Rising petrol prices have sharpened the running-cost case for
        electric commuting, and a maturing line-up — wider model choice, better
        range and a denser service network — has made the switch easier for
        mainstream buyers. TVS now sits alongside Ola, Bajaj, Ather and Hero Vida
        in a market that looks very different from even two years ago.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        A million-plus scooters on the road is a useful signal for anyone weighing
        an electric two-wheeler. Large cumulative volumes typically mean a more
        established spares and service ecosystem, more real-world reliability data,
        and stronger resale demand — all things that matter once the showroom
        excitement fades. It also intensifies competition, which tends to keep
        prices and features moving in the buyer&apos;s favour.
      </p>

      <h2>The bottom line</h2>
      <p>
        TVS hitting one million electric scooters confirms how mainstream electric
        commuting has become in India. If you&apos;re considering one, compare the
        current options in our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>,
        read our{" "}
        <Link href="/blog/tvs-electric-scooters">TVS electric scooter guide</Link>,
        or narrow the field with our{" "}
        <Link href="/ev-selection-tool">EV selection tool</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        Sales figures as reported by{" "}
        <a href="https://www.autocarindia.com/bike-news/tvs-crosses-1-million-electric-scooter-sales-439935" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.rushlane.com/tvs-electric-scooter-sales-cross-10-lakh-milestone-12548838.html" target="_blank" rel="noopener noreferrer">
          Rushlane
        </a>
      </p>
    </ArticleShell>
  );
}
