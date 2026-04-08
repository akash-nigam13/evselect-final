import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import BlogGrid, { POSTS } from "@/components/blog/BlogGrid";
import { Rss } from "lucide-react";

/* ── SEO Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "EV Blog & Guides — EVSelect.in",
  description:
    "Expert EV buying guides, battery tech deep-dives, cost analyses, and India-specific charging infrastructure guides. Everything you need to make the right EV decision.",
  keywords: [
    "EV blog India",
    "electric vehicle guides India 2026",
    "EV battery tips India",
    "best electric scooter India",
    "petrol vs electric India",
  ],
  alternates: { canonical: "https://evselect.in/blog" },
  openGraph: {
    title: "EV Blog & Guides — EVSelect.in",
    description: "India's best EV research, buying guides, and battery tech explained.",
    type: "website",
    url: "https://evselect.in/blog",
  },
};

const POPULAR_TAGS = [
  "Solid-State",   "LFP Battery",  "Fast Charging", "Road Trip",
  "EV Subsidy",    "Range Anxiety","Battery Life",   "Best Scooter",
  "CCS2 Charger",  "TCO Analysis",
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* ── Page header ── */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">
                  Knowledge Base
                </p>
                <h1 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
                  EV <span className="text-gradient-cyan">Blog &amp; Guides</span>
                </h1>
                <p className="text-ev-text/55 font-body mt-3 max-w-lg leading-relaxed">
                  Research-backed articles on electric vehicles, battery technology, charging
                  infrastructure, and cost analysis — all written for the Indian market.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-ev-border bg-ev-card">
                  <Rss className="w-4 h-4 text-ev-cyan" />
                  <span className="font-display font-bold text-white text-sm">{POSTS.length}</span>
                  <span className="text-ev-muted text-xs font-body">articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Interactive grid */}
            <BlogGrid />

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6 sticky top-24">

              <AdPlaceholder format="rectangle" slot="6666666666" />

              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-white text-sm mb-4">Popular Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg border border-ev-border text-[11px] font-mono text-ev-muted hover:border-ev-cyan/30 hover:text-ev-cyan cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-white text-sm mb-4">In This Series</h2>
                <ul className="space-y-2">
                  {POSTS.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-2.5 text-xs font-body text-ev-muted hover:text-ev-cyan transition-colors group py-1"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-1.5 shrink-0 group-hover:bg-ev-cyan transition-colors"
                          style={{ backgroundColor: post.accent }}
                        />
                        <span className="leading-relaxed">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <AdPlaceholder format="rectangle" slot="7777777777" />

              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-ev-cyan/15 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-ev-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-white text-sm mb-2">Compare EVs</h2>
                <p className="text-ev-text/55 text-xs font-body leading-relaxed mb-4">
                  Use our side-by-side tool to compare any two electric vehicles on every spec that matters.
                </p>
                <Link
                  href="/compare"
                  className="block text-center py-2.5 rounded-xl text-xs font-display font-bold tracking-wide bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors duration-200"
                >
                  Open Compare Tool →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
