import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV Subsidies & Road Tax by State: India 2026 Guide",
  description:
    "PM E-Drive incentives, state road-tax waivers, and import duty in 2026 — how EV subsidies really work in India and how to check what applies in your state.",
  alternates: altsFor("/blog/ev-subsidies-road-tax-by-state-india-2026", "en"),
  openGraph: { title: "EV Subsidies & Road Tax by State: India 2026 Guide", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-subsidies-road-tax-by-state-india-2026">
      <p>
        EV incentives in India are generous, real, and genuinely confusing — partly because the
        support comes from two different places at once. There is a central scheme that does one set
        of things, and twenty-odd state policies that do another. Buyers routinely assume the
        government will knock a big chunk off any electric car they fancy, then feel short-changed at
        the showroom. This guide untangles the two layers so you know exactly what to expect, what to
        verify, and where the real savings on your particular vehicle will come from.
      </p>

      <h2>The central picture: PM E-Drive replaces FAME-II</h2>
      <p>
        The headline national scheme in 2026 is PM E-Drive, which carries a roughly ₹10,900 crore
        outlay and has taken over from the older FAME-II programme. Its purchase incentives for
        electric two-wheelers and three-wheelers run up to 31 March 2026, while support for the
        heavier end of the market — e-buses, e-trucks, and public charging infrastructure — has been
        extended out to 2028. So the scheme is alive and well, but it is weighted towards mass-mobility
        and commercial categories rather than private cars.
      </p>
      <p>
        That distinction matters before you build a budget. If you are weighing a scooter, our roundup
        of the <Link href="/blog/top-5-electric-scooters-india-2026">top electric scooters for 2026</Link>{" "}
        is shaped partly by who still qualifies for these incentives, and the broader market context
        sits in our <Link href="/blog/india-ev-sales-fy2026">India EV sales FY2026</Link> analysis.
      </p>

      <h2>How the subsidy is actually calculated</h2>
      <p>
        For the categories it covers, PM E-Drive works on a per-kilowatt-hour basis. In FY2025–26 the
        rate is roughly ₹2,500 per kWh of battery capacity — notably down from about ₹5,000 per kWh
        the previous year, reflecting a planned taper as EVs reach price parity. The benefit is capped
        at around 15% of the vehicle's ex-factory price, so a larger battery does not mean unlimited
        subsidy. Disbursal is digital and tightly controlled: incentives flow through
        Aadhaar-authenticated e-vouchers, which the dealer redeems, keeping the discount tied to a
        verified buyer.
      </p>
      <p>
        In practice this means the subsidy on a typical electric scooter is a few thousand rupees
        rather than a transformative sum — useful, but smaller than the previous year's. Treat it as
        one input into total cost rather than the whole story; our{" "}
        <Link href="/tools">savings and cost calculators</Link> let you fold the incentive into running
        costs and see the real picture over the years you will own the vehicle.
      </p>

      <h2>The crucial nuance: who pays for four-wheeler subsidies</h2>
      <p>
        This is the single most misunderstood point, so let us state it plainly: PM E-Drive's demand
        incentives mainly cover two-wheelers, three-wheelers, buses, and trucks. Purchase subsidies for
        private four-wheelers come mostly from individual <strong>state EV policies</strong>, not the
        central scheme. If you are buying an electric car and expecting a big central-government cheque,
        you will be disappointed — the meaningful car incentives, where they exist, are written by your
        state government.
      </p>
      <p>
        And those state benefits vary enormously. Some states waive road tax and registration fees on
        EVs entirely; others add a purchase subsidy on top; a few have wound their support back as
        budgets tightened. Because the saving is decided at the state level, two buyers purchasing the
        identical car in different states can end up paying very different on-road prices. When you
        shortlist, it pays to <Link href="/compare">compare models on full on-road cost</Link> rather
        than ex-showroom alone, and to browse the <Link href="/catalog">catalog</Link> with your own
        state's policy in mind.
      </p>

      <h2>Imported EVs and the SPMEPCI angle</h2>
      <p>
        There is a third lever worth knowing if you are eyeing a premium or imported EV: the SPMEPCI
        scheme, which offers a reduced 15% import duty to manufacturers that commit to local
        manufacturing in India. This is not a buyer subsidy — it is an industrial-policy carrot — but
        it indirectly shapes the price of imported electric cars, because makers who qualify can land
        vehicles far more cheaply than the old duty regime allowed.
      </p>
      <p>
        That backdrop helps explain recent pricing moves at the top of the market, including the
        dynamics we unpacked in our piece on the{" "}
        <Link href="/blog/tesla-model-y-price-cut-india-2026">Tesla Model Y India price cut</Link>. When
        you see a headline-grabbing price drop on an imported EV, duty policy is usually somewhere in
        the explanation.
      </p>

      <h2>How the on-road price is built — and where EVs win</h2>
      <p>
        To see where incentives bite, it helps to know how the final price is assembled. The on-road
        price you pay is roughly: ex-showroom price + road tax + registration + insurance, plus any
        local charges. For a petrol car, road tax alone can add a meaningful percentage to the
        ex-showroom figure. This is precisely where EVs benefit most — in states that waive road tax
        and registration for electric vehicles, that entire slice simply disappears, often saving more
        than the purchase subsidy itself would.
      </p>
      <p>
        So when you compare an EV against a petrol equivalent, do it on the on-road number, not the
        sticker. Our <Link href="/compare">comparison view</Link> is built to surface that on-road
        context, and feeding your distance and tariff into the{" "}
        <Link href="/tools">cost tools</Link> shows how a road-tax waiver plus low running costs can
        flip the maths in the EV's favour faster than buyers expect. It also dovetails with the
        ownership thinking in our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">five-year cost comparison</Link> and the
        broader <Link href="/blog/how-to-choose-first-ev-india">first-EV checklist</Link>.
      </p>

      <h2>How to check your state's incentives</h2>
      <p>
        Because the numbers move and differ by state, never rely on a forum post or an old article.
        Verify directly, in this order:
      </p>
      <ol>
        <li>Search for your state's official EV policy document on its transport or industries department site.</li>
        <li>Note the four-wheeler purchase subsidy, if any, and whether it is capped or limited to early buyers.</li>
        <li>Check the road-tax and registration-fee position for EVs — full waiver, partial, or none.</li>
        <li>Confirm at your local RTO, since implementation and paperwork can lag the policy text.</li>
        <li>Ask the dealer to itemise the on-road quote so you can see exactly which waivers were applied.</li>
        <li>Cross-check the latest policy news in our <Link href="/news">EV news</Link> feed before you sign.</li>
      </ol>
      <p>
        Do that and you will walk in knowing your true out-the-door cost rather than a showroom guess.
        One last caveat: EV incentives change frequently. The details above were accurate as of April
        2026, so always verify against your current state policy and RTO before you buy.
      </p>
    </ArticleShell>
  );
}
