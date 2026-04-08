import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Petrol vs Electric Car in India: 5-Year Total Cost of Ownership (2026)",
  description:
    "Is buying an electric car really cheaper than petrol in India? We break down every cost — purchase price, fuel, insurance, maintenance, depreciation — over 5 years with real Indian data.",
  keywords: ["petrol vs electric car India", "EV total cost of ownership India", "electric car cheaper than petrol India 2026"],
  alternates: { canonical: "https://evselect.in/blog/petrol-vs-electric-5-year-cost-india" },
  openGraph: { title: "Petrol vs Electric: 5-Year Total Cost of Ownership in India (2026)", type: "article" },
};

const tcoRows = [
  ["On-Road Purchase Price", "₹22,00,000", "₹20,20,000", "−₹1,80,000"],
  ["5-Year Fuel / Electricity", "₹81,600", "₹4,46,400", "+₹3,64,800"],
  ["5-Year Maintenance", "₹34,000", "₹81,100", "+₹47,100"],
  ["5-Year Insurance", "₹1,33,500", "₹1,74,000", "+₹40,500"],
  ["Less: Estimated Resale", "−₹9,25,000", "−₹9,00,000", "−₹25,000"],
  ["NET 5-YEAR TCO", "≈ ₹14,24,100", "≈ ₹17,21,500", "≈ +₹2,97,400"],
];

const maintenanceRows = [
  ["Engine Oil & Filter Changes", "₹0", "₹15,600"],
  ["Brake Pad Replacement", "₹2,500", "₹9,000"],
  ["Air Filter / Fuel Filter", "₹0", "₹4,200"],
  ["Coolant / Transmission Service", "₹0", "₹6,800"],
  ["Spark Plugs / Ignition", "₹0", "₹5,500"],
  ["Battery / Electrical Service", "₹3,500", "₹4,000"],
  ["Tyre Replacement (1 set)", "₹16,000", "₹14,000"],
  ["Annual Service Charges", "₹12,000", "₹22,000"],
  ["Total Maintenance (5 yr)", "₹34,000", "₹81,100"],
];

const sources = [
  { label: "Tata Motors — Nexon EV Max Official Pricing, Jan 2026", url: "https://www.tatamotors.com" },
  { label: "Hyundai India — Creta Official Pricing, Jan 2026", url: "https://www.hyundai.com/in" },
  { label: "PPAC — Petrol Price Data Mumbai, Jan 2026", url: "https://ppac.gov.in" },
  { label: "NITI Aayog — India EV Total Cost of Ownership Study", url: "https://www.niti.gov.in" },
  { label: "IRDAI — Motor Insurance Premium Rates & EV Norms 2025", url: "https://irdai.gov.in" },
  { label: "SIAM — India Automobile Depreciation & Resale Value Data", url: "https://www.siam.in" },
];

export default function Article3() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-5 bg-ev-amber/10 border-ev-amber/30 text-ev-amber">Cost Analysis</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Petrol vs Electric Car in India: 5-Year Total Cost of Ownership (2026)
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-6">
              A rupee-by-rupee breakdown of purchase price, fuel, insurance, maintenance, and resale value. We compare the Tata Nexon EV Max against the Hyundai Creta petrol over 5 years of typical urban use.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ev-amber" />Feb 3, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ev-amber" />14 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-4">
                The question every Indian car buyer is asking is deceptively simple: is an electric car actually cheaper than petrol once you account for everything? The real answer lives in the total cost of ownership (TCO) — every rupee you spend from purchase day to the moment you sell the vehicle five years later.
              </p>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                All figures use January 2026 prices, a <strong className="text-ev-amber">12,000 km/year</strong> usage assumption (India average), Delhi electricity at ₹8/unit, and Mumbai petrol at ₹104.15/litre.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "₹3L+",  label: "5-Year EV Savings",   sub: "Urban, 12,000 km/yr",    color: "#39ff14" },
                  { value: "40%",   label: "Lower Maintenance",    sub: "EV vs petrol over 5 yr", color: "#00e5ff" },
                  { value: "₹104",  label: "Mumbai Petrol Price",  sub: "Jan 2026 per litre",     color: "#ffb800" },
                  { value: "3 yr",  label: "Typical Break-Even",   sub: "High-mileage urban use", color: "#a78bfa" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000005" className="my-8" />

              {/* Infographic */}
              <div className="my-10 rounded-2xl border border-dashed border-ev-amber/30 overflow-hidden" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,184,0,0.06), #050b14)" }}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
                  <p className="text-xs font-mono text-ev-amber uppercase tracking-widest">Infographic Placeholder</p>
                  <p className="text-ev-text/50 text-sm font-body max-w-md leading-relaxed">
                    <strong className="text-ev-text/70">Designer brief:</strong> Stacked horizontal bar chart — Nexon EV Max (top, cyan) and Creta Petrol (bottom, amber). Segments: Purchase Price, Fuel/Electricity, Insurance, Maintenance, minus Resale Value. Annotate total TCO at end of each bar. Source note: Jan 2026 data, 12,000 km/yr, Delhi.
                  </p>
                </div>
                <p className="text-center text-xs font-body text-ev-muted italic pb-4">Fig 1. 5-year TCO breakdown — Tata Nexon EV Max vs Hyundai Creta 1.5 Petrol MT.</p>
              </div>

              {/* Cost 1 */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Cost 1 — Purchase & On-Road Price</h2>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-6">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Cost Component", "Nexon EV Max", "Creta 1.5 Petrol MT"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 1 ? "#00e5ff" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      ["Ex-Showroom (Delhi)", "₹19,99,000", "₹16,99,000"],
                      ["GST", "5% (EV)", "28% + Cess (petrol)"],
                      ["Registration & RTO", "₹0 (waived for EVs)", "₹1,10,000 (approx)"],
                      ["Insurance (1st year)", "₹38,000", "₹51,000"],
                      ["FAME III Subsidy", "−₹50,000", "Not applicable"],
                      ["Total On-Road (Delhi)", "≈ ₹22,00,000", "≈ ₹20,20,000"],
                    ].map(([component, ev, petrol], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 text-ev-text/70 text-xs font-body">{component}</td>
                        <td className="px-4 py-3 text-ev-cyan text-xs font-mono">{ev}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs font-body">{petrol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-5">
                After applying FAME III incentives and Delhi's zero registration on EVs, the on-road price gap narrows from ₹3 lakh ex-showroom to approximately <strong className="text-ev-amber">₹1.8 lakh on-road</strong>.
              </p>

              {/* Cost 2 */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Cost 2 — Fuel vs Electricity (5 Years)</h2>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-5">
                The Nexon EV Max consumes approximately <strong className="text-ev-green">17 kWh per 100 km</strong> in real-world Indian driving. The Creta petrol returns roughly <strong className="text-ev-amber">14 km/litre</strong> in city conditions.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-6">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Vehicle", "Efficiency", "Rate", "Cost per km", "5-Year Cost"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 4 ? "#39ff14" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      ["Nexon EV Max",       "17 kWh/100 km", "₹8/unit",      "₹1.36/km", "₹81,600"],
                      ["Creta Petrol MT",    "14 km/litre",   "₹104.15/litre","₹7.44/km", "₹4,46,400"],
                      ["5-Year EV Saving",   "—",             "—",            "−₹6.08/km", "₹3,64,800"],
                    ].map(([veh, eff, rate, cpp, total], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i === 2 ? "bg-ev-green/5" : i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-display font-semibold text-white text-xs">{veh}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{eff}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{rate}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{cpp}</td>
                        <td className="px-4 py-3 font-mono text-xs" style={{ color: i === 2 ? "#39ff14" : "#00e5ff" }}>{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-2xl p-5 my-6 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">Key Takeaway</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">The ₹3.65 lakh fuel saving over five years more than covers the ₹1.8 lakh on-road price premium of the EV — with ₹1.85 lakh to spare, even before accounting for maintenance savings.</p>
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000006" className="my-8" />

              {/* Cost 3 */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Cost 3 — Maintenance (5 Years)</h2>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-5">
                Electric vehicles have roughly <strong className="text-ev-green">65% fewer moving parts</strong> than a petrol car. No engine oil, no timing belt, no spark plugs, and significantly reduced brake wear from regenerative braking. This translates directly into lower service bills.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-6">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Service Item", "Nexon EV Max (5yr)", "Creta Petrol (5yr)"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 1 ? "#00e5ff" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {maintenanceRows.map(([item, ev, petrol], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i === maintenanceRows.length - 1 ? "bg-ev-surface/30 font-semibold" : i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 text-xs font-body" style={{ color: i === maintenanceRows.length - 1 ? "#ffffff" : "#c8dff5aa" }}>{item}</td>
                        <td className="px-4 py-3 font-mono text-xs" style={{ color: i === maintenanceRows.length - 1 ? "#00e5ff" : "#00e5ffaa" }}>{ev}</td>
                        <td className="px-4 py-3 font-body text-xs" style={{ color: i === maintenanceRows.length - 1 ? "#c8dff5" : "#c8dff580" }}>{petrol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Resale warning */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Cost 5 — Depreciation &amp; Resale Value</h2>
              <div className="rounded-2xl p-5 my-6 border bg-ev-amber/5 border-ev-amber/25">
                <p className="text-xs font-mono text-ev-amber uppercase tracking-widest mb-2">Important</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">EV resale values in India remain lower than equivalent petrol vehicles in 2026 due to battery uncertainty and a less mature used-EV market. As certified pre-owned programmes from Tata, MG, and others mature, EV resale values are expected to improve significantly by 2027–2028.</p>
              </div>

              {/* Final TCO */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">The Final 5-Year TCO Verdict</h2>

              <div className="my-10 rounded-2xl border border-dashed border-ev-green/30 overflow-hidden" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(57,255,20,0.05), #050b14)" }}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
                  <p className="text-xs font-mono text-ev-green uppercase tracking-widest">Infographic Placeholder</p>
                  <p className="text-ev-text/50 text-sm font-body max-w-md leading-relaxed">
                    <strong className="text-ev-text/70">Designer brief:</strong> Line chart, X-axis Years 0–5, Y-axis cumulative cost in ₹ lakhs. Nexon EV Max line (cyan) starts higher, Creta Petrol (amber) lower. Lines cross around Year 3 — mark this "Break-Even Point" with a vertical dashed line. Annotate final gap at Year 5.
                  </p>
                </div>
                <p className="text-center text-xs font-body text-ev-muted italic pb-4">Fig 2. Cumulative 5-year TCO — break-even occurs at approximately 3.1 years for urban owners driving 12,000 km/year.</p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-ev-border my-8">
                <div className="px-5 py-3 border-b border-ev-border bg-ev-surface/30">
                  <p className="text-xs font-mono text-ev-muted uppercase tracking-widest">Complete 5-Year TCO Summary</p>
                </div>
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Cost Component", "Nexon EV Max", "Creta Petrol", "EV Advantage"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 3 ? "#39ff14" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {tcoRows.map(([component, ev, petrol, adv], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i === tcoRows.length - 1 ? "bg-ev-surface/30" : i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-body text-xs" style={{ color: i === tcoRows.length - 1 ? "#ffffff" : "#c8dff5aa", fontWeight: i === tcoRows.length - 1 ? 700 : 400 }}>{component}</td>
                        <td className="px-4 py-3 font-mono text-xs text-ev-cyan">{ev}</td>
                        <td className="px-4 py-3 font-body text-xs text-ev-text/60">{petrol}</td>
                        <td className="px-4 py-3 font-mono text-xs" style={{ color: i === tcoRows.length - 1 ? "#39ff14" : adv.startsWith("+") ? "#39ff14" : adv.startsWith("−") ? "#f43f5e" : "#c8dff580" }}>{adv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl p-5 my-8 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">Verdict: EV Wins by ~₹3 Lakh Over 5 Years</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">Even accounting for the higher purchase price and lower resale value, the Nexon EV Max is approximately ₹3 lakh cheaper than the Creta petrol over 5 years of typical urban use. At 15,000+ km/year, the EV advantage grows to over ₹4 lakh. At low mileage (under 8,000 km/year), the petrol may still have a marginal edge.</p>
              </div>

              <section className="mt-16 pt-8 border-t border-ev-border/40">
                <h2 className="font-display font-bold text-white text-xl mb-5 flex items-center gap-3"><span className="w-1 h-5 rounded-full bg-ev-muted inline-block" />Sources &amp; References</h2>
                <ol className="space-y-2 pl-2">
                  {sources.map(({ label, url }, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-body text-ev-text/60">
                      <span className="font-mono text-[11px] text-ev-muted shrink-0 mt-0.5 w-5">{i + 1}.</span>
                      <span>{label} <a href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-ev-muted hover:text-ev-cyan break-all">[{url}]</a></span>
                    </li>
                  ))}
                </ol>
              </section>
              <div className="mt-8 p-5 bg-ev-surface/40 border border-ev-border/40 rounded-2xl">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-2">Disclaimer</p>
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">All prices are indicative at time of writing and may vary by state, variant, and dealership. Fuel prices, electricity rates, and insurance premiums change frequently. This analysis is for informational purposes only and does not constitute financial advice. EVSelect.in is independent and not affiliated with any manufacturer.</p>
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Key Assumptions</p>
                <ul className="space-y-2 text-xs font-body text-ev-text/60">
                  {["12,000 km / year", "Delhi electricity: ₹8/unit", "Mumbai petrol: ₹104.15/litre", "9% loan interest rate, 5 yr", "Jan 2026 on-road prices"].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-ev-amber shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare Any Two EVs</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Full side-by-side spec comparison across 200+ models.</p>
                <Link href="/compare" className="block text-center py-2.5 rounded-xl text-xs font-display font-bold bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors">Open Compare Tool →</Link>
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
