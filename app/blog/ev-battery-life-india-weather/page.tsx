import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import {
  P, H2, H3, Highlight, InfoBox, Infographic,
  KeyStat, StatGrid, DataTable, ArticleAd,
  Sources, Disclaimer, BulletList,
} from "@/components/blog/BlogComponents";

/* ── SEO Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "EV Battery Life: How to Make Your Battery Last 10+ Years in Indian Weather",
  description:
    "India's extreme heat, monsoon humidity, and stop-go traffic are tough on EV batteries. Learn science-backed strategies to maximise battery life and protect your investment in any Indian climate.",
  keywords: [
    "EV battery life India",
    "how to extend EV battery life",
    "electric vehicle battery degradation India",
    "EV battery India heat",
    "LFP NMC battery India",
    "EV battery tips India",
  ],
  openGraph: {
    title: "EV Battery Life: How to Make It Last 10+ Years in Indian Weather",
    description: "Science-backed strategies to protect your EV battery from India's heat, monsoons, and traffic.",
    type: "article",
    url: "https://evselect.in/blog/ev-battery-life-india-weather",
  },
  alternates: { canonical: "https://evselect.in/blog/ev-battery-life-india-weather" },
};

/* ── Page ─────────────────────────────────────── */
export default function Article2() {
  return (
    <BlogLayout
      meta={{
        title: "EV Battery Life: How to Make Your Battery Last 10+ Years in Indian Weather",
        description:
          "India's extreme heat and monsoon humidity accelerate EV battery degradation. This guide explains the science and gives you actionable tips to make your battery last a decade.",
        author: "EVSelect Editorial Team",
        publishDate: "January 22, 2026",
        readTime: "13 min",
        category: "Battery Tech",
        categoryColor: "text-ev-green",
        categoryBg: "#39ff14",
        heroAccent: "#39ff14",
        tags: ["battery", "LFP", "NMC", "degradation", "india-climate", "maintenance"],
      }}
    >

      {/* ── Intro ── */}
      <P>
        When you spend ₹1.5 lakh on an electric scooter or ₹15 lakh on an electric car, the battery
        is the single most valuable component — and the one most affected by India's unique climate
        challenges. Temperatures regularly exceed 45°C in North India during May–June, monsoon
        humidity can spike to 95% in coastal cities, and stop-and-go urban traffic generates heat
        cycles that no European test protocol was designed to simulate.
      </P>
      <P>
        The good news: battery degradation is{" "}
        <Highlight color="#39ff14">not inevitable</Highlight>. Modern Battery Management Systems
        (BMS) are sophisticated, and the habits you build in the first two years of ownership have
        a disproportionate impact on long-term capacity retention. This guide explains the science
        and gives you a practical, evidence-based action plan.
      </P>

      <StatGrid>
        <KeyStat value="20%" label="Capacity Lost by Bad Habits" sub="In 3 years vs good habits" color="#f43f5e" />
        <KeyStat value="80%" label="Ideal Max Charge Level" sub="For daily use" color="#39ff14" />
        <KeyStat value="4°C" label="Reduces Degradation Rate" sub="Per 10°C temp reduction" color="#00e5ff" />
        <KeyStat value="3000+" label="LFP Charge Cycles" sub="vs ~1,500 for NMC" color="#ffb800" />
      </StatGrid>

      <ArticleAd slot="9000000003" />

      <H2 id="chemistry-matters">First: Know Your Battery Chemistry</H2>
      <P>
        The single most important thing to understand about your EV's battery is its chemistry, because
        different chemistries behave very differently in Indian conditions.
      </P>

      <H3 id="lfp">Lithium Iron Phosphate (LFP)</H3>
      <P>
        LFP batteries — used in Tata's entire EV lineup, BYD vehicles, and several two-wheelers —
        are thermally stable up to <Highlight color="#39ff14">270°C before thermal runaway</Highlight>,
        compared to just 150–200°C for NMC. This makes them significantly safer and more durable in
        India's summer heat. They also tolerate charging to 100% without significant stress, meaning
        you can use your full rated range for daily commuting.
      </P>
      <P>
        The tradeoff is lower energy density: LFP packs are heavier for the same capacity, which is
        why longer-range EVs often opt for NMC.
      </P>

      <H3 id="nmc">Nickel Manganese Cobalt (NMC)</H3>
      <P>
        NMC chemistry — found in MG ZS EV, Hyundai Ioniq 5, Kia EV6, and several premium scooters —
        offers higher energy density (more range for less weight) but is more sensitive to high
        temperatures and sustained high State of Charge (SoC). Keeping an NMC battery at 100% charge
        in 42°C ambient heat is the single worst thing you can do to it.
      </P>

      <InfoBox variant="tip" title="Check Your Battery Chemistry">
        Look up your vehicle's service manual or manufacturer website under "battery specifications."
        Terms like "Blade Battery," "LFP," or "Iron Phosphate" confirm LFP. "NMC" or "Ternary Lithium"
        confirms NMC. If the spec sheet only says "Lithium-Ion," check independent teardown reports.
      </InfoBox>

      {/* ── Infographic 1 ── */}
      <Infographic
        alt="Chart comparing LFP vs NMC battery capacity retention over 100,000 km in Indian conditions of 38 degrees Celsius average"
        caption="Fig 1. Modelled capacity retention curves for LFP vs NMC batteries in typical Indian usage conditions (avg. ambient 32°C, 20% DC fast charging, 80% daily charge limit). Based on published academic degradation models."
        designNote="Dual-line chart. X-axis: Distance driven in km (0 to 120,000 km). Y-axis: Capacity retention percentage (60% to 100%). LFP line in green (#39ff14), NMC in cyan (#00e5ff). Add shaded confidence bands around each line. Mark the 80% capacity threshold (typical warranty limit) with a horizontal dashed line in amber. Annotate where each chemistry crosses this threshold. Include temperature annotations (Indian avg.) and a note on the assumptions."
        accentColor="#39ff14"
      />

      <H2 id="enemies">The 5 Biggest Enemies of EV Battery Life in India</H2>

      <H3 id="heat">1. Sustained High Ambient Temperature</H3>
      <P>
        For every 10°C increase in operating temperature above 25°C, lithium-ion cells lose capacity
        approximately <Highlight color="#f43f5e">twice as fast</Highlight>. In cities like Nagpur,
        Jaisalmer, or Ahmedabad where summer temperatures regularly exceed 45°C, an unshaded parked
        EV can see battery temperatures climb above 50°C — a level that causes measurable and
        irreversible capacity loss within hours.
      </P>
      <BulletList
        color="#39ff14"
        items={[
          "Always park in shade or a covered parking space, especially between 12 PM – 4 PM.",
          "If your vehicle has a 'battery pre-conditioning' feature, activate it remotely 15 minutes before driving.",
          "Avoid leaving a fully-charged vehicle in direct sunlight for more than 2 hours.",
        ]}
      />

      <H3 id="charging-habits">2. Poor Charging Habits</H3>
      <P>
        Charging behaviour accounts for an estimated <Highlight color="#f43f5e">30–40%</Highlight> of
        long-term degradation in lithium-ion cells, according to research from the Indian Institute
        of Technology (IIT) Madras's Energy Consortium. The two worst habits are charging to 100%
        every night and regularly depleting to 0%.
      </P>

      <DataTable
        caption="Charging Habits and Their Impact on Long-Term Battery Health"
        headers={["Habit", "Impact on Battery", "Recommendation"]}
        accentCol={1}
        accentColor="#f43f5e"
        rows={[
          ["Charge to 100% daily (NMC)",       "High degradation stress",           "Charge to 80% for daily use"],
          ["Charge to 100% daily (LFP)",        "Low stress — generally acceptable", "OK for LFP; avoid for NMC"],
          ["Discharge to 0% regularly",         "Deep discharge cycle damage",        "Charge before reaching 15%"],
          ["DC fast charging every day",         "Elevated cell temperature + stress", "Use AC charging for daily top-up"],
          ["Charge immediately after long ride", "High temp + charge = stress",       "Wait 30 min before plugging in"],
          ["Scheduled overnight charging",      "Minimal stress — recommended",      "Set charge to complete at 6 AM"],
        ]}
      />

      <H3 id="fast-charging">3. Over-reliance on DC Fast Charging</H3>
      <P>
        DC fast charging pushes high current through cells rapidly, generating significant heat.
        Using a 50kW+ fast charger as your primary daily charger — instead of AC home charging —
        accelerates degradation by an estimated <Highlight color="#f43f5e">10–15%</Highlight> over
        five years compared to predominantly AC charging. Fast charging is excellent for road trips;
        it is not a substitute for overnight home charging.
      </P>

      <H3 id="monsoon">4. Monsoon Humidity and Water Ingress</H3>
      <P>
        India's monsoon season introduces a unique challenge that European battery research rarely
        addresses. High ambient humidity (90%+) combined with temperature cycling causes moisture
        to condense inside poorly-sealed battery enclosures, accelerating connector corrosion and
        degrading cell separators over time.
      </P>
      <InfoBox variant="warning" title="Check Your IP Rating">
        Look for a battery IP rating of <strong>IP67 or higher</strong> — this means the battery is
        sealed against temporary immersion up to 1 metre for 30 minutes. Scooters and budget EVs
        without this rating are more vulnerable in waterlogged conditions. If yours does not have
        IP67, avoid riding through deep puddles and inspect connectors annually.
      </InfoBox>

      <H3 id="soc-storage">5. Long-Term Storage at Incorrect State of Charge</H3>
      <P>
        If you are storing your EV for more than 30 days (e.g., leaving it at a relative's home
        during a long trip), the storage State of Charge matters enormously. Storing at 100% or
        below 20% both cause accelerated calendar ageing.
      </P>
      <BulletList
        color="#39ff14"
        items={[
          "Store long-term at 40–60% charge.",
          "Charge to 60% if the vehicle will be unused for 1–3 months.",
          "Set a reminder to check and top up to 50% if storage extends beyond 3 months.",
          "Keep the vehicle in a cool, shaded location — avoid sun-exposed outdoor storage.",
        ]}
      />

      <ArticleAd slot="9000000004" />

      <H2 id="10-year-plan">Your 10-Year Battery Health Plan</H2>

      {/* ── Infographic 2 ── */}
      <Infographic
        alt="Infographic timeline showing EV battery maintenance actions year by year from Year 1 to Year 10 in India"
        caption="Fig 2. A 10-year EV battery maintenance timeline for Indian owners — from purchase to decade milestone. Actions are grouped by frequency: daily habits, annual checks, and milestone inspections."
        designNote="Horizontal timeline from Year 0 to Year 10. Use a clean dark background matching EVSelect's theme. Above the timeline: recurring daily/monthly habits (icons for charging limit, parking in shade, cool before charge). On the timeline itself: Year 1 (BMS software update, first service), Year 3 (capacity check, connector inspection), Year 5 (official health report from dealer, warranty check), Year 7 (cell balancing service), Year 10 (full battery audit). Below timeline: expected capacity retention range (80–90% with good habits, 65–75% without). Use green and red to contrast good vs poor habit outcomes."
        accentColor="#39ff14"
        aspectRatio="16/6"
      />

      <DataTable
        caption="Year-by-Year Battery Maintenance Checklist for Indian EV Owners"
        headers={["Period", "Action", "Why It Matters"]}
        accentCol={0}
        accentColor="#39ff14"
        rows={[
          ["Daily",      "Charge to 80% (NMC) / 100% (LFP)",     "Reduces calendar ageing stress"],
          ["Daily",      "Park in shade, avoid 12–4 PM sun",      "Controls ambient battery temperature"],
          ["Monthly",    "Check tyre pressure",                   "Proper inflation reduces motor load and thermal stress"],
          ["Every 6 mo", "BMS software update via OTA or dealer", "Manufacturers improve thermal algorithms over time"],
          ["Year 1",     "Dealer battery health check",           "Establishes baseline capacity for comparison"],
          ["Year 2–3",   "Inspect charging port & cable seals",   "Prevents moisture ingress during monsoons"],
          ["Year 3–5",   "Official capacity report from brand",   "Confirms warranty eligibility if degradation exceeds threshold"],
          ["Year 5+",    "Cell balancing service if available",   "Equalises voltage across cells, recovers minor capacity"],
          ["Year 8–10",  "Full battery diagnostic audit",         "Informs decision on battery replacement vs vehicle upgrade"],
        ]}
      />

      <H2 id="warranty">Understanding Your Battery Warranty</H2>
      <P>
        India's leading EV brands now offer 8-year battery warranties as standard, but the details
        vary significantly. Most warranties guarantee that the battery will not fall below{" "}
        <Highlight color="#39ff14">70–80% of original capacity</Highlight> within the warranty period.
        However, degradation caused by demonstrably poor charging habits, flood damage, or
        unauthorised modifications may void coverage.
      </P>
      <P>
        Keep a record of your charging sessions via the brand's app — this creates a documented
        history of responsible use that can support a warranty claim if needed.
      </P>

      <InfoBox variant="success" title="The Most Important Single Habit">
        If you implement just one recommendation from this article, make it this: set a charge
        limit of 80% in your vehicle's app for everyday use. On NMC batteries, this single change
        can reduce calendar degradation by an estimated 25–30% over five years — adding years to
        your pack's effective life.
      </InfoBox>

      <Sources
        sources={[
          { label: "IIT Madras Energy and Environment Policy Group — EV Battery Research", url: "https://eep.iitm.ac.in" },
          { label: "NITI Aayog — India EV Policy and Battery Standards Report", url: "https://www.niti.gov.in" },
          { label: "Battery University — Lithium-Ion Degradation Mechanisms", url: "https://batteryuniversity.com" },
          { label: "SAE International — Thermal Management of EV Batteries in Tropical Climates", url: "https://www.sae.org" },
          { label: "Tata Motors — Nexon EV Battery Warranty Terms & Conditions", url: "https://www.tatamotors.com" },
          { label: "Electrek — How Temperature Affects EV Battery Life", url: "https://electrek.co" },
          { label: "Bureau of Energy Efficiency India — EV Battery Performance Standards", url: "https://beeindia.gov.in" },
        ]}
      />
      <Disclaimer />
    </BlogLayout>
  );
}
