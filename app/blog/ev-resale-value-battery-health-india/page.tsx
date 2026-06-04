import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV Resale Value & Battery Health in India (2026)",
  description:
    "Will your EV hold its worth? How battery State of Health, warranty, and charging habits drive used-EV resale value in India — and how to protect yours.",
  alternates: altsFor("/blog/ev-resale-value-battery-health-india", "en"),
  openGraph: { title: "EV Resale Value & Battery Health in India (2026)", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-resale-value-battery-health-india">
      <p>
        For most first-time EV buyers in India, the quiet worry is not range or charging — it is
        resale. Petrol cars have decades of trusted depreciation curves; electric cars feel like an
        unknown. The honest answer in 2026 is reassuring but nuanced: a well-kept EV with a healthy
        battery holds its value perfectly respectably, and in many cases better than the early scare
        stories suggested. The catch is that the battery, not the bodywork, now decides what your car
        is worth. Understanding how that works lets you buy smart, sell well, and avoid nasty
        surprises three or four years down the road.
      </p>

      <h2>What actually drives an EV's resale value</h2>
      <p>
        With a petrol car, a buyer mostly cares about kilometres, service history, and how the engine
        sounds. With an EV, four levers do most of the work. The biggest is battery State of Health
        (SoH) — the percentage of original capacity the pack still holds. A car at 95% SoH commands a
        very different price from an identical model at 80%. Second is warranty time remaining: a pack
        with five years of cover left is far more sellable than one nearing the end. Third is charging
        history — a car that lived on slow home charging is gentler-used than one hammered on DC fast
        chargers daily. Fourth is plain model demand: popular, well-supported models hold value, niche
        ones slide.
      </p>
      <p>
        This is why resale is really a continuation of the same total-cost thinking you do at
        purchase. If you have already worked through our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">petrol versus electric five-year cost</Link>{" "}
        comparison, resale value is simply the final line in that ledger — and one you can influence
        from day one. The same logic sits inside our{" "}
        <Link href="/blog/how-to-choose-first-ev-india">first-EV checklist</Link>, where warranty and
        resale appear as core buying criteria rather than afterthoughts.
      </p>

      <h2>The degradation reality — better than the rumours</h2>
      <p>
        Early EV horror stories about packs dying at 100,000 km no longer reflect modern chemistry.
        In normal Indian use, today's LFP and NMC packs typically retain around 80% or more of their
        capacity after roughly eight years or 1.6 lakh km — which is also why most manufacturers are
        comfortable warranting to exactly that threshold. Degradation is gradual and front-loaded: a
        car loses a few percent in its first year or two, then settles into a slow, predictable
        decline.
      </p>
      <p>
        India does add one accelerant the brochures rarely mention — sustained heat. A pack baking at
        45°C in an unshaded parking lot ages faster than the same pack in a temperate climate, and
        the effect compounds over years. We cover this in depth in our guide to{" "}
        <Link href="/blog/ev-battery-life-india-weather">EV battery life in Indian weather</Link>, and
        our <Link href="/about-ev-batteries">battery primer</Link> explains the chemistry behind why
        LFP packs tend to shrug off heat and full charges better than NMC. The practical takeaway:
        degradation is real but manageable, and a buyer who understands it will not panic at a normal
        82% SoH reading on a four-year-old car.
      </p>

      <h2>Checking State of Health before you buy or sell</h2>
      <p>
        Because SoH is the single biggest price driver, learning to read it is the most useful skill
        in the used-EV market. There are three common routes. The simplest is an OBD diagnostic — a
        plug-in scanner or app that pulls real capacity data from the battery management system, often
        for a small fee at an EV-savvy workshop. The second is a manufacturer report: many brands can
        generate an official capacity statement, which doubles as proof for warranty claims. The third,
        and fastest-growing in 2026, is the independent "battery health certificate" — a standardised
        report from a third-party assessor that buyers increasingly demand before paying.
      </p>
      <p>
        As a buyer, never accept "the battery feels fine" — ask for a recent SoH figure in writing. As
        a seller, getting a certificate before listing is one of the cheapest ways to justify your
        asking price. When you are weighing two used cars, lay their battery and warranty details side
        by side; our <Link href="/compare-electric-vehicles">comparison tool</Link> is built for exactly that kind of
        spec-by-spec scrutiny, and the full <Link href="/catalog">model catalog</Link> shows you the
        original pack size each figure should be measured against.
      </p>

      <h2>Warranty transfer — an underrated resale lever</h2>
      <p>
        Here is a detail that quietly adds thousands to a resale price: most EV battery warranties in
        India transfer to the second owner, provided servicing was done through authorised channels.
        That remaining cover is a tangible asset — it caps the buyer's worst-case risk, which is the
        very thing that makes used-EV shoppers nervous. A car sold with four years of transferable
        battery warranty is far easier to sell, and at a better price, than one whose cover has lapsed.
      </p>
      <p>
        So keep your paperwork immaculate. Stamped service records, the original warranty booklet, and
        any battery reports turn an abstract promise into something a buyer can verify. Sellers who
        treat documentation as part of the car's value — not bureaucracy — consistently get more for
        it.
      </p>

      <h2>Battery-as-a-Service changes the maths entirely</h2>
      <p>
        A genuinely new variable in 2026 is Battery-as-a-Service (BaaS), where you buy the car but
        lease the battery on a monthly plan. The{" "}
        <Link href="/catalog/maruti-suzuki-e-vitara-61-kwh">Maruti e Vitara</Link> brought this model
        into the mainstream conversation, and as we explained when covering the{" "}
        <Link href="/blog/maruti-e-vitara-first-ev-launch">e Vitara's launch</Link>, it reshapes both
        ownership and resale.
      </p>
      <p>
        The logic is straightforward: if the battery is leased, the buyer of your used car inherits a
        pack-health guarantee from the provider rather than gambling on your charging history. That
        removes the scariest unknown in the entire used-EV transaction — so BaaS cars can resell more
        smoothly, even if the headline price looks different because the battery is not "yours" to
        sell. Whether BaaS suits you depends on how long you keep cars and your monthly cash flow, but
        it is no longer a fringe idea.
      </p>

      <h2>A maturing market — and how to protect your resale</h2>
      <p>
        Be realistic about where India is in the cycle. The used-EV market is still maturing, which
        means a wider price spread than for an equivalent ICE car — two similar models can sell for
        noticeably different amounts depending on battery proof, warranty, and local demand. That
        volatility is precisely why a documented, healthy battery is your best insurance: it pulls you
        to the top of that spread.
      </p>
      <p>
        The habits that protect resale are the same ones that protect the battery, and they cost
        nothing:
      </p>
      <ul>
        <li>Avoid habitual 100% DC fast-charging — use rapid chargers for trips, not daily top-ups.</li>
        <li>Park in shade wherever possible to spare the pack India's worst heat.</li>
        <li>Keep daily charge in the 20–80% window rather than constantly filling to the brim.</li>
        <li>Service through authorised channels so the warranty stays transferable.</li>
        <li>Keep every report and receipt — proof is what converts a healthy pack into a higher price.</li>
      </ul>
      <p>
        Do those five things and resale stops being a worry and becomes a strength. If you are still
        shortlisting, browse the <Link href="/catalog">catalog</Link> with battery warranty in mind,
        and run your top picks through the <Link href="/compare-electric-vehicles">side-by-side comparison</Link> before
        you commit — the car that is easy to live with usually turns out to be the easy one to sell,
        too.
      </p>
    </ArticleShell>
  );
}
