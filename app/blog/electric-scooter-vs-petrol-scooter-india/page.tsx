import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is an electric scooter really cheaper than a petrol scooter?",
    a: "Over the life of the scooter, almost always. A petrol scooter is cheaper to buy, but an electric scooter costs roughly ₹0.15–0.40 per km to run at home versus about ₹2–2.5 per km for petrol, plus far less servicing. For an average 30 km daily commute, that gap typically saves ₹25,000–35,000 a year — enough to recover the higher purchase price in two to three years.",
  },
  {
    q: "How long does an electric scooter take to charge?",
    a: "Most electric scooters take about 4–5 hours for a full charge on a standard home socket, and some support fast charging that does 0–80% in under an hour. Unlike a petrol fill-up, you simply plug in overnight and start each day full, so the charging time rarely matters in daily use.",
  },
  {
    q: "Do electric scooters have enough range for daily use?",
    a: "Yes, for almost all city commuters. Mainstream electric scooters offer a real-world range of roughly 80–120 km per charge, while the average Indian commute is under 30 km a day. Range only becomes a concern for very long daily distances or frequent intercity trips, where a petrol scooter's two-minute refuelling still has an edge.",
  },
  {
    q: "Is the PM E-Drive subsidy still available for electric scooters?",
    a: "Yes, but it is time- and fund-limited. As of 2026 the PM E-Drive incentive gives ₹2,500 per kWh, capped at ₹5,000 per electric two-wheeler, and is scheduled to run until July 31, 2026 — though the fund can run out sooner. It applies to scooters with an ex-factory price up to ₹1.5 lakh fitted with advanced lithium-ion batteries.",
  },
];

export const metadata: Metadata = {
  title: "Electric Scooter vs Petrol Scooter in India (2026): Which Should You Buy?",
  description:
    "A clear electric scooter vs petrol scooter comparison for India — upfront price, running cost per km, range, charging, maintenance, subsidies and resale, so you can match the right one to how you actually ride.",
  alternates: altsFor("/blog/electric-scooter-vs-petrol-scooter-india", "en"),
  openGraph: {
    title: "Electric Scooter vs Petrol Scooter in India (2026): Which Should You Buy?",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-scooter-vs-petrol-scooter-india">
      <p>
        The two-wheeler is how most of India actually moves, and for the daily commuter the big
        decision in 2026 is no longer which petrol scooter to buy — it's{" "}
        <strong>electric scooter vs petrol scooter</strong>. Electric scooters now match petrol ones
        on price brackets, beat them comfortably on running cost, and are backed by government
        subsidies. Petrol scooters still win on instant refuelling, long range and a vast service
        network. This guide compares the two honestly on everything that decides the real bill —
        upfront price, cost per kilometre, range, charging, maintenance, tax and resale — so you can
        match the right one to how you actually ride.
      </p>

      <h2>Upfront price: petrol still cheaper on day one</h2>
      <p>
        On the showroom floor, petrol is usually the lower cheque. A popular petrol scooter — a Honda
        Activa, TVS Jupiter or Suzuki Access — typically lands around ₹80,000 to ₹1 lakh on-road.
        Mainstream electric scooters sit a little higher: the Vida VX2 starts near ₹99,500, the Bajaj
        Chetak around ₹1.11 lakh, the TVS iQube from roughly ₹1.15 lakh, and the Ather 450X near ₹1.54
        lakh (all ex-showroom). So for the same money, a petrol buyer often rides home a slightly
        cheaper machine. But that day-one gap is smaller than it used to be, and once you count the
        subsidy and the running cost, it closes fast — which is the whole point of the comparison
        below. If you're new to electric, it's worth pairing this with our{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV buying checklist</Link>.
      </p>

      <h2>Running cost: where the electric scooter wins big</h2>
      <p>
        This is the decisive number. Charged at home, an electric scooter costs roughly{" "}
        <strong>₹0.15 to ₹0.40 per kilometre</strong> in electricity. A petrol scooter, with fuel
        well above ₹100 a litre in many cities and real-world efficiency around 40–50 km per litre,
        works out to about <strong>₹2 to ₹2.5 per kilometre</strong>. That is close to a tenfold
        difference. For an average 30 km daily commute, switching to electric typically saves between
        ₹25,000 and ₹35,000 a year on fuel and servicing combined — enough to recover the higher
        purchase price within two to three years, after which the savings are pure gain.
      </p>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Electric scooter</th>
            <th>Petrol scooter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running cost</td>
            <td>₹0.15–0.40/km (home charging)</td>
            <td>₹2–2.5/km</td>
          </tr>
          <tr>
            <td>Refuelling / charging</td>
            <td>4–5 hrs home; 0–80% fast charge under 1 hr</td>
            <td>~2 minutes at a pump</td>
          </tr>
          <tr>
            <td>Real-world range</td>
            <td>~80–120 km per charge</td>
            <td>250–350 km per tank</td>
          </tr>
          <tr>
            <td>GST</td>
            <td>5%</td>
            <td>28% (plus cess)</td>
          </tr>
          <tr>
            <td>5-yr maintenance</td>
            <td>~₹8,000–10,000</td>
            <td>~₹25,000–30,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Averages only get you so far, because your real saving depends on your daily distance,
        electricity tariff and local petrol price. Run your own numbers through the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>{" "}
        before you decide — for a high-mileage rider, the electric advantage is usually even bigger
        than the averages suggest.
      </p>

      <h2>Range and refuelling: petrol's remaining edge</h2>
      <p>
        Here petrol keeps the upper hand, but less than you'd think. A petrol scooter does 250–350 km
        on a tank and refuels in two minutes anywhere, which matters for long daily distances or
        frequent intercity runs. A mainstream electric scooter gives a real-world 80–120 km per charge
        and takes about 4–5 hours to refill on a home socket. The catch is that most Indian commutes
        are under 30 km a day, so an electric scooter charged overnight starts every morning full and
        rarely needs a "fuel stop" at all. Range anxiety is real only if your riding is unusually long
        or unpredictable — for the typical city commuter, it's a non-issue. It helps to understand why
        the number on the brochure isn't what you'll get: see our explainer on{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>.
      </p>

      <h2>The subsidy and tax gap</h2>
      <p>
        Policy deliberately favours electric. Electric two-wheelers attract just 5 percent GST against
        28 percent (plus cess) on petrol scooters, and the central{" "}
        <strong>PM E-Drive</strong> scheme adds a demand incentive of ₹2,500 per kWh, capped at ₹5,000
        per vehicle, currently scheduled until July 31, 2026 for scooters priced up to ₹1.5 lakh
        ex-factory. Several states layer on extra subsidies and road-tax waivers on top. None of this
        applies to a petrol scooter. Together these can knock several thousand rupees off an electric
        scooter's on-road price and narrow the upfront gap considerably. Because the central incentive
        is fund-limited and can close early, timing matters — our{" "}
        <Link href="/ev-subsidies-india">state-by-state EV subsidy guide</Link> and the deeper{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">2026 incentives breakdown</Link>{" "}
        show exactly what you can claim where you live.
      </p>

      <h2>Maintenance and reliability</h2>
      <p>
        An electric scooter has far fewer moving parts — no engine oil, no spark plug, no clutch, no
        air filter, no exhaust. Routine upkeep is mostly brakes, tyres and a general inspection, so
        five-year maintenance typically runs under ₹8,000–10,000 against ₹25,000–30,000 for a petrol
        scooter over the same distance. The trade-off is the service network: petrol scooters can be
        fixed at any roadside mechanic in any town, while electric scooters still depend on
        brand-authorised service centres, which are concentrated in larger cities. If you live where
        your chosen EV brand has a service presence, the maintenance maths is firmly electric; if you
        ride mostly in small towns, petrol's universal repairability is a genuine advantage.
      </p>

      <h2>Battery, range loss and resale</h2>
      <p>
        The battery is the heart of an electric scooter and its biggest long-term question. Most come
        with an 8-year or distance-based warranty, and a good lithium-ion pack should retain the bulk
        of its capacity for years if you avoid extreme heat and constant 100 percent fast charging.
        Resale is where petrol still has more certainty — second-hand petrol scooters have a deep,
        predictable market, while used electric scooter values lean heavily on battery health and are
        still maturing. That said, rising fuel prices and strong new demand are firming up used-EV
        prices. To protect both your battery and your resale value, our guides on{" "}
        <Link href="/blog/ev-battery-life-india-weather">battery life in Indian weather</Link> and{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">resale value and battery health</Link>{" "}
        are worth reading before you buy.
      </p>

      <h2>So which should you buy?</h2>
      <p>
        Choose an <strong>electric scooter</strong> if you can charge where you park, your riding is
        mostly city commuting under 100 km a day, and you want the lowest running cost plus the full
        weight of India's tax and subsidy support. Choose a <strong>petrol scooter</strong> if you
        can't charge reliably, ride long or unpredictable distances, value two-minute refuelling, or
        live where EV service is thin and you need a machine any mechanic can fix. In short:
        predictable city commuting with home charging tilts the maths firmly toward electric; long
        distances or no charging tilt it back toward petrol. For most urban commuters in 2026, the
        electric scooter is now the smarter long-term buy.
      </p>
      <p>
        When you're ready to shortlist, browse the{" "}
        <Link href="/catalog/electric-scooters">electric scooter catalog</Link> to see what fits your
        budget and range, read our pick of the{" "}
        <Link href="/blog/top-5-electric-scooters-india-2026">top 5 electric scooters in India</Link>,
        then put your favourites head to head with the{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The right answer is the one that matches your parking and your daily distance, not the cheaper
        sticker. Settle whether you can charge where you park first, run your real numbers through the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">cost calculator</Link>, and the
        choice between electric and petrol usually makes itself.
      </p>
    </ArticleShell>
  );
}
