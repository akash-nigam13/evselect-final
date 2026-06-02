import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "EVSelect.in — India's EV Knowledge Hub",
    description:
      "Compare 140+ EVs, calculate costs, and learn everything about electric vehicles in India.",
  },
  robots: { index: true, follow: true },
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
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="bg-ev-bg text-ev-text antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
