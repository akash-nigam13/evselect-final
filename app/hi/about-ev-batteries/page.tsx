import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { Battery, Zap, ThermometerSun, Shield, TrendingDown, Clock, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import { articleSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: altsFor("/about-ev-batteries", "hi"),
  title: "EV बैटरी के बारे में — पूरी गाइड",
  description:
    "EV बैटरी के बारे में वह सब कुछ जो आपको जानना चाहिए: केमिस्ट्री के प्रकार, डिग्रेडेशन, थर्मल मैनेजमेंट, चार्जिंग की सर्वोत्तम प्रथाएँ और भारत-विशिष्ट सलाह।",
};

/* ─── Data ─────────────────────────────────────────── */

const chemistries = [
  {
    name: "LFP",
    full: "Lithium Iron Phosphate",
    accent: "#39ff14",
    pros: ["Longer cycle life (3,000–5,000 cycles)", "Safer — no thermal runaway risk", "Better in high-temperature climates", "Cheaper to produce"],
    cons: ["Lower energy density", "Heavier for same range", "Less efficient in extreme cold"],
    used: "Tata Nexon EV, BYD vehicles",
  },
  {
    name: "NMC",
    full: "Nickel Manganese Cobalt",
    accent: "#00e5ff",
    pros: ["Higher energy density = more range", "Lighter pack weight", "Better low-temperature performance"],
    cons: ["Shorter cycle life (~1,500 cycles)", "Thermal runaway risk if damaged", "More expensive due to cobalt"],
    used: "MG ZS EV, Hyundai Kona EV",
  },
  {
    name: "NCA",
    full: "Nickel Cobalt Aluminium",
    accent: "#ffb800",
    pros: ["Highest energy density available", "Excellent power output"],
    cons: ["Most expensive chemistry", "Requires sophisticated BMS", "Shorter lifespan than LFP"],
    used: "Premium & performance EVs",
  },
];

const degradationFactors = [
  { icon: ThermometerSun, label: "Heat Exposure",       tip: "Parking in direct sun regularly accelerates cell degradation. Use shade or covered parking." },
  { icon: Zap,            label: "Fast Charging Overuse",tip: "DC fast charging stresses cells. Use it when needed, not as your daily routine." },
  { icon: Battery,        label: "Charging to 100%",    tip: "Keeping SoC between 20–80% is the single easiest way to extend battery life." },
  { icon: TrendingDown,   label: "Deep Discharges",     tip: "Regularly draining to 0% damages cells. Try to charge before reaching 15–20%." },
];

const chargingLevels = [
  { level: "Level 1 (AC Slow)", power: "3.3 kW",  time: "8–14 hrs",   use: "Overnight home charging",    color: "#39ff14" },
  { level: "Level 2 (AC Fast)", power: "7–22 kW", time: "3–6 hrs",    use: "Home/office fast chargers",  color: "#00e5ff" },
  { level: "DC Fast (CCS2)",    power: "50 kW",   time: "45–75 min",  use: "Public charging hubs",       color: "#ffb800" },
  { level: "Ultra-Fast DC",     power: "100+ kW", time: "20–35 min",  use: "Highway rapid charging",     color: "#f43f5e" },
];

const toc = [
  "बैटरी केमिस्ट्री के प्रकार",
  "EV बैटरी कैसे डिग्रेड होती है",
  "भारत-विशिष्ट चुनौतियाँ",
  "चार्जिंग की सर्वोत्तम प्रथाएँ",
  "अपनी वारंटी को समझें",
  "भविष्य की बैटरी तकनीक",
];

/* ─── Components ────────────────────────────────────── */

function SectionHeading({ tag, title, sub }: { tag: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">{tag}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">{title}</h2>
      {sub && <p className="text-ev-text/60 font-body max-w-2xl leading-relaxed">{sub}</p>}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */

export default function AboutBatteriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* ── Hero ── */}
        <section className="relative py-24 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroes/battery.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ev-bg via-ev-bg/60 to-ev-bg/20"
          />
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
            style={{ maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ev-green/8 blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumbs
                homeName="होम"
                homeHref="/hi"
                items={[
                  { name: "जानें", path: "/hi/learn" },
                  { name: "बैटरी गाइड", path: "/hi/about-ev-batteries" },
                ]}
                className="mb-6"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ev-green/30 bg-ev-green/5 mb-8">
                <Battery className="w-3.5 h-3.5 text-ev-green" />
                <span className="text-xs font-mono text-ev-green tracking-widest uppercase">गहन गाइड</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.05] mb-6">
                EV बैटरी के बारे में<br />
                <span className="text-ev-green">सब कुछ</span>
              </h1>
              <p className="text-ev-text/60 text-lg font-body leading-relaxed mb-8 max-w-2xl">
                बैटरी हर इलेक्ट्रिक वाहन का दिल है। यह कैसे काम करती है, कितने समय तक चलती है और इसकी देखभाल कैसे करें — यह समझना आपके लाखों रुपये बचा सकता है और शुरुआत से ही सही EV चुनने में मदद कर सकता है।
              </p>
              <div className="flex flex-wrap gap-3">
                {toc.map((item, i) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg border border-ev-border text-xs font-mono text-ev-muted hover:border-ev-green/30 hover:text-ev-green cursor-pointer transition-colors">
                    {String(i + 1).padStart(2, "0")} {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Top Ad ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <AdPlaceholder format="leaderboard" slot="8888888881" />
        </div>

        {/* ── Content + Sidebar layout ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">

            {/* Main content */}
            <div className="space-y-20">

              {/* 1. Chemistry */}
              <section id="chemistry">
                <SectionHeading
                  tag="01 — केमिस्ट्री"
                  title={<>बैटरी <span className="text-ev-green">केमिस्ट्री के प्रकार</span></>}
                  sub="सभी EV बैटरियाँ एक जैसी नहीं बनी होतीं। अंदर की केमिस्ट्री रेंज, उम्र, सुरक्षा और कीमत तय करती है।"
                />
                <div className="grid sm:grid-cols-3 gap-5">
                  {chemistries.map(({ name, full, accent, pros, cons, used }) => (
                    <div key={name} className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden">
                      <div className="h-1 w-full" style={{ background: accent }} />
                      <div className="p-5">
                        <div className="font-display font-black text-3xl mb-0.5" style={{ color: accent }}>{name}</div>
                        <div className="text-xs font-body text-ev-muted mb-4 leading-tight">{full}</div>
                        <div className="space-y-1.5 mb-4">
                          {pros.map((p) => (
                            <div key={p} className="flex items-start gap-2 text-xs font-body text-ev-text/70">
                              <Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: accent }} /> {p}
                            </div>
                          ))}
                        </div>
                        <div className="space-y-1.5 mb-4">
                          {cons.map((c) => (
                            <div key={c} className="flex items-start gap-2 text-xs font-body text-ev-muted">
                              <span className="text-ev-border text-sm leading-none shrink-0">—</span> {c}
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-ev-border/40">
                          <span className="text-[10px] font-mono text-ev-muted">Used in: </span>
                          <span className="text-[10px] font-mono" style={{ color: accent }}>{used}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. Degradation */}
              <section id="degradation">
                <SectionHeading
                  tag="02 — डिग्रेडेशन"
                  title={<>EV बैटरी कैसे <span className="text-ev-cyan">डिग्रेड होती है</span></>}
                  sub="हर बैटरी समय के साथ क्षमता खोती है — लेकिन इसकी दर इस बात पर बहुत निर्भर करती है कि आप इसका उपयोग और चार्ज कैसे करते हैं।"
                />

                {/* Degradation curve visual */}
                <div className="bg-ev-card border border-ev-border rounded-2xl p-6 mb-8">
                  <div className="text-xs font-mono text-ev-muted mb-4 uppercase tracking-wider">Typical Capacity Curve (LFP vs NMC)</div>
                  <div className="relative h-40">
                    {/* Y axis labels */}
                    {[100, 90, 80, 70].map((val) => (
                      <div key={val} className="absolute left-0 text-[10px] font-mono text-ev-border" style={{ top: `${(100 - val) * 2.5}%`, transform: "translateY(-50%)" }}>
                        {val}%
                      </div>
                    ))}
                    <div className="absolute left-8 right-0 inset-y-0">
                      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                        {/* Grid lines */}
                        {[0, 25, 50, 75, 100].map((x) => (
                          <line key={x} x1={x * 4} y1="0" x2={x * 4} y2="100" stroke="#1a3a5c" strokeWidth="0.5" />
                        ))}
                        {[0, 25, 50, 75].map((y) => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#1a3a5c" strokeWidth="0.5" />
                        ))}
                        {/* LFP curve — slower degradation */}
                        <path d="M0,0 C40,5 100,10 150,14 C200,18 300,22 400,26" fill="none" stroke="#39ff14" strokeWidth="2" />
                        {/* NMC curve — faster degradation */}
                        <path d="M0,0 C40,8 100,18 150,25 C200,32 300,40 400,46" fill="none" stroke="#00e5ff" strokeWidth="2" />
                        {/* Areas */}
                        <path d="M0,0 C40,5 100,10 150,14 C200,18 300,22 400,26 L400,100 L0,100Z" fill="#39ff14" opacity="0.05" />
                        <path d="M0,0 C40,8 100,18 150,25 C200,32 300,40 400,46 L400,100 L0,100Z" fill="#00e5ff" opacity="0.05" />
                      </svg>
                      {/* X axis labels */}
                      <div className="flex justify-between mt-1">
                        {["0", "25k", "50k", "75k", "100k km"].map((l) => (
                          <span key={l} className="text-[10px] font-mono text-ev-border">{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 mt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-ev-green"><span className="w-6 h-0.5 bg-ev-green inline-block" /> LFP</div>
                    <div className="flex items-center gap-2 text-xs font-mono text-ev-cyan"><span className="w-6 h-0.5 bg-ev-cyan inline-block" /> NMC</div>
                  </div>
                </div>

                {/* Factors grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {degradationFactors.map(({ icon: Icon, label, tip }) => (
                    <div key={label} className="bg-ev-card border border-ev-border rounded-xl p-5 flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-ev-amber/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-ev-amber" />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white text-sm mb-1">{label}</div>
                        <div className="text-ev-text/55 text-xs font-body leading-relaxed">{tip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mid-content Ad */}
              <AdPlaceholder format="leaderboard" slot="8888888882" />

              {/* 3. India-specific */}
              <section id="india">
                <SectionHeading
                  tag="03 — भारत संदर्भ"
                  title={<>भारत-विशिष्ट <span className="text-ev-amber">बैटरी चुनौतियाँ</span></>}
                  sub="भारतीय सड़कें, मौसम और ड्राइविंग पैटर्न EV बैटरियों पर अनूठी माँगें रखते हैं, जिन्हें वैश्विक गाइड अक्सर नज़रअंदाज़ कर देते हैं।"
                />
                <div className="space-y-4">
                  {[
                    { title: "Extreme Summer Heat (40–48°C)", body: "Most of India exceeds safe battery operating temperatures in peak summer. LFP chemistry handles this better. Always check if a vehicle has active liquid cooling vs passive air cooling — it makes a massive difference to long-term health.", accent: "#ffb800" },
                    { title: "Dusty & Humid Environments", body: "Dust ingress and monsoon humidity affect the battery management system (BMS) and connectors. Look for an IP67 or higher rating on the battery pack, especially if you ride in waterlogged areas.", accent: "#f43f5e" },
                    { title: "Patchy Charging Infrastructure", body: "In cities where DC fast chargers are scarce, you may end up over-relying on slow overnight charging — which is actually better for battery health. But during highway trips, multiple fast charges in a day can stress the pack.", accent: "#00e5ff" },
                    { title: "Regenerative Braking in Stop-Go Traffic", body: "Indian urban traffic offers excellent regen opportunities. Vehicles with higher regen settings can recover 10–20% more energy in city driving vs highway — effectively extending your usable range.", accent: "#39ff14" },
                  ].map(({ title, body, accent }) => (
                    <div key={title} className="bg-ev-card border border-ev-border rounded-xl p-5 flex gap-4">
                      <div className="w-0.5 shrink-0 rounded-full self-stretch" style={{ backgroundColor: accent }} />
                      <div>
                        <div className="font-display font-semibold text-white text-sm mb-2">{title}</div>
                        <p className="text-ev-text/60 text-sm font-body leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Charging */}
              <section id="charging">
                <SectionHeading
                  tag="04 — चार्जिंग"
                  title={<>चार्जिंग की <span className="text-ev-cyan">सर्वोत्तम प्रथाएँ</span></>}
                  sub="आप कैसे चार्ज करते हैं यह लगभग उतना ही मायने रखता है जितना आप कैसे ड्राइव करते हैं। अपने पैक की उम्र बढ़ाने के लिए इन दिशानिर्देशों का पालन करें।"
                />
                {/* Charging levels */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {chargingLevels.map(({ level, power, time, use, color }) => (
                    <div key={level} className="bg-ev-card border border-ev-border rounded-xl p-5 overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: color }} />
                      <div className="font-display font-bold text-xs mb-1" style={{ color }}>{level}</div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-display font-black text-2xl text-white">{power}</span>
                        <span className="text-ev-muted text-xs font-mono">· {time}</span>
                      </div>
                      <div className="text-ev-text/50 text-xs font-body">{use}</div>
                    </div>
                  ))}
                </div>
                {/* Tips */}
                <div className="bg-ev-surface/40 border border-ev-border rounded-2xl p-6">
                  <h3 className="font-display font-bold text-white text-sm mb-4">बैटरी की लंबी उम्र के लिए सुनहरे नियम</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Charge to 80% for daily use, 100% only before long trips",
                      "Avoid letting battery drop below 15% regularly",
                      "Prefer AC slow charging for daily top-ups",
                      "Use scheduled charging to avoid peak heat hours",
                      "Pre-condition the cabin while still plugged in",
                      "Service the BMS as per manufacturer schedule",
                    ].map((tip) => (
                      <div key={tip} className="flex items-start gap-2 text-xs font-body text-ev-text/70">
                        <Check className="w-3.5 h-3.5 text-ev-green shrink-0 mt-0.5" /> {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 5. Warranty */}
              <section id="warranty">
                <SectionHeading
                  tag="05 — वारंटी"
                  title={<>अपनी <span className="text-ev-green">बैटरी वारंटी</span> को समझें</>}
                  sub="भारतीय EV बैटरी वारंटी काफ़ी अलग-अलग होती हैं। हस्ताक्षर करने से पहले बारीक अक्षरों को कैसे पढ़ें, यहाँ बताया गया है।"
                />
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-ev-border">
                        {["Brand", "Warranty Period", "Capacity Guarantee", "Notes"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-[10px] font-mono text-ev-muted uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Tata Motors", "8 yrs / 1.6L km", "70% capacity", "Covers manufacturing defects"],
                        ["MG Motor", "8 yrs / 1.5L km", "70% capacity", "Includes roadside assistance"],
                        ["Ather Energy", "3 yrs / 30k km", "No SoH guarantee", "Extendable plans available"],
                        ["Ola Electric", "8 yrs / 80k km", "80% capacity", "Ola Care+ extends coverage"],
                        ["BYD India",   "8 yrs / 1.5L km", "70% capacity", "Blade battery warranty"],
                      ].map(([brand, period, cap, note], i) => (
                        <tr key={brand} className={`border-b border-ev-border/40 ${i % 2 === 0 ? "" : "bg-ev-surface/20"}`}>
                          <td className="px-4 py-3 font-display font-semibold text-white text-xs">{brand}</td>
                          <td className="px-4 py-3 font-mono text-ev-cyan text-xs">{period}</td>
                          <td className="px-4 py-3 font-mono text-ev-green text-xs">{cap}</td>
                          <td className="px-4 py-3 text-ev-muted text-xs font-body">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 6. Future tech */}
              <section id="future">
                <SectionHeading
                  tag="06 — भविष्य की तकनीक"
                  title={<>आगे <span className="text-ev-cyan">क्या आ रहा है</span></>}
                  sub="बैटरी का परिदृश्य तेज़ी से बदल रहा है। अगले 2–5 वर्षों में किन बातों पर नज़र रखें, यहाँ बताया गया है।"
                />
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Solid-State Batteries", timeline: "2026–2028", desc: "Higher energy density, no liquid electrolyte, safer and longer-lasting.", color: "#00e5ff" },
                    { label: "Sodium-Ion (NaIB)", timeline: "2024–2025", desc: "Cheaper, abundant materials — ideal for budget EVs in emerging markets like India.", color: "#39ff14" },
                    { label: "Silicon Anode", timeline: "2025–2027", desc: "Dramatically faster charging and higher capacity by replacing graphite anodes with silicon.", color: "#ffb800" },
                  ].map(({ label, timeline, desc, color }) => (
                    <div key={label} className="bg-ev-card border border-ev-border rounded-xl p-5">
                      <div className="text-[10px] font-mono mb-2" style={{ color }}>{timeline}</div>
                      <div className="font-display font-bold text-white text-sm mb-2">{label}</div>
                      <p className="text-ev-text/55 text-xs font-body leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom ad */}
              <AdPlaceholder format="leaderboard" slot="8888888883" />

            </div>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block space-y-6 sticky top-24 self-start">
              {/* TOC */}
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-4">इस पृष्ठ पर</h3>
                <ul className="space-y-2">
                  {toc.map((item, i) => (
                    <li key={item}>
                      <a href={`#${["chemistry","degradation","india","charging","warranty","future"][i]}`}
                        className="flex items-center gap-2 text-xs font-body text-ev-muted hover:text-ev-green transition-colors group">
                        <span className="w-4 text-[10px] font-mono text-ev-border group-hover:text-ev-green">{String(i + 1).padStart(2,"0")}</span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <AdPlaceholder format="rectangle" slot="8888888884" />

              {/* CTA */}
              <div className="bg-ev-card border border-ev-green/20 rounded-2xl p-5">
                <Battery className="w-6 h-6 text-ev-green mb-3" />
                <h3 className="font-display font-bold text-white text-sm mb-2">EV बैटरियों की तुलना करें</h3>
                <p className="text-ev-text/55 text-xs font-body mb-4">200+ मॉडलों के बैटरी स्पेक्स की तुलना के लिए हमारा टूल इस्तेमाल करें।</p>
                <Link href="/hi/compare" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-ev-green text-ev-bg text-xs font-display font-bold tracking-wide hover:opacity-90 transition-opacity">
                  अभी तुलना करें <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <AdPlaceholder format="rectangle" slot="8888888885" />
            </aside>
          </div>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={articleSchema({
          title: "EV Battery Guide",
          description:
            "How EV batteries work and survive Indian conditions — chemistry, degradation, charging and longevity.",
          path: "/about-ev-batteries",
          section: "Battery Tech",
        })}
      />
    </>
  );
}
