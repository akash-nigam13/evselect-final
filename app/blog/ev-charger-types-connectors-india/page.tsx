import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs = [
  {
    q: "What are the main EV charger types in India?",
    a: "There are two everyday connectors for cars in India: Type 2 for AC charging (home wall-boxes and slow public points) and CCS2 for DC fast charging (highway and city fast chargers). Older standards — CHAdeMO and GB/T — survive mainly on legacy vehicles and buses, while two-wheelers use a regular socket or the new LECCS connector.",
  },
  {
    q: "Is Type 2 the same as CCS2?",
    a: "They share the same top half. CCS2 is a Type 2 socket with two extra DC pins added below it, so a single inlet on your car handles both AC (Type 2) and DC fast charging (CCS2). That is why almost every new EV in India has just one charging port.",
  },
  {
    q: "Which connector does a Tata Nexon EV or MG Windsor use?",
    a: "Like virtually all modern passenger EVs sold in India — Tata, MG, Mahindra, Hyundai, Kia, BYD, BMW and Mercedes included — they use Type 2 for AC and CCS2 for DC fast charging through a single combined port.",
  },
  {
    q: "Why does my EV charge slower than the charger's rating?",
    a: "Charging speed is capped by the lower of two numbers: the charger's output and your car's maximum acceptance rate. A car that accepts only 7.4 kW on AC will not charge faster on a 22 kW AC point, and a 60 kW DC car will not pull 150 kW from a faster charger.",
  },
  {
    q: "What connector do electric scooters use in India?",
    a: "Most electric scooters still charge from an ordinary 5A or 15A wall socket using the portable charger that ships with them. A new homegrown standard called LECCS (Type 7) is rolling out to give two- and three-wheelers a common AC/DC fast-charging plug.",
  },
];

export const metadata: Metadata = {
  title: "EV Charger Types & Connectors in India 2026: Type 2, CCS2 Explained",
  description:
    "A simple 2026 guide to EV charger types and connectors in India — AC vs DC charging, Type 2, CCS2, CHAdeMO, GB/T and the new LECCS standard for scooters, plus which plug your EV actually uses.",
  alternates: altsFor("/blog/ev-charger-types-connectors-india", "en"),
  openGraph: {
    title: "EV Charger Types & Connectors in India 2026: Type 2, CCS2 Explained",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-charger-types-connectors-india">
      <p>
        The first time you stand at a public charging station, the jargon can feel designed to
        confuse — AC, DC, Type 2, CCS2, kilowatts, "guns" of different shapes. The good news is that
        for almost everyone buying an EV in India in 2026, the picture has settled into something
        genuinely simple. The whole market has converged on two connectors for cars, with a handful
        of legacy plugs you can mostly ignore and a new homegrown standard arriving for scooters.
        This guide explains every EV charger type and connector you will meet in India, what each one
        does, and how to know which plug your own vehicle uses.
      </p>

      <h2>AC vs DC charging: the difference that matters</h2>
      <p>
        Before the connectors, understand the split they sit on. Your EV's battery stores direct
        current (DC), but the grid supplies alternating current (AC). Something has to convert AC to
        DC, and where that conversion happens decides how fast you charge. With AC charging, the
        conversion is done by a small onboard charger built into the car, which keeps power modest —
        typically 3.3 to 11 kW for a private car. With DC fast charging, a large external charger does
        the conversion and pushes DC straight into the battery, bypassing the onboard unit and
        reaching 30, 60, 120 kW and beyond.
      </p>
      <p>
        In practice that means AC is for where you park — home, office, a mall — where slow overnight
        or all-day charging is perfect. DC is for where you stop briefly — a highway break or a quick
        city top-up — where speed is everything. Our guide to{" "}
        <Link href="/blog/home-ev-charging-cost-india">home EV charging costs and setup</Link> covers
        the AC side in depth, while the{" "}
        <Link href="/blog/ev-charging-infrastructure-india">public charging infrastructure guide</Link>{" "}
        maps out the DC network for road trips.
      </p>

      <h2>Type 2: the AC connector your EV uses every day</h2>
      <p>
        Type 2, sometimes called the Mennekes connector, is the standard AC plug for cars in India and
        across Europe. It is a seven-pin, round-ish connector and it is what your home wall-box and
        most slow public AC points use. On a single-phase home connection it carries up to about
        7.4 kW; on a three-phase supply it can reach 22 kW at suitable public AC chargers. Because the
        car's onboard charger sets the ceiling, a Type 2 cable is really just a safe, standardised way
        of feeding household-style power to the vehicle.
      </p>
      <p>
        If you are choosing between models, it pays to check each car's onboard AC charger rating —
        you can <Link href="/compare-electric-vehicles">compare two EVs side by side</Link> to see whether
        a car accepts 3.3, 7.4 or 11 kW on AC, because that figure, not your wall-box, decides your
        overnight charging speed.
      </p>

      <h2>CCS2: India's DC fast-charging standard</h2>
      <p>
        CCS2 (Combined Charging System 2) is the connector you will use at fast chargers, and it is
        cleverly designed. It takes the Type 2 socket and adds two extra DC pins directly below it, so
        a single inlet on the car handles both AC (through the Type 2 portion) and high-power DC
        (through the full CCS2 connector). That is why modern EVs have just one charging port rather
        than two. India has formally aligned with global norms by requiring CCS2 for DC and Type 2 for
        AC on four-wheelers, which is why nearly every public DC charger on the network now wears a
        CCS2 gun.
      </p>
      <p>
        The list of cars that use CCS2 is, effectively, the list of cars on sale: the Tata Nexon EV,
        MG Windsor and ZS EV, Mahindra and Hyundai EVs, the Kia EV6, BMW i4, BYD Seal and Mercedes EQE
        all fast-charge over CCS2. When you are shortlisting, you can browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> to check each model's DC fast-charging
        support and peak charging speed.
      </p>

      <h2>The legacy plugs: CHAdeMO, GB/T and the Bharat standards</h2>
      <p>
        A few older connectors still exist, but a 2026 car buyer can safely treat them as history.
        CHAdeMO, the Japanese DC standard once used by early Nissan Leafs, has largely vanished as the
        market converged on CCS2. GB/T, the Chinese standard, formed the basis of India's early Bharat
        DC-001 specification introduced under FAME-I around 2017; today GB/T survives mainly on electric
        buses (many BYD and Olectra fleets) and a few early fleet cars rather than new passenger models.
        The Bharat AC-001 and Bharat DC-001 standards themselves were low-power, FAME-era specifications
        that have since been superseded by Type 2 and CCS2 for cars.
      </p>
      <p>
        The takeaway is reassuring: if you are buying a passenger EV in India today, you do not need to
        think about CHAdeMO, GB/T or the Bharat standards at all. Your car uses Type 2 and CCS2, and the
        network is built around them.
      </p>

      <h2>Charging a scooter or bike: the socket and the new LECCS plug</h2>
      <p>
        Two-wheelers play by different rules. Most electric scooters and bikes in India still charge
        from an ordinary 5A or 15A household socket using the portable charger supplied in the box —
        no special connector needed. The challenge has been that, unlike cars, light EVs never had a
        common fast-charging standard. That is now changing with LECCS (the Light Electric Combined
        Charging System), also called the Type 7 connector, approved by the Bureau of Indian Standards
        in late 2023 and developed with NITI Aayog, ARAI and industry players including Ather.
      </p>
      <p>
        LECCS is notable as the world's first combined AC/DC connector built specifically for light
        vehicles — scooters, bikes and three-wheelers. Adoption is growing quickly, with several
        thousand public Type 7 fast chargers already live and makers such as Ather and Hero starting to
        integrate it. For most owners, though, the home socket remains the everyday reality, much as it
        is for cars charging overnight on AC.
      </p>

      <h2>How fast will it actually charge?</h2>
      <p>
        Here is the rule that cuts through every spec sheet: your real charging speed is the lower of
        two numbers — the charger's output and your car's maximum acceptance rate. A car that accepts
        only 7.4 kW on AC will charge at 7.4 kW even on a 22 kW point, and a car rated for 60 kW DC will
        not pull more from a 150 kW charger. On top of that, DC charging is fastest in the lower part of
        the battery and deliberately slows above roughly 80% to protect the cells, which is why fast
        chargers are usually quoted as a 10–80% time of around 20 to 60 minutes rather than 0–100%.
      </p>
      <table>
        <thead>
          <tr>
            <th>Connector</th>
            <th>Current</th>
            <th>Typical power</th>
            <th>Used by / for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type 2</td>
            <td>AC</td>
            <td>3.3–22 kW</td>
            <td>Home wall-boxes, public AC points (all modern cars)</td>
          </tr>
          <tr>
            <td>CCS2</td>
            <td>DC</td>
            <td>30–150+ kW</td>
            <td>Public DC fast charging (all modern cars)</td>
          </tr>
          <tr>
            <td>CHAdeMO</td>
            <td>DC</td>
            <td>Up to ~50 kW</td>
            <td>Legacy only (early Nissan Leaf)</td>
          </tr>
          <tr>
            <td>GB/T</td>
            <td>AC/DC</td>
            <td>Varies</td>
            <td>Electric buses, early fleet vehicles</td>
          </tr>
          <tr>
            <td>LECCS (Type 7)</td>
            <td>AC/DC</td>
            <td>~3–12 kW DC</td>
            <td>Scooters, bikes, three-wheelers</td>
          </tr>
        </tbody>
      </table>
      <p>
        To estimate how a given charger power translates into kilometres for your own use, the{" "}
        <Link href="/ev-calculators">EV calculators</Link> let you play with battery size and charging
        rate, and it helps to understand how the pack itself behaves — our primer on{" "}
        <Link href="/about-ev-batteries">EV batteries</Link> explains why charging tapers near the top.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <p>
        For the vast majority of buyers, the connector decision is already made for you: a new car in
        India means Type 2 for AC and CCS2 for DC, full stop. Knowing what sits behind those names just
        makes you a calmer, faster charger at any station — you will recognise the right gun, understand
        why speeds vary, and stop worrying about plugs you will never use. When you are ready to pick a
        model, browse the <Link href="/catalog/electric-cars">electric car catalog</Link> or put two
        contenders head to head with the{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
