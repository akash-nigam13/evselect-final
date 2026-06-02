import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import CategoryNav from "@/components/blog/CategoryNav";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { POSTS, postsByDate } from "@/lib/blog-posts";
import { blogSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Blog & Guides — EVSelect.in",
  description:
    "Expert EV buying guides, battery tech deep-dives, cost analyses, charging guides and the latest India EV market news. Everything you need to make the right EV decision in 2026.",
  alternates: altsFor("/blog", "en"),
};

export default function BlogPage() {
  const ordered = postsByDate();
  const featured = ordered.find((p) => p.featured) ?? ordered[0];
  const rest = ordered.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ev-bg pt-16">
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} className="mb-6" />
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              Knowledge Base
            </p>
            <h1 className="mb-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              EV <span className="text-gradient-brand">Blog &amp; Guides</span>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-ev-text/55">
              Research-backed articles on EVs, battery technology, charging, costs, policy and the
              latest India EV market news — written buyer-first.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CategoryNav />

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <AdPlaceholder format="leaderboard" slot="5555555555" className="mb-10" />

              <Link
                href={`/blog/${featured.slug}`}
                className="card-hover group mb-10 flex flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-card md:flex-row"
              >
                <div className="relative h-52 flex-shrink-0 overflow-hidden md:h-auto md:w-[55%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/blog/${featured.slug}.png`}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-ev-border bg-ev-bg/80 px-3 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand">Featured</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <span
                      className="mb-4 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-[11px]"
                      style={{ color: featured.accent, background: `${featured.accent}15`, border: `1px solid ${featured.accent}30` }}
                    >
                      <Tag className="h-3 w-3" />
                      {featured.category}
                    </span>
                    <h2 className="mb-1 font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-brand">
                      {featured.title}
                    </h2>
                    <p className="mb-3 font-body text-sm text-ev-muted">{featured.subtitle}</p>
                    <p className="font-body text-sm leading-relaxed text-ev-text/60">{featured.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-ev-border/40 pt-4">
                    <div className="flex items-center gap-4 font-mono text-[11px] text-ev-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" style={{ color: featured.accent }} />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" style={{ color: featured.accent }} />
                        {featured.readTime} read
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 font-display text-sm font-bold transition-transform group-hover:translate-x-1" style={{ color: featured.accent }}>
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>

              <div className="grid gap-6 sm:grid-cols-2">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="5555555566" className="mt-10" />
            </div>

            <aside className="hidden flex-col gap-6 lg:sticky lg:top-24 lg:flex">
              <AdPlaceholder format="rectangle" slot="6666666666" />

              <div className="rounded-2xl border border-ev-border bg-ev-card p-5">
                <h2 className="mb-4 font-display text-sm font-bold text-white">All articles</h2>
                <ul className="space-y-3">
                  {ordered.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex items-start gap-2.5 font-body text-xs text-ev-muted transition-colors hover:text-brand"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: post.accent }} />
                        <span className="leading-relaxed">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand/20 bg-ev-card p-5">
                <p className="mb-2 font-display text-sm font-bold text-white">Compare EVs</p>
                <p className="mb-4 font-body text-xs leading-relaxed text-ev-text/55">
                  Side-by-side specs for any two electric vehicles.
                </p>
                <Link
                  href="/compare"
                  className="block rounded-xl bg-brand-gradient py-2.5 text-center font-display text-xs font-bold text-ev-bg"
                >
                  Open Compare Tool →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          blogSchema("/blog"),
          itemListSchema(POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))),
        ]}
      />
    </>
  );
}
