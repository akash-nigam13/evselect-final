"use client";
import { useState } from "react";

interface Props {
  domain: string | null;
  monogram: string;
  accent: string;
  name: string;
  /** sizing + spacing utility classes, e.g. "h-14 w-14 text-lg" */
  className?: string;
}

/**
 * Renders a brand logo from the brand's domain, with graceful fallbacks:
 * Clearbit logo → Google favicon → the styled monogram tile.
 * Logos sit on a white chip so dark logos stay visible on the dark UI.
 */
export default function BrandLogo({ domain, monogram, accent, name, className = "" }: Props) {
  const sources = domain
    ? [
        `https://logo.clearbit.com/${domain}`,
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      ]
    : [];
  const [idx, setIdx] = useState(0);

  if (sources.length > 0 && idx < sources.length) {
    return (
      <span
        className={`flex items-center justify-center overflow-hidden rounded-2xl bg-white ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sources[idx]}
          alt={`${name} logo`}
          loading="lazy"
          className="h-3/5 w-3/5 object-contain"
          onError={() => setIdx((i) => i + 1)}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex items-center justify-center rounded-2xl font-display font-bold ${className}`}
      style={{ background: `${accent}1a`, color: accent, border: `1px solid ${accent}40` }}
    >
      {monogram}
    </span>
  );
}
