"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { localeFromPath } from "@/lib/i18n";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site-config";

type State = "idle" | "submitting" | "success" | "error";

const T = {
  en: {
    cta: "Enquire Now",
    title: "Enquire Now",
    sub: "Have a question about an EV, advertising or a partnership? Send us a message and we'll reply within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    okTitle: "Message sent!",
    okBody: "Thanks for reaching out — we'll get back to you soon.",
    again: "Send another",
    err: "Something went wrong. Please try again or email akash.nigam@evselect.in.",
  },
  hi: {
    cta: "पूछताछ करें",
    title: "पूछताछ करें",
    sub: "किसी EV, विज्ञापन या पार्टनरशिप के बारे में सवाल है? हमें संदेश भेजें, हम एक कार्यदिवस में जवाब देंगे।",
    name: "नाम",
    email: "ईमेल",
    message: "संदेश",
    send: "संदेश भेजें",
    sending: "भेजा जा रहा है…",
    okTitle: "संदेश भेज दिया गया!",
    okBody: "संपर्क करने के लिए धन्यवाद — हम जल्द ही आपसे संपर्क करेंगे।",
    again: "एक और भेजें",
    err: "कुछ गड़बड़ हो गई। दोबारा कोशिश करें या akash.nigam@evselect.in पर ईमेल करें।",
  },
};

export default function EnquireWidget() {
  const locale = localeFromPath(usePathname() || "/") === "hi" ? "hi" : "en";
  const t = T[locale];

  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "[EVSelect.in] New enquiry",
          from_name: "EVSelect.in Enquiry Widget",
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      setState(data.success ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <>
      {/* Sticky floating button (desktop + mobile) */}
      <button
        onClick={() => { setOpen(true); setState("idle"); }}
        aria-label={t.cta}
        className="fixed bottom-5 right-5 z-[55] inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 font-display text-sm font-bold text-ev-bg shadow-ev-glow transition-transform duration-200 hover:-translate-y-0.5"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="hidden xs:inline sm:inline">{t.cta}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center" onMouseDown={() => setOpen(false)}>
          <div
            className="relative w-full max-w-md rounded-2xl border border-ev-border bg-ev-surface p-6 shadow-card"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 text-ev-muted transition-colors hover:text-white">
              <X className="h-5 w-5" />
            </button>

            {state === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-ev-green/30 bg-ev-green/15">
                  <CheckCircle className="h-7 w-7 text-ev-green" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{t.okTitle}</h3>
                <p className="mx-auto mt-2 max-w-xs font-body text-sm text-ev-text/60">{t.okBody}</p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setState("idle"); }}
                  className="mt-5 rounded-xl border border-ev-border px-4 py-2 font-mono text-xs text-ev-muted transition-colors hover:text-brand"
                >
                  {t.again}
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-ev-text/60">{t.sub}</p>
                <form onSubmit={submit} className="mt-5 space-y-3">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.name}
                    className="w-full rounded-xl border border-ev-border bg-ev-card px-4 py-3 font-body text-sm text-ev-text outline-none placeholder:text-ev-muted focus:border-brand/50"
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.email}
                    className="w-full rounded-xl border border-ev-border bg-ev-card px-4 py-3 font-body text-sm text-ev-text outline-none placeholder:text-ev-muted focus:border-brand/50"
                  />
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.message}
                    className="w-full resize-none rounded-xl border border-ev-border bg-ev-card px-4 py-3 font-body text-sm text-ev-text outline-none placeholder:text-ev-muted focus:border-brand/50"
                  />
                  {state === "error" && (
                    <p className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-2.5 text-xs text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" /> {t.err}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 font-display text-sm font-bold text-ev-bg transition-opacity disabled:opacity-60"
                  >
                    {state === "submitting" ? t.sending : (<><Send className="h-4 w-4" /> {t.send}</>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
