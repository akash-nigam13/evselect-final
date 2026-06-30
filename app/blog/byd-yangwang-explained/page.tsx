import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is BYD Yangwang?",
    a: "Yangwang (仰望) is BYD's ultra-luxury sub-brand, launched in 2023. It sits far above BYD's mainstream cars and builds technical flagships like the U8 SUV, U7 sedan and U9 super-coupe, most of them running on the e4 quad-motor platform with one motor per wheel.",
  },
  {
    q: "Is every Yangwang a pure electric car?",
    a: "No. The U7 and U9 are pure-electric (BEV). The U8, however, is a plug-in hybrid off-roader with a petrol range-extender — it has roughly 180 km of electric-only range plus an engine, so it is not a pure EV.",
  },
  {
    q: "What can the e4 platform actually do?",
    a: "Because each wheel has its own motor under independent control, an e4 car can perform a tank-turn (rotating on the spot), keep driving steadily on a blown tyre, rotate about its own axis and, in the U8's case, even float and paddle for a short time.",
  },
  {
    q: "Is BYD Yangwang available in India?",
    a: "Not yet. As of mid-2026 Yangwang is not officially launched or confirmed for India. The U8 was shown at the Bharat Mobility Global Expo 2025 as a display, but there is no launch commitment, and any India price you see quoted is speculative.",
  },
];

export const metadata: Metadata = {
  title: "BYD Yangwang: The Ultra-Luxury EV Brand Explained (2026)",
  description:
    "What is BYD Yangwang? A clear 2026 explainer of BYD's ultra-luxury EV marque — the U7 sedan, U9 super-coupe and U8 SUV, the e4 quad-motor platform, tank-turns and whether it is coming to India.",
  alternates: altsFor("/blog/byd-yangwang-explained", "en"),
  openGraph: {
    title: "BYD Yangwang: The Ultra-Luxury EV Brand Explained (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="byd-yangwang-explained">
      <p>
        Most people know BYD in India for sensible, well-priced electric cars. Yangwang is the
        opposite end of that story. It is BYD's ultra-luxury marque, sitting several tiers above the{" "}
        <Link href="/brand/byd">BYD's India lineup</Link> you can actually buy today, and it exists to
        prove a point: that an electric car can out-engineer almost anything on the road. This
        explainer walks through what Yangwang is, the technology that makes it different, the three
        cars in its 2026 range, and where it stands for Indian buyers. One thing to settle up front —
        Yangwang is <strong>not launched or confirmed in India</strong>, so treat any India pricing as
        speculation; only the China prices below are official.
      </p>

      <h2>Where Yangwang fits in the BYD universe</h2>
      <p>
        BYD launched Yangwang (the name 仰望 roughly means &ldquo;to look up&rdquo;) in 2023 with a
        single, statement-making model: the U8 off-road SUV. The idea was to create a halo brand the
        way Toyota has Lexus or Hyundai has Genesis, but with the engineering turned up far higher. Each
        Yangwang is built to showcase a technology BYD wants the world to notice, then that technology
        gradually filters down to cheaper cars. If you have followed{" "}
        <Link href="/blog/byd-electric-cars">BYD electric cars in India</Link>, you already know the
        company likes to lead on batteries and motors — Yangwang is where it does so without a price
        ceiling.
      </p>

      <h2>The e4 platform: four motors, one very clever brain</h2>
      <p>
        The heart of Yangwang is the <strong>e4 &ldquo;easy four-wheel&rdquo; platform</strong>. Instead
        of one or two motors driving the wheels through a shared axle, e4 gives each of the four wheels
        its own independently controlled electric motor. That sounds like a small detail; in practice it
        unlocks tricks that no conventional car can match.
      </p>
      <ul>
        <li>
          <strong>Tank-turns:</strong> by spinning the wheels on one side forward and the other side
          backward, the car can rotate on the spot, like a tank.
        </li>
        <li>
          <strong>Axis rotation:</strong> precise per-wheel control lets the car pivot around its own
          centre rather than swinging through a wide arc.
        </li>
        <li>
          <strong>Flat-tyre control:</strong> if a tyre blows at speed, the system instantly re-balances
          torque across the remaining wheels so the car stays stable instead of pulling violently to one
          side.
        </li>
        <li>
          <strong>Floating:</strong> the U8 can even seal itself and paddle across water briefly using
          its wheels, an emergency party trick BYD has demonstrated publicly.
        </li>
      </ul>
      <p>
        For the 2026 cars, BYD pairs e4 with its <strong>second-generation Blade Battery</strong> and a
        new flash-charging system that can take a pack from low to roughly 70 percent in about five
        minutes. That combination — quad motors plus very fast charging — is what gives the range a
        hypercar feel without a hypercar&rsquo;s charging anxiety.
      </p>

      <h2>The 2026 Yangwang line-up</h2>
      <p>
        Three cars make up the current range, and it is important to keep them straight because they are
        very different animals.
      </p>

      <h3>Yangwang U7 — the pure-electric luxury sedan</h3>
      <p>
        The U7 is a full-size electric saloon aimed at limousine territory. It pairs the quad-motor e4
        setup with around 1,287 bhp, a 0&ndash;100 km/h time near 2.9 seconds, and — most striking — a
        claimed range of up to 1,006 km on China&rsquo;s CLTC cycle thanks to a large second-generation
        Blade Battery. In China it sells from roughly &yen;658,000 to &yen;888,000. It is the most
        usable Yangwang: ferociously quick, but still a comfortable car you could be driven in.
      </p>

      <h3>Yangwang U9 — the pure-electric super-coupe</h3>
      <p>
        The <Link href="/byd/yangwang-u9">Yangwang U9</Link> is the showpiece: a two-seat electric
        super-coupe with around 1,287 bhp, a 0&ndash;100 km/h sprint of just 2.36 seconds, and an active
        hydraulic suspension that can make the car physically jump and dance. Its battery is smaller
        (around 450 km CLTC) because this is a track-and-spectacle car, not a tourer. China pricing
        started around &yen;1.68 million and has risen toward &yen;1.8 million. There is also a hardcore
        U9 Xtreme version that we cover separately.
      </p>

      <h3>Yangwang U8 — the luxury off-roader (and not a pure EV)</h3>
      <p>
        The U8 is the model that started it all, but here is the catch worth repeating:{" "}
        <strong>the U8 is not a pure EV</strong>. It is a plug-in hybrid (a DM-p / range-extender setup)
        with around 1,180 hp combined, roughly 180 km of electric-only range, and a petrol engine acting
        as a generator for long distances. It sells in China for about &yen;1.1 million. If you want a
        Yangwang that runs purely on electrons, the U7 or <Link href="/byd/yangwang-u7">Yangwang U7</Link>{" "}
        sedan and the U9 are your two choices — the U8 keeps a tank.
      </p>

      <h2>At a glance: the three Yangwang models</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Type</th>
            <th>Power</th>
            <th>0&ndash;100 km/h</th>
            <th>Range (CLTC)</th>
            <th>China price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>U7</td>
            <td>Pure-EV luxury sedan</td>
            <td>~1,287 bhp</td>
            <td>~2.9 s</td>
            <td>up to 1,006 km</td>
            <td>&yen;658k&ndash;888k</td>
          </tr>
          <tr>
            <td>U9</td>
            <td>Pure-EV super-coupe</td>
            <td>~1,287 bhp</td>
            <td>2.36 s</td>
            <td>~450 km</td>
            <td>&yen;1.68M&ndash;1.8M</td>
          </tr>
          <tr>
            <td>U8</td>
            <td>PHEV off-road SUV (not pure EV)</td>
            <td>~1,180 hp</td>
            <td>&mdash;</td>
            <td>~180 km electric + petrol</td>
            <td>~&yen;1.1M</td>
          </tr>
        </tbody>
      </table>

      <h2>Is Yangwang coming to India?</h2>
      <p>
        Short answer: not officially, and not soon. As of mid-2026 there is no confirmed Yangwang launch
        for India. The U8 appeared at the Bharat Mobility Global Expo 2025, but purely as a display piece
        — no pricing, no booking, no launch promise. Any India figures you have seen (numbers like
        &#8377;2.5&ndash;3.5 crore) are <strong>speculative estimates from Indian media</strong>, not
        official BYD prices. We dig into that reality in our dedicated piece on the{" "}
        <Link href="/blog/byd-yangwang-india-launch-price">India launch and expected price</Link>. If
        you came here because you want the engineering story, read our deep dive on the{" "}
        <Link href="/blog/byd-yangwang-u9-electric-hypercar">U9 electric hypercar</Link> and the
        record-breaking{" "}
        <Link href="/blog/yangwang-u9-xtreme-496kmph-record">U9 Xtreme 496 km/h run</Link>.
      </p>

      <h2>What you can actually buy from BYD today</h2>
      <p>
        Yangwang is aspirational; BYD&rsquo;s mainstream EVs are on Indian roads now. If the idea of a
        BYD has you interested, browse the on-sale models on the{" "}
        <Link href="/brand/byd">BYD's India lineup</Link> page, compare them against rivals with our{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>, and see the full range in the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>. Yangwang shows you where BYD is
        headed; today&rsquo;s line-up shows you what that engineering already delivers at sane prices.
      </p>

      <h2>Frequently asked questions about BYD Yangwang</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
