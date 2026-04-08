"use client";

interface AdPlaceholderProps {
  slot?: string;
  format?: "banner" | "rectangle" | "leaderboard" | "sidebar";
  className?: string;
}

const formatDimensions: Record<string, { w: string; h: string; label: string }> = {
  banner:      { w: "w-full", h: "h-[90px]",  label: "Banner Ad — 728×90" },
  rectangle:   { w: "w-full", h: "h-[250px]", label: "Rectangle Ad — 300×250" },
  leaderboard: { w: "w-full", h: "h-[90px]",  label: "Leaderboard — 728×90" },
  sidebar:     { w: "w-full", h: "h-[600px]", label: "Sidebar Ad — 160×600" },
};

/**
 * AdPlaceholder — swap this with real AdSense <ins> tags in production.
 * AdSense snippet example:
 *
 * <ins
 *   className="adsbygoogle"
 *   style={{ display: "block" }}
 *   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *   data-ad-slot={slot}
 *   data-ad-format="auto"
 *   data-full-width-responsive="true"
 * />
 */
export default function AdPlaceholder({ slot = "XXXXXXXXXX", format = "banner", className = "" }: AdPlaceholderProps) {
  const dim = formatDimensions[format];

  return (
    <div
      className={`relative flex items-center justify-center border border-dashed border-ev-border/40 rounded-xl bg-ev-surface/30 overflow-hidden ${dim.w} ${dim.h} ${className}`}
      aria-label="Advertisement"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <div className="relative text-center">
        <div className="text-[10px] font-mono text-ev-border tracking-widest uppercase mb-1">Advertisement</div>
        <div className="text-xs font-mono text-ev-muted/50">{dim.label}</div>
        <div className="text-[10px] font-mono text-ev-border/50 mt-0.5">Slot: {slot}</div>
      </div>
    </div>
  );
}
