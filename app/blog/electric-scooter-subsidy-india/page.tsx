import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much subsidy can I get on an electric scooter in India in 2026?",
    a: "Under PM E-Drive the central incentive for an electric two-wheeler is ₹2,500 per kWh of battery, capped at ₹5,000 per vehicle (and limited to 15% of the ex-factory price, whichever is lower). Most mainstream e-scooters with 2.5 kWh batteries or larger simply hit the ₹5,000 cap. State top-ups can add more where they are active.",
  },
  {
    q: "When does the electric scooter subsidy end?",
    a: "The PM E-Drive incentive applies to electric two-wheelers registered up to 31 July 2026 (extended from 31 March 2026). This is a very near-term deadline — if you want the central incentive on a scooter, the purchase and registration must be completed before then.",
  },
  {
    q: "Why is my scooter subsidy lower than ₹5,000?",
    a: "The incentive is the lower of three numbers: ₹2,500 per kWh, a ₹5,000 hard cap, and 15% of the ex-factory price. A scooter with a small battery (under 2 kWh) or a low ex-factory price can be limited below ₹5,000. Larger batteries reach the cap, so the cap — not the per-kWh rate — is what most buyers actually get.",
  },
  {
    q: "Can state subsidies be added on top of PM E-Drive?",
    a: "Yes, where a state scheme is active the state top-up generally stacks on top of the central PM E-Drive incentive. Maharashtra, for example, has offered roughly ₹10,000 per e-2W plus road-tax and registration waivers. But several state two-wheeler subsidies are now discontinued or only in draft form, so confirm the live position with your dealer and state transport portal.",
  },
  {
    q: "Did the subsidy amount change recently?",
    a: "Yes. The per-kWh rate dropped from ₹5,000/kWh in Year 1 to ₹2,500/kWh from 1 April 2025 (Year 2 of PM E-Drive), and the per-vehicle cap moved to ₹5,000. So the central incentive on a scooter is smaller in 2026 than it was at the scheme's launch.",
  },
];

export const metadata: Metadata = {
  title: "Electric Scooter Subsidy in India 2026: PM E-Drive + State Benefits",
  description:
    "What subsidy can you get on an electric scooter in India in 2026? The PM E-Drive two-wheeler incentive of ₹2,500/kWh capped at ₹5,000, the crucial 31 July 2026 deadline, and which state top-ups still apply — explained with example figures.",
  alternates: altsFor("/blog/electric-scooter-subsidy-india", "en"),
  openGraph: {
    title: "Electric Scooter Subsidy in India 2026: PM E-Drive + State Benefits",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-scooter-subsidy-india">
      <p>
        An electric scooter is the single most popular way Indians go electric, and the central subsidy
        is one reason why. But in 2026 the numbers are smaller than they were at launch, and the clock
        is ticking on the scheme itself. This guide explains exactly how much you can claim under{" "}
        <Link href="/blog/pm-e-drive-scheme-explained-india">PM E-Drive</Link>, how state top-ups stack
        on it, and — most importantly — the near-term deadline you cannot afford to miss. For the full
        incentive landscape across vehicle types, see our{" "}
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
        <strong>Deadline alert.</strong> The PM E-Drive incentive applies to electric two-wheelers
        registered <strong>up to 31 July 2026</strong> (extended from 31 March 2026). This is a very
        near-term date. If you want the central incentive on your scooter, the purchase and registration
        must be completed before then. Confirm the live position on the official PM E-Drive portal
        before you book.
      </div>

      <h2>The central incentive: ₹2,500 per kWh, capped at ₹5,000</h2>
      <p>
        Under PM E-Drive the electric two-wheeler incentive is <strong>₹2,500 per kWh</strong> of battery
        capacity, with a hard cap of <strong>₹5,000 per vehicle</strong>. There is also a third limit:
        the incentive cannot exceed <strong>15% of the ex-factory price</strong>. In practice you get the
        lowest of these three. This Year-2 rate took effect on <strong>1 April 2025</strong>, down from
        ₹5,000/kWh in Year 1 — so the central benefit on a scooter has roughly halved at the per-kWh
        level, though the ₹5,000 cap means many buyers see less change than that maths suggests.
      </p>
      <p>
        Only e-2Ws fitted with <strong>advanced batteries</strong> qualify, and the scheme targets around{" "}
        <strong>24.79 lakh electric two-wheelers</strong> overall. Eligibility is decided at variant level
        on the PM E-Drive portal, so confirm your exact model is listed before booking.
      </p>

      <h2>Example: what you actually get by battery size</h2>
      <p>
        Because the cap is ₹5,000, most mainstream scooters land at exactly that figure. Here is how the
        maths plays out on common battery sizes (assuming ex-factory price is high enough that the 15%
        limit does not bite):
      </p>
      <table>
        <thead>
          <tr>
            <th>Battery size</th>
            <th>₹2,500 × kWh</th>
            <th>Incentive after ₹5,000 cap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2.5 kWh</td>
            <td>₹6,250</td>
            <td>₹5,000 (capped)</td>
          </tr>
          <tr>
            <td>3.0 kWh</td>
            <td>₹7,500</td>
            <td>₹5,000 (capped)</td>
          </tr>
          <tr>
            <td>3.7 kWh</td>
            <td>₹9,250</td>
            <td>₹5,000 (capped)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The takeaway: for any scooter of about 2 kWh or larger, the central benefit is effectively a flat{" "}
        <strong>₹5,000</strong>. The per-kWh rate only matters for very small batteries, where 15% of the
        ex-factory price can pull the number below ₹5,000.
      </p>

      <h2>How you claim it (spoiler: you barely do)</h2>
      <p>
        You do not file a separate application. The dealer runs your Aadhaar e-KYC, the portal issues an
        Aadhaar-authenticated e-voucher, you sign it by SMS, and the ₹5,000 is already deducted from your
        invoice — one vehicle per Aadhaar. The full process is in our{" "}
        <Link href="/blog/how-to-claim-ev-subsidy-india">step-by-step guide to claiming an EV subsidy</Link>.
      </p>

      <h2>State top-ups: where they still exist</h2>
      <p>
        Where a state scheme is active, its incentive generally <strong>stacks on top</strong> of the
        central ₹5,000. But this is exactly where buyers get caught out, because several state schemes have
        lapsed or were never notified. Here is the honest 2026 position:
      </p>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Two-wheeler benefit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maharashtra</td>
            <td>~₹10,000 per e-2W + 100% road-tax &amp; registration waiver</td>
            <td>Active (one of the more reliable states)</td>
          </tr>
          <tr>
            <td>Delhi</td>
            <td>Draft EV Policy 2.0 proposes ₹10,000/kWh (cap ₹30,000) + ₹10,000 scrappage</td>
            <td>DRAFT only — not notified as law</td>
          </tr>
          <tr>
            <td>Gujarat</td>
            <td>Old ₹10,000/kWh (up to ₹20,000) two-wheeler subsidy</td>
            <td>Discontinued — no longer available</td>
          </tr>
        </tbody>
      </table>
      <p>
        Read those status notes carefully. <strong>Delhi&apos;s generous figures are from a draft policy</strong>{" "}
        that has not been notified as of mid-2026 — treat them as a proposal, not money in hand. And{" "}
        <strong>Gujarat&apos;s old two-wheeler subsidy is discontinued</strong>, so do not assume it still
        applies. Maharashtra remains genuinely worth having. For the broader map of which states deliver
        real savings, see our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state subsidy and road-tax guide
        </Link>
        .
      </p>

      <h2>Putting it together</h2>
      <p>
        In a state like Maharashtra, a typical 3 kWh e-scooter could see the central ₹5,000 plus roughly
        ₹10,000 from the state, plus road-tax and registration waivers — a meaningful cut on the on-road
        price. In a state with no active two-wheeler subsidy, you are essentially looking at the central
        ₹5,000 alone. Either way, the central portion disappears for scooters registered after 31 July
        2026, so timing matters.
      </p>
      <p>
        Browse eligible models in the{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>, and once you have a price
        in mind, run the numbers through the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link> to see your real monthly
        cost. Because rates, caps and state schemes change frequently, always confirm the current figures
        on the official PM E-Drive portal and your state transport department portal before you commit.
      </p>

      <h2>Frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
