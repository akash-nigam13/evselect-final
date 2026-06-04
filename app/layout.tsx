import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, DM_Sans, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/CookieConsent";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { GA_MEASUREMENT_ID, ADSENSE_CLIENT_ID } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const notoDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EVSelect.in — India's EV Knowledge Hub (2026)",
    template: "%s | EVSelect.in",
  },
  description:
    "The one-stop hub to learn about electric vehicles in India — compare 140+ EVs side by side, browse the full 2026 catalog, calculate running costs, and read expert guides. Cars, scooters & bikes.",
  keywords: [
    "electric vehicles India 2026",
    "EV comparison India",
    "electric cars India",
    "electric scooters India",
    "electric bikes India",
    "EV battery guide",
    "EV vs petrol cost calculator",
    "best EV India 2026",
  ],
  metadataBase: new URL("https://www.evselect.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.evselect.in",
    siteName: "EVSelect.in",
    title: "EVSelect.in — India's EV Knowledge Hub (2026)",
    description:
      "Learn, compare and choose your electric vehicle. 140+ EVs, side-by-side comparison, cost tools and expert guides — all in one place.",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVSelect.in — India's EV Knowledge Hub",
    description:
      "Compare 140+ EVs, calculate costs, and learn everything about electric vehicles in India.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
  // AdSense site-ownership verification meta tag
  other: { "google-adsense-account": ADSENSE_CLIENT_ID },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrains.variable} ${notoDeva.variable}`}
    >
      <body className="bg-ev-bg text-ev-text antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <CookieConsent />

        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>

        {/* Google AdSense loader — beforeInteractive so the snippet renders in <head> (needed for AdSense verification + ad serving) */}
        <Script
          id="adsense"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
