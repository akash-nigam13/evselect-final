import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/seo";
import { NEWS, type NewsCategory } from "@/lib/news";

export const metadata: Metadata = {
  alternates: altsFor("/news", "en"),
  title: "EV News & 2026 Launches in India",
  description:
    "A curated editorial timeline of electric-vehicle launches, policy moves, charging infrastructure and technology trends shaping India's EV landscape in 2026.",
};

const categoryStyles: Record<
  NewsCategory,
  { dot: string; chip: string; ring: string }
> = {
  Launch: {
    dot: "bg-brand",
    chip: "text-brand border-brand/40 bg-brand/10",
    ring: "ring-brand/30",
  },
  Policy: {
    dot: "bg-iris",
    chip: "text-iris border-iris/40 bg-iris/10",
    ring: "ring-iris/30",
  },
  Charging: {
    dot: "bg-volt",
    chip: "text-volt border-volt/40 bg-volt/10",
    ring: "ring-volt/30",
  },
  Technology: {
    dot: "bg-ev-amber",
    chip: "text-ev-amber border-ev-amber/40 bg-ev-amber/10",
    ring: "ring-ev-amber/30",
  },
  Market: {
    dot: "bg-brand",
    chip: "text-brand border-brand/40 bg-brand/10",
    ring: "ring-brand/30",
  },
};

export default function NewsPage() {
  const [featured, ...rest] = NEWS;
  const featuredStyle = categoryStyles[featured.category];

  return (
    <>
      <Navbar />

      <main className="bg-ev-bg text-ev-text">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroes/news.jpg"
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
              <Breadcrumbs items={[{ name: "News", path: "/news" }]} className="mb-6 justify-center" />
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brand">
                News &amp; Launches
              </p>
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl text-balance">
                India&apos;s EV story,{" "}
                <span className="text-gradient-brand">2026</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ev-text/70">
                The launches, policies, charging build-out and technology shifts
                moving India&apos;s electric-vehicle market this year — in a clean,
                scrollable timeline.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Featured / latest ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <article className="border-gradient relative overflow-hidden rounded-2xl bg-ev-card p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
              <div className="relative">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                    <Sparkles className="h-3.5 w-3.5" />
                    Latest
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] ${featuredStyle.chip}`}
                  >
                    {featured.category}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ev-muted">
                    {featured.date}
                  </span>
                  {featured.status && (
                    <span className="rounded-full border border-ev-border bg-ev-card-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ev-text/70">
                      {featured.status}
                    </span>
                  )}
                </div>
                <h2 className="max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/75">
                  {featured.summary}
                </p>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Ad */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="4040404040" />
        </div>

        {/* ── Timeline ── */}
        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="The timeline"
            title="What's happening across India's EV market"
            subtitle="Launches reference real, publicly known models; policy, charging, technology and market entries are general editorial summaries."
          />

          <div className="relative mt-12">
            {/* vertical line */}
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/40 via-ev-border to-transparent sm:left-[9px]"
            />

            <ol className="space-y-6">
              {rest.map((item, i) => {
                const s = categoryStyles[item.category];
                return (
                  <li key={item.id} className="relative pl-8 sm:pl-12">
                    {/* dot */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-2 h-4 w-4 rounded-full ring-4 ${s.dot} ${s.ring} sm:h-[18px] sm:w-[18px]`}
                    />
                    <Reveal delay={(i % 4) * 50}>
                      <article className="card-hover rounded-2xl border border-ev-border bg-ev-card p-6">
                        <div className="mb-3 flex flex-wrap items-center gap-2.5">
                          <span
                            className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${s.chip}`}
                          >
                            {item.category}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ev-muted">
                            {item.date}
                          </span>
                          {item.status && (
                            <span
                              className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
                                item.status === "Upcoming"
                                  ? "border-ev-amber/40 bg-ev-amber/10 text-ev-amber"
                                  : "border-ev-border bg-ev-card-2 text-ev-text/70"
                              }`}
                            >
                              {item.status}
                            </span>
                          )}
                          {item.tag && (
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ev-muted/70">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-ev-text/70">
                          {item.summary}
                        </p>
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* editorial note */}
          <Reveal>
            <p className="mt-10 font-body text-sm italic leading-relaxed text-ev-muted">
              Note: this is a curated editorial feed shown for illustration.
              Launch dates, prices, specifications and incentive details change
              frequently — always confirm the latest information with the
              manufacturer or an official source before making a decision.
            </p>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-ev-border bg-ev-surface/40 p-8 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  Curious about a model in the news?
                </h2>
                <p className="mt-1 font-body text-sm text-ev-text/70">
                  See full specs in the catalog or learn the basics first.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-3">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-display text-sm font-semibold text-ev-bg transition-transform hover:-translate-y-0.5"
                >
                  Browse catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/learn"
                  className="rounded-full border border-ev-border px-5 py-2.5 font-display text-sm font-semibold text-ev-text transition-colors hover:border-brand/50"
                >
                  EV 101
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
      <JsonLd
        data={collectionPageSchema(
          "EV News & 2026 Launches in India",
          "Latest electric vehicle launches, policy and charging news for India in 2026.",
          "/news",
        )}
      />
    </>
  );
}
