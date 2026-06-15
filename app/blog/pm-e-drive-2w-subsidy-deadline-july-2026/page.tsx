import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "PM E-Drive Scooter Subsidy Ends July 31 — Buy Before the Cap Runs Out",
  description:
    "The PM E-Drive demand incentive for electric two-wheelers ends July 31, 2026, but the scheme is fund-limited and could close sooner. With ~22 of 24.79 lakh e-scooter slots claimed, here's what buyers need to know.",
  alternates: altsFor("/blog/pm-e-drive-2w-subsidy-deadline-july-2026", "en"),
  openGraph: {
    title: "PM E-Drive Scooter Subsidy Ends July 31 — Buy Before the Cap Runs Out",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="pm-e-drive-2w-subsidy-deadline-july-2026">
      <p>
        If you are planning to buy an electric scooter and want the central
        government&apos;s purchase incentive, the clock is ticking. Under the
        PM E-Drive scheme, the demand subsidy for electric two-wheelers now runs
        until <strong>July 31, 2026</strong> — a four-month extension from the
        earlier March 31, 2026 cut-off. But the scheme is fund-limited, and the
        Ministry of Heavy Industries has been clear that it can close sooner if
        the money or the unit cap runs out first.
      </p>

      <h2>How much you save</h2>
      <p>
        The incentive is set at ₹2,500 per kWh of battery capacity, capped at{" "}
        <strong>₹5,000 per vehicle</strong> — half the earlier ₹5,000-per-kWh,
        ₹10,000-cap rate that applied before April 1, 2025. To qualify, an
        electric two-wheeler must carry an ex-factory price of up to ₹1.5 lakh.
        That covers most mainstream commuter scooters, so the discount shows up
        on the models the majority of buyers are actually shopping for.
      </p>

      <h2>Why the cap matters</h2>
      <p>
        PM E-Drive was launched in October 2024 with a target of supporting{" "}
        <strong>24.79 lakh</strong> electric two-wheelers out of an overall
        ₹10,900 crore outlay. By late January 2026, roughly 22.12 lakh EVs had
        already been backed under the scheme — meaning the two-wheeler allocation
        is close to being used up. Because incentives are released on a
        first-come, first-served basis, the practical deadline may arrive before
        July 31 if claims keep flowing at the current pace.
      </p>

      <h2>What buyers should do</h2>
      <p>
        If a subsidised electric scooter is on your shortlist, it makes sense to
        complete the purchase and registration sooner rather than waiting for the
        festive season. Confirm with the dealer that the model is registered under
        PM E-Drive and that the incentive is being passed on in the on-road price.
        Remember the central subsidy stacks on top of state-level benefits and
        road-tax waivers, which vary widely — our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state EV subsidy guide
        </Link>{" "}
        and the{" "}
        <Link href="/ev-subsidies-india">EV subsidies hub</Link> break down what
        you can claim where.
      </p>

      <h2>The bottom line</h2>
      <p>
        The ₹5,000 PM E-Drive incentive is real money on an affordable scooter,
        but it is neither permanent nor guaranteed up to July 31 — the fund cap
        decides. If you have settled on a model, buy before the window closes.
        Compare current options in our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link> or
        read the{" "}
        <Link href="/blog/top-5-electric-scooters-india-2026">
          top 5 electric scooters guide
        </Link>
        .
      </p>

      <h2>Sources</h2>
      <p>
        Scheme details as reported by{" "}
        <a href="https://www.autocarindia.com/bike-news/pm-e-drive-subsidy-extended-until-july-31-for-electric-two-wheelers-439316" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.evmechanica.com/pm-e-drive-subsidy-extended-until-july-31-for-electric-two-wheelers-2/" target="_blank" rel="noopener noreferrer">
          EVMechanica
        </a>{" "}
        ·{" "}
        <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">
          PM E-Drive (Ministry of Heavy Industries)
        </a>
      </p>
    </ArticleShell>
  );
}
