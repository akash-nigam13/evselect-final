import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webAppSchema, faqPageSchema, howToSchema, SITE } from "@/lib/seo";
import CompareClient from "@/components/compare/CompareClient";
import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import { getById } from "@/lib/ev-data";
import { COMPARE_PAIRS, comparePath } from "@/lib/compare-pairs";

export const metadata: Metadata = {
  title: "Compare EV Cars Side by Side — Free EV Comparison Tool (India 2026)",
  description:
    "Free EV comparison tool for India — compare any 2 or 3 EV cars, scooters or bikes side by side on price, range, battery, power & charging. Live data on 140+ electric vehicles.",
  alternates: altsFor("/compare-electric-vehicles", "en"),
  openGraph: {
    title: "Compare Electric Vehicles Side by Side | EVSelect.in",
    description:
      "Free tool to compare 2–3 EVs in India on price, range, battery, power & charging. 140+ electric cars, scooters & bikes.",
    url: `${SITE.url}/compare-electric-vehicles`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Electric Vehicles Side by Side | EVSelect.in",
    description:
      "Free EV comparison tool — compare 2–3 electric vehicles in India side by side on the specs that matter.",
  },
};

const faqs = [
  {
    q: "How do I compare electric vehicles on EVSelect?",
    a: "Pick your first EV, add a second (and optionally a third), and the tool instantly builds a side-by-side EV comparison table — price, range, battery, power, charging and more — with the leading value highlighted in each row. It's free and needs no sign-up.",
  },
  {
    q: "How many EVs can I compare at once?",
    a: "You can compare two or three electric vehicles at once. Pick any two EVs for a clean head-to-head, or add a third to weigh up three options on the same screen.",
  },
  {
    q: "What specs can I compare?",
    a: "The EV comparison tool puts every spec that matters side by side — ex-showroom price, real-world range, battery capacity, power and torque, top speed, charging time and fast-charging support — with the leading value highlighted for each row.",
  },
  {
    q: "Is the EV comparison tool free?",
    a: "Yes. The EV comparison tool is completely free to use, with no sign-up required. It runs on live data covering 140+ electric cars, scooters and bikes sold in India.",
  },
  {
    q: "Which electric vehicles can I compare?",
    a: "You can compare electric cars, scooters and bikes from every major brand available in India, including Tata, MG, Mahindra, Hyundai, BYD, Ola, Ather, TVS and more.",
  },
  {
    q: "What's the difference between claimed and real-world range?",
    a: "Claimed range (ARAI/IDC) is measured in controlled test conditions and is almost always higher than what you'll see day to day. Our comparison shows both a claimed-range and a real-world range row so you can judge EVs on realistic numbers, not just the headline figure.",
  },
  {
    q: "Does the comparison include on-road price or subsidies?",
    a: "Prices shown are ex-showroom and indicative. On-road price varies by city (registration, road tax, insurance), and state EV subsidies can lower the effective cost. Check our EV subsidies guide and the EV vs petrol cost calculator to estimate your real, all-in cost.",
  },
];

/** Curated popular comparisons that have a static versus page (for crawlable links). */
const popularComparisons = COMPARE_PAIRS.map(([a, b]) => {
  const ea = getById(a);
  const eb = getById(b);
  return ea && eb ? { slug: `${a}-vs-${b}`, a: ea, b: eb, path: comparePath(a, b) } : null;
}).filter(Boolean) as { slug: string; a: { name: string }; b: { name: string }; path: string }[];

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Compare", path: "/compare-electric-vehicles" }]} className="mb-6 justify-center" />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              Comparison Engine
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Compare <span className="text-gradient-brand">EV cars, scooters &amp; bikes</span> in India, side by side
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-ev-text/60">
              Put any two or three EVs head to head and get a full side-by-side
              breakdown — every spec that matters, with the leader highlighted in
              each row.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CompareClient />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />

          <div className="prose-ev mx-auto mb-12 mt-16 max-w-3xl">
            <h2>Compare electric vehicles in India, side by side</h2>
            <p>
              Choosing between two or three EVs is far easier when you can see every number in
              one place. Our free EV comparison tool lets you compare electric vehicles in India on
              the specs that actually decide a purchase — ex-showroom price, real-world range,
              battery capacity, power, charging time and more — with the leading value highlighted
              in each row so the trade-offs are obvious at a glance. It works across electric cars,
              scooters and bikes, so you can line up direct rivals or weigh up two very different
              options.
            </p>

            <h2>How to use the EV comparison tool</h2>
            <p>Comparing EVs takes about ten seconds and three steps:</p>
            <ol>
              <li>
                <strong>Pick your first EV.</strong> Search by model or brand in the
                &ldquo;Vehicle A&rdquo; box — Tata Nexon EV, Ola S1 Pro, Ather 450X, anything in
                the catalog.
              </li>
              <li>
                <strong>Add a second (and optional third) EV.</strong> Choose a direct rival or a
                completely different option to compare EVs across categories.
              </li>
              <li>
                <strong>Read the side-by-side table.</strong> Every spec lines up row by row and
                the stronger value is highlighted, so you can see which EV leads on price, range,
                power and charging at a glance.
              </li>
            </ol>
            <p>
              Want a wider shortlist first? Browse the{" "}
              <Link href="/catalog">full EV catalog</Link>, or narrow it down by type —{" "}
              <Link href="/catalog/electric-cars">electric cars</Link>,{" "}
              <Link href="/catalog/electric-scooters">electric scooters</Link> and{" "}
              <Link href="/catalog/electric-bikes">electric bikes</Link>.
            </p>

            <h2>Why compare EVs before you buy</h2>
            <p>
              An electric vehicle is a long-term purchase, and the right choice depends on numbers
              that aren&apos;t obvious from a showroom brochure. Comparing EVs side by side helps
              you:
            </p>
            <ul>
              <li>
                <strong>Avoid overpaying.</strong> Two EVs at a similar price can differ sharply on
                range and features — a side-by-side view shows where your money actually goes. Work
                out monthly cost with the{" "}
                <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>.
              </li>
              <li>
                <strong>Beat range anxiety.</strong> Comparing real-world range (not just the
                claimed figure) tells you which EV genuinely fits your daily drive and weekend
                trips.
              </li>
              <li>
                <strong>Charge smarter.</strong> Fast-charging support and charge times vary widely
                — a key spec if you can&apos;t charge at home every night.
              </li>
              <li>
                <strong>See the running-cost gap.</strong> Once you&apos;ve shortlisted, check the
                long-term savings versus petrol with our{" "}
                <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
                  EV vs petrol cost calculator
                </Link>{" "}
                and what you can claim through{" "}
                <Link href="/ev-subsidies-india">EV subsidies in India</Link>.
              </li>
            </ul>

            <h2>What to compare: the specs that matter</h2>
            <p>
              Not every number carries the same weight. When you compare electric vehicles, focus
              on these first:
            </p>
            <ul>
              <li>
                <strong>Price (ex-showroom):</strong> the starting point — but remember on-road
                price and subsidies change the real figure.
              </li>
              <li>
                <strong>Real-world range vs claimed range:</strong> claimed (ARAI/IDC) numbers run
                optimistic; the real-world row is the one to trust.
              </li>
              <li>
                <strong>Battery capacity (kWh):</strong> bigger usually means more range, but also
                more weight and a higher price.
              </li>
              <li>
                <strong>Power &amp; torque:</strong> how the EV actually drives, especially for
                performance scooters and motorcycles.
              </li>
              <li>
                <strong>Charging (kW &amp; time):</strong> DC fast-charge support and the 10–80%
                time decide how practical long trips are.
              </li>
            </ul>
            <p>
              New to the jargon? Our <Link href="/ev-guides">EV 101 hub and glossary</Link>{" "}
              explains every term in plain language.
            </p>

            <h2>Compare EVs by range and price</h2>
            <p>
              The two numbers most buyers in India weigh first are range and price, and they often
              pull in opposite directions. When you compare EV range, look at the real-world row
              rather than the ARAI/IDC claim — a longer claimed range doesn&apos;t always survive
              highway speeds and AC use. When you compare EV price, the ex-showroom figure is only the
              start: on-road price and state subsidies can swing the real cost by lakhs. The tool
              shows claimed range, real-world range and ex-showroom price side by side so you can see
              the range-per-rupee trade-off instantly, then estimate the all-in number with the{" "}
              <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">cost calculator</Link> and{" "}
              <Link href="/ev-subsidies-india">EV subsidies guide</Link>. For a deeper read on why
              claimed and real range differ, see{" "}
              <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>.
            </p>
          </div>

          {/* Server-rendered, crawlable popular comparisons */}
          <section className="mx-auto mb-12 max-w-5xl">
            <h2 className="mb-2 font-display text-2xl font-bold text-white">
              Popular EV comparisons
            </h2>
            <p className="mb-6 font-body text-sm text-ev-text/60">
              Jump straight into the head-to-heads buyers ask about most.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={c.path}
                  className="card-hover rounded-xl border border-ev-border bg-ev-card p-4"
                >
                  <span className="text-sm font-semibold text-white">
                    {c.a.name} <span className="text-brand">vs</span> {c.b.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="cursor-pointer list-none font-display font-bold text-white marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>

            {/* E-E-A-T / freshness signal */}
            <p className="mt-8 text-center font-body text-xs text-ev-muted">
              Specs and prices are indicative and updated for 2026. See how we source and verify EV
              data in our{" "}
              <Link href="/editorial-policy" className="underline hover:text-brand">
                editorial &amp; data policy
              </Link>
              . Always confirm the latest figures with the official dealer before buying.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          webAppSchema(
            "EV Comparison Tool",
            "Compare any two or three electric vehicles in India side by side — range, battery, price, power and charging.",
            "/compare-electric-vehicles",
          ),
          howToSchema({
            name: "How to compare electric vehicles",
            description:
              "Compare any two or three EVs in India side by side on price, range, battery, power and charging.",
            path: "/compare-electric-vehicles",
            steps: [
              { name: "Pick your first EV", text: "Search by model or brand to select Vehicle A." },
              { name: "Add a second (and optional third) EV", text: "Choose a rival or a different option to compare." },
              { name: "Read the side-by-side table", text: "Every spec lines up row by row with the leading value highlighted." },
            ],
          }),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
