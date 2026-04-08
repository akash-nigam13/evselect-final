import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for EVSelect.in — rules governing your use of our EV information and comparison platform.",
};

const EFFECTIVE_DATE = "June 1, 2024";
const CONTACT_EMAIL = "legal@evselect.in";
const SITE = "EVSelect.in";
const DOMAIN = "evselect.in";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-display font-bold text-white text-xl mb-5 pb-3 border-b border-ev-border/50 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-ev-amber inline-block shrink-0" />
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
          <span className="w-1.5 h-1.5 rounded-full bg-ev-amber mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  { id: "acceptance",      label: "Acceptance of Terms" },
  { id: "description",     label: "Description of Service" },
  { id: "permitted-use",   label: "Permitted Use" },
  { id: "prohibited",      label: "Prohibited Conduct" },
  { id: "ip",              label: "Intellectual Property" },
  { id: "disclaimer",      label: "Disclaimer of Warranties" },
  { id: "liability",       label: "Limitation of Liability" },
  { id: "accuracy",        label: "Accuracy of Information" },
  { id: "third-party",     label: "Third-Party Links & Ads" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law",   label: "Governing Law" },
  { id: "changes",         label: "Changes to Terms" },
  { id: "contact",         label: "Contact" },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* Hero */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p className="text-xs font-mono text-ev-amber tracking-widest uppercase mb-3">Legal</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Terms of <span style={{ background: "linear-gradient(135deg,#ffb800,#f43f5e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Use</span>
            </h1>
            <p className="text-ev-text/50 font-body text-sm">
              Effective Date: <span className="text-ev-amber font-mono">{EFFECTIVE_DATE}</span>
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
                        className="flex items-center gap-2.5 text-xs font-body text-ev-muted hover:text-ev-amber transition-colors py-1 group"
                      >
                        <span className="font-mono text-[10px] text-ev-border group-hover:text-ev-amber w-5">
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

              <Section id="acceptance" title="Acceptance of Terms">
                <P>
                  By accessing or using the website located at{" "}
                  <span className="font-mono text-ev-cyan">{DOMAIN}</span> (the "Site"), you agree
                  to be bound by these Terms of Use ("Terms") and our Privacy Policy. These Terms
                  form a legally binding agreement between you and {SITE}.
                </P>
                <P>
                  If you do not agree to these Terms, you must not access or use the Site. We
                  recommend that you read these Terms carefully before using our services.
                </P>
              </Section>

              <Section id="description" title="Description of Service">
                <P>
                  {SITE} is an independent online platform that provides electric vehicle (EV)
                  information, specifications, comparison tools, and editorial content to help users
                  in India make informed EV purchasing decisions.
                </P>
                <P>Our services include, but are not limited to:</P>
                <UL items={[
                  "EV specifications database covering cars, bikes, scooters, and buses.",
                  "Side-by-side EV comparison tools.",
                  "Editorial articles, reviews, and buying guides.",
                  "Battery technology educational content.",
                  "Price listings and market information (indicative only).",
                ]} />
                <P>
                  {SITE} is an independent platform and is not affiliated with, endorsed by, or
                  sponsored by any vehicle manufacturer, dealer, or government body unless explicitly
                  stated.
                </P>
              </Section>

              <Section id="permitted-use" title="Permitted Use">
                <P>You may use the Site for lawful, personal, and non-commercial purposes only. You are permitted to:</P>
                <UL items={[
                  "Browse, read, and use the information on the Site for personal decision-making.",
                  "Share links to our articles and pages on social media or via email.",
                  "Print or save pages for personal, non-commercial reference.",
                  "Use our comparison tools for your own research.",
                ]} />
              </Section>

              <Section id="prohibited" title="Prohibited Conduct">
                <P>You agree not to engage in any of the following:</P>
                <UL items={[
                  "Copying, reproducing, or redistributing our content for commercial purposes without written permission.",
                  "Scraping, crawling, or using automated tools to extract data from the Site in bulk.",
                  "Attempting to gain unauthorised access to any part of the Site or its backend systems.",
                  "Uploading or transmitting any malicious code, viruses, or harmful content.",
                  "Using the Site in any way that violates applicable Indian law or regulation.",
                  "Impersonating EVSelect.in or its representatives.",
                  "Engaging in any activity that disrupts, overloads, or damages the Site's infrastructure.",
                  "Circumventing any security or access-control features of the Site.",
                ]} />
              </Section>

              <Section id="ip" title="Intellectual Property">
                <P>
                  All content on {SITE} — including but not limited to text, graphics, logos,
                  icons, images, page layouts, comparison data, and editorial articles — is the
                  intellectual property of {SITE} or its licensors and is protected under the
                  Copyright Act, 1957 (India) and applicable international copyright law.
                </P>
                <P>
                  You may not reproduce, distribute, modify, create derivative works, or exploit
                  any part of our content without express written permission from {SITE}. For
                  licensing or syndication enquiries, please contact us at{" "}
                  <span className="font-mono text-ev-cyan">{CONTACT_EMAIL}</span>.
                </P>
                <P>
                  Trademarks, brand names, and model names of third-party manufacturers (e.g., Tata
                  Motors, Ather Energy, Ola Electric) belong to their respective owners. Their
                  appearance on {SITE} is solely for informational and editorial purposes.
                </P>
              </Section>

              <Section id="disclaimer" title="Disclaimer of Warranties">
                <div className="bg-ev-card border border-ev-amber/20 rounded-xl p-5 space-y-3">
                  <P>
                    THE SITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
                    WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
                    LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                    NON-INFRINGEMENT.
                  </P>
                  <P>
                    {SITE} does not warrant that the Site will be uninterrupted, error-free, or
                    free of viruses or other harmful components. We do not warrant the accuracy,
                    completeness, or timeliness of any information on the Site.
                  </P>
                </div>
              </Section>

              <Section id="liability" title="Limitation of Liability">
                <P>
                  To the fullest extent permitted by applicable law, {SITE} and its owners,
                  employees, affiliates, and partners shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising from:
                </P>
                <UL items={[
                  "Your use of or inability to use the Site.",
                  "Any errors, omissions, or inaccuracies in the content.",
                  "Any purchase decisions made based on information found on the Site.",
                  "Unauthorised access to or use of our servers or any personal information stored therein.",
                  "Any third-party content or links accessible through the Site.",
                ]} />
                <P>
                  Our total liability to you for any claim arising from these Terms or your use of
                  the Site shall not exceed INR 1,000 (Indian Rupees One Thousand Only).
                </P>
              </Section>

              <Section id="accuracy" title="Accuracy of Information">
                <P>
                  EV specifications, prices, and availability information published on {SITE} are
                  sourced from publicly available data, manufacturer announcements, and editorial
                  research. While we strive for accuracy, this information:
                </P>
                <UL items={[
                  "May not reflect the most current pricing, specifications, or availability.",
                  "May vary between geographic regions, dealerships, or model variants.",
                  "Should not be relied upon as the sole basis for a purchasing decision.",
                ]} />
                <P>
                  Always verify current pricing and specifications directly with the manufacturer
                  or an authorised dealer before making a purchase. {SITE} disclaims all liability
                  for decisions made based on information found on this Site.
                </P>
              </Section>

              <Section id="third-party" title="Third-Party Links & Advertisements">
                <P>
                  The Site may contain links to third-party websites and display advertisements
                  served by third-party ad networks, including Google AdSense. These links and
                  advertisements are provided for convenience and do not constitute an endorsement
                  by {SITE}.
                </P>
                <P>
                  We have no control over the content, privacy practices, or availability of
                  third-party websites. Your use of any third-party site is at your own risk and
                  subject to that site's terms and policies.
                </P>
                <P>
                  Advertisements displayed on {SITE} are served by automated systems. The
                  presence of an advertisement does not imply our recommendation or endorsement
                  of the advertised product, service, or company.
                </P>
              </Section>

              <Section id="indemnification" title="Indemnification">
                <P>
                  You agree to defend, indemnify, and hold harmless {SITE} and its owners,
                  officers, employees, and agents from and against any claims, damages, losses,
                  liabilities, costs, and expenses (including reasonable legal fees) arising out of:
                </P>
                <UL items={[
                  "Your use of the Site in violation of these Terms.",
                  "Your violation of any applicable law or third-party rights.",
                  "Any content you submit or transmit through the Site.",
                ]} />
              </Section>

              <Section id="governing-law" title="Governing Law & Dispute Resolution">
                <P>
                  These Terms shall be governed by and construed in accordance with the laws of
                  India. Any dispute arising out of or in connection with these Terms shall first
                  be attempted to be resolved amicably through written notice.
                </P>
                <P>
                  If not resolved within 30 days, disputes shall be subject to the exclusive
                  jurisdiction of the courts in <strong className="text-ev-text">New Delhi, India</strong>.
                </P>
              </Section>

              <Section id="changes" title="Changes to These Terms">
                <P>
                  We reserve the right to modify these Terms at any time. Changes will be effective
                  immediately upon posting to the Site with an updated "Effective Date". Your
                  continued use of the Site after changes are posted constitutes your acceptance
                  of the revised Terms.
                </P>
                <P>
                  We encourage you to review these Terms periodically. For material changes, we
                  may provide notice via a banner on the Site.
                </P>
              </Section>

              <Section id="contact" title="Contact">
                <P>For questions or concerns regarding these Terms, please contact us:</P>
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
