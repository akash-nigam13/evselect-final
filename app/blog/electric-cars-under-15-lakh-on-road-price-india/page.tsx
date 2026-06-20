import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the on-road price of an electric car under ₹15 lakh in India?",
    a: "On-road price is the ex-showroom price plus road tax, registration, first-year insurance, TCS (1% on vehicles above ₹10 lakh) and dealer handling. For a ~₹12–13 lakh ex-showroom EV, the on-road figure is roughly ₹12.5–13.7 lakh in a road-tax-waiver state, or about ₹13.5–14.5 lakh in a non-waiver state. These are illustrative ranges, not quotes — confirm with your dealer.",
  },
  {
    q: "Why is the on-road price of an EV close to its ex-showroom price?",
    a: "Two reasons. EVs already attract just 5% GST, which is built into the ex-showroom figure, and many states waive road tax and registration entirely for electric cars. With those two big add-ons reduced or removed, the gap between ex-showroom and on-road shrinks to roughly 3–6% in a waiver state, versus a much larger gap on a petrol car.",
  },
  {
    q: "Do I pay road tax on an electric car in India?",
    a: "It depends on your state. Delhi waives 100% of road tax and registration for EVs under ₹30 lakh, Maharashtra waives 100% road tax (plus some toll exemptions), and Gujarat has offered 100% road tax and registration waivers. In states without a waiver, you do pay road tax, which adds roughly ₹50,000 to ₹1.5 lakh to the on-road price. Always re-check current rules, as waiver windows change.",
  },
  {
    q: "Is TCS charged on electric cars under ₹15 lakh?",
    a: "Yes. A 1% Tax Collected at Source (TCS) applies to motor vehicles priced above ₹10 lakh, including most EVs in this bracket. It is adjustable against your income tax, but it does appear on the on-road invoice — roughly ₹12,000–₹15,000 on a ₹12–15 lakh car.",
  },
];

export const metadata: Metadata = {
  title: "On-Road Price of Electric Cars Under ₹15 Lakh in India (2026)",
  description:
    "What's the on-road price of an electric car under ₹15 lakh in India? How road tax, registration, insurance and TCS add up — and why EV waivers keep the on-road price close to ex-showroom in 2026.",
  alternates: altsFor("/blog/electric-cars-under-15-lakh-on-road-price-india", "en"),
  openGraph: {
    title: "On-Road Price of Electric Cars Under ₹15 Lakh in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-cars-under-15-lakh-on-road-price-india">
      <p>
        Almost every EV price you see advertised is <strong>ex-showroom</strong> — the figure before
        the taxes and fees that turn a sticker price into the amount you actually pay. For electric
        cars under ₹15 lakh, the good news is that the on-road price usually stays much closer to
        ex-showroom than it does for a petrol car. This guide breaks down exactly what goes into the
        on-road price of an electric car under ₹15 lakh in India in 2026, with an illustrative build-up
        you can adapt to your own city. For the cars themselves, see our guide to the{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">best electric cars under ₹15 lakh</Link>.
      </p>

      <h2>What "on-road price" actually includes</h2>
      <p>
        On-road price is the all-in number, and it stacks up like this:
      </p>
      <ul>
        <li><strong>Ex-showroom price</strong> — the base figure, already including 5% GST for EVs.</li>
        <li><strong>Road tax</strong> — the biggest variable; often waived for EVs (see below).</li>
        <li><strong>Registration (RTO) charges</strong> — also frequently waived for electric cars.</li>
        <li><strong>First-year insurance</strong> — comprehensive cover, typically ₹40,000–₹70,000 in this segment.</li>
        <li><strong>TCS</strong> — 1% Tax Collected at Source on vehicles above ₹10 lakh (adjustable against income tax).</li>
        <li><strong>Handling / logistics</strong> — dealer charges, usually a few thousand rupees.</li>
      </ul>
      <p>
        The single reason EVs feel cheaper to register is that they attract just <strong>5% GST</strong>
        (versus 28% plus cess on petrol cars), and that is already baked into the ex-showroom figure. So
        the on-road gap comes down mostly to road tax and registration — exactly the two items many
        states waive.
      </p>

      <h2>State waivers: where the real savings are</h2>
      <p>
        Road tax and registration are set by states, and several offer generous EV waivers:
      </p>
      <ul>
        <li><strong>Delhi</strong> — 100% road tax and registration waiver for EVs under ₹30 lakh.</li>
        <li><strong>Maharashtra</strong> — 100% road tax waiver, plus some toll exemptions for electric cars.</li>
        <li>
          <strong>Gujarat</strong> — 100% road tax and registration waivers. Note that a reduced-rate
          window was flagged as possibly reverting after 31 March 2026, so re-check the current rule
          before you buy.
        </li>
      </ul>
      <p>
        In a waiver state, the on-road price of a sub-₹15-lakh EV runs only about <strong>3–6% above
        ex-showroom</strong>. In a state without a waiver, road tax is added back, pushing the gap wider
        — typically by ₹50,000 to ₹1.5 lakh depending on the car and the local rate.
      </p>

      <h2>Illustrative build-up: a ~₹12.5 lakh EV</h2>
      <p>
        The table below shows roughly how an EV with a ₹12.5 lakh ex-showroom price might land on-road
        in a waiver state versus a non-waiver state. These are <strong>illustrative ranges, not
        quotes</strong> — your dealer's invoice is the only number that counts.
      </p>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Waiver state (e.g. Delhi)</th>
            <th>Non-waiver state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ex-showroom (incl. 5% GST)</td>
            <td>₹12,50,000</td>
            <td>₹12,50,000</td>
          </tr>
          <tr>
            <td>Road tax</td>
            <td>₹0 (waived)</td>
            <td>~₹75,000–1,25,000</td>
          </tr>
          <tr>
            <td>Registration</td>
            <td>₹0 (waived)</td>
            <td>~₹5,000–10,000</td>
          </tr>
          <tr>
            <td>First-year insurance</td>
            <td>~₹50,000</td>
            <td>~₹50,000</td>
          </tr>
          <tr>
            <td>TCS (1%)</td>
            <td>~₹12,500</td>
            <td>~₹12,500</td>
          </tr>
          <tr>
            <td>Handling</td>
            <td>~₹5,000</td>
            <td>~₹5,000</td>
          </tr>
          <tr>
            <td><strong>Approx. on-road</strong></td>
            <td><strong>~₹13.1–13.2 lakh</strong></td>
            <td><strong>~₹13.9–14.5 lakh</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        So the same car can cost ₹50,000 to ₹1.5 lakh more on-road depending purely on which state you
        register it in — a difference big enough to be worth checking carefully.
      </p>

      <h2>How to estimate your own on-road price</h2>
      <p>
        Start with the ex-showroom price from our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, then look up your state's EV
        road-tax rule in the{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">state-by-state road-tax and subsidy guide</Link>.
        Add insurance, the 1% TCS and a small handling charge, and you will have a realistic on-road
        estimate. To see the monthly EMI on that figure, run it through the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>. And remember the
        on-road price is only the start — the bigger savings come from running costs, which we cover in{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">what an electric car really costs to own in India</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        Bottom line: thanks to 5% GST and widespread state waivers, the on-road price of a sub-₹15-lakh
        EV is often only marginally above ex-showroom — but the exact figure depends entirely on your
        state. Confirm it with your dealer, since every number here is indicative and rules change.
        Browse models in the <Link href="/catalog/electric-cars">catalog</Link> to begin.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
