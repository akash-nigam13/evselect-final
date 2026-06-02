import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with EVSelect.in — questions, EV data corrections, advertising and press enquiries.",
  alternates: { canonical: "https://www.evselect.in/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
