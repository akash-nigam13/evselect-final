import type { Metadata } from "next";
import { Orbitron, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "EVSelect.in — India's EV Intelligence Hub",
    template: "%s | EVSelect.in",
  },
  description:
    "Compare electric vehicles, explore specs, read expert reviews, and discover the best EVs in India — all on EVSelect.in.",
  keywords: [
    "electric vehicles India",
    "EV comparison",
    "electric cars India",
    "EV bikes scooters",
    "EV battery guide",
    "best EV India 2024",
  ],
  metadataBase: new URL("https://evselect.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://evselect.in",
    siteName: "EVSelect.in",
    title: "EVSelect.in — India's EV Intelligence Hub",
    description: "Compare, explore, and choose the right electric vehicle for India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVSelect.in",
    description: "India's smartest EV comparison & info portal.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="bg-ev-bg text-ev-text antialiased">{children}</body>
    </html>
  );
}
