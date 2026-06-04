import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import RangeEstimator from "@/components/tools/RangeEstimator";
import ToolsCTA from "@/components/ToolsCTA";
import { altsFor } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const DESC =
  "Estimate the real-world range and charging time of any 2026 Indian-market EV. See how speed, AC, terrain and temperature cut into the ARAI figure — and how long an AC or DC charge actually takes.";

export const metadata: Metadata = {
  title: "EV Range & Charging Calculator (India 2026) — Real-World Range | EVSelect.in",
  description: DESC,
  alternates: altsFor("/ev-calculators/ev-range-calculator", "en"),
  openGraph: {
    title: "EV Range & Charging Calculator (India 2026) — Real-World Range",
  },
};

const faqs = [
  {
    q: "Why is my EV's real range less than the ARAI figure?",
    a: "ARAI (and the underlying MIDC) range is measured in a controlled lab cycle with low average speeds, no air-conditioning, gentle acceleration and a fresh battery. Real driving — highway speeds, AC, traffic, hills, a full load — uses more energy per km, so most EVs return roughly 20–30% less than the claimed figure. The ARAI number is best treated as a comparison yardstick between models, not a promise of what you'll see on the road.",
  },
  {
    q: "How do I estimate my real-world range?",
    a: "A quick rule of thumb is to take the ARAI range and multiply by about 0.7–0.8 for mixed driving, or as low as 0.6 if you drive mostly at highway speeds with the AC running. The calculator above does this more precisely by adjusting for your driving style, AC use, terrain, load and the battery's state of health, so you get a realistic band rather than a single optimistic figure.",
  },
  {
    q: "How long does it take to charge an EV?",
    a: "It depends entirely on the charger. A 3.3 kW home AC point can take 8–15 hours for a full car battery, a 7.4 kW wall box roughly 6–9 hours, and a 50–150 kW DC fast charger can take a typical EV from 10% to 80% in about 30–60 minutes. A rough estimate for AC charging is battery kWh divided by charger kW; DC charging is faster but slows down (tapers) sharply above 80%.",
  },
  {
    q: "Does AC reduce EV range?",
    a: "Yes. Cabin air-conditioning is one of the biggest non-driving loads in an EV and can cut real range by anywhere from 5% in mild weather to 15–20% on a peak-summer day with the AC working hard. The single best trick is to pre-cool the cabin while the car is still plugged in, so the energy comes from the grid rather than your battery.",
  },
  {
    q: "Does cold or hot weather affect range?",
    a: "Both do. Lithium-ion batteries deliver less energy and charge more slowly when cold, while extreme heat increases the load on the cooling system and AC. In India the dominant factor is summer heat and heavy AC use; in hill stations and the far north, cold mornings can also trim range. Expect your worst real-world range on the hottest and coldest days.",
  },
  {
    q: "Does driving style change how far I can go?",
    a: "Significantly. Hard acceleration and high cruising speeds (above ~80 km/h) raise consumption disproportionately because aerodynamic drag rises with the square of speed. Smooth inputs, moderate speeds and good use of regenerative braking in city traffic can easily add 10–20% to your range compared with an aggressive style.",
  },
  {
    q: "Is DC fast charging from 80% to 100% slow?",
    a: "Yes, and it's normal. To protect the cells, the battery management system tapers the charging power as the pack fills, so the last 20% can take almost as long as the first 60–70%. On a road trip it's usually faster overall to charge to about 80% and move on, rather than waiting for a full 100%.",
  },
  {
    q: "Does battery state of health affect range?",
    a: "Over the years a battery gradually loses a small amount of usable capacity, which slightly reduces range. Most modern EV packs are warranted to retain around 70% of capacity after about 8 years or 1.5–1.6 lakh km, and real-world degradation is usually gentle if you avoid constant 100% charging and frequent rapid charging in extreme heat.",
  },
];

export default function EvRangeCalculatorPage() {
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
                { name: "EV Range Calculator", path: "/ev-calculators/ev-range-calculator" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brand">
              Free Tool
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV Range &amp; Charging Calculator
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              Find out how far an electric vehicle will really take you — and how
              long it takes to charge. Pick a 2026 Indian-market EV, set your
              driving style, AC use, terrain and load, and get a realistic
              range band instead of the optimistic ARAI sticker figure.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <RangeEstimator embedded />

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333357" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            ARAI range vs real-world range
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            Every EV sold in India quotes a headline range certified under the
            ARAI test, which is based on the Modified Indian Driving Cycle
            (MIDC). That cycle runs at modest, steady speeds, with no
            air-conditioning, gentle acceleration and a brand-new battery — ideal
            conditions you almost never replicate in daily use. The result is a
            number that is genuinely useful for comparing one model against
            another, but consistently higher than what you'll see on the road.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            As a working rule, most EVs in India deliver roughly{" "}
            <strong className="text-white">20–30% less</strong> than their ARAI
            figure in mixed real-world driving, and the gap can widen further if
            you spend a lot of time at highway speeds with the AC on. So a car
            rated at 500 km ARAI is more realistically a 350–400 km car on a
            typical day. Treat the claimed figure as a ceiling, not an average.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            What affects your real range
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            Several factors pull your real range below the lab number, and they
            stack on top of one another:
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            Speed and road type
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            Aerodynamic drag rises with the square of speed, so sustained
            highway cruising at 100–120 km/h is far thirstier than city or
            suburban driving. Counter-intuitively, EVs are often most efficient
            in slow city traffic, where regenerative braking recovers energy at
            every stop.
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            Air-conditioning and heating
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            In Indian conditions the cabin AC is the single biggest accessory
            load. On a hot day with the AC working hard it can shave 10–20% off
            your range. Cabin heating, where used in colder regions, has a
            similar effect.
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            Terrain and load
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            Climbing hills costs energy, though some of it comes back on the
            descent through regen. A car loaded with five passengers and
            luggage, or fitted with a roof carrier, uses noticeably more energy
            per km than the same car driven solo.
          </p>
          <h3 className="mt-6 font-display text-lg font-bold text-white">
            Temperature, driving style and battery health
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-ev-text/70">
            Extreme heat or cold both reduce usable range and slow charging.
            Aggressive acceleration and hard braking waste energy, while smooth
            inputs preserve it. Finally, as a battery ages it loses a little
            usable capacity, so an older EV's real range is slightly lower than
            it was when new.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            How charging time works
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            EV charging comes in two broad flavours. <strong className="text-white">AC
            (slow) charging</strong> — a 3.3 kW home socket, a 7.4 kW wall box or
            a public AC point — is what you'll use overnight at home or at work.
            A rough estimate of the time is simply the battery's usable kWh
            divided by the charger's kW: a 40 kWh battery on a 3.3 kW point takes
            around 12 hours, while the same battery on a 7.4 kW box is closer to
            5–6 hours.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ev-text/70">
            <strong className="text-white">DC fast charging</strong> (typically
            30–150 kW or more) is for top-ups on the go. Here the headline figure
            is usually quoted as 10–80%, because charging deliberately slows down
            (tapers) above 80% to protect the cells. That means going from{" "}
            <strong className="text-white">10% to 80% on DC is much faster</strong>{" "}
            — often 30–60 minutes — than crawling from 80% to 100%, which can take
            almost as long again. On road trips it's usually smartest to charge to
            around 80% and keep moving.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
            Tips to maximise range
          </h2>
          <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-ev-text/70">
            <li>
              <strong className="text-white">Drive smoothly.</strong> Gentle
              acceleration and anticipation beat hard launches and late braking
              for efficiency.
            </li>
            <li>
              <strong className="text-white">Keep speeds moderate.</strong>{" "}
              Cruising at 80–90 km/h instead of 110–120 km/h on the highway can
              add a meaningful chunk of range.
            </li>
            <li>
              <strong className="text-white">Pre-cool while plugged in.</strong>{" "}
              Cool (or warm) the cabin from the charger before you set off so the
              big initial AC load doesn't come from your battery.
            </li>
            <li>
              <strong className="text-white">Check tyre pressure.</strong> Correct
              pressure cuts rolling resistance — under-inflated tyres quietly eat
              into your range.
            </li>
            <li>
              <strong className="text-white">Use eco and regen modes.</strong> Eco
              modes soften the throttle, and stronger regenerative braking
              recovers energy in stop-go traffic.
            </li>
          </ul>

          <p className="mt-8 font-body text-base leading-relaxed text-ev-text/70">
            Want to go deeper? Read our full breakdown of{" "}
            <Link href="/blog/real-world-range-vs-arai-india" className="text-brand hover:underline">
              real-world range vs the ARAI figure
            </Link>
            , plan your charging with the{" "}
            <Link href="/ev-charging-station-setup-india" className="text-brand hover:underline">
              EV charging station setup guide
            </Link>
            , browse the{" "}
            <Link href="/catalog" className="text-brand hover:underline">
              full EV catalogue
            </Link>
            , or line up two models in the{" "}
            <Link href="/compare-electric-vehicles" className="text-brand hover:underline">
              compare tool
            </Link>
            .
          </p>

          {/* FAQ */}
          <h2 className="mt-12 font-display text-2xl font-bold text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                  {f.q}
                  <span className="text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 font-body text-sm leading-relaxed text-ev-muted">
            All figures from this calculator are indicative estimates only.
            Actual range and charging times vary with the specific vehicle,
            conditions, charger and battery health — always treat the results as
            a guide, not a guarantee.
          </p>

          <ToolsCTA locale="en" tools={["emi", "cost", "compare"]} className="my-8" />
        </div>
      </main>

      <Footer />
      <JsonLd
        data={[
          webPageSchema(
            "EV Range & Charging Calculator (India 2026)",
            DESC,
            "/ev-calculators/ev-range-calculator",
          ),
          webAppSchema(
            "EV Range & Charging Calculator",
            DESC,
            "/ev-calculators/ev-range-calculator",
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
