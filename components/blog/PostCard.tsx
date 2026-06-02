import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";
import { type Locale, localizedHref } from "@/lib/i18n";

export default function PostCard({ post, locale = "en" }: { post: BlogPost; locale?: Locale }) {
  const isHi = locale === "hi";
  const title = isHi && post.hiTitle ? post.hiTitle : post.title;
  const subtitle = isHi && post.hiSubtitle ? post.hiSubtitle : post.subtitle;
  const excerpt = isHi && post.hiExcerpt ? post.hiExcerpt : post.excerpt;

  return (
    <Link
      href={localizedHref(`/blog/${post.slug}`, locale)}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-card"
    >
      <div className="relative h-44 overflow-hidden border-b border-ev-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/blog/${post.slug}.png`}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 line-clamp-2 font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-brand">
          {title}
        </h3>
        <p className="mb-3 font-body text-xs text-ev-muted">{subtitle}</p>
        <p className="mb-4 line-clamp-3 flex-1 font-body text-xs leading-relaxed text-ev-text/55">
          {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-ev-border/40 pt-3">
          <div className="flex items-center gap-3 font-mono text-[10px] text-ev-muted">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" style={{ color: post.accent }} />
        </div>
      </div>
    </Link>
  );
}
