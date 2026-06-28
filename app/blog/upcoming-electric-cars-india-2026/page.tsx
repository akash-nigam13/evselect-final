import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which new electric cars are launching in India in 2026?",
    a: "Expected launches include the Tata Sierra EV, Mahindra XEV 9S, Maruti e Vitara, Hyundai Inster, Citroen Basalt EV, Tata Altroz EV, Kia Syros EV and the premium MG Cyberster. Dates and prices are estimates and not officially confirmed; we update this list as each car launches.",
  },
  {
    q: "What will the cheapest upcoming EV in India cost?",
    a: "The Hyundai Inster is expected to be among the most affordable at roughly ₹11–13 lakh, likely arriving late 2026. The Tata Altroz EV and Citroen Basalt EV are also expected to target the mass-market end. All figures are estimates until launch.",
  },
  {
    q: "Is the Maruti e Vitara confirmed for India?",
    a: "Maruti's first electric SUV, the e Vitara, is expected to launch with a starting price around ₹15.99 lakh. Treat the figure as indicative until Maruti confirms official pricing and variants.",
  },
  {
    q: "Are these prices and dates official?",
    a: "No. Every price and timeline here is an estimate based on the latest available information, not an official announcement. We refresh this guide as cars are officially launched and priced.",
  },
];

export const metadata: Metadata = {
  title: "Upcoming Electric Cars in India (2026): Launches to Watch",
  description:
    "Upcoming electric cars in India for 2026 — expected launches including Tata Sierra EV, Mahindra XEV 9S, Maruti e Vitara, Hyundai Inster, Citroen Basalt EV, Tata Altroz EV, Kia Syros EV and MG Cyberster, with estimated prices.",
  alternates: altsFor("/blog/upcoming-electric-cars-india-2026", "en"),
  openGraph: {
    title: "Upcoming Electric Cars in India (2026): Launches to Watch",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="upcoming-electric-cars-india-2026">
      <p>
        2026 is shaping up to be one of the busiest years yet for new electric cars in India, with every
        major brand lining up a launch. This guide rounds up the upcoming EVs worth watching, from
        mass-market hatchbacks and compact SUVs to a flagship sports car. An important caveat first:
        every price and launch window below is an <strong>estimate</strong> drawn from the latest
        available information, not an official announcement — and prices, where quoted, are indicative
        ex-showroom. We update this guide as each car is officially launched and priced, so bookmark it
        and check back. To compare what is already on sale today, head to our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> and{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>Tata Sierra EV — the most anticipated comeback</h2>
      <p>
        The revival of the iconic Sierra nameplate as an electric SUV is arguably the most-watched
        launch of the year. Expect a striking design, a sizeable battery aimed at a competitive range,
        and Tata's growing EV know-how behind it. Details remain estimates until launch — we are tracking
        it closely in our dedicated piece on the{" "}
        <Link href="/blog/tata-sierra-ev-launch-2026">Tata Sierra EV launch in 2026</Link>.
      </p>

      <h2>Mahindra XEV 9S — the three-row electric SUV</h2>
      <p>
        Building on Mahindra's well-received electric SUV family, the XEV 9S is expected to bring
        three-row practicality and the brand's INGLO platform to buyers who need space without giving up
        electric running. Positioning and pricing are not yet confirmed.
      </p>

      <h2>Maruti e Vitara — Maruti's first EV</h2>
      <p>
        India's biggest carmaker finally goes electric with the e Vitara, expected to start around
        <strong> ₹15.99 lakh</strong>. The big draw will be Maruti's unmatched service and dealer
        network, which could reassure first-time EV buyers more than any spec sheet. Treat the price as
        indicative until Maruti confirms it.
      </p>

      <h2>Hyundai Inster — the affordable city EV</h2>
      <p>
        The Inster is expected to be one of the more affordable new EVs, at roughly{" "}
        <strong>₹11–13 lakh</strong> and likely arriving <strong>late 2026</strong>. A compact,
        characterful city car with Hyundai engineering behind it could be a strong rival to Tata and MG
        at the value end of the market.
      </p>

      <h2>Citroen Basalt EV — the coupe-SUV play</h2>
      <p>
        Citroen is expected to electrify its Basalt coupe-SUV, offering distinctive styling and the
        brand's emphasis on ride comfort. Pricing and range are estimates for now, but it should slot
        into the increasingly crowded mid-size space.
      </p>

      <h2>Tata Altroz EV — premium hatchback goes electric</h2>
      <p>
        An electric version of Tata's premium Altroz hatchback is anticipated to widen the affordable EV
        choice further, leaning on Tata's existing EV ecosystem and 5-star safety reputation. Final
        battery and price details are not yet official.
      </p>

      <h2>Kia Syros EV — a compact SUV from Kia</h2>
      <p>
        Kia is expected to add an electric Syros to its range, bringing the brand's feature-rich approach
        to the compact electric SUV segment. As with the rest of this list, specifics remain estimates
        until launch.
      </p>

      <h2>MG Cyberster — the premium electric roadster</h2>
      <p>
        At the opposite end sits the MG Cyberster, a premium electric sports car with scissor doors and
        serious performance aspirations. It will be a low-volume halo model rather than a mass-market
        buy, and its price will reflect that.
      </p>

      <h2>At a glance: upcoming EVs in 2026 (all estimates)</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Type</th>
            <th>Expected price</th>
            <th>Expected timing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tata Sierra EV</td>
            <td>SUV</td>
            <td>TBC</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>Mahindra XEV 9S</td>
            <td>3-row SUV</td>
            <td>TBC</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>Maruti e Vitara</td>
            <td>SUV</td>
            <td>~₹15.99 lakh (est.)</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>Hyundai Inster</td>
            <td>City EV</td>
            <td>~₹11–13 lakh (est.)</td>
            <td>Late 2026 (est.)</td>
          </tr>
          <tr>
            <td>Citroen Basalt EV</td>
            <td>Coupe-SUV</td>
            <td>TBC</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>Tata Altroz EV</td>
            <td>Hatchback</td>
            <td>TBC</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>Kia Syros EV</td>
            <td>Compact SUV</td>
            <td>TBC</td>
            <td>2026 (est.)</td>
          </tr>
          <tr>
            <td>MG Cyberster</td>
            <td>Roadster (premium)</td>
            <td>Premium</td>
            <td>2026 (est.)</td>
          </tr>
        </tbody>
      </table>

      <h2>Should you wait or buy now?</h2>
      <p>
        It is tempting to hold out for the next launch, but the EV market always has something around the
        corner — wait forever and you never buy. If a car already on sale fits your needs and budget,
        and you can charge at home, there is little reason to delay. New launches do pressure prices and
        widen choice, though, so it pays to know what is coming. Whichever way you lean, remember that
        manufacturer range claims (ARAI) typically run <strong>20–30% above real-world</strong> figures —
        our guide to{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>{" "}
        explains how to read the numbers, and the{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">best electric cars under ₹15 lakh</Link>{" "}
        guide shows what your money buys today.
      </p>

      <h2>More on what's coming</h2>
      <p>
        For the cars already proven on Indian roads, see our{" "}
        <Link href="/blog/best-electric-cars-india-2026">best electric cars in India for 2026</Link>, and
        browse live pricing and specs any time in the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
