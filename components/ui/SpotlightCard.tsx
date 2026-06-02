"use client";
import { useRef, type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  /** glow accent colour (hex) */
  accent?: string;
}

/** Card with a cursor-following radial spotlight on hover. */
export default function SpotlightCard({
  children,
  className,
  accent = "#26E0C4",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card transition-colors duration-300 hover:border-ev-border/0",
        className
      )}
      style={
        {
          "--accent": accent,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), color-mix(in srgb, var(--accent) 16%, transparent), transparent 60%)",
        }}
      />
      <span className="border-gradient pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
