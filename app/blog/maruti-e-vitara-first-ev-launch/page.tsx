import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Maruti e Vitara: India's Biggest Carmaker Goes Electric",
  description:
    "Maruti Suzuki's first EV, the e Vitara, launched in February 2026 from Rs 15.99 lakh with a battery-as-a-service option. Here's why it matters for buyers.",
  alternates: altsFor("/blog/maruti-e-vitara-first-ev-launch", "en"),
  openGraph: {
    title: "Maruti e Vitara: India's Biggest Carmaker Goes Electric",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="maruti-e-vitara-first-ev-launch">
      <p>
        Updated May 2026. On 18 February 2026, the company that sells more cars
        than anyone else in India finally went electric. Maruti Suzuki launched
        the e Vitara, its first battery-electric vehicle, with deliveries ramping
        through the year. For a brand built on the Alto, the Swift and the
        WagonR — cars that put a generation of Indian families behind the wheel
        for the first time — this is a genuine inflection point. When Maruti
        commits to a technology, the mass market tends to follow.
      </p>

      <h2>Pricing, and a clever twist on cost</h2>
      <p>
        The e Vitara arrives in three standard trims: Delta, Zeta and Alpha,
        priced at ₹15.99 lakh, ₹17.49 lakh and ₹19.79 lakh respectively
        (ex-showroom), with an Alpha Dual Tone at around ₹20.01 lakh. That places
        it squarely in the busiest, most contested corner of the Indian EV market.
        But the headline-grabber is the Battery-as-a-Service (BaaS) option: you
        can buy the car from around ₹10.99 lakh and pay separately for battery
        use at ₹3.99 per km.
      </p>
      <p>
        BaaS is significant because it attacks the two anxieties that keep
        mainstream buyers out of EVs: the high upfront price, and the fear that a
        battery will lose value and tank resale. By decoupling the battery from
        the purchase, Maruti lets buyers sidestep both. If battery resale worries
        you, it is worth reading how{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">
          battery health drives EV resale value
        </Link>{" "}
        in India before deciding whether ownership or BaaS suits you better.
      </p>

      <h2>What you get for the money</h2>
      <p>
        Mechanically, the e Vitara is offered with two battery options — a 49 kWh
        pack and a larger 61 kWh pack — with a claimed range of up to around 543
        km. As always, that is a laboratory figure; what you actually see depends
        on traffic, air-conditioning and driving style, so it pays to understand
        the gap between{" "}
        <Link href="/blog/real-world-range-vs-arai-india">
          real-world range and ARAI claims
        </Link>{" "}
        before you set your expectations. You can study the full specification on
        the{" "}
        <Link href="/catalog/maruti-suzuki-e-vitara-61-kwh">
          e Vitara 61 kWh
        </Link>{" "}
        page in our catalogue.
      </p>
      <p>
        On the reassurance front, Maruti backs the battery with an 8-year /
        1.6-lakh-km warranty. The feature list is contemporary: Level 2 ADAS, a
        360-degree camera and a sunroof feature on higher trims. Crucially for
        Indian families, the e Vitara has earned a 5-star Bharat NCAP rating,
        addressing safety head-on in a segment where it increasingly drives the
        purchase decision.
      </p>

      <h2>Why this rattles the ₹15-20 lakh fight</h2>
      <p>
        The mid-size electric SUV bracket between ₹15 lakh and ₹20 lakh is where
        India's EV battle is being won and lost. Maruti's entry intensifies a
        contest already crowded with{" "}
        <Link href="/catalog/brand/maruti-suzuki">Maruti</Link>'s established
        rivals — Tata, Mahindra, Hyundai and MG — each with a serious electric SUV
        in or near this band. The practical upshot for buyers is more leverage:
        more choice, sharper introductory pricing and faster feature upgrades as
        each brand tries to out-spec the others.
      </p>
      <p>
        It is also a credibility moment for the whole category. Plenty of Indian
        buyers have hung back, waiting for the country's most trusted, widest-
        serviced car brand to make the leap. With Maruti now selling an EV through
        the same dealer and workshop network that put their last three cars on the
        road, a major psychological barrier falls away. That is exactly the kind
        of shift visible in the broader{" "}
        <Link href="/blog/india-ev-sales-fy2026">FY2026 EV sales data</Link>,
        where electric cars grew far faster than the overall market.
      </p>

      <h2>How it fits the wider market</h2>
      <p>
        The e Vitara lands in the same season as another attention-grabbing move
        at the premium end —{" "}
        <Link href="/blog/tesla-model-y-price-cut-india-2026">
          Tesla's Model Y price cut
        </Link>{" "}
        — underlining that 2026 is the year Indian EV pricing got serious across
        every tier. Where Tesla is fighting on aspiration and technology, Maruti
        is fighting on the thing it has always understood best: accessibility and
        running cost.
      </p>
      <p>
        If you are weighing the e Vitara against its rivals, the sensible next
        step is to put the contenders side by side rather than judging on
        brochures alone. Our{" "}
        <Link href="/compare">comparison tool</Link> lets you line them up on
        range, battery size, charging speed and on-road price. And if this is your
        first electric car, work through the{" "}
        <Link href="/blog/how-to-choose-first-ev-india">
          complete first-EV checklist
        </Link>{" "}
        so the BaaS-versus-ownership question, charging setup and route planning
        are all settled before you book.
      </p>

      <h2>The bottom line</h2>
      <ul>
        <li>
          Maruti's e Vitara starts at ₹15.99 lakh (ex-showroom), or from around
          ₹10.99 lakh under BaaS with battery use at ₹3.99/km.
        </li>
        <li>
          49 kWh and 61 kWh batteries, claimed range up to around 543 km, and an
          8-year / 1.6-lakh-km battery warranty.
        </li>
        <li>
          Level 2 ADAS, 360-degree camera, sunroof and a 5-star Bharat NCAP
          rating bring the safety and feature set up to expectation.
        </li>
        <li>
          Its real impact is psychological: the mass-market brand going electric
          legitimises EVs for the buyers who were still on the fence.
        </li>
      </ul>
      <p>
        The e Vitara may not be the cheapest or the longest-range EV on sale, but
        coming from Maruti, it might be the most consequential. When the brand
        that taught India to drive starts selling electric, the question for many
        buyers shifts from "if" to "which one".
      </p>

      <h2>Sources</h2>
      <p>
        Figures above are as reported by the publishers and may change.{" "}
        <a
          href="https://www.marutisuzuki.com/corporate/media/press-releases/2026/february/india-goes-electric-with-maruti-suzuki-e-vitara-introductory-baas-price-starts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maruti Suzuki
        </a>{" "}
        ·{" "}
        <a
          href="https://www.autocarindia.com/cars/maruti-suzuki/e-vitara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Autocar India
        </a>
      </p>
    </ArticleShell>
  );
}
