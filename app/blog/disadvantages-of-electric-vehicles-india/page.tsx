import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Disadvantages of Electric Vehicles in India (2026): Honest Cons to Know | EVSelect.in",
  description:
    "What are the disadvantages of electric vehicles? An honest 2026 look at EV cons in India — upfront price, charging gaps, range anxiety, resale and battery worries — and how to work around them.",
  alternates: altsFor("/blog/disadvantages-of-electric-vehicles-india", "en"),
  openGraph: { title: "Disadvantages of Electric Vehicles in India (2026)", type: "article" },
};

const faqs = [
  { q: "What are the main disadvantages of electric vehicles?", a: "The main disadvantages of EVs in India are a higher upfront price, fewer public charging stations than petrol pumps, longer 'refuelling' time, range limits on long trips, and uncertainty around battery replacement cost and resale value. Most of these are improving quickly and can be managed with planning." },
  { q: "Is it worth buying an EV in India in 2026?", a: "For most city and daily commuters with home charging, yes — far lower running and maintenance costs usually offset the higher purchase price within a few years, before counting subsidies. EVs make less sense if you can't charge at home or regularly drive very long distances on routes without fast chargers." },
  { q: "What is the biggest problem with EVs?", a: "For Indian buyers, the biggest practical problem is charging access — having a reliable place to charge, especially for apartment dwellers, and patchy fast-charging on some highways. Range anxiety usually fades once owners realise how little they actually drive per day." },
  { q: "What is the most stolen EV?", a: "EV theft is not a significant concern in India, and no electric model stands out as commonly stolen. EVs often include connected-car tracking and immobilisers, which can make them harder to steal than older petrol vehicles." },
];

export default function Page() {
  return (
    <ArticleShell slug="disadvantages-of-electric-vehicles-india">
      <p>
        EVs have clear advantages, but a good buying decision means understanding the
        downsides too. Here&apos;s an honest, India-specific look at the
        disadvantages of electric vehicles in 2026 — and, just as importantly, how to
        work around each one. If you&apos;re weighing the switch, pair this with our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">EV vs petrol 5-year cost analysis</Link>.
      </p>

      <h2>The real disadvantages of EVs in India</h2>
      <ul>
        <li><strong>Higher upfront price.</strong> EVs usually cost more to buy than petrol equivalents — though <Link href="/ev-subsidies-india">subsidies</Link> and lower running costs narrow the gap.</li>
        <li><strong>Charging access.</strong> Public chargers are fewer than petrol pumps, and apartment dwellers may struggle to install home charging.</li>
        <li><strong>Longer refuelling time.</strong> Even fast charging takes longer than filling a petrol tank, which matters on long trips.</li>
        <li><strong>Range limits.</strong> Real-world range is lower than claimed, and highway fast-charging can still be patchy on some routes.</li>
        <li><strong>Battery replacement &amp; resale uncertainty.</strong> Out-of-warranty battery replacement is expensive, and resale values are still maturing.</li>
      </ul>

      <h2>How to work around the disadvantages</h2>
      <p>
        Most of these are manageable. Choose home charging if you can — it removes the
        biggest pain point and makes running costs tiny (see our{" "}
        <Link href="/blog/home-ev-charging-cost-india">home charging cost guide</Link>).
        Match real-world range to your daily distance with a buffer, plan long trips
        around fast chargers, and pick a well-reviewed model with a strong battery
        warranty — our <Link href="/blog/ev-battery-lifespan-india">battery lifespan guide</Link>{" "}
        explains what to expect. Claim available <Link href="/ev-subsidies-india">EV subsidies</Link>{" "}
        to cut the upfront cost.
      </p>

      <h2>So, are the disadvantages dealbreakers?</h2>
      <p>
        For most city and daily commuters with a place to charge, no — the savings and
        convenience usually outweigh the cons within a few years. For buyers without
        home charging or who regularly drive very long distances on charger-sparse
        routes, a petrol or hybrid may still suit better today. Compare your options
        with the <Link href="/compare-electric-vehicles">comparison tool</Link> and
        browse <Link href="/blog/best-electric-cars-india-2026">the best electric cars to buy</Link>.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="not-prose my-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
            <summary className="cursor-pointer font-display text-sm font-bold text-white">{f.q}</summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
          </details>
        ))}
      </div>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
