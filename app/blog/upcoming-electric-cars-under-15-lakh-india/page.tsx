import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which upcoming electric cars will cost under ₹15 lakh in India?",
    a: "The Hyundai Inster EV is the most anticipated, with lower trims expected to land under ₹15 lakh (a base around ~₹11–12 lakh is widely reported). The Tata Altroz EV (~₹12–15 lakh) and the base Citroen Basalt EV (~₹14 lakh) should also slip under the mark. Budget entrants like the Leapmotor T03 and VinFast VF5 are expected in the ~₹8–12 lakh range. All of these are estimates, not official prices.",
  },
  {
    q: "When is the Hyundai Inster EV launching in India?",
    a: "Hyundai is widely expected to bring the Inster EV to India around late 2026. An estimated price of roughly ₹10–13 lakh has been reported, with the base trim likely near ₹11–12 lakh, positioning it as a rival to the Tata Punch EV. Treat this as an expectation, not a confirmed launch date or price.",
  },
  {
    q: "Is the Mahindra XUV 3XO EV already on sale under ₹15 lakh?",
    a: "Yes. Unlike the others in this list, the XUV 3XO EV has already launched, with the AX5 from about ₹13.89 lakh and the top AX7L around ₹14.96 lakh — both under ₹15 lakh ex-showroom. So if you want a feature-loaded sub-₹15-lakh EV today rather than waiting, it is the one to look at.",
  },
  {
    q: "Will the Tata Sierra EV or Kia Syros EV be under ₹15 lakh?",
    a: "Probably not. Both are expected in 2026 but are likely to launch at or above ₹15 lakh, so they sit just outside this bracket on current expectations. We will update this guide if a base variant lands under the line.",
  },
];

export const metadata: Metadata = {
  title: "Upcoming Electric Cars Under ₹15 Lakh in India (2026)",
  description:
    "Which electric cars under ₹15 lakh are launching in India in 2026? Expected models, indicative prices and timing — from the Hyundai Inster EV and Tata Altroz EV to new Citroen, Leapmotor and VinFast options.",
  alternates: altsFor("/blog/upcoming-electric-cars-under-15-lakh-india", "en"),
  openGraph: {
    title: "Upcoming Electric Cars Under ₹15 Lakh in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="upcoming-electric-cars-under-15-lakh-india">
      <p>
        The sub-₹15-lakh electric-car bracket is about to get a lot more crowded. Beyond the cars you
        can already buy today, a wave of new models is expected through 2026 — some launching right
        under the ₹15 lakh ceiling, others hovering just above it before discounts and base trims pull
        them in. This guide rounds up the upcoming electric cars under ₹15 lakh in India for 2026, with
        honest notes on what is confirmed and what is still an estimate. For the cars on sale right
        now, see our companion guide to the{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">best electric cars under ₹15 lakh</Link>.
      </p>

      <p>
        <strong>One big caveat up front:</strong> every price for an unlaunched car below is an
        industry estimate, not an official figure. Carmakers routinely reveal final prices only at
        launch, and they can land higher or lower than expected. Treat the numbers as a planning guide
        and confirm the real ex-showroom and on-road price with a dealer before you commit.
      </p>

      <h2>Already launched and under ₹15 lakh: Mahindra XUV 3XO EV</h2>
      <p>
        Worth saying first because it changes the conversation: the{" "}
        <strong>Mahindra XUV 3XO EV is already on sale</strong>, with the AX5 from about ₹13.89 lakh and
        the top AX7L around ₹14.96 lakh — both genuinely under ₹15 lakh ex-showroom. If you want a
        feature-loaded compact electric SUV in this budget and do not want to wait, this is the
        benchmark the upcoming cars will be measured against.
      </p>

      <h2>Hyundai Inster EV — the most anticipated entrant</h2>
      <p>
        The Hyundai Inster EV is the car most buyers in this bracket are waiting for. Expected to arrive
        around <strong>late 2026</strong>, it is widely reported to be priced in the region of
        ₹10–13 lakh, with a base trim likely near ₹11–12 lakh. That would put its lower variants
        comfortably under ₹15 lakh and squarely against the Tata Punch EV. Hyundai's reputation for
        fit, finish and service network could make it an instant shortlist car — but again, the price
        is an expectation, not a confirmed figure.
      </p>

      <h2>Tata Altroz EV — straddling the line</h2>
      <p>
        Tata is expected to electrify its premium hatchback as the Altroz EV, with estimates in the
        <strong> ₹12–15 lakh</strong> range and a claimed range around 300 km. Lower trims should fall
        under ₹15 lakh while the top variants flirt with or cross it. If it arrives as expected, it
        would give buyers a more upmarket hatchback alternative to the Tiago EV without leaving the
        bracket entirely.
      </p>

      <h2>Citroen Basalt EV — only the base under the line</h2>
      <p>
        The Citroen Basalt EV, an electric version of the coupe-SUV, is estimated to span roughly
        <strong> ₹14–17 lakh</strong>. On those numbers, only the base variant would stay under
        ₹15 lakh, with higher trims stepping above it. Citroen's India timing for this model is still
        uncertain, so treat it as a longer-shot option rather than a near-term buy.
      </p>

      <h2>Budget contenders: Leapmotor T03 and VinFast VF5</h2>
      <p>
        Two newer brands could shake up the entry end. The <strong>Leapmotor T03</strong> is expected
        around ₹8–12 lakh, and the <strong>VinFast VF5</strong> around ₹10–12 lakh — both well under
        ₹15 lakh if they launch at those estimates. As fresh entrants, they bring uncertainty on
        service networks and resale, so weigh the lower price against an established brand's
        after-sales reach before deciding.
      </p>

      <h2>Expected, but likely above ₹15 lakh: Tata Sierra EV and Kia Syros EV</h2>
      <p>
        Two high-profile 2026 launches probably will not make this list. The <strong>Tata Sierra EV</strong>{" "}
        and the <strong>Kia Syros EV</strong> are both expected during the year, but current
        expectations place them at or above ₹15 lakh — so they belong in the next bracket up unless a
        base variant surprises us on price.
      </p>

      <h2>At a glance: upcoming sub-₹15-lakh EVs (estimates)</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Estimated price</th>
            <th>Expected timing</th>
            <th>Under ₹15 lakh?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mahindra XUV 3XO EV</td>
            <td>₹13.89–14.96 lakh</td>
            <td>On sale now</td>
            <td>Yes (whole range)</td>
          </tr>
          <tr>
            <td>Hyundai Inster EV</td>
            <td>~₹10–13 lakh (base ~₹11–12)</td>
            <td>Late 2026 (expected)</td>
            <td>Lower trims likely</td>
          </tr>
          <tr>
            <td>Tata Altroz EV</td>
            <td>~₹12–15 lakh</td>
            <td>2026 (expected)</td>
            <td>Straddles the line</td>
          </tr>
          <tr>
            <td>Citroen Basalt EV</td>
            <td>~₹14–17 lakh</td>
            <td>Uncertain</td>
            <td>Base only</td>
          </tr>
          <tr>
            <td>Leapmotor T03</td>
            <td>~₹8–12 lakh</td>
            <td>2026 (expected)</td>
            <td>Likely</td>
          </tr>
          <tr>
            <td>VinFast VF5</td>
            <td>~₹10–12 lakh</td>
            <td>2026 (expected)</td>
            <td>Likely</td>
          </tr>
        </tbody>
      </table>
      <p>
        All prices above are <strong>indicative ex-showroom estimates</strong> for unlaunched cars —
        verify the final figure with a dealer at launch. Browse everything on sale today in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and put any two models head to
        head with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>Should you wait, or buy now?</h2>
      <p>
        If your heart is set on the Hyundai Inster EV and you can wait until late 2026, it may well be
        worth holding out. But "upcoming" prices have a habit of arriving higher than estimates, and
        every month you wait is a month of petrol bills. If a car already on sale — like the XUV 3XO EV,
        Tata Punch EV or Nexon EV — fits your needs, buying now and locking in today's running-cost
        savings is often the smarter move. Estimate the EMI on whatever you choose with the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>, and check what your
        state offers in our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">state-by-state subsidy and road-tax guide</Link>{" "}
        before you sign anything.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        We refresh this guide as each new model goes on sale and as official prices replace estimates,
        so bookmark it. In the meantime, compare what is available today in the{" "}
        <Link href="/catalog/electric-cars">catalog</Link> and read up on{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">what an EV really costs to own in India</Link>.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
