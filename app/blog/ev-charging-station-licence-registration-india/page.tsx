import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "Do you need a licence to open an EV charging station in India?",
    a: "No distribution licence is required to sell EV charging. Under the Electricity Act 2003, public EV charging is de-licensed — it is treated as a service, not as distribution of electricity. You do, however, still need several approvals: a DISCOM electricity connection and load sanction, an Electrical Inspector sign-off, fire safety clearance above certain load thresholds, BIS-certified chargers and local building permissions.",
  },
  {
    q: "What approvals do I actually need?",
    a: "The core list is: a DISCOM connection with metering and sanctioned load; a connection NOC (an RWA NOC if you are in a housing society); Electrical Inspector approval before energising; a Fire Safety NOC above the relevant load threshold; BIS-certified charging equipment; local building and land/lease permissions; and GST registration, since charging is a taxable service at 18%.",
  },
  {
    q: "How long does the electricity connection take?",
    a: "Connection timelines vary by DISCOM and location. Indicatively, sanction can take around 7 days in metros, 15 days in municipal areas and 30 days in rural areas. These are guideline figures — confirm the current timeline with your local DISCOM.",
  },
  {
    q: "Is GST applicable on EV charging?",
    a: "Yes. EV charging is treated as a service and attracts 18% GST. You will need GST registration to operate a public charging business.",
  },
];

export const metadata: Metadata = {
  title: "Licence & Approvals for an EV Charging Station in India (2026)",
  description:
    "Do you need a licence for an EV charging station in India? Public charging is de-licensed under the Electricity Act 2003 — but you still need DISCOM load sanction, NOCs, electrical and fire sign-offs, BIS chargers and GST. The full 2026 checklist.",
  alternates: altsFor("/blog/ev-charging-station-licence-registration-india", "en"),
  openGraph: {
    title: "Licence & Approvals for an EV Charging Station in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-charging-station-licence-registration-india">
      <p>
        One of the most reassuring facts for anyone entering this business is that you do not need a special
        licence to sell EV charging in India. The catch is that "no licence" does not mean "no paperwork" —
        a handful of approvals stand between you and a legally energised, customer-ready station. This guide
        sets out exactly what those are, in the order you will encounter them. For the bigger picture of
        building and running the site, see{" "}
        <Link href="/ev-charging-station-setup-india">
          our full guide to setting up an EV charging station in India
        </Link>
        .
      </p>

      <h2>Why public charging is de-licensed</h2>
      <p>
        Under the Electricity Act 2003, the act of selling EV charging is treated as a <em>service</em>, not
        as the distribution of electricity. That means you do not require a distribution licence to operate
        a public charging station. The framework is reinforced by the Ministry of Power's "Guidelines for
        Installation and Operation of EV Charging Infrastructure, 2024", with the Bureau of Energy
        Efficiency (BEE) acting as the Central Nodal Authority. The intent is deliberate: keep the barrier
        to entry low so that charging infrastructure spreads quickly.
      </p>

      <h2>The approvals you do need</h2>
      <p>De-licensed does not mean unregulated. To open and energise a station you will need:</p>
      <ul>
        <li>
          <strong>DISCOM electricity connection and load sanction</strong>, with appropriate metering for
          the load your chargers draw.
        </li>
        <li>
          <strong>Connection NOC</strong> — and if you are installing in a housing society, an RWA NOC from
          the resident welfare association.
        </li>
        <li>
          <strong>Electrical Inspector sign-off</strong> before the installation can be energised — a safety
          inspection of your electrical work.
        </li>
        <li>
          <strong>Fire Safety NOC</strong>, required above certain load thresholds.
        </li>
        <li>
          <strong>BIS-certified chargers</strong> — the equipment itself must meet the relevant Indian
          standards.
        </li>
        <li>
          <strong>Local building permissions</strong> and a clear <strong>land/lease</strong> title or
          agreement for the site.
        </li>
        <li>
          <strong>GST registration</strong>, since charging is a taxable service at 18%.
        </li>
      </ul>

      <h2>Connection timelines</h2>
      <p>
        Getting the electricity connection sanctioned is usually the rate-limiting step. As an indicative
        guide, expect roughly 7 days in metros, 15 days in municipal areas and 30 days in rural areas,
        though this varies considerably between DISCOMs. Applying early and submitting complete documentation
        is the single best way to avoid delays. Confirm the live timeline and document list on your state EV
        portal or with your local DISCOM.
      </p>

      <h2>Choosing compliant equipment</h2>
      <p>
        The BIS-certification requirement means your charger selection is also a compliance decision. The
        connector standards and power levels you pick affect which vehicles you can serve and which
        certifications apply — we explain the options in{" "}
        <Link href="/blog/ev-charging-station-equipment-ac-dc-india">
          AC vs DC chargers: which to install for your EV station
        </Link>
        , and the connector landscape from the driver's side in{" "}
        <Link href="/blog/ev-charger-types-connectors-india">EV charger types and connectors</Link>.
      </p>

      <h2>Where licensing fits in your plan</h2>
      <p>
        Because approvals are straightforward, they rarely make or break the business case — cost and
        utilisation do. Pair this checklist with the{" "}
        <Link href="/blog/cost-to-set-up-ev-charging-station-india">
          full setup cost breakdown
        </Link>{" "}
        and a hard look at{" "}
        <Link href="/blog/is-ev-charging-station-business-profitable-india">
          whether the charging business is profitable
        </Link>
        . And before you finalise capex, check what the{" "}
        <Link href="/blog/ev-charging-station-subsidy-india">
          government subsidy for EV charging stations
        </Link>{" "}
        can cover. Treat the timelines and thresholds here as guidance and verify the current rules with
        your DISCOM and state portal.
      </p>

      <h2>EV charging station licence & approvals — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
