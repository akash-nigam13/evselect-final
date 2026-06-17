import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "Is it cheaper to own an electric car in India?",
    a: "Over a typical 5-year ownership period, yes. An EV usually costs more to buy but far less to run — roughly ₹1–1.5 per km in energy versus ₹6–9 for petrol, plus 40–60% lower servicing. For most owners who charge at home and drive regularly, the lower running cost recovers the price premium within 3–4 years.",
  },
  {
    q: "What is the running cost of an electric car per km in India?",
    a: "Charged at home, most electric cars cost about ₹1 to ₹1.5 per kilometre, against ₹6 to ₹9 per km for a comparable petrol car. Public fast charging is dearer (₹3–6 per km) but still typically below petrol.",
  },
  {
    q: "What are the hidden costs of owning an EV in India?",
    a: "The ones owners underestimate are: a home charger and wiring (a one-time ₹10,000–₹50,000), faster tyre wear (about 25–30% quicker), higher insurance premiums in the early years, and the small 12V battery that needs replacing every 3–4 years. The big traction battery is usually covered by an 8-year warranty.",
  },
  {
    q: "Do electric cars have good resale value in India?",
    a: "Resale is improving as the market matures, but still trails petrol in some segments and depends heavily on battery State of Health. A documented, healthy battery and service history materially lifts resale value.",
  },
  {
    q: "How much can I save with EV subsidies in India?",
    a: "It varies by state — many offer reduced or waived road tax and registration, and some add purchase incentives, which can lower the on-road price by tens of thousands to over a lakh. Always confirm your state's current scheme before buying.",
  },
];

export const metadata: Metadata = {
  title: "Cost of Owning an Electric Car in India (2026): Full Running-Cost Guide",
  description:
    "The complete guide to the cost of owning an electric car in India in 2026 — on-road price, charging and running cost per km, servicing, insurance, battery, subsidies and resale, with deep guides on each.",
  alternates: altsFor("/blog/cost-of-owning-an-electric-car-in-india", "en"),
  openGraph: {
    title: "Cost of Owning an Electric Car in India (2026): Full Running-Cost Guide",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="cost-of-owning-an-electric-car-in-india">
      <p>
        The sticker price is only the beginning of what an electric car costs you. The real question
        — and the one this guide answers in full — is what it costs to <em>own and run</em> an EV in
        India across its life: the on-road price, the electricity, the servicing, the insurance, the
        battery, and what you get back when you sell. The short version is that EVs usually cost more
        to buy and meaningfully less to run, and for most regular drivers the running-cost savings
        overtake the price premium within three to four years. Below we break down every component,
        with a link to a deeper guide on each so you can go as far down the rabbit hole as you like.
      </p>

      <h2>The big picture: total cost of ownership</h2>
      <p>
        "Total cost of ownership" (TCO) bundles everything you spend over the years you keep the car —
        purchase, fuel or energy, servicing, insurance, and the resale value you recover at the end.
        It is the only fair way to compare an EV with a petrol car, because the two have opposite cost
        shapes: the EV front-loads cost into the purchase, the petrol car spreads it across fuel and
        servicing. Our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">
          petrol vs electric 5-year cost analysis
        </Link>{" "}
        does this rupee-by-rupee for a real pair of cars, and the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>{" "}
        lets you run it for your own driving.
      </p>

      <h2>1. Purchase price and what brings it down</h2>
      <p>
        EVs still carry a price premium over equivalent petrol cars, but it is shrinking fast, and
        the entry point is now genuinely affordable — there is a real choice of{" "}
        <Link href="/blog/best-electric-cars-under-15-lakh-india">
          electric cars under ₹15 lakh in India
        </Link>
        . Two levers cut the effective price: government incentives and battery-rental plans. Many
        states offer road-tax waivers, registration benefits and purchase subsidies that can knock
        tens of thousands off the on-road figure — see our{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">
          state-by-state EV subsidy and road-tax guide
        </Link>{" "}
        for what applies where you live.
      </p>

      <h2>2. Charging and running cost per kilometre</h2>
      <p>
        This is where EVs win decisively. Charged at home, most electric cars cost roughly ₹1–1.5 per
        km against ₹6–9 for petrol. The variables are your electricity tariff and how often you rely
        on public fast charging, which costs more. We cover home-charging economics in{" "}
        <Link href="/blog/home-ev-charging-cost-india">the cost of charging an EV at home</Link>, how
        long a charge actually takes in{" "}
        <Link href="/blog/ev-charging-time-india">EV charging time explained</Link>, and the
        practicalities of charging without your own parking in{" "}
        <Link href="/blog/ev-charging-apartments-housing-societies-india">
          charging in apartments and housing societies
        </Link>
        .
      </p>

      <h2>3. Servicing and maintenance</h2>
      <p>
        With no oil, spark plugs, clutch or fuel system, EV servicing is mostly inspection — typically
        40–60% cheaper per year than a comparable petrol SUV. The full breakdown of service intervals,
        what gets checked and the real bills is in our{" "}
        <Link href="/blog/ev-maintenance-cost-india">EV maintenance and service cost guide</Link>. The
        recurring items that surprise owners are tyres (which wear faster) and the 12V battery — not
        the powertrain.
      </p>

      <h2>4. The battery: warranty, degradation and replacement</h2>
      <p>
        The traction battery is the part buyers worry about most and pay for least: Indian EVs
        typically carry an 8-year / 1,60,000 km warranty. Out-of-warranty replacement is expensive but
        rare — we put real numbers on it in{" "}
        <Link href="/blog/ev-battery-replacement-cost-india">EV battery replacement cost in India</Link>
        , and explain how heat and charging habits affect longevity in{" "}
        <Link href="/blog/ev-battery-life-india-weather">battery life in Indian weather</Link>.
      </p>

      <h2>5. Insurance</h2>
      <p>
        EV insurance premiums tend to run a little higher than petrol equivalents in the early years,
        because the battery is a costly component and the repair ecosystem is still maturing — though
        the gap is narrowing and some insurers now offer EV-specific cover. The details, and how to
        keep premiums down, are in our{" "}
        <Link href="/blog/ev-insurance-india">EV insurance in India guide</Link>.
      </p>

      <h2>6. Financing: EMI and loans</h2>
      <p>
        Most buyers finance the car, so the monthly EMI is the number that actually shapes
        affordability. Interest rates, tenure and down payment all move it — our{" "}
        <Link href="/blog/electric-car-loan-india">electric car loan guide</Link> covers EV-specific
        loan options, and the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link> shows your monthly
        payment in seconds.
      </p>

      <h2>7. Resale value</h2>
      <p>
        What you recover at the end is part of the cost too. EV resale is improving as the market
        matures, and a healthy, documented battery is the single biggest lever — full detail in{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">
          EV resale value and battery health
        </Link>
        .
      </p>

      <h2>EV vs the alternatives</h2>
      <p>
        Cost is also relative to what else you might buy. If you are weighing an EV against other fuel
        types, see{" "}
        <Link href="/blog/electric-car-vs-hybrid-india">electric vs hybrid</Link> and{" "}
        <Link href="/blog/electric-car-vs-cng-car-india">electric vs CNG</Link>, and if you are buying
        second-hand, our guide to a{" "}
        <Link href="/blog/used-electric-car-india">used electric car in India</Link> covers the
        battery-health checks that protect you.
      </p>

      <h2>So, is an EV worth it for you?</h2>
      <p>
        If you can charge at home and drive enough to use the car regularly, the maths almost always
        favours an EV over a 4–5 year horizon: a higher purchase price, then years of much cheaper
        running. If you cannot charge conveniently or drive very little, the case is weaker. The
        honest way to decide is to put your own numbers in — start with the{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV buying checklist</Link>, then model
        the figures with the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">cost calculator</Link> and shortlist
        cars in the <Link href="/catalog/electric-cars">electric car catalog</Link>.
      </p>

      <h2>Cost of owning an EV — frequently asked questions</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
