import Link from "next/link";
import clsx from "clsx";
import { CATEGORIES, postsInCategory } from "@/lib/blog-posts";

export default function CategoryNav({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={clsx(
          "rounded-xl px-3.5 py-2 font-display text-sm font-medium transition-colors",
          !active ? "bg-brand text-ev-bg" : "border border-ev-border bg-ev-card text-ev-muted hover:text-brand"
        )}
      >
        All
      </Link>
      {CATEGORIES.map((c) => {
        const count = postsInCategory(c.slug).length;
        if (count === 0) return null;
        return (
          <Link
            key={c.slug}
            href={`/blog/category/${c.slug}`}
            className={clsx(
              "rounded-xl px-3.5 py-2 font-display text-sm font-medium transition-colors",
              active === c.slug
                ? "bg-brand text-ev-bg"
                : "border border-ev-border bg-ev-card text-ev-muted hover:text-brand"
            )}
          >
            {c.label}
            <span className="ml-1.5 font-mono text-[11px] opacity-60">{count}</span>
          </Link>
        );
      })}
    </div>
  );
}
