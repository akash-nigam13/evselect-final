import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How much does it cost to replace an EV battery in India?",
    a: "A full out-of-warranty car battery typically costs ₹4–13 lakh depending on pack size (around ₹15,000–22,000 per kWh), while electric scooter batteries cost roughly ₹45,000–1.2 lakh. But most owners never pay this because the battery is covered by warranty.",
  },
  {
    q: "Is the EV battery covered under warranty?",
    a: "Yes. The standard in India is 8 years or 1,60,000 km, and brands like Tata (up to 15 years) and Mahindra (lifetime for the first private owner) go further. Warranties also guarantee at least 70% capacity, so a defective or heavily degraded pack is repaired or replaced free.",
  },
  {
    q: "How long does an EV battery last in India?",
    a: "Typically 10–12 years while retaining 70–80% of capacity, degrading about 2–3% a year. Most people change the whole car before the battery wears out.",
  },
  {
    q: "Does the whole battery need replacing if it fails?",
    a: "Usually not. Modern packs are built from modules, so a single faulty module can often be replaced rather than the entire pack — at a fraction of the full-replacement cost.",
  },
  {
    q: "What voids an EV battery warranty?",
    a: "Accident damage, water/flood damage, unauthorised repairs or tampering, and use outside the owner's manual. Normal degradation and manufacturing defects are covered.",
  },
];

export const metadata: Metadata = {
  title: "EV Battery Replacement Cost in India (2026): What It Really Costs",
  description:
    "A clear 2026 guide to EV battery replacement cost in India — real per-kWh and pack prices for cars and scooters, the 8-year warranty that usually covers you, and why most owners never pay the bill.",
  alternates: altsFor("/blog/ev-battery-replacement-cost-india", "en"),
  openGraph: {
    title: "EV Battery Replacement Cost in India (2026): What It Really Costs",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-battery-replacement-cost-india">
      <p>
        It's the question that stops more Indians from buying an EV than any other: "What happens
        when the battery dies, and what will it cost me to replace it?" The fear is understandable —
        the battery is the single most expensive part of an electric vehicle, and the numbers you see
        online can look terrifying. But the honest answer is more reassuring than the rumours suggest.
        This guide lays out the real <strong>EV battery replacement cost in India</strong> in 2026 —
        the per-kWh prices, the warranty that quietly protects most owners, and why the scary
        replacement bill is one almost no one actually pays.
      </p>

      <h2>How EV batteries are priced: it's all about the kWh</h2>
      <p>
        An EV battery's cost is driven by its capacity, measured in kilowatt-hours (kWh). In India in
        2026, a lithium-ion pack works out to roughly <strong>₹15,000–22,000 per kWh</strong> once
        you account for the cells, the battery management system, cooling and assembly. Multiply that
        by your car's pack size and you get the headline figure: a 40 kWh battery sits in the region
        of ₹7–9 lakh, while a small scooter pack of 3–4 kWh is far less. That per-kWh number has been
        falling steadily as global cell prices drop and local manufacturing scales up, so the
        worst-case figures quoted a few years ago keep getting cheaper. If you want the deeper
        chemistry behind why LFP and NMC packs are priced differently, our explainer on{" "}
        <Link href="/about-ev-batteries">how EV batteries work</Link> covers it.
      </p>

      <h2>Electric car battery replacement cost in India (2026)</h2>
      <p>
        Here's the realistic picture for popular electric cars, based on full out-of-warranty pack
        replacement at an authorised service centre. Treat these as worst-case ceiling figures, not
        bills you should expect — the next section explains why.
      </p>
      <table>
        <thead>
          <tr>
            <th>Car (battery)</th>
            <th>Approx. pack size</th>
            <th>Out-of-warranty replacement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tata Tiago EV / small hatch</td>
            <td>19–24 kWh</td>
            <td>₹4–5.5 lakh</td>
          </tr>
          <tr>
            <td>Tata Nexon EV (Prime)</td>
            <td>30 kWh</td>
            <td>₹5.5–7 lakh</td>
          </tr>
          <tr>
            <td>Tata Nexon EV (Max/LR)</td>
            <td>40.5 kWh</td>
            <td>₹7.5–9 lakh</td>
          </tr>
          <tr>
            <td>Mid-size electric SUV</td>
            <td>50–60 kWh</td>
            <td>₹9–13 lakh</td>
          </tr>
        </tbody>
      </table>
      <p>
        These figures look alarming precisely because the battery is most of the car. But notice the
        framing: this is the cost <em>only if</em> the entire pack fails outside warranty and you pay
        retail for a brand-new one. In practice, that's a rare event — modern packs are repaired at
        module level (swapping a single faulty group of cells) far more often than they're replaced
        whole, and that costs a fraction of the full-pack figure.
      </p>

      <h2>Why most owners never pay this: the warranty</h2>
      <p>
        The single most important fact in this entire topic is that nearly every EV in India comes
        with a long battery warranty. The industry standard is <strong>8 years or 1,60,000 km</strong>,
        whichever comes first — and several brands now go well beyond it:
      </p>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Battery warranty (first owner)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tata Motors</td>
            <td>Up to 15 years / unlimited km on newer EVs</td>
          </tr>
          <tr>
            <td>Mahindra</td>
            <td>Lifetime warranty (privately registered, first owner)</td>
          </tr>
          <tr>
            <td>MG, Hyundai, BYD</td>
            <td>8 years / 1,60,000 km</td>
          </tr>
        </tbody>
      </table>
      <p>
        Crucially, the warranty doesn't only cover total failure. Most policies guarantee the battery
        will retain at least <strong>70% of its capacity (State of Health)</strong> through the
        warranty term. If it degrades below that because of a manufacturing defect — not abuse,
        accident or flooding — the brand must repair or replace the pack at no cost to you. So for the
        first 8 years and beyond, the replacement "bill" most buyers worry about is simply the
        manufacturer's problem, not yours. How that State of Health is measured, and how to protect
        it, is the focus of our guide on{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">EV resale value and battery health</Link>.
      </p>

      <h2>How long batteries actually last in India</h2>
      <p>
        The replacement question only matters if batteries die early — and the data says they don't.
        A modern lithium-ion EV pack degrades by roughly <strong>2–3% a year</strong> in Indian
        conditions, often less with sensible charging habits. There's usually a faster dip of 3–5% in
        the first year or two, then the curve flattens out for the long haul. Real-world useful life
        is typically <strong>10–12 years</strong> while still holding 70–80% of original capacity,
        which means most owners will sell or replace the whole car long before the battery becomes the
        limiting factor. India's heat is the one genuine accelerant — sustained temperatures above
        35°C age cells faster than European or American conditions — which is why protecting the pack
        matters here. Our deep dive on{" "}
        <Link href="/blog/ev-battery-life-india-weather">EV battery life in Indian weather</Link>{" "}
        explains exactly how to slow degradation, and{" "}
        <Link href="/blog/ev-battery-lifespan-india">how long an EV battery lasts</Link> covers the
        8-year question in full.
      </p>

      <h2>Electric scooter and bike battery replacement cost</h2>
      <p>
        Two-wheeler batteries are far smaller, so the numbers are far friendlier. In 2026, replacing
        an electric scooter battery in India typically costs between{" "}
        <strong>₹45,000 and ₹1.2 lakh</strong>, depending on capacity. An Ather 450X pack runs around
        ₹72,500 at an authorised centre, while the larger Ola S1 Pro+ packs sit closer to
        ₹1.1–1.2 lakh. As with cars, these are out-of-warranty figures — most e-scooters carry an
        8-year or capacity-based warranty (Ather, for instance, replaces the battery free if it drops
        below 70% within eight years). Because two-wheeler packs are modular and cheaper, an
        out-of-warranty replacement is a far smaller financial event than it is for a car.
      </p>

      <h2>How to keep your battery healthy (and avoid the bill entirely)</h2>
      <p>
        The cheapest battery replacement is the one you never need. A few habits make a measurable
        difference in Indian conditions: keep the daily charge in the roughly 20–80% window rather
        than topping to 100% every night, avoid leaving the car at very high or very low charge in
        peak summer heat, lean on slower AC home charging for daily use and save DC fast-charging for
        trips, and park in shade where you can. Done consistently, these habits keep degradation at
        the low end of the range and comfortably see the pack through its warranty — and usually well
        past it. Seen in context, the battery is just one input into{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">the total cost of owning an EV</Link>.
        If you're still weighing the overall economics of going electric, our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">petrol vs electric 5-year cost
        analysis</Link> folds battery worries into the bigger ownership picture.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The bottom line: the EV battery replacement cost in India looks scary on paper but is a bill
        almost no one pays, because the warranty does the heavy lifting and the packs simply last.
        Factor it into your decision sensibly, not fearfully — then compare real warranty terms and
        battery specs side by side in our{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>, or browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> to see what your budget buys.
      </p>
    </ArticleShell>
  );
}
