import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is Battery as a Service (BaaS) in simple terms?",
    a: "BaaS lets you buy an electric car for a much lower price by leaving out the battery, then pay a monthly rental for using it — usually charged per kilometre. The carmaker (or its finance partner) owns the battery, warranties it and replaces it if it fails, so you never pay the big one-time battery cost upfront.",
  },
  {
    q: "Is BaaS cheaper than buying the battery outright?",
    a: "It depends almost entirely on how much you drive. BaaS slashes the upfront price by ₹2–5.5 lakh, but the per-km rental adds up. Low-mileage drivers (roughly under 1,000–1,200 km a month) usually come out ahead; high-mileage owners who keep the car many years often pay more in total than buying the battery once.",
  },
  {
    q: "What is the minimum monthly charge in a BaaS plan?",
    a: "Most plans bill a minimum number of kilometres whether you drive them or not. The Citroen eC3X requires at least 2,000 km a month (about ₹4,520), and the Maruti e Vitara bills a 1,800 km minimum (about ₹7,182 a month). So even if you drive very little, you still pay the floor amount.",
  },
  {
    q: "Who owns the battery under BaaS, and what about warranty?",
    a: "The battery is owned by the provider, not you, and is covered by their warranty — typically 8 years or 1,60,000 km — for the duration of the subscription. If the pack degrades or fails within terms, replacement is the provider's responsibility, not an out-of-pocket bill for you.",
  },
  {
    q: "Does BaaS affect resale value?",
    a: "Yes. Because you don't own the battery, you can only sell the car, and the new owner must take over (or qualify for) the battery subscription — which narrows the buyer pool. Some BaaS plans add an assured buyback instead. Always read how the contract handles transfer and exit before signing.",
  },
];

export const metadata: Metadata = {
  title: "Battery as a Service (BaaS) for EVs in India (2026): How It Works & Is It Worth It?",
  description:
    "A clear 2026 guide to Battery as a Service (BaaS) for electric cars in India — how EV battery subscription works, real per-km rental costs from Tata, MG, Maruti and Citroen, the minimum-km catch, resale impact, and how to work out if BaaS saves you money.",
  alternates: altsFor("/blog/battery-as-a-service-baas-ev-india", "en"),
  openGraph: {
    title: "Battery as a Service (BaaS) for EVs in India (2026): How It Works & Is It Worth It?",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="battery-as-a-service-baas-ev-india">
      <p>
        The single biggest reason electric cars cost more than petrol ones is the battery — it can be a
        third to nearly half of the whole car's price. So carmakers found a way to take it off the
        sticker: <strong>Battery as a Service</strong>, or BaaS. You buy the car without the battery, drive
        away for lakhs less, and pay a small rental for using the pack instead. In 2026 most of India's
        mass-market EV makers — Tata, MG, Maruti, Kia, Toyota and Citroen — offer some form of it. This
        guide explains exactly how BaaS works, what it really costs per kilometre, the fine print that
        catches people out, and the simple sum that tells you whether it saves you money or quietly costs
        you more.
      </p>

      <h2>What is Battery as a Service (BaaS)?</h2>
      <p>
        BaaS unbundles the most expensive component of an electric vehicle from the rest of it. Normally
        you buy the car and its battery together in one price. Under BaaS you buy only the car — body,
        motor, electronics — at a sharply reduced price, and the battery is leased to you on a
        subscription. The provider (the carmaker or a finance partner) owns the pack, insures its
        performance, keeps it under warranty, and replaces it if it fails.
      </p>
      <p>
        Almost every Indian BaaS plan charges <strong>per kilometre driven</strong> rather than a flat
        monthly fee. You pay a rental rate — say ₹2.60 or ₹3.99 for every kilometre — and that covers the
        right to use the battery. The appeal is obvious: the battery is the part most buyers worry about
        for cost, degradation and replacement, and BaaS moves all three of those worries onto someone
        else's books. If you want to understand why the battery weighs so heavily on EV pricing in the
        first place, our guide to{" "}
        <Link href="/blog/ev-battery-replacement-cost-india">EV battery replacement cost in India</Link>{" "}
        breaks down the per-kWh numbers.
      </p>

      <h2>How BaaS works in practice</h2>
      <p>
        The mechanics are straightforward once you see the moving parts. When you buy on BaaS, three things
        change versus a normal purchase:
      </p>
      <p>
        <strong>The upfront price drops sharply.</strong> Removing the battery from the price typically
        cuts ₹2–5.5 lakh off the ex-showroom figure, depending on the model and battery size. That lower
        price also means a smaller loan and lower EMI if you finance the car.
      </p>
      <p>
        <strong>You pay a per-km battery rental every month.</strong> The car logs your distance and you're
        billed at the agreed rate. Crucially, most plans set a <strong>minimum monthly distance</strong>{" "}
        you pay for even if you don't drive it — this is the part many buyers miss.
      </p>
      <p>
        <strong>The battery stays under the provider's warranty.</strong> For as long as you subscribe, the
        pack is covered (usually 8 years or 1,60,000 km), and degradation or failure within terms is their
        problem to fix, not yours.
      </p>

      <h2>BaaS costs in India (2026): the real numbers</h2>
      <p>
        Rates vary by brand and battery size. Here's how the main BaaS plans on sale in India stack up in
        2026 — treat these as indicative for the entry trims, since exact figures change by variant.
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Upfront price with BaaS</th>
            <th>Battery rental</th>
            <th>Minimum km/month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tata Tiago EV</td>
            <td>From ₹4.69 lakh (saves ~₹2.30 lakh)</td>
            <td>₹2.60 / km</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Tata Punch EV</td>
            <td>Cuts upfront by ~₹3.20 lakh</td>
            <td>₹2.60 / km</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Citroen eC3X</td>
            <td>From ₹6.89 lakh</td>
            <td>₹2.26 / km</td>
            <td>2,000 km (~₹4,520)</td>
          </tr>
          <tr>
            <td>Maruti e Vitara (49 kWh)</td>
            <td>From ₹10.99 lakh</td>
            <td>₹3.99 / km</td>
            <td>1,800 km (~₹7,182)</td>
          </tr>
          <tr>
            <td>MG Comet EV</td>
            <td>Lower upfront</td>
            <td>₹3.20 / km</td>
            <td>—</td>
          </tr>
          <tr>
            <td>MG Windsor EV</td>
            <td>Lower upfront</td>
            <td>₹3.90 / km (38 kWh); ₹4.50 / km (52.9 kWh)</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two things jump out. First, smaller, cheaper cars carry the lowest per-km rates (the Citroen eC3X
        at ₹2.26/km is the most affordable here), while bigger packs cost more to rent — the MG Windsor's
        52.9 kWh unit is nearly double the eC3X rate. Second, the per-km charge usually does{" "}
        <strong>not</strong> include road tax, insurance, TCS or other statutory costs — those are billed
        separately, exactly as they would be on any car. For the complete picture of what running an EV
        costs beyond the battery, see our{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">
          cost of owning an electric car in India
        </Link>{" "}
        guide.
      </p>

      <h2>The minimum-km catch</h2>
      <p>
        This is where the headline rate can mislead. A rate of "₹3.99 per km" sounds like you only pay for
        what you drive — but if the plan bills a 1,800 km monthly minimum, you're effectively committing to{" "}
        <strong>₹7,182 every month</strong> whether you cover that distance or not. The Citroen eC3X's
        2,000 km floor works out to about ₹4,520 a month. For a light user who drives 600–800 km a month,
        that minimum quietly inflates the real per-km cost well above the advertised number.
      </p>
      <p>
        So the cheap-sounding rental only stays cheap if your actual driving sits at or above the minimum.
        Drive a lot and the floor is irrelevant; drive little and you're subsidising kilometres you never
        used. Always check the minimum-km clause before you judge a plan by its per-km figure.
      </p>

      <h2>BaaS pros and cons</h2>
      <p>
        BaaS is genuinely useful for the right buyer and a poor fit for others. Weigh both sides honestly.
      </p>
      <table>
        <thead>
          <tr>
            <th>Advantages</th>
            <th>Drawbacks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Much lower upfront price (₹2–5.5 lakh less) and a smaller loan</td>
            <td>Per-km rental can exceed the battery's cost if you drive a lot over many years</td>
          </tr>
          <tr>
            <td>No battery degradation or replacement risk — it's the provider's problem</td>
            <td>Minimum-km billing means you pay even when you barely drive</td>
          </tr>
          <tr>
            <td>Battery stays under warranty for the subscription</td>
            <td>You don't own the battery, which complicates resale and transfer</td>
          </tr>
          <tr>
            <td>Some plans add perks like a free home charger or assured buyback</td>
            <td>Per-km charge excludes road tax, insurance and TCS</td>
          </tr>
        </tbody>
      </table>
      <p>
        The resale point deserves a closer look. Because you don't own the pack, a used BaaS car can only
        be sold with the subscription attached — the next owner has to take it over — which shrinks the
        buyer pool compared with a fully owned EV. Some schemes counter this with an assured buyback (the
        Maruti e Vitara, for example, offers around 60% of value back after three years). If resale value
        matters to you, read our guide on{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">
          EV resale value and battery health in India
        </Link>{" "}
        before deciding.
      </p>

      <h2>Is BaaS worth it? Do this simple sum</h2>
      <p>
        The answer comes down to your annual distance. Work out two totals over the years you plan to keep
        the car: on one side, the upfront saving (₹2–5.5 lakh) plus the lower EMI; on the other, the total
        battery rental you'll pay (your monthly km, or the minimum, whichever is higher, multiplied by the
        rate, across all those months).
      </p>
      <p>
        As a rough rule of thumb, a typical urban owner driving around 10,000 km a year often finds BaaS
        favourable, because reaching the point where rental overtakes the battery's outright cost can take
        seven to nine years — by which time many people have already sold the car. Drive far more than that
        — long daily commutes, 20,000+ km a year — and owning the battery outright usually wins. Light,
        irregular drivers should check the minimum-km floor carefully, because it can erase the saving.
      </p>
      <p>
        Run the numbers for your own mileage with our{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>, and if BaaS makes
        the upfront price work for you, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> to see which BaaS-eligible models
        fit your budget. If you're still early in the decision, our{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">
          best electric cars under ₹15 lakh
        </Link>{" "}
        roundup is a good place to start.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The bottom line on Battery as a Service: it's a clever way to make an EV affordable on day one by
        renting the costliest part instead of buying it — but it only saves money if your real driving fits
        the plan. Check the per-km rate, the minimum-km floor and the resale terms together, run your own
        mileage through the maths, and you'll know whether BaaS is a smart shortcut or an expensive
        convenience for how you actually drive.
      </p>
    </ArticleShell>
  );
}
