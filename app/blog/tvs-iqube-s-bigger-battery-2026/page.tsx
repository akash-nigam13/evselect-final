import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "2026 TVS iQube S Relaunched With Bigger 4.7 kWh Battery and 175 km Range",
  description:
    "TVS has relaunched the iQube S with a larger 4.7 kWh battery and a 175 km claimed range, plus two new colours, priced at ₹1.59 lakh (ex-showroom, Delhi). It sits in a refreshed five-pack iQube line-up from 2.2 kWh to 5.3 kWh.",
  alternates: altsFor("/blog/tvs-iqube-s-bigger-battery-2026", "en"),
  openGraph: {
    title: "2026 TVS iQube S Relaunched With Bigger 4.7 kWh Battery and 175 km Range",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="tvs-iqube-s-bigger-battery-2026">
      <p>
        TVS Motor has relaunched the <strong>iQube S</strong> with a bigger battery
        and a longer range, the latest update to one of India&apos;s best-selling
        electric scooters. The mid-spec S now gets a{" "}
        <strong>4.7 kWh battery pack</strong> — up from the smaller unit it used
        before — pushing its claimed range to <strong>175 km</strong> on a single
        charge. It is priced at <strong>₹1,59,142</strong> (ex-showroom, Delhi),
        about ₹19,500 more than the outgoing version, reflecting the larger pack.
      </p>

      <h2>What&apos;s new on the iQube S</h2>
      <p>
        Beyond the battery, the 4.7 kWh pack powers a <strong>4.4 kW peak
        motor</strong>, good for a top speed of <strong>82 km/h</strong> and a
        0–40 km/h sprint in about <strong>4.3 seconds</strong>. TVS has also added
        two new colours for 2026 — Magnificence Purple Beige and Harlequin Blue
        Beige — to freshen up the look. The headline change, though, is range: 175
        km of claimed range moves the iQube S firmly into the bracket where a
        single charge can cover several days of typical city commuting, easing the
        range anxiety that still puts off many first-time EV buyers.
      </p>

      <h2>How it fits the wider iQube range</h2>
      <p>
        The relaunch is part of a broader iQube reshuffle. The line-up now spans{" "}
        <strong>five battery options across three variants</strong>: the base iQube
        with 2.2, 3.1 and 3.5 kWh packs (from around ₹1.35 lakh), the mid-premium{" "}
        <strong>iQube S with the new 4.7 kWh</strong> pack, and the top-spec{" "}
        <strong>iQube ST with a 5.3 kWh</strong> battery. That ladder lets buyers
        pick a pack size to match their daily distance and budget rather than
        paying for range they won&apos;t use. You can see where each sits in our{" "}
        <Link href="/blog/tvs-electric-scooters">TVS electric scooters guide</Link>.
      </p>

      <h2>Why it matters</h2>
      <p>
        TVS recently became only the second brand after Ola to cross{" "}
        <Link href="/blog/tvs-1-million-electric-scooter-sales-2026">1 million
        electric-scooter sales in India</Link>, and the iQube is the engine behind
        that. Pushing range up while keeping the rest of the package familiar is a
        low-risk way to defend that position against the Ather Rizta, Bajaj Chetak
        and Hero Vida — all of which have been gaining ground as petrol prices climb.
        For buyers, a bigger battery generally means fewer charges and better
        long-term flexibility, but it also raises the upfront price, so it&apos;s
        worth checking whether you actually need 175 km of range. Lining the iQube S
        up against rivals in our{" "}
        <Link href="/catalog/electric-scooters">electric-scooter catalogue</Link>{" "}
        is the quickest way to judge value.
      </p>

      <h2>Sources</h2>
      <p>
        Specifications and pricing as reported by{" "}
        <a href="https://www.bikedekho.com/news/category-launch-news/breaking-2026-tvs-iqube-s-launched-in-india-19505" target="_blank" rel="noopener noreferrer">
          BikeDekho
        </a>{" "}
        ·{" "}
        <a href="https://www.motoroids.com/news/tvs-iqube-s-launched-with-4-7kwh-battery-175km-range/" target="_blank" rel="noopener noreferrer">
          Motoroids
        </a>{" "}
        ·{" "}
        <a href="https://www.bikewale.com/news/tvs-iqube-s-launched-with-bigger-battery-pack/" target="_blank" rel="noopener noreferrer">
          BikeWale
        </a>
      </p>
    </ArticleShell>
  );
}
