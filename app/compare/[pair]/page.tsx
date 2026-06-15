import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdPlaceholder from "@/components/AdPlaceholder";
import JsonLd from "@/components/JsonLd";
import CompareTable from "@/components/compare/CompareTable";
import { productSchema, faqPageSchema, SITE } from "@/lib/seo";
import { CATEGORY_LABELS, priceLabel, vehiclePath, type EV } from "@/lib/ev-data";
import { scoreEvs } from "@/lib/compare-spec";
import {
  allPairSlugs,
  resolvePair,
  relatedPairs,
  comparePath,
} from "@/lib/compare-pairs";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPairSlugs().map((pair) => ({ pair }));
}

const singular = (e: EV) =>
  e.category === "car" ? "car" : e.category === "scooter" ? "scooter" : "bike";

export async function generateMetadata({
  params,
}: {
  params: { pair: string };
}): Promise<Metadata> {
  const resolved = resolvePair(params.pair);
  if (!resolved) return { title: "Comparison not found | EVSelect.in" };
  const { a, b } = resolved;
  const path = comparePath(a.id, b.id);
  return {
    title: `${a.name} vs ${b.name} — EV Comparison & Specs`,
    description: `Compare ${a.name} vs ${b.name} side by side — price, real-world range, battery, power, charging and features. See which electric ${singular(a)} wins on the specs that matter in 2026.`,
    alternates: { canonical: `${SITE.url}${path}` },
    openGraph: {
      title: `${a.name} vs ${b.name} — EV Comparison`,
      description: `Side-by-side comparison of ${a.name} and ${b.name}: price, range, battery, power and charging.`,
      url: `${SITE.url}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${a.name} vs ${b.name} — EV Comparison`,
    },
  };
}

/** Build a short, factual lead paragraph from the data. */
function leadSentences(a: EV, b: EV): string[] {
  const out: string[] = [];
  out.push(
    `The ${a.name} and the ${b.name} are two of India's most cross-shopped electric ${singular(a)}s in 2026. This side-by-side EV comparison lines them up on the specs that decide a purchase — price, real-world range, battery, power and charging — so you can see the trade-offs at a glance.`
  );

  // price
  if (a.priceMinLakh != null && b.priceMinLakh != null && a.priceMinLakh !== b.priceMinLakh) {
    const cheaper = a.priceMinLakh < b.priceMinLakh ? a : b;
    out.push(
      `On price, the ${cheaper.name} starts lower at ${priceLabel(cheaper)} (ex-showroom).`
    );
  }
  // range
  const ra = a.realRangeKm ?? a.rangeKmARAI;
  const rb = b.realRangeKm ?? b.rangeKmARAI;
  if (ra != null && rb != null && ra !== rb) {
    const longer = ra > rb ? a : b;
    const km = Math.max(ra, rb);
    out.push(`For range, the ${longer.name} goes further on a charge (about ${km} km).`);
  }
  return out;
}

function verdict(a: EV, b: EV): string {
  const scores = scoreEvs([a, b]);
  if (scores[0] === scores[1]) {
    return `It's close: the ${a.name} and ${b.name} each lead on a similar number of specs, so the right pick comes down to your priorities — budget, range needs, or features. Use the live comparison tool below to weigh up the spec rows that matter most to you, then check the full specs on each model's page.`;
  }
  const winner = scores[0] > scores[1] ? a : b;
  const loser = scores[0] > scores[1] ? b : a;
  return `On paper, the ${winner.name} leads on more of the headline specs than the ${loser.name}. That said, the "right" EV depends on what you value most — a lower price, longer real-world range, faster charging or specific features — so read the table row by row against your own needs before deciding.`;
}

export default function ComparePairPage({ params }: { params: { pair: string } }) {
  const resolved = resolvePair(params.pair);
  if (!resolved) return notFound();
  const { a, b } = resolved;
  const path = comparePath(a.id, b.id);
  const lead = leadSentences(a, b);
  const cat = CATEGORY_LABELS[a.category];
  const related = relatedPairs(params.pair, 6);

  const faqs = [
    {
      q: `Is the ${a.name} or the ${b.name} better value?`,
      a: `It depends on your budget and needs. ${
        a.priceMinLakh != null && b.priceMinLakh != null
          ? `The ${(a.priceMinLakh < b.priceMinLakh ? a : b).name} starts cheaper, but `
          : ""
      }value also comes down to real-world range, charging speed and features — compare the full spec table above and run the numbers on our EV EMI and cost calculators.`,
    },
    {
      q: `Which has the longer range, the ${a.name} or the ${b.name}?`,
      a: (() => {
        const ra = a.realRangeKm ?? a.rangeKmARAI;
        const rb = b.realRangeKm ?? b.rangeKmARAI;
        if (ra != null && rb != null) {
          const longer = ra >= rb ? a : b;
          return `The ${longer.name} has the higher quoted range. Remember that real-world range is typically lower than claimed (ARAI/IDC) figures, so check the "real-world range" row above for a more realistic comparison.`;
        }
        return `Compare the "range (claimed)" and "real-world range" rows in the table above — real-world range is usually lower than the official claimed figure.`;
      })(),
    },
    {
      q: `Can I compare other electric ${singular(a)}s too?`,
      a: `Yes. Use our free EV comparison tool to compare any two or three electric vehicles in India side by side, across cars, scooters and bikes.`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Compare", path: "/compare-electric-vehicles" },
                { name: `${a.name} vs ${b.name}` },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              {cat} · EV Comparison
            </p>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {a.name} <span className="text-gradient-brand">vs</span> {b.name}
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">
              {lead[0]}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* The crawlable, server-rendered comparison */}
          <CompareTable evs={[a, b]} />

          {lead.length > 1 && (
            <div className="prose-ev mt-8 max-w-none">
              {lead.slice(1).map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          )}

          <AdPlaceholder format="leaderboard" slot="3333333333" className="my-10" />

          <div className="prose-ev max-w-none">
            <h2>{a.name} vs {b.name}: which should you buy?</h2>
            <p>{verdict(a, b)}</p>
            <p>
              Want to change one of the vehicles or add a third? Open the{" "}
              <Link href={`/compare-electric-vehicles?ids=${a.id},${b.id}`}>
                interactive EV comparison tool
              </Link>{" "}
              to build your own head-to-head. You can also browse the full{" "}
              <Link href="/catalog">EV catalog</Link>, estimate EMIs with the{" "}
              <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>, or
              see running-cost savings with the{" "}
              <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
                EV vs petrol cost calculator
              </Link>
              .
            </p>
          </div>

          {/* Related comparisons — crawlable internal links */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-5 font-display text-xl font-bold text-white">
                More EV comparisons
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/compare/${r.slug}`}
                    className="card-hover rounded-xl border border-ev-border bg-ev-card p-4"
                  >
                    <div className="text-xs font-semibold text-white">{r.a.name}</div>
                    <div className="my-1.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                      vs
                    </div>
                    <div className="text-xs font-semibold text-ev-muted">{r.b.name}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mx-auto mt-14 max-w-3xl">
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
          </section>
        </div>
      </main>
      <Footer />
      <JsonLd data={[productSchema(a), productSchema(b), faqPageSchema(faqs)]} />
    </>
  );
}
