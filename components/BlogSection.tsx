import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AdPlaceholder from "./AdPlaceholder";
import { POSTS } from "@/lib/blog-posts";
import Reveal from "@/components/ui/Reveal";

export default function BlogSection() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = POSTS.filter((p) => p.slug !== featured.slug).slice(0, 3);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              Latest insights
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              EV <span className="text-gradient-brand">knowledge base</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="link-underline inline-flex items-center gap-1.5 font-body text-sm text-ev-muted transition-colors hover:text-brand"
          >
            All articles <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <AdPlaceholder format="leaderboard" slot="1234567890" className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link
              href={`/blog/${featured.slug}`}
              className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-card"
            >
              <div
                className="relative flex h-52 items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${featured.accent}14, transparent)` }}
              >
                <div
                  className="absolute select-none font-display text-[80px] font-bold leading-none opacity-[0.06]"
                  style={{ color: featured.accent }}
                >
                  EV
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(ellipse at 70% 50%, ${featured.accent}1f, transparent 70%)` }}
                />
                <span
                  className="relative z-10 rounded-full border px-3 py-1 font-mono text-xs"
                  style={{ color: featured.accent, borderColor: `${featured.accent}55`, background: `${featured.accent}12` }}
                >
                  FEATURED
                </span>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-3 flex items-center gap-4">
                  <span className="flex items-center gap-1 font-mono text-[10px] text-ev-muted">
                    <Tag className="h-2.5 w-2.5" /> {featured.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-ev-muted">
                    <Clock className="h-2.5 w-2.5" /> {featured.readTime} read
                  </span>
                  <span className="font-mono text-[10px] text-ev-muted/60">{featured.date}</span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-brand">
                  {featured.title}
                </h3>
                <p className="mb-4 font-body text-sm leading-relaxed text-ev-text/60">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-sm" style={{ color: featured.accent }}>
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover group flex flex-col gap-2 rounded-xl border border-ev-border bg-ev-card p-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded px-2 py-0.5 font-mono text-[10px]"
                      style={{ color: post.accent, background: `${post.accent}15` }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-ev-muted/70">
                      <Clock className="h-2.5 w-2.5" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-semibold leading-tight text-white transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-ev-text/50">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
            <AdPlaceholder format="rectangle" slot="0987654321" />
          </div>
        </div>
      </div>
    </section>
  );
}
