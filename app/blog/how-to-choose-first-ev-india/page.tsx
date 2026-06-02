import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "How to Choose Your First EV in India: 2026 Checklist",
  description:
    "A priority-ordered checklist for buying your first electric car in India — range, charging access, real costs, warranty, subsidies, and safety, explained simply.",
  alternates: altsFor("/blog/how-to-choose-first-ev-india", "en"),
  openGraph: { title: "How to Choose Your First EV in India: 2026 Checklist", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="how-to-choose-first-ev-india">
      <p>
        Buying your first EV in India can feel like learning a new language — kWh, ARAI range,
        CCS2, battery warranties. But the decision is far simpler than the jargon suggests if you
        tackle it in the right order. Most buyers obsess over the headline range number when the
        things that actually determine day-to-day happiness sit elsewhere. This checklist puts the
        questions in priority order, so you spend your attention where it matters and walk into the
        showroom knowing exactly what you need.
      </p>

      <h2>1. Match range to your real usage, not the brochure</h2>
      <p>
        Start by being honest about how far you drive. Most Indian city commutes are 30–50 km a
        day, which means a car with a genuine real-world range of 250–350 km is comfortably more
        than enough — you would charge once or twice a week, not nightly. Chasing the longest-range
        EV on the market usually means paying for a bigger, heavier, costlier battery you will
        rarely use.
      </p>
      <p>
        Think in terms of your weekly pattern and the occasional long drive, not a worst-case
        road trip you take twice a year. For those rare long hauls, public fast charging fills the
        gap, as our look at{" "}
        <Link href="/blog/ev-charging-infrastructure-india">India's charging infrastructure</Link>{" "}
        explains. Buy for your everyday life and let the network handle the exceptions.
      </p>

      <h2>2. Confirm charging access first — it is the biggest satisfaction factor</h2>
      <p>
        This is the single most important question, and most first-time buyers leave it for last.
        Where will you charge overnight? If you have a dedicated parking spot at home, you are set.
        If you live in an apartment, you need to confirm that your society will allow a wall-box
        and sort out metering before you buy, not after.
      </p>
      <p>
        Owners who can charge at home are overwhelmingly the happiest EV owners, because the car
        simply refills while they sleep. Our guide to{" "}
        <Link href="/blog/home-ev-charging-cost-india">home EV charging setup and cost</Link>{" "}
        covers chargers, installation, and society approvals in detail. Sort this out first — it
        shapes everything else.
      </p>

      <h2>3. Understand real range versus claimed range</h2>
      <p>
        The ARAI or MIDC figure on the brochure is a lab number, and your real-world range will be
        lower — typically around 70–80% of the claim, and less on sustained highway speeds with the
        AC running. This is normal and not a defect; the test cycle simply does not reflect Indian
        highway speeds or 45°C summers.
      </p>
      <p>
        Knowing this up front prevents disappointment and helps you size the battery correctly.
        Read our detailed explainer on{" "}
        <Link href="/blog/real-world-range-vs-arai-india">real-world range versus ARAI claims</Link>{" "}
        so you mentally discount the brochure number before you shortlist anything.
      </p>

      <h2>4. Look at total cost of ownership, not the sticker price</h2>
      <p>
        An EV often costs more up front than a comparable petrol car, but the running cost is far
        lower — roughly ₹1–1.5 per km on home electricity at ₹6–9 per kWh, against ₹6–7 per km on
        petrol at ₹100–110 per litre. Add cheaper servicing (no oil changes, fewer moving parts)
        and the gap widens over the years you own the car.
      </p>
      <p>
        The honest comparison is the full picture over five years, not the on-road price alone. Our
        breakdown of{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">petrol versus electric over five years</Link>{" "}
        lays this out, and you can plug in your own distance and tariff using the{" "}
        <Link href="/tools">cost and range calculators</Link> to see where the break-even lands for
        you.
      </p>

      <h2>5. Check battery warranty and resale</h2>
      <p>
        The battery is the most expensive component, so its warranty is your safety net. The Indian
        norm is roughly 8 years or 1.6 lakh km, often with a guarantee that capacity will not fall
        below a stated percentage. Read the fine print on what is covered and what voids it.
      </p>
      <p>
        Resale is the other half of this. A well-documented service history and verifiable battery
        health protect your future selling price, and the EV used market is maturing fast. Our guide
        to{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">EV resale value and battery health</Link>{" "}
        explains how to protect that value from day one, and our{" "}
        <Link href="/about-ev-batteries">battery primer</Link> covers what degradation actually looks
        like.
      </p>

      <h2>6. Factor in subsidies and road tax by state</h2>
      <p>
        Incentives vary widely across India. Some states waive road tax and registration fees
        entirely, others offer purchase subsidies on top, and a few have scaled their support back.
        These differences can shift the effective price by a meaningful amount, so check what applies
        where you will register the car.
      </p>
      <p>
        Our state-by-state guide to{" "}
        <Link href="/blog/ev-subsidies-road-tax-by-state-india-2026">EV subsidies and road tax in 2026</Link>{" "}
        breaks down the current position so you can factor the real out-the-door cost into your
        budget rather than the showroom estimate.
      </p>

      <h2>7. Run a safety and features checklist</h2>
      <p>
        Finally, do not let the novelty of an EV crowd out the basics. Run through the practical
        checklist:
      </p>
      <ul>
        <li>Bharat NCAP or other crash-safety ratings for the model.</li>
        <li>ADAS and driver-assist features if you do a lot of highway driving.</li>
        <li>Service-network reach in your city — how far is the nearest authorised workshop.</li>
        <li>Onboard charger rating, so the car can actually use your home wall-box speed.</li>
        <li>Cabin, boot, and ground clearance for your real-world family and road conditions.</li>
      </ul>
      <p>
        Models like the{" "}
        <Link href="/catalog/tata-nexon-ev-long-range-45-kwh">Tata Nexon EV Long Range</Link> have
        become popular first EVs precisely because they balance these fundamentals well, and brand
        pages such as <Link href="/catalog/brand/tata">Tata's lineup</Link> let you see the full
        family at a glance.
      </p>

      <h2>Putting it together</h2>
      <p>
        Work the list top to bottom: confirm where you will charge, size the battery to your real
        distance, sanity-check the running cost, then compare warranty, incentives, and safety
        across your shortlist. The fastest way to narrow the field is to{" "}
        <Link href="/compare">compare EVs side by side</Link> on range, battery, price, and charging,
        then browse the <Link href="/catalog/all">full catalog</Link> to firm up your top two or
        three. Do that, and your first EV will fit your life rather than your spreadsheet.
      </p>
    </ArticleShell>
  );
}
