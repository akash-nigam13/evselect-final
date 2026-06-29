import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How many solar panels do I need to charge an electric car in India?",
    a: "It depends on how far you drive. A typical EV uses about 6–8 units a day for a 40–55 km commute. Since 1 kW of rooftop solar generates roughly 4–5 units a day in India, a 2 kW array (about four to five panels) usually covers an everyday commute, and a 3 kW system comfortably handles both your car and normal household use.",
  },
  {
    q: "Can I charge my EV directly from solar panels?",
    a: "Yes during the day, but most people don't charge then because they're out with the car. The practical setup is a grid-tied (on-grid) solar system with net metering: your panels export surplus power by day for credits, and you charge the car at night drawing on those banked units. A battery lets you store solar for night charging, but it adds significant cost.",
  },
  {
    q: "How much does a solar system to charge an EV cost in India in 2026?",
    a: "A fully installed rooftop system runs roughly ₹55,000–85,000 per kW. A 3 kW system costs about ₹1.6–2.25 lakh before subsidy, dropping to around ₹85,000–1.5 lakh after the PM Surya Ghar subsidy of up to ₹78,000. Most households recover that cost in roughly 4–6 years through electricity savings.",
  },
  {
    q: "Does the PM Surya Ghar subsidy apply to EV charging?",
    a: "The subsidy is for the rooftop solar system itself, not the EV charger — but the cheap solar power it produces can be used for anything, including charging your car. You get ₹30,000/kW up to 2 kW, ₹18,000/kW for the third kW, capped at ₹78,000 for systems of 3 kW and above.",
  },
];

export const metadata: Metadata = {
  title: "Charge Your EV With Solar Panels in India (2026): Cost & Setup",
  description:
    "How to charge an electric car with rooftop solar in India — system sizing, the PM Surya Ghar subsidy, net metering for night charging, real costs and per-km savings, explained simply.",
  alternates: altsFor("/blog/charge-ev-with-solar-panels-india", "en"),
  openGraph: {
    title: "Charge Your EV With Solar Panels in India (2026): Cost & Setup",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="charge-ev-with-solar-panels-india">
      <p>
        Pair an electric car with a rooftop solar system and you get close to the holy grail of
        motoring: a car you fuel from your own roof, at a cost that drifts toward zero. It sounds
        almost too good — but the maths genuinely works in India, where strong sunshine, falling
        panel prices and a generous central subsidy line up neatly. The catch is that solar and EV
        charging don't automatically fit together, because the sun shines while your car is usually
        out being driven. This guide explains how to{" "}
        <strong>charge your EV with solar panels in India</strong> the practical way — how big a
        system you actually need, what it costs after subsidy, how net metering solves the
        daytime problem, and what you really save per kilometre.
      </p>

      <h2>Why solar and EVs are a natural pair in India</h2>
      <p>
        An EV's only running cost worth worrying about is electricity. If you can make that
        electricity yourself, you remove the single biggest variable in the cost of ownership.
        India is unusually well-suited to this: most of the country gets strong, consistent
        sunlight, and one kilowatt of rooftop solar generates roughly 4–5 units (kWh) a day on
        average — about 1,500 units a year. An electric car, meanwhile, uses only about 10–15 units
        to cover 100 km. So even a modest array produces far more than a typical commute needs,
        and any surplus offsets the rest of your household bill. The economics only improve as
        panel prices keep sliding. If you're still weighing the broader running-cost picture,
        start with our{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">
          complete guide to the cost of owning an electric car in India
        </Link>
        , then come back to the solar layer on top.
      </p>

      <h2>How big a solar system do you actually need?</h2>
      <p>
        Sizing is where most people overthink it. Work backwards from your driving. A car that
        does a 40–55 km daily commute uses roughly 6–8 units a day. At 4–5 units per kW per day,
        a 2 kW array more or less covers that commute on its own, and a 3 kW system comfortably
        handles the car plus everyday household loads. Heavy drivers, or homes with big air-
        conditioning bills, lean toward 4–5 kW. Roof space is the other constraint: budget around
        80–100 sq ft per kW, so a 3 kW system needs roughly 250–300 sq ft of shade-free roof.
      </p>
      <table>
        <thead>
          <tr>
            <th>System size</th>
            <th>Daily generation</th>
            <th>Roof area</th>
            <th>Good for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 kW</td>
            <td>~8–10 units</td>
            <td>~160–200 sq ft</td>
            <td>EV commute only, small home</td>
          </tr>
          <tr>
            <td>3 kW</td>
            <td>~12–15 units</td>
            <td>~250–300 sq ft</td>
            <td>EV + average household</td>
          </tr>
          <tr>
            <td>5 kW</td>
            <td>~20–25 units</td>
            <td>~400–500 sq ft</td>
            <td>High-mileage EV + large home</td>
          </tr>
        </tbody>
      </table>
      <p>
        Remember that generation swings with the seasons — March to May can hit 5.5–6 units per
        kW a day, while a cloudy monsoon week may drop to 2.5–3. Size for your yearly average, not
        the sunniest week, and let net metering smooth out the dips.
      </p>

      <h2>The daytime problem — and why net metering solves it</h2>
      <p>
        Here's the wrinkle nobody mentions in the brochure: solar generates power between roughly
        9am and 4pm, which is exactly when your car is usually parked at work, not at home. You
        could charge during the day if you work from home or top up on weekends, but for most
        owners that timing doesn't line up.
      </p>
      <p>
        The clean fix is a <strong>grid-tied (on-grid) system with net metering</strong>. Your
        panels export surplus power to the grid during the day and your meter banks the credit;
        at night you pull that energy back to charge the car, paying only for any net shortfall.
        In effect, the grid becomes your free battery. This is why on-grid solar — not an
        expensive battery bank — is the default choice for EV owners. If you want true energy
        independence or face long outages, you can add a home battery, but it materially raises
        cost and payback, and an{" "}
        <Link href="/about-ev-batteries">understanding of how batteries store energy</Link> helps
        you judge whether it's worth it. For most people, net metering plus overnight charging is
        the sweet spot. Our{" "}
        <Link href="/blog/home-ev-charging-cost-india">home EV charging guide</Link> covers the
        wall-box and wiring side that sits underneath all of this.
      </p>

      <h2>What it costs in 2026 — and the PM Surya Ghar subsidy</h2>
      <p>
        A fully installed rooftop solar system in India costs roughly ₹55,000–85,000 per kW in
        2026, depending on panel quality, inverter grade and your city. So a 3 kW system lands
        around ₹1.6–2.25 lakh before any support. The decisive factor is the central subsidy under
        the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, which pays ₹30,000 per kW for the
        first 2 kW and ₹18,000 for the third kW — capped at ₹78,000 for any system of 3 kW or
        more. After that subsidy, a 3 kW system can come down to roughly ₹85,000–1.5 lakh, and the
        money is credited to your bank account after commissioning. Several states add their own
        top-ups on the central amount, so it's worth checking local schemes alongside the EV-side
        benefits in our{" "}
        <Link href="/ev-subsidies-india">state-by-state EV subsidy and road-tax guide</Link>.
      </p>

      <h2>The real savings: rupees per kilometre</h2>
      <p>
        This is what makes the case. Grid electricity for home charging costs about ₹6–9 per unit,
        which already puts an EV at roughly ₹1–1.5 per km. Solar changes the equation again. Spread
        the cost of a subsidised system over its 25-year life and the effective price of each solar
        unit works out to only about ₹2–3 — and once the system has paid for itself in the first
        few years, the marginal cost of charging is close to nothing. In practice a solar-charged
        EV can run at well under ₹1 per km, against ₹6–7 per km for a comparable petrol car.
      </p>
      <p>
        Over a typical 12,000–15,000 km year, that's a large, compounding saving on top of an
        already cheap EV. To see what the numbers look like for your own tariff and mileage, run
        them through the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
          EV vs petrol cost calculator
        </Link>{" "}
        and the{" "}
        <Link href="/ev-calculators/ev-range-calculator">range calculator</Link> — then treat solar as a further
        cut on the electricity line. Just keep expectations grounded: actual consumption varies
        with speed, AC use and terrain, which our{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range guide</Link> explains.
      </p>

      <h2>Setup, payback and what to watch for</h2>
      <p>
        A solar-plus-EV setup has three parts: the rooftop array and inverter, a net-metering
        connection from your DISCOM, and a home charger for the car. Use an empanelled vendor
        registered on the national portal so you stay eligible for the subsidy, insist on a
        net-metering-ready inverter, and size the system for your combined home-plus-car load
        rather than just the car. Payback for the solar system typically lands in the four-to-six-
        year range, after which you're effectively driving on sunlight for the rest of the panels'
        life. The main things to watch are shade-free roof area, the structural condition of your
        roof, and — in apartments — getting society approval for both the panels and the charger,
        which the{" "}
        <Link href="/blog/home-ev-charging-cost-india">home charging guide</Link> walks through.
      </p>

      <h2>So is it worth it?</h2>
      <p>
        If you own your roof, drive an EV (or are about to), and can fit at least a 2–3 kW system,
        pairing solar with your electric car is one of the best long-term money decisions in
        Indian motoring. You convert a recurring fuel bill into a one-time, subsidised, fast-paying
        asset, and you insulate yourself from both petrol and electricity price rises at once.
        Renters and flat owners without roof rights get less of the upside, though community and
        society solar is slowly opening that door. For everyone else, the question isn't really
        whether solar-charging an EV makes sense — it's how soon you can get the panels up. When
        you're ready to match a car to your setup, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> or put your shortlist head
        to head with the{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The winning formula is simple: a right-sized on-grid array, net metering to shift sunshine
        to night-time charging, and the PM Surya Ghar subsidy to slash the upfront cost. Get those
        three right and your EV becomes a car you fuel from your own roof — quietly, cleanly and
        for almost nothing.
      </p>
    </ArticleShell>
  );
}
