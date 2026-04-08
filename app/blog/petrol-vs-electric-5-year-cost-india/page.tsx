import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import {
  P, H2, H3, Highlight, InfoBox, Infographic,
  KeyStat, StatGrid, DataTable, ArticleAd,
  Sources, Disclaimer, BulletList,
} from "@/components/blog/BlogComponents";

/* ── SEO Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "Petrol vs Electric Car in India: 5-Year Total Cost of Ownership Comparison (2026)",
  description:
    "Is buying an electric car really cheaper than petrol in India? We break down every cost — purchase price, fuel, insurance, maintenance, depreciation, and resale value — over 5 years with real Indian data.",
  keywords: [
    "petrol vs electric car India",
    "EV total cost of ownership India",
    "electric car cheaper than petrol India",
    "EV vs petrol running cost India 2026",
    "electric car worth buying India",
  ],
  openGraph: {
    title: "Petrol vs Electric: 5-Year Total Cost of Ownership in India (2026)",
    description: "A detailed rupee-by-rupee breakdown of the real cost of owning an electric car vs a petrol car in India.",
    type: "article",
    url: "https://evselect.in/blog/petrol-vs-electric-5-year-cost-india",
  },
  alternates: { canonical: "https://evselect.in/blog/petrol-vs-electric-5-year-cost-india" },
};

/* ── Page ─────────────────────────────────────── */
export default function Article3() {
  return (
    <BlogLayout
      meta={{
        title: "Petrol vs Electric Car in India: 5-Year Total Cost of Ownership (2026)",
        description:
          "We calculated the complete 5-year cost of owning a popular petrol car vs its electric equivalent in India — purchase price, fuel, insurance, maintenance, depreciation, and resale value included.",
        author: "EVSelect Editorial Team",
        publishDate: "February 3, 2026",
        readTime: "14 min",
        category: "Cost Analysis",
        categoryColor: "text-ev-amber",
        categoryBg: "#ffb800",
        heroAccent: "#ffb800",
        tags: ["TCO", "cost-analysis", "petrol-vs-ev", "buying-guide", "india-2026"],
      }}
    >

      {/* ── Intro ── */}
      <P>
        The question every Indian car buyer is now asking is deceptively simple: is an electric car
        actually cheaper than petrol once you account for everything? The showroom sticker tells only
        part of the story. The real answer lives in the total cost of ownership (TCO) — every rupee
        you spend from purchase day to the moment you sell the vehicle five years later.
      </P>
      <P>
        In this analysis, we compare two of India's most popular vehicles in their respective
        categories: the <Highlight color="#ffb800">Tata Nexon EV Max (₹19.99 L)</Highlight>{" "}
        against the <Highlight color="#ffb800">Hyundai Creta 1.5 Petrol MT (₹16.99 L)</Highlight>.
        We chose this pair because they serve the same buyer profile — the urban family wanting a
        comfortable, capable compact SUV — making the comparison directly relevant.
      </P>
      <P>
        All figures use January 2026 prices, a 12,000 km/year usage assumption (India average),
        Delhi electricity rate of ₹8/unit, and Mumbai petrol at ₹104.15/litre.
      </P>

      <StatGrid>
        <KeyStat value="₹3L+"  label="5-Year EV Savings (avg)" sub="Urban use, 12,000 km/yr" color="#39ff14" />
        <KeyStat value="40%"   label="Lower Maintenance Cost" sub="EV vs petrol (5 yr)" color="#00e5ff" />
        <KeyStat value="₹104"  label="Mumbai Petrol Price" sub="Jan 2026 per litre" color="#ffb800" />
        <KeyStat value="3 yr"  label="Typical EV Break-Even" sub="High-mileage urban use" color="#a78bfa" />
      </StatGrid>

      <ArticleAd slot="9000000005" />

      {/* ── Infographic 1 ── */}
      <Infographic
        alt="Stacked bar chart comparing 5-year total cost of ownership of Tata Nexon EV Max versus Hyundai Creta petrol in India, broken down by purchase price, fuel, insurance, maintenance and depreciation"
        caption="Fig 1. Five-year total cost of ownership breakdown — Tata Nexon EV Max vs Hyundai Creta 1.5 Petrol MT. Based on 12,000 km/year usage in a metro city. All figures in Indian Rupees (lakh)."
        designNote="Stacked horizontal bar chart with two rows — one for Nexon EV Max (top, in cyan) and one for Creta Petrol (bottom, in amber). Each bar is segmented into 5 cost components: Purchase Price (largest segment), Fuel/Electricity, Insurance, Maintenance, and minus Resale Value (shown as a subtracted segment going left). Colour code each segment consistently. Annotate total TCO at the end of each bar in bold. Include a legend and the source note 'Based on Jan 2026 data, 12,000 km/yr, Delhi'."
        accentColor="#ffb800"
      />

      <H2 id="cost-1-purchase">Cost 1 — Purchase Price & Loan Cost</H2>

      <H3>Ex-Showroom & On-Road Price</H3>
      <DataTable
        caption="Purchase Price Comparison — January 2026, Delhi"
        headers={["Cost Component", "Tata Nexon EV Max", "Hyundai Creta 1.5 Petrol MT"]}
        accentCol={1}
        accentColor="#00e5ff"
        rows={[
          ["Ex-Showroom (Delhi)",   "₹19,99,000", "₹16,99,000"],
          ["GST",                   "5% (EV)",     "28% + Cess (petrol)"],
          ["Registration & RTO",    "₹0 (waived)", "₹1,10,000 (approx)"],
          ["Insurance (1st year)", "₹38,000",     "₹51,000"],
          ["FAME III Subsidy",      "−₹50,000",   "Not applicable"],
          ["Total On-Road (Delhi)", "≈ ₹22,00,000","≈ ₹20,20,000"],
        ]}
      />
      <P>
        After applying FAME III incentives and Delhi's zero registration on EVs, the on-road price
        gap narrows from ₹3 lakh ex-showroom to approximately{" "}
        <Highlight color="#ffb800">₹1.8 lakh on-road</Highlight>. Additional state subsidies (if
        eligible) can close this gap further.
      </P>

      <H3>Loan Interest Cost (if financed at 9% for 5 years)</H3>
      <DataTable
        caption="5-Year Loan Interest Comparison (9% p.a., 80% LTV, 60 months)"
        headers={["", "Nexon EV Max", "Creta Petrol"]}
        accentCol={1}
        accentColor="#00e5ff"
        rows={[
          ["Loan Amount (80% LTV)", "₹17,60,000", "₹16,16,000"],
          ["EMI (60 months @ 9%)",  "≈ ₹36,520",  "≈ ₹33,540"],
          ["Total Interest Paid",   "≈ ₹3,91,200", "≈ ₹3,60,400"],
        ]}
      />

      <H2 id="cost-2-fuel">Cost 2 — Fuel vs Electricity (5 Years)</H2>
      <P>
        This is where the EV decisively wins. The Nexon EV Max consumes approximately{" "}
        <Highlight color="#39ff14">17 kWh per 100 km</Highlight> in real-world Indian driving.
        The Creta petrol returns roughly <Highlight color="#f43f5e">14 km/litre</Highlight> in
        city conditions.
      </P>

      <DataTable
        caption="Fuel / Electricity Cost Over 5 Years (12,000 km/year = 60,000 km total)"
        headers={["Vehicle", "Efficiency", "Rate", "Cost per km", "5-Year Cost"]}
        accentCol={4}
        accentColor="#39ff14"
        rows={[
          ["Nexon EV Max",    "17 kWh/100 km", "₹8/unit",      "₹1.36/km", "₹81,600"],
          ["Creta Petrol MT", "14 km/litre",   "₹104.15/litre","₹7.44/km", "₹4,46,400"],
          ["5-Year Saving (EV)", "—",           "—",            "−₹6.08/km", "₹3,64,800"],
        ]}
      />

      <InfoBox variant="success" title="Fuel Saving Alone Justifies the Premium">
        The ₹3.65 lakh fuel saving over five years more than covers the ₹1.8 lakh on-road price
        premium of the EV — with ₹1.85 lakh to spare, even before accounting for maintenance savings.
      </InfoBox>

      <ArticleAd slot="9000000006" />

      <H2 id="cost-3-maintenance">Cost 3 — Maintenance & Servicing</H2>
      <P>
        Electric vehicles have roughly <Highlight color="#39ff14">65% fewer moving parts</Highlight>{" "}
        than an equivalent internal combustion engine (ICE) vehicle. No engine oil, no timing belt,
        no transmission fluid, no spark plugs, and significantly reduced brake wear due to
        regenerative braking. This translates directly into lower service bills.
      </P>

      <DataTable
        caption="5-Year Cumulative Servicing & Maintenance Cost Comparison"
        headers={["Service Item", "Nexon EV Max (5 yr)", "Creta Petrol (5 yr)"]}
        accentCol={1}
        accentColor="#00e5ff"
        rows={[
          ["Engine Oil & Filter Changes",    "₹0",     "₹15,600"],
          ["Brake Pad Replacement",          "₹2,500", "₹9,000"],
          ["Air Filter / Fuel Filter",       "₹0",     "₹4,200"],
          ["Coolant / Transmission Service", "₹0",     "₹6,800"],
          ["Spark Plugs / Ignition",         "₹0",     "₹5,500"],
          ["Battery / Electrical Service",   "₹3,500", "₹4,000"],
          ["Tyre Replacement (1 set)",       "₹16,000","₹14,000"],
          ["Annual Service Charges",         "₹12,000","₹22,000"],
          ["Total Maintenance (5 yr)",       "₹34,000","₹81,100"],
        ]}
      />

      <H2 id="cost-4-insurance">Cost 4 — Insurance</H2>
      <P>
        EV insurance premiums are currently 15–20% higher than equivalent petrol vehicles due to
        higher Insured Declared Value (IDV) and the cost of battery replacement in case of a total
        loss claim. However, as more insurers enter the EV market and loss data matures, this gap
        is narrowing.
      </P>

      <DataTable
        caption="5-Year Insurance Cost Estimate (comprehensive, Delhi, zero NCB initially)"
        headers={["Year", "Nexon EV Max", "Creta Petrol"]}
        accentCol={1}
        accentColor="#ffb800"
        rows={[
          ["Year 1",     "₹38,000",  "₹51,000"],
          ["Year 2",     "₹31,000",  "₹41,000"],
          ["Year 3",     "₹25,500",  "₹33,000"],
          ["Year 4",     "₹21,000",  "₹27,000"],
          ["Year 5",     "₹18,000",  "₹22,000"],
          ["5-yr Total", "₹1,33,500","₹1,74,000"],
        ]}
      />

      <H2 id="cost-5-depreciation">Cost 5 — Depreciation & Resale Value</H2>
      <P>
        This is the least favourable category for EVs in 2026. EV resale values in India remain
        lower than equivalent petrol vehicles due to battery uncertainty, a less mature used-EV
        market, and buyer apprehension about battery health at resale. The Creta's resale value
        is well-established and consistently strong.
      </P>
      <DataTable
        caption="Estimated Resale Value After 5 Years (60,000 km)"
        headers={["Vehicle", "Purchase Price", "Estimated Resale (5yr)", "Depreciation"]}
        accentCol={2}
        accentColor="#ffb800"
        rows={[
          ["Nexon EV Max (ex-showroom)", "₹19,99,000", "₹8,50,000–₹10,00,000", "≈ 50–57%"],
          ["Creta Petrol MT",            "₹16,99,000", "₹8,50,000–₹9,50,000",  "≈ 44–50%"],
        ]}
      />
      <InfoBox variant="warning" title="Resale Value Is Improving">
        As battery warranties become better understood and India's used EV market matures — with
        more certified pre-owned programmes from Tata, MG, and others — EV resale values are
        expected to improve significantly by 2027–2028. Early 2026 buyers will likely benefit from
        this appreciation on their resale.
      </InfoBox>

      <H2 id="final-tco">The Final 5-Year TCO Verdict</H2>

      {/* ── Infographic 2 ── */}
      <Infographic
        alt="Line chart showing cumulative total cost of ownership of Tata Nexon EV Max versus Hyundai Creta petrol over 5 years, showing the break even point at approximately 3 years"
        caption="Fig 2. Cumulative total cost of ownership over 5 years — Nexon EV Max vs Creta Petrol MT. The crossover point (break-even) occurs at approximately 3.1 years for an urban owner driving 12,000 km/year."
        designNote="Line chart with X-axis: Years 0–5. Y-axis: Cumulative cost in ₹ lakhs. Two lines: Nexon EV Max (cyan, starts higher due to purchase price) and Creta Petrol (amber). Lines cross around Year 3. Mark the crossover with a vertical dashed line and label 'Break-Even Point.' After Year 5, annotate the final gap with an arrow showing '₹X lakh EV advantage.' Add shaded bands for low/high mileage scenarios. Include data labels at key milestones."
        accentColor="#39ff14"
      />

      <DataTable
        caption="Complete 5-Year TCO Summary"
        headers={["Cost Component", "Nexon EV Max", "Creta 1.5 Petrol", "EV Advantage"]}
        accentCol={3}
        accentColor="#39ff14"
        rows={[
          ["On-Road Purchase Price", "₹22,00,000", "₹20,20,000", "−₹1,80,000"],
          ["5-Year Fuel/Electricity", "₹81,600",   "₹4,46,400",  "+₹3,64,800"],
          ["5-Year Maintenance",      "₹34,000",   "₹81,100",    "+₹47,100"],
          ["5-Year Insurance",        "₹1,33,500", "₹1,74,000",  "+₹40,500"],
          ["Estimated Resale Value",  "−₹9,25,000","−₹9,00,000", "−₹25,000"],
          ["NET 5-YEAR TCO",          "≈ ₹14,24,100","≈ ₹17,21,500","≈ +₹2,97,400 EV wins"],
        ]}
      />

      <InfoBox variant="success" title="Verdict: EV Wins by ~₹3 Lakh Over 5 Years">
        Even accounting for the higher purchase price and lower resale value, the Nexon EV Max is
        approximately ₹3 lakh cheaper than the Creta petrol over 5 years of typical urban use.
        At 15,000+ km/year (highway + city), the EV advantage grows to over ₹4 lakh. At low annual
        mileage (under 8,000 km/year), the petrol may still have a marginal edge — the break-even
        extends beyond 5 years.
      </InfoBox>

      <H2 id="when-ev-makes-sense">When Does an EV Make Financial Sense?</H2>
      <BulletList
        color="#39ff14"
        items={[
          "You drive more than 10,000 km/year — the fuel saving advantage compounds.",
          "You have access to home charging — public charger costs reduce the fuel saving.",
          "You live in a metro city with good charging infrastructure.",
          "You can hold the vehicle for 4–5+ years to realise the full TCO benefit.",
          "You qualify for state subsidies — Maharashtra, Gujarat, Delhi all offer additional EVincreases.",
        ]}
      />

      <H2 id="when-petrol">When Petrol Still Makes More Sense</H2>
      <BulletList
        color="#ffb800"
        items={[
          "You drive under 8,000 km/year — low mileage slows the break-even.",
          "You have no home charging access and rely entirely on public chargers.",
          "You frequently do long highway trips without reliable fast-charging en route.",
          "You plan to sell within 2–3 years — resale disadvantage is not yet offset.",
          "You need a vehicle for interstate travel in less-developed charging corridors.",
        ]}
      />

      <Sources
        sources={[
          { label: "Tata Motors — Nexon EV Max Official Pricing, January 2026", url: "https://www.tatamotors.com" },
          { label: "Hyundai India — Creta Official Pricing, January 2026", url: "https://www.hyundai.com/in" },
          { label: "PPAC — Petrol Price Data Mumbai, January 2026", url: "https://ppac.gov.in" },
          { label: "Delhi DISCOM — Domestic Electricity Tariff 2025–26", url: "https://www.tatapower-ddl.com" },
          { label: "IRDAI — Motor Insurance Premium Rates & EV Norms 2025", url: "https://irdai.gov.in" },
          { label: "NITI Aayog — India EV Total Cost of Ownership Study", url: "https://www.niti.gov.in" },
          { label: "SIAM — India Automobile Depreciation & Resale Value Data", url: "https://www.siam.in" },
          { label: "Rocky Mountain Institute India — EV TCO Analysis 2025", url: "https://rmi.org" },
        ]}
      />
      <Disclaimer />
    </BlogLayout>
  );
}
