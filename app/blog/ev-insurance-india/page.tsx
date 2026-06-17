import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is EV insurance cheaper than petrol-car insurance in India?",
    a: "Only partly. The third-party premium is about 15% cheaper by regulation, but the own-damage premium is usually 20–40% higher because of the battery — so a comprehensive EV policy often costs more overall.",
  },
  {
    q: "Does standard insurance cover the EV battery?",
    a: "Not always. Base comprehensive cover may exclude water ingress and consequential battery damage, and batteries face heavy depreciation on claims. A battery protection cover plus zero depreciation closes those gaps.",
  },
  {
    q: "How much does electric car insurance cost in India?",
    a: "A mainstream EV's comprehensive premium commonly falls between ₹10,000 and ₹50,000 a year, depending on the car's IDV, your city, claim history and the add-ons you choose.",
  },
  {
    q: "Which add-ons are essential for an EV?",
    a: "Zero depreciation and battery protection cover are close to essential; charger cover and roadside assistance are strongly recommended and inexpensive.",
  },
];

export const metadata: Metadata = {
  title: "Electric Car Insurance in India 2026: Costs, Add-Ons & Cover",
  description:
    "What electric car insurance costs in India in 2026 — the 15% third-party discount, why own-damage premiums run higher, battery and charger add-ons, and how to insure your EV the right way.",
  alternates: altsFor("/blog/ev-insurance-india", "en"),
  openGraph: {
    title: "Electric Car Insurance in India 2026: Costs, Add-Ons & Cover",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="ev-insurance-india">
      <p>
        Electric car insurance in India is one of those topics that looks simple until you read the
        fine print. On the surface, an EV is cheaper to insure — the government literally mandates a
        discount on part of your premium. But the same battery pack that makes an EV cost less to run
        also makes a chunk of the policy more expensive, and worse, it sits behind exclusions that
        catch many owners off guard. The result is that two buyers can pay wildly different amounts to
        protect the same car, depending entirely on which boxes they tick. This guide explains how EV
        insurance actually works in India in 2026, what it costs, and which add-ons genuinely earn
        their place.
      </p>

      <h2>Is insurance mandatory for an EV?</h2>
      <p>
        Yes — exactly as for any petrol or diesel car. Under the Motor Vehicles Act, every vehicle on
        an Indian road must carry at least third-party liability cover. That covers injury, death or
        property damage you cause to others; it does nothing for your own car. Almost everyone buying
        a new EV opts instead for a comprehensive policy, which bundles that mandatory third-party
        cover with own-damage protection for accidents, theft, fire and natural calamities. The
        important thing to understand early is that an EV policy is built from these same two halves —
        and the two halves behave very differently once electrons are involved.
      </p>

      <h2>The good news: a 15% discount on third-party premium</h2>
      <p>
        The insurance regulator, IRDAI, mandates a flat 15% discount on the third-party premium for
        all private electric vehicles, applied automatically. Third-party rates are set by the
        regulator and scale with the motor's power output rather than fuel use. As a rough guide for
        2026, a small EV up to 30 kW pays in the region of ₹1,780 a year for third-party cover, a
        mid-size EV between 30 and 65 kW around ₹2,900, and a powerful EV above 65 kW roughly ₹6,700 —
        each already lighter than the equivalent petrol car thanks to the rebate. The logic is policy
        encouragement: cleaner vehicle, cheaper mandatory cover. So far, so good.
      </p>

      <h2>The catch: own-damage premiums run higher</h2>
      <p>
        Here is where intuition breaks down. Despite the third-party discount, the own-damage portion
        of a comprehensive EV policy typically costs 20–40% more than for a comparable petrol car. The
        entire reason is one component: the battery pack, which can represent 40–60% of the car's total
        value. Insurers price own-damage cover off the car's Insured Declared Value (IDV), and because
        an EV carries an enormous, expensive, hard-to-repair part, a claim is far costlier to settle.
        A cracked battery casing or a flood-damaged pack can be a near-total loss on a part that would
        have no equivalent in a petrol car. So the net effect is a cheaper mandatory premium offset —
        often more than offset — by a dearer own-damage premium. In practice, a mainstream EV's full
        comprehensive premium commonly lands anywhere from ₹10,000 to ₹50,000 a year depending on IDV,
        city, claim history and add-ons.
      </p>
      <p>
        This is also why the running-cost maths of an EV deserves a complete view rather than a
        headline number. Insurance is just one line in the ledger alongside energy, servicing and
        resale, and our{" "}
        <Link href="/blog/cost-of-owning-an-electric-car-in-india">complete EV running-cost guide</Link>{" "}
        shows where the premium fits. Our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">5-year cost of ownership comparison</Link>{" "}
        puts all of those together so the insurance premium is seen in context rather than in
        isolation.
      </p>

      <h2>The battery trap most buyers miss</h2>
      <p>
        The single most important thing to know about EV insurance in India is this: a standard
        comprehensive policy may not fully protect the battery. Two specific gaps catch people out.
        First, water ingress — if you drive through a flooded street and water enters the pack, many
        base policies treat the resulting damage as consequential and exclude it unless you have the
        right add-on. Second, depreciation — under the regulator's framework, batteries attract heavy
        depreciation (commonly 50% after the early years), so even on an approved claim you could be
        asked to pay half the replacement cost out of pocket. On a part worth several lakh rupees, that
        is a brutal surprise. The fix exists, but you have to ask for it.
      </p>

      <h2>The add-ons that actually matter</h2>
      <p>
        Add-ons are where an EV policy is won or lost. A handful are close to essential, and skipping
        them to save a few thousand rupees a year can cost you lakhs at claim time.
      </p>
      <ul>
        <li>
          <strong>Zero depreciation:</strong> waives the depreciation deduction on parts — including
          the battery — so you receive the full replacement value rather than a depreciated payout.
          Roughly ₹2,500–6,000 a year, and the most valuable add-on you can buy for an EV.
        </li>
        <li>
          <strong>Battery protection cover:</strong> explicitly insures the pack against water ingress,
          charging surges and consequential damage that the base policy excludes. Around ₹1,500–4,000 a
          year.
        </li>
        <li>
          <strong>Charger / wall-box cover:</strong> protects your home charger against electrical
          surge, fire and theft — a cheap add-on (often ₹500–1,500 a year) for a unit that lives
          outdoors or in a shared parking area.
        </li>
        <li>
          <strong>Roadside assistance:</strong> particularly useful for an EV, since a flat battery on
          the road needs a flatbed tow rather than a jerry can or a jump-start.
        </li>
        <li>
          <strong>Return to invoice and consumables:</strong> the usual sensible extras that pay the
          full invoice value on a total loss and cover small consumable items at claim time.
        </li>
      </ul>
      <p>
        Stacked together, these add-ons typically run ₹4,800–12,300 a year on top of the base premium.
        That sounds like a lot until you weigh it against a single uninsured battery claim. If you want
        to see how an EV's overall economics still work out against petrol even after a fully loaded
        policy, run your own numbers through the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">EV vs petrol cost calculator</Link>.
      </p>

      <h2>What affects your EV premium</h2>
      <p>
        Several levers move the final figure. The car's IDV is the biggest — a higher declared value
        means a higher own-damage premium, which is why a premium long-range EV costs far more to
        insure than a city hatchback. Your city matters too, as metros with denser traffic and higher
        theft and flood risk carry steeper rates. A clean claim history earns a No Claim Bonus that can
        cut the own-damage premium by up to 50% over consecutive claim-free years, so resist making
        small claims you could absorb yourself. Battery capacity and motor power feed directly into the
        third-party slab. And, of course, the add-ons you choose. Keeping the battery healthy also
        protects your IDV and resale value over time — the same habits that{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">preserve battery health and resale value</Link>{" "}
        indirectly keep your future premiums sensible too.
      </p>

      <h2>How to insure your EV the right way</h2>
      <p>
        Start with a comprehensive policy, never bare third-party, given how much an EV is worth.
        Always add zero depreciation and a battery protection cover — treat these as non-negotiable
        rather than optional. Set your IDV honestly: lowballing it shaves a little off the premium but
        leaves you short at claim time. Read the battery clause specifically and confirm in writing
        that water damage and consequential damage to the pack are covered. Compare at least three or
        four insurers, because EV pricing and battery-clause wording still vary widely between them.
        And factor insurance into your buying decision from the start rather than as an afterthought —
        the same way you would weigh range or charging when you{" "}
        <Link href="/blog/how-to-choose-first-ev-india">choose your first EV</Link>.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The bottom line: EV insurance rewards owners who read past the headline discount. Buy
        comprehensive, add zero depreciation and battery protection, confirm the water-damage clause,
        and the premium becomes a manageable, predictable cost rather than a nasty surprise. When you
        are ready to shortlist a model and price its cover, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> or put two contenders head to
        head with the <Link href="/compare-electric-vehicles">EV comparison tool</Link>.
      </p>
    </ArticleShell>
  );
}
