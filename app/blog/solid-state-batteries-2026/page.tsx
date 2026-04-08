import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Solid-State Batteries: Why 2026 Is the Turning Point for EV Range",
  description:
    "Solid-state batteries promise double the range, faster charging, and greater safety. Are they finally ready for mass production in 2026? We explain the technology, who's leading, and what it means for Indian EV buyers.",
  keywords: ["solid state battery 2026", "solid state battery EV", "EV range improvement 2026", "Toyota solid state battery"],
  alternates: { canonical: "https://evselect.in/blog/solid-state-batteries-2026" },
  openGraph: { title: "Solid-State Batteries: Why 2026 Is the EV Turning Point", type: "article" },
};

const comparisonRows = [
  ["Energy Density",         "250–300 Wh/kg",  "400–500 Wh/kg",   "~70% higher"],
  ["0–80% Charge Time",      "25–45 min",       "10–20 min",        "~60% faster"],
  ["Cycle Life (to 80%)",    "~1,500 cycles",   "~2,500 cycles",    "~67% longer"],
  ["Operating Temp Range",   "−20°C to 45°C",   "−30°C to 100°C",  "Far wider"],
  ["Thermal Runaway Risk",   "Moderate–High",   "Very Low",         "Major safety gain"],
  ["Cost (2026 estimate)",   "~$100/kWh",       "~$250–400/kWh",    "2.5–4× more expensive"],
  ["Mass Production",        "Now",             "2027–2030",        "—"],
];

const manufacturers = [
  {
    name: "Toyota", color: "#a78bfa",
    body: "Toyota has the most advanced production-intent solid-state programme of any automaker. Their partnership with Panasonic (through PPES) has produced automotive-grade sulphide-based SSB cells. Toyota's target: a vehicle with 1,200 km range and 10-minute charging at commercial volumes by 2027–2028.",
  },
  {
    name: "Samsung SDI", color: "#00e5ff",
    body: "Samsung SDI supplies batteries to BMW and Hyundai. Both OEMs are expecting solid-state cell samples for vehicle integration testing in 2026. Samsung's oxide-based approach prioritises safety and thermal stability over maximum energy density — particularly relevant for markets like India.",
  },
  {
    name: "CATL (China)", color: "#39ff14",
    body: "CATL — the world's largest battery maker and a major supplier to MG Motor and BYD in India — has taken a pragmatic approach. Their 'condensed matter battery' achieves 500 Wh/kg and is already in limited production. Full solid-state at volume is targeted for 2028, making this the most directly relevant timeline for Indian buyers.",
  },
  {
    name: "QuantumScape", color: "#ffb800",
    body: "QuantumScape, backed by Volkswagen, announced its first automotive-grade cell deliveries in Q4 2025. Their lithium-metal solid-state cells have demonstrated over 1,000 cycles at high capacity retention in laboratory conditions. VW Group supply is planned from 2026.",
  },
];

const indiaMilestones = [
  { year: "2026", text: "No SSB vehicles in India — technology in premium global markets only.", color: "#4a6fa5" },
  { year: "2027–28", text: "First SSB-equipped premium imports (possibly Toyota/Lexus) may arrive in India.", color: "#a78bfa" },
  { year: "2028–30", text: "CATL-supplied EVs in India begin incorporating semi-solid cell technology.", color: "#00e5ff" },
  { year: "2030+", text: "Mainstream Indian EV segments (₹15–25 lakh) start seeing genuine SSB benefits.", color: "#39ff14" },
];

const sources = [
  { label: "Toyota Motor Corporation — Solid-State Battery Development Programme", url: "https://www.toyota.com" },
  { label: "Samsung SDI — Next-Generation Battery Technology Roadmap 2025", url: "https://www.samsungsdi.com" },
  { label: "QuantumScape — Annual Report 2025", url: "https://www.quantumscape.com" },
  { label: "CATL — Condensed Matter Battery Technical Release", url: "https://www.catl.com" },
  { label: "BloombergNEF — Solid-State Battery Market Outlook 2025", url: "https://about.bnef.com" },
  { label: "Nature Energy — Solid Electrolyte Interface Stability in SSBs", url: "https://www.nature.com/nenergy" },
];

export default function Article4() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-5" style={{ color: "#a78bfa", background: "#a78bfa15", borderColor: "#a78bfa30" }}>Battery Tech</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Solid-State Batteries: Why 2026 Is the Turning Point for EV Range
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-6">
              After years of promises, solid-state cells are entering limited production in 2026. We explain what the technology actually delivers, who is leading the race, and when Indian EV buyers will feel the impact.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />Feb 14, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />12 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-4">
                For the better part of a decade, solid-state batteries have occupied a peculiar position: universally acknowledged as transformative, yet perpetually "five years away." In 2026, that waiting period is finally ending. Toyota began limited delivery of solid-state battery vehicles in Japan in late 2025. Samsung SDI and Panasonic have both achieved <strong style={{ color: "#a78bfa" }}>pilot-scale manufacturing yields above 85%</strong> — the threshold typically required for commercial viability.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "2×",      label: "Energy Density Gain",  sub: "vs current Li-Ion",          color: "#a78bfa" },
                  { value: "10 min",  label: "Target Charge Time",   sub: "0–80% in production SSB",    color: "#00e5ff" },
                  { value: "1,000+",  label: "Charge Cycles",        sub: "Before 80% capacity floor",  color: "#39ff14" },
                  { value: "2028–30", label: "Mass Market India",    sub: "Estimated timeline",         color: "#ffb800" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000007" className="my-8" />

              {/* What is SSB */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">What Is a Solid-State Battery?</h2>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-4">
                Every battery operates on the same basic principle: lithium ions move between a cathode and anode through an electrolyte. In today's lithium-ion batteries, that electrolyte is a <strong className="text-ev-text">liquid</strong> — flammable, temperature-sensitive, and a major source of degradation.
              </p>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-5">
                A solid-state battery replaces the liquid electrolyte with a <strong style={{ color: "#a78bfa" }}>solid material</strong> — typically a ceramic oxide, sulphide, or polymer compound. This seemingly simple substitution has profound consequences for performance, safety, and longevity.
              </p>

              {/* Infographic */}
              <div className="my-10 rounded-2xl border border-dashed overflow-hidden" style={{ borderColor: "#a78bfa30", background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(167,139,250,0.07), #050b14)" }}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
                  <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "#a78bfa" }}>Infographic Placeholder</p>
                  <p className="text-ev-text/50 text-sm font-body max-w-md leading-relaxed">
                    <strong className="text-ev-text/70">Designer brief:</strong> Side-by-side cross-section of two battery cells. Left: Li-Ion (Cathode / Liquid Electrolyte + Separator / Graphite Anode). Right: Solid-State (Cathode / Solid Electrolyte in purple / Li-Metal Anode). Annotate "Flammable" on left, "Non-flammable" on right. Show SSB as thinner overall. Add energy density callouts (250 vs 400 Wh/kg).
                  </p>
                </div>
                <p className="text-center text-xs font-body text-ev-muted italic pb-4">Fig 1. Structural comparison of a conventional Li-Ion cell vs a solid-state cell.</p>
              </div>

              {/* Benefits */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Why Solid-State Batteries Are a Step Change</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Higher Energy Density = More Range", color: "#a78bfa",
                    body: "Current NMC cells achieve 250–300 Wh/kg. Solid-state cells using lithium-metal anodes have achieved 400–500 Wh/kg in laboratory conditions. In practical terms, a vehicle with today's physical battery pack size could offer roughly double the range — turning a 450 km car into a genuine 900 km vehicle." },
                  { title: "Faster Charging Without Degradation", color: "#00e5ff",
                    body: "Solid electrolytes suppress dendrite formation, allowing much higher charging rates. Toyota has demonstrated 0–80% in 10 minutes in laboratory conditions. Commercial targets for first-generation production SSB vehicles are 15–20 minutes." },
                  { title: "Fundamentally Safer", color: "#39ff14",
                    body: "Solid electrolytes do not combust, do not leak, and remain stable across a far wider temperature range. This is particularly significant for India, where ambient temperatures already push liquid electrolyte cells towards their thermal limits." },
                  { title: "Longer Lifespan", color: "#ffb800",
                    body: "Early production solid-state cells from Samsung SDI have demonstrated over 1,000 charge cycles while retaining 90% capacity. Toyota's commercial production cells target 1,200+ cycles at 90% retention — a significant improvement over current NMC chemistry." },
                ].map(({ title, color, body }) => (
                  <div key={title} className="bg-ev-card border border-ev-border rounded-2xl p-5 flex gap-4">
                    <div className="w-0.5 shrink-0 rounded-full self-stretch" style={{ backgroundColor: color }} />
                    <div>
                      <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                      <p className="text-ev-text/65 font-body text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Solid-State vs Li-Ion: Key Metrics</h2>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-8">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Metric", "Current Li-Ion (NMC)", "Solid-State (projected)", "Improvement"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 2 ? "#a78bfa" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {comparisonRows.map(([metric, liion, ssb, delta], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-body text-white text-xs font-medium">{metric}</td>
                        <td className="px-4 py-3 font-mono text-ev-text/60 text-xs">{liion}</td>
                        <td className="px-4 py-3 font-mono text-xs" style={{ color: "#a78bfa" }}>{ssb}</td>
                        <td className="px-4 py-3 font-body text-ev-green text-xs">{delta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000008" className="my-8" />

              {/* Manufacturers */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Who Is Leading the Solid-State Race?</h2>
              <div className="space-y-4 mb-8">
                {manufacturers.map(({ name, color, body }) => (
                  <div key={name} className="bg-ev-card border border-ev-border rounded-2xl p-5">
                    <h3 className="font-display font-bold text-base mb-2" style={{ color }}>{name}</h3>
                    <p className="text-ev-text/65 font-body text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Challenges */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">What Is Still Holding Solid-State Back?</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Manufacturing Cost", body: "At an estimated $250–400/kWh in 2026, solid-state cells cost 2.5–4× more than current NMC at ~$100/kWh. First-generation SSB vehicles will be restricted to premium and luxury segments. BloombergNEF projects cost parity with conventional Li-Ion by approximately 2031–2033." },
                  { title: "Manufacturing Yield at Scale", body: "Solid-state electrolyte layers must be manufactured to extreme tolerances — often in micrometres — without defects that cause short circuits. Automotive-scale gigafactory production at these tolerances has not yet been demonstrated by any manufacturer." },
                  { title: "Electrode Interface Stability", body: "A persistent challenge is the interface between the solid electrolyte and the electrodes. During charge/discharge cycles, volume changes create microscopic gaps at the solid-solid interface, increasing resistance over time. Active area of engineering for all manufacturers." },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-ev-card border border-ev-border rounded-xl p-5">
                    <h3 className="font-display font-semibold text-white text-sm mb-2">{title}</h3>
                    <p className="text-ev-text/65 font-body text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Don't wait */}
              <div className="rounded-2xl p-5 my-8 border bg-ev-amber/5 border-ev-amber/25">
                <p className="text-xs font-mono text-ev-amber uppercase tracking-widest mb-2">Important for Indian Buyers</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">If you are considering buying an EV in 2026, mainstream solid-state vehicles at accessible price points in India are realistically 4–6 years away. Current LFP and advanced NMC batteries are excellent technology. A vehicle purchased today with an LFP battery will still be highly capable when solid-state becomes widely available.</p>
              </div>

              {/* India timeline */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Impact Timeline for Indian EV Buyers</h2>
              <div className="space-y-3 mb-8">
                {indiaMilestones.map(({ year, text, color }) => (
                  <div key={year} className="flex items-start gap-4 bg-ev-card border border-ev-border rounded-xl p-4">
                    <div className="font-display font-black text-sm shrink-0 min-w-[70px]" style={{ color }}>{year}</div>
                    <p className="text-ev-text/65 font-body text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
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
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">Technology timelines and performance projections are based on manufacturer announcements and third-party research at time of writing. Actual commercial availability dates may vary. This article is for informational purposes only. EVSelect.in is independent and not affiliated with any manufacturer.</p>
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Quick Verdict</p>
                <div className="space-y-3">
                  {[
                    { label: "Ready for India?", value: "Not yet", color: "#f43f5e" },
                    { label: "Toyota timeline", value: "2027–28", color: "#a78bfa" },
                    { label: "CATL (India supply)", value: "2028+", color: "#00e5ff" },
                    { label: "Cost parity", value: "~2031–33", color: "#ffb800" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-xs font-body text-ev-muted">{label}</span>
                      <span className="text-xs font-mono font-bold" style={{ color }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare Today's EVs</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">The best EVs available right now — compared side by side.</p>
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
