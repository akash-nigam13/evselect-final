"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "evselect-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage blocked — don't show */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-ev-border bg-ev-surface/95 p-4 shadow-card backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs leading-relaxed text-ev-text/70">
          We use cookies for analytics and to support advertising that keeps EVSelect.in free.
          See our{" "}
          <Link href="/privacy" className="text-brand underline underline-offset-2">Privacy Policy</Link>{" "}
          and{" "}
          <Link href="/advertising-disclosure" className="text-brand underline underline-offset-2">Ad Disclosure</Link>.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide("declined")}
            className="rounded-lg border border-ev-border px-4 py-2 font-mono text-xs text-ev-muted transition-colors hover:text-ev-text"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-lg bg-brand-gradient px-4 py-2 font-display text-xs font-bold text-ev-bg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
