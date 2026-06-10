import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Safest Electric Cars in India 2026 (Bharat NCAP & Global NCAP Rated) | EVSelect.in",
  description:
    "Which is the safest electric car in India? A 2026 list of the safest EVs by Bharat NCAP and Global NCAP crash-test ratings, with 5-star models and what to check before buying.",
  alternates: altsFor("/blog/safest-electric-cars-india", "en"),
  openGraph: { title: "Safest Electric Cars in India 2026", type: "article" },
};

const faqs = [
  { q: "Which is the safest electric car in India?", a: "Several EVs have earned 5-star crash-test ratings. The Tata Nexon EV, Tata Punch EV, Tata Curvv EV and Mahindra BE 6 / XEV 9e have achieved 5 stars under Bharat NCAP, while the BYD Atto 3 holds a 5-star Euro NCAP rating. The 'safest' for you also depends on the active-safety features you need." },
  { q: "Are electric cars safe in India?", a: "Yes. Modern EVs are built to the same crash-safety standards as petrol cars and many score 5 stars in Bharat NCAP or Global NCAP testing. Their low centre of gravity (from a floor-mounted battery) can also improve stability." },
  { q: "What safety features should I look for in an EV?", a: "Look for a strong NCAP star rating, six airbags, electronic stability control (ESC), ABS, and increasingly Level 2 ADAS (autonomous emergency braking, lane assist). For the battery, check the IP rating and the manufacturer's safety certification." },
  { q: "Do EV batteries catch fire easily?", a: "EV battery fires are rare and usually linked to damage or poor-quality cells. Reputable EVs use certified battery packs with thermal management and safety cut-offs. Buying from established brands and following charging guidelines keeps the risk very low." },
];

export default function Page() {
  return (
    <ArticleShell slug="safest-electric-cars-india">
      <p>
        Safety is non-negotiable, and the good news is that India&apos;s top
        electric cars now score among the highest crash-test ratings of any vehicles
        on sale. This 2026 guide lists the safest electric cars in India by Bharat
        NCAP and Global NCAP ratings, and explains what actually makes an EV safe.
        Browse the full range of <Link href="/catalog/electric-cars">electric cars in India</Link>{" "}
        as you shortlist.
      </p>

      <h2>Which is the safest electric car in India?</h2>
      <p>
        Multiple EVs have achieved the top 5-star crash-test rating. Among them, the{" "}
        <Link href="/brand/tata">Tata</Link> Nexon EV, Punch EV and Curvv EV, and the{" "}
        <Link href="/brand/mahindra">Mahindra</Link> BE 6 and XEV 9e have earned 5
        stars under Bharat NCAP, while the <Link href="/brand/byd">BYD</Link> Atto 3
        holds a 5-star Euro NCAP rating. Ratings are as published by the respective
        testing bodies and apply to specific variants.
      </p>

      <h2>Safest electric cars by rating (2026)</h2>
      <ul>
        <li><strong>Tata Nexon EV</strong> — 5-star Bharat NCAP, six airbags, ESC.</li>
        <li><strong>Tata Punch EV</strong> — 5-star rated compact EV.</li>
        <li><strong>Tata Curvv EV</strong> — 5-star rated coupe-SUV.</li>
        <li><strong>Mahindra BE 6 &amp; XEV 9e</strong> — 5-star Bharat NCAP with Level 2+ ADAS.</li>
        <li><strong>BYD Atto 3</strong> — 5-star Euro NCAP.</li>
      </ul>
      <p>
        Compare the safety and feature sets of any two of these in the{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>

      <h2>What makes an electric car safe</h2>
      <p>
        Beyond the star rating, look for six airbags, electronic stability control,
        and Level 2 ADAS features like autonomous emergency braking. EVs also benefit
        from a low centre of gravity thanks to the floor-mounted battery, which aids
        stability. For battery safety, choose certified packs from established brands —
        more on that in our{" "}
        <Link href="/blog/ev-battery-lifespan-india">EV battery lifespan guide</Link>.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="not-prose my-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
            <summary className="cursor-pointer font-display text-sm font-bold text-white">{f.q}</summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="text-sm">
        Related:{" "}
        <Link href="/blog/best-electric-cars-india-2026">best electric cars to buy</Link>,{" "}
        <Link href="/blog/best-selling-electric-cars-india">best-selling EVs</Link> and the{" "}
        <Link href="/catalog">full catalog</Link>.
      </p>

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
