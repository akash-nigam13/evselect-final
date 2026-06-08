import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV Maintenance Cost in India 2026: The Honest Breakdown",
  description:
    "What electric car maintenance really costs in India — service intervals, what gets checked, tyre and brake life, and the 5-year service bill versus a petrol car.",
  alternates: altsFor("/blog/ev-maintenance-cost-india", "en"),
  openGraph: {
    title: "EV Maintenance Cost in India 2026: The Honest Breakdown",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-maintenance-cost-india">
      <p>
        One of the quiet pleasures of owning an electric car is how little it asks of you. There is
        no engine oil to change, no spark plugs to foul, no timing belt to snap and no clutch to
        wear out. A typical EV drivetrain has roughly 20 moving parts against about 2,000 in a petrol
        engine, and that single fact reshapes the entire ownership experience. But "low maintenance"
        is not the same as "no maintenance," and a few things still need genuine attention — some of
        them easy to forget precisely because the car never complains. This guide lays out exactly
        what EV maintenance involves in India, how often each job is due, and what you should expect
        to pay in 2026.
      </p>

      <h2>Why EVs cost so much less to maintain</h2>
      <p>
        The savings come straight from the simpler hardware. With no combustion, there is nothing to
        burn oil, no exhaust to corrode, no fuel filters, and no air intake to clog. Regenerative
        braking — where the motor turns into a generator and slows the car while topping up the
        battery — means you barely touch the friction brakes in everyday driving. The upshot is that
        most EV "service" is really inspection rather than replacement. Industry data in India puts
        annual EV service costs roughly 40–60 percent below an equivalent petrol SUV, and the gap
        widens as the years add up. If you want to see how this folds into the bigger picture of
        running an EV, our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">5-year cost of ownership comparison</Link>{" "}
        puts rupee figures on fuel, insurance, servicing and resale together.
      </p>

      <h2>What actually gets serviced on an EV</h2>
      <p>
        At a routine service, a technician is mostly checking and topping up rather than swapping
        major parts. The standard list looks like this:
      </p>
      <ul>
        <li>Battery health and high-voltage system inspection, plus any software updates.</li>
        <li>Coolant for the battery and motor — a flush is usually due around every two years.</li>
        <li>Brake fluid — typically changed every three years to prevent moisture-related failure.</li>
        <li>Brake pads and discs inspected (they last far longer thanks to regen braking).</li>
        <li>Tyre rotation and wear check, usually every 10,000 km.</li>
        <li>Cabin air filter, wiper blades, and the 12V auxiliary battery.</li>
        <li>Suspension, steering, lights and the AC system — the usual non-powertrain items.</li>
      </ul>
      <p>
        Notice what is missing: no oil, no oil filter, no spark plugs, no fuel system work. That is
        why a visit that would run into real money on a petrol car is often a modest inspection bill
        on an EV. Understanding how the pack is cooled and managed helps you appreciate why the
        coolant job matters — our primer on{" "}
        <Link href="/about-ev-batteries">how EV batteries work</Link> is a useful companion read.
      </p>

      <h2>Service intervals: how often you'll actually visit</h2>
      <p>
        Most EVs in India follow a service interval of 10,000 to 20,000 km or one year, whichever
        comes first. The exact figure varies by model — some are pegged to 15,000 km, others to
        10,000 or even 20,000 km — so always check your owner's manual rather than assuming. Because
        there is no oil to degrade, the time-based interval often matters more than distance for
        lower-mileage city cars.
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Rough interval</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General service / inspection</td>
            <td>10,000–20,000 km or 1 year</td>
            <td>Health checks, software, fluid top-ups</td>
          </tr>
          <tr>
            <td>Coolant flush</td>
            <td>~2 years</td>
            <td>Protects battery and motor thermal management</td>
          </tr>
          <tr>
            <td>Brake fluid change</td>
            <td>~3 years</td>
            <td>Prevents moisture build-up and brake failure</td>
          </tr>
          <tr>
            <td>Tyre rotation</td>
            <td>~10,000 km</td>
            <td>Evens out faster EV tyre wear</td>
          </tr>
          <tr>
            <td>12V auxiliary battery</td>
            <td>3–4 years</td>
            <td>Runs the car's electronics, not the drive battery</td>
          </tr>
        </tbody>
      </table>

      <h2>The bills you should actually budget for</h2>
      <p>
        For a mainstream Indian EV, expect roughly ₹3,500 to ₹9,000 per year in scheduled servicing,
        against ₹9,000 to ₹18,000 for a comparable petrol SUV. Over five years the cumulative service
        bill typically lands around ₹22,000 to ₹40,000 for the EV versus ₹55,000 to ₹90,000 for the
        petrol equivalent — less than half. The recurring items most likely to surprise new owners are
        not the powertrain at all: tyres, which wear about 25–30 percent faster on EVs because of the
        extra weight and instant torque, and the small 12V battery that quietly powers the car's
        electronics and needs replacing every three to four years. To model what servicing plus energy
        costs look like for your own driving, run the numbers through our{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>.
      </p>

      <h2>Brakes, tyres and the big battery</h2>
      <p>
        Brakes are an EV bright spot. Because regenerative braking does most of the slowing, friction
        pads commonly last 80,000 to 1,20,000 km, against 35,000 to 50,000 km on a typical petrol car.
        The flip side is that pads can occasionally glaze from underuse, which a periodic inspection
        catches. Tyres are the opposite story — plan to replace them sooner than you would on a petrol
        car, and rotate them on schedule to spread the wear.
      </p>
      <p>
        The high-voltage battery is the part everyone worries about, and it is also the part you are
        least likely to pay for. Indian EVs typically carry an 8-year / 1,60,000 km battery warranty,
        and if State of Health falls below the manufacturer's threshold (often around 70 percent)
        within that window, you may be eligible for a module or pack repair at no cost. Day-to-day
        battery care — gentle charging habits and avoiding extreme heat — does more to protect it than
        any workshop visit. Our guides on{" "}
        <Link href="/blog/ev-battery-life-india-weather">battery life in Indian weather</Link> and{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">battery health and resale value</Link>{" "}
        cover how to keep that pack healthy for the long haul.
      </p>

      <h2>How to keep maintenance costs low</h2>
      <p>
        A few habits go a long way. Stick to the scheduled service even when the car feels perfect —
        coolant and brake-fluid jobs are cheap preventively and expensive once neglected. Keep tyres
        correctly inflated and rotated, since under-inflation accelerates the already-faster EV wear.
        Use the manufacturer network or a qualified EV specialist for high-voltage work; this is not
        the place for an untrained local garage. And treat software updates as real maintenance —
        manufacturers regularly improve battery management and efficiency through over-the-air or
        workshop updates.
      </p>

      <h2>FAQ</h2>
      <p>
        <strong>Do electric cars need servicing at all?</strong> Yes, but far less. There is no oil,
        spark-plug or clutch work, yet coolant, brake fluid, tyres, the 12V battery and general
        inspections still need attention on a regular schedule.
      </p>
      <p>
        <strong>How much does EV maintenance cost per year in India?</strong> Roughly ₹3,500 to
        ₹9,000 a year for a mainstream EV, compared with ₹9,000 to ₹18,000 for a similar petrol SUV.
      </p>
      <p>
        <strong>Is the EV battery covered if it degrades?</strong> Usually. Most Indian EVs come with
        an 8-year / 1,60,000 km battery warranty, with repair or replacement if State of Health drops
        below the maker's threshold during that period.
      </p>
      <p>
        <strong>Why do EVs go through tyres faster?</strong> Their extra weight and instant torque put
        more stress on tyres, so expect about 25–30 percent quicker wear — regular rotation and
        correct pressure help offset it.
      </p>
      <p>
        The short version is that an EV trades many small, frequent petrol-era expenses for a handful
        of simple, predictable ones. Keep up with the schedule and the running costs stay low. When you
        are ready to shortlist a model, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> or put two contenders head to
        head with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>
    </ArticleShell>
  );
}
