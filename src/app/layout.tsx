import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://escapetsunamiforbrainrots.space";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Escape Tsunami For Brainrots | Unofficial Wiki & Tools",
  description: "The ultimate resource for survival. Master the waves, optimize your base income, find every radioactive coin, and become the top brainrot collector.",
  keywords: ["Escape Tsunami", "Brainrots", "Roblox", "Wiki", "Guide", "Codes", "ETFB", "Tsunami Game", "Roblox Survival"],
  authors: [{ name: "ETFB Community" }],
  openGraph: {
    title: "Escape Tsunami For Brainrots | Unofficial Wiki & Tools",
    description: "The ultimate resource for survival. Master the waves, optimize your base income, find every radioactive coin, and become the top brainrot collector.",
    url: SITE_URL,
    siteName: "ETFB Wiki",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape Tsunami For Brainrots Wiki",
    description: "The ultimate resource for survival. Master the waves, optimize your base, and collect all brainrots!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
