import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Charging Infrastructure in India 2026: A Complete Road Trip Guide",
  description:
    "Planning an EV road trip in India? This guide covers how to find DC fast chargers on highways, which apps to use, the best-covered corridors, and practical tips to ensure you never get stranded.",
  keywords: ["EV charging infrastructure India 2026", "EV charging stations India highway", "DC fast charging India road trip", "CCS2 charger India"],
  alternates: { canonical: "https://evselect.in/blog/ev-charging-infrastructure-india" },
  openGraph: { title: "EV Charging Infrastructure in India 2026: Complete Road Trip Guide", type: "article" },
};

const chargingStandards = [
  ["Type 2 AC",       "AC Slow/Fast", "7–22 kW",   "3–8 hrs",    "Tata, MG, Hyundai, BMW, Volvo"],
  ["CCS2 (DC)",       "DC Fast",      "50–150 kW",  "30–60 min",  "Tata, MG, Hyundai, Kia, BMW"],
  ["Bharat AC-001",   "AC Slow",      "10–15 kW",   "4–8 hrs",    "Ather, TVS, Hero, Bajaj Chetak"],
  ["Bharat DC-001",   "DC Fast",      "15 kW",      "1–2 hrs",    "Budget 2W/3W EVs"],
  ["GB/T (DC)",       "DC Fast",      "50–120 kW",  "30–60 min",  "BYD, Volvo (with adaptor)"],
  ["Ola Hypercharger","Proprietary",  "3.3 kW",     "6–8 hrs",    "Ola S1 series only"],
];

const corridors = [
  { name: "Delhi → Jaipur",           km: "282 km",  rating: "Excellent",    color: "#39ff14",
    body: "India's most EV-friendly corridor. NH-48 now has 12+ fast charging locations between the two cities at major petrol stations (HPCL, BPCL, Indian Oil), expressway rest stops, and hotels. Even a 300 km real-world range EV can complete this with a single short stop." },
  { name: "Mumbai → Pune",            km: "150 km",  rating: "Excellent",    color: "#39ff14",
    body: "The Mumbai–Pune Expressway is arguably India's most charger-dense highway by distance. Fast chargers at Khopoli, Lonavala, and both city ends. Any EV with 250+ km range can complete this without a charging stop. MSRDC rest stops have added dedicated EV bays with 50kW CCS2 chargers." },
  { name: "Bengaluru → Chennai",      km: "346 km",  rating: "Good",         color: "#00e5ff",
    body: "NH-44 has improved significantly. Fast chargers at Hosur, Krishnagiri, Vellore, and Chennai outskirts — approximately 80–100 km apart. A 400 km range EV can complete this with one stop; a 300 km range EV should plan for two stops." },
  { name: "Delhi → Lucknow",          km: "500 km",  rating: "Developing",   color: "#ffb800",
    body: "Gaps of 120–150 km in central Uttar Pradesh. Carry a portable Type 2 cable for emergency AC charging. Verify charger availability via app before departure. This corridor is improving quickly but is not yet reliable for spontaneous road trips." },
  { name: "Mumbai → Nagpur",          km: "840 km",  rating: "Developing",   color: "#ffb800",
    body: "Samruddhi Expressway chargers are being added progressively. Verify current availability via ChargeZone or Tata EZ Charge before departure. Plan charging stops at Nashik, Amravati, and Nagpur outskirts." },
  { name: "Bengaluru → Goa",          km: "560 km",  rating: "Limited",      color: "#f43f5e",
    body: "Western Ghats section has limited fast charger coverage. Plan charging at Hubli and Dharwad. The coastal route via Mangaluru has better coverage. This route requires careful pre-planning and conservative range management." },
];

const apps = [
  ["Tata Power EZ Charge", "7,000+",    "Yes",    "In-app + RFID",  "Tata EV owners"],
  ["ChargeZone",           "6,500+",    "Yes",    "In-app + UPI",   "Multi-brand cars"],
  ["Ather Grid",           "450+",      "Yes",    "Ather app only", "Ather 450/Rizta"],
  ["Statiq",               "3,200+",    "Yes",    "In-app + UPI",   "Malls, corporate parks"],
  ["Google Maps (EV)",     "BEE + live","Partial","Via operator",   "Quick discovery"],
  ["Plug Share",           "Community", "Partial","Varies",         "Community verification"],
];

const tripSteps = [
  { step: "01", title: "Know Your Real-World Range", body: "Your ARAI range is a lab figure. At 100 km/h on Indian highways with AC running in 35°C heat, expect 70–80% of ARAI range. Plan around this number, not the certified figure." },
  { step: "02", title: "Map Stops at 60–70% of Real Range", body: "Never plan to arrive at a charger on 0–5% battery. Plan stops to arrive with at least 15–20% remaining to account for detours and charger downtime." },
  { step: "03", title: "Identify Primary and Backup Chargers", body: "For each stop, identify a primary charger and a backup within reasonable detour distance. Charger downtime and queues are real, especially on long weekends." },
  { step: "04", title: "Pre-Condition Before Highway Sections", body: "Cool the cabin to 22°C while still plugged in at your last stop. Starting with a pre-cooled cabin means the AC compressor works less, recovering 5–10% additional range." },
  { step: "05", title: "Charge to 90–100% Before Long Sections", body: "While charging to 100% daily harms battery health, it is entirely appropriate before a long section with limited charging options. One-time top-ups have negligible long-term impact." },
  { step: "06", title: "Carry Your Own Type 2 AC Cable", body: "Not all stations provide cables. Having your own means you can charge at any Type 2 socket, including at hotels and offices — your emergency backup plan." },
];

const sources = [
  { label: "Bureau of Energy Efficiency — Public EV Charging Station Data Portal", url: "https://beeindia.gov.in" },
  { label: "Ministry of Power — EVSE Guidelines and Standards", url: "https://powermin.gov.in" },
  { label: "Tata Power EZ Charge — Network Coverage", url: "https://www.tatapower.com/ezcharge" },
  { label: "ChargeZone — Network Report Q4 2025", url: "https://www.chargezone.in" },
  { label: "NITI Aayog — NEMMP 2030 Charging Infrastructure Targets", url: "https://www.niti.gov.in" },
  { label: "EESL — National EV Charging Tender and Infrastructure Report 2025", url: "https://eeslindia.org" },
];

export default function Article5() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-5 bg-ev-cyan/10 border-ev-cyan/30 text-ev-cyan">Infrastructure</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              EV Charging Infrastructure in India 2026: A Complete Road Trip Guide
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-6">
              India now has 25,000+ public chargers and 4,500+ DC fast chargers on national highways. We map the best corridors, recommend the top apps, and give you a step-by-step road trip planning checklist.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ev-cyan" />Feb 28, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ev-cyan" />15 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-4">
                Two years ago, an EV road trip across India required the planning precision of a lunar mission. In 2026, the picture has changed dramatically — but unevenly. India now has over <strong className="text-ev-cyan">25,000 public charging stations</strong>, with approximately 4,500 DC fast chargers operational on the national highway network.
              </p>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                The golden routes — Delhi to Jaipur, Mumbai to Pune, Bengaluru to Chennai — now have fast chargers every 60–80 km, making them genuinely comfortable in any modern EV with 300+ km real-world range. Other corridors remain challenging. This guide tells you which is which.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "25,000+",  label: "Public Charging Stations", sub: "India, Jan 2026 (BEE)", color: "#00e5ff" },
                  { value: "4,500+",   label: "DC Fast Chargers",         sub: "On National Highways",  color: "#39ff14" },
                  { value: "60–80 km", label: "Avg Charger Spacing",      sub: "Golden EV corridors",   color: "#ffb800" },
                  { value: "2030",     label: "Target: 4.6L Chargers",    sub: "Govt of India NEMMP",   color: "#a78bfa" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000009" className="my-8" />

              {/* Charging standards */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Understanding Charging Standards in India</h2>
              <p className="text-ev-text/75 font-body text-sm leading-relaxed mb-5">
                Before planning a road trip, you must know which charging standard your vehicle uses — because not every charger works with every vehicle. Connecting to an incompatible port is one of the most common mistakes new EV owners make.
              </p>

              <div className="rounded-2xl p-5 my-6 border bg-ev-cyan/5 border-ev-cyan/25">
                <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">
                  If you are buying an electric car for road trips, prioritise vehicles using the <strong className="text-white">CCS2 standard</strong>. It is the dominant DC fast charging standard in India, supported by Tata Power EZ Charge, Ather Grid, ChargeZone, BPCL, HPCL, and IOC. Proprietary connectors limit you to a single network.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-ev-border my-8">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["Standard", "Type", "Power", "Speed", "Used By"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 3 ? "#00e5ff" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {chargingStandards.map(([std, type, power, speed, usedBy], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-display font-semibold text-white text-xs">{std}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{type}</td>
                        <td className="px-4 py-3 font-mono text-ev-cyan text-xs">{power}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{speed}</td>
                        <td className="px-4 py-3 text-ev-text/50 text-xs">{usedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Corridors */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">Best EV Road Trip Corridors in India (2026)</h2>

              {/* Infographic */}
              <div className="my-8 rounded-2xl border border-dashed border-ev-cyan/30 overflow-hidden" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.06), #050b14)" }}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-3">
                  <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest">Infographic Placeholder</p>
                  <p className="text-ev-text/50 text-sm font-body max-w-md leading-relaxed">
                    <strong className="text-ev-text/70">Designer brief:</strong> Stylised India outline map. Draw major national highways as coloured lines: Green (Excellent, charger every &lt;60 km): Delhi–Jaipur–Ahmedabad, Mumbai–Pune–Bengaluru. Yellow (Good, 60–100 km gaps): Delhi–Chandigarh, Bengaluru–Mysuru. Orange (Developing, 100–200 km gaps): Delhi–Lucknow, Mumbai–Nagpur. Red (Limited): Bengaluru–Goa Western Ghats. Add city dots for top 12 metros. Include corridor rating legend.
                  </p>
                </div>
                <p className="text-center text-xs font-body text-ev-muted italic pb-4">Fig 1. India EV Fast Charging Corridor Coverage Map (2026) — based on BEE public data and operator network maps.</p>
              </div>

              <div className="space-y-4 mb-8">
                {corridors.map(({ name, km, rating, color, body }) => (
                  <div key={name} className="bg-ev-card border border-ev-border rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-base">{name}</h3>
                        <span className="text-xs font-mono text-ev-muted">{km}</span>
                      </div>
                      <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-bold" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>{rating}</span>
                    </div>
                    <p className="text-ev-text/65 font-body text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000010" className="my-8" />

              {/* Apps */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">The Best Apps to Find EV Chargers in India</h2>
              <div className="rounded-2xl p-5 my-6 border bg-ev-cyan/5 border-ev-cyan/25">
                <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">Always use two apps. We recommend <strong className="text-white">ChargeZone or Tata EZ Charge</strong> as your primary (verified fast charger locations with real-time status) and <strong className="text-white">Plug Share</strong> as your backup (community-reported availability). Cross-referencing both before departure adds a crucial safety margin.</p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-ev-border my-8">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-ev-border bg-ev-surface/20">
                    {["App", "Charger Database", "Real-Time", "Payment", "Best For"].map((h, i) => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider" style={{ color: i === 0 ? "#00e5ff" : "#4a6fa5" }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {apps.map(([app, db, rt, pay, best], i) => (
                      <tr key={i} className={`border-b border-ev-border/40 ${i % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
                        <td className="px-4 py-3 font-display font-semibold text-white text-xs">{app}</td>
                        <td className="px-4 py-3 font-mono text-ev-cyan text-xs">{db}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{rt}</td>
                        <td className="px-4 py-3 text-ev-text/60 text-xs">{pay}</td>
                        <td className="px-4 py-3 text-ev-text/50 text-xs">{best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Planning steps */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5">How to Plan an EV Road Trip in India</h2>
              <div className="space-y-4 mb-8">
                {tripSteps.map(({ step, title, body }) => (
                  <div key={step} className="flex gap-4 bg-ev-card border border-ev-border rounded-xl p-5">
                    <div className="font-display font-black text-ev-cyan text-lg shrink-0 w-8">{step}</div>
                    <div>
                      <h3 className="font-display font-bold text-white text-sm mb-1.5">{title}</h3>
                      <p className="text-ev-text/65 font-body text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Etiquette */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">EV Charging Etiquette in India</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Move your vehicle from the charging bay as soon as charging is complete — do not use EV bays as regular parking.",
                  "Do not unplug someone else's car even if it shows 80%+ — only the vehicle owner should do this.",
                  "Report non-functional chargers on the app after your visit to help the community.",
                  "If a charger has two CCS2 ports, check whether both are active — some stations share power and reduce speed with dual-vehicle charging.",
                  "Be patient during peak periods — charging infrastructure is growing but has not yet caught up with EV adoption rates.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-body text-ev-text/70">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-ev-cyan" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Future */}
              <div className="rounded-2xl p-5 my-8 border bg-ev-green/5 border-ev-green/25">
                <p className="text-xs font-mono text-ev-green uppercase tracking-widest mb-2">The Road Trip Reality Today</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">If you stick to major national highway corridors and carry a charging app, an EV road trip in India is genuinely practical in 2026 for Golden Quadrilateral and Golden Diagonal routes. Off the beaten path, petrol still has a logistics advantage — but that gap is closing measurably every quarter.</p>
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
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">Charger counts and corridor ratings are based on publicly available data at time of writing and change frequently. Always verify charger availability via the relevant app before departure. EVSelect.in is not responsible for charging decisions made based on this article. EVSelect.in is independent and not affiliated with any charging network operator.</p>
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Corridor Quick Reference</p>
                <div className="space-y-2">
                  {corridors.map(({ name, rating, color }) => (
                    <div key={name} className="flex items-center justify-between gap-2">
                      <span className="text-xs font-body text-ev-muted truncate">{name.split("→")[0].trim()}</span>
                      <span className="text-[10px] font-mono shrink-0" style={{ color }}>{rating}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare EV Range</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Find which EV has the range you need for your regular routes.</p>
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
