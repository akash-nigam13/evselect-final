import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check } from "lucide-react";
import {
  ScooterHeroBanner, AtherRiztaCard, TVSiQubeCard, OlaS1ProCard,
  BajajChetakCard, HeroVidaCard, ScooterRangeChart,
} from "@/components/blog/BlogImages";

export const metadata: Metadata = {
  title: "Top 5 Best Electric Scooters in India 2026 — Range, Price & Features Compared",
  description: "Looking for the best electric scooter in India in 2026? We compare the top and best 5 models on ARAI range, real-world performance, charging time, and value for money.",
  alternates: { canonical: "https://evselect.in/blog/top-5-electric-scooters-india-2026" },
  openGraph: { title: "Top 5 Best Electric Scooters in India 2026", type: "article" },
};

const scooters = [
  {
    rank: 1, name: "Ather Rizta Z", brand: "Ather Energy", price: "₹1.49 L",
    range: "160 km", speed: "100 km/h", charge: "30 min (fast)", battery: "3.7 kWh",
    accent: "#00e5ff", badge: "Editor's Pick",
    why: "Ather's family scooter hits the sweet spot of practicality, performance, and India's most reliable fast-charging network.",
    pros: ["450+ Ather Grid fast chargers across 180 cities","IP67-rated battery — monsoon-proof","Over-the-air software updates","Best-in-class ride quality"],
    cons: ["No rear disc on base variant","App connectivity can be inconsistent"],
    ImageCard: "AtherRiztaCard",
  },
  {
    rank: 2, name: "TVS iQube S", brand: "TVS Motor Company", price: "₹1.41 L",
    range: "145 km", speed: "95 km/h", charge: "60 min (fast)", battery: "3.4 kWh",
    accent: "#39ff14", badge: "Best for Tier-2 Cities",
    why: "TVS's 70-year service network makes the iQube S the most practical choice for buyers outside metro cities.",
    pros: ["Nationwide service at 1,000+ TVS centres","Proven thermal management for Indian summers","SmartXonnect Bluetooth connectivity","Strong resale value"],
    cons: ["Smaller charging network vs Ather","Touchscreen UI is slower than competitors"],
    ImageCard: "TVSiQubeCard",
  },
  {
    rank: 3, name: "Ola S1 Pro Gen 3", brand: "Ola Electric", price: "₹1.29 L",
    range: "195 km", speed: "125 km/h", charge: "25 min (Hypercharger)", battery: "4.0 kWh",
    accent: "#ffb800", badge: "Best Range",
    why: "The highest ARAI range in its class and Ola's expanding Hypercharger network make this ideal for high-mileage urban commuters.",
    pros: ["Market-leading 195 km ARAI range","4,000+ Ola Hypercharger stations","MoveOS 5 with Hill Hold","Best performance per rupee"],
    cons: ["Service quality inconsistent across markets","Software bugs reported on early units"],
    ImageCard: "OlaS1ProCard",
  },
  {
    rank: 4, name: "Bajaj Chetak Premium", brand: "Bajaj Auto", price: "₹1.58 L",
    range: "126 km", speed: "73 km/h", charge: "5 hrs (home only)", battery: "3.2 kWh",
    accent: "#a78bfa", badge: "Premium Lifestyle",
    why: "The Chetak's all-metal retro body and Bajaj's unmatched national service network make it the definitive premium lifestyle EV scooter.",
    pros: ["All-metal body — premium feel and longevity","Bajaj's 1,000+ dealer network","IP67 protection rating","Strong brand resale value"],
    cons: ["No fast-charging capability","Lower top speed vs performance rivals"],
    ImageCard: "BajajChetakCard",
  },
  {
    rank: 5, name: "Hero Vida V2 Pro", brand: "Hero MotoCorp", price: "₹1.11 L",
    range: "165 km", speed: "90 km/h", charge: "45 min (fast)", battery: "3.94 kWh",
    accent: "#f43f5e", badge: "Best Value",
    why: "Hero's EV at under ₹1.15 L with 165 km range is the best value-for-money proposition in the 2026 electric scooter segment.",
    pros: ["Most affordable in the top 5","165 km range at this price is exceptional","Hero's 6,000+ service centres","Swappable battery option available"],
    cons: ["Feature set basic vs Ather/Ola","Charging network still ramping up"],
    ImageCard: "HeroVidaCard",
  },
];

const ImageCards: Record<string, () => JSX.Element> = {
  AtherRiztaCard, TVSiQubeCard, OlaS1ProCard, BajajChetakCard, HeroVidaCard,
};

const sources = [
  { label: "VAHAN Dashboard — EV Registration Data, Nov 2025", url: "https://vahan.parivahan.gov.in" },
  { label: "ARAI — Official EV Testing & Certification Data", url: "https://www.araiindia.com" },
  { label: "Ather Energy — Rizta Z Official Specifications", url: "https://www.atherenergy.com" },
  { label: "TVS Motor Company — iQube S Specifications", url: "https://www.tvsmotor.com" },
  { label: "Ola Electric — S1 Pro Gen 3 Official Page", url: "https://www.olaelectric.com" },
  { label: "Bajaj Auto — Chetak Official Page", url: "https://www.bajajchetak.com" },
  { label: "Hero MotoCorp — Vida V2 Pro Specifications", url: "https://www.heromotocorp.com" },
];

export default function Article1() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        {/* Hero Banner Image */}
        <div className="w-full overflow-hidden border-b border-ev-border/30">
          <ScooterHeroBanner />
        </div>

        {/* Header */}
        <div className="bg-ev-surface/20 border-b border-ev-border/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-4 bg-ev-cyan/10 border-ev-cyan/30 text-ev-cyan">Buying Guide</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
             Top & Best Electric Scooters in India 2026
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-5">
              We analysed India&apos;s best electric scooters in 2026 on ARAI range, real-world performance, charging times, service networks, and 5-year running costs.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ev-cyan" />Jan 15, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ev-cyan" />11 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                The Indian electric scooter market has matured remarkably. In 2026, monthly EV two-wheeler registrations crossed <strong className="text-ev-cyan">1.5 lakh units</strong> for the first time, and the competition among top brands has never been fiercer. This guide cuts through the marketing noise. The top 5 and best electric scooters in India are mentioned below.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "1.5L+", label: "Monthly EV 2W Sales", color: "#00e5ff" },
                  { value: "38%",   label: "YoY Growth",          color: "#39ff14" },
                  { value: "₹800",  label: "Avg Monthly Saving",  color: "#ffb800" },
                  { value: "60+",   label: "Models in Market",    color: "#a78bfa" },
                ].map(({ value, label, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
                    <div className="font-display font-black text-2xl mb-1" style={{ color }}>{value}</div>
                    <div className="text-ev-muted text-xs font-body">{label}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000001" className="my-8" />

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">5 Best Electric Scooters of 2026</h2>

              {scooters.map((s) => {
                const Img = ImageCards[s.ImageCard];
                return (
                  <div key={s.rank} className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden my-8" style={{ borderTopColor: s.accent, borderTopWidth: 2 }}>
                    {/* Product Image */}
                    <div className="w-full aspect-[400/260] bg-ev-bg overflow-hidden">
                      <Img />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-black text-sm" style={{ backgroundColor: `${s.accent}20`, color: s.accent }}>#{s.rank}</span>
                            <span className="text-xs font-mono text-ev-muted">{s.brand}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: s.accent, backgroundColor: `${s.accent}15` }}>{s.badge}</span>
                          </div>
                          <h3 className="font-display font-bold text-white text-xl">{s.name}</h3>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-display font-black text-lg" style={{ color: s.accent }}>{s.price}</div>
                          <div className="text-xs font-mono text-ev-muted">ex-showroom</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {[{label:"ARAI Range",value:s.range},{label:"Top Speed",value:s.speed},{label:"Fast Charge",value:s.charge},{label:"Battery",value:s.battery}].map(({label,value})=>(
                          <div key={label} className="bg-ev-surface/60 rounded-xl px-3 py-2.5 text-center">
                            <div className="font-mono text-sm font-semibold" style={{ color: s.accent }}>{value}</div>
                            <div className="text-ev-muted text-[10px] font-body mt-0.5">{label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl px-4 py-2.5 mb-4 text-sm font-body" style={{ backgroundColor: `${s.accent}10`, borderLeft: `3px solid ${s.accent}` }}>
                        <span className="text-ev-muted text-xs font-mono mr-2">WHY BUY:</span>
                        <span className="text-ev-text/80">{s.why}</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-mono text-ev-green uppercase tracking-wider mb-2">Pros</p>
                          <ul className="space-y-1.5">
                            {s.pros.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-xs font-body text-ev-text/65">
                                <Check className="w-3.5 h-3.5 text-ev-green shrink-0 mt-0.5" />{p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-ev-amber uppercase tracking-wider mb-2">Cons</p>
                          <ul className="space-y-1.5">
                            {s.cons.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-xs font-body text-ev-text/65">
                                <span className="text-ev-amber mt-0.5 shrink-0">—</span>{c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <AdPlaceholder format="leaderboard" slot="9000000002" className="my-10" />

              {/* Range Chart */}
              <h2 className="font-display font-bold text-white text-2xl mt-14 mb-5">ARAI vs Real-World Range</h2>
              <div className="w-full aspect-[820/340] rounded-2xl overflow-hidden border border-ev-border my-6">
                <ScooterRangeChart />
              </div>
              <p className="text-ev-text/55 text-xs font-body italic text-center mb-8">
                Real-world range is typically 75–80% of ARAI figures in Indian city traffic conditions.
              </p>

              {/* Comparison table */}
              <h2 className="font-display font-bold text-white text-2xl mt-14 mb-5">Full Specification Comparison</h2>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ev-border bg-ev-surface/20">
                      {["Model","Price","ARAI Range","Top Speed","Battery","Fast Charge"].map((h,i)=>(
                        <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{color:i===2?"#00e5ff":"#4a6fa5"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scooters.map((s,i)=>(
                      <tr key={s.name} className={`border-b border-ev-border/40 ${i%2!==0?"bg-ev-surface/10":""}`}>
                        <td className="px-4 py-3 font-display font-semibold text-white text-xs">{s.name}</td>
                        <td className="px-4 py-3 font-body text-ev-text/70 text-xs">{s.price}</td>
                        <td className="px-4 py-3 font-mono text-ev-cyan text-xs">{s.range}</td>
                        <td className="px-4 py-3 font-body text-ev-text/70 text-xs">{s.speed}</td>
                        <td className="px-4 py-3 font-body text-ev-text/70 text-xs">{s.battery}</td>
                        <td className="px-4 py-3 font-body text-ev-text/70 text-xs">{s.charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl p-5 my-8 border bg-ev-cyan/5 border-ev-cyan/25">
                <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">Always check state-level FAME III incentives before purchasing. Delhi, Maharashtra, and Gujarat offer additional subsidies of ₹5,000–₹30,000 on top of central incentives.</p>
              </div>

              <div className="rounded-2xl p-5 my-8 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">Key Takeaway</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">Even the most expensive scooter — the Bajaj Chetak at ₹1.58 L — pays back its premium over a petrol scooter within 3–4 years on running costs alone. 2026 is the most compelling year yet to switch to electric.</p>
              </div>

              <section className="mt-16 pt-8 border-t border-ev-border/40">
                <h2 className="font-display font-bold text-white text-xl mb-5 flex items-center gap-3"><span className="w-1 h-5 rounded-full bg-ev-muted inline-block" />Sources &amp; References</h2>
                <ol className="space-y-2 pl-2">
                  {sources.map(({label,url},i)=>(
                    <li key={i} className="flex items-start gap-3 text-sm font-body text-ev-text/60">
                      <span className="font-mono text-[11px] text-ev-muted shrink-0 mt-0.5 w-5">{i+1}.</span>
                      <span>{label} <a href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-ev-muted hover:text-ev-cyan break-all">[{url}]</a></span>
                    </li>
                  ))}
                </ol>
              </section>
              <div className="mt-8 p-5 bg-ev-surface/40 border border-ev-border/40 rounded-2xl">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-2">Disclaimer</p>
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">All prices are indicative ex-showroom figures at time of writing and may vary by state, variant, and dealership. Always verify directly with the manufacturer or authorised dealer. EVSelect.in is independent and not affiliated with any vehicle manufacturer.</p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Quick Rankings</p>
                <ul className="space-y-2">
                  {scooters.map((s)=>(
                    <li key={s.rank} className="flex items-center gap-2 text-xs font-body text-ev-muted hover:text-ev-cyan transition-colors">
                      <span className="font-mono text-[10px] w-4" style={{color:s.accent}}>#{s.rank}</span>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{backgroundColor:s.accent}} />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare These Scooters</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Use our side-by-side comparison tool for a deeper spec analysis.</p>
                <Link href="/compare" className="block text-center py-2.5 rounded-xl text-xs font-display font-bold bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors">Compare EVs →</Link>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
