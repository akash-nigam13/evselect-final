import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "How Long Does an EV Battery Last? Lifespan, the 80% Rule & Charging Habits (2026) | EVSelect.in",
  description:
    "How long does an EV battery last in India? EV battery lifespan explained — what happens after 8 years, the 80% charging rule, whether you can charge twice a day, and how to extend battery life.",
  alternates: altsFor("/blog/ev-battery-lifespan-india", "en"),
  openGraph: { title: "How Long Does an EV Battery Last? Lifespan, 80% Rule & Charging Habits", type: "article" },
};

const faqs = [
  { q: "What is the lifespan of an EV battery?", a: "Most modern EV batteries last about 8–15 years or roughly 1,500–2,000 charge cycles, which translates to well over 1.5–2 lakh km for typical use. They degrade gradually rather than failing suddenly, and most are backed by an 8-year / 1.6 lakh km warranty in India." },
  { q: "What happens to an EV after 8 years?", a: "After 8 years, an EV keeps working — the battery simply retains slightly less capacity (commonly 70–85% of original), so range drops modestly. The 8-year mark is typically when the battery warranty ends, not when the battery stops working. Many packs run well beyond a decade." },
  { q: "What is the 80% rule for EVs?", a: "The 80% rule means charging your EV to about 80% for daily use rather than 100%, and avoiding letting it drop very low. Keeping the battery roughly between 20% and 80% reduces stress on the cells and slows long-term degradation. Charge to 100% only before long trips." },
  { q: "Can I charge my EV twice a day?", a: "Yes, you can charge an EV twice a day with no harm, especially on slower AC home charging. Frequent top-ups are actually gentler on the battery than deep discharges. Just avoid repeatedly using high-power DC fast charging to 100% every time, as that adds more heat and stress." },
  { q: "How can I extend my EV battery life?", a: "Charge mostly to 80%, avoid running to near-empty, prefer slower AC charging for daily use, park in shade in summer, and limit very frequent DC fast charging. India's heat is the biggest stressor, so thermal care matters most." },
];

export default function Page() {
  return (
    <ArticleShell slug="ev-battery-lifespan-india">
      <p>
        Battery anxiety is the most common worry for new EV buyers in India — how
        long it lasts, what happens after the warranty, and whether your charging
        habits will wear it out. The short version: modern EV batteries are
        engineered to last the life of the car for most owners. Here&apos;s the
        detail, including the 80% rule and whether you can charge twice a day. For
        India-specific heat advice, also read our{" "}
        <Link href="/blog/ev-battery-life-india-weather">EV battery life in Indian weather</Link> guide.
      </p>

      <h2>How long does an EV battery last?</h2>
      <p>
        Most EV batteries last about 8–15 years, or roughly 1,500–2,000 charge
        cycles — comfortably more than 1.5–2 lakh km for typical driving. They lose
        capacity gradually rather than failing outright, and Indian EVs usually carry
        an 8-year / 1.6 lakh km battery warranty. This longevity is a big reason EVs
        can be cheaper to own — see the{" "}
        <Link href="/blog/petrol-vs-electric-5-year-cost-india">5-year cost analysis</Link>.
      </p>

      <h2>What happens to an EV after 8 years?</h2>
      <p>
        After 8 years your EV keeps running — the battery simply holds slightly less
        charge, commonly 70–85% of its original capacity, so range falls modestly.
        The 8-year mark is when the warranty typically ends, not the battery. Many
        packs serve well beyond a decade, and battery health is a key factor in{" "}
        <Link href="/blog/ev-resale-value-battery-health-india">EV resale value</Link>.
      </p>

      <h2>What is the 80% rule for EVs?</h2>
      <p>
        The 80% rule is simple: for daily use, charge to around 80% rather than 100%,
        and avoid regularly draining the battery to very low levels. Keeping the
        charge roughly between 20% and 80% reduces stress on the cells and slows
        degradation. Charge to 100% only when you need the full range for a long trip.
      </p>

      <h2>Can I charge my EV twice a day?</h2>
      <p>
        Yes — charging twice a day is perfectly fine and won&apos;t harm the battery,
        especially on slower AC home charging. Frequent partial top-ups are gentler
        on cells than deep discharges. The only habit to limit is repeatedly fast-
        charging (DC) to 100%, which adds heat and stress over time. Our{" "}
        <Link href="/blog/home-ev-charging-cost-india">home charging cost guide</Link>{" "}
        shows how cheap regular top-ups are.
      </p>

      <h2>How to extend your EV battery life</h2>
      <p>
        Charge mainly to 80%, avoid running near-empty, prefer AC charging for daily
        use, park in shade during summer, and limit very frequent DC fast charging.
        In India&apos;s climate, managing heat is the single most important thing you
        can do for long battery life.
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

      <JsonLd data={faqPageSchema(faqs)} />
    </ArticleShell>
  );
}
