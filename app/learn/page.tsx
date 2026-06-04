import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import {
  Zap,
  BatteryCharging,
  Plug,
  IndianRupee,
  Landmark,
  Wrench,
  ArrowRight,
  Cpu,
  Gauge,
  RotateCcw,
  Home,
  Clock,
  Lightbulb,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsCTA from "@/components/ToolsCTA";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { collectionPageSchema, definedTermSetSchema } from "@/lib/seo";
import Glossary from "@/components/learn/Glossary";

export const metadata: Metadata = {
  alternates: altsFor("/learn", "en"),
  title: "EV 101 — Learn About Electric Vehicles in India",
  description:
    "New to electric vehicles? Understand how EVs work, battery and charging basics, real running costs, government incentives and ownership — explained simply for India in 2026.",
};

const startHere = [
  {
    icon: Zap,
    accent: "#26E0C4",
    title: "How EVs work",
    body: "An electric vehicle stores energy in a battery and uses an electric motor to drive the wheels — no engine, gears or fuel. Fewer moving parts means quieter, smoother driving and less to maintain.",
    href: undefined as string | undefined,
    link: undefined as string | undefined,
  },
  {
    icon: BatteryCharging,
    accent: "#8B7BFF",
    title: "Battery basics (kWh & range)",
    body: "Battery size is measured in kWh — the bigger the number, the more range. Claimed (ARAI/MIDC) range is a lab figure; expect roughly 25–35% less in real driving with AC and highway speeds.",
    href: "/about-ev-batteries",
    link: "Deep-dive into batteries",
  },
  {
    icon: Plug,
    accent: "#C6F94E",
    title: "Charging explained",
    body: "Charge slowly at home on AC (3.3–11 kW) or rapidly in public on DC (typically 25–150 kW). Cars use a Type 2 plug for AC and CCS2 for DC fast charging; two-wheelers usually charge from a regular socket.",
    href: undefined,
    link: undefined,
  },
  {
    icon: IndianRupee,
    accent: "#26E0C4",
    title: "Costs & savings",
    body: "EVs cost more upfront but far less to run — electricity is much cheaper per km than petrol, and maintenance is lower. Use our calculator to estimate your real running cost and break-even.",
    href: "/tools#cost",
    link: "Open the cost calculator",
  },
  {
    icon: Landmark,
    accent: "#8B7BFF",
    title: "Government incentives",
    body: "Central support (the PM E-Drive scheme, successor to FAME) plus state subsidies, road-tax and registration waivers can lower the price — mostly for two- and three-wheelers and buses. These change often, so confirm current terms locally.",
    href: undefined,
    link: undefined,
  },
  {
    icon: Wrench,
    accent: "#FFC247",
    title: "Maintenance & ownership",
    body: "No oil changes, no clutch, fewer wearing parts. Regen braking even reduces brake wear. The main long-term consideration is the battery, which carries a separate, longer warranty on most EVs.",
    href: undefined,
    link: undefined,
  },
];

const howItWorks = [
  {
    icon: BatteryCharging,
    title: "1 · The battery",
    body: "A large lithium-ion pack (LFP or NMC) stores energy you top up by charging. It usually sits low in the floor, lowering the centre of gravity for stable handling.",
  },
  {
    icon: Cpu,
    title: "2 · Power electronics",
    body: "An inverter and controller convert and meter the battery's DC power, deciding exactly how much energy reaches the motor every moment you press the accelerator.",
  },
  {
    icon: Gauge,
    title: "3 · The motor & wheels",
    body: "The electric motor delivers instant torque to the wheels — no gear changes, so acceleration is smooth and immediate from a standstill.",
  },
  {
    icon: RotateCcw,
    title: "4 · Regen braking",
    body: "Lift off or brake and the motor spins backwards as a generator, slowing the car while returning energy to the battery — recovering range in stop-go traffic.",
  },
];

export default function LearnPage() {
  return (
    <>
      <Navbar />

      <main className="bg-ev-bg text-ev-text">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroes/learn.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ev-bg via-ev-bg/60 to-ev-bg/20"
          />
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <Reveal className="mx-auto max-w-3xl text-center">
              <Breadcrumbs items={[{ name: "Learn", path: "/learn" }]} className="mb-6 justify-center" />
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brand">
                EV 101
              </p>
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl text-balance">
                Everything you need to{" "}
                <span className="text-gradient-brand">understand EVs</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ev-text/70">
                Thinking about going electric in India? Start here. No jargon, no
                hype — just clear, honest answers to how electric vehicles work,
                what they cost to run, and how charging really fits into everyday
                life in 2026.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#start-here"
                  className="rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-ev-bg shadow-ev-glow-sm transition-transform hover:-translate-y-0.5"
                >
                  Start learning
                </Link>
                <Link
                  href="#glossary"
                  className="rounded-full border border-ev-border px-6 py-3 font-display text-sm font-semibold text-ev-text transition-colors hover:border-brand/50"
                >
                  Jump to jargon buster
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Start here ── */}
        <section
          id="start-here"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Start here"
            title="Six things every new EV buyer should know"
            subtitle="Quick, plain-language primers on the topics that matter most. Tap through to deeper tools and guides where you need them."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {startHere.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 60}>
                  <SpotlightCard accent={c.accent} className="h-full">
                    <div className="flex h-full flex-col p-6">
                      <span
                        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ev-border bg-ev-card-2"
                        style={{ color: c.accent }}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {c.title}
                      </h3>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ev-text/70">
                        {c.body}
                      </p>
                      {c.href && c.link && (
                        <Link
                          href={c.href}
                          className="link-underline mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-brand"
                        >
                          {c.link}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Ad */}
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3030303030" />
        </div>

        {/* ── How an EV works ── */}
        <section className="relative overflow-hidden border-y border-ev-border/60 bg-ev-surface/40">
          <Aurora variant="brand" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How an EV works"
              title="From battery to wheels, in four steps"
              subtitle="An EV is mechanically simpler than a petrol car. Energy flows in one direction when you drive — and partly back when you slow down."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 70}>
                    <div className="card-hover h-full rounded-2xl border border-ev-border bg-ev-card p-6">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-ev-bg">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ev-text/70">
                        {s.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={120}>
              <p className="mx-auto mt-10 max-w-3xl text-center font-body text-sm leading-relaxed text-ev-muted">
                Because there is no engine, gearbox, clutch or exhaust, an EV has
                dramatically fewer moving parts than a combustion car. That is the
                root of nearly every EV advantage — instant response, near-silent
                running, low maintenance and high efficiency.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Charging 101 ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Charging 101"
            title="How (and where) EVs actually charge"
            subtitle="Most charging happens slowly overnight at home; fast charging is for topping up on the go. Here's the difference."
          />

          {/* AC vs DC comparison */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ev-border bg-ev-card p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ev-border bg-ev-card-2 text-brand">
                    <Home className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      AC charging
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                      Slow · Home & workplace
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-ev-text/70">
                  Uses alternating current from a wall box, typically{" "}
                  <span className="text-ev-text">3.3–11 kW</span>. The car's
                  onboard charger converts it to DC. It's the cheapest, gentlest
                  way to charge — plug in overnight and wake up full.
                </p>
                <ul className="mt-5 space-y-2 font-body text-sm text-ev-text/70">
                  <li className="flex items-start gap-2">
                    <Plug className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>Cars use a <span className="text-ev-text">Type 2</span> connector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>Roughly <span className="text-ev-text">6–10 hrs</span> for a full car charge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>Scooters &amp; bikes charge from a normal 3-pin socket</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-volt/30 bg-ev-card p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ev-border bg-ev-card-2 text-volt">
                    <Zap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      DC fast charging
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-volt">
                      Rapid · Public stations
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-ev-text/70">
                  Feeds DC straight to the battery at high power — typically{" "}
                  <span className="text-ev-text">25–150 kW</span> in India (more
                  on premium cars). Best for highway stops and quick top-ups, not
                  daily use.
                </p>
                <ul className="mt-5 space-y-2 font-body text-sm text-ev-text/70">
                  <li className="flex items-start gap-2">
                    <Plug className="mt-0.5 h-4 w-4 flex-shrink-0 text-volt" />
                    <span>Cars use a <span className="text-ev-text">CCS2</span> connector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-volt" />
                    <span>About <span className="text-ev-text">20–60 min</span> for 10→80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gauge className="mt-0.5 h-4 w-4 flex-shrink-0 text-volt" />
                    <span>Charging slows above ~80% to protect the battery</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Tips */}
          <Reveal delay={120}>
            <div className="mt-6 rounded-2xl border border-ev-border bg-ev-surface/40 p-7">
              <div className="mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-ev-amber" />
                <h3 className="font-display text-base font-semibold text-white">
                  Practical charging tips
                </h3>
              </div>
              <div className="grid gap-x-8 gap-y-3 font-body text-sm leading-relaxed text-ev-text/70 sm:grid-cols-2">
                <p>
                  <span className="text-ev-text">Charge at home for daily use.</span>{" "}
                  Most people drive far less than their range each day — an
                  overnight AC top-up usually covers it.
                </p>
                <p>
                  <span className="text-ev-text">For everyday charging,</span> many
                  makers suggest keeping the battery between roughly 20% and 80–90%
                  to help long-term health (LFP packs tolerate full charges well).
                </p>
                <p>
                  <span className="text-ev-text">Plan long trips around fast chargers.</span>{" "}
                  Check charger location and power before you set off, and have a
                  backup stop in mind.
                </p>
                <p>
                  <span className="text-ev-text">Heat and high speed cut range.</span>{" "}
                  AC use, fast highway driving and a full load all reduce real-world
                  range below the claimed figure.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Jargon buster / Glossary ── */}
        <section
          id="glossary"
          className="relative overflow-hidden border-y border-ev-border/60 bg-ev-surface/40"
        >
          <Aurora variant="iris" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Jargon buster"
              title="EV terms, decoded"
              subtitle="Search the glossary or tap any term to expand its plain-English definition."
            />
            <div className="mt-12">
              <Glossary />
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="border-gradient relative overflow-hidden rounded-2xl bg-ev-card p-10 text-center sm:p-14">
              <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                  Feeling ready? Find your{" "}
                  <span className="text-gradient-brand">first EV</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-ev-text/70">
                  Browse every electric car, scooter and bike on sale in India, or
                  put two models head-to-head to see which fits your budget and
                  range needs.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/catalog"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-ev-bg shadow-ev-glow-sm transition-transform hover:-translate-y-0.5"
                  >
                    Browse the catalog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/compare"
                    className="rounded-full border border-ev-border px-6 py-3 font-display text-sm font-semibold text-ev-text transition-colors hover:border-brand/50"
                  >
                    Compare two EVs
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <ToolsCTA locale="en" tools={["compare", "emi", "cost", "range"]} className="mt-12" />
        </div>
      </main>

      <Footer />
      <JsonLd
        data={[
          collectionPageSchema(
            "EV 101 — Learn About Electric Vehicles",
            "Beginner-friendly guides to EV batteries, charging, costs and jargon for India.",
            "/learn",
          ),
          definedTermSetSchema("/learn"),
        ]}
      />
    </>
  );
}
