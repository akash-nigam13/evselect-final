import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check } from "lucide-react";
import { SolidStateHero, ManufacturerTimeline } from "@/components/blog/BlogImages";

export const metadata: Metadata = {
  title: "Solid-State Batteries 2026: The Technology That Will Change EVs Forever",
  description: "Solid-state batteries promise 2x range, 10-minute charging, and far better safety. We break down the science, timelines, and what it means for Indian EV buyers.",
  alternates: { canonical: "https://evselect.in/blog/solid-state-batteries-2026" },
  openGraph: { title: "Solid-State Batteries 2026: The EV Revolution Explained", type: "article" },
};

const comparisons = [
  { aspect: "Energy Density",    liion: "250–300 Wh/kg",  ssb: "400–500 Wh/kg",    winner: "ssb", note: "2x range potential" },
  { aspect: "Charge Time (80%)", liion: "30–45 min",       ssb: "8–15 min",         winner: "ssb", note: "10-minute top-up" },
  { aspect: "Cycle Life",        liion: "1,500 (NMC)",     ssb: "5,000+",           winner: "ssb", note: "3x longer life" },
  { aspect: "Safety",            liion: "Flammable liquid", ssb: "Non-flammable",   winner: "ssb", note: "No thermal runaway" },
  { aspect: "Operating Temp",    liion: "-20°C to 45°C",   ssb: "-30°C to 100°C",  winner: "ssb", note: "Better in extremes" },
  { aspect: "Current Cost",      liion: "$90–120/kWh",     ssb: "$800–1200/kWh",   winner: "liion", note: "SSB still expensive" },
  { aspect: "Production Scale",  liion: "GWh scale",       ssb: "Pilot scale",     winner: "liion", note: "Li-Ion wins now" },
];

const brands = [
  { name: "Toyota",        target: "2027–28", country: "Japan",   color: "#f43f5e", desc: "100 GWh SSB factory announced. Partnered with Panasonic on bipolar cell design. First vehicle: bZ series 2027.", range: "1,200 km" },
  { name: "Samsung SDI",   target: "2027",    country: "South Korea", color: "#00e5ff", desc: "Supplying BMW and Hyundai with semi-solid cells in 2026, full solid-state by late 2027. Gen 5 cell development ongoing.", range: "900 km" },
  { name: "CATL",          target: "2027–30", country: "China",   color: "#39ff14", desc: "Semi-solid Condensed Battery available 2024. Full SSB targeting 2027 for export markets including India supply chain.", range: "1,000 km" },
  { name: "QuantumScape",  target: "2026–28", country: "USA",     color: "#ffb800", desc: "Volkswagen-backed. Single-layer cell validation complete 2025. Multi-layer commercial cells entering VW assembly 2026.", range: "800 km" },
];

const indiaImpact = [
  { title: "Range Anxiety Eliminated",   icon: "🛣️", desc: "A 400–500 Wh/kg pack in a mid-size SUV would deliver 600–800 km real-world range, making intercity travel as easy as petrol." },
  { title: "Same-Day Charging Stops",    icon: "⚡", desc: "10-minute 80% charging means a Delhi–Jaipur trip stops for 10 minutes, not 45. Equivalent to current petrol refuelling time." },
  { title: "Summer Performance Boost",   icon: "☀️", desc: "SSB cells are stable up to 100°C+. India's 45°C summers will no longer cause the 15–25% efficiency loss seen in current NMC vehicles." },
  { title: "Lower Long-Term Cost",       icon: "💰", desc: "5,000+ cycles vs 1,500 for NMC means a 15-year cell life. Battery replacement — currently the biggest EV ownership fear — becomes irrelevant." },
];

const sources = [
  { label: "Toyota Global — Solid-State Battery Development Roadmap 2025", url: "https://www.toyota-global.com" },
  { label: "Samsung SDI — Gen 5 Battery Cell Technology White Paper", url: "https://www.samsungsdi.com" },
  { label: "QuantumScape — 2025 Annual Report & Technology Update", url: "https://www.quantumscape.com" },
  { label: "CATL — Condensed Battery & SSB Roadmap Press Release", url: "https://www.catl.com" },
  { label: "Solid-State Battery Consortium — Industry Roadmap 2025–2035", url: "https://www.ssb-consortium.org" },
];

export default function Article4() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        {/* Hero Banner */}
        <div className="w-full overflow-hidden border-b border-ev-border/30">
          <SolidStateHero />
        </div>

        <div className="bg-ev-surface/20 border-b border-ev-border/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-4" style={{ background: "#a78bfa18", borderColor: "#a78bfa44", color: "#a78bfa" }}>Battery Tech</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Solid-State Batteries 2026: The Technology That Will Change EVs Forever
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-5">
              Twice the range. 10-minute charging. No fire risk. Solid-state batteries are moving from lab to road — and their arrival will redefine what Indian EV buyers can expect.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />Feb 18, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />15 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-4">
                Every decade or so, a technological leap changes everything. The shift from feature phones to smartphones. From petrol to hybrid. 2026–2028 is looking increasingly like that inflection point for EV batteries. Solid-state batteries — long promised, long delayed — are now entering limited commercial production.
              </p>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                This is not a&nbsp;"maybe one day" story. Toyota has committed to a 2027 commercial vehicle launch. Samsung SDI is already delivering semi-solid cells to BMW. QuantumScape&apos;s multi-layer cells are entering Volkswagen assembly lines. The question is no longer <em>if</em> but <em>how fast</em>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "400–500", label: "Wh/kg Energy Density", sub: "vs 250–300 for Li-Ion", color: "#a78bfa" },
                  { value: "8–15",    label: "Minute 80% Charge",    sub: "vs 30–45 min today",   color: "#00e5ff" },
                  { value: "5,000+",  label: "Charge Cycles",        sub: "vs ~1,500 NMC",        color: "#39ff14" },
                  { value: "100°C",   label: "Max Operating Temp",   sub: "vs 45°C for NMC",      color: "#ffb800" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000007" className="my-8" />

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Li-Ion vs Solid-State: Full Comparison</h2>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ev-border bg-ev-surface/20">
                      {["Attribute", "Li-Ion (Today)", "Solid-State (2027+)", "Winner"].map((h, i) => (
                        <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider"
                          style={{ color: i === 2 ? "#a78bfa" : "#4a6fa5" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map(({ aspect, liion, ssb, winner, note }, i) => (
                      <tr key={aspect} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 text-xs font-body text-ev-text/80">{aspect}</td>
                        <td className="px-4 py-3 text-xs font-body" style={{ color: winner === "liion" ? "#39ff14" : "#c8dff560" }}>{liion}</td>
                        <td className="px-4 py-3 text-xs font-body" style={{ color: winner === "ssb" ? "#a78bfa" : "#c8dff560" }}>{ssb}</td>
                        <td className="px-4 py-3">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                            style={{ color: winner === "ssb" ? "#a78bfa" : "#39ff14", background: winner === "ssb" ? "#a78bfa15" : "#39ff1415" }}>
                            {note}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Manufacturer Roadmap</h2>
              <div className="w-full aspect-[760/320] rounded-2xl overflow-hidden border border-ev-border my-6">
                <ManufacturerTimeline />
              </div>
              <p className="text-ev-text/55 text-xs font-body italic text-center mb-10">
                All four manufacturers have committed to commercial SSB production between 2026–2028. India supply begins 2027–2029.
              </p>

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">Who Is Closest to Market?</h2>
              <div className="space-y-5">
                {brands.map(({ name, target, country, color, desc, range }) => (
                  <div key={name} className="bg-ev-card border border-ev-border rounded-2xl p-5 flex gap-5">
                    <div className="shrink-0 text-center">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-sm" style={{ background: `${color}18`, color, border: `1.5px solid ${color}44` }}>{name.split(" ")[0]}</div>
                      <div className="text-[9px] font-mono mt-1" style={{ color }}>{target}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="font-display font-bold text-white">{name}</span>
                        <span className="text-[10px] font-mono text-ev-muted">{country}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color, background: `${color}15` }}>Target range: {range}</span>
                      </div>
                      <p className="text-ev-text/65 text-xs font-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000008" className="my-10" />

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">What SSB Means for Indian EV Buyers</h2>
              <div className="grid sm:grid-cols-2 gap-5 my-6">
                {indiaImpact.map(({ title, icon, desc }) => (
                  <div key={title} className="bg-ev-card border border-ev-border rounded-2xl p-5">
                    <div className="text-2xl mb-3">{icon}</div>
                    <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-ev-text/65 text-xs font-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5 my-8 border" style={{ background: "#a78bfa08", borderColor: "#a78bfa30" }}>
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#a78bfa" }}>Should You Wait for SSB Before Buying an EV?</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">
                  Short answer: <strong className="text-white">no</strong> — unless your purchase is 3+ years away. Current EVs are excellent and save significant money vs petrol right now. SSB vehicles will be premium-priced at launch (2027–2028), with mainstream pricing likely 2030–2032. Buy a good EV now; upgrade when SSB prices normalise.
                </p>
              </div>

              <div className="rounded-2xl p-5 my-8 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">The Bottom Line</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">
                  Solid-state batteries are no longer a research project — they are an engineering challenge being solved in real time by the world&apos;s best battery companies. For India, where range anxiety and charging infrastructure are the top two purchase barriers, SSB could be the technology that finally makes EVs the unquestioned choice for every buyer.
                </p>
              </div>

              <section className="mt-16 pt-8 border-t border-ev-border/40">
                <h2 className="font-display font-bold text-white text-xl mb-5">Sources &amp; References</h2>
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
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">Technology timelines are based on publicly available manufacturer announcements and may change. EVSelect.in is independent and not affiliated with any manufacturer. This article is for informational purposes only.</p>
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Manufacturer Targets</p>
                <ul className="space-y-2 text-xs font-body text-ev-text/60">
                  {brands.map(({ name, target, color }) => (
                    <li key={name} className="flex items-center justify-between">
                      <span style={{ color }}>{name}</span>
                      <span className="font-mono text-[10px] text-ev-muted">{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5" style={{ borderColor: "#a78bfa33" }}>
                <p className="font-display font-bold text-white text-sm mb-2">About EV Batteries</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Deep-dive into how batteries work and how to protect yours.</p>
                <Link href="/about-ev-batteries" className="block text-center py-2.5 rounded-xl text-xs font-display font-bold text-ev-bg transition-opacity hover:opacity-90" style={{ background: "#a78bfa" }}>Learn Battery Science →</Link>
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
