import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const SITE_URL = "https://escapetsunamiforbrainrots.space";

// 为不同语言生成对应的元数据
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    // 语言代码映射到 OpenGraph locale 格式
    const localeMap: Record<string, string> = {
        en: "en_US",
        fil: "fil_PH",
        vi: "vi_VN",
        id: "id_ID",
        de: "de_DE",
    };

    // 为默认语言（英语）使用根路径
    const canonicalUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

    return {
        metadataBase: new URL(SITE_URL),
        title: t("title"),
        description: t("description"),
        keywords: [
            "Escape Tsunami",
            "Brainrots",
            "Roblox",
            "Wiki",
            "Guide",
            "Codes",
            "ETFB",
            "Tsunami Game",
            "Roblox Survival",
        ],
        authors: [{ name: "ETFB Community" }],
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: canonicalUrl,
            siteName: t("siteName"),
            type: "website",
            locale: localeMap[locale] || "en_US",
            images: [{ url: "/og.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
            images: [{ url: "/og.png", width: 1200, height: 630 }],
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

// 生成静态路由参数
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    // 验证语言是否在支持列表中
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    // 获取翻译消息
    const messages = await getMessages({ locale });

    // 语言代码映射
    const langCodeMap: Record<string, string> = {
        en: "en",
        fil: "fil",
        vi: "vi",
        id: "id",
        de: "de",
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Escape Tsunami For Brainrots Wiki",
        url: SITE_URL,
        description:
            "Escape tsunami for brainrots: the ultimate survival resource! Master the treacherous waves, optimize base income for growth, find radioactive coin in the map.",
        inLanguage: langCodeMap[locale] || "en",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
        publisher: {
            "@type": "Organization",
            name: "ETFB Community",
            url: SITE_URL,
        },
    };

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {/* hreflang 标签用于 SEO - 英语使用根路径 */}
                <link rel="alternate" hrefLang="en" href={SITE_URL} />
                <link rel="alternate" hrefLang="fil" href={`${SITE_URL}/fil`} />
                <link rel="alternate" hrefLang="vi" href={`${SITE_URL}/vi`} />
                <link rel="alternate" hrefLang="id" href={`${SITE_URL}/id`} />
                <link rel="alternate" hrefLang="de" href={`${SITE_URL}/de`} />
                <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                </NextIntlClientProvider>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
                {/* Google AdSense 广告脚本 */}
                {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
                    <Script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
                        crossOrigin="anonymous"
                        strategy="afterInteractive"
                    />
                )}
            </body>
        </html>
    );
}
