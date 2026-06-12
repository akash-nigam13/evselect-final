import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "JSW MG Becomes First Carmaker to Install 1,000 Community EV Chargers",
  description:
    "JSW MG Motor India says it is the first carmaker in the country to install 1,000 community EV chargers across 470+ sites, and has confirmed three new EVs for 2026 including a plug-in hybrid.",
  alternates: altsFor("/blog/jsw-mg-1000-community-ev-chargers-2026", "en"),
  openGraph: {
    title: "JSW MG Becomes First Carmaker to Install 1,000 Community EV Chargers",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="jsw-mg-1000-community-ev-chargers-2026">
      <p>
        <Link href="/brand/mg">JSW MG Motor India</Link> says it has become the
        first carmaker in the country to install <strong>1,000 community EV
        chargers</strong>, a milestone announced around World Environment Day. The
        chargers, set up under the company&apos;s MG Charge programme, are spread
        across more than 470 sites.
      </p>

      <h2>What &quot;community charging&quot; actually means</h2>
      <p>
        Rather than building highway fast-charging corridors, MG has focused on
        installing chargers inside the places people park overnight or for long
        stretches — residential societies, condominiums, hospitals, campuses,
        hotels and industrial parks. The idea is to tackle the everyday version of
        range anxiety: not whether you can drive 400 km, but whether you can
        reliably top up where you live and work. For anyone in a flat, this is the
        single biggest charging hurdle — something we cover in detail in our guide
        to{" "}
        <Link href="/blog/ev-charging-apartments-housing-societies-india">
          EV charging in apartments and housing societies
        </Link>
        .
      </p>

      <h2>The bigger numbers</h2>
      <p>
        Alongside the charger count, MG said its EVs have now covered more than
        290 crore &quot;green kilometres&quot; on Indian roads, which it estimates
        as roughly 4.17 lakh metric tonnes of CO2 avoided. Its Halol plant in
        Gujarat runs on more than 78% renewable energy. These are
        company-reported figures rather than independently audited ones, so treat
        the environmental claims as directional, but the charger milestone itself
        is a concrete, verifiable build-out.
      </p>

      <h2>Three new EVs — and a first PHEV</h2>
      <p>
        MG also confirmed an aggressive product plan for 2026: three new
        electric and new-energy vehicles, including its first plug-in hybrid for
        India. A PHEV is notable because it sidesteps charging worries entirely for
        buyers not yet ready to go fully electric — a hedge several carmakers are
        now making as the market broadens.
      </p>

      <h2>Why it matters for buyers</h2>
      <p>
        Charging access, not sticker price, is often the real reason buyers hesitate
        on an EV. A carmaker funding charging where customers actually live lowers
        that barrier directly — though it is worth remembering these are MG-branded
        installations, most useful to MG owners. If you are weighing an EV, see how
        the public picture is shaping up in our{" "}
        <Link href="/blog/india-ev-charging-network-2026">
          look at India&apos;s charging network
        </Link>
        , and if you want a charger at home, start with our{" "}
        <Link href="/ev-charging-station-setup-india">
          EV charging setup guide
        </Link>
        .
      </p>

      <h2>Sources</h2>
      <p>
        As reported by{" "}
        <a href="https://www.autoguideindia.com/awards-milestones/jsw-mg-motor-india-installs-1000-community-ev-chargers/" target="_blank" rel="noopener noreferrer">
          Autoguide India
        </a>{" "}
        ·{" "}
        <a href="https://gaadiwaadi.com/jsw-mg-installs-1000-ev-chargers-confirms-3-new-models-for-2026-including-a-phev/" target="_blank" rel="noopener noreferrer">
          GaadiWaadi
        </a>
      </p>
    </ArticleShell>
  );
}
