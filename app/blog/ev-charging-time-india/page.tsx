import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How long does it take to fully charge an electric car in India?",
    a: "On a 7.2 kW home wall box, most cars charge fully in about 6–8 hours — ideal overnight. On a 50 kW public DC fast charger you'll reach 80% in roughly an hour, while ultra-fast chargers can do 80% in under 20 minutes for EVs that support them.",
  },
  {
    q: "Why is charging quoted as 10–80% and not 0–100%?",
    a: "Lithium-ion batteries slow their charging speed near full to protect the cells, so the last 20% is disproportionately slow. The 10–80% window is the fast, useful part — which is why road-trip charging stops at 80%.",
  },
  {
    q: "Does a bigger home charger always charge faster?",
    a: "Only up to your car's onboard limit. If the EV accepts a maximum of 7.2 kW AC, an 11 kW wall box still charges it at 7.2 kW. Match the charger to the car's onboard capacity.",
  },
  {
    q: "How long does an electric scooter take to charge?",
    a: "Most electric scooters take about 4–6 hours for a full charge from a normal home socket, reaching 0–80% in roughly 3–4.5 hours. Fast-charging networks can add 20–70% in around 25 minutes.",
  },
  {
    q: "Does charging time affect battery life?",
    a: "Frequent ultra-fast DC charging and regularly charging to 100% add stress over years. For daily use, slower AC home charging and keeping the battery between roughly 20–80% is gentler on the pack.",
  },
];

export const metadata: Metadata = {
  title: "EV Charging Time in India (2026): How Long Does It Take to Charge an Electric Car?",
  description:
    "A clear 2026 guide to EV charging time in India — home AC vs DC fast charging, the 10–80% rule, scooter vs car times, and the factors that decide how long you actually wait.",
  alternates: altsFor("/blog/ev-charging-time-india", "en"),
  openGraph: {
    title: "EV Charging Time in India (2026): How Long Does It Take to Charge an Electric Car?",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-charging-time-india">
      <p>
        "How long does it take to charge an electric car?" is the first question almost every Indian
        buyer asks — and the honest answer is the one nobody likes: it depends. The same EV can be
        full in 45 minutes or take all night, and both are normal. The number that matters isn't a
        single headline figure but a handful of variables — your charger, your car's onboard limit,
        the battery size and even the weather. This guide cuts through it with realistic{" "}
        <strong>EV charging time</strong> figures for India in 2026, so you know exactly what to
        expect before you plug in.
      </p>

      <h2>The one rule that explains everything: power decides speed</h2>
      <p>
        Charging speed is measured in kilowatts (kW) — and the bigger the kW, the faster the battery
        fills. A rough mental model: charging time is your battery size in kilowatt-hours (kWh)
        divided by the charging power in kW. A 40 kWh car on a 7 kW charger is roughly a six-hour
        job; the same car on a 50 kW fast charger is closer to an hour. That single ratio is why two
        people with the same car quote wildly different times — they're plugging into very different
        chargers. If the connector and AC/DC jargon is new to you, our guide to{" "}
        <Link href="/blog/ev-charger-types-connectors-india">EV charger types and connectors</Link>{" "}
        explains which plug does what.
      </p>

      <h2>AC vs DC: the real divide</h2>
      <p>
        Every charging conversation comes down to two families. <strong>AC charging</strong> is what
        you get at home and at most slow public points — power flows through your car's built-in
        "onboard charger," which is the real bottleneck. <strong>DC fast charging</strong> bypasses
        that onboard converter and pushes power straight into the battery, which is why it's measured
        in tens or hundreds of kW rather than single digits. AC is for parking-and-charging over
        hours; DC is for topping up fast on a journey. Almost every EV owner does the vast majority
        of charging on slow AC at home and only occasionally uses DC — a pattern our{" "}
        <Link href="/blog/home-ev-charging-cost-india">home EV charging guide</Link> walks through in
        detail.
      </p>

      <h2>Home charging time: plan around overnight</h2>
      <p>
        At home, the charger's rating and your car's onboard limit together set the pace. Here's what
        the common setups actually deliver for a typical mid-size electric car.
      </p>
      <table>
        <thead>
          <tr>
            <th>Home setup</th>
            <th>Power</th>
            <th>Typical full charge (car)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Portable charger, 15A socket</td>
            <td>~2.3–3.3 kW</td>
            <td>15–24 hours</td>
          </tr>
          <tr>
            <td>Wall box, single phase</td>
            <td>7.2 kW</td>
            <td>6–8 hours</td>
          </tr>
          <tr>
            <td>Wall box, three phase</td>
            <td>11 kW</td>
            <td>4–6 hours</td>
          </tr>
        </tbody>
      </table>
      <p>
        The practical takeaway: a 7.2 kW wall box is the sweet spot for most homes because it
        comfortably refills a car overnight, so you wake up "full" every morning and rarely think
        about charging at all. The bundled portable cable works, but at 15–24 hours for a big
        battery it's really a top-up tool, not a primary charger. One important catch — a bigger wall
        box won't help if your car's onboard charger is capped lower. If the EV only accepts 7.2 kW
        of AC, an 11 kW box still charges it at 7.2 kW.
      </p>

      <h2>DC fast charging time: the 10–80% number that actually matters</h2>
      <p>
        On a public DC fast charger, you'll see times quoted as "10–80%," not 0–100% — and that's
        deliberate, not marketing spin. Lithium-ion batteries charge quickest in the middle of their
        range and then deliberately slow down as they near full to protect the cells. So the last
        20% can take almost as long as the first 60%. That's why fast-charging on a road trip means
        stopping at 80% and driving on, rather than waiting for a full battery. Here's the realistic
        2026 picture for cars in India.
      </p>
      <table>
        <thead>
          <tr>
            <th>DC charger</th>
            <th>Typical 10–80% time (car)</th>
            <th>Best suited to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25 kW</td>
            <td>90–120 minutes</td>
            <td>City top-ups</td>
          </tr>
          <tr>
            <td>50 kW</td>
            <td>~55–60 minutes</td>
            <td>Most highway corridors</td>
          </tr>
          <tr>
            <td>120–150 kW</td>
            <td>~25–35 minutes</td>
            <td>Newer, bigger-battery EVs</td>
          </tr>
          <tr>
            <td>250 kW+ (ultra-fast)</td>
            <td>~18–20 minutes</td>
            <td>Premium EVs that support it</td>
          </tr>
        </tbody>
      </table>
      <p>
        For context, a Tata Nexon EV takes roughly 56–60 minutes from 10–80% on a 50 kW charger,
        while ultra-fast cars like the Hyundai Ioniq 5 and Kia EV6 can hit 80% in around 18 minutes
        on a 350 kW unit — and Mahindra's BE 6 and XEV 9e manage about 20 minutes. The crucial point
        is that you only charge as fast as the <em>slower</em> of the two: a 30-minute car on a 50 kW
        charger is limited by the charger, and a 50 kW car on a 350 kW charger is limited by the car.
      </p>

      <h2>Electric scooters and bikes: a different rhythm</h2>
      <p>
        Two-wheelers have far smaller batteries — typically 2.5–5 kWh against 30–60 kWh for a car —
        so the maths changes completely. Most electric scooters charge from a regular 5A or 15A home
        socket and take roughly 4–6 hours for a full charge: an Ather or Ola S1 reaches 0–80% in
        about 3–4.5 hours on the bundled home charger, and 0–100% in five to six and a half hours.
        Fast-charging networks change that for short bursts — Ola's Hypercharger can add 20–70% in
        around 25 minutes. Because they sip so little power, scooters are the easiest EVs to live
        with: plug in when you get home, ready by morning, no special wiring needed. You can compare
        charging specs across models in the{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link>.
      </p>

      <h2>What slows your charge down (and what speeds it up)</h2>
      <p>
        Real-world times rarely match the brochure, and a few Indian-specific factors explain the
        gap. <strong>Temperature</strong> matters most: a cold battery charges slowly, but the bigger
        issue here is heat — in peak summer, a hot pack or a DC charger throttling itself to avoid
        overheating can stretch your session. <strong>State of charge</strong> is the next lever; the
        10–80% window is fast, the final 20% is slow, so topping up little and often beats charging
        to 100% every time. <strong>Battery size and your car's charge curve</strong> set the
        ceiling. And <strong>charger sharing</strong> is real — many public stations split power
        between two cars, so a "60 kW" unit may deliver half that when both bays are busy. Charging
        habits also affect long-term health, which we cover in our piece on{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range versus ARAI claims</Link>.
      </p>

      <h2>How much charging do you actually need?</h2>
      <p>
        Here's the reframe that calms most range anxiety: you rarely charge from empty. If you drive
        40–50 km a day and charge at home, you're only ever replacing what you used — an hour or two
        on a 7.2 kW box, often less. The full 0–100% time only matters before a long trip, and even
        then a single 30–60 minute fast-charge stop usually covers a highway leg. Work out how much
        range your daily driving really needs with the{" "}
        <Link href="/ev-calculators/ev-range-calculator">EV range calculator</Link> before you fixate
        on charge times — most buyers discover they need far less than they feared. And if you're
        still planning your charging setup, the{" "}
        <Link href="/blog/ev-charging-infrastructure-india">India charging infrastructure guide</Link>{" "}
        maps the public network and best road-trip corridors.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The short version: charge slowly at home for daily driving, fast-charge to 80% on trips, and
        stop worrying about the 0–100% number you'll rarely use. When you're shortlisting, compare
        real charging specs side by side in the{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link> or browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> to see which models charge
        fastest for your budget.
      </p>
    </ArticleShell>
  );
}
