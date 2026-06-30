import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: string }[] = [
  {
    q: "Has BYD Yangwang launched in India?",
    a: "No. As of June 2026 BYD Yangwang is not officially launched or even confirmed for India. The U8 was shown at the Bharat Mobility Global Expo 2025, but only as a display vehicle with no booking, no official price and no launch commitment.",
  },
  {
    q: "What is the expected price of BYD Yangwang U8 in India?",
    a: "There is no official India price. Speculative figures from Indian outlets put the U8 at roughly ₹2.5–3.0 crore (91Wheels lists it as 'expected ₹2.50–3.00 Cr'), with some estimates as high as ₹3.0–3.5 crore. These are unofficial guesses based on import duties, not confirmed prices.",
  },
  {
    q: "Why would a Yangwang be so expensive in India?",
    a: "If it ever arrived, a Yangwang would almost certainly come as a fully imported (CBU) low-volume halo car. Imported cars above the duty thresholds attract very heavy import taxes in India, which can roughly double the landed price — pushing an ultra-luxury EV well into crore-plus territory.",
  },
  {
    q: "Which BYD electric cars can I actually buy in India now?",
    a: "BYD sells several EVs in India today, including the Atto 3, Seal, eMAX 7 and Sealion 7. If you want a BYD you can drive home this year rather than a far-off halo car, these are the models to look at on the BYD brand page.",
  },
];

export const metadata: Metadata = {
  title: "BYD Yangwang in India: Launch, Expected Price & Models (2026)",
  description:
    "Will BYD Yangwang launch in India? The 2026 reality — not officially confirmed, what was shown at the Bharat Mobility Expo, and the speculative ₹2.5–3.5 crore expected prices doing the rounds.",
  alternates: altsFor("/blog/byd-yangwang-india-launch-price", "en"),
  openGraph: {
    title: "BYD Yangwang in India: Launch, Expected Price & Models (2026)",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="byd-yangwang-india-launch-price">
      <p>
        Search interest in &ldquo;BYD Yangwang India price&rdquo; keeps climbing, so let us answer the
        question honestly before we get into the details: as of June 2026, BYD Yangwang is{" "}
        <strong>not officially launched or confirmed for India</strong>. There is no booking page, no
        official price and no dated launch plan. Every India figure you have seen is speculation. This
        guide explains what is actually true, what was merely shown, what the unofficial price estimates
        are based on, and — crucially — what you can buy from{" "}
        <Link href="/brand/byd">BYD's India lineup</Link> right now if you want a BYD this year rather
        than a hypothetical halo car.
      </p>

      <h2>What has actually happened in India so far</h2>
      <p>
        The one concrete data point is the <strong>Bharat Mobility Global Expo 2025</strong>, where BYD
        put the Yangwang U8 on display. That is meaningful as a statement of intent — it tells you BYD is
        comfortable showing its ultra-luxury brand to Indian audiences — but a display is not a launch.
        There was no commitment to sell the car here, no homologation timeline, and no price. Treat the
        Expo appearance as a teaser, not a promise.
      </p>

      <h2>The price numbers floating around (and why they are guesses)</h2>
      <p>
        Several Indian outlets have published &ldquo;expected price&rdquo; figures for the Yangwang U8.
        For example, 91Wheels lists the U8 as <strong>expected &#8377;2.50&ndash;3.00 crore</strong>,
        while other estimates stretch to <strong>&#8377;3.0&ndash;3.5 crore</strong>. We are quoting
        these only so you recognise them when you see them — <strong>none of them is official</strong>.
        They are back-of-envelope projections derived from China pricing plus assumed import duties. The
        official prices that do exist are China prices; everything India-specific is speculative until
        BYD says otherwise.
      </p>

      <h2>Why a Yangwang would be a crore-plus car here</h2>
      <p>
        If Yangwang ever did arrive, the mechanics of how it would come almost guarantee a very high
        price. It would land as a <strong>fully imported (CBU) low-volume halo product</strong> — a
        car BYD sells in tiny numbers to build brand prestige, not to chase volume. Fully imported cars
        above the relevant value thresholds attract heavy import duty in India, which can roughly double
        the landed cost. Layer that onto an already-premium ultra-luxury EV and a crore-plus sticker is
        not surprising; it is the default. This is exactly why halo imports stay rare and expensive here.
      </p>

      <h2>The Yangwang models, briefly</h2>
      <p>
        For context, the cars people are speculating about are the U8 luxury off-road SUV (a plug-in
        hybrid, not a pure EV), the <Link href="/byd/yangwang-u7">Yangwang U7</Link> pure-electric
        luxury sedan, and the <Link href="/byd/yangwang-u9">Yangwang U9</Link> pure-electric super-coupe.
        If you want the full breakdown of the brand, its e4 quad-motor platform and how the three models
        differ, read our explainer on{" "}
        <Link href="/blog/byd-yangwang-explained">what BYD Yangwang is</Link>. And if it is the sheer
        performance that drew you in, the deep dive on the{" "}
        <Link href="/blog/byd-yangwang-u9-electric-hypercar">U9 electric hypercar</Link> is the place to
        go.
      </p>

      <h2>Managing expectations: should you wait?</h2>
      <p>
        If you are an enthusiast hoping to one day own a Yangwang in India, the honest advice is: do not
        plan around it. There is no confirmed launch, the likely price would be in crore territory, and
        even if it comes, it would be a handful of cars, not a showroom you can walk into. Following the
        news is fun; budgeting for it would be premature. We will update this page the moment BYD makes
        anything official.
      </p>

      <h2>The BYD you can actually buy in India now</h2>
      <p>
        Here is the good news for anyone who simply wants a BYD. The brand already sells real,
        on-the-road EVs in India — the <strong>Atto 3</strong>, the <strong>Seal</strong>, the{" "}
        <strong>eMAX 7</strong> and the <strong>Sealion 7</strong> — at prices that are a fraction of any
        Yangwang fantasy. Start on the <Link href="/brand/byd">BYD's India lineup</Link> page to see
        what is on sale, read our practical guide to{" "}
        <Link href="/blog/byd-electric-cars">BYD electric cars in India</Link>, browse everything in the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>, and put any two models head to
        head with our <Link href="/compare-electric-vehicles">comparison tool</Link>. That is the
        realistic path to a BYD in your driveway — Yangwang remains, for now, a story to watch rather
        than a car to wait for.
      </p>

      <h2>BYD Yangwang India: your questions answered</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
