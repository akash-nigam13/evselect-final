import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "How powerful is the BYD Yangwang U9?",
    a: "The standard U9 uses four electric motors rated at 240 kW each — a combined 960 kW, or roughly 1,287 bhp. That power, split one motor per wheel through the e4 platform, is what lets it hit 100 km/h in just 2.36 seconds.",
  },
  {
    q: "Can the Yangwang U9 really jump?",
    a: "Yes. Its DiSus-X active hydraulic suspension can push the body up forcefully enough to make the car leap clear of the ground — BYD has demonstrated a jump of more than six metres in length. The same system lets it 'dance', sway and keep driving on three wheels.",
  },
  {
    q: "What is the range of the Yangwang U9?",
    a: "The U9 carries an 80 kWh Blade battery for a claimed range of about 450 km on China's CLTC cycle. It is deliberately smaller than the U7 sedan's pack because the U9 is a performance super-coupe, not a long-distance tourer.",
  },
  {
    q: "How much does the Yangwang U9 cost?",
    a: "In China the U9 sells for around ¥1.8 million, which is roughly ₹1.5 crore at prevailing rates. It is not officially sold in India, and any India price would be speculative and considerably higher due to import duties.",
  },
];

export const metadata: Metadata = {
  title: "BYD Yangwang U9: The 1,287 bhp Electric Hypercar That Jumps",
  description:
    "The BYD Yangwang U9 is a ~1,287 bhp pure-electric super-coupe that hits 100 km/h in 2.36s and can literally jump on its suspension. Specs, the e4 quad-motor platform and the tech behind it.",
  alternates: altsFor("/blog/byd-yangwang-u9-electric-hypercar", "en"),
  openGraph: {
    title: "BYD Yangwang U9: The 1,287 bhp Electric Hypercar That Jumps",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="byd-yangwang-u9-electric-hypercar">
      <p>
        Every now and then a car comes along that makes you rethink what electric power can do. The{" "}
        <Link href="/byd/yangwang-u9">Yangwang U9</Link> is one of them — a pure-electric super-coupe
        from the top of <Link href="/brand/byd">BYD's India lineup</Link> aspirations that produces about
        1,287 bhp, reaches 100 km/h in 2.36 seconds, and can physically jump into the air on its own
        suspension. Before we get carried away, one note for Indian readers: the U9 is{" "}
        <strong>not officially sold or confirmed in India</strong>, so any India price is speculative.
        The China figures below are official. With that settled, here is what makes the U9 such a
        remarkable piece of engineering.
      </p>

      <h2>Four motors, one wheel each</h2>
      <p>
        The U9 is built on BYD&rsquo;s <strong>e4 quad-motor platform</strong>, where each wheel gets its
        own electric motor. In the U9 those four motors are rated at 240 kW each, for a combined{" "}
        <strong>960 kW — about 1,287 bhp</strong>. Splitting power per wheel does more than pile on
        horsepower: it gives the car&rsquo;s computer total, independent control over how much torque
        each corner receives, thousands of times a second. That is the foundation for both its violent
        straight-line speed and its party tricks.
      </p>
      <p>
        The numbers that follow from it are staggering. <strong>0&ndash;100 km/h in 2.36 seconds</strong>
        puts it among the very quickest accelerating production cars on earth, and the top speed is around{" "}
        <strong>309 km/h</strong>. This is supercar territory reached with electric motors and software,
        not a screaming combustion engine.
      </p>

      <h2>The battery and charging</h2>
      <p>
        Power that big needs a battery that can deliver — and recover — quickly. The U9 uses an{" "}
        <strong>80 kWh Blade battery</strong> good for a claimed ~450 km on the CLTC cycle. That range
        looks modest next to the U7 sedan&rsquo;s four-figure number, but the U9 is a track-and-spectacle
        car, so the pack is tuned for output, not touring. It runs an <strong>800-volt architecture</strong>{" "}
        and accepts DC fast charging at up to roughly <strong>500 kW</strong>, so even with a smaller
        battery the downtime between sessions is short.
      </p>

      <h2>DiSus-X: the suspension that defies gravity</h2>
      <p>
        If the powertrain makes the U9 fast, the <strong>DiSus-X active hydraulic suspension</strong> is
        what makes it famous. Each wheel sits on a fully active hydraulic unit that can raise or lower the
        body with enormous force and speed. The headline demonstration: the U9 can{" "}
        <strong>jump</strong>, launching its whole body off the ground — BYD has shown a leap of more than
        six metres in length. The same system lets the car &ldquo;dance&rdquo; and sway in place, and,
        more usefully, keep driving level and controlled on just three wheels if one is damaged. It turns
        suspension from a passive comfort device into an active part of how the car moves.
      </p>

      <h2>What it costs — and the India caveat</h2>
      <p>
        In China the U9 sells for around <strong>&yen;1.8 million</strong>, which works out to roughly{" "}
        <strong>&#8377;1.5 crore</strong> at current rates. India is a different story entirely: the U9
        is not on sale here, and were it ever imported as a halo car, duties would push the price far
        higher. We cover that reality in detail in our guide to the{" "}
        <Link href="/blog/byd-yangwang-india-launch-price">India launch and expected price</Link>. For the
        broader picture of the brand, its e4 platform and how the U9 sits alongside the{" "}
        <Link href="/byd/yangwang-u7">Yangwang U7</Link> sedan, read our explainer on{" "}
        <Link href="/blog/byd-yangwang-explained">what BYD Yangwang is</Link>.
      </p>

      <h2>And then there is the Xtreme</h2>
      <p>
        As wild as the standard U9 is, BYD built something even more extreme. The track-only{" "}
        <strong>U9 Xtreme</strong> raises the voltage to 1,200V, spins its motors to around 30,000 rpm
        and makes close to 3,000 hp — and it has the records to match, hitting 496 km/h and setting the
        fastest production-EV lap of the Nürburgring. We break down that machine in our piece on the{" "}
        <Link href="/blog/yangwang-u9-xtreme-496kmph-record">U9 Xtreme 496 km/h record run</Link>.
      </p>

      <h2>Why the U9 matters</h2>
      <p>
        The U9 is not a car most people will ever buy, but it changes the conversation. It shows that
        electric drivetrains can deliver not just acceleration but a whole new category of dynamic tricks
        — jumping, dancing, self-levelling — that combustion simply cannot. The technology debuting here
        will, in diluted form, reach far cheaper cars over time, which is the whole point of a halo model.
        To see what BYD already sells at attainable prices, explore the{" "}
        <Link href="/blog/byd-electric-cars">BYD electric cars in India</Link> guide, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and line up rivals with our{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>Yangwang U9 questions answered</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
