import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which electric car under ₹15 lakh has a sunroof in India?",
    a: "The Mahindra XUV 3XO EV is the only EV under ₹15 lakh with a real opening sunroof. The AX5 (~₹13.89 lakh) gets a single-pane sunroof, and the top AX7L (~₹14.96 lakh) gets a panoramic sunroof — and both stay under ₹15 lakh ex-showroom.",
  },
  {
    q: "Does the MG Windsor EV have a sunroof?",
    a: "The MG Windsor EV has an 'Infinity View' fixed glass roof, not an opening sunroof. It does not open; it has a powered sunshade. It is also offered only on the Essence (~₹16.53 lakh) and Essence Pro variants, which are above ₹15 lakh — so it does not qualify as a sub-₹15-lakh sunroof car.",
  },
  {
    q: "What is the difference between a sunroof and a fixed glass roof?",
    a: "A sunroof opens — the glass panel slides or tilts to let in air. A fixed (panoramic) glass roof is sealed shut: it lets in light and usually has a sunshade, but it never opens. If you specifically want fresh air from above, you need an opening sunroof, which under ₹15 lakh means the Mahindra XUV 3XO EV.",
  },
  {
    q: "Do the Tata Nexon EV or Punch EV have a sunroof?",
    a: "No. On their electric trims, the Tata Nexon EV and Tata Punch EV do not get a factory sunroof. If a sunroof is a must-have under ₹15 lakh, the Mahindra XUV 3XO EV is the one to look at. Always re-verify by variant, as carmakers revise feature lists.",
  },
];

export const metadata: Metadata = {
  title: "Electric Cars With Sunroof Under ₹15 Lakh in India (2026)",
  description:
    "Want an electric car with a sunroof under ₹15 lakh in India? Which EVs offer a real opening sunroof vs a fixed glass roof in 2026 — and which variants actually stay under the ₹15 lakh mark.",
  alternates: altsFor("/blog/electric-cars-with-sunroof-under-15-lakh-india", "en"),
  openGraph: {
    title: "Electric Cars With Sunroof Under ₹15 Lakh in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-cars-with-sunroof-under-15-lakh-india">
      <p>
        A sunroof has become one of the most requested features on Indian cars, EVs included. But in
        the sub-₹15-lakh electric segment, the field is narrower than the marketing might suggest — and
        there is an important distinction between a <strong>real opening sunroof</strong> and a{" "}
        <strong>fixed glass roof</strong> that only looks the part. This guide cuts through it: which
        electric car under ₹15 lakh genuinely gives you a sunroof in 2026, and which "panoramic roof"
        cars are actually above the line. For the wider segment, see our guide to the{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">best electric cars under ₹15 lakh</Link>.
      </p>

      <h2>The short answer: the Mahindra XUV 3XO EV</h2>
      <p>
        If you want a real, opening sunroof on an EV under ₹15 lakh, there is exactly one answer today:
        the <strong>Mahindra XUV 3XO EV</strong>. And the good news is it offers a choice:
      </p>
      <ul>
        <li>
          <strong>AX5 (~₹13.89 lakh)</strong> — a single-pane opening sunroof.
        </li>
        <li>
          <strong>AX7L (~₹14.96 lakh)</strong> — a full panoramic opening sunroof, and still under
          ₹15 lakh ex-showroom.
        </li>
      </ul>
      <p>
        That makes the XUV 3XO EV unusual: most cars make you cross ₹15 lakh to get a panoramic sunroof,
        but here even the top trim sneaks under the ceiling. If a sunroof is your deal-breaker feature,
        this is the car the segment is built around.
      </p>

      <h2>Sunroof vs fixed glass roof: why it matters</h2>
      <p>
        This is where a lot of buyers get caught out. A <strong>sunroof opens</strong> — the glass
        slides or tilts so you can let air in. A <strong>fixed glass roof</strong> (sometimes marketed
        as a panoramic roof) is sealed shut: it lets in daylight and usually has a powered sunshade, but
        it never opens. Both look similar in photos. If your reason for wanting a sunroof is fresh air
        and an open-sky feel on a drive, only an opening sunroof delivers it — and under ₹15 lakh, that
        means the XUV 3XO EV.
      </p>

      <h2>The MG Windsor EV: a fixed glass roof, and above ₹15 lakh anyway</h2>
      <p>
        The MG Windsor EV is the car most likely to come up in a sunroof search — but it does not
        qualify on two counts. First, its <strong>"Infinity View" roof is fixed glass</strong>, not an
        opening sunroof; it has a powered sunshade but does not open. Second, that roof appears only on
        the <strong>Essence (~₹16.53 lakh) and Essence Pro</strong> variants, which are above ₹15 lakh.
        So while the Windsor is a fine EV, it is not a sub-₹15-lakh sunroof car.
      </p>

      <h2>What about the Tata Curvv EV, Nexon EV and Punch EV?</h2>
      <p>
        A quick clean-up of the usual contenders:
      </p>
      <ul>
        <li>
          <strong>Tata Curvv EV</strong> — has a genuine panoramic sunroof, but the car is priced above
          ₹15 lakh, so it falls outside this bracket.
        </li>
        <li>
          <strong>Tata Nexon EV</strong> — no factory sunroof on its EV trims.
        </li>
        <li>
          <strong>Tata Punch EV</strong> — no factory sunroof on its EV trims either.
        </li>
      </ul>
      <p>
        So among the popular sub-₹15-lakh Tatas, none gives you a sunroof from the factory — which is
        what makes the XUV 3XO EV stand out.
      </p>

      <h2>At a glance</h2>
      <table>
        <thead>
          <tr>
            <th>EV</th>
            <th>Roof type</th>
            <th>Variant &amp; price</th>
            <th>Under ₹15 lakh?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mahindra XUV 3XO EV (AX5)</td>
            <td>Opening sunroof (single-pane)</td>
            <td>~₹13.89 lakh</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Mahindra XUV 3XO EV (AX7L)</td>
            <td>Opening panoramic sunroof</td>
            <td>~₹14.96 lakh</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>MG Windsor EV (Essence)</td>
            <td>Fixed glass roof (non-opening)</td>
            <td>~₹16.53 lakh</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Tata Curvv EV</td>
            <td>Panoramic sunroof</td>
            <td>Above ₹15 lakh</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Tata Nexon EV / Punch EV</td>
            <td>No factory sunroof (EV trims)</td>
            <td>From ~₹9.69–12.49 lakh</td>
            <td>Yes (no sunroof)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Confirm the exact variant features in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and put the XUV 3XO EV against
        any rival with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>The bottom line</h2>
      <p>
        If a sunroof is a must-have and your ceiling is ₹15 lakh, the Mahindra XUV 3XO EV is your answer
        — single-pane on the AX5, panoramic on the AX7L, both under the line. Everything else either has
        a fixed glass roof (MG Windsor) or sits above the budget (Tata Curvv). To see how the AX5 or
        AX7L fits your monthly outgo, use the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>, and weigh the longer
        run with{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">what an electric car really costs to own in India</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        Feature lists and variant pricing change, so re-verify the sunroof type and price on the exact
        variant with your dealer before booking. Start by comparing trims in the{" "}
        <Link href="/catalog/electric-cars">catalog</Link>.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
