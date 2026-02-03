import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://escapetsunamiforbrainrots.space";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Escape Tsunami For Brainrots | Unofficial Wiki & Tools",
  description: "Escape tsunami for brainrots: the ultimate survival resource! Master the treacherous waves, optimize base income for growth, find radioactive coin in the map.",
  keywords: ["Escape Tsunami", "Brainrots", "Roblox", "Wiki", "Guide", "Codes", "ETFB", "Tsunami Game", "Roblox Survival"],
  authors: [{ name: "ETFB Community" }],
  openGraph: {
    title: "Escape Tsunami For Brainrots | Unofficial Wiki & Tools",
    description: "Escape tsunami for brainrots: the ultimate survival resource! Master the treacherous waves, optimize base income for growth, find radioactive coin in the map.",
    url: SITE_URL,
    siteName: "ETFB Wiki",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape Tsunami For Brainrots Wiki",
    description: "Escape tsunami for brainrots: the ultimate survival resource! Master the treacherous waves, optimize base income for growth, find radioactive coin in the map.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Escape Tsunami For Brainrots Wiki',
    url: SITE_URL,
    description: 'Escape tsunami for brainrots: the ultimate survival resource! Master the treacherous waves, optimize base income for growth, find radioactive coin in the map.',
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ETFB Community',
      url: SITE_URL,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
