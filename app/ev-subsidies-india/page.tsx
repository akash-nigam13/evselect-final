import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowRight, BadgeCheck, AlertTriangle, Landmark, MapPin, Receipt, Calculator } from "lucide-react";
import { altsFor } from "@/lib/i18n";
import { articleSchema, faqPageSchema, webPageSchema, SITE } from "@/lib/seo";
import ToolsCTA from "@/components/ToolsCTA";

const UPDATED = "June 2026";

export const metadata: Metadata = {
  title: "EV Subsidies & Incentives in India 2026 — Central + State Guide | EVSelect.in",
  description:
    "Complete 2026 guide to EV subsidies in India: PM E-DRIVE, state-by-state purchase subsidies, road-tax & registration waivers, 5% GST, Section 80EEB and how to claim. Updated, sourced, buyer-first.",
  alternates: altsFor("/ev-subsidies-india", "en"),
  openGraph: {
    title: "EV Subsidies & Incentives in India 2026 — Central + State Guide",
    type: "article",
  },
};

const stateRows: { state: string; subsidy: string; roadTax: string; status: "active" | "lapsed" | "draft" }[] = [
  { state: "Maharashtra", subsidy: "₹5,000/kWh · 2W ≤₹10k, 3W ≤₹30k, 4W ≤₹1.5L (cars: taxi/fleet only)", roadTax: "100% exempt (to 2030)", status: "active" },
  { state: "Madhya Pradesh", subsidy: "2W ≤₹10k, 3W ≤₹20k, e-car ≤₹50k", roadTax: "100% exempt", status: "active" },
  { state: "Rajasthan", subsidy: "2W ₹5k/kWh (≤₹20k), 3W ≤₹50k, 4W ≤₹1.5L + SGST", roadTax: "100% exempt", status: "active" },
  { state: "Tamil Nadu", subsidy: "No consumer cash subsidy (supply-side)", roadTax: "100% exempt (to 31 Dec 2027)", status: "active" },
  { state: "Telangana", subsidy: "Limited (first 5,000 units)", roadTax: "100% exempt (first 5,000, to 31 Dec 2026)", status: "active" },
  { state: "Bihar", subsidy: "2W ₹5k/kWh (first 10k), 4W ₹10k/kWh (first 1k)", roadTax: "75% MV-tax rebate (verify)", status: "active" },
  { state: "Assam", subsidy: "₹10,000/kWh · caps ₹20k / ₹50k / ₹1.5L", roadTax: "100% exempt (5 yrs)", status: "active" },
  { state: "Meghalaya", subsidy: "2W ₹10k/kWh; others ₹4k/kWh (capped units)", roadTax: "Waived (verify post-Mar 2026)", status: "active" },
  { state: "Odisha", subsidy: "2W ₹5k/kWh (≤₹20k), 3W ₹30k, 4W ≤₹1.5L", roadTax: "100% exempt (renewal — verify)", status: "active" },
  { state: "West Bengal", subsidy: "Purchase support fund", roadTax: "100% (5 yrs) — window ends Mar 2026", status: "active" },
  { state: "Delhi", subsidy: "DRAFT: 2W ≤₹30k, e-auto ₹50k", roadTax: "DRAFT: 100% (EVs ≤₹30L) to 2030", status: "draft" },
  { state: "Gujarat", subsidy: "Discontinued (2024)", roadTax: "1% (reduced) till Mar 2026", status: "lapsed" },
  { state: "Karnataka", subsidy: "Limited", roadTax: "Rolled back 2026 → 5–10% by price band", status: "lapsed" },
  { state: "Uttar Pradesh", subsidy: "Lapsed", roadTax: "Waiver expired 13 Oct 2025", status: "lapsed" },
  { state: "Kerala", subsidy: "Fleet/scrappage support", roadTax: "~50% concession / 5 yrs (verify)", status: "active" },
];

const faqs = [
  {
    q: "Are electric cars eligible for the central subsidy in 2026?",
    a: "No. The central PM E-DRIVE scheme does not cover private electric cars — it covers electric two-wheelers, three-wheelers, buses, trucks and ambulances. The government's stated reason is that e-cars already enjoy a concessional 5% GST. A few states (e.g. Madhya Pradesh up to ₹50,000; Maharashtra for taxi/fleet use) still offer car incentives.",
  },
  {
    q: "What central subsidy do electric two-wheeler and three-wheeler buyers get now?",
    a: "Under PM E-DRIVE, the demand incentive in the current phase is ₹2,500 per kWh of battery capacity, capped at ₹5,000 per vehicle. The electric two-wheeler incentive is scheduled to end on 31 July 2026, while support for e-rickshaws and e-carts runs to March 2028. Always confirm the live cap on the official PM E-DRIVE portal.",
  },
  {
    q: "Did FAME-II end?",
    a: "Yes. FAME-II ended on 31 March 2024. The interim EMPS-2024 scheme bridged April–September 2024 and was folded into PM E-DRIVE, which began on 1 October 2024 and currently runs to 31 March 2028.",
  },
  {
    q: "How much GST do I pay on an electric vehicle?",
    a: "EVs are taxed at just 5% GST with no cess, compared with 18% or 40% on petrol/diesel vehicles under the GST 2.0 structure effective 22 September 2025. EV chargers are also taxed at 5%. This is the single largest fiscal advantage for EV buyers nationwide.",
  },
  {
    q: "Can I still claim the ₹1.5 lakh income-tax deduction (Section 80EEB) on my EV loan?",
    a: "Only if your loan was sanctioned between 1 April 2019 and 31 March 2023, and you file under the old tax regime. The window for new loans has closed — loans sanctioned after 31 March 2023 do not qualify. Many websites still wrongly imply this benefit is open to new buyers; it is not.",
  },
  {
    q: "Is road tax waived on EVs?",
    a: "It depends entirely on your state. Road tax is currently fully waived in states such as Maharashtra, Tamil Nadu (to 2027) and Madhya Pradesh, but is no longer waived in Uttar Pradesh (expired October 2025) or Karnataka (now 5–10% by price band). Gujarat charges a reduced 1% until March 2026. Always check your state's current notification before buying.",
  },
  {
    q: "Which state gives the highest EV subsidy?",
    a: "It varies by vehicle category and changes frequently. Historically the highest per-kWh rates (₹10,000/kWh) were in Assam and Meghalaya, with strong active programmes in Maharashtra, Rajasthan, Madhya Pradesh and Odisha. Note that Gujarat has discontinued its subsidy, Uttar Pradesh's tax waiver has expired, and Karnataka has rolled back its exemption — so verify before relying on any 'highest' claim.",
  },
  {
    q: "How do I actually claim the central PM E-DRIVE subsidy?",
    a: "It is applied automatically at purchase through an Aadhaar-authenticated e-Voucher. The scheme portal generates the voucher, the dealer factors the incentive into your on-road price, and you sign the voucher via a link sent to your registered mobile number. There is no separate application to the central government.",
  },
  {
    q: "How do I claim a state subsidy?",
    a: "Most states use a dedicated EV or transport portal and transfer the subsidy by Direct Benefit Transfer (DBT) to your bank account after the vehicle is registered, typically within about 30–45 days. Examples include the Rajasthan, Telangana and Bihar EV portals. Confirm the process on your specific state portal.",
  },
  {
    q: "Do I get a benefit for scrapping my old vehicle?",
    a: "Yes. Against a valid scrapping certificate, states generally offer up to about 25% road-tax rebate for private vehicles, and manufacturers typically add a 4–6% discount. Exact amounts are state-administered, and some states (e.g. Kerala, Madhya Pradesh) add an EV-specific scrappage bonus.",
  },
];

const statusChip = (s: "active" | "lapsed" | "draft") => {
  if (s === "active") return { label: "Active", cls: "text-ev-green border-ev-green/40 bg-ev-green/10" };
  if (s === "draft") return { label: "Draft", cls: "text-amber-400 border-amber-400/40 bg-amber-400/10" };
  return { label: "Lapsed / rolled back", cls: "text-red-400 border-red-400/40 bg-red-400/10" };
};

export default function EvSubsidiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Learn", path: "/learn" },
                { name: "EV Subsidies & Incentives", path: "/ev-subsidies-india" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              <Receipt className="h-3 w-3" /> Policy & Incentives · Updated {UPDATED}
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV Subsidies &amp; Incentives in India <span className="text-gradient-brand">(2026)</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              The complete, current guide to what you actually save on an electric vehicle in India —
              central schemes, state-by-state subsidies, road-tax and registration waivers, GST, the
              income-tax angle, and exactly how to claim each one.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            {/* TL;DR */}
            <div className="not-prose mb-10 rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold text-white">
                <BadgeCheck className="h-4 w-4 text-brand" /> The 30-second summary
              </p>
              <ul className="space-y-2 font-body text-sm leading-relaxed text-ev-text/75">
                <li>• <strong className="text-white">Central (PM E-DRIVE):</strong> ₹2,500/kWh (capped ₹5,000) for e-2W &amp; e-3W. <strong className="text-white">Electric cars get no central cash subsidy</strong> — they instead get 5% GST.</li>
                <li>• <strong className="text-white">GST:</strong> just <strong className="text-white">5%</strong> on EVs vs 18–40% on petrol/diesel.</li>
                <li>• <strong className="text-white">State subsidies &amp; road-tax waivers</strong> are where the big money is — but they vary wildly and change often (see the table below).</li>
                <li>• <strong className="text-white">Section 80EEB</strong> (₹1.5 lakh loan-interest deduction) is <strong className="text-white">closed to new loans</strong> (sanction window ended 31 Mar 2023).</li>
              </ul>
            </div>

            <h2 className="flex items-center gap-2"><Landmark className="h-5 w-5 text-brand" /> Central government schemes</h2>

            <h3>PM E-DRIVE — the main national scheme</h3>
            <p>
              <strong>PM E-DRIVE</strong> (PM Electric Drive Revolution in Innovative Vehicle Enhancement) is
              the flagship central EV scheme, with a <strong>₹10,900 crore</strong> outlay. It launched on
              1 October 2024 — replacing FAME-II, which ended on 31 March 2024 — and now runs to
              <strong> 31 March 2028</strong>. It directly subsidises electric two-wheelers, three-wheelers,
              buses, trucks and ambulances, plus public charging infrastructure.
            </p>
            <p>
              The buyer-facing demand incentive for e-2W and e-3W is <strong>₹2,500 per kWh of battery
              capacity, capped at ₹5,000 per vehicle</strong> in the current phase. Crucially, the electric
              two-wheeler incentive is scheduled to end on <strong>31 July 2026</strong>, while e-rickshaw and
              e-cart support continues to March 2028. The incentive is applied at the dealer through an
              Aadhaar-authenticated e-Voucher, so there is no separate claim to file.
            </p>
            <p className="not-prose flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 font-body text-sm text-ev-text/75">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span><strong className="text-white">Electric cars are not covered by PM E-DRIVE.</strong> The Centre&apos;s position is that the 5% GST already makes e-cars cheaper. Car incentives, where they exist, come from a handful of states.</span>
            </p>

            <h3>5% GST — the biggest hidden saving</h3>
            <p>
              Every EV — two-wheeler, three-wheeler or car — is taxed at just <strong>5% GST</strong>, with no
              compensation cess. Petrol and diesel vehicles, by contrast, attract <strong>18% or 40%</strong>
              under the GST 2.0 structure effective 22 September 2025. EV chargers are also taxed at 5%. For a
              mid-priced car this single difference is worth lakhs over an equivalent petrol model.
            </p>

            <h3>Section 80EEB income-tax deduction (closed to new loans)</h3>
            <p>
              Section 80EEB allows an individual to deduct up to <strong>₹1.5 lakh per year</strong> of interest
              paid on an EV loan. However, this only applies to loans <strong>sanctioned between 1 April 2019 and
              31 March 2023</strong>, and only under the old tax regime. Loans taken after that window do not
              qualify. If you took a qualifying loan in time, you can keep claiming the deduction each year until
              it is repaid.
            </p>

            <h3>Scrappage incentive</h3>
            <p>
              Under the national vehicle-scrappage programme, buying a new vehicle against a valid scrapping
              certificate earns roughly <strong>up to 25% road-tax rebate</strong> for private vehicles, plus a
              typical 4–6% manufacturer discount. These are administered by individual states, so the exact
              amounts vary by notification.
            </p>

            <AdPlaceholder format="leaderboard" slot="7777777777" className="my-10" />

            <h2 className="flex items-center gap-2"><MapPin className="h-5 w-5 text-brand" /> State-by-state subsidies &amp; road tax</h2>
            <p>
              This is where most of the real savings — and most of the confusion — live. State EV policies change
              constantly: some have expired, some have been rolled back, and Delhi&apos;s new policy is still in
              draft. The table below is current as of <strong>{UPDATED}</strong>; always confirm the live figures
              on your state transport or EV portal before you buy.
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ev-surface/60 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                    <th className="px-4 py-3">State</th>
                    <th className="px-4 py-3">Purchase subsidy (consumer)</th>
                    <th className="px-4 py-3">Road tax</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ev-border/60">
                  {stateRows.map((r) => {
                    const chip = statusChip(r.status);
                    return (
                      <tr key={r.state} className="align-top">
                        <td className="px-4 py-3 font-display font-bold text-white">{r.state}</td>
                        <td className="px-4 py-3 font-body text-ev-text/75">{r.subsidy}</td>
                        <td className="px-4 py-3 font-body text-ev-text/75">{r.roadTax}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[10px] ${chip.cls}`}>{chip.label}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-ev-muted">
              Figures are indicative and condensed. Several state windows (Gujarat, West Bengal, Meghalaya,
              Madhya Pradesh tax extension) hinge on notifications around March 2026 — verify the latest status.
            </p>

            <h2 className="flex items-center gap-2"><Calculator className="h-5 w-5 text-brand" /> How to actually claim your savings</h2>
            <ol>
              <li><strong>Central (PM E-DRIVE):</strong> automatic at the dealer via an Aadhaar e-Voucher — nothing to file yourself.</li>
              <li><strong>State subsidy:</strong> usually a Direct Benefit Transfer to your bank after registration, claimed through the state EV/transport portal (about 30–45 days).</li>
              <li><strong>Road-tax / registration waiver:</strong> applied at the RTO at the time of registration — confirm the dealer has factored it into your on-road price.</li>
              <li><strong>Scrappage benefit:</strong> obtain a Certificate of Deposit from a Registered Vehicle Scrapping Facility and present it during purchase/registration.</li>
            </ol>

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

            <h2>Keep going</h2>
            <p>
              Want to see how incentives change a specific car&apos;s real cost? Use the{" "}
              <Link href="/tools">cost &amp; savings calculators</Link>, line up models in the{" "}
              <Link href="/compare">compare tool</Link>, or browse the{" "}
              <Link href="/catalog/all">full EV catalogue</Link>. For the deeper policy background, read{" "}
              <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">EV subsidies, road tax &amp; incentives by state</Link>.
              Planning to set one up commercially? See our guide to{" "}
              <Link href="/ev-charging-station-setup-india">setting up an EV charging station in India</Link>.
            </p>

            <ToolsCTA locale="en" tools={["emi", "cost", "compare"]} className="not-prose my-8" />

            <h2>Sources &amp; disclaimer</h2>
            <p className="text-sm text-ev-muted">
              Primary sources include the{" "}
              <a href="https://pmedrive.heavyindustries.gov.in/" target="_blank" rel="noopener noreferrer">PM E-DRIVE portal (Ministry of Heavy Industries)</a>,
              PIB releases, the GST Council, and individual state transport/EV-policy portals. Subsidy schemes
              change frequently and several state windows expire around March 2026. This page is for general
              information only and is not financial or legal advice — always verify the current entitlement on the
              relevant official portal before making a purchase decision. Last reviewed {UPDATED}.
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          webPageSchema(
            "EV Subsidies & Incentives in India 2026",
            "Central and state EV subsidies, road-tax waivers, GST and tax benefits in India, with how-to-claim guidance.",
            "/ev-subsidies-india"
          ),
          articleSchema({
            title: "EV Subsidies & Incentives in India (2026): Central + State Guide",
            description: "PM E-DRIVE, state subsidies, road tax, 5% GST and Section 80EEB explained, with how to claim.",
            path: "/ev-subsidies-india",
            section: "Policy & Incentives",
          }),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
