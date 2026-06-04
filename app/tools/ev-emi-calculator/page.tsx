import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import AdPlaceholder from "@/components/AdPlaceholder";
import EmiCalculator from "@/components/tools/EmiCalculator";
import ToolsCTA from "@/components/ToolsCTA";
import { altsFor } from "@/lib/i18n";
import { webPageSchema, webAppSchema, faqPageSchema } from "@/lib/seo";

const TITLE = "EV Loan EMI Calculator (India 2026) — Monthly Payment | EVSelect.in";
const DESC =
  "Free EV loan EMI calculator for India. Enter the EV's on-road price, your down payment, interest rate and tenure to see your exact monthly EMI and total interest — built for 2026 EV buyers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: altsFor("/tools/ev-emi-calculator", "en"),
  openGraph: {
    title: "EV Loan EMI Calculator (India 2026) — Monthly Payment",
    type: "website",
  },
};

const faqs = [
  {
    q: "How is EV EMI calculated?",
    a: "Your EMI is calculated from three inputs: the loan principal (on-road price minus down payment), the monthly interest rate (the annual rate divided by 12), and the tenure in months. The standard reducing-balance formula is EMI = P·r·(1+r)^n ÷ ((1+r)^n − 1), where P is the principal, r is the monthly rate and n is the number of monthly instalments. Each EMI pays off some interest and some principal, with the interest portion shrinking over time.",
  },
  {
    q: "What interest rate do EV loans have in India?",
    a: "EV car loan rates in India are typically in the region of 9–11% per annum, broadly in line with regular car loans, and the exact rate depends on the lender, your credit score, the loan amount and tenure. Some banks and EV-focused lenders occasionally run lower 'green vehicle' rates. Always treat any quoted rate as indicative and confirm the final figure with your bank or dealer before signing.",
  },
  {
    q: "How much down payment is ideal?",
    a: "There is no single right answer, but a down payment of around 15–25% of the on-road price is common and keeps your EMI and total interest manageable. A larger down payment lowers the principal, which reduces both your monthly EMI and the total interest you pay over the loan. Just make sure you keep enough cash aside for insurance, accessories and an emergency buffer.",
  },
  {
    q: "Does an EV subsidy reduce my EMI?",
    a: "Indirectly, yes. A subsidy, road-tax waiver or the 5% GST advantage lowers the on-road price of the EV. A lower on-road price means a smaller loan principal (for the same down payment), which in turn reduces your EMI and total interest. The subsidy itself is not a separate EMI discount — it works by cutting the price you finance.",
  },
  {
    q: "What loan tenure is best?",
    a: "It is a trade-off. A longer tenure (say 5–7 years) lowers your monthly EMI but increases the total interest you pay. A shorter tenure (2–3 years) means higher EMIs but far less interest overall. Pick the longest tenure you are comfortable with for cash flow, then prepay when you can to cut the interest — but always confirm whether your lender charges prepayment fees.",
  },
  {
    q: "Can I get 100% financing on an EV?",
    a: "Full 100% on-road financing is uncommon. Most lenders finance the ex-showroom or on-road value up to a loan-to-value limit and expect you to fund the rest, plus insurance and registration, as a down payment. Some promotional schemes advertise high financing, but the effective rate or processing fees may be higher, so read the terms carefully.",
  },
  {
    q: "Should I include insurance and accessories in the loan?",
    a: "You can in some cases, but financing add-ons increases your principal and therefore your interest cost. If your budget allows, it is usually cheaper to pay for the first-year insurance and accessories upfront and keep the loan limited to the vehicle's on-road price.",
  },
  {
    q: "Will prepaying my EV loan save money?",
    a: "Almost always, because interest is charged on the outstanding balance. Prepaying lump sums, or increasing your EMI, reduces the principal faster and cuts total interest. Check your loan agreement first — floating-rate loans to individuals typically have no prepayment penalty, but it is worth confirming with your lender.",
  },
];

export default function EvEmiCalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Tools", path: "/tools" },
                { name: "EV EMI Calculator", path: "/tools/ev-emi-calculator" },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-brand">
              Free Tool
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              EV Loan EMI Calculator
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              Work out the monthly EMI on your electric vehicle loan in seconds.
              Enter the on-road price, your down payment, interest rate and
              tenure to see your exact monthly payment and the total interest
              you&apos;ll pay over the loan.
            </p>
          </div>
        </section>

        {/* ─── Interactive tool ─────────────────────────────── */}
        <section id="emi" className="scroll-mt-24">
          <EmiCalculator />
        </section>

        {/* Ad */}
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333355" />
        </div>

        {/* ─── Content ──────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              How EV loan EMI is calculated
            </h2>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              An EMI (Equated Monthly Instalment) is the fixed amount you pay
              your lender every month until the loan is repaid. It is built from
              three things: the <strong className="text-white">principal</strong>{" "}
              (the amount you actually borrow, which is the EV&apos;s on-road
              price minus your down payment), the{" "}
              <strong className="text-white">monthly interest rate</strong> (your
              annual rate divided by 12), and the{" "}
              <strong className="text-white">tenure in months</strong> (a 5-year
              loan is 60 months).
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              Lenders use the reducing-balance formula:
            </p>
            <p className="rounded-xl border border-ev-border bg-ev-card px-5 py-4 text-center font-mono text-sm text-white">
              EMI = P·r·(1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)
            </p>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              Here <strong className="text-white">P</strong> is the principal,{" "}
              <strong className="text-white">r</strong> is the monthly interest
              rate as a decimal (for example, 10% a year is 0.10 ÷ 12 ≈ 0.00833
              per month), and <strong className="text-white">n</strong> is the
              number of monthly instalments. Although your EMI stays the same
              each month, the split changes: early instalments are mostly
              interest, while later ones pay down more principal. That is why
              prepaying early in the loan saves the most.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              What affects your EMI
            </h2>
            <h3 className="font-display text-lg font-bold text-white">
              Down payment
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              The more you pay upfront, the smaller the principal you finance —
              and a smaller principal means a lower EMI and less total interest.
              Even a modest increase in your down payment can noticeably shrink
              your monthly outgo.
            </p>
            <h3 className="font-display text-lg font-bold text-white">
              Interest rate
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              EV car loan rates in India are typically around 9–11% per annum,
              though the exact figure depends on the lender, your credit profile
              and the loan amount and tenure. A difference of even one percentage
              point can change your total interest by a meaningful amount over a
              multi-year loan, so it pays to shop around. Treat any rate you see
              as indicative until your bank confirms it.
            </p>
            <h3 className="font-display text-lg font-bold text-white">
              Tenure
            </h3>
            <p className="font-body text-base leading-relaxed text-ev-text/70">
              Tenure is the classic trade-off. Stretching the loan over more
              months lowers each EMI, which eases monthly cash flow — but you end
              up paying interest for longer, so the total cost rises. A shorter
              tenure does the opposite: higher EMIs, but far less interest in
              total. Use the calculator above to feel the difference at different
              tenures before you decide.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Tips to lower your EMI
            </h2>
            <ul className="space-y-3 font-body text-base leading-relaxed text-ev-text/70">
              <li>
                • <strong className="text-white">Put down a bigger down
                payment.</strong> Reducing the principal is the most direct way
                to cut both your EMI and the total interest you pay.
              </li>
              <li>
                • <strong className="text-white">Choose a shorter tenure if you
                can afford it.</strong> Higher monthly EMIs sting, but you save
                substantially on interest over the life of the loan.
              </li>
              <li>
                • <strong className="text-white">Compare lenders.</strong> Banks,
                NBFCs and EV-focused financiers price differently. A lower rate
                or waived processing fee can save more than you expect.
              </li>
              <li>
                • <strong className="text-white">Factor in subsidies and
                waivers.</strong> A state purchase subsidy, road-tax waiver or
                the 5% GST advantage lowers the on-road price — and a lower price
                means a smaller loan and a smaller EMI.
              </li>
              <li>
                • <strong className="text-white">Prepay when you can.</strong>{" "}
                Lump-sum prepayments reduce the outstanding principal and cut
                interest, especially in the early years. Just check for any
                prepayment charges first.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <div className="rounded-2xl border border-brand/25 bg-ev-card p-6">
              <p className="font-body text-base leading-relaxed text-ev-text/70">
                Want to lower the price you finance in the first place? Read our{" "}
                <Link href="/ev-subsidies-india" className="text-brand hover:underline">
                  EV subsidies &amp; incentives guide
                </Link>{" "}
                to see what cuts your on-road price. To check whether the EV pays
                for itself in running costs, try the{" "}
                <Link
                  href="/tools/ev-vs-petrol-cost-calculator"
                  className="text-brand hover:underline"
                >
                  EV vs petrol cost calculator
                </Link>
                . And to pick the right model before you borrow, line a few up in
                the{" "}
                <Link href="/compare" className="text-brand hover:underline">
                  compare tool
                </Link>
                .
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <p className="mt-8 font-body text-sm leading-relaxed text-ev-muted">
            This calculator gives an indicative estimate, not financial advice.
            Your actual EMI, interest rate and eligibility depend on the lender —
            always confirm the final figures with your bank or dealer before you
            commit.
          </p>

          <ToolsCTA
            locale="en"
            tools={["cost", "compare", "range"]}
            className="my-8"
          />
        </div>
      </main>

      <Footer />
      <JsonLd
        data={[
          webPageSchema(TITLE, DESC, "/tools/ev-emi-calculator"),
          webAppSchema("EV EMI Calculator", DESC, "/tools/ev-emi-calculator"),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
