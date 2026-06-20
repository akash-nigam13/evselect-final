import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { itemListSchema, faqPageSchema } from "@/lib/seo";
import { getById, vehiclePath } from "@/lib/ev-data";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which EV car is best under ₹15 lakh in India?",
    a: "For all-round value the Tata Nexon EV (from ~₹12.49 lakh) is the benchmark, the Tata Tiago EV (~₹6.99 lakh) is the best budget pick, and the Tata Punch EV (~₹9.69 lakh) is the safest small SUV. The best choice depends on whether you want a city car, a hatchback or an SUV.",
  },
  {
    q: "Which brand makes the cheapest electric car in India?",
    a: "Tata and MG make the most affordable electric cars in India. The Tata Tiago EV starts around ₹6.99 lakh and the MG Comet EV around ₹7.5 lakh — and both drop further upfront on battery-rental (BaaS) plans.",
  },
  {
    q: "What is the cheapest electric car under ₹15 lakh in India in 2026?",
    a: "The Tata Tiago EV (from about ₹6.99 lakh) and the MG Comet EV (from about ₹7.5 lakh) are the most affordable electric cars in India, and both get even cheaper upfront under battery-rental (BaaS) plans.",
  },
  {
    q: "Which electric car under ₹15 lakh has the longest range?",
    a: "On claimed figures, the MG Windsor EV (up to ~449 km) and longer-range Tata Nexon EV variants lead, though real-world range is typically 20–30 percent lower.",
  },
  {
    q: "Which is the best electric SUV under ₹15 lakh in India?",
    a: "Among electric SUVs under ₹15 lakh, the Tata Punch EV (from ~₹9.69 lakh) is the safest value pick, the Mahindra XUV 3XO EV (~₹13.9 lakh) is the most feature-loaded, and the MG Windsor EV (from ~₹14 lakh, or ~₹9.99 lakh on BaaS) offers the most rear-seat space.",
  },
  {
    q: "What is the on-road price of an electric car under ₹15 lakh?",
    a: "On-road price adds registration, road tax and insurance to the ex-showroom figure. But EVs attract just 5% GST, and many states waive road tax and registration, so the on-road price of a sub-₹15-lakh EV is often only marginally above ex-showroom — sometimes lower than a petrol equivalent once subsidies apply.",
  },
  {
    q: "Are there upcoming electric cars under ₹15 lakh in 2026?",
    a: "Yes. More affordable EVs are arriving through 2026 — newer Tata, MG and Mahindra variants and compact entrants from other brands — though some launch just above ₹15 lakh. We update this list as new models go on sale.",
  },
  {
    q: "Is the Maruti e Vitara under ₹15 lakh?",
    a: "No. Maruti's first EV starts at about ₹15.99 lakh, just above this bracket — so it is a step up rather than a sub-₹15-lakh option.",
  },
  {
    q: "Should I choose a BaaS (battery rental) plan?",
    a: "It lowers the upfront price but adds a per-km battery cost and means you do not own the battery. It can suit high-mileage city drivers, but do the full math before committing.",
  },
];

const listIds = [
  "mg-comet-ev",
  "tata-tiago-ev-long-range-24-kwh",
  "citroen-ec3",
  "tata-punch-ev-long-range-40-kwh",
  "mahindra-xuv-3xo-ev-39-4-kwh",
  "mg-windsor-ev-38-kwh",
  "tata-nexon-ev-long-range-45-kwh",
];
const listItems = listIds
  .map((id) => {
    const e = getById(id);
    return e ? { name: e.name, path: vehiclePath(e) } : null;
  })
  .filter(Boolean) as { name: string; path: string }[];

export const metadata: Metadata = {
  title: "7 Best Electric Cars Under ₹15 Lakh in India (2026)",
  description:
    "Looking for an electric car under ₹15 lakh in India? Compare the 7 best — Tata Tiago EV, Punch EV, Nexon EV, MG Comet & Windsor, Citroen eC3 and Mahindra XUV 3XO EV — on price, range, battery and value for 2026.",
  alternates: altsFor("/blog/best-electric-cars-under-15-lakh-india", "en"),
  openGraph: {
    title: "7 Best Electric Cars Under ₹15 Lakh in India (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="best-electric-cars-under-15-lakh-india">
      <p>
        ₹15 lakh is the sweet spot of India's electric-car market. It is below it that the choice has
        exploded — you can now pick from a genuine city runabout, a practical hatchback, or a
        well-equipped compact SUV, all running on electricity. This guide rounds up the best electric
        cars under ₹15 lakh in India in 2026, with honest notes on where each one fits. Prices quoted
        are indicative ex-showroom starting figures and shift often with discounts and new variants,
        so always confirm the on-road number for your city before booking. If you are completely new
        to electric, start with our{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV buying checklist</Link> and come back
        — it puts range, charging and cost in the right order.
      </p>

      <h2>How to read this list</h2>
      <p>
        Two things matter more than the headline price. The first is <strong>real-world range</strong>,
        which is typically 20–30 percent below the ARAI or MIDC figure once you factor in AC, traffic
        and highway speeds — we explain why in our guide to{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>. The
        second is whether you can <strong>charge at home</strong>; an EV is only as convenient as your
        parking. With those two filters in mind, here are the cars worth your shortlist, smallest and
        cheapest first.
      </p>

      <h2>1. MG Comet EV — the city-only specialist</h2>
      <p>
        Starting around ₹7.5 lakh (and lower still on MG's battery-rental plan), the Comet is India's
        most affordable passenger EV. Its 17.3 kWh battery delivers a claimed ~230 km, which in city
        use realistically means around 150–170 km — plenty for a second car that never leaves town.
        It is tiny, easy to park and cheap to run, but it is strictly an urban tool: cramped for four
        adults and out of its depth on highways. Buy it if your driving is short, daily and
        city-bound; skip it if you ever need a family road-trip car.
      </p>

      <h2>2. Tata Tiago EV — the value hatchback</h2>
      <p>
        The 2026 Tiago EV starts at roughly ₹6.99 lakh ex-showroom, making it arguably the best-value
        electric car in the country. You get two battery options (19.2 kWh and 24 kWh) with a claimed
        range of about 226–285 km, a proper five-door hatchback body, and Tata's wide service and
        charging network behind it. Real-world range on the bigger pack lands near 200 km, which suits
        a primary city car with the occasional intercity hop. It is the most sensible "first EV" pick
        for a budget-conscious family.
      </p>

      <h2>3. Citroen eC3 — space and a relaxed ride</h2>
      <p>
        Priced from about ₹11.6 lakh, the eC3 pairs a 29.2 kWh battery with a claimed ~320 km range
        and a notably roomy, comfortable cabin for its class. It trades flashy features for
        practicality and a soft ride that swallows India's broken roads well. It is a strong choice if
        rear-seat space and comfort matter more to you than a long features list or quick acceleration.
      </p>

      <h2>4. Tata Punch EV — the safety-first micro-SUV</h2>
      <p>
        The facelifted Punch EV starts near ₹9.69 lakh and tops out around ₹12.6 lakh, sitting
        comfortably under ₹15 lakh across the range. It offers a higher seating position, a 5-star
        crash rating, and a long-range pack good for a claimed ~315–365 km (roughly 250 km real-world).
        For many buyers this is the value champion of the SUV-style EVs: affordable, safe and practical
        enough for a small family's everyday and weekend use.
      </p>

      <h2>5. Mahindra XUV 3XO EV — the feature-loaded compact SUV</h2>
      <p>
        Priced roughly between ₹13.9 lakh and ₹15 lakh, the XUV 3XO EV brings a 39.4 kWh battery, a
        claimed ~351 km range and a generous kit of screens, ADAS and creature comforts. It is the
        most "loaded" option that still flirts with the ₹15 lakh ceiling, and a good fit if you want
        SUV presence and technology without crossing into the ₹18–20 lakh bracket.
      </p>

      <h2>6. MG Windsor EV — rear-seat comfort with BaaS pricing</h2>
      <p>
        The Windsor's sticker price starts around ₹14 lakh, but its real headline is the
        Battery-as-a-Service (BaaS) option that drops the upfront price to roughly ₹9.99 lakh while you
        pay a per-km battery rental. With a 38 kWh pack and a claimed range up to ~449 km, plus
        lounge-like rear seats, it targets buyers who value comfort and a lower entry price — provided
        you are comfortable with a subscription model rather than owning the battery outright.
      </p>

      <h2>7. Tata Nexon EV — the all-rounder (entry variants)</h2>
      <p>
        The Nexon EV is India's best-selling electric car, and while its top trims climb past ₹17 lakh,
        the entry variants start at about ₹12.49 lakh — under our cap. Even the base car gives you a
        proven platform, strong safety, and a usable real-world range, while the long-range version
        claims up to 489 km if you later stretch the budget. If you want one EV that does everything
        reasonably well, the Nexon is the safe default.
      </p>

      <h2>At a glance: the under-₹15-lakh EVs</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>From (ex-showroom)</th>
            <th>Battery</th>
            <th>Claimed range</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MG Comet EV</td>
            <td>~₹7.5 lakh</td>
            <td>17.3 kWh</td>
            <td>~230 km</td>
            <td>City second car</td>
          </tr>
          <tr>
            <td>Tata Tiago EV</td>
            <td>~₹6.99 lakh</td>
            <td>19.2 / 24 kWh</td>
            <td>~226–285 km</td>
            <td>Best-value hatchback</td>
          </tr>
          <tr>
            <td>Citroen eC3</td>
            <td>~₹11.6 lakh</td>
            <td>29.2 kWh</td>
            <td>~320 km</td>
            <td>Space &amp; comfort</td>
          </tr>
          <tr>
            <td>Tata Punch EV</td>
            <td>~₹9.69 lakh</td>
            <td>up to ~35 kWh</td>
            <td>~315–365 km</td>
            <td>Safe micro-SUV</td>
          </tr>
          <tr>
            <td>Mahindra XUV 3XO EV</td>
            <td>~₹13.9 lakh</td>
            <td>39.4 kWh</td>
            <td>~351 km</td>
            <td>Feature-loaded SUV</td>
          </tr>
          <tr>
            <td>MG Windsor EV</td>
            <td>~₹14 lakh (BaaS ~₹9.99 lakh)</td>
            <td>38 kWh</td>
            <td>up to ~449 km</td>
            <td>Rear-seat comfort</td>
          </tr>
          <tr>
            <td>Tata Nexon EV</td>
            <td>~₹12.49 lakh</td>
            <td>30–46.3 kWh</td>
            <td>up to ~489 km</td>
            <td>Do-it-all all-rounder</td>
          </tr>
        </tbody>
      </table>
      <p>
        See the full, up-to-date list with variants and specs in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and put any two cars side by
        side with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>Best electric SUV under ₹15 lakh</h2>
      <p>
        If you specifically want an electric SUV under ₹15 lakh, three stand out. The{" "}
        <strong>Tata Punch EV</strong> (from ~₹9.69 lakh) is the safest value pick — a 5-star micro-SUV
        with a usable ~250 km real-world range. The <strong>Mahindra XUV 3XO EV</strong> (~₹13.9 lakh)
        is the most feature-loaded, with a 39.4 kWh pack, ADAS and big screens. And the{" "}
        <strong>MG Windsor EV</strong> (from ~₹14 lakh, or ~₹9.99 lakh on BaaS) gives the most
        rear-seat space and range of the three. For SUV buyers, the Punch EV is the value champion and
        the XUV 3XO EV the one to pick if you want the longest features list under the ₹15 lakh ceiling.
      </p>

      <h2>Ex-showroom vs on-road price: what you'll actually pay</h2>
      <p>
        Every price in this list is <strong>ex-showroom</strong> — the on-road price adds
        registration, road tax and insurance on top. The good news for EV buyers: electric cars attract
        just 5% GST, and many states <strong>waive road tax and registration</strong> entirely, so the
        on-road price of a sub-₹15-lakh EV is often only marginally above ex-showroom (and sometimes
        below a comparable petrol car once subsidies count). The exact on-road figure depends on your
        state — check the{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">state-by-state road-tax and subsidy guide</Link>{" "}
        and estimate your all-in cost with the{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>.
      </p>

      <h2>Upcoming electric cars under ₹15 lakh (2026)</h2>
      <p>
        The under-₹15-lakh space is getting busier through 2026. Expect more affordable variants and
        facelifts of the cars above, plus newer compact EVs from Tata, MG, Hyundai and others — though
        some debut just above the ₹15 lakh mark before discounts and base trims bring them in. A few,
        like the Maruti e Vitara, currently start just over the line (~₹15.99 lakh). We refresh this
        guide as each new model goes on sale, so bookmark it — and browse everything live in the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>.
      </p>

      <h2>The real cost: cheaper than the sticker suggests</h2>
      <p>
        The purchase price is only half the story. Charged at home, these EVs cost roughly ₹1–1.5 per
        kilometre against ₹6–9 for petrol, which can save a regular commuter tens of thousands of
        rupees a year. On top of that, EVs attract just 5 percent GST and several states add road-tax
        waivers and registration discounts — sometimes worth lakhs on the on-road price. To see how the
        sticker, charging, servicing and resale all add up, read our guide to{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">what an electric car really costs to own in India</Link>. Check what
        applies to you in our <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">state-by-state
        subsidies and road-tax guide</Link>, then run your own numbers through the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link> to
        see your true monthly saving. For the complete five-year picture including resale, our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">5-year cost of ownership comparison</Link>{" "}
        does the math.
      </p>

      <h2>So which one should you buy?</h2>
      <p>
        Match the car to your use, not the brochure. If you want the lowest possible running cost for a
        city-only second car, the MG Comet makes sense. For the best all-round value, it is hard to
        beat the Tata Tiago EV or, if you want SUV practicality and safety, the Punch EV. If you can
        stretch toward ₹15 lakh and want features and presence, the Mahindra XUV 3XO EV and MG Windsor
        (especially on BaaS) deliver the most car. And if you simply want the proven, do-everything
        default, the Nexon EV remains the segment's benchmark. Whichever you lean toward, sort out home
        charging first — that single decision shapes how good EV ownership feels.
      </p>

      <h2>More on electric cars under ₹15 lakh</h2>
      <ul>
        <li>
          <Link href="/blog/upcoming-electric-cars-under-15-lakh-india">
            Upcoming electric cars under ₹15 lakh (2026)
          </Link>{" "}
          — what&apos;s launching next at this price.
        </li>
        <li>
          <Link href="/blog/electric-cars-under-15-lakh-on-road-price-india">
            On-road price of EVs under ₹15 lakh
          </Link>{" "}
          — ex-showroom vs the real all-in number.
        </li>
        <li>
          <Link href="/blog/electric-cars-with-sunroof-under-15-lakh-india">
            Electric cars with a sunroof under ₹15 lakh
          </Link>{" "}
          — which EVs actually offer one.
        </li>
        <li>
          <Link href="/blog/7-seater-electric-cars-under-15-lakh-india">
            7-seater electric cars under ₹15 lakh
          </Link>{" "}
          — the honest answer, and the alternatives.
        </li>
      </ul>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The under-₹15-lakh segment has never offered more genuine choice. Decide what you actually need
        — city runabout, family hatchback or compact SUV — confirm you can charge at home, and use the{" "}
        <Link href="/catalog/electric-cars">catalog</Link> and{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">cost calculator</Link> to lock in the
        right pick for your budget.
      </p>

      <JsonLd data={[itemListSchema(listItems), faqPageSchema(faqs)]} />
    </ArticleShell>
  );
}
