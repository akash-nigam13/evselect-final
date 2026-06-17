import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import FaqAccordion from "@/components/FaqAccordion";
import { altsFor } from "@/lib/i18n";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is the interest rate on an electric car loan in India?",
    a: "In 2026, EV car loans broadly range from about 8.5% to 13% per annum. Public-sector green car loans sit at the lower end; your actual rate depends mainly on your credit score, the lender and the tenure.",
  },
  {
    q: "Can I still claim the ₹1.5 lakh 80EEB deduction in 2026?",
    a: "Only if your loan was sanctioned between 1 April 2019 and 31 March 2023. Loans taken after that date are not eligible unless the government reintroduces the benefit, and it applies only under the old tax regime.",
  },
  {
    q: "How much down payment do I need for an EV?",
    a: "Lenders finance roughly 80% to 100% of the price, so a 10–20% down payment is typical. A larger down payment lowers your EMI and can secure a better interest rate.",
  },
  {
    q: "What is the maximum loan tenure?",
    a: "Most car loans run up to seven years (84 months), with some EV schemes offering a little longer. A longer tenure means a lower EMI but more total interest paid.",
  },
];

export const metadata: Metadata = {
  title: "Electric Car Loan in India 2026: Interest Rates, EMI & 80EEB",
  description:
    "How an electric car loan works in India in 2026 — green car loan interest rates, how much banks finance, EMIs and tenure, foreclosure charges, and the Section 80EEB tax benefit most buyers misunderstand.",
  alternates: altsFor("/blog/electric-car-loan-india", "en"),
  openGraph: {
    title: "Electric Car Loan in India 2026: Interest Rates, EMI & 80EEB",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="electric-car-loan-india">
      <p>
        For most buyers, the question is never simply "should I go electric" — it is "can I afford the
        EMI." An electric car still costs more up front than a comparable petrol model, so how you
        finance it matters almost as much as which car you pick. The good news is that an electric car
        loan in India works much like any other car loan, and several banks now offer a dedicated
        lower-rate product for EVs. The slightly less good news is that one of the headline perks —
        the Section 80EEB tax deduction — is no longer available to new buyers the way most articles
        still claim. This guide walks through what an EV loan actually costs in 2026, how much you can
        borrow, what your EMI will look like, and where the real savings sit.
      </p>

      <h2>What a "green car loan" actually is</h2>
      <p>
        Most large lenders — SBI, HDFC Bank, ICICI Bank, Bank of Baroda, Bank of Maharashtra and
        others — now market a specific <strong>green car loan</strong> or EV loan. Mechanically it is
        an ordinary secured auto loan: the car is the collateral, you repay in fixed monthly EMIs, and
        the lender holds a lien until you clear the balance. What sets the green variant apart is
        usually a small interest-rate concession (often 5 to 25 basis points below the standard car
        loan), occasionally a waived or reduced processing fee, and in some cases a longer maximum
        tenure. SBI's Green Car Loan, for example, advertises a rate up to 20 basis points below its
        regular car loan. These differences are modest, but on a multi-lakh loan over several years
        they add up to real money.
      </p>

      <h2>EV loan interest rates in 2026</h2>
      <p>
        In mid-2026, electric car loan interest rates in India broadly sit in the{" "}
        <strong>8.5% to 13% per annum</strong> range. The exact figure you are offered depends on your
        credit profile, the lender, the loan amount and the tenure rather than on any single
        advertised "lowest rate." Public-sector banks such as SBI and Bank of Baroda tend to sit at
        the lower end, with green car loans starting around 8.5%, while private banks like HDFC Bank
        and ICICI Bank price slightly higher but often process faster and lend larger amounts. NBFCs
        and captive financiers (the lender arm of a carmaker) can be quicker still but usually charge
        more.
      </p>
      <p>
        Your <strong>credit score is the single biggest lever</strong> on the rate. Borrowers with a
        CIBIL score above 750 generally qualify for the advertised floor rates; below about 700, you
        will either pay a premium or be asked for a larger down payment. Before you apply, it is worth
        checking your score and clearing any small overdue balances, because a 1% difference in rate on
        a ₹15 lakh loan is roughly ₹50,000 over a five-year term.
      </p>

      <h2>How much will a bank actually finance?</h2>
      <p>
        EVs are often eligible for slightly higher loan-to-value funding than petrol cars. Most lenders
        finance <strong>80% to 100% of the ex-showroom or on-road price</strong>, and a few green car
        loan schemes advertise up to 100% on-road funding. In practice, putting down{" "}
        <strong>10% to 20% as a down payment</strong> is sensible: it shrinks your principal, lowers
        the EMI, and can earn you a better rate. It also keeps you from being "underwater" — owing more
        than the car is worth — in the early years, which matters more for EVs because depreciation and
        battery-health perceptions can soften resale value. If resale is on your mind, our guide to{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">EV resale value and battery health</Link>{" "}
        explains what actually holds value.
      </p>
      <p>
        One detail worth planning around: any purchase subsidy or road-tax waiver you qualify for
        directly reduces the on-road price, and therefore the principal you need to borrow. The
        incentive landscape varies sharply by state, so check what applies where you live using our{" "}
        <Link href="/ev-subsidies-india">EV subsidies and incentives guide</Link> before you finalise
        the loan amount.
      </p>

      <h2>EMI and tenure: what you'll pay each month</h2>
      <p>
        Car loan tenures in India run up to <strong>seven years (84 months)</strong>, and some EV
        schemes stretch a little longer. A longer tenure lowers the monthly EMI but increases the total
        interest you pay; a shorter tenure does the opposite. As a rough guide, at around 9% interest a
        loan costs roughly <strong>₹2,075 per month per ₹1 lakh borrowed over five years</strong>. So a
        ₹12 lakh loan over five years works out to about ₹24,900 a month, and the same amount over seven
        years drops to roughly ₹19,300 a month — but you pay noticeably more interest overall on the
        longer term.
      </p>
      <p>
        Rather than rely on rules of thumb, plug your own numbers — price, down payment, rate and
        tenure — into our{" "}
        <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link> to see the exact
        monthly figure and total interest for your chosen car. It is the fastest way to find a tenure
        that keeps the EMI comfortable without overpaying on interest.
      </p>

      <h2>The Section 80EEB tax benefit — and the catch</h2>
      <p>
        This is where most EV loan articles are out of date. Section 80EEB of the Income Tax Act allows
        a deduction of up to <strong>₹1.5 lakh on the interest</strong> paid on a loan taken to buy an
        electric vehicle. The crucial condition, though, is the sanction date: the loan must have been{" "}
        <strong>sanctioned between 1 April 2019 and 31 March 2023</strong>. That window has closed. If
        you are taking a fresh EV loan in 2026, you{" "}
        <strong>cannot start a new 80EEB claim</strong> unless the government revives the provision in a
        future budget. Buyers who took a qualifying loan inside the original window can keep claiming
        the deduction each year until that loan is fully repaid — but a 2026 borrower starting today
        does not get it.
      </p>
      <p>
        There is one more caveat even for eligible borrowers: 80EEB is a deduction under the old tax
        regime, so it offers nothing if you have opted for the new regime. Treat any "save ₹1.5 lakh on
        tax" headline with healthy scepticism, and if your purchase has a genuine business use, ask a
        chartered accountant about claiming the EV as a business asset instead — that route can still be
        valid where 80EEB no longer applies. This is general information, not tax advice, so confirm
        your own position with a qualified professional before counting on any deduction.
      </p>

      <h2>How to get the lowest rate</h2>
      <p>
        A few practical moves make a measurable difference. Compare at least three lenders — a
        public-sector bank, a private bank and your carmaker's finance partner — because the gap between
        the best and worst offer on the same car is often more than a full percentage point. Ask
        specifically for the <strong>green car loan</strong> product rather than the standard auto loan,
        since the concession is not always offered unprompted. Watch the fine print on{" "}
        <strong>processing fees</strong> (typically ₹3,000 to ₹10,000 or a small percentage) and{" "}
        <strong>foreclosure or prepayment charges</strong>, which can claw back the headline saving if
        you plan to close the loan early. And remember that the loan is only one slice of ownership
        cost: pair this with our{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">5-year petrol-vs-electric cost analysis</Link>{" "}
        to see how the EMI, energy and servicing add up against a petrol car over time.
      </p>

      <h2>FAQ</h2>
      <FaqAccordion items={faqs} className="my-6" />
      <p>
        The bottom line: an electric car loan in 2026 is cheap to service and easy to arrange, but the
        real savings come from a strong credit score, a sensible down payment, and choosing the right
        car rather than from a tax break that most new buyers can no longer claim. When you are ready to
        shortlist, browse the{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link> and run your shortlist through
        the <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link> to lock in an EMI
        you are comfortable with.
      </p>
    </ArticleShell>
  );
}
