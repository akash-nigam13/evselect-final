import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which is the best electric scooter under ₹1 lakh in India?",
    a: "For range, the TVS Orbiter (claimed ~158 km, from ~₹0.85 lakh) and Pure EV ePluto 7G (~151 km) lead. For brand trust, the Bajaj Chetak C25 and Honda QC1 stand out. The best pick depends on whether you prioritise range, brand or price.",
  },
  {
    q: "How much real-world range do sub-₹1-lakh scooters give?",
    a: "Expect roughly 20–30% less than the claimed figure. A scooter claiming 150 km realistically covers around 100–120 km in city use, which is more than enough for daily commuting between charges.",
  },
  {
    q: "Can subsidies make these scooters even cheaper?",
    a: "Yes. The central PM E-Drive scheme and several state subsidies can reduce the effective price further. Check our electric scooter subsidy guide and confirm the current on-road price for your state before buying.",
  },
  {
    q: "Are budget electric scooters good for highways?",
    a: "Not really. Most under ₹1 lakh top out around 60–70 kmph and are tuned for city commuting. They are ideal for daily urban runs, not sustained highway speeds.",
  },
];

export const metadata: Metadata = {
  title: "Best Electric Scooters Under ₹1 Lakh in India (2026)",
  description:
    "The best electric scooters under ₹1 lakh in India for 2026 — TVS Orbiter, Pure EV ePluto 7G, Bajaj Chetak C25, Honda QC1, Kinetic Green Zulu and Joy Nanu+, ranked on range, speed and value, with PM E-Drive subsidy notes.",
  alternates: altsFor("/blog/best-electric-scooters-under-1-lakh-india", "en"),
  openGraph: {
    title: "Best Electric Scooters Under ₹1 Lakh in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="best-electric-scooters-under-1-lakh-india">
      <p>
        Under ₹1 lakh is where the electric scooter makes the most sense for the most people — a clean,
        cheap-to-run city commuter that costs less than many petrol scooters once you factor in fuel
        savings. This guide ranks the best electric scooters under ₹1 lakh in India in 2026, with honest
        notes on what each one is best for. All prices are indicative ex-showroom and shift with
        discounts, variants and subsidies, so confirm the on-road figure for your city before booking.
        And keep one rule in mind: claimed (ARAI/IDC) range typically runs about{" "}
        <strong>20–30% above real-world</strong> range once you ride in traffic with a pillion. Good
        news on price, too — the central <strong>PM E-Drive</strong> scheme and state subsidies can cut
        these prices further; see our{" "}
        <Link href="/blog/electric-scooter-subsidy-india">electric scooter subsidy guide</Link>.
      </p>

      <h2>1. TVS Orbiter — the range leader with a trusted badge</h2>
      <p>
        From about ₹0.85 lakh (up to ~₹0.999 lakh), the Orbiter claims the longest range in this group
        at ~158 km and tops out at 68 kmph. Backed by TVS's wide service network, it is the standout
        all-rounder for buyers who want maximum range and brand reassurance without crossing ₹1 lakh.
        Real-world range lands around 110–120 km, comfortably covering a week of city commuting.
      </p>

      <h2>2. Pure EV ePluto 7G — long range at a lower price</h2>
      <p>
        Priced roughly ₹0.78–0.93 lakh, the ePluto 7G claims ~151 km and also reaches 68 kmph. It
        undercuts the Orbiter while offering nearly the same range, making it a smart value pick if you
        want long legs for the least money and are comfortable with a smaller brand's network.
      </p>

      <h2>3. Bajaj Chetak C25 — the brand-trust pick</h2>
      <p>
        At about ₹0.91–0.96 lakh, the Chetak C25 claims ~113 km and 55 kmph. Its appeal is the Bajaj
        badge, metal-bodied build quality and a polished, premium feel. It trades outright range and
        top speed for refinement and reassurance — ideal for a buyer who values trust and finish over
        the longest spec-sheet range.
      </p>

      <h2>4. Honda QC1 — Honda reliability, city-only focus</h2>
      <p>
        The QC1 (about ₹0.9–0.95 lakh) is Honda's accessible entry, claiming ~80 km, 2.4 bhp and a
        50 kmph top speed. Range and speed are modest, but the draw is Honda's reputation for
        reliability and a vast service network. It is a no-fuss commuter for short, predictable daily
        runs.
      </p>

      <h2>5. Kinetic Green Zulu — value with a familiar name</h2>
      <p>
        From around ₹0.8–0.95 lakh, the Zulu claims ~104 km and 60 kmph. Kinetic Green has solid
        experience in electric two- and three-wheelers, and the Zulu balances a usable range with a
        friendly price, making it a sensible middle-ground choice.
      </p>

      <h2>6. Joy e-bike Gen Next Nanu+ — the budget entry</h2>
      <p>
        The Nanu+ is the cheapest here at roughly ₹0.7–0.86 lakh, claiming ~100 km but a lower 45 kmph
        top speed. It is best seen as a low-speed, low-cost city runabout for short hops and tight
        budgets rather than a quick commuter.
      </p>

      <h2>At a glance: best electric scooters under ₹1 lakh</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>From (ex-showroom)</th>
            <th>Claimed range</th>
            <th>Top speed</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TVS Orbiter</td>
            <td>~₹0.85 lakh</td>
            <td>~158 km</td>
            <td>68 kmph</td>
            <td>Range + brand trust</td>
          </tr>
          <tr>
            <td>Pure EV ePluto 7G</td>
            <td>~₹0.78 lakh</td>
            <td>~151 km</td>
            <td>68 kmph</td>
            <td>Range value</td>
          </tr>
          <tr>
            <td>Bajaj Chetak C25</td>
            <td>~₹0.91 lakh</td>
            <td>~113 km</td>
            <td>55 kmph</td>
            <td>Build + brand</td>
          </tr>
          <tr>
            <td>Honda QC1</td>
            <td>~₹0.9 lakh</td>
            <td>~80 km</td>
            <td>50 kmph</td>
            <td>Reliability</td>
          </tr>
          <tr>
            <td>Kinetic Green Zulu</td>
            <td>~₹0.8 lakh</td>
            <td>~104 km</td>
            <td>60 kmph</td>
            <td>Balanced value</td>
          </tr>
          <tr>
            <td>Joy Gen Next Nanu+</td>
            <td>~₹0.7 lakh</td>
            <td>~100 km</td>
            <td>45 kmph</td>
            <td>Cheapest entry</td>
          </tr>
        </tbody>
      </table>
      <p>
        See every variant and spec in our{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>, and compare any two
        models head-to-head with the{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>What to expect at this price</h2>
      <p>
        Almost everything under ₹1 lakh is a <strong>city commuter</strong> with a top speed of roughly
        60–70 kmph. That is by design: these scooters are built for stop-start urban riding, not
        highways. The trade-offs to weigh are range (the Orbiter and ePluto lead), top speed and brand
        network. If you ride mostly short, predictable city distances and can charge at home or work,
        any of these will serve you well — and your running cost will be a fraction of a petrol
        scooter's.
      </p>

      <h2>Don't forget the subsidies</h2>
      <p>
        The effective price you pay can be meaningfully lower than the figures above once central and
        state incentives apply. The PM E-Drive scheme is the big one, but several states layer their own
        benefits on top. Work out what applies to you in our{" "}
        <Link href="/blog/electric-scooter-subsidy-india">electric scooter subsidy guide</Link>{" "}
        before you commit.
      </p>

      <h2>More electric scooter guides</h2>
      <p>
        Want the broader picture? See our{" "}
        <Link href="/blog/top-5-electric-scooters-india-2026">top 5 electric scooters in India for 2026</Link>{" "}
        for the overall best buys, or step up to the{" "}
        <Link href="/blog/longest-range-electric-scooters-india">longest-range electric scooters</Link>{" "}
        if your daily distance is higher.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
