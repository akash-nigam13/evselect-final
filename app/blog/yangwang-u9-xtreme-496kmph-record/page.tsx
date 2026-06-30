import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "How fast is the BYD Yangwang U9 Xtreme?",
    a: "The U9 Xtreme reached 496.22 km/h (308.33 mph) at the ATP Papenburg test track. BYD bills it as the world's fastest production car, though the run was made in one direction only.",
  },
  {
    q: "Is the U9 Xtreme officially the fastest production car?",
    a: "BYD markets it that way, but with an important caveat: the 496 km/h run was one-direction only. Official top-speed records, such as Guinness World Records criteria, require a two-way average to cancel out wind and gradient — so the figure does not meet that standard.",
  },
  {
    q: "What makes the U9 Xtreme so much faster than the standard U9?",
    a: "It is a track-focused, limited-run version (no more than 30 units). BYD raised the voltage from 800V to 1,200V, spun the four motors to around 30,000 rpm, fitted a 30C Blade battery and produced close to 3,000 hp — roughly double the standard car's output.",
  },
  {
    q: "What Nürburgring record did the U9 Xtreme set?",
    a: "It set the fastest-ever production-EV lap of the Nürburgring Nordschleife at 6:59.157, becoming the first production electric car to break the seven-minute barrier on the circuit.",
  },
];

export const metadata: Metadata = {
  title: "Yangwang U9 Xtreme Hits 496 km/h & Sets a Nürburgring EV Record",
  description:
    "BYD's Yangwang U9 Xtreme — a ~3,000 hp, 1,200-volt hypercar — hit 496.22 km/h and set the fastest-ever production-EV lap of the Nürburgring at 6:59. What it means, with the records explained carefully.",
  alternates: altsFor("/blog/yangwang-u9-xtreme-496kmph-record", "en"),
  openGraph: {
    title: "Yangwang U9 Xtreme Hits 496 km/h & Sets a Nürburgring EV Record",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="yangwang-u9-xtreme-496kmph-record">
      <p>
        BYD has just delivered one of the most extraordinary performance statements in electric-car
        history. The <strong>Yangwang U9 Xtreme</strong> — a track-focused, near-3,000 hp evolution of
        the <Link href="/byd/yangwang-u9">Yangwang U9</Link> super-coupe — reached{" "}
        <strong>496.22 km/h (308.33 mph)</strong> and separately set the fastest-ever production-EV lap
        of the Nürburgring Nordschleife. The numbers are jaw-dropping, but a couple of them need careful
        framing, so let us go through what actually happened.
      </p>

      <h2>A very different machine to the standard U9</h2>
      <p>
        The U9 Xtreme is not a tuned version you can wander into a showroom and buy. It is a{" "}
        <strong>limited run of no more than 30 units</strong>, built for the track. To find this much
        speed BYD rebuilt the electrical heart of the car: it raised the operating voltage from{" "}
        <strong>800V to 1,200V</strong>, pushed the four motors to spin at around{" "}
        <strong>30,000 rpm</strong>, and fitted a high-discharge <strong>30C Blade battery</strong> able
        to dump enormous current on demand. The result is close to <strong>3,000 hp</strong> — roughly
        double the already-ferocious standard car.
      </p>

      <h2>496 km/h — and the caveat that matters</h2>
      <p>
        At the ATP Papenburg test track, the U9 Xtreme hit <strong>496.22 km/h (308.33 mph)</strong>,
        and BYD bills it as the world&rsquo;s fastest production car. Here is the important nuance to
        present honestly: that run was made in <strong>one direction only</strong>. Official top-speed
        records — including Guinness World Records criteria — require a <strong>two-way average</strong>,
        with runs in both directions averaged together to cancel out any help from wind or a downhill
        gradient. Because the U9 Xtreme&rsquo;s figure is a single-direction number, it does{" "}
        <strong>not</strong> meet that official two-way standard. The speed is real and astonishing; the
        &ldquo;world&rsquo;s fastest&rdquo; framing simply deserves that asterisk.
      </p>

      <h2>The Nürburgring record</h2>
      <p>
        The second achievement is more clear-cut. At the Nürburgring Nordschleife — the 20.8 km circuit
        that is the industry&rsquo;s benchmark for all-round performance — the U9 Xtreme set the{" "}
        <strong>fastest-ever production-EV lap at 6:59.157</strong>. That makes it the{" "}
        <strong>first production electric car to break the seven-minute barrier</strong> there, a
        milestone that says as much about cornering, braking and thermal endurance as it does about
        straight-line speed. Going under seven minutes is hard; doing it on electrons is a genuine
        landmark for the technology.
      </p>

      <h2>Where it fits in the Yangwang story</h2>
      <p>
        The Xtreme is the sharpened tip of a much broader push. For the engineering behind the road-going
        U9 — the e4 quad-motor platform and the suspension that lets the car jump — read our deep dive on
        the <Link href="/blog/byd-yangwang-u9-electric-hypercar">U9 electric hypercar</Link>, and for the
        full picture of the brand and its three models, see our explainer on{" "}
        <Link href="/blog/byd-yangwang-explained">what BYD Yangwang is</Link>. The same battery and motor
        advances are flowing into the rest of the range, including the 2026 refresh — our report on the{" "}
        <Link href="/blog/byd-2026-yangwang-lineup-blade-battery-2">2026 Yangwang lineup with Blade
        Battery 2.0</Link> covers that — and the long-range{" "}
        <Link href="/byd/yangwang-u7">Yangwang U7</Link> sedan.
      </p>

      <h2>What it means for India</h2>
      <p>
        For Indian readers, the practical note is the familiar one: Yangwang is{" "}
        <strong>not officially launched or confirmed in India</strong>, and a low-volume halo like the
        Xtreme is even less likely to arrive — any India price would be pure speculation. What it does
        signal is how quickly Chinese EV performance is advancing, and that the underlying tech reaches
        affordable cars over time. To see what BYD sells here today, visit the{" "}
        <Link href="/brand/byd">BYD's India lineup</Link>, read the{" "}
        <Link href="/blog/byd-electric-cars">BYD electric cars in India</Link> guide, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and weigh options with our{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>U9 Xtreme records FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <h2>Sources</h2>
      <p>
        Details from BYD&rsquo;s own announcement,{" "}
        <a
          href="https://www.byd.com/mea/news-list/yangwang-u9-xtreme-is-the-worlds-fastest-production-car-with-top-speed-of-496kmh"
          target="_blank"
          rel="noopener noreferrer"
        >
          BYD: Yangwang U9 Xtreme is the world&rsquo;s fastest production car with a top speed of 496
          km/h
        </a>
        , and{" "}
        <a
          href="https://electrek.co/2025/10/21/byd-3000-hp-yangwang-u9-hypercar-breaks-nurburgring-ev-record-lap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Electrek: BYD&rsquo;s 3,000 hp Yangwang U9 hypercar breaks Nürburgring EV record lap
        </a>
        .
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
