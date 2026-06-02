"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay in ms */
  delay?: number;
  /** translate distance in px */
  y?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Lightweight reveal-on-scroll wrapper (IntersectionObserver, no deps).
 * Respects prefers-reduced-motion via the .reveal CSS rules in globals.css.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={clsx("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` } as any}
    >
      {children}
    </Tag>
  );
}
