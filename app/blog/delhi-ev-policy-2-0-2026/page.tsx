import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Delhi Approves EV Policy 2026: 100% Road-Tax Waiver, ₹30,000 e-Scooter Subsidy",
  description:
    "The Delhi Cabinet approved EV Policy 2026 on June 29 — a 100% road-tax and registration waiver on EVs (cars up to ₹30 lakh), up to ₹30,000 for e-scooters, ₹1 lakh scrappage, and a phase-out of new petrol/CNG two-wheelers from April 2028. Here's what's confirmed.",
  alternates: altsFor("/blog/delhi-ev-policy-2-0-2026", "en"),
  openGraph: {
    title: "Delhi Approves EV Policy 2026: 100% Road-Tax Waiver, ₹30,000 e-Scooter Subsidy",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="delhi-ev-policy-2-0-2026">
      <p>
        The Delhi Cabinet has approved <strong>EV Policy 2026</strong> on June 29,
        clearing one of India&apos;s most ambitious state electric-mobility plans.
        Chief Minister Rekha Gupta said the framework — backed by a direct outlay of
        more than <strong>₹7,000 crore</strong> over four years (with the total
        benefit, including foregone tax, put above ₹15,000 crore) — will now go to the
        Lieutenant Governor for final sign-off before rollout. As approved, it is set
        to run from <strong>July 1, 2026 to March 31, 2030</strong> and focuses
        exclusively on battery electric vehicles (BEVs).
      </p>

      <h2>Buying an EV in Delhi gets cheaper</h2>
      <p>
        The headline benefit is a <strong>100% waiver of road tax and registration
        fees</strong> on electric vehicles. For electric passenger cars, that waiver
        applies only to models priced up to <strong>₹30 lakh</strong> (ex-showroom) —
        a far wider net than the earlier ₹15 lakh budget proposal, covering most
        mainstream EVs sold in the capital.
      </p>
      <p>
        On top of that, the government will pay direct purchase incentives, highest in
        the first year and tapering in years two and three. Electric two-wheeler buyers
        can get up to <strong>₹30,000</strong>, electric auto-rickshaws up to{" "}
        <strong>₹50,000</strong>, and electric mini-trucks and small commercial goods
        vehicles up to <strong>₹1 lakh</strong>. Dealers must tell buyers at booking
        whether their vehicle qualifies.
      </p>

      <h2>Extra money for scrapping an old vehicle</h2>
      <p>
        The policy rewards replacing older vehicles with EVs. Scrapping an old
        two-wheeler is worth <strong>₹10,000</strong>, an auto-rickshaw{" "}
        <strong>₹25,000</strong>, a private car <strong>₹1 lakh</strong>, a light
        commercial goods vehicle <strong>₹50,000</strong>, and a Gramin Sewa shared
        three-wheeler <strong>₹15,000</strong>. As before, all incentives are paid
        straight to the buyer&apos;s bank account via Direct Benefit Transfer (DBT).
      </p>

      <h2>The phase-out timeline</h2>
      <p>
        This is where EV Policy 2026 goes further than most. From{" "}
        <strong>January 1, 2027</strong>, only electric auto-rickshaws and electric
        goods three-wheelers — plus electric mini-trucks and last-mile delivery vans —
        can be newly registered in Delhi. From <strong>April 1, 2028</strong>, no new
        petrol or CNG scooters and motorcycles can be registered either. Crucially,
        the policy does <strong>not</strong> ban existing petrol or CNG vehicles; the
        restriction applies only to fresh registrations after those dates.
      </p>

      <h2>Trucks, school buses and charging</h2>
      <p>
        The first 1,000 medium electric trucks bought within three months of
        notification get a 10-year exemption from Delhi&apos;s &apos;No Entry&apos;
        restrictions. Schools must electrify 10% of their bus fleet within two years,
        20% within three, and 30% by March 31, 2030. To support all this, Delhi plans
        more than <strong>30,000 new charging points</strong> across the city — a
        direct answer to the range-anxiety and access worries that hold back many
        first-time buyers.
      </p>

      <h2>How it fits the national picture</h2>
      <p>
        State incentives stack on top of the central PM E-Drive scheme. Note that the{" "}
        <Link href="/blog/pm-e-drive-2w-subsidy-deadline-july-2026">
          PM E-Drive two-wheeler subsidy is fund-limited and ends July 31
        </Link>
        , so e-scooter buyers in Delhi may want to move before that cap is exhausted.
        For a state-by-state view of what you actually save, see our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          EV subsidies and road-tax guide
        </Link>{" "}
        and the latest in our{" "}
        <Link href="/ev-subsidies-india">EV subsidies hub</Link>.
      </p>

      <h2>The bottom line</h2>
      <p>
        EV Policy 2026 is among the most aggressive state EV pushes yet — a full
        road-tax waiver up to ₹30 lakh, sizeable per-vehicle incentives, a clean-air
        scrappage hook and firm dates to retire new ICE two- and three-wheelers. The
        caveats: it still needs the Lieutenant Governor&apos;s final approval, and
        first-year incentives are the richest, so timing matters. If you&apos;re
        weighing the switch, start with our{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">
          guide to affordable EVs
        </Link>{" "}
        and the{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV checklist</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        As reported by{" "}
        <a href="https://www.businesstoday.in/auto/story/delhi-ev-policy-2026-explained-whats-changing-for-car-bike-and-auto-buyers-539804-2026-06-29" target="_blank" rel="noopener noreferrer">
          Business Today
        </a>{" "}
        ·{" "}
        <a href="https://www.business-standard.com/india-news/delhi-approves-ev-policy-offers-tax-waiver-on-electric-cars-up-to-30-lakh-126062900555_1.html" target="_blank" rel="noopener noreferrer">
          Business Standard
        </a>{" "}
        ·{" "}
        <a href="https://www.indiatvnews.com/business/news/delhi-cabinet-approves-ev-policy-2026-offers-100-exemption-on-road-tax-registration-fees-key-highlights-2026-06-29-1046524" target="_blank" rel="noopener noreferrer">
          India TV News
        </a>
      </p>
    </ArticleShell>
  );
}
