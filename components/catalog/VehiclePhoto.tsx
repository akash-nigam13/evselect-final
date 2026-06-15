"use client";
import { useState } from "react";

interface Props {
  id: string;
  image?: string | null;
  accent: string;
  name: string;
  /** attribution caption, e.g. "Author · CC BY-SA 4.0 · Wikimedia Commons" */
  credit?: string | null;
  /** link to the photo's source / licence page */
  source?: string | null;
  className?: string;
}

/**
 * Shows a vehicle photo if available, else a branded placeholder.
 * Source order: explicit `image` prop → /vehicles/<id>.jpg → placeholder.
 * Drop a JPG named after the vehicle id into public/vehicles/ to populate it.
 * When `credit` is set, a small attribution caption (linking to `source`) is
 * overlaid — required for Creative Commons reuse.
 */
export default function VehiclePhoto({
  id,
  image,
  accent,
  name,
  credit,
  source,
  className = "",
}: Props) {
  const src = image || `/vehicles/${id}.jpg`;
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card ${className}`}
        style={{ aspectRatio: "16 / 10" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
        {credit && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-1.5 pt-6">
            {source ? (
              <a
                href={source}
                target="_blank"
                rel="noopener nofollow"
                className="pointer-events-auto font-mono text-[9px] leading-tight text-white/70 transition-colors hover:text-white"
              >
                {credit}
              </a>
            ) : (
              <span className="font-mono text-[9px] leading-tight text-white/70">{credit}</span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-ev-border ${className}`}
      style={{ aspectRatio: "16 / 10", background: `linear-gradient(135deg, ${accent}14, #07080b)` }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 60% 40%, ${accent}22, transparent 70%)` }}
      />
      <span className="select-none font-display text-7xl font-bold opacity-10" style={{ color: accent }}>
        EV
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-ev-muted">
        Photo coming soon
      </span>
    </div>
  );
}
