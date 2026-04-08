"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

const CONTACT_EMAIL = "hello@evselect.in";
const PRESS_EMAIL   = "press@evselect.in";
const ADS_EMAIL     = "advertise@evselect.in";

const subjects = [
  "General Enquiry",
  "Vehicle Data Correction",
  "Advertise on EVSelect.in",
  "Press / Media Enquiry",
  "Partnership Proposal",
  "Bug Report",
  "Other",
];

const contactCards = [
  {
    icon: Mail,
    label: "General & Support",
    value: CONTACT_EMAIL,
    desc: "Questions, feedback, and data corrections",
    accent: "#00e5ff",
  },
  {
    icon: MessageSquare,
    label: "Advertising",
    value: ADS_EMAIL,
    desc: "Sponsored content & display advertising",
    accent: "#39ff14",
  },
  {
    icon: Send,
    label: "Press & Media",
    value: PRESS_EMAIL,
    desc: "Journalist enquiries & media kit requests",
    accent: "#ffb800",
  },
];

const faqs = [
  {
    q: "How do I report incorrect EV specifications?",
    a: "Use the contact form above and select 'Vehicle Data Correction'. Include the vehicle name, the incorrect data, and the correct information with a source link if possible. We review and update within 48 hours.",
  },
  {
    q: "Can I advertise my EV product on EVSelect.in?",
    a: "Yes! We offer display advertising, sponsored articles, and category sponsorships. Email us at advertise@evselect.in or select 'Advertise on EVSelect.in' in the contact form for a media kit.",
  },
  {
    q: "How do I get my EV brand or model listed?",
    a: "Manufacturers and dealers can contact us to have their vehicles added to our database. We verify all submissions before publishing. Use the contact form with subject 'General Enquiry'.",
  },
  {
    q: "Are the prices on EVSelect.in accurate?",
    a: "Prices shown are indicative ex-showroom prices based on publicly available data at time of publishing. Always verify with an official dealer before purchasing, as prices can vary by state, dealership, and available offers.",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // Simulate API call — replace with your actual form handler (e.g. Resend, Formspree, Nodemailer)
    await new Promise((r) => setTimeout(r, 1800));
    // Replace this with: const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setState("success");
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* Hero */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"
            style={{ maskImage: "radial-gradient(ellipse 60% 100% at 50% 0%, black, transparent)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs font-mono text-ev-green tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Contact <span className="text-gradient-cyan">EVSelect.in</span>
            </h1>
            <p className="text-ev-text/55 font-body max-w-xl leading-relaxed">
              Got a question, spotted an error, or want to advertise? We typically respond within one business day.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {contactCards.map(({ icon: Icon, label, value, desc, accent }) => (
              <div
                key={label}
                className="bg-ev-card border border-ev-border rounded-2xl p-6 relative overflow-hidden group hover:border-opacity-60 transition-all card-hover"
                style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"
                  style={{ background: `radial-gradient(circle at top right, ${accent}18, transparent 70%)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <div className="text-xs font-mono text-ev-muted mb-1">{label}</div>
                <div className="font-mono text-sm mb-2" style={{ color: accent }}>{value}</div>
                <div className="text-ev-text/50 text-xs font-body leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          {/* Main grid: form + sidebar */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">

            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-white text-2xl mb-8">
                Send Us a <span className="text-gradient-cyan">Message</span>
              </h2>

              {state === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-ev-green/15 border border-ev-green/30 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-ev-green" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-ev-text/60 font-body text-sm max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out. We've received your message and will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setState("idle"); setForm({ name: "", email: "", subject: subjects[0], message: "" }); }}
                    className="px-5 py-2.5 rounded-xl border border-ev-border text-ev-muted text-sm font-body hover:border-ev-cyan/40 hover:text-ev-cyan transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-ev-muted mb-2 uppercase tracking-wider">
                        Full Name <span className="text-ev-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ravi Kumar"
                        className="w-full bg-ev-card border border-ev-border rounded-xl px-4 py-3 text-sm text-ev-text placeholder:text-ev-border font-body focus:outline-none focus:border-ev-cyan/50 focus:ring-1 focus:ring-ev-cyan/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-ev-muted mb-2 uppercase tracking-wider">
                        Email Address <span className="text-ev-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="ravi@example.com"
                        className="w-full bg-ev-card border border-ev-border rounded-xl px-4 py-3 text-sm text-ev-text placeholder:text-ev-border font-body focus:outline-none focus:border-ev-cyan/50 focus:ring-1 focus:ring-ev-cyan/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-ev-muted mb-2 uppercase tracking-wider">
                      Subject <span className="text-ev-cyan">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full appearance-none bg-ev-card border border-ev-border rounded-xl px-4 py-3 text-sm text-ev-text font-body focus:outline-none focus:border-ev-cyan/50 focus:ring-1 focus:ring-ev-cyan/30 transition-colors cursor-pointer"
                      >
                        {subjects.map((s) => (
                          <option key={s} value={s} className="bg-ev-surface">{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ev-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-ev-muted mb-2 uppercase tracking-wider">
                      Message <span className="text-ev-cyan">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us what's on your mind..."
                      className="w-full bg-ev-card border border-ev-border rounded-xl px-4 py-3 text-sm text-ev-text placeholder:text-ev-border font-body focus:outline-none focus:border-ev-cyan/50 focus:ring-1 focus:ring-ev-cyan/30 transition-colors resize-none"
                    />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-ev-border text-xs font-mono">{form.message.length} / 2000</span>
                    </div>
                  </div>

                  {/* Error state */}
                  {state === "error" && (
                    <div className="flex items-center gap-2.5 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-ev-cyan text-ev-bg font-display font-bold text-sm tracking-wide shadow-ev-glow hover:bg-ev-green hover:shadow-ev-green-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-ev-bg/40 border-t-ev-bg rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-ev-border font-body">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy" className="text-ev-muted hover:text-ev-cyan transition-colors underline underline-offset-2">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <aside className="space-y-6">

              {/* Response time */}
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5 space-y-4">
                <h3 className="font-display font-semibold text-white text-sm">Response Times</h3>
                {[
                  { icon: Clock, label: "General Enquiries",    time: "Within 24 hrs",   color: "#00e5ff" },
                  { icon: Mail,  label: "Advertising",          time: "Within 48 hrs",   color: "#39ff14" },
                  { icon: Send,  label: "Press & Media",        time: "Same business day", color: "#ffb800" },
                  { icon: MessageSquare, label: "Bug Reports",  time: "Within 24 hrs",   color: "#a78bfa" },
                ].map(({ icon: Icon, label, time, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-body text-ev-text/70">{label}</div>
                    </div>
                    <div className="text-xs font-mono shrink-0" style={{ color }}>{time}</div>
                  </div>
                ))}
              </div>

              {/* Location/info */}
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5 space-y-3">
                <h3 className="font-display font-semibold text-white text-sm">About EVSelect.in</h3>
                <div className="flex items-start gap-2.5 text-xs font-body text-ev-text/60">
                  <MapPin className="w-3.5 h-3.5 text-ev-muted mt-0.5 shrink-0" />
                  <span>Based in India, serving EV buyers nationwide</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-body text-ev-text/60">
                  <Clock className="w-3.5 h-3.5 text-ev-muted mt-0.5 shrink-0" />
                  <span>Mon – Sat, 10:00 AM – 6:00 PM IST</span>
                </div>
                <div className="pt-2 border-t border-ev-border/40">
                  <p className="text-xs text-ev-text/50 font-body leading-relaxed">
                    For urgent media enquiries outside business hours, please email{" "}
                    <span className="font-mono text-ev-amber">{PRESS_EMAIL}</span> with "URGENT" in the subject line.
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h3 className="font-display font-semibold text-white text-sm mb-4">Follow Us</h3>
                <div className="space-y-2">
                  {[
                    { platform: "Twitter / X",  handle: "@evselect_in",          url: "https://twitter.com/evselect_in",   color: "#00e5ff" },
                    { platform: "YouTube",       handle: "EVSelect India",        url: "https://youtube.com/@evselect_in",  color: "#f43f5e" },
                    { platform: "Instagram",     handle: "@evselect.in",          url: "https://instagram.com/evselect_in", color: "#a78bfa" },
                  ].map(({ platform, handle, url, color }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-ev-surface/60 transition-colors group"
                    >
                      <span className="text-xs font-body text-ev-muted group-hover:text-ev-text transition-colors">{platform}</span>
                      <span className="text-xs font-mono transition-colors" style={{ color }}>{handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-bold text-white text-2xl mb-8">
              Frequently Asked <span className="text-gradient-cyan">Questions</span>
            </h2>
            <div className="max-w-3xl space-y-3">
              {faqs.map(({ q, a }, i) => (
                <div
                  key={q}
                  className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden transition-colors hover:border-ev-border"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-display font-semibold text-white text-sm leading-snug">{q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-ev-muted shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-ev-cyan" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-ev-text/60 font-body leading-relaxed border-t border-ev-border/40 pt-4">
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
