import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowLeft, Clock, Calendar, Check } from "lucide-react";
import { ChargingInfraHero, ConnectorTypesGuide } from "@/components/blog/BlogImages";

export const metadata: Metadata = {
  title: "EV Charging Infrastructure in India 2026: Routes, Networks & Planning Guide",
  description: "India now has 25,000+ public chargers. Here is a complete guide to planning long-distance EV road trips with charging maps, network ratings, and tips.",
  alternates: { canonical: "https://evselect.in/blog/ev-charging-infrastructure-india" },
  openGraph: { title: "EV Charging Infrastructure India 2026: Complete Guide", type: "article" },
};

const networks = [
  { name: "Tata Power EV",  chargers: "6,200+", cities: "480+",   fast: "Yes (50–150 kW)", access: "App + RFID", color: "#00e5ff",  rating: 4.5, best: "Best national coverage overall" },
  { name: "Ather Grid",     chargers: "1,800+", cities: "180+",   fast: "Yes (Dot, 1.5 kW)", access: "Ather app", color: "#39ff14", rating: 4.4, best: "Best for Ather scooter owners" },
  { name: "ChargePoint",    chargers: "900+",   cities: "60+",    fast: "Yes (50 kW)",     access: "App",       color: "#ffb800",  rating: 4.2, best: "Best in premium malls / airports" },
  { name: "EESL / BEE",    chargers: "3,100+", cities: "420+",   fast: "Some (30 kW)",    access: "Open",      color: "#a78bfa",  rating: 3.8, best: "Best for government highway stops" },
  { name: "Statiq",         chargers: "4,500+", cities: "350+",   fast: "Yes (60–120 kW)", access: "App",       color: "#f43f5e",  rating: 4.3, best: "Best app UX & real-time status" },
  { name: "Ola Hypercharger",chargers: "4,000+",cities: "300+",  fast: "Yes (Hypercharger)",access: "Ola app",  color: "#ffb800",  rating: 4.1, best: "Essential for Ola S1 owners" },
];

const corridors = [
  { name: "Golden Quadrilateral Corridor", route: "Delhi–Mumbai–Chennai–Kolkata (loop)", color: "#39ff14", status: "Excellent",
    chargers: "820+ stations", spacing: "50–70 km avg", fastAvail: "85%",
    notes: "India's best-covered highway network. Tata Power + EESL chargers every 50 km on most sections. Suitable for current EVs." },
  { name: "Delhi–Mumbai Expressway",       route: "Delhi → Jaipur → Ahmedabad → Mumbai", color: "#00e5ff", status: "Excellent",
    chargers: "240+ stations", spacing: "40–60 km avg", fastAvail: "80%",
    notes: "Fastest improving corridor. NHAI has mandated chargers at every petrol station on this route. Several 150 kW chargers now operational." },
  { name: "Bengaluru–Chennai NH-44",       route: "Bengaluru → Krishnagiri → Chennai", color: "#00e5ff", status: "Good",
    chargers: "120+ stations", spacing: "45–75 km avg", fastAvail: "70%",
    notes: "Busy IT corridor with strong private network coverage. ChargePoint and Tata Power dominant. Weekend congestion at chargers possible." },
  { name: "Mumbai–Goa NH-66",             route: "Mumbai → Pune → Kolhapur → Goa", color: "#ffb800", status: "Developing",
    chargers: "88 stations",   spacing: "60–90 km avg", fastAvail: "55%",
    notes: "Popular tourist route. Gaps exist between Kolhapur and Ratnagiri. Plan charging carefully — carry a portable Level 2 cable as backup." },
  { name: "Delhi–Manali NH-3/21",         route: "Delhi → Chandigarh → Manali", color: "#f43f5e", status: "Limited",
    chargers: "38 stations",   spacing: "80–120 km avg", fastAvail: "30%",
    notes: "High-altitude challenge. Cold weather reduces range by 20–35%. Suitable only for 400+ km range EVs with careful planning. Carry recovery cable." },
];

const tips = [
  { icon: "📱", title: "Use Tata Power + Statiq Apps Together", desc: "Download both apps and pre-load payment methods before your trip. Cross-network maps give the most complete real-time picture of available chargers along your route." },
  { icon: "🔋", title: "Plan Every Charge Stop at 25%, Not 10%", desc: "Reaching a charger at 10% adds stress and may leave you stranded if the first stop is occupied. Arriving at 25–30% means you can wait 10 minutes for a free charger, or drive to the next one." },
  { icon: "🌡️", title: "Account for Summer Range Loss", desc: "In peak summer (April–June), NMC batteries lose 15–20% range due to cabin cooling load. Add one extra charge stop per 400 km on long trips during these months." },
  { icon: "📷", title: "Report Non-Functional Chargers", desc: "India's biggest charging frustration is broken chargers. Every major network has an in-app 'Report Problem' button. Use it — it speeds up maintenance and earns you points on some apps." },
  { icon: "⚙️", title: "Pre-Condition Battery Before Long Legs", desc: "Set your navigation destination before departing. Tesla, Tata, and Hyundai vehicles pre-heat or cool the battery en route to the charger for maximum charge rate." },
  { icon: "🏨", title: "Choose Hotels with EV Charging", desc: "ixigo and MakeMyTrip now show EV charging filters. A Type 2 overnight charge at your hotel (7–12 kW) often means waking up with a full battery at zero charger congestion." },
];

const sources = [
  { label: "Ministry of Power, Govt. of India — EVSE Deployment Data Q4 2025", url: "https://powermin.gov.in" },
  { label: "NITI Aayog — National EV Charging Infrastructure Plan", url: "https://www.niti.gov.in" },
  { label: "NHAI — Charging Stations on National Highways Dashboard", url: "https://nhai.gov.in" },
  { label: "Bureau of Energy Efficiency — EVSE Standards & Regulations", url: "https://beeindia.gov.in" },
  { label: "Tata Power EV — Network Coverage Report, Jan 2026", url: "https://ev.tatapower.com" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map((s) => (
        <div key={s} className="w-3 h-3 rounded-sm" style={{ background: s <= Math.floor(rating) ? "#ffb800" : s - 0.5 <= rating ? "#ffb80060" : "#1a3a5c" }} />
      ))}
      <span className="text-[10px] font-mono text-ev-muted ml-1">{rating}/5</span>
    </div>
  );
}

export default function Article5() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        {/* Hero Banner */}
        <div className="w-full overflow-hidden border-b border-ev-border/30">
          <ChargingInfraHero />
        </div>

        <div className="bg-ev-surface/20 border-b border-ev-border/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono border mb-4 bg-ev-cyan/10 border-ev-cyan/30 text-ev-cyan">Infrastructure</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              EV Charging Infrastructure in India 2026: Routes, Networks & Planning Guide
            </h1>
            <p className="text-ev-text/60 font-body text-lg leading-relaxed mb-5">
              India has crossed 25,000 public chargers. We rate every major network, map the best and worst highway corridors, and give you a practical road-trip planning guide.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-ev-cyan" />Mar 5, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-ev-cyan" />12 min read</span>
              <span>EVSelect Editorial Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <article>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-4">
                Eighteen months ago, planning an EV road trip from Delhi to Mumbai required spreadsheets, multiple apps, and a healthy dose of anxiety. Today, the same journey is manageable — and on the Golden Quadrilateral, almost routine. India&apos;s charging infrastructure has grown faster than almost anyone predicted.
              </p>
              <p className="text-ev-text/75 font-body text-base leading-relaxed mb-5">
                The nuance is that coverage is wildly uneven. The top 20 corridors are well served. The next 100 are patchy. And the 500+ routes beyond that remain genuinely challenging. This guide will tell you exactly where you stand.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                {[
                  { value: "25,000+", label: "Public Chargers",       sub: "Dec 2025 EVSE count",     color: "#00e5ff" },
                  { value: "4,500+",  label: "DC Fast Chargers",      sub: "50 kW and above",         color: "#39ff14" },
                  { value: "12",      label: "Major Networks",        sub: "Countrywide coverage",    color: "#ffb800" },
                  { value: "60–80km", label: "NH Charger Spacing",    sub: "Golden Quadrilateral avg",color: "#a78bfa" },
                ].map(({ value, label, sub, color }) => (
                  <div key={label} className="bg-ev-card border border-ev-border rounded-2xl p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
                    <div className="font-display font-black text-2xl mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-white text-xs font-body font-medium mb-0.5">{label}</div>
                    <div className="text-ev-muted text-[10px] font-mono">{sub}</div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000009" className="my-8" />

              {/* Connector Guide */}
              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-4">Charging Connector Types in India</h2>
              <div className="w-full aspect-[760/220] rounded-2xl overflow-hidden border border-ev-border my-6">
                <ConnectorTypesGuide />
              </div>
              <p className="text-ev-text/55 text-xs font-body italic text-center mb-10">
                CCS2 is the preferred DC fast-charging standard for cars. Type 2 AC is standard for home and workplace charging.
              </p>

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">Top Charging Networks Rated</h2>
              <div className="space-y-4">
                {networks.map(({ name, chargers, cities, fast, access, color, rating, best }) => (
                  <div key={name} className="bg-ev-card border border-ev-border rounded-2xl p-5" style={{ borderLeftColor: color, borderLeftWidth: 3 }}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="font-display font-bold text-white text-base mb-0.5">{name}</div>
                        <div className="text-[10px] font-mono px-2 py-0.5 rounded inline-block" style={{ color, background: `${color}15` }}>{best}</div>
                      </div>
                      <StarRating rating={rating} />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[{ l:"Chargers", v:chargers },{ l:"Cities", v:cities },{ l:"Fast Charging", v:fast },{ l:"Access Method", v:access }].map(({ l, v }) => (
                        <div key={l} className="bg-ev-surface/50 rounded-xl px-3 py-2">
                          <div className="text-ev-muted text-[10px] font-mono">{l}</div>
                          <div className="text-white text-xs font-medium font-body mt-0.5">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="9000000010" className="my-10" />

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">Highway Corridor Report</h2>
              <div className="space-y-5">
                {corridors.map(({ name, route, color, status, chargers: ch, spacing, fastAvail, notes }) => {
                  const statusColor = status === "Excellent" ? "#39ff14" : status === "Good" ? "#00e5ff" : status === "Developing" ? "#ffb800" : "#f43f5e";
                  return (
                    <div key={name} className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden">
                      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-display font-bold text-white text-base">{name}</h3>
                            <p className="text-ev-muted text-xs font-mono mt-0.5">{route}</p>
                          </div>
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg shrink-0" style={{ color: statusColor, background: `${statusColor}15`, border: `1px solid ${statusColor}30` }}>{status}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {[{ l:"Total Stations", v:ch },{ l:"Avg Spacing", v:spacing },{ l:"Fast Charger Avail.", v:fastAvail }].map(({ l, v }) => (
                            <div key={l} className="bg-ev-surface/50 rounded-xl px-3 py-2 text-center">
                              <div className="text-ev-muted text-[10px] font-mono">{l}</div>
                              <div className="font-mono text-sm font-semibold mt-0.5" style={{ color }}>{v}</div>
                            </div>
                          ))}
                        </div>
                        <p className="text-ev-text/65 text-xs font-body leading-relaxed">{notes}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-6">Road Trip Planning Tips</h2>
              <div className="grid sm:grid-cols-2 gap-5 my-6">
                {tips.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-ev-card border border-ev-border rounded-2xl p-5">
                    <div className="text-2xl mb-3">{icon}</div>
                    <h3 className="font-display font-bold text-white text-sm mb-2">{title}</h3>
                    <p className="text-ev-text/65 text-xs font-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5 my-8 border bg-ev-cyan/5 border-ev-cyan/25">
                <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest mb-2">The Realistic 2026 Verdict</p>
                <p className="text-ev-text/70 font-body text-sm leading-relaxed">
                  If you drive primarily in metros and on the top 20 national highway corridors, charging anxiety in 2026 is largely a solved problem. If your routes take you into tier-3 cities, hill stations, or coastal stretches, plan carefully and carry a portable AC charging cable. By 2028, NHAI&apos;s mandate requiring chargers at every petrol station on national highways will have closed most remaining gaps.
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
                <p className="text-xs font-body text-ev-text/50 leading-relaxed">Charger counts and corridor data change frequently. Always verify real-time charger availability via the respective network apps before a long-distance journey. EVSelect.in is independent and not affiliated with any charging network operator.</p>
              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Essential Apps</p>
                <ul className="space-y-2 text-xs font-body text-ev-text/60">
                  {["Tata Power EZ Charge","Statiq — Real-Time Status","PlugShare (crowd data)","EVONE by CESL","ChargeZone"].map((app) => (
                    <li key={app} className="flex items-center gap-2 hover:text-ev-cyan transition-colors">
                      <span className="w-1 h-1 rounded-full bg-ev-cyan shrink-0" />{app}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center"><p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p><p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250</p></div>
              </div>
              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Plan Your Next EV Trip</p>
                <p className="text-ev-text/55 text-xs font-body mb-4 leading-relaxed">Use our compare tool to check charging speed specs across all vehicles.</p>
                <Link href="/compare" className="block text-center py-2.5 rounded-xl text-xs font-display font-bold bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors">Compare Charging Specs →</Link>
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
