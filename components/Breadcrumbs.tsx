import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD.
 * Pass the trail WITHOUT "Home" (it is prepended automatically).
 * The last item is rendered as the current page (no link).
 */
export default function Breadcrumbs({
  items,
  className = "",
  homeName = "Home",
  homeHref = "/",
}: {
  items: Crumb[];
  className?: string;
  homeName?: string;
  homeHref?: string;
}) {
  const all: Crumb[] = [{ name: homeName, path: homeHref }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-ev-muted">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={`${c.name}-${i}`} className="flex items-center gap-1.5">
                {c.path && !last ? (
                  <Link href={c.path} className="transition-colors hover:text-brand">
                    {c.name}
                  </Link>
                ) : (
                  <span className={last ? "text-ev-text/80" : ""} aria-current={last ? "page" : undefined}>
                    {c.name}
                  </span>
                )}
                {!last && <ChevronRight className="h-3 w-3 opacity-40" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
