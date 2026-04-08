import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for EVSelect.in — how we collect, use, and protect your data.",
};

const EFFECTIVE_DATE = "June 1, 2024";
const CONTACT_EMAIL = "privacy@evselect.in";
const SITE = "EVSelect.in";
const DOMAIN = "evselect.in";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-display font-bold text-white text-xl mb-5 pb-3 border-b border-ev-border/50 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-ev-cyan inline-block shrink-0" />
        {title}
      </h2>
      <div className="space-y-4 text-ev-text/70 font-body text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-ev-cyan mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  { id: "overview",        label: "Overview" },
  { id: "information",     label: "Information We Collect" },
  { id: "use",             label: "How We Use Your Information" },
  { id: "cookies",         label: "Cookies & Tracking" },
  { id: "adsense",         label: "Google AdSense & Advertising" },
  { id: "third-parties",   label: "Third-Party Services" },
  { id: "data-retention",  label: "Data Retention" },
  { id: "your-rights",     label: "Your Rights" },
  { id: "children",        label: "Children's Privacy" },
  { id: "changes",         label: "Changes to This Policy" },
  { id: "contact",         label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* Hero */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Legal</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Privacy <span className="text-gradient-cyan">Policy</span>
            </h1>
            <p className="text-ev-text/50 font-body text-sm">
              Effective Date: <span className="text-ev-cyan font-mono">{EFFECTIVE_DATE}</span>
              &nbsp;·&nbsp; Last Updated: <span className="font-mono">{EFFECTIVE_DATE}</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-14">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-4">Contents</p>
                <ul className="space-y-1">
                  {toc.map(({ id, label }, i) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="flex items-center gap-2.5 text-xs font-body text-ev-muted hover:text-ev-cyan transition-colors py-1 group"
                      >
                        <span className="font-mono text-[10px] text-ev-border group-hover:text-ev-cyan w-5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <article>

              <Section id="overview" title="Overview">
                <P>
                  Welcome to {SITE} ("{SITE}", "we", "our", or "us"). We operate the website{" "}
                  <span className="font-mono text-ev-cyan">{DOMAIN}</span>, an electric vehicle
                  information and comparison platform serving users primarily in India.
                </P>
                <P>
                  This Privacy Policy explains what information we collect when you visit our website,
                  how we use it, and the choices you have regarding your information. By using {SITE},
                  you agree to the practices described in this Policy.
                </P>
                <P>
                  If you do not agree with any part of this Policy, please discontinue use of our
                  website immediately.
                </P>
              </Section>

              <Section id="information" title="Information We Collect">
                <P><strong className="text-ev-text">A. Information You Provide Directly</strong></P>
                <UL items={[
                  "Name and email address when you submit a contact form or subscribe to our newsletter.",
                  "Messages or queries you send us via our contact page.",
                  "Any feedback, ratings, or comments you choose to submit.",
                ]} />
                <P><strong className="text-ev-text">B. Information Collected Automatically</strong></P>
                <UL items={[
                  "IP address, browser type, operating system, and device type.",
                  "Pages visited, time spent on pages, and navigation paths (via analytics tools).",
                  "Referring URLs — the page you came from before visiting our site.",
                  "General geographic location derived from your IP address (city/country level).",
                  "Cookies and similar tracking technologies (see the Cookies section below).",
                ]} />
                <P><strong className="text-ev-text">C. Information We Do Not Collect</strong></P>
                <P>
                  We do not collect sensitive personal information such as Aadhaar numbers, PAN card
                  details, financial account information, or health data.
                </P>
              </Section>

              <Section id="use" title="How We Use Your Information">
                <P>We use the information collected for the following purposes:</P>
                <UL items={[
                  "To operate, maintain, and improve the EVSelect.in website and its features.",
                  "To respond to inquiries and provide customer support.",
                  "To send newsletters or updates you have subscribed to (you may unsubscribe at any time).",
                  "To analyse usage patterns and improve user experience and content quality.",
                  "To detect, prevent, and address technical issues or fraudulent activity.",
                  "To comply with legal obligations under applicable Indian law, including the Information Technology Act, 2000.",
                  "To serve relevant advertisements through Google AdSense and other advertising partners (see below).",
                ]} />
              </Section>

              <Section id="cookies" title="Cookies & Tracking Technologies">
                <P>
                  {SITE} uses cookies — small text files stored on your device — and similar
                  technologies to enhance your experience, understand how you use our site, and
                  serve relevant advertisements.
                </P>
                <P><strong className="text-ev-text">Types of cookies we use:</strong></P>
                <UL items={[
                  "Essential cookies: Required for the website to function correctly. These cannot be disabled.",
                  "Analytics cookies: Set by Google Analytics to help us understand traffic patterns and improve content.",
                  "Advertising cookies: Set by Google AdSense and other ad networks to serve personalised advertisements based on your interests and browsing history.",
                  "Preference cookies: Remember your settings and preferences (e.g., vehicle filters).",
                ]} />
                <P>
                  You can control cookies through your browser settings. Disabling cookies may affect
                  the functionality of certain parts of the website. Most browsers provide options to
                  block third-party cookies specifically, which limits advertising tracking without
                  impacting core site features.
                </P>
                <P>
                  For instructions on managing cookies, visit your browser's help section or refer to{" "}
                  <span className="font-mono text-ev-cyan">aboutcookies.org</span>.
                </P>
              </Section>

              <Section id="adsense" title="Google AdSense & Advertising">
                <P>
                  {SITE} participates in the <strong className="text-ev-text">Google AdSense</strong>{" "}
                  programme to monetise the website through contextual and interest-based advertising.
                  Google, as a third-party vendor, uses cookies (including the{" "}
                  <span className="font-mono text-ev-cyan">DART cookie</span>) to serve ads to our
                  visitors based on their visits to this site and other sites on the internet.
                </P>

                {/* AdSense callout */}
                <div className="bg-ev-card border border-ev-cyan/20 rounded-xl p-5 my-4 space-y-3">
                  <p className="text-xs font-mono text-ev-cyan uppercase tracking-widest">Google AdSense — Key Points</p>
                  <UL items={[
                    "Google may use data about your visits to this and other websites to show you personalised ads.",
                    "The DART cookie enables Google to serve ads based on your browsing history across sites that partner with Google.",
                    "Google's use of advertising cookies enables it and its partners to serve ads based on your prior visits to our website and/or other websites on the Internet.",
                    "You may opt out of personalised advertising by visiting Google's Ads Settings at g.co/adsettings or by visiting aboutads.info.",
                    "You can also opt out of third-party vendor use of cookies for personalised advertising by visiting the Network Advertising Initiative opt-out page at networkadvertising.org/choices.",
                    "Opting out does not prevent ads from appearing — it means the ads you see will be less relevant to your interests.",
                  ]} />
                </div>

                <P>
                  For more information about how Google collects and uses data when you use our
                  website, please visit:{" "}
                  <span className="font-mono text-ev-cyan">policies.google.com/technologies/partner-sites</span>
                </P>
                <P>
                  We may also use other ad networks or affiliate programmes in the future. This Policy
                  will be updated accordingly. All advertising partners on {SITE} are required to
                  have their own privacy policies disclosing their data practices.
                </P>
              </Section>

              <Section id="third-parties" title="Third-Party Services">
                <P>Our website integrates the following third-party services, each with its own privacy practices:</P>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-ev-border">
                        {["Service", "Purpose", "Privacy Policy"].map((h) => (
                          <th key={h} className="px-3 py-2.5 text-left font-mono text-ev-muted uppercase tracking-wider text-[10px]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Google Analytics", "Website analytics & traffic analysis", "policies.google.com/privacy"],
                        ["Google AdSense", "Display advertising", "policies.google.com/privacy"],
                        ["Google Fonts", "Typography (font loading)", "policies.google.com/privacy"],
                        ["Vercel", "Website hosting & deployment", "vercel.com/legal/privacy-policy"],
                      ].map(([svc, purpose, policy], i) => (
                        <tr key={svc} className={`border-b border-ev-border/30 ${i % 2 !== 0 ? "bg-ev-surface/20" : ""}`}>
                          <td className="px-3 py-2.5 font-display font-semibold text-white">{svc}</td>
                          <td className="px-3 py-2.5 text-ev-text/60">{purpose}</td>
                          <td className="px-3 py-2.5 font-mono text-ev-cyan">{policy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <P>
                  We are not responsible for the privacy practices of these third-party services.
                  We encourage you to review their respective privacy policies.
                </P>
              </Section>

              <Section id="data-retention" title="Data Retention">
                <P>
                  We retain personal information only for as long as necessary to fulfil the purposes
                  outlined in this Policy, unless a longer retention period is required by law.
                </P>
                <UL items={[
                  "Contact form submissions: Retained for up to 12 months, then securely deleted.",
                  "Analytics data: Aggregated and anonymised data may be retained indefinitely; identifiable data is retained per Google Analytics' default retention settings (14 months).",
                  "Newsletter subscriber data: Retained until you unsubscribe, after which it is removed within 30 days.",
                ]} />
              </Section>

              <Section id="your-rights" title="Your Rights">
                <P>
                  Depending on applicable law (including the Digital Personal Data Protection Act, 2023
                  of India), you may have the right to:
                </P>
                <UL items={[
                  "Access the personal data we hold about you.",
                  "Request correction of inaccurate or incomplete data.",
                  "Request deletion of your personal data ('right to be forgotten').",
                  "Withdraw consent for data processing where consent is the legal basis.",
                  "Opt out of marketing communications at any time.",
                  "Lodge a complaint with the relevant data protection authority.",
                ]} />
                <P>
                  To exercise any of these rights, please contact us at{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span>. We will respond
                  within 30 days of receiving your request.
                </P>
              </Section>

              <Section id="children" title="Children's Privacy">
                <P>
                  {SITE} is not directed at children under the age of 13. We do not knowingly collect
                  personal information from children. If you believe a child has provided us with
                  personal information, please contact us immediately at{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span> and we will take
                  steps to delete such information.
                </P>
              </Section>

              <Section id="changes" title="Changes to This Policy">
                <P>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices, technology, or applicable law. When we make material changes, we will
                  update the "Effective Date" at the top of this page and, where appropriate, notify
                  you via a notice on our website or by email.
                </P>
                <P>
                  Your continued use of {SITE} after changes are posted constitutes acceptance of
                  the updated Policy. We encourage you to review this page periodically.
                </P>
              </Section>

              <Section id="contact" title="Contact Us">
                <P>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  our data practices, please reach out:
                </P>
                <div className="bg-ev-card border border-ev-border rounded-xl p-5 space-y-2">
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">Website</span><span className="font-mono text-ev-cyan">{DOMAIN}</span></div>
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">Email</span><span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span></div>
                  <div className="flex gap-3 text-sm"><span className="text-ev-muted w-20 shrink-0">Country</span><span>India</span></div>
                </div>
              </Section>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
