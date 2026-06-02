import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-card"
    >
      <div className="relative h-44 overflow-hidden border-b border-ev-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/blog/${post.slug}.png`}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 line-clamp-2 font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mb-3 font-body text-xs text-ev-muted">{post.subtitle}</p>
        <p className="mb-4 line-clamp-3 flex-1 font-body text-xs leading-relaxed text-ev-text/55">
          {post.excerpt}
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
