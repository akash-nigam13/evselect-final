import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Home EV Charging in India 2026: Setup & Cost Guide",
  description:
    "What it costs to charge an EV at home in India, the charger types you need, install realities, society charging rules, and solar pairing — explained simply.",
  alternates: altsFor("/blog/home-ev-charging-cost-india", "en"),
  openGraph: { title: "Home EV Charging in India 2026: Setup & Cost Guide", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="home-ev-charging-cost-india">
      <p>
        Most EV owners in India charge at home, and once you do, public chargers start to feel
        like a backup plan rather than a daily necessity. You plug in overnight, wake up to a
        full battery, and skip the fuel-pump queue entirely. The catch is that home charging
        involves a few decisions — which charger to buy, what your wiring can handle, and how
        your society or building feels about it. This guide walks through all of it in plain
        terms, with realistic 2026 numbers, so you can set up home charging without
        over-spending or running into safety problems later.
      </p>

      <h2>The charger types you can actually install</h2>
      <p>
        Home charging falls into three practical buckets. The simplest is the portable charger
        that ships with most EVs — a 2.3 to 3.3 kW unit that plugs into a regular 15A or 16A
        wall socket. It is slow but genuinely useful for scooters and as a travel backup. Next
        is the wall-box on a single-phase connection, typically rated 3.3 to 7.4 kW, which is
        what most car owners eventually fit. If your home already has a three-phase connection,
        an 11 kW wall-box is the fastest sensible option for a residence.
      </p>
      <p>
        The right pick depends on your car, your daily distance, and your electrical supply. A
        7.4 kW box is the sweet spot for most four-wheelers, while scooter owners rarely need
        more than the bundled portable charger. If you are still choosing a vehicle, it helps to{" "}
        <Link href="/compare-electric-vehicles">compare any two EVs</Link> on their onboard AC charger ratings,
        because a car capped at 3.3 kW will not charge faster no matter how powerful your
        wall-box is. You can also browse the full <Link href="/catalog">EV catalog</Link> to see
        which models support 7.4 kW or 11 kW home charging.
      </p>

      <h2>What it costs to run, day to day</h2>
      <p>
        This is where EVs quietly win. Domestic electricity in most Indian states runs roughly
        ₹6–9 per kWh depending on your slab and DISCOM. A typical car battery of around 40 kWh
        therefore costs about ₹240–360 for a full charge from near-empty. Translated to running
        cost, that is roughly ₹1–1.5 per kilometre against ₹6–7 per kilometre for a comparable
        petrol car at ₹100–110 per litre.
      </p>
      <p>
        Over a year of city driving, that gap compounds into real savings, and home charging is just
        one piece of <Link href="/blog/cost-of-owning-an-electric-car-in-india">the complete EV running-cost guide</Link>. To see the numbers
        for your own usage and electricity tariff, run them through the{" "}
        <Link href="/ev-calculators">cost and range calculators</Link>, and for the longer-term picture
        read our breakdown of the{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">
          five-year cost of petrol versus electric
        </Link>
        . Just remember that real consumption depends on speed, AC use, and terrain — the{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range guide</Link> explains
        why your per-km cost can drift a little from the ideal figure.
      </p>

      <h2>How long charging actually takes</h2>
      <p>
        Charging time is simply battery size divided by charger power, minus a little overhead.
        Here is how that plays out for a typical 40 kWh car pack from low to full:
      </p>
      <table>
        <thead>
          <tr>
            <th>Charger</th>
            <th>Power</th>
            <th>Rough time for ~40 kWh</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Portable (socket)</td>
            <td>2.3–3.3 kW</td>
            <td>12 hours and up</td>
            <td>Scooters, occasional top-ups</td>
          </tr>
          <tr>
            <td>Wall-box, single-phase</td>
            <td>3.3–7.4 kW</td>
            <td>5–6 hours at 7.4 kW</td>
            <td>Most daily car owners</td>
          </tr>
          <tr>
            <td>Wall-box, three-phase</td>
            <td>11 kW</td>
            <td>Around 4 hours</td>
            <td>High-mileage homes</td>
          </tr>
        </tbody>
      </table>
      <p>
        The key insight is that home charging is meant to happen while you sleep. Even a slow
        3.3 kW connection refills a normal day of commuting overnight, so the headline speed
        matters far less at home than it does at a highway stop. For fast charging on long
        trips, lean on public networks instead — our guide to{" "}
        <Link href="/blog/ev-charging-infrastructure-india">India's charging infrastructure</Link>{" "}
        and the latest on the{" "}
        <Link href="/blog/india-ev-charging-network-2026">2026 charging network</Link> cover that
        side of the picture.
      </p>

      <h2>Installation realities you should plan for</h2>
      <p>
        A wall-box is not a plug-and-play gadget. A safe installation needs a dedicated circuit
        with its own MCB and an RCCB for earth-leakage protection, proper earthing, and adequately
        sized cable from your meter to the parking spot. If your sanctioned load is already
        stretched, you may need a small DISCOM load-sanction upgrade before adding a 7.4 kW or
        11 kW unit.
      </p>
      <ul>
        <li>Wall-box hardware plus professional installation usually lands around ₹25,000–60,000.</li>
        <li>Longer cable runs from the meter to the parking bay add to that cost.</li>
        <li>A licensed electrician should size the MCB, RCCB, and cable to the charger rating.</li>
        <li>Outdoor parking needs a weatherproof, IP-rated unit and a covered mounting point.</li>
      </ul>
      <p>
        Spend a little extra here — cutting corners on protection devices is exactly where home
        charging goes wrong. Understanding how your pack draws and stores energy also helps; our
        primer on <Link href="/about-ev-batteries">EV batteries</Link> is worth a read before you
        finalise a charger.
      </p>

      <h2>Charging in an apartment or society</h2>
      <p>
        For flat owners, the biggest hurdle is usually not the charger but the committee. Many
        societies now grant a no-objection certificate (NOC) for charging in your allotted
        parking spot, and several states have moved toward a "right to charge" framework that
        makes it harder for associations to refuse outright. The cleanest setup is a separate
        sub-meter for your charger so your usage is billed to you and not split across common-area
        electricity.
      </p>
      <p>
        Approach the committee with a written proposal: the charger rating, the wiring plan, who
        pays for installation, and how billing will be handled through shared metering or a
        dedicated meter. Framing it as a safe, metered, self-funded addition removes most
        objections. If you are weighing whether your building can support charging before you
        buy, that decision belongs near the top of any{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV checklist</Link>.
      </p>

      <h2>Solar pairing, net metering, and safety</h2>
      <p>
        If you have a rooftop solar system, charging during daylight can push your effective
        fuel cost close to zero. Under net metering, surplus generation feeds back to the grid
        for credits, and timing your charge to sunny hours uses that energy directly. Even a
        modest rooftop array meaningfully offsets a daily commute, and the economics keep
        improving as panel prices fall.
      </p>
      <p>
        On safety, a few rules are non-negotiable. Fit surge protection so grid spikes do not
        reach the charger, use a genuine IP-rated unit for any outdoor installation, and never
        run a wall-box or fast charge through an extension cord or a multi-plug board. Use the
        cable and connector supplied or specified for your car. Get all of this right once and
        home charging becomes the most boring, reliable part of EV ownership — which is exactly
        what you want. When you are ready to pick a model, <Link href="/compare-electric-vehicles">compare EVs</Link>{" "}
        side by side or explore the <Link href="/catalog">catalog</Link> to match a car to your
        charging setup.
      </p>
    </ArticleShell>
  );
}
