import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Calculator,
  Gauge,
  BookOpen,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "EV 101 — Learn Hub",
    desc: "New to electric? Understand batteries, charging, jargon and incentives in plain language.",
    href: "/ev-guides",
    accent: "#26E0C4",
    cta: "Start learning",
  },
  {
    icon: Calculator,
    title: "Cost Calculator",
    desc: "See exactly how much you'd save vs petrol over 5 years, based on your real usage.",
    href: "/ev-calculators#cost",
    accent: "#C6F94E",
    cta: "Calculate savings",
  },
  {
    icon: Gauge,
    title: "Range Estimator",
    desc: "Get a realistic range for any EV based on driving style, AC, terrain and temperature.",
    href: "/ev-calculators#range",
    accent: "#8B7BFF",
    cta: "Estimate range",
  },
  {
    icon: BookOpen,
    title: "Battery Deep-Dive",
    desc: "How EV batteries survive India's 45°C summers — and how to make yours last 10+ years.",
    href: "/about-ev-batteries",
    accent: "#FFC247",
    cta: "Read the guide",
  },
];

export default function BatteryTeaser() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Learn & tools"
        title={<>More than specs — <span className="text-gradient-brand">real understanding</span></>}
        subtitle="Guides and interactive tools that turn EV jargon into confident decisions."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <Link
              href={it.href}
              className="card-hover group flex h-full flex-col rounded-2xl border border-ev-border bg-ev-card p-6"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${it.accent}1a`, color: it.accent }}
              >
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-white">
                {it.title}
              </h3>
              <p className="mb-5 font-body text-sm leading-relaxed text-ev-text/55">
                {it.desc}
              </p>
              <span
                className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs font-medium"
                style={{ color: it.accent }}
              >
                {it.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
