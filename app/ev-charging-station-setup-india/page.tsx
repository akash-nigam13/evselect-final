import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import { BadgeCheck, AlertTriangle, Plug, FileCheck, IndianRupee, Gauge, TrendingUp } from "lucide-react";
import { altsFor } from "@/lib/i18n";
import { articleSchema, faqPageSchema, howToSchema, webPageSchema } from "@/lib/seo";
import ToolsCTA from "@/components/ToolsCTA";

const UPDATED = "June 2026";

export const metadata: Metadata = {
  title: "How to Set Up an EV Charging Station in India 2026 — Cost, Licence, Subsidy & ROI | EVSelect.in",
  description:
    "Step-by-step 2026 guide to opening a commercial/public EV charging station in India: no licence needed, discom connection process, charger standards (CCS2), costs, PM E-DRIVE & state subsidies, and realistic ROI.",
  alternates: altsFor("/ev-charging-station-setup-india", "en"),
  openGraph: {
    title: "How to Set Up an EV Charging Station in India (2026)",
    type: "article",
  },
};

const steps = [
  { name: "Assess the site & demand", text: "Evaluate EV traffic, dwell time, visibility and proximity to the grid. Cities follow grid-coverage targets; highways aim for a station roughly every 20 km. Pick a site where vehicles naturally stop (malls, highways, offices, fuel stations)." },
  { name: "Secure the land or space", text: "Own, lease or use a revenue-share model. Government and public land is offered for charging at ₹1 per kWh to the land-owning agency. Mark dedicated parking bays and keep them covered and accessible." },
  { name: "Choose your charger mix & network", text: "Decide AC vs DC and power ratings by target segment — Type 2 AC (7.4–22 kW) for destination charging, CCS2 DC (50–250 kW) for cars and buses, LEV DC/AC-DC combo (up to 12 kW) for 2W/3W. Pick BIS-certified, type-tested chargers and OCPP-compatible network software, and decide whether to self-operate or partner a Charge Point Operator (CPO)." },
  { name: "Apply to the discom for a power connection", text: "Submit an application via the discom's online single-window and request a separate metered connection on the dedicated EV tariff. Discoms must respond within 3 days and energise the connection within 3 days (metro), 7 days (other municipal) or 15 days (rural). Pay the demand note for upstream infrastructure." },
  { name: "Build upstream electrical & civil infrastructure", text: "Install the distribution transformer, HT/LT cabling, distribution boxes, breakers, isolators and earthing, plus civil works — mounting structures, fencing, platforms, weatherproof shed, bollards and signage." },
  { name: "Get electrical safety (CEIG) approval", text: "If the sanctioned load exceeds the state threshold (commonly around 10 kW), obtain sign-off from the Chief Electrical Inspector to Government (CEIG). Submit single-line diagrams, layout and earthing details for inspection before commissioning." },
  { name: "Obtain the Fire NOC", text: "Most states require a No-Objection Certificate from the State Fire Department for commercial/public charging stations before they can operate." },
  { name: "Integrate network, payments & tariff display", text: "Connect the chargers to your central management system (CSMS) over OCPP, enable RFID/app/UPI payments and time-of-day pricing, and prominently display the tariff and service charge to users." },
  { name: "Register data with the nodal agency", text: "Charge Point Operators must register with the Central Nodal Agency (BEE) via the State Nodal Agency and share quarterly data (energy sold, downtime, service charges). PM E-DRIVE-funded sites onboard to the national 'Unified Bharat eCharge' platform." },
  { name: "Commission & go live", text: "Energise the station, run a soft launch to validate every charger and the payment flow, then begin full operation with continuous uptime and fault monitoring." },
];

const faqs = [
  { q: "Do I need a licence to open an EV charging station in India?", a: "No. Setting up a public charging station is a de-licensed activity under the Ministry of Power's EV charging infrastructure guidelines. You do not need an electricity licence — you only have to meet the technical, safety and performance standards and obtain the usual electrical (CEIG) and fire clearances." },
  { q: "Who is allowed to set one up?", a: "Any individual, business, housing society, mall, hotel or office can install a public charging station, including for visitors' vehicles. Note that direct PM E-DRIVE subsidy applicants are limited to government bodies, CPSEs and states/UTs — private players participate as Charge Point Operators selected through their bidding." },
  { q: "Can I set up a charging point at my shop or apartment for commercial use?", a: "Yes. You can request a separate metered connection with a dedicated EV tariff from your discom. Homes, apartment complexes and shops are explicitly permitted, and group housing societies must reserve at least 10% of parking for EV charging." },
  { q: "How much does it cost to set up an EV charging station?", a: "Indicative 2026 ranges: a small AC setup (2–3 chargers for a society or office) is roughly ₹2–12 lakh; a mid-size commercial station (one DC fast charger plus an AC charger and full infrastructure) is about ₹15–25 lakh; and a high-power hub (150 kW+) can run from ₹25 lakh to over ₹1 crore." },
  { q: "What subsidy is available for charging stations?", a: "Centrally, PM E-DRIVE has earmarked ₹2,000 crore for public charging, covering up to 100% of cost for free-access government-premises sites and 80% of upstream infrastructure for most other sites (routed through government/CPSE/state nodal agencies). Many states add capital subsidies of around 25% of equipment cost — for example Maharashtra up to ₹10 lakh per station, and Delhi's draft policy ₹6,000 per slow charger." },
  { q: "How long does the electricity connection take?", a: "Per the 2024 guidelines and the Electricity (Rights of Consumers) Rules, the discom must energise the connection within 3 days in metro cities, 7 days in other municipal areas and 15 days in rural areas — extending to about 30 days in hilly terrain, or up to 90 days where a new sub-station or mains extension is required." },
  { q: "Which charger and connector type should I install?", a: "CCS2 (IS 17017-2-3) is the dominant DC fast-charging standard for cars and buses (50–250 kW); Type 2 is standard for AC charging (7.4–22 kW); and LEV DC / AC-DC combo connectors (up to 12 kW) serve electric two- and three-wheelers. A public 2W/3W/4W station must have at least 7.4 kW capacity." },
  { q: "What electricity tariff will I pay?", a: "Charging stations get a concessional single-part EV tariff that, under the guidelines, must not exceed the Average Cost of Supply, with lower rates during solar hours (0.7×) and higher during non-solar hours (1.3×). Effective per-unit cost is typically around ₹5–6.50/kWh in most states." },
  { q: "Is running a charging station profitable?", a: "It can be, but average utilisation today is still low (around 5%). Industry estimates suggest an 18–36 month payback at strong locations, with break-even generally needing roughly 10–12% utilisation. Treat these as indicative — actual returns depend heavily on location, footfall and electricity cost." },
  { q: "What approvals do I need before going live?", a: "A discom load sanction with an EV-tariff meter, CEIG (electrical inspector) approval where the load exceeds the state threshold, a Fire NOC for commercial sites, type-tested BIS-compliant chargers, and data registration with the state and central nodal agencies." },
];

export default function ChargingStationSetupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Learn", path: "/learn" },
                { name: "Set up an EV charging station", path: "/ev-charging-station-setup-india" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              <Plug className="h-3 w-3" /> Charging Business · Updated {UPDATED}
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              How to Set Up a Commercial EV Charging Station in India <span className="text-gradient-brand">(2026)</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              A complete, technical-but-readable playbook for businesses and landowners: the rules, the
              discom process, charger standards, real costs, the subsidies you can claim, and an honest
              look at the returns.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <div className="not-prose mb-10 rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-white">
                <BadgeCheck className="h-4 w-4 text-brand" /> The 30-second summary
              </p>
              <ul className="space-y-2 font-body text-sm leading-relaxed text-ev-text/75">
                <li>• <strong className="text-white">No licence needed</strong> — public charging is a de-licensed activity. Anyone can set one up.</li>
                <li>• You get a <strong className="text-white">separate EV tariff</strong> and a fast, time-bound discom connection (3–15 days).</li>
                <li>• Typical cost: <strong className="text-white">₹2–12 lakh</strong> (small AC) to <strong className="text-white">₹15–25 lakh</strong> (mid DC station).</li>
                <li>• Subsidies: <strong className="text-white">PM E-DRIVE</strong> (up to 80–100%) for eligible sites + <strong className="text-white">~25% state capital subsidies</strong>.</li>
                <li>• Profitable at the right location, but today&apos;s average utilisation is low — plan conservatively.</li>
              </ul>
            </div>

            <h2 className="flex items-center gap-2"><FileCheck className="h-5 w-5 text-brand" /> The rules: licensing, who can, and tariffs</h2>
            <p>
              The single most important fact: <strong>you do not need a licence to operate a public EV charging
              station in India.</strong> Under the Ministry of Power&apos;s <em>Guidelines for Installation and
              Operation of Electric Vehicle Charging Infrastructure-2024</em> (the latest consolidated guidelines,
              notified September 2024), public charging is an explicitly <strong>de-licensed activity</strong>. Any
              individual, company, housing society, mall, hotel or office may set one up, provided it meets the
              technical and safety standards.
            </p>
            <p>
              Operators are entitled to a <strong>separate metered connection on a dedicated EV tariff</strong>.
              That tariff is a single-part tariff capped at the Average Cost of Supply, with cheaper power during
              solar hours (0.7×) and costlier during non-solar hours (1.3×). Discoms must provide the connection on
              an &quot;as-and-when&quot; basis within <strong>3 days (metro), 7 days (other municipal) or 15 days
              (rural)</strong> — up to ~30 days in hilly terrain, or 90 days where a new sub-station is needed.
              Public/government land is offered for charging at just <strong>₹1 per kWh</strong> to the land-owning
              agency.
            </p>

            <h2 className="flex items-center gap-2"><Gauge className="h-5 w-5 text-brand" /> Technical standards &amp; connectors</h2>
            <p>Choose chargers by the vehicles you want to serve. The standards that matter in India in 2026:</p>
            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">Standard</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Typical power</th>
                    <th className="px-4 py-3">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {[
                    ["Type 2 AC", "AC", "3.3 / 7.4 / 11 / 22 kW", "Destination / slow charging"],
                    ["CCS2 (IS 17017-2-3)", "DC fast", "50–250 kW", "Cars & buses — dominant standard"],
                    ["LEV DC / AC-DC combo", "DC / combo", "up to 12 kW", "Electric 2W & 3W"],
                    ["Bharat AC-001 / DC-001", "AC / DC", "up to ~15 kW", "Legacy fleets (largely superseded)"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="px-4 py-3 font-display font-bold text-white">{r[0]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[1]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[2]}</td>
                      <td className="px-4 py-3 font-body text-ev-text/75">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              A public station serving 2W/3W/4W must offer at least <strong>7.4 kW</strong> capacity. Stations for
              heavy-duty EVs (trucks/buses) need at least two 250 kW units, or one 500 kW dual-gun charger. Every
              charger model must be type-tested by an accredited lab, and sites need lightning/surge protection,
              fire protection and weatherproof siting.
            </p>

            <AdPlaceholder format="leaderboard" slot="7777777788" className="my-10" />

            <h2>Step-by-step: from idea to going live</h2>
            <ol className="not-prose space-y-4">
              {steps.map((s, i) => (
                <li key={s.name} id={`step-${i + 1}`} className="flex gap-4 rounded-2xl border border-ev-border bg-ev-card p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-ev-bg">{i + 1}</span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{s.name}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ev-text/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="flex items-center gap-2"><IndianRupee className="h-5 w-5 text-brand" /> What it costs (2026, indicative)</h2>
            <p>Hardware and infrastructure prices vary by vendor and power rating. Indicative 2026 ranges:</p>
            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Indicative cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {[
                    ["Type 2 AC charger (7.4–22 kW)", "₹35,000 – ₹1.5 lakh"],
                    ["DC fast charger (30–60 kW)", "₹8 – 15 lakh"],
                    ["DC fast charger (120–240 kW)", "₹25 lakh and up"],
                    ["Dedicated transformer", "₹2 – 5 lakh"],
                    ["Civil works (shed, flooring, branding)", "₹1 – 3 lakh"],
                    ["Network/CSMS software", "₹20,000 – ₹1 lakh"],
                    ["Small AC station (society/office)", "₹2 – 12 lakh total"],
                    ["Mid commercial station (DC + AC + infra)", "₹15 – 25 lakh total"],
                    ["High-power hub (150 kW+)", "₹25 lakh – ₹1 crore+"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="px-4 py-3 font-body text-ev-text/80">{r[0]}</td>
                      <td className="px-4 py-3 font-mono text-white">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-ev-muted">
              Operating costs add electricity (~₹5–6.50/kWh on the EV tariff), rent/revenue-share, maintenance
              (AMC), network/SaaS fees and payment-gateway charges.
            </p>

            <h2>Subsidies &amp; support you can claim</h2>
            <p>
              <strong>PM E-DRIVE</strong> earmarks <strong>₹2,000 crore</strong> for public charging, targeting
              roughly 72,000 chargers. Support is tiered: up to <strong>100%</strong> of cost for free-access
              government-premises sites (Category A), <strong>80% upstream + 70% of the charger</strong> for
              government/PSU sites like fuel stations and transport hubs (Category B), and <strong>80% of upstream
              infrastructure</strong> for most other commercial sites (Category C). Note that the direct subsidy
              applicants are government bodies, CPSEs and states — private operators typically participate as CPOs
              selected by these entities.
            </p>
            <p>
              On top of this, many <strong>states offer capital subsidies of around 25%</strong> of equipment cost.
              Maharashtra&apos;s 2025 policy offers up to ₹10 lakh per station for the first 250 commercial stations;
              Delhi&apos;s draft policy proposes ₹6,000 per slow charger; Gujarat, Karnataka, Telangana and Kerala
              run comparable schemes. Verify the exact cap in your state&apos;s current policy.
            </p>
            <p className="not-prose flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 font-body text-sm text-ev-text/75">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>Subsidy categories, caps and the PM E-DRIVE timeline are set by official guidelines that are periodically revised — confirm the current terms with your State Nodal Agency before committing capital.</span>
            </p>

            <h2 className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-brand" /> Revenue model &amp; realistic ROI</h2>
            <p>
              Operators mainly earn a <strong>per-kWh service fee</strong> — buying power at the concessional EV
              tariff (~₹5–6.50/kWh) and selling charging at roughly ₹12–18/kWh, for a gross margin of about
              ₹5–12/kWh before fixed costs. Additional revenue can come from subscriptions, time-of-day pricing,
              advertising and retail footfall.
            </p>
            <p>
              On returns, be realistic. Average charger utilisation in India is still low (around 5%), and
              break-even generally needs roughly 10–12% utilisation. Trade sources cite an <strong>18–36 month
              payback</strong> at strong locations (highways, fleet depots, high-footfall retail), with net margins
              of about 15–25% for well-run stations. These are best-case operator estimates — your actual returns
              hinge on location, footfall and electricity cost, so model conservatively.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="not-prose space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>

            <ToolsCTA locale="en" tools={["cost", "compare", "range"]} className="not-prose my-8" />

            <h2>Related</h2>
            <p>
              See which EVs your future customers are driving in the{" "}
              <Link href="/catalog/all">EV catalogue</Link>, learn the charging basics in{" "}
              <Link href="/blog/ev-charging-infrastructure-india">India&apos;s charging infrastructure guide</Link>{" "}
              and the latest network numbers in{" "}
              <Link href="/blog/india-ev-charging-network-2026">India&apos;s charging network nears 30,000 stations</Link>.
              Buying an EV yourself? Check the{" "}
              <Link href="/ev-subsidies-india">EV subsidies &amp; incentives guide</Link>.
            </p>

            <h2>Sources &amp; disclaimer</h2>
            <p className="text-sm text-ev-muted">
              Primary sources include the{" "}
              <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">PM E-DRIVE portal</a>,
              the Ministry of Power / BEE EV charging infrastructure guidelines (2024), PIB releases and the
              Electricity (Rights of Consumers) Rules. Hardware prices, utilisation and ROI figures are indicative
              industry estimates and will vary. This page is general information, not financial, legal or
              engineering advice — obtain current quotes and confirm regulatory requirements with your discom,
              State Nodal Agency and a licensed electrical contractor before investing. Last reviewed {UPDATED}.
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          webPageSchema(
            "How to Set Up an EV Charging Station in India (2026)",
            "Licensing, discom process, charger standards, costs, subsidies and ROI for a commercial EV charging station in India.",
            "/ev-charging-station-setup-india"
          ),
          howToSchema({
            name: "How to set up a commercial EV charging station in India",
            description: "Step-by-step process to open a public/commercial EV charging station in India, from site selection to going live.",
            path: "/ev-charging-station-setup-india",
            totalTime: "P30D",
            steps: steps.map((s) => ({ name: s.name, text: s.text })),
          }),
          articleSchema({
            title: "How to Set Up a Commercial EV Charging Station in India (2026)",
            description: "Rules, discom process, charger standards, costs, PM E-DRIVE & state subsidies and realistic ROI.",
            path: "/ev-charging-station-setup-india",
            section: "Charging",
          }),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
