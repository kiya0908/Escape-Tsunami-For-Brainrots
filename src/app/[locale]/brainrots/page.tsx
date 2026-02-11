import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import BrainrotsContent from "@/components/BrainrotsContent";

const SITE_URL = "https://escapetsunamiforbrainrots.space";

// 为不同语言生成对应的元数据
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Brainrots" });

    // 语言代码映射到 OpenGraph locale 格式
    const localeMap: Record<string, string> = {
        en: "en_US",
        fil: "fil_PH",
        vi: "vi_VN",
        id: "id_ID",
        de: "de_DE",
    };

    // 为默认语言（英语）使用根路径
    const canonicalUrl = locale === 'en'
        ? `${SITE_URL}/brainrots`
        : `${SITE_URL}/${locale}/brainrots`;

    return {
        metadataBase: new URL(SITE_URL),
        title: t('title'),
        description: t('description'),
        keywords: [
            "Brainrots",
            "Escape Tsunami",
            "Brainrot Price Table",
            "Brainrot Income",
            "Brainrot Rarity",
            "Roblox Brainrots",
            "Brainrot Spawn Zone",
            "Celestial Brainrot",
            "Legendary Brainrot",
            "ETFB Brainrots",
        ],
        authors: [{ name: "ETFB Community" }],
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: canonicalUrl,
            siteName: "Escape Tsunami For Brainrots Wiki",
            type: "website",
            locale: localeMap[locale] || "en_US",
            images: [{ url: "/og.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: t('title'),
            description: t('description'),
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

export default function BrainrotsPage() {
    return <BrainrotsContent />;
}
