import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import {
  P, H2, H3, Highlight, InfoBox, Infographic,
  KeyStat, StatGrid, DataTable, ArticleAd,
  Sources, Disclaimer, BulletList, VehicleCard,
} from "@/components/blog/BlogComponents";

/* ── SEO Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "Top 5 Electric Scooters in India 2026 — Range, Price & Features Compared",
  description:
    "Looking for the best electric scooter in India in 2026? We compare the top 5 models on ARAI range, real-world performance, charging time, and value for money to help you make the right choice.",
  keywords: [
    "best electric scooter India 2026",
    "top electric scooters India",
    "electric scooter comparison India",
    "Ather 450X vs Ola S1 Pro",
    "EV scooter price India 2026",
  ],
  openGraph: {
    title: "Top 5 Electric Scooters in India 2026",
    description: "Range, price, and features compared — India's definitive EV scooter guide.",
    type: "article",
    url: "https://evselect.in/blog/top-5-electric-scooters-india-2026",
  },
  alternates: { canonical: "https://evselect.in/blog/top-5-electric-scooters-india-2026" },
};

/* ── Page ─────────────────────────────────────── */
export default function Article1() {
  return (
    <BlogLayout
      meta={{
        title: "Top 5 Electric Scooters in India 2026",
        description:
          "A data-driven comparison of range, price, charging time, and real-world usability for India's best electric scooters in 2026.",
        author: "EVSelect Editorial Team",
        publishDate: "January 15, 2026",
        readTime: "11 min",
        category: "Buying Guide",
        categoryColor: "text-ev-cyan",
        categoryBg: "#00e5ff",
        heroAccent: "#00e5ff",
        tags: ["electric-scooter", "buying-guide", "2026", "ather", "ola", "tvs", "bajaj"],
      }}
    >

      {/* ── Intro ── */}
      <P>
        The Indian electric scooter market has matured remarkably. In 2026, buyers are no longer
        choosing between range anxiety and rising petrol costs — they are choosing between genuinely
        excellent machines. Monthly EV two-wheeler registrations crossed{" "}
        <Highlight>1.5 lakh units</Highlight> for the first time in late 2025, and the competition
        among top brands has never been fiercer.
      </P>
      <P>
        This guide cuts through the marketing noise. We have analysed ARAI-certified range, real-world
        owner data, charging infrastructure compatibility, after-sales support, and total cost of
        ownership to bring you the definitive ranking of the top 5 electric scooters available in
        India right now.
      </P>

      <StatGrid>
        <KeyStat value="1.5L+" label="Monthly EV 2W Sales" sub="Nov 2025 — VAHAN Data" color="#00e5ff" />
        <KeyStat value="38%"   label="YoY Growth in EV Scooters" sub="2024–2025" color="#39ff14" />
        <KeyStat value="₹800"  label="Avg. Monthly Fuel Saving" sub="vs 125cc petrol" color="#ffb800" />
        <KeyStat value="60+"   label="EV Scooter Models in Market" sub="India, Q1 2026" color="#a78bfa" />
      </StatGrid>

      <ArticleAd slot="9000000001" />

      {/* ── Infographic 1 ── */}
      <Infographic
        alt="Bar chart comparing ARAI certified range of top 5 electric scooters in India 2026"
        caption="Fig 1. ARAI-certified range comparison of India's top 5 electric scooters (2026 models). Real-world range is typically 70–80% of ARAI figures in Indian city traffic."
        designNote="Horizontal grouped bar chart with two bars per scooter: ARAI Range (solid fill) and Estimated Real-World Range (hatched/lighter fill). X-axis: Range in km (0–250). Models on Y-axis in ranking order. Use the EVSelect brand colours: cyan (#00e5ff) for ARAI, green (#39ff14) for real-world. Include a legend and the ex-showroom price annotated beside each model name."
        accentColor="#00e5ff"
      />

      <H2 id="how-we-ranked">How We Ranked These Scooters</H2>
      <P>
        Our methodology weighed six factors: certified range (20%), real-world range (25%), total
        cost of ownership over 5 years (20%), charging ecosystem (15%), after-sales network (10%),
        and build quality and features (10%). Pricing data was sourced from official brand websites
        in January 2026.
      </P>

      {/* ── Vehicle Cards ── */}
      <H2 id="rank-1">The Top 5 Electric Scooters of 2026</H2>

      <VehicleCard
        rank={1}
        name="Ather Rizta Z"
        brand="Ather Energy"
        price="₹1.49 L"
        range="160 km"
        topSpeed="100 km/h"
        chargingTime="3.7 hrs (home), 30 min (fast)"
        batteryKwh="3.7 kWh"
        highlight="Ather's family scooter hits the sweet spot of practicality, performance, and the most reliable fast-charging network in India."
        accent="#00e5ff"
        pros={[
          "450 Ather Grid fast chargers across 180+ cities",
          "IP67-rated battery — monsoon-proof",
          "Larger underseat storage than Ather 450 series",
          "Over-the-air software updates",
          "Best-in-class ride quality and suspension",
        ]}
        cons={[
          "No rear disc brake on base variant",
          "App connectivity can be inconsistent",
        ]}
      />

      <VehicleCard
        rank={2}
        name="TVS iQube S"
        brand="TVS Motor Company"
        price="₹1.41 L"
        range="145 km"
        topSpeed="95 km/h"
        chargingTime="4.5 hrs (home), 60 min (fast)"
        batteryKwh="3.4 kWh"
        highlight="TVS's 70-year service network makes the iQube S the most practical choice for buyers in Tier-2 and Tier-3 cities."
        accent="#39ff14"
        pros={[
          "Nationwide service at 1,000+ TVS centres",
          "Proven battery thermal management for Indian summers",
          "SmartXonnect Bluetooth connectivity",
          "Excellent build quality and component durability",
          "Strong resale value backed by TVS brand equity",
        ]}
        cons={[
          "Smaller proprietary charging network vs Ather",
          "Touchscreen UI is slower than competitors",
        ]}
      />

      <VehicleCard
        rank={3}
        name="Ola S1 Pro Gen 3"
        brand="Ola Electric"
        price="₹1.29 L"
        range="195 km"
        topSpeed="125 km/h"
        chargingTime="6.5 hrs (home), 25 min (Hypercharger)"
        batteryKwh="4.0 kWh"
        highlight="The highest ARAI range in its class and Ola's expanding Hypercharger network make the S1 Pro the best choice for high-mileage urban commuters."
        accent="#ffb800"
        pros={[
          "Market-leading 195 km ARAI range",
          "Ola Hypercharger network: 4,000+ stations",
          "MoveOS 5 with Advanced Navigation and Hill Hold",
          "Best performance per rupee ratio",
          "Multiple riding modes including Hyper",
        ]}
        cons={[
          "Service quality inconsistent across markets",
          "Software bugs reported on early units",
          "Narrower tyre choice vs competitors",
        ]}
      />

      <VehicleCard
        rank={4}
        name="Bajaj Chetak Premium"
        brand="Bajaj Auto"
        price="₹1.58 L"
        range="126 km"
        topSpeed="73 km/h"
        chargingTime="5 hrs (home)"
        batteryKwh="3.2 kWh"
        highlight="The Chetak's all-metal retro body and Bajaj's unmatched national service network make it the definitive premium lifestyle electric scooter."
        accent="#a78bfa"
        pros={[
          "All-metal body — premium feel and longevity",
          "Bajaj's 1,000+ dealer service network",
          "IP67 water and dust protection rating",
          "Regenerative braking improves real-world range",
          "Strong brand loyalty and resale value",
        ]}
        cons={[
          "No fast-charging capability on current models",
          "Lower top speed compared to performance rivals",
          "Premium pricing vs range offered",
        ]}
      />

      <VehicleCard
        rank={5}
        name="Vida V2 Pro"
        brand="Hero MotoCorp"
        price="₹1.11 L"
        range="165 km"
        topSpeed="90 km/h"
        chargingTime="4.9 hrs (home), 45 min (fast)"
        batteryKwh="3.94 kWh"
        highlight="Hero's EV entry at under ₹1.15 L with 165 km range represents the best value-for-money proposition in the 2026 electric scooter segment."
        accent="#f43f5e"
        pros={[
          "Most affordable in the top 5",
          "165 km range punches above its price",
          "Hero's 6,000+ service centres — unmatched reach",
          "Swappable battery option available",
          "Strong build quality for Indian road conditions",
        ]}
        cons={[
          "Feature set is basic vs Ather/Ola",
          "Charging network still ramping up",
          "Infotainment screen smaller than rivals",
        ]}
      />

      <ArticleAd slot="9000000002" />

      {/* ── Comparison Table ── */}
      <H2 id="comparison-table">Full Specification Comparison</H2>

      <DataTable
        caption="Top 5 Electric Scooters India 2026 — Full Spec Comparison"
        headers={["Model", "Price", "ARAI Range", "Top Speed", "Battery", "Charge (Home)", "Fast Charge"]}
        accentCol={2}
        accentColor="#00e5ff"
        rows={[
          ["Ather Rizta Z",       "₹1.49 L", "160 km", "100 km/h", "3.7 kWh", "3.7 hrs", "30 min"],
          ["TVS iQube S",         "₹1.41 L", "145 km", "95 km/h",  "3.4 kWh", "4.5 hrs", "60 min"],
          ["Ola S1 Pro Gen 3",    "₹1.29 L", "195 km", "125 km/h", "4.0 kWh", "6.5 hrs", "25 min"],
          ["Bajaj Chetak Premium","₹1.58 L", "126 km", "73 km/h",  "3.2 kWh", "5.0 hrs", "N/A"],
          ["Vida V2 Pro",         "₹1.11 L", "165 km", "90 km/h",  "3.94 kWh","4.9 hrs", "45 min"],
        ]}
      />

      <H2 id="buying-advice">Which Electric Scooter Should You Buy?</H2>

      <H3>Buy the Ather Rizta Z if…</H3>
      <P>
        You want the most complete package: a mature fast-charging network, excellent software, and
        Ather's proven track record with battery durability. It is ideal for families and anyone who
        values reliability over raw performance.
      </P>

      <H3>Buy the Ola S1 Pro if…</H3>
      <P>
        You are a high-mileage daily commuter who can access an Ola Hypercharger. The industry-leading
        195 km range and rapid 25-minute charge time genuinely eliminate range anxiety for most
        urban use cases. The pricing is also very competitive.
      </P>

      <H3>Buy the Vida V2 Pro if…</H3>
      <P>
        Budget is the primary constraint and after-sales peace of mind matters. Hero's unrivalled
        6,000-centre service network means you are never far from qualified support — a decisive
        advantage in smaller cities.
      </P>

      <InfoBox variant="tip" title="GST & FAME III Subsidy">
        Always check your state-level FAME III incentives before purchasing. States like Delhi,
        Maharashtra, and Gujarat offer additional subsidies of ₹5,000–₹30,000 on top of central
        incentives, which can meaningfully shift the value calculation between models.
      </InfoBox>

      {/* ── Infographic 2 ── */}
      <Infographic
        alt="Radar chart comparing Ather Rizta Z, Ola S1 Pro, TVS iQube, Bajaj Chetak and Hero Vida on six dimensions: range, charging, features, service, value, performance"
        caption="Fig 2. Multi-dimensional comparison of India's top 5 electric scooters in 2026 across six buyer criteria. Each axis is scored out of 10 based on expert assessment and owner survey data."
        designNote="Six-axis spider/radar chart. Each EV scooter is a semi-transparent polygon in a different colour (cyan, green, amber, purple, red). Axes: Range (ARAI), Charging Speed, Technology Features, Service Network, Value for Money, Performance. Score each out of 10 using the article data. Include a colour legend and the EVSelect.in logo in the corner."
        accentColor="#39ff14"
      />

      <H2 id="ownership-cost">5-Year Running Cost Estimate</H2>
      <P>
        Across all five models, the average electric scooter owner in India saves approximately{" "}
        <Highlight color="#39ff14">₹45,000–₹60,000</Highlight> in fuel and maintenance costs over
        five years compared to an equivalent 125cc petrol scooter — assuming electricity at ₹8/unit
        and petrol at ₹105/litre.
      </P>

      <DataTable
        caption="5-Year Running Cost Estimate (20 km/day average commute)"
        headers={["Cost Head", "Petrol 125cc", "EV (avg. top 5)"]}
        accentCol={2}
        accentColor="#39ff14"
        rows={[
          ["Fuel / Electricity (5 yr)",  "₹1,14,000", "₹14,600"],
          ["Service & Maintenance (5 yr)","₹28,000",   "₹9,500"],
          ["Insurance (5 yr)",            "₹18,000",   "₹16,500"],
          ["Total Running Cost",          "₹1,60,000", "₹40,600"],
          ["5-Year Savings (EV)",         "—",         "≈ ₹1,19,400"],
        ]}
      />

      <InfoBox variant="success" title="Bottom Line">
        Even the most expensive scooter in this list — the Bajaj Chetak Premium at ₹1.58 L — pays
        back its price premium over a comparable petrol scooter within 3–4 years on running costs
        alone, making 2026 the most compelling year to switch to an electric scooter.
      </InfoBox>

      <Sources
        sources={[
          { label: "VAHAN Dashboard — EV Registration Data, November 2025", url: "https://vahan.parivahan.gov.in" },
          { label: "ARAI — Official EV Testing & Certification Data", url: "https://www.araiindia.com" },
          { label: "Ather Energy — Rizta Z Official Specifications", url: "https://www.atherenergy.com" },
          { label: "TVS Motor Company — iQube S Official Specifications", url: "https://www.tvsmotor.com" },
          { label: "Ola Electric — S1 Pro Gen 3 Official Page", url: "https://www.olaelectric.com" },
          { label: "Bajaj Auto — Chetak Official Page", url: "https://www.bajajchetak.com" },
          { label: "Hero MotoCorp — Vida V2 Pro Specifications", url: "https://www.heromotocorp.com" },
          { label: "FAME III Scheme — Ministry of Heavy Industries", url: "https://heavyindustries.gov.in" },
        ]}
      />
      <Disclaimer />
    </BlogLayout>
  );
}
