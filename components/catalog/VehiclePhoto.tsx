"use client";
import { useState } from "react";

interface Props {
  id: string;
  image?: string | null;
  accent: string;
  name: string;
  className?: string;
}

/**
 * Shows a vehicle photo if available, else a branded placeholder.
 * Source order: explicit `image` prop → /vehicles/<id>.jpg → placeholder.
 * Drop a JPG named after the vehicle id into public/vehicles/ to populate it.
 */
export default function VehiclePhoto({ id, image, accent, name, className = "" }: Props) {
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
