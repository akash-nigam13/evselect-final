"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import {
  LOCALES,
  PLANNED_LOCALES,
  LOCALE_NAMES,
  localeFromPath,
  stripLocale,
  localizedHref,
  type Locale,
} from "@/lib/i18n";

/** Language picker: links to the same page in each available locale. */
export default function LangSwitcher() {
  const pathname = usePathname() || "/";
  const current = localeFromPath(pathname);
  const basePath = stripLocale(pathname);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1.5 rounded-lg border border-ev-border px-2.5 py-2 font-body text-sm text-ev-text/80 transition-colors hover:text-brand"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{LOCALE_NAMES[current]}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      <div
        className={`absolute right-0 top-full w-44 pt-2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-ev-border bg-ev-surface/95 p-1.5 shadow-card backdrop-blur-xl">
          {LOCALES.map((l: Locale) => (
            <Link
              key={l}
              href={localizedHref(basePath, l)}
              className={`block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-brand/10 ${
                l === current ? "text-brand" : "text-ev-text/85"
              }`}
            >
              {LOCALE_NAMES[l]}
            </Link>
          ))}
          {PLANNED_LOCALES.map((l) => (
            <span
              key={l}
              className="block cursor-not-allowed rounded-xl px-3 py-2 text-sm text-ev-muted/50"
              title="Coming soon"
            >
              {LOCALE_NAMES[l]} · soon
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
