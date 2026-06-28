import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is there a central government subsidy on electric cars in India?",
    a: "No. There is no central purchase subsidy for private electric cars in India in 2026. PM E-Drive — the main central scheme — excludes private e-cars, unlike electric two- and three-wheelers, which do get a direct incentive.",
  },
  {
    q: "So how do electric cars save buyers money centrally?",
    a: "Through tax, not a cash subsidy. EVs attract just 5% GST with no cess, versus much higher GST plus cess on petrol and diesel cars. That GST gap is the single biggest nationwide advantage for e-car buyers and applies everywhere in India.",
  },
  {
    q: "Which states give the best electric car benefits?",
    a: "Delhi and Maharashtra are the strongest. Delhi waives road tax and registration (historically for cars up to about ₹30 lakh), and Maharashtra offers the same waivers plus zero toll on key expressways. These state benefits — not a central subsidy — are where real car relief sits.",
  },
  {
    q: "Does Gujarat still give an electric car subsidy?",
    a: "No. Gujarat's ₹1.5 lakh car subsidy and its 1% tax concession have lapsed (expired 31 March 2026). There is no active Gujarat electric car purchase benefit now, so do not factor it into your budget.",
  },
  {
    q: "Is Delhi's ₹1 lakh electric car incentive real?",
    a: "It is only a proposal. Delhi's draft EV Policy 2.0 proposes extending the road-tax waiver to 2030 and a ₹1 lakh incentive for the first 1 lakh e-car buyers — but it is a draft and has not been notified as law as of mid-2026. Treat it as a possibility, not a current entitlement.",
  },
];

export const metadata: Metadata = {
  title: "Is There a Subsidy on Electric Cars in India? (2026 Reality)",
  description:
    "Is there a government subsidy on electric cars in India in 2026? The honest answer: no central purchase subsidy for private e-cars, but 5% GST nationwide plus state road-tax and registration waivers. The central-vs-state distinction, explained clearly.",
  alternates: altsFor("/blog/ev-subsidy-on-electric-cars-india", "en"),
  openGraph: {
    title: "Is There a Subsidy on Electric Cars in India? (2026 Reality)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-subsidy-on-electric-cars-india">
      <p>
        It is the question every electric-car shopper asks, and the answer is not the one most expect.
        In 2026 there is <strong>no central government purchase subsidy on private electric cars in
        India</strong>. The famous{" "}
        <Link href="/blog/pm-e-drive-scheme-explained-india">PM E-Drive scheme</Link> pays incentives to
        scooters, rickshaws and buses — but it deliberately <strong>excludes private cars</strong>. That
        does not mean e-cars get no help; it means the help comes in a different, less obvious form. This
        guide draws the central-versus-state line clearly so you know exactly what to expect. For the
        full incentive map, see our{" "}
        <Link href="/ev-subsidies-india">EV subsidies &amp; incentives guide</Link>.
      </p>

      <h2>The headline: no central cash subsidy for e-cars</h2>
      <p>
        Unlike an electric scooter — which gets a direct{" "}
        <Link href="/blog/electric-scooter-subsidy-india">PM E-Drive incentive at the dealer</Link> — a
        private electric car receives <strong>no central purchase subsidy</strong>. There is no e-voucher
        knocked off your invoice, no per-kWh cheque, nothing. If a salesperson tells you the &quot;government
        subsidy&quot; on an e-car, ask them to point to the scheme — because PM E-Drive is not it.
      </p>

      <h2>What car buyers DO get centrally: the 5% GST advantage</h2>
      <p>
        The real nationwide benefit is in the tax structure. Electric cars attract just{" "}
        <strong>5% GST with no cess</strong>. A comparable petrol or diesel car carries a much higher GST
        rate <em>plus</em> a compensation cess that can push the effective tax burden far higher. That GST
        gap is the <strong>single biggest nationwide advantage</strong> for e-car buyers, and it applies in
        every state without any application or paperwork — it is simply built into the price.
      </p>

      <h2>Central vs state: where the relief actually lives</h2>
      <p>
        Here is the distinction that matters most. <strong>Centrally</strong>, your only e-car benefit is
        the lower 5% GST. <strong>At the state level</strong> is where you find road-tax waivers,
        registration waivers and the occasional cash incentive. So the size of your total saving depends
        heavily on where you register the car.
      </p>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>What e-car buyers get</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Central (nationwide)</td>
            <td>5% GST with no cess — no purchase subsidy</td>
          </tr>
          <tr>
            <td>State (varies)</td>
            <td>Road-tax and registration waivers; occasional cash incentives where notified</td>
          </tr>
        </tbody>
      </table>

      <h2>The state benefits worth knowing in 2026</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Electric car benefit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delhi</td>
            <td>100% road-tax + registration waiver (historically cars ≤ ₹30 lakh)</td>
            <td>Active waiver; draft EV Policy 2.0 (below) not yet notified</td>
          </tr>
          <tr>
            <td>Delhi — draft only</td>
            <td>Proposes waiver to 2030 + ₹1 lakh incentive for first 1 lakh e-car buyers</td>
            <td>DRAFT — not notified as law</td>
          </tr>
          <tr>
            <td>Maharashtra</td>
            <td>100% road-tax + registration waiver + zero toll on key expressways</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Gujarat</td>
            <td>Old ₹1.5 lakh car subsidy + 1% tax concession</td>
            <td>LAPSED — expired 31 March 2026, no active benefit</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two warnings on that table. First, <strong>Delhi&apos;s EV Policy 2.0 — including the ₹1 lakh
        incentive and the waiver extension to 2030 — is a draft</strong> and has not been notified as law
        as of mid-2026. Do not buy on the assumption that ₹1 lakh is coming. Second,{" "}
        <strong>Gujarat&apos;s ₹1.5 lakh car subsidy and 1% tax concession have lapsed</strong> — they
        expired on 31 March 2026, so there is <strong>no active Gujarat e-car purchase benefit now</strong>.
        Maharashtra and Delhi&apos;s existing road-tax and registration waivers are the dependable ones.
        Our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state road-tax and subsidy guide
        </Link>{" "}
        tracks the live position.
      </p>

      <h2>What this means for your on-road price</h2>
      <p>
        Add it up and the picture is clear: an electric car&apos;s discount versus a petrol car comes from
        <strong> lower 5% GST everywhere</strong>, and then — in states like Delhi and Maharashtra — from{" "}
        <strong>waived road tax and registration</strong>, which on a ₹15–20 lakh car can be worth a lakh or
        more on the on-road figure. There is no central cheque to chase; the savings are baked into the
        price and the registration. Even though there is no purchase subsidy, you usually do not need to{" "}
        <Link href="/blog/how-to-claim-ev-subsidy-india">file a claim</Link> for the car itself — the GST
        and any state waiver apply automatically at purchase and registration.
      </p>

      <h2>The bottom line</h2>
      <p>
        If you came here hoping for a central cash subsidy on your e-car, the honest answer is that it does
        not exist in 2026. But the combination of 5% GST and state tax waivers still makes an electric car
        meaningfully cheaper to buy and run than its petrol equivalent in the right state. Compare your
        options in the <Link href="/catalog/electric-cars">electric car catalog</Link>, then estimate your
        monthly outgo with the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>. And because state policies
        — especially Delhi&apos;s draft and any revived Gujarat scheme — can change, always confirm the
        current rules on your state transport department portal and the official PM E-Drive portal before
        you buy.
      </p>

      <h2>Frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
