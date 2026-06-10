"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search, X, BookOpen, BatteryCharging, Plug, Coins, Gauge, Landmark, Newspaper, Building2,
} from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import BlogCarousel from "@/components/blog/BlogCarousel";
import { CATEGORIES, type BlogPost } from "@/lib/blog-posts";
import { localeFromPath, localizedHref, t } from "@/lib/i18n";

const CAT_ICON: Record<string, typeof BookOpen> = {
  "buying-guide": BookOpen,
  "battery-tech": BatteryCharging,
  "charging": Plug,
  "cost-ownership": Coins,
  "range-efficiency": Gauge,
  "policy-incentives": Landmark,
  "market-news": Newspaper,
  "brand-guides": Building2,
};

export default function BlogHome({ posts }: { posts: BlogPost[] }) {
  const locale = localeFromPath(usePathname() || "/");
  const isHi = locale === "hi";
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const cats = useMemo(
    () =>
      CATEGORIES.map((c) => ({
        ...c,
        count: posts.filter((p) => p.categorySlug === c.slug).length,
      })).filter((c) => c.count > 0),
    [posts]
  );

  const topCats = useMemo(
    () => [...cats].sort((a, b) => b.count - a.count).slice(0, 3),
    [cats]
  );

  const matches = useMemo(() => {
    if (!query) return null;
    return posts.filter((p) =>
      [p.title, p.hiTitle, p.subtitle, p.hiSubtitle, p.excerpt, p.hiExcerpt, p.category]
        .filter(Boolean)
        .some((s) => (s as string).toLowerCase().includes(query))
    );
  }, [query, posts]);

  return (
    <div>
      {/* Search */}
      <div className="flex items-center gap-2 rounded-2xl border border-ev-border bg-ev-card px-4 py-3 focus-within:border-brand/60 focus-within:shadow-ev-glow-sm">
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
        <div className="mt-8">
          <p className="mb-6 font-mono text-xs text-ev-muted">
            {matches.length > 0
              ? t("blog.results", locale).replace("{n}", String(matches.length))
              : t("blog.noMatch", locale)}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(matches.length > 0 ? matches : posts).map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Category cards — prominent, first fold */}
          <div className="mt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ev-muted">
              {isHi ? "श्रेणी से ब्राउज़ करें" : "Browse by category"}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {cats.map((c) => {
                const Icon = CAT_ICON[c.slug] ?? BookOpen;
                return (
                  <Link
                    key={c.slug}
                    href={localizedHref(`/blog/category/${c.slug}`, locale)}
                    className="card-hover group flex items-center gap-3 rounded-xl border border-ev-border bg-ev-card p-4"
                    style={{ borderLeft: `3px solid ${c.accent}` }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${c.accent}1a`, color: c.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display text-sm font-bold text-white transition-colors group-hover:text-brand">
                        {c.label}
                      </span>
                      <span className="block font-mono text-[11px] text-ev-muted">
                        {c.count} {c.count === 1 ? (isHi ? "लेख" : "post") : isHi ? "लेख" : "posts"}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Latest carousel */}
          <BlogCarousel
            posts={posts.slice(0, 12)}
            locale={locale}
            heading={isHi ? "नवीनतम लेख" : "Latest articles"}
            accent="#26E0C4"
            viewAllHref="/blog/category/market-news"
            viewAllLabel={isHi ? "सभी देखें" : "View all"}
          />

          {/* Top category carousels */}
          {topCats.map((c) => (
            <BlogCarousel
              key={c.slug}
              posts={posts.filter((p) => p.categorySlug === c.slug).slice(0, 12)}
              locale={locale}
              heading={c.label}
              accent={c.accent}
              viewAllHref={`/blog/category/${c.slug}`}
              viewAllLabel={isHi ? "सभी देखें" : "View all"}
            />
          ))}
        </>
      )}
    </div>
  );
}
