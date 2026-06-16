"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID, AD_SLOTS } from "@/lib/site-config";

interface AdPlaceholderProps {
  slot?: string;
  format?: "banner" | "rectangle" | "leaderboard" | "sidebar";
  className?: string;
}

const formatDimensions: Record<
  string,
  { w: string; h: string; minH: number; label: string }
> = {
  banner:      { w: "w-full", h: "h-[90px]",  minH: 90,  label: "Banner Ad — 728×90" },
  rectangle:   { w: "w-full", h: "h-[250px]", minH: 250, label: "Rectangle Ad — 300×250" },
  leaderboard: { w: "w-full", h: "h-[90px]",  minH: 90,  label: "Leaderboard — 728×90" },
  sidebar:     { w: "w-full", h: "h-[600px]", minH: 600, label: "Sidebar Ad — 160×600" },
};

/** Which configured ad-unit slot a given format maps to. */
function slotForFormat(format: string): string {
  if (format === "rectangle" || format === "sidebar") {
    return AD_SLOTS.rectangle || AD_SLOTS.display;
  }
  return AD_SLOTS.display;
}

/**
 * AdPlaceholder — renders a live AdSense <ins> unit when a real slot ID is
 * configured in lib/site-config.ts (AD_SLOTS), otherwise a dev placeholder.
 * The per-call `slot` prop is kept for backwards-compatibility but the live
 * unit uses the centrally-configured slot mapped from `format`, so a single
 * AdSense unit can be reused across the whole site.
 */
export default function AdPlaceholder({
  format = "banner",
  className = "",
}: AdPlaceholderProps) {
  const dim = formatDimensions[format];
  const adSlot = slotForFormat(format);
  const pushed = useRef(false);

  useEffect(() => {
    if (!adSlot || pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* AdSense not loaded yet (e.g. blocked) — ignore */
    }
  }, [adSlot]);

  // Live ad unit — only when a real slot ID is configured.
  if (adSlot) {
    return (
      <div className={`${dim.w} ${className}`} aria-label="Advertisement">
        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: dim.minH, width: "100%" }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Dev placeholder — shown until AD_SLOTS are filled in.
  return (
    <div
      className={`relative flex items-center justify-center border border-dashed border-ev-border/40 rounded-xl bg-ev-surface/30 overflow-hidden ${dim.w} ${dim.h} ${className}`}
      aria-label="Advertisement"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="relative text-center">
        <div className="text-[10px] font-mono text-ev-border tracking-widest uppercase mb-1">
          Advertisement
        </div>
        <div className="text-xs font-mono text-ev-muted/50">{dim.label}</div>
      </div>
    </div>
  );
}
