import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "Is there a government subsidy for EV charging stations in India?",
    a: "Yes. At the central level, the PM E-Drive scheme allocates ₹2,000 crore specifically for public charging within a larger ₹10,900 crore outlay, targeting around 72,000 chargers. In eligible cases it can cover up to 100% of project cost, including behind-the-meter infrastructure. Several states add their own capital subsidies on top.",
  },
  {
    q: "How much subsidy do states give?",
    a: "It varies. Maharashtra's EV Policy 2025–30 offers 15% of charger cost up to ₹10 lakh per DC charger; Delhi gives a 100% subsidy up to ₹6,000 per charging point for the first 30,000 chargers; Gujarat offers a 25% capital subsidy up to ₹10 lakh per station. The common pattern is roughly ₹1–10 lakh per station plus EV-tariff concessions and property-tax waivers.",
  },
  {
    q: "What does PM E-Drive cover?",
    a: "PM E-Drive's charging allocation targets around 72,000 chargers — about 22,100 for electric four-wheelers, 48,400 for electric two- and three-wheelers, and 1,800 for e-buses. In eligible cases it can fund up to 100% of project cost including behind-the-meter infrastructure. The scheme runs Oct 2024–Mar 2026 and may extend to Mar 2028.",
  },
  {
    q: "How do I apply for a charging station subsidy?",
    a: "Subsidies are administered through central and state EV portals and nodal agencies, with eligibility tied to charger type, location and standards. Because schemes, ceilings and deadlines change, always confirm the current scheme, eligibility and application route on your state EV portal before budgeting.",
  },
];

export const metadata: Metadata = {
  title: "Government Subsidy for EV Charging Stations in India (2026)",
  description:
    "What subsidy can you get for an EV charging station in India? PM E-Drive central support plus state capital subsidies in Maharashtra, Delhi and Gujarat for 2026, with eligibility and figures explained.",
  alternates: altsFor("/blog/ev-charging-station-subsidy-india", "en"),
  openGraph: {
    title: "Government Subsidy for EV Charging Stations in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-charging-station-subsidy-india">
      <p>
        Subsidies are the lever that turns a marginal charging station into a clearly profitable one,
        because every rupee of capital cost they cover is a rupee you do not have to earn back. In 2026 the
        support comes from two directions — a central scheme and a patchwork of state policies — and
        stacking them can fund a large share of your project. This guide explains what is on offer and how
        to think about it. For the wider plan, see{" "}
        <Link href="/ev-charging-station-setup-india">
          how to start an EV charging station in India
        </Link>
        .
      </p>

      <h2>The central scheme: PM E-Drive</h2>
      <p>
        PM E-Drive is the flagship central programme, with a total outlay of ₹10,900 crore running from
        October 2024 to March 2026 (and possibly extending to March 2028). Of that, ₹2,000 crore is
        earmarked specifically for public charging infrastructure, supporting a target of around 72,000
        chargers nationwide. The allocation is split roughly as:
      </p>
      <ul>
        <li>~22,100 chargers for electric four-wheelers (cars)</li>
        <li>~48,400 chargers for electric two- and three-wheelers</li>
        <li>~1,800 chargers for electric buses</li>
      </ul>
      <p>
        Crucially, in eligible cases the scheme can cover up to 100% of project cost, including the
        behind-the-meter infrastructure that is often the most expensive and frustrating part of a build.
        That can transform the economics of a station.
      </p>

      <h2>State capital subsidies</h2>
      <p>
        On top of the central support, many states run their own incentives. A few current examples
        illustrate the range:
      </p>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Subsidy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maharashtra (EV Policy 2025–30)</td>
            <td>15% of charger cost, up to ₹10 lakh per DC charger; stations every 25 km on highways</td>
          </tr>
          <tr>
            <td>Delhi</td>
            <td>100% subsidy up to ₹6,000 per charging point for the first 30,000 chargers</td>
          </tr>
          <tr>
            <td>Gujarat</td>
            <td>25% capital subsidy, up to ₹10 lakh per station</td>
          </tr>
        </tbody>
      </table>
      <p>
        The broad pattern across states is a capital subsidy of roughly ₹1–10 lakh per station, often paired
        with concessional EV electricity tariffs and property-tax waivers. These figures vary and change
        frequently, so verify the live scheme on your state EV portal before relying on them.
      </p>

      <h2>How subsidies change the business case</h2>
      <p>
        Because subsidies reduce the capital you need to recover, they directly shorten payback. A DC station
        that might otherwise pay back in three years can do so much faster once a state subsidy and PM
        E-Drive support are applied. We work through the underlying returns in{" "}
        <Link href="/blog/is-ev-charging-station-business-profitable-india">
          is the EV charging station business profitable
        </Link>
        , and the capital figures the subsidies offset are in the{" "}
        <Link href="/blog/cost-to-set-up-ev-charging-station-india">
          full setup cost breakdown
        </Link>
        .
      </p>

      <h2>Tapping into a franchise</h2>
      <p>
        If navigating multiple subsidy portals feels daunting, a charge-point-operator franchise often
        handles the paperwork and standards compliance for you as part of the package — see our guide to the{" "}
        <Link href="/blog/ev-charging-station-franchise-india">EV charging station franchise</Link>. For
        consumer-side incentives that drive demand for your chargers, the wider picture is in{" "}
        <Link href="/ev-subsidies-india">EV subsidies in India</Link>.
      </p>

      <h2>EV charging station subsidy — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
