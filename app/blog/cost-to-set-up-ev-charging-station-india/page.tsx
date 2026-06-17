import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "How much does it cost to set up an EV charging station in India?",
    a: "It depends entirely on the type of charger. A small AC station with two or three slow chargers can be opened for roughly ₹5–12 lakh, while a DC fast-charging station with one or two 30–60 kW units — including civil work, a transformer and approvals — typically runs ₹12–30 lakh. A mixed 1 AC + 1 DC site lands around ₹9–18 lakh. Entry-level single AC setups can start near ₹1 lakh.",
  },
  {
    q: "What is the cost of a DC fast charger in India?",
    a: "A 50 kW DC fast charger unit alone costs roughly ₹7–12 lakh. Higher-power 120–150 kW units cost materially more. On top of the hardware you must budget for a three-phase connection, transformer and cabling, which adds about ₹3–6 lakh.",
  },
  {
    q: "How much does an AC charger cost for a charging station?",
    a: "AC chargers of 3.3 kW or 7.4 kW typically cost ₹50,000–₹1,00,000 per unit. Because the electrical load and civil work are modest, AC stations are by far the cheapest way to enter the business.",
  },
  {
    q: "Can government subsidies reduce the setup cost?",
    a: "Yes. Central support under PM E-Drive and state capital subsidies can cover a meaningful share of project cost. See our guide to the government subsidy for EV charging stations for current schemes — and always verify the live figures on your state EV portal.",
  },
];

export const metadata: Metadata = {
  title: "EV Charging Station Setup Cost in India (2026): Full Breakdown",
  description:
    "What does it cost to set up an EV charging station in India in 2026? A full capex breakdown — AC vs DC charger prices, transformer and cabling, civil work and approvals — with an at-a-glance cost table.",
  alternates: altsFor("/blog/cost-to-set-up-ev-charging-station-india", "en"),
  openGraph: {
    title: "EV Charging Station Setup Cost in India (2026): Full Breakdown",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="cost-to-set-up-ev-charging-station-india">
      <p>
        The single biggest question anyone asks before opening a charging point is simple: what will it
        cost to set up? The honest answer is a range, because the capex is driven almost entirely by the
        kind of charger you install and the electrical infrastructure it needs. This breakdown puts real
        2026 rupee figures against every line item so you can size your own budget. For the wider picture
        — site selection, operations and how the business fits together — start with{" "}
        <Link href="/ev-charging-station-setup-india">
          our full guide to setting up an EV charging station in India
        </Link>
        .
      </p>

      <h2>At-a-glance setup cost</h2>
      <table>
        <thead>
          <tr>
            <th>Station type</th>
            <th>Indicative capex</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single AC charger (entry-level)</td>
            <td>From ~₹1 lakh</td>
          </tr>
          <tr>
            <td>Small AC station (2–3 units)</td>
            <td>₹5–12 lakh</td>
          </tr>
          <tr>
            <td>50 kW DC fast charger (unit only)</td>
            <td>₹7–12 lakh</td>
          </tr>
          <tr>
            <td>1–2 DC chargers (30–60 kW) + civil + transformer + approvals</td>
            <td>₹12–30 lakh</td>
          </tr>
          <tr>
            <td>Mixed 1 AC + 1 DC station</td>
            <td>₹9–18 lakh</td>
          </tr>
          <tr>
            <td>Large multi-bay / highway station</td>
            <td>₹15 lakh – ₹2 crore</td>
          </tr>
        </tbody>
      </table>
      <p>
        These figures are indicative and vary by city, vendor, land cost and load. Always confirm hardware
        quotes and connection charges with your DISCOM and state portal before committing.
      </p>

      <h2>The charger hardware itself</h2>
      <p>
        Hardware is usually the largest single line. AC chargers rated 3.3 kW or 7.4 kW cost roughly
        ₹50,000–₹1,00,000 per unit and are best suited to destination charging where vehicles park for an
        hour or more. DC fast chargers are an order of magnitude dearer: a 50 kW unit runs ₹7–12 lakh, and
        premium 120–150 kW machines cost materially more again. Whether you should lean AC, DC or both is a
        decision in itself — we cover it in{" "}
        <Link href="/blog/ev-charging-station-equipment-ac-dc-india">
          AC vs DC chargers: which to install for your EV station
        </Link>
        , and the connector standards that affect compatibility are explained in the consumer guide to{" "}
        <Link href="/blog/ev-charger-types-connectors-india">EV charger types and connectors</Link>.
      </p>

      <h2>Electrical infrastructure</h2>
      <p>
        DC charging draws serious power, so most fast-charging sites need a three-phase connection, and
        often a dedicated transformer plus heavy cabling. Budget around ₹3–6 lakh for this layer on a DC
        site. AC-only stations usually run on an existing or lightly upgraded connection, which is a large
        part of why they are so much cheaper to open. The load sanction and metering also feed into the
        approvals you need before energising — covered in our guide to the{" "}
        <Link href="/blog/ev-charging-station-licence-registration-india">
          licences and approvals for an EV charging station
        </Link>
        .
      </p>

      <h2>Civil work, signage and software</h2>
      <p>
        Beyond the box on the wall, a public station needs a prepared bay, foundation and weatherproofing
        for the unit, lighting, signage, and often a canopy. You will also pay for the network software and
        payment integration that lets customers find, use and pay at your charger. These soft costs are
        modest on an AC site but add up quickly on a multi-bay DC installation, which is why large highway
        stations can reach well into crores.
      </p>

      <h2>What it all means for your budget</h2>
      <p>
        If you want to test the water with minimal risk, a small AC station for ₹5–12 lakh is the natural
        entry point. If you are targeting cars on a busy corridor, a DC station at ₹12–30 lakh is the
        serious play — and the one most likely to earn its money back quickly. Before you commit, it is
        worth pressure-testing the returns: read{" "}
        <Link href="/blog/is-ev-charging-station-business-profitable-india">
          whether the EV charging station business is actually profitable
        </Link>
        , and check what you can claw back through the{" "}
        <Link href="/blog/ev-charging-station-subsidy-india">
          government subsidy for EV charging stations
        </Link>{" "}
        and broader{" "}
        <Link href="/ev-subsidies-india">EV subsidies in India</Link>. As always, treat every figure here
        as a planning range and verify the live numbers with your DISCOM and state EV portal.
      </p>

      <h2>EV charging station setup cost — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
