import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "Should I install AC or DC chargers at my EV station?",
    a: "It depends on the location and vehicles you want to serve. AC chargers (typically 3.3 or 7.4 kW) suit destinations where vehicles park for an hour or more — offices, malls, apartments — and are far cheaper. DC fast chargers (commonly 30–60 kW, premium units 120–150 kW) suit highways and high-traffic urban sites where drivers want to charge and go. Many commercial stations install both.",
  },
  {
    q: "Which connectors do I need for cars in India?",
    a: "For four-wheelers the standard is Type 2 for AC charging and CCS2 for DC fast charging — virtually all modern Indian electric cars use CCS2. CCS2 supports a wide power band from 50 kW up to 350 kW, so it covers everything from a modest fast charger to a high-power one.",
  },
  {
    q: "What connector do two- and three-wheelers use?",
    a: "Light EVs increasingly use LECCS (informally 'Type 7'), a BIS-approved standard from 2023 supporting up to about 7 kW AC and around 10–12 kW DC. The older Bharat AC-001 (3×3.3 kW) and Bharat DC-001 (~15 kW) standards still exist but are now considered legacy.",
  },
  {
    q: "Are CHAdeMO and GB/T still relevant?",
    a: "CHAdeMO is effectively phased out for new installations in India. GB/T is mainly seen on electric buses. For new car-focused stations you should standardise on Type 2 plus CCS2; for buses, high-power CCS2 or legacy GB/T applies.",
  },
];

export const metadata: Metadata = {
  title: "AC vs DC Chargers: Which to Install for Your EV Station (India 2026)",
  description:
    "Choosing equipment for an EV charging station in India? AC vs DC explained, the connector standards that matter (Type 2, CCS2, LECCS, Bharat AC/DC), power levels, and which chargers to install for cars versus two-wheelers in 2026.",
  alternates: altsFor("/blog/ev-charging-station-equipment-ac-dc-india", "en"),
  openGraph: {
    title: "AC vs DC Chargers: Which to Install for Your EV Station (India 2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-charging-station-equipment-ac-dc-india">
      <p>
        The most consequential decision when equipping a charging station is also the most basic: AC or DC,
        and with which connectors. Get it right and your station serves the vehicles that actually pass by;
        get it wrong and you have an expensive box few people can use. This guide explains the two charging
        types, the connector standards that matter in India, and how to match equipment to the vehicles you
        want to serve. For the full business context, start with{" "}
        <Link href="/ev-charging-station-setup-india">
          how to start an EV charging station in India
        </Link>
        .
      </p>

      <h2>AC vs DC: the fundamental difference</h2>
      <p>
        AC charging is slower and cheaper. AC chargers in India are typically rated 3.3 kW or 7.4 kW, and
        because the vehicle's onboard charger does the conversion work, the station-side hardware is simple
        and inexpensive. AC suits destinations where vehicles dwell for an hour or more — offices, malls,
        apartments, hotels.
      </p>
      <p>
        DC fast charging is faster and far costlier. The charger itself converts power and feeds it straight
        to the battery, so it can deliver high power: public DC units are commonly 30–60 kW, with premium
        machines at 120–150 kW. DC suits highways, transit corridors and busy urban sites where drivers want
        to top up quickly and leave. The economics of each — and the much higher capex of DC — are covered in
        the{" "}
        <Link href="/blog/cost-to-set-up-ev-charging-station-india">
          full setup cost breakdown
        </Link>{" "}
        and in{" "}
        <Link href="/blog/is-ev-charging-station-business-profitable-india">
          is the charging business profitable
        </Link>
        .
      </p>

      <h2>Connectors that matter in India</h2>
      <table>
        <thead>
          <tr>
            <th>Connector</th>
            <th>Use / power</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type 2 (AC)</td>
            <td>Standard AC for cars — typically 3.3/7.4 kW</td>
          </tr>
          <tr>
            <td>CCS2 (DC)</td>
            <td>Standard DC fast charging for cars; supports 50–350 kW</td>
          </tr>
          <tr>
            <td>LECCS ("Type 7")</td>
            <td>Light EVs (2W/3W); BIS-approved 2023; up to 7 kW AC, ~10–12 kW DC</td>
          </tr>
          <tr>
            <td>Bharat AC-001 / DC-001</td>
            <td>Legacy — 3×3.3 kW AC for 2W/3W and ~15 kW DC</td>
          </tr>
          <tr>
            <td>CHAdeMO / GB/T</td>
            <td>CHAdeMO phased out for new installs; GB/T mainly e-buses</td>
          </tr>
        </tbody>
      </table>
      <p>
        For cars, the combination to remember is Type 2 for AC and CCS2 for DC — virtually all modern Indian
        EVs use CCS2, and it scales from 50 kW up to 350 kW. The driver-side view of these standards is in
        our consumer guide to{" "}
        <Link href="/blog/ev-charger-types-connectors-india">EV charger types and connectors</Link>.
      </p>

      <h2>Matching equipment to vehicles</h2>
      <p>The clean way to decide is to start from who you are serving:</p>
      <ul>
        <li><strong>Cars</strong> → Type 2 (AC) and CCS2 (DC). This covers the modern four-wheeler fleet.</li>
        <li><strong>Two- and three-wheelers / light EVs</strong> → LECCS, or legacy Bharat AC where still relevant.</li>
        <li><strong>Buses</strong> → high-power CCS2, or legacy GB/T where applicable.</li>
      </ul>
      <p>
        A typical commercial station on a mixed-traffic site installs both an AC option and a CCS2 DC fast
        charger so it can serve dwell-time and quick-charge customers alike.
      </p>

      <h2>Don't forget compliance</h2>
      <p>
        Whatever you choose, the chargers must be BIS-certified to be installed legally — one of several
        requirements covered in the guide to{" "}
        <Link href="/blog/ev-charging-station-licence-registration-india">
          licences and approvals for an EV charging station
        </Link>
        . Equipment choice also affects which subsidies apply, since several schemes are tied to charger type
        and standards — see the{" "}
        <Link href="/blog/ev-charging-station-subsidy-india">
          government subsidy for EV charging stations
        </Link>
        . Power levels, prices and standards evolve, so confirm current BIS requirements and approved
        equipment with your DISCOM and state EV portal before ordering.
      </p>

      <h2>AC vs DC charging equipment — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
