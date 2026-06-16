import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Delhi EV Policy 2.0: Up to ₹1 Lakh Subsidy, Tied to Scrapping Old Cars",
  description:
    "Delhi's Budget 2026 introduces EV Policy 2.0 — up to ₹1 lakh off an EV under ₹15 lakh, ₹10,000 for e-two-wheelers, scrappage-linked benefits and faster DBT payouts. Here's what's confirmed.",
  alternates: altsFor("/blog/delhi-ev-policy-2-0-2026", "en"),
  openGraph: {
    title: "Delhi EV Policy 2.0: Up to ₹1 Lakh Subsidy, Tied to Scrapping Old Cars",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="delhi-ev-policy-2-0-2026">
      <p>
        Delhi has unveiled <strong>EV Policy 2.0</strong> as part of its Budget 2026,
        backing it with a dedicated <strong>₹200 crore outlay</strong> to push
        battery-powered vehicles in the capital. The framework runs until March 31,
        2030 unless revised — and its defining feature is that the biggest incentives
        are now tied to <strong>scrapping an old petrol or diesel vehicle</strong>.
      </p>

      <h2>What you can claim</h2>
      <p>
        Private electric cars priced under ₹15 lakh can attract a subsidy of up to{" "}
        <strong>₹1 lakh</strong>, capped at the first 1 lakh applicants. Electric
        two-wheelers get a flat <strong>₹10,000</strong> incentive, while electric
        three-wheelers (L5M) carry a <strong>₹25,000</strong> scrappage incentive on
        the purchase of a new EV. The higher subsidy brackets are deliberately linked
        to decommissioning older, more polluting Bharat Stage (BS)-IV and earlier
        vehicles registered in Delhi.
      </p>

      <h2>The big fix: faster payouts</h2>
      <p>
        A long-standing complaint with Indian EV subsidies has been the wait. Delhi
        says all incentives under EV Policy 2.0 will be paid via{" "}
        <strong>Direct Benefit Transfer (DBT)</strong> straight to the buyer&apos;s
        bank account — cutting the disbursal time from more than 40 days to under a
        week. If it works as promised, it removes one of the most cited frustrations
        of buying an EV with a subsidy on paper that takes months to arrive.
      </p>

      <h2>Why the scrappage angle matters</h2>
      <p>
        By tying the richest benefits to scrapping an old ICE car, Delhi is trying to
        do two things at once — get the dirtiest vehicles off its roads and steer that
        demand toward EVs. For a household sitting on an ageing petrol or diesel car,
        the combined value of scrappage benefit plus EV subsidy can meaningfully
        change the maths on switching, especially in the sub-₹15 lakh bracket where
        most of India&apos;s{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">affordable EVs</Link>{" "}
        sit.
      </p>

      <h2>How it fits the national picture</h2>
      <p>
        State incentives stack on top of the central PM E-Drive scheme — and the two
        interact. Note that the central{" "}
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
        EV Policy 2.0 is one of India&apos;s more aggressive state EV pushes — large
        per-vehicle benefits, a clean-air scrappage hook and a real attempt to fix
        slow payouts. The catches are the application caps and the conditions, so
        Delhi buyers should confirm eligibility and scrappage requirements before
        booking. If you&apos;re still choosing, start with our{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV checklist</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        As reported by{" "}
        <a href="https://www.outlookbusiness.com/news/delhi-ev-policy-20-subsidies-scrappage-benefits-and-neighborhood-charging-for-2026" target="_blank" rel="noopener noreferrer">
          Outlook Business
        </a>{" "}
        ·{" "}
        <a href="https://www.cartoq.com/car-news/delhi-budget-2026-ev-policy-2-0-scrappage-incentives/" target="_blank" rel="noopener noreferrer">
          CarToq
        </a>{" "}
        ·{" "}
        <a href="https://carhp.in/car-guide/delhi-ev-policy-2-0-push-for-scrappage-get-up-to-1-lakh-incentives" target="_blank" rel="noopener noreferrer">
          Carhp
        </a>
      </p>
    </ArticleShell>
  );
}
