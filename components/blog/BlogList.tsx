"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ArrowRight, Clock, Calendar, Tag, X } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog-posts";
import { localeFromPath, localizedHref, t } from "@/lib/i18n";

/**
 * Client-side blog listing with live search.
 * `posts` must already be newest-first. When the search box is empty it shows
 * the featured article + grid; while searching it shows matching posts (and
 * never goes empty — falls back to all articles if nothing matches).
 */
export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const locale = localeFromPath(usePathname() || "/");
  const isHi = locale === "hi";
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  const matches = useMemo(() => {
    if (!query) return null;
    const hit = posts.filter((p) =>
      [p.title, p.hiTitle, p.subtitle, p.hiSubtitle, p.excerpt, p.hiExcerpt, p.category]
        .filter(Boolean)
        .some((s) => (s as string).toLowerCase().includes(query))
    );
    return hit;
  }, [query, posts]);

  const fTitle = isHi && featured.hiTitle ? featured.hiTitle : featured.title;
  const fSub = isHi && featured.hiSubtitle ? featured.hiSubtitle : featured.subtitle;
  const fExc = isHi && featured.hiExcerpt ? featured.hiExcerpt : featured.excerpt;

  return (
    <div>
      {/* Search bar */}
      <div className="mb-8 flex items-center gap-2 rounded-2xl border border-ev-border bg-ev-card px-4 py-3 focus-within:border-brand/60 focus-within:shadow-ev-glow-sm">
        <Search className="h-4 w-4 shrink-0 text-ev-muted" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("blog.search", locale)}
          className="w-full bg-transparent font-body text-sm text-ev-text outline-none placeholder:text-ev-muted"
        />
        {q && (
          <button onClick={() => setQ("")} aria-label="Clear" className="text-ev-muted transition-colors hover:text-brand">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {matches !== null ? (
        <>
          <p className="mb-6 font-mono text-xs text-ev-muted">
            {matches.length > 0
              ? t("blog.results", locale).replace("{n}", String(matches.length))
              : t("blog.noMatch", locale)}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {(matches.length > 0 ? matches : posts).map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Featured */}
          <Link
            href={localizedHref(`/blog/${featured.slug}`, locale)}
            className="card-hover group mb-10 flex flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-card md:flex-row"
          >
            <div className="relative h-52 flex-shrink-0 overflow-hidden md:h-auto md:w-[55%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/blog/${featured.slug}.png`} alt={fTitle} className="h-full w-full object-cover" />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-ev-border bg-ev-bg/80 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  {isHi ? "फ़ीचर्ड" : "Featured"}
                </span>
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
                  {fTitle}
                </h2>
                <p className="mb-3 font-body text-sm text-ev-muted">{fSub}</p>
                <p className="font-body text-sm leading-relaxed text-ev-text/60">{fExc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-ev-border/40 pt-4">
                <div className="flex items-center gap-4 font-mono text-[11px] text-ev-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" style={{ color: featured.accent }} />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" style={{ color: featured.accent }} />
                    {featured.readTime} {t("article.readWord", locale)}
                  </span>
                </div>
                <span
                  className="flex items-center gap-1.5 font-display text-sm font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: featured.accent }}
                >
                  {t("article.read", locale)} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
