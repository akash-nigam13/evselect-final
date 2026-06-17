import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Buying a Used Electric Car in India (2026): Checklist, Battery Health & Costs",
  description:
    "A practical 2026 guide to buying a used electric car in India — how to check battery State of Health, transfer the 8-year warranty, run a VAHAN check, spot flood damage, and judge whether a second-hand EV is genuinely a bargain.",
  alternates: altsFor("/blog/used-electric-car-india", "en"),
  openGraph: {
    title: "Buying a Used Electric Car in India (2026): Checklist, Battery Health & Costs",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="used-electric-car-india">
      <p>
        A used electric car can be one of the smartest buys on the Indian market right now — or one
        of the riskiest, depending entirely on a single number you can't see by kicking the tyres.
        EVs depreciate faster than petrol cars in their first few years, which is bad news for the
        original owner but a real opportunity for a second buyer. The catch is that an EV's value
        lives almost entirely in its battery, and a tired pack can quietly halve the car's usefulness.
        This guide walks through exactly how to buy a <strong>used electric car in India</strong> in
        2026 — what to check, what the warranty actually covers for a second owner, and the red flags
        that should send you walking.
      </p>

      <h2>Why a used EV can be a genuine bargain</h2>
      <p>
        New EVs lose value quickly in the first three years, partly because the technology moves fast
        and partly because early buyers paid a premium. A Tata Nexon EV that cost well over ₹12 lakh
        new can be found on the used market from roughly ₹5–6 lakh for older, higher-mileage examples,
        rising to ₹15–16 lakh for newer long-range variants. That steep early curve means a two- or
        three-year-old EV often delivers most of the car for a fraction of the price — and the running
        costs stay just as low as a new one. If you want to see how those running costs stack up over
        time, our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">petrol vs electric 5-year cost
        analysis</Link> shows where the savings actually come from. The trick is buying a used EV
        whose battery still has plenty of life left, so you capture the depreciation discount without
        inheriting someone else's problem.
      </p>

      <h2>Battery State of Health: the only number that really matters</h2>
      <p>
        Forget odometer readings for a moment — the single most important figure on a used EV is its
        battery <strong>State of Health (SOH)</strong>, expressed as a percentage of original capacity.
        A pack at 100% SOH is as good as new; one at 70% has lost nearly a third of its usable range.
        To put that in real terms, a car that claimed 312 km when new but now reads 71% SOH will
        realistically deliver closer to 220 km on a full charge. The good news for 2026 buyers is that
        packs built from 2021 onwards have generally aged well — most still retain over 90% of their
        health — so a relatively recent used EV is usually a safe bet.
      </p>
      <p>
        Always ask the seller for an SOH reading and treat a refusal as a warning sign. The most
        reliable way to get it is a battery health check at the brand's authorised service centre,
        which can read the figure directly from the car's battery management system. For some models
        you can also pull SOH using an OBD2 scanner and a model-specific app, though that's fiddlier.
        Aim for 90% or above on a car under four years old; anything below 80% should be reflected in a
        much lower price. To understand how that number is measured and what drives degradation, read
        our explainer on{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">EV resale value and battery health</Link>.
      </p>

      <h2>Does the battery warranty transfer to you?</h2>
      <p>
        This is where used EVs get genuinely reassuring — and where buyers most often slip up. Almost
        every EV in India ships with a long battery warranty, typically{" "}
        <strong>8 years or 1,60,000 km</strong>, and crucially that cover usually follows the car to
        its next owner rather than expiring on resale. The warranty clock runs from the original first
        registration date, not the date you buy, so a three-year-old car still has around five years of
        battery cover left.
      </p>
      <p>
        But there's a catch that voids the protection for many second buyers: you often have to{" "}
        <em>notify the manufacturer</em> of the ownership transfer for the battery warranty to remain
        valid. Tata Motors, for example, offers its newer EVs a lifetime battery warranty for the first
        owner that converts to 8 years / 1,60,000 km for the second registration — but only if the new
        owner formally informs Tata of the transfer. Skip that paperwork and the cover simply doesn't
        apply. Warranty terms also differ by brand, so confirm in writing what transfers before you pay,
        and make sure the seller hands over the full service history. For the bigger picture on what a
        replacement would actually cost if you ever needed one, see our guide to{" "}
        <Link href="/blog/ev-battery-replacement-cost-india">EV battery replacement cost in India</Link>.
      </p>

      <h2>The used-EV inspection checklist</h2>
      <p>
        Beyond the battery, a used EV needs the same scrutiny as any second-hand car plus a few EV-specific
        checks. Work through this before you commit:
      </p>
      <table>
        <thead>
          <tr>
            <th>What to check</th>
            <th>What good looks like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battery State of Health (SOH)</td>
            <td>90%+ on cars under 4 years; verified at a service centre</td>
          </tr>
          <tr>
            <td>Warranty transfer</td>
            <td>Battery cover confirmed in writing and re-registered in your name</td>
          </tr>
          <tr>
            <td>Service history</td>
            <td>Complete records from authorised centres, no missed checks</td>
          </tr>
          <tr>
            <td>VAHAN / RC status</td>
            <td>No "salvage", "total loss" or flood/insurance write-off flags</td>
          </tr>
          <tr>
            <td>Charging equipment</td>
            <td>Original portable charger and cables included and working</td>
          </tr>
          <tr>
            <td>Tyres</td>
            <td>Even wear, decent tread — EVs chew tyres faster due to instant torque</td>
          </tr>
        </tbody>
      </table>
      <p>
        Run a VAHAN check on the registration number to confirm the car hasn't been written off, and be
        especially careful with vehicles from flood-prone regions — a battery pack that has been
        submerged can suffer accelerated degradation and, in the worst cases, thermal risk. If the
        history looks murky or the seller can't produce service records, that alone is reason enough to
        walk away.
      </p>

      <h2>Charging, range and how it'll fit your life</h2>
      <p>
        A used EV makes the most sense if you can charge at home, since cheap overnight top-ups are
        where the economics shine. Before buying, work out your real daily distance and check it
        comfortably fits inside the car's <em>current</em> degraded range, not its original brochure
        figure. Remember that the range you'll actually see also depends on driving style, AC use and
        traffic — our piece on{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range vs ARAI claims</Link>{" "}
        explains the gap. If you live in a flat, confirm you can install or access charging before you
        buy; our guide to{" "}
        <Link href="/blog/home-ev-charging-cost-india">home EV charging setup and costs</Link>{" "}
        covers what's involved. Match the car to how you actually drive and a used EV stops being a
        gamble and starts being a clever piece of budgeting.
      </p>

      <h2>FAQ</h2>
      <p>
        <strong>Is it safe to buy a used electric car in India?</strong> Yes, provided you verify the
        battery State of Health and confirm the warranty transfers. A recent used EV (2021 onwards)
        with 90%+ SOH and a clean history is generally a sound, low-running-cost buy.
      </p>
      <p>
        <strong>How do I check the battery health of a used EV?</strong> Get a State of Health (SOH)
        reading at the brand's authorised service centre, which reads it from the battery management
        system. Some models also allow an SOH read via an OBD2 scanner and a compatible app. Aim for
        90%+ on a car under four years old.
      </p>
      <p>
        <strong>Does the EV battery warranty transfer to the second owner?</strong> Usually yes — the
        standard 8-year / 1,60,000 km cover typically follows the car, with the clock running from the
        original registration. But many brands require you to formally notify them of the ownership
        transfer, or the cover lapses. Confirm the terms in writing before buying.
      </p>
      <p>
        <strong>Do used electric cars depreciate faster than petrol cars?</strong> In their first few
        years, often yes — which is exactly why they can be bargains second-hand. The flip side is
        battery uncertainty, so the depreciation discount is only worth it if the pack is healthy.
      </p>
      <p>
        <strong>What are the biggest red flags?</strong> No SOH data or a refusal to get the battery
        checked, a VAHAN "salvage" or "total loss" flag, flood-area history, missing service records,
        and a missing original charger. Any one of these is reason to negotiate hard or walk away.
      </p>
      <p>
        The bottom line: a used electric car in India can be excellent value, but the deal lives and
        dies on battery health and warranty transfer. Verify the SOH, get the warranty re-registered
        in your name, and the steep depreciation works in your favour. Ready to see what's out there?
        Browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> to learn the models, then use
        our{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link> to weigh battery specs and
        warranty terms side by side before you go hunting for a used one.
      </p>
    </ArticleShell>
  );
}
