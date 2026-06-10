"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog-posts";
import { type Locale, localizedHref } from "@/lib/i18n";

export default function BlogCarousel({
  posts,
  locale = "en",
  heading,
  accent = "#26E0C4",
  viewAllHref,
  viewAllLabel,
}: {
  posts: BlogPost[];
  locale?: Locale;
  heading: string;
  accent?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  if (!posts.length) return null;

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="mt-14">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-5 w-1 rounded-full" style={{ background: accent }} />
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{heading}</h2>
        </div>
        <div className="flex items-center gap-2">
          {viewAllHref && (
            <Link
              href={localizedHref(viewAllHref, locale)}
              className="inline-flex items-center gap-1 font-mono text-xs font-medium text-brand hover:underline"
            >
              {viewAllLabel ?? "View all"} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-ev-border text-ev-muted transition-colors hover:border-brand/40 hover:text-brand sm:inline-flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-ev-border text-ev-muted transition-colors hover:border-brand/40 hover:text-brand sm:inline-flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
      >
        {posts.map((post) => (
          <div key={post.slug} className="w-[280px] shrink-0 snap-start sm:w-[300px]">
            <PostCard post={post} locale={locale} />
          </div>
        ))}
      </div>
    </section>
  );
}
