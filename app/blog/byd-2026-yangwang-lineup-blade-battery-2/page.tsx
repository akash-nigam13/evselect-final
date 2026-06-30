import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is new in the 2026 BYD Yangwang lineup?",
    a: "The 2026 Yangwang range (U7, U8 and a long-wheelbase U8L) moves to BYD's second-generation Blade Battery — a refined LFP cell with around 5% higher energy density — and adds flash charging that reaches about 70% in roughly five minutes and around 97% in about nine minutes.",
  },
  {
    q: "How much range does the 2026 Yangwang U7 claim?",
    a: "The 2026 U7 BEV claims up to 1,006 km on China's CLTC cycle, using a large 150 kWh second-generation Blade Battery. Real-world figures will be lower, but a four-digit CLTC number for a full-size luxury sedan is still notable.",
  },
  {
    q: "How fast is the new Blade Battery 2.0 flash charging?",
    a: "BYD says the 2026 Yangwang cars can charge to roughly 70% in about five minutes and around 97% in about nine minutes, dramatically cutting the time spent at a fast charger.",
  },
  {
    q: "Does the 2026 Yangwang lineup affect India?",
    a: "Not directly — Yangwang is not officially launched or confirmed for India, and any India price would be speculative. The China prices announced (about ¥658,000 to ¥1.3 million) are official. Indian buyers who want a BYD today should look at the brand's on-sale EVs.",
  },
];

export const metadata: Metadata = {
  title: "BYD Launches 2026 Yangwang Lineup With Blade Battery 2.0",
  description:
    "BYD has rolled out its 2026 Yangwang lineup with the second-generation Blade Battery and flash charging — the U7 now claims up to 1,006 km CLTC range. Here's what is new and the prices.",
  alternates: altsFor("/blog/byd-2026-yangwang-lineup-blade-battery-2", "en"),
  openGraph: {
    title: "BYD Launches 2026 Yangwang Lineup With Blade Battery 2.0",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="byd-2026-yangwang-lineup-blade-battery-2">
      <p>
        BYD has refreshed its ultra-luxury Yangwang brand for 2026, and the headline is a battery
        upgrade with real-world teeth. On 6 March 2026 the company launched the updated Yangwang lineup —
        the U7, U8 and a long-wheelbase U8L — built around its{" "}
        <strong>second-generation Blade Battery</strong> and a new flash-charging system. The standout
        claim is a full-size sedan with a four-digit range figure. Note for Indian readers: Yangwang is{" "}
        <strong>not officially launched or confirmed in India</strong>, so the prices here are the
        official China figures, and any India number would be speculative.
      </p>

      <h2>Blade Battery 2.0 and flash charging</h2>
      <p>
        The core upgrade is the next-generation Blade Battery, a refined lithium-iron-phosphate (LFP)
        cell with roughly <strong>5 percent higher energy density</strong> than before. Paired with it is
        BYD&rsquo;s flash-charging capability, which the company says can take a pack to about{" "}
        <strong>70 percent in around five minutes</strong> and roughly <strong>97 percent in about nine
        minutes</strong>. For an ultra-luxury car that customers will use on long drives, slashing charge
        time to a few minutes is arguably as important as the extra range.
      </p>

      <h2>A 1,006 km luxury sedan</h2>
      <p>
        The most eye-catching number belongs to the U7. The 2026 U7 BEV now claims up to{" "}
        <strong>1,006 km on China&rsquo;s CLTC cycle</strong>, drawing on a large 150 kWh
        second-generation Blade Battery. CLTC figures run optimistic and the real-world number will be
        meaningfully lower, but a four-digit claim for a heavy, powerful luxury saloon shows how far the
        new cells have pushed energy storage. The U7 remains a quad-motor performance machine on the same
        e4 platform that underpins the rest of the range — see our explainer on{" "}
        <Link href="/blog/byd-yangwang-explained">what BYD Yangwang is</Link> for how that works.
      </p>

      <h2>Pricing and the lineup</h2>
      <p>
        BYD set 2026 China prices spanning roughly <strong>&yen;658,000 to &yen;1.3 million</strong>{" "}
        across the U7, U8 and U8L. The U8 and U8L continue as plug-in-hybrid off-roaders rather than pure
        EVs, while the U7 leads the pure-electric charge. The brand&rsquo;s halo two-seater, the{" "}
        <Link href="/byd/yangwang-u9">Yangwang U9</Link> super-coupe, sits above this update and recently
        spawned the record-breaking{" "}
        <Link href="/blog/yangwang-u9-xtreme-496kmph-record">U9 Xtreme that hit 496 km/h</Link>. The
        long-range sedan in this refresh is the{" "}
        <Link href="/byd/yangwang-u7">Yangwang U7</Link>.
      </p>

      <h2>What it means for India</h2>
      <p>
        For Indian buyers the practical takeaway is small but worth stating plainly: none of this is on
        sale here, and Yangwang has no confirmed India launch. Any &ldquo;expected price&rdquo; you see
        is guesswork — we cover that in our{" "}
        <Link href="/blog/byd-yangwang-india-launch-price">Yangwang India launch and price</Link> piece.
        The more relevant story is that battery tech proven on these flagships tends to flow down to
        affordable models. If you want a BYD you can actually buy now, see the{" "}
        <Link href="/brand/byd">BYD's India lineup</Link>, read our{" "}
        <Link href="/blog/byd-electric-cars">BYD electric cars in India</Link> guide, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and compare options with our{" "}
        <Link href="/compare-electric-vehicles">comparison tool</Link>.
      </p>

      <h2>2026 Yangwang lineup FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />

      <h2>Sources</h2>
      <p>
        Reporting drawn from{" "}
        <a
          href="https://cnevpost.com/2026/03/06/byd-launches-2026-yangwang-lineup-next-gen-blade-battery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CnEVPost: BYD launches 2026 Yangwang lineup with next-gen Blade Battery
        </a>{" "}
        and{" "}
        <a
          href="https://carnewschina.com/2026/03/06/2026-yangwang-u7-luxury-sedan-launched-featuring-1006-km-ev-range-and-flash-charging/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CarNewsChina: 2026 Yangwang U7 launched with 1,006 km range and flash charging
        </a>
        .
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
