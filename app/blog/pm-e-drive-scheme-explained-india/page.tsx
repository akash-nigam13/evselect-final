import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the PM E-Drive scheme?",
    a: "PM E-Drive (PM Electric Drive Revolution in Innovative Vehicle Enhancement) is India's ₹10,900-crore scheme to accelerate electric mobility, launched on 1 October 2024 as the successor to FAME-II. It funds incentives for electric two- and three-wheelers, e-buses, e-trucks and e-ambulances, plus public charging and testing infrastructure.",
  },
  {
    q: "Does PM E-Drive give a subsidy on electric cars?",
    a: "No. PM E-Drive does not provide a direct purchase subsidy to private electric cars. It covers e-2W, e-3W, e-buses, e-trucks, e-ambulances and public charging. Private car buyers instead benefit from 5% GST and state-level road-tax and registration waivers.",
  },
  {
    q: "When does PM E-Drive end?",
    a: "The scheme was extended in August 2025 to run four years, to 31 March 2028. But terminal dates differ by vehicle type: the electric two-wheeler incentive ends on 31 July 2026, while electric three-wheeler support runs to 31 March 2028.",
  },
  {
    q: "How is the PM E-Drive incentive claimed?",
    a: "Through an Aadhaar-authenticated e-voucher at the point of sale. The dealer runs your Aadhaar e-KYC, the portal generates the e-voucher, you sign it and the dealer counter-signs and uploads it — one vehicle per Aadhaar. The incentive is deducted upfront from your invoice, not refunded later.",
  },
  {
    q: "How many EVs have been sold under PM E-Drive?",
    a: "By January 2026, around 22 lakh EVs had been sold under the scheme, against a two-wheeler target of about 24.79 lakh — showing strong uptake, especially in the two-wheeler segment.",
  },
];

export const metadata: Metadata = {
  title: "PM E-Drive Scheme Explained (2026): Coverage, Benefits & Deadlines",
  description:
    "A clear 2026 explainer of India's PM E-Drive scheme — the ₹10,900-crore successor to FAME-II. What it covers (e-2W, e-3W, e-buses, charging), why private cars are excluded, the Aadhaar e-voucher process, targets, and the deadlines that differ by vehicle type.",
  alternates: altsFor("/blog/pm-e-drive-scheme-explained-india", "en"),
  openGraph: {
    title: "PM E-Drive Scheme Explained (2026): Coverage, Benefits & Deadlines",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="pm-e-drive-scheme-explained-india">
      <p>
        If you have shopped for an electric two- or three-wheeler in India recently, you have already
        brushed up against PM E-Drive — it is the scheme behind the &quot;subsidy&quot; quietly knocked
        off your invoice. This explainer covers what PM E-Drive actually is, what it pays for, who it
        leaves out, and the deadlines that matter most in 2026. For the practical how-to, pair it with
        our <Link href="/blog/how-to-claim-ev-subsidy-india">step-by-step claim guide</Link>, and for the
        complete incentive picture see the{" "}
        <Link href="/ev-subsidies-india">EV subsidies &amp; incentives guide</Link>.
      </p>

      <h2>What PM E-Drive is</h2>
      <p>
        PM E-Drive stands for <strong>PM Electric Drive Revolution in Innovative Vehicle Enhancement</strong>.
        It is a <strong>₹10,900 crore</strong> central scheme launched on <strong>1 October 2024</strong> as
        the successor to FAME-II. Its purpose is to push India&apos;s shift to electric mobility across the
        segments where central money makes the biggest difference — mass-market two- and three-wheelers,
        public transport, and charging infrastructure.
      </p>

      <div
        style={{
          borderLeft: "4px solid #F472B6",
          padding: "0.75rem 1rem",
          margin: "1.25rem 0",
          background: "rgba(244,114,182,0.08)",
        }}
      >
        <strong>Deadlines differ by vehicle type.</strong> The scheme was extended in August 2025 to run
        four years (to 31 March 2028), but the terminal dates are not the same for everyone. The{" "}
        <strong>electric two-wheeler incentive ends on 31 July 2026</strong> — a very near-term date —
        while <strong>electric three-wheeler support runs to 31 March 2028</strong>. Always confirm the
        live deadline for your vehicle type on the official PM E-Drive portal.
      </div>

      <h2>What it covers — and what it does not</h2>
      <p>
        PM E-Drive is deliberately broad on the segments that move the most vehicles, and deliberately
        silent on private cars. It covers:
      </p>
      <ul>
        <li>Electric two-wheelers (e-2W)</li>
        <li>Electric three-wheelers (e-3W)</li>
        <li>Electric buses (e-buses)</li>
        <li>Electric trucks (e-trucks)</li>
        <li>Electric ambulances (e-ambulances)</li>
        <li>Public charging infrastructure</li>
      </ul>
      <p>
        What it does <strong>not</strong> do is give a direct purchase subsidy to{" "}
        <strong>private electric cars</strong>. This is the single most misunderstood point about the
        scheme. If you are buying an e-car, PM E-Drive is not where your savings come from — those come
        from 5% GST and state road-tax waivers, which we unpack in{" "}
        <Link href="/blog/ev-subsidy-on-electric-cars-india">
          is there a subsidy on electric cars in India
        </Link>
        .
      </p>

      <h2>The numbers: targets and allocations</h2>
      <table>
        <thead>
          <tr>
            <th>Segment / item</th>
            <th>Target / allocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electric two-wheelers</td>
            <td>~24.79 lakh units</td>
          </tr>
          <tr>
            <td>Electric three-wheelers</td>
            <td>~3.16 lakh units</td>
          </tr>
          <tr>
            <td>Electric buses</td>
            <td>14,028 buses (₹4,391 crore)</td>
          </tr>
          <tr>
            <td>Public charging</td>
            <td>₹2,000 crore for ~72,300 public chargers</td>
          </tr>
          <tr>
            <td>Testing infrastructure</td>
            <td>₹780 crore for testing-agency upgrades</td>
          </tr>
          <tr>
            <td>Total outlay</td>
            <td>₹10,900 crore</td>
          </tr>
        </tbody>
      </table>

      <h2>How the incentive reaches you: the e-voucher</h2>
      <p>
        PM E-Drive uses an <strong>Aadhaar-authenticated e-voucher at the point of sale</strong>. The
        dealer confirms your model is on the portal, runs your Aadhaar e-KYC with face authentication,
        and the portal generates an e-voucher you sign by SMS link; the dealer counter-signs and uploads
        it. It is <strong>one vehicle per Aadhaar</strong>, and the incentive is deducted upfront from
        your invoice rather than paid back later. The full sequence is in our{" "}
        <Link href="/blog/how-to-claim-ev-subsidy-india">claim guide</Link>.
      </p>

      <h2>How much you actually get</h2>
      <p>
        The biggest beneficiary in volume terms is the electric scooter. From 1 April 2025 the two-wheeler
        incentive is <strong>₹2,500 per kWh, capped at ₹5,000</strong> per vehicle (and limited to 15% of
        the ex-factory price). Most mainstream e-scooters simply hit the ₹5,000 cap. The full breakdown,
        with example figures by battery size, is in our{" "}
        <Link href="/blog/electric-scooter-subsidy-india">electric scooter subsidy guide</Link>. Three-wheelers
        have their own per-vehicle caps and run to 2028, making PM E-Drive especially relevant for commercial
        e-rickshaw and e-auto buyers.
      </p>

      <h2>Uptake so far</h2>
      <p>
        The scheme has seen strong adoption. By <strong>January 2026, around 22 lakh EVs</strong> had been
        sold under PM E-Drive, closing in on the ~24.79 lakh two-wheeler target. That momentum — concentrated
        in two-wheelers — is part of why the two-wheeler window is the one with the nearest deadline.
      </p>

      <h2>Why this matters for your purchase</h2>
      <p>
        For a scooter or e-rickshaw, PM E-Drive is a genuine, claimable saving — but the two-wheeler clock
        runs out on 31 July 2026. For a private car, it is not a factor at all. Knowing which bucket your
        vehicle falls into saves a lot of confusion at the dealership. Browse what qualifies in the{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>, check what your state adds
        on top in the{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state road-tax and subsidy guide
        </Link>
        , and estimate your monthly cost with the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>. Because allocations,
        rates and deadlines can be revised, always verify the current details on the official PM E-Drive
        portal before you buy.
      </p>

      <h2>Frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
