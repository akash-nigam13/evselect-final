import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I have to apply separately for the central EV subsidy in India?",
    a: "No. The central PM E-Drive incentive is not a separate buyer application. It is applied at the dealer as an upfront cut in the price you pay. The dealer runs your Aadhaar e-KYC, the PM E-Drive portal generates an Aadhaar-authenticated e-voucher, you and the dealer sign it, and the discount is already baked into your invoice.",
  },
  {
    q: "What documents do I need to claim an EV subsidy?",
    a: "Your Aadhaar is mandatory for the e-KYC (face authentication) at the dealer. Keep address proof, the vehicle invoice and registration documents, and your bank details ready — the bank account matters for any state subsidy paid as Direct Benefit Transfer (DBT) after registration.",
  },
  {
    q: "Can I claim the subsidy on more than one EV?",
    a: "No. The PM E-Drive e-voucher is one vehicle per Aadhaar. The Aadhaar-authenticated e-voucher ties the incentive to a single buyer and a single vehicle.",
  },
  {
    q: "How is a state EV subsidy different from the central one?",
    a: "State subsidies vary widely. Some states apply their top-up upfront at the dealer (stacked on top of PM E-Drive), while others pay it as a reimbursement or DBT to your bank account after the vehicle is registered. Many state purchase subsidies are currently lapsed or only in draft form, so confirm with your dealer and state transport portal first.",
  },
  {
    q: "What if my EV model is not on the PM E-Drive portal?",
    a: "If the model and variant are not listed on the PM E-Drive portal, the central incentive cannot be generated for it. Ask the dealer to confirm the exact variant is approved before you book, because eligibility is at variant level, not just brand.",
  },
];

export const metadata: Metadata = {
  title: "How to Claim Your EV Subsidy in India (2026): Step-by-Step",
  description:
    "A step-by-step 2026 guide to claiming your EV subsidy in India — the PM E-Drive e-voucher claimed at the dealer via Aadhaar e-KYC, state DBT reimbursements, the documents you need, and the key July 2026 deadline for two-wheelers.",
  alternates: altsFor("/blog/how-to-claim-ev-subsidy-india", "en"),
  openGraph: {
    title: "How to Claim Your EV Subsidy in India (2026): Step-by-Step",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="how-to-claim-ev-subsidy-india">
      <p>
        The biggest surprise for most first-time electric-vehicle buyers in India is how little
        paperwork the central subsidy actually involves. There is no government form to fill, no
        cheque to wait for and no office to visit. Under the{" "}
        <Link href="/blog/pm-e-drive-scheme-explained-india">PM E-Drive scheme</Link>, the central
        incentive is applied at the dealer as an <strong>upfront cut in the price you pay</strong> —
        you simply walk out having paid less. This guide walks through exactly how that works in 2026,
        what documents to carry, and how state subsidies (which behave differently) are claimed. For
        the wider picture of what you are entitled to, start with our{" "}
        <Link href="/ev-subsidies-india">EV subsidies &amp; incentives guide</Link>.
      </p>

      <div
        style={{
          borderLeft: "4px solid #F472B6",
          padding: "0.75rem 1rem",
          margin: "1.25rem 0",
          background: "rgba(244,114,182,0.08)",
        }}
      >
        <strong>Before you read on — two time-sensitive flags.</strong> The PM E-Drive incentive for{" "}
        <strong>electric two-wheelers ends on 31 July 2026</strong>, a very near-term deadline, so
        any e-scooter claim must be completed before then. And schemes and amounts change often —
        always confirm the current position on the official PM E-Drive portal or your state transport
        department portal before you book.
      </div>

      <h2>The central subsidy: claimed for you at the dealer</h2>
      <p>
        The PM E-Drive incentive is not something you apply for after the fact. It is generated at the
        point of sale through an Aadhaar-authenticated e-voucher, and the value is deducted from your
        invoice. Your job is simply to bring the right documents and complete a quick e-KYC. Here is
        the sequence step by step.
      </p>

      <h3>Step 1 — Dealer confirms the model is on the PM E-Drive portal</h3>
      <p>
        Eligibility is decided at variant level. The dealer checks that your exact model and variant
        is listed and approved on the PM E-Drive portal. If it is not on the portal, the central
        incentive cannot be generated — so confirm this <em>before</em> you pay any booking amount.
      </p>

      <h3>Step 2 — Aadhaar e-KYC with face authentication</h3>
      <p>
        The dealer runs your <strong>Aadhaar e-KYC using face authentication</strong> inside the PM
        E-Drive app. This is the heart of the process: it links the incentive to you as a verified
        buyer. Remember that it is <strong>one vehicle per Aadhaar</strong>, so the same Aadhaar cannot
        be used to claim the incentive on a second vehicle.
      </p>

      <h3>Step 3 — Portal generates the Aadhaar-authenticated e-voucher</h3>
      <p>
        Once e-KYC succeeds, the PM E-Drive portal generates an Aadhaar-authenticated{" "}
        <strong>e-voucher</strong> for your purchase. An SMS with a link to this e-voucher is sent to
        your registered mobile number.
      </p>

      <h3>Step 4 — You sign, the dealer counter-signs and uploads</h3>
      <p>
        You open the SMS link and <strong>digitally sign</strong> the e-voucher. The dealer then{" "}
        <strong>counter-signs and uploads</strong> it back to the portal. Both you and the dealer
        receive an <strong>SMS confirmation</strong> once the voucher is accepted. The incentive value
        is reflected as a reduction on your invoice — there is no separate refund to chase.
      </p>

      <h2>Documents to carry to the dealer</h2>
      <table>
        <thead>
          <tr>
            <th>Document</th>
            <th>Why it is needed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aadhaar card</td>
            <td>Mandatory for the e-KYC (face authentication) that generates the e-voucher</td>
          </tr>
          <tr>
            <td>Address proof</td>
            <td>Identity and residence verification for registration and state schemes</td>
          </tr>
          <tr>
            <td>Vehicle invoice + registration documents</td>
            <td>Ties the incentive to a specific, registered vehicle</td>
          </tr>
          <tr>
            <td>Bank account details</td>
            <td>Required for any state subsidy paid as DBT to your account after registration</td>
          </tr>
        </tbody>
      </table>

      <h2>State subsidies: a different, slower path</h2>
      <p>
        State incentives do not all follow the central model. Broadly there are two patterns:
      </p>
      <ul>
        <li>
          <strong>Upfront at the dealer (stacked):</strong> some states let their top-up be applied at
          the dealer on top of PM E-Drive, so you pay even less at the counter.
        </li>
        <li>
          <strong>Reimbursement / DBT after registration:</strong> other states pay the subsidy as a
          Direct Benefit Transfer into your bank account <em>after</em> the vehicle is registered. This
          is why your bank details matter, and why the money can take weeks to arrive.
        </li>
      </ul>
      <p>
        Crucially, <strong>many state purchase subsidies are currently lapsed or only in draft form</strong>.
        Gujarat&apos;s older two-wheeler and car purchase subsidies have expired, and Delhi&apos;s widely
        reported EV Policy 2.0 figures are still a <strong>draft</strong> and have not been notified as
        law as of mid-2026 — so do not bank on them. Maharashtra remains one of the more reliable states
        with road-tax and registration waivers. Always confirm the live position with your dealer and on
        your state transport portal. Our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state subsidy and road-tax guide
        </Link>{" "}
        tracks where real relief exists right now.
      </p>

      <h2>How this differs by vehicle type</h2>
      <p>
        If you are buying an <strong>electric scooter</strong>, the central incentive is meaningful but
        capped, and the 31 July 2026 deadline is real — read our{" "}
        <Link href="/blog/electric-scooter-subsidy-india">
          electric scooter subsidy guide
        </Link>{" "}
        for the per-kWh maths. If you are buying an <strong>electric car</strong>, brace yourself: there
        is <strong>no central purchase subsidy</strong> for private e-cars at all. The savings there come
        from 5% GST and state road-tax waivers, which we cover in{" "}
        <Link href="/blog/ev-subsidy-on-electric-cars-india">
          is there a subsidy on electric cars in India
        </Link>
        . Browse eligible models in the{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link> or estimate your monthly
        outgo with the <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>.
      </p>

      <h2>Common mistakes that cost buyers the subsidy</h2>
      <ul>
        <li>
          <strong>Not confirming the variant is on the portal</strong> before booking — eligibility is
          variant-specific, not just by brand.
        </li>
        <li>
          <strong>Mismatched Aadhaar mobile number</strong> — if your phone is not linked to Aadhaar,
          the e-voucher SMS and signing step can stall.
        </li>
        <li>
          <strong>Assuming a lapsed or draft state scheme is active</strong> — verify before you count
          on a state top-up.
        </li>
        <li>
          <strong>Wrong bank details for DBT states</strong> — a small error delays or blocks the
          reimbursement.
        </li>
      </ul>

      <p>
        The headline is reassuring: for the central incentive you do almost nothing except bring your
        Aadhaar and sign an SMS link. The complexity lives in state schemes, where amounts, eligibility
        and even whether a scheme exists at all keep changing. Treat any figure you read — here or
        anywhere — as a starting point, and confirm the live amounts on the official PM E-Drive portal
        or your state transport department portal before you commit.
      </p>

      <h2>Frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
