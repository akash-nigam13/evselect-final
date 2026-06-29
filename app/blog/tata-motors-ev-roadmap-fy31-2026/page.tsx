import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tata Motors to Add 4 New EVs and 10+ Refreshes by FY31, Eyes 30% EV Share",
  description:
    "Tata Motors Passenger Vehicles has outlined an aggressive EV roadmap — four all-new electric models including Sierra.ev and an Avinya-based flagship, plus 10+ refreshes by FY31 — targeting over 30% EV penetration with 2–3x range and 3x faster charging.",
  alternates: altsFor("/blog/tata-motors-ev-roadmap-fy31-2026", "en"),
  openGraph: {
    title: "Tata Motors to Add 4 New EVs and 10+ Refreshes by FY31, Eyes 30% EV Share",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="tata-motors-ev-roadmap-fy31-2026">
      <p>
        Tata Motors, India&apos;s largest electric-car maker, has laid out its most
        detailed EV roadmap yet. Its passenger-vehicle arm plans to launch{" "}
        <strong>four all-new electric models and more than ten product refreshes by
        FY31</strong>, as it works to hold on to its leading share of a fast-growing
        market. The company has also set a target of taking EVs to{" "}
        <strong>more than 30% of its own passenger-vehicle sales</strong> by the end
        of the decade.
      </p>

      <h2>What&apos;s coming</h2>
      <p>
        The four new nameplates include the <strong>Sierra.ev</strong> — the boxy
        mid-size SUV set to launch on June 30, 2026 — and one model based on the
        striking <strong>Avinya</strong> concept, Tata&apos;s first vehicle on a
        dedicated &quot;pure EV&quot; (Gen-3) architecture. Two further EVs round out
        the plan. These sit on top of Tata&apos;s existing electric line-up: the
        Tiago.ev, Punch.ev, Nexon.ev, Curvv.ev, Harrier.ev and the fleet-focused
        Xpres-T, most of which will receive updates over the period. You can see the
        current range in our{" "}
        <Link href="/blog/tata-electric-cars">Tata electric cars guide</Link>.
      </p>

      <h2>Better batteries, longer range, faster charging</h2>
      <p>
        Beyond new models, the headline promise is on the technology. Tata says it is
        working to increase the <strong>range of its EVs by two to three times</strong>{" "}
        and make <strong>charging up to three times faster</strong>, while lifting
        battery energy density by roughly 20–23%. In plain terms, that points to
        future Tata EVs that travel much further on a charge and spend far less time
        plugged in — the two pain points that still hold back many first-time buyers.
        It is a direct response to sharpening competition from Mahindra, JSW MG and
        the incoming wave of new entrants in our{" "}
        <Link href="/blog/upcoming-electric-cars-india-2026">upcoming EVs roundup</Link>.
      </p>

      <h2>Why it matters for buyers</h2>
      <p>
        For anyone weighing an EV purchase, a roadmap like this cuts both ways. The
        upside is clear: more choice, longer ranges and faster charging across price
        bands over the next few years, plus the reassurance that India&apos;s biggest
        EV brand is doubling down rather than easing off. The trade-off is that
        today&apos;s models will be superseded relatively quickly, which can weigh on
        resale value and tempt buyers to wait. As always, the right call depends on
        your needs now versus what a year or two of patience might buy. If you are
        comparing options, our{" "}
        <Link href="/catalog/electric-cars">electric-car catalogue</Link> and{" "}
        <Link href="/ev-selection-tool">EV selection tool</Link> are the quickest way
        to see where each Tata model stands against rivals.
      </p>

      <h2>Sources</h2>
      <p>
        Roadmap details as reported by{" "}
        <a href="https://www.business-standard.com/companies/news/tata-motors-passenger-vehicles-plans-4-new-evs-over-10-refreshes-by-fy31-126062800177_1.html" target="_blank" rel="noopener noreferrer">
          Business Standard
        </a>{" "}
        ·{" "}
        <a href="https://www.tribuneindia.com/news/business/tata-motors-passenger-vehicles-plans-to-boost-ev-drive-with-4-new-models10-refreshes-by-fy31/" target="_blank" rel="noopener noreferrer">
          The Tribune
        </a>
      </p>
    </ArticleShell>
  );
}
