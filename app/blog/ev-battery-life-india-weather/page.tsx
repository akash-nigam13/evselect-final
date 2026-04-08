import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Battery Life: How to Make Your Battery Last 10+ Years in Indian Weather",
  description:
    "India's extreme heat, monsoon humidity, and stop-go traffic are tough on EV batteries. Learn science-backed strategies to maximise battery life and protect your investment in any Indian climate.",
  keywords: ["EV battery life India", "electric vehicle battery degradation India", "EV battery India heat", "LFP NMC battery India"],
  alternates: { canonical: "https://evselect.in/blog/ev-battery-life-india-weather" },
  openGraph: { title: "EV Battery Life: How to Make It Last 10+ Years in Indian Weather", type: "article" },
};

const degradationFactors = [
  { icon: "🌡", label: "Sustained High Ambient Temperature", color: "#f43f5e",
    body: "For every 10°C increase above 25°C, lithium-ion cells lose capacity approximately twice as fast. In cities like Nagpur or Jaisalmer where summer temps regularly exceed 45°C, an unshaded parked EV can see battery temperatures climb above 50°C — causing measurable, irreversible capacity loss within hours.",
    tips: ["Park in shade or covered parking, especially 12 PM–4 PM", "Use battery pre-conditioning remotely 15 minutes before driving", "Avoid leaving a fully-charged vehicle in direct sunlight for more than 2 hours"] },
  { icon: "⚡", label: "Poor Charging Habits", color: "#ffb800",
    body: "Charging behaviour accounts for an estimated 30–40% of long-term degradation. The two worst habits are charging to 100% every night (for NMC chemistry) and regularly depleting to 0%. Both cause accelerated cell stress.",
    tips: ["Set a charge limit of 80% in your vehicle's app for daily use", "Charge before the battery drops below 15–20%", "Use scheduled charging to complete overnight at 6 AM — cooler temperatures reduce stress"] },
  { icon: "🔌", label: "Over-Reliance on DC Fast Charging", color: "#00e5ff",
    body: "DC fast charging pushes high current through cells rapidly, generating significant heat. Using a 50kW+ fast charger as your primary daily charger accelerates degradation by an estimated 10–15% over five years compared to predominantly AC home charging.",
    tips: ["Use DC fast charging for road trips and emergencies", "Prefer AC home charging for daily top-ups", "Wait 20–30 minutes after a long ride before plugging in (let the battery cool)"] },
  { icon: "💧", label: "Monsoon Humidity & Water Ingress", color: "#39ff14",
    body: "India's monsoon season introduces a challenge that European battery research rarely addresses. High ambient humidity (90%+) combined with temperature cycling causes moisture to condense inside poorly-sealed battery enclosures, accelerating connector corrosion over time.",
    tips: ["Look for IP67 or higher battery rating before buying", "Avoid riding through deep puddles if your scooter lacks IP67", "Inspect charging port and connector seals annually before monsoon season"] },
];

const maintenanceTable = [
  ["Daily",      "Charge to 80% (NMC) / 100% (LFP)",        "Reduces calendar ageing stress"],
  ["Daily",      "Park in shade, avoid 12–4 PM direct sun",  "Controls ambient battery temperature"],
  ["Monthly",    "Check tyre pressure",                       "Reduces motor load and thermal stress"],
  ["Every 6 mo", "BMS software update via OTA or dealer",     "Manufacturers improve thermal algorithms"],
  ["Year 1",     "Dealer battery health check",               "Establishes baseline capacity"],
  ["Year 2–3",   "Inspect charging port & cable seals",       "Prevents monsoon moisture ingress"],
  ["Year 3–5",   "Official capacity report from brand",       "Confirms warranty eligibility"],
  ["Year 5+",    "Cell balancing service if available",       "Equalises voltage, recovers minor capacity"],
  ["Year 8–10",  "Full battery diagnostic audit",             "Informs replacement vs upgrade decision"],
];

const sources = [
  { label: "IIT Madras Energy and Environment Policy Group — EV Battery Research", url: "https://eep.iitm.ac.in" },
  { label: "NITI Aayog — India EV Policy and Battery Standards Report", url: "https://www.niti.gov.in" },
  { label: "Battery University — Lithium-Ion Degradation Mechanisms", url: "https://batteryuniversity.com" },
  { label: "SAE International — Thermal Management of EV Batteries in Tropical Climates", url: "https://www.sae.org" },
  { label: "Bureau of Energy Efficiency India — EV Battery Performance Standards", url: "https://beeindia.gov.in" },
];

export default function Article2() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-5 bg-ev-green/10 border-ev-green/30 text-ev-green">Battery Tech</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              EV Battery Life: How to Make Your Battery Last 10+ Years in Indian Weather
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-6">
              India's 45°C summers, monsoon humidity, and stop-go traffic are uniquely brutal on EV batteries. Here's the science-backed playbook to protect your pack and preserve your warranty.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ev-green" />Jan 22, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ev-green" />13 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                When you spend ₹1.5 lakh on an electric scooter or ₹15 lakh on an electric car, the battery is the single most valuable component — and the one most affected by India's unique climate challenges. The good news: battery degradation is <strong className="text-ev-green">not inevitable</strong>. The habits you build in the first two years of ownership have a disproportionate impact on long-term capacity retention.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "20%",   label: "Capacity Lost by Bad Habits", sub: "vs good habits over 3 years", color: "#f43f5e" },
                  { value: "80%",   label: "Ideal Max Charge Level",      sub: "For NMC, daily use",           color: "#39ff14" },
                  { value: "2×",    label: "Faster Degradation",           sub: "Per 10°C above 25°C",         color: "#ffb800" },
                  { value: "3,000+",label: "LFP Charge Cycles",            sub: "vs ~1,500 for NMC",           color: "#00e5ff" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000003" className="my-8" />

              {/* Chemistry section */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">First: Know Your Battery Chemistry</h2>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                The single most important thing to understand about your EV's battery is its chemistry, because different chemistries behave very differently in Indian conditions.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 my-8">
                {[
                  { name: "LFP", full: "Lithium Iron Phosphate", color: "#39ff14",
                    pros: ["Stable up to 270°C before thermal runaway", "3,000–5,000 charge cycles", "Safer in India's summer heat", "Can charge to 100% without significant stress"],
                    cons: ["Lower energy density — heavier for same range", "Less efficient in extreme cold"],
                    used: "Tata Nexon EV, BYD vehicles" },
                  { name: "NMC", full: "Nickel Manganese Cobalt", color: "#00e5ff",
                    pros: ["Higher energy density = more range", "Lighter pack weight", "Better cold-weather performance"],
                    cons: ["~1,500 cycles to 80% threshold", "Sensitive to sustained high temperatures", "Avoid charging to 100% in hot weather"],
                    used: "MG ZS EV, Hyundai Kona EV" },
                ].map(({ name, full, color, pros, cons, used }) => (
                  <div key={name} className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden">
                    <div className="h-0.5 w-full" style={{ background: color }} />
                    <div className="p-5">
                      <div className="font-display font-black text-3xl mb-0.5" style={{ color }}>{name}</div>
                      <div className="text-ev-muted text-xs font-body mb-4">{full}</div>
                      <ul className="space-y-1.5 mb-4">
                        {pros.map((p) => <li key={p} className="flex items-start gap-2 text-xs font-body text-ev-text/70"><Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color }} />{p}</li>)}
                      </ul>
                      <ul className="space-y-1 mb-4">
                        {cons.map((c) => <li key={c} className="flex items-start gap-2 text-xs font-body text-ev-muted"><span className="text-ev-border mt-0.5 shrink-0">—</span>{c}</li>)}
                      </ul>
                      <div className="pt-3 border-t border-ev-border/40 text-[10px] font-mono"><span className="text-ev-muted">Used in: </span><span style={{ color }}>{used}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Infographic placeholder */}
              <div className="my-10 rounded-2xl border border-dashed border-ev-green/30 overflow-hidden" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(57,255,20,0.05), #050b14)" }}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
                  <p className="text-xs font-mono text-ev-green uppercase tracking-widest">Infographic Placeholder</p>
                  <p className="text-ev-text/50 text-sm font-body max-w-md leading-relaxed">
                    <strong className="text-ev-text/70">Designer brief:</strong> Dual-line chart. X-axis: distance 0–120,000 km. Y-axis: capacity retention 60–100%. LFP line in green, NMC in cyan, with shaded confidence bands. Mark the 80% warranty threshold with a dashed amber line.
                  </p>
                </div>
                <p className="text-center text-xs font-body text-ev-muted italic pb-4">Fig 1. LFP vs NMC capacity retention in typical Indian usage (avg. 32°C ambient, 80% daily charge limit).</p>
              </div>

              {/* 5 enemies */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">The 5 Biggest Enemies of Battery Life in India</h2>
              <div className="space-y-6">
                {degradationFactors.map(({ icon, label, color, body, tips }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: `${color}15` }}>{icon}</div>
                      <h3 className="font-display font-bold text-white text-lg">{label}</h3>
                    </div>
                    <p className="text-ev-text/70 font-body text-sm leading-relaxed mb-4">{body}</p>
                    <ul className="space-y-2">
                      {tips.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-xs font-body text-ev-text/65">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000004" className="my-10" />

              {/* Maintenance table */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Your 10-Year Battery Maintenance Plan</h2>
              <div className="my-8 overflow-x-auto rounded-2xl border border-ev-border">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ev-border bg-ev-surface/20">
                      {["Period", "Action", "Why It Matters"].map((h, i) => (
                        <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 0 ? "#39ff14" : "#4a6fa5" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceTable.map(([period, action, why], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-mono text-ev-green text-xs">{period}</td>
                        <td className="px-4 py-3 font-body text-white text-xs font-medium">{action}</td>
                        <td className="px-4 py-3 font-body text-ev-text/60 text-xs">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Single most important habit */}
              <div className="rounded-2xl p-5 my-8 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">The Most Important Single Habit</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">
                  If you implement just one recommendation from this article, make it this: <strong className="text-white">set a charge limit of 80%</strong> in your vehicle's app for everyday use. On NMC batteries, this single change can reduce calendar degradation by an estimated 25–30% over five years — adding years to your pack's effective life.
                </p>
              </div>

              {/* Warranty */}
              <h2 className="font-display font-bold text-white text-2xl mt-14 mb-4">Understanding Your Battery Warranty</h2>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-4">
                India's leading EV brands now offer 8-year battery warranties as standard. Most guarantee the battery will not fall below <strong className="text-ev-green">70–80% of original capacity</strong> within the warranty period. However, degradation caused by demonstrably poor charging habits, flood damage, or unauthorised modifications may void coverage. Keep a record of your charging sessions via the brand's app — this creates a documented history of responsible use.
              </p>

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
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">The information on EVSelect.in is for general informational purposes only. EV specifications, pricing, and availability change frequently. Always verify details directly with the manufacturer before making decisions. EVSelect.in is independent and not affiliated with any vehicle manufacturer.</p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">In This Article</p>
                <ul className="space-y-2 text-xs font-body text-ev-muted">
                  {["Know Your Battery Chemistry", "LFP vs NMC", "The 5 Biggest Enemies", "10-Year Maintenance Plan", "Understanding Warranty"].map((item) => (
                    <li key={item} className="flex items-center gap-2 hover:text-ev-green transition-colors cursor-pointer">
                      <span className="w-1 h-1 rounded-full bg-ev-green shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-green/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare EV Batteries</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Compare battery specs across 200+ models in our tool.</p>
                <Link href="/compare" className="block text-center py-2.5 rounded-xl text-xs font-display font-bold bg-ev-green text-ev-bg hover:opacity-90 transition-opacity">Compare Now →</Link>
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
