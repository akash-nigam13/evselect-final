import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import CostCalculator from "@/components/tools/CostCalculator";
import ToolsCTA from "@/components/ToolsCTA";
import Link from "next/link";
import { altsFor } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const DESC =
  "Compare the real running cost of an electric vehicle versus a petrol car in India. Enter your annual kilometres, electricity tariff and petrol price to see your per-km cost, yearly savings and break-even point — built on real 2026 efficiency figures.";

export const metadata: Metadata = {
  title:
    "EV vs Petrol Cost Calculator (India 2026) — Running Cost & Savings | EVSelect.in",
  description: DESC,
  alternates: altsFor("/ev-calculators/ev-vs-petrol-cost-calculator", "en"),
  openGraph: {
    title: "EV vs Petrol Cost Calculator (India 2026) — Running Cost & Savings",
  },
};

const faqs = [
  {
    q: "How much cheaper is an EV per km than a petrol car?",
    a: "In most Indian conditions an electric car costs roughly ₹1–₹2 per km in electricity, while a petrol car costs ₹6–₹8 per km in fuel. That makes an EV typically 70–85% cheaper to 'fuel'. The exact gap depends on your electricity tariff, the EV's efficiency, your petrol car's mileage and the current petrol price — which is exactly what the calculator works out for your inputs.",
  },
  {
    q: "How much does it cost to fully charge an EV at home?",
    a: "Multiply the usable battery size by your tariff, then add about 10% for charging losses. For example, a 40 kWh battery at ₹8 per unit costs roughly 40 × 8 × 1.1 ≈ ₹352 for a near-full charge, which might give 300–350 km of real-world range. Slab tariffs, time-of-day rates and a dedicated EV meter can change this, so the calculator uses your own ₹/unit figure.",
  },
  {
    q: "How many years does it take to break even versus petrol?",
    a: "Break-even depends on the price gap at purchase and how much you drive. A buyer covering 12,000–15,000 km a year often recovers the EV's higher upfront cost in about 4–6 years through fuel and maintenance savings; high-mileage drivers can break even sooner. Subsidies, road-tax waivers and the 5% GST on EVs shorten the payback further.",
  },
  {
    q: "Do EVs really need less maintenance?",
    a: "Yes. An electric motor has far fewer moving parts than a petrol engine, with no spark plugs, no timing belts, no clutch and no engine oil to change. Regenerative braking also reduces brake-pad wear. Servicing is mostly tyres, brake fluid, coolant and cabin filters, so annual maintenance is typically a fraction of a comparable petrol car's.",
  },
  {
    q: "Does the calculator account for charging losses?",
    a: "Yes. Home AC charging is not 100% efficient — some energy is lost as heat in the charger and battery. We factor in roughly 10% loss, so the electricity you actually pay for is a little higher than the energy stored in the battery. This keeps the per-km estimate realistic rather than optimistic.",
  },
  {
    q: "Is electricity always cheaper than petrol for running a car?",
    a: "Almost always in India, but not infinitely so. If you rely heavily on commercial DC fast chargers at ₹18–₹24 per unit instead of home charging, your per-km cost rises sharply and can approach a very efficient petrol car. For most owners who charge mainly at home, electricity stays dramatically cheaper.",
  },
  {
    q: "Does this calculator include the car's purchase price or EMI?",
    a: "No. This tool focuses on running cost — fuel versus electricity, plus the maintenance advantage — to show your ongoing savings and rough payback. For the financing side, use the EV EMI Calculator, and check current incentives on the EV subsidies guide to see how they reduce the effective purchase price.",
  },
  {
    q: "How accurate are the savings figures?",
    a: "They are a good directional estimate, not a guarantee. Real costs vary with driving style, weather, traffic, terrain and how prices move over time. The calculator deliberately excludes battery degradation, inflation and insurance differences, so treat the output as indicative and verify current tariffs and fuel prices for your city.",
  },
];

export default function EvVsPetrolCostCalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Tools", path: "/ev-calculators" },
                {
                  name: "EV vs Petrol Cost Calculator",
                  path: "/ev-calculators/ev-vs-petrol-cost-calculator",
                },
              ]}
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              Free Tool · Running Cost
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV vs Petrol Cost Calculator
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              See exactly how much you save by going electric. Enter your driving
              habits, electricity tariff and petrol price to compare real per-km
              running costs, your yearly savings and how quickly an EV pays back —
              all on real-world 2026 efficiency figures.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <CostCalculator embedded />

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333356" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              How we calculate your savings
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              The calculator turns a few simple inputs into a clear rupee figure.
              You tell it your <strong className="text-white">annual kilometres</strong> —
              how far you drive in a typical year — and it scales everything to
              that distance. Your <strong className="text-white">electricity tariff
              (₹/unit)</strong> sets the price of charging at home; a unit is one
              kilowatt-hour (kWh), and most Indian households pay somewhere between
              ₹6 and ₹10 per unit depending on slab and state.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              On the EV side, the key number is its{" "}
              <strong className="text-white">real efficiency</strong>, expressed in
              kWh per km — how much energy the car actually uses to cover a
              kilometre. We base this on real-world figures rather than lab claims,
              because that is what shows up on your electricity bill. Crucially, we
              add roughly <strong className="text-white">10% for home-charging
              loss</strong>: AC charging wastes some energy as heat, so the units
              you pay for are slightly more than the energy stored in the battery.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              For the comparison, you enter the current{" "}
              <strong className="text-white">petrol price (₹/litre)</strong> and your
              petrol car&apos;s <strong className="text-white">mileage (km/litre)</strong>.
              Dividing fuel price by mileage gives the petrol cost per km;
              multiplying EV efficiency by your tariff gives the electric cost per
              km. The difference, scaled by your annual kilometres, is your fuel
              saving — before we even count maintenance.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              Why EVs cost less to run
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              The headline reason is the{" "}
              <strong className="text-white">energy-cost gap per km</strong>. Electric
              motors convert a far larger share of their input energy into motion
              than a petrol engine, and electricity is simply cheaper per unit of
              useful work than petrol. In practice an EV often costs ₹1–₹2 per km to
              charge at home against ₹6–₹8 per km for petrol — a difference that
              compounds fast over thousands of kilometres a year.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              The second big saving is <strong className="text-white">maintenance</strong>.
              An EV has dramatically fewer moving parts: no spark plugs, no timing
              belt, no clutch, no multi-speed gearbox and no engine oil to replace
              every few thousand kilometres. That removes a whole category of
              recurring service costs. Routine upkeep narrows to tyres, brake fluid,
              coolant, cabin filters and software — usually a fraction of what a
              comparable petrol car costs to service each year.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              <strong className="text-white">Regenerative braking</strong> adds a
              quieter saving. When you lift off the accelerator or brake gently, the
              motor recovers energy back into the battery instead of wasting it as
              heat in the brake pads. That recaptured energy stretches your range and
              means brake pads and discs last far longer than on a petrol car.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              Reaching break-even
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              EVs usually cost more to buy than an equivalent petrol model, but they
              cost much less to run. <strong className="text-white">Break-even</strong>{" "}
              — or payback — is the point where the running-cost savings have fully
              offset that higher purchase price. The more you drive, the faster you
              get there: a high-mileage commuter banks the per-km saving every single
              day, while a light user takes longer to recover the upfront premium.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              Two things shorten the wait. First, the price gap itself is smaller
              than the sticker suggests once you apply{" "}
              <Link href="/ev-subsidies-india" className="text-brand hover:underline">
                EV subsidies and incentives
              </Link>{" "}
              — state purchase support, road-tax and registration waivers, and the 5%
              GST on EVs. Second, the running-cost saving keeps working in the
              background year after year. If you are financing the car, the{" "}
              <Link
                href="/ev-calculators/ev-emi-calculator"
                className="text-brand hover:underline"
              >
                EV EMI Calculator
              </Link>{" "}
              helps you see how the monthly payment sits against those fuel savings.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              What the estimate does and doesn&apos;t include
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              To stay honest, it is worth being clear about the edges. The calculator
              focuses on the running-cost story — electricity versus petrol, plus the
              maintenance advantage — and deliberately leaves out several real but
              hard-to-predict factors. It does{" "}
              <strong className="text-white">not</strong> model{" "}
              <strong className="text-white">battery degradation</strong> (a battery
              slowly loses capacity over many years),{" "}
              <strong className="text-white">inflation</strong> in electricity or fuel
              prices, or differences in{" "}
              <strong className="text-white">insurance premiums</strong> between an EV
              and a petrol car.
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              It also assumes mostly home charging at your stated tariff; leaning on
              expensive public DC fast chargers would raise your real per-km cost.
              Treat the output as a solid, directional estimate to frame your
              decision — not a precise forecast. To go deeper, browse the{" "}
              <Link href="/catalog/all" className="text-brand hover:underline">
                full EV catalogue
              </Link>{" "}
              or line up specific models in the{" "}
              <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
                compare tool
              </Link>
              .
            </p>

            <p className="mt-6 rounded-xl border border-ev-border bg-ev-card p-4 font-body text-sm leading-relaxed text-ev-muted">
              Indicative only. Figures are estimates based on the inputs you provide
              and typical real-world conditions. Actual costs vary with driving style,
              weather, traffic, electricity slab and fuel prices — verify current
              tariffs for your city before making a purchase decision.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <ToolsCTA
              locale="en"
              tools={["emi", "compare", "range"]}
              className="my-8"
            />
          </section>
        </div>
      </main>

      <Footer />

      <JsonLd
        data={[
          webPageSchema(
            "EV vs Petrol Cost Calculator (India 2026)",
            DESC,
            "/ev-calculators/ev-vs-petrol-cost-calculator",
          ),
          webAppSchema(
            "EV vs Petrol Cost Calculator",
            DESC,
            "/ev-calculators/ev-vs-petrol-cost-calculator",
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
