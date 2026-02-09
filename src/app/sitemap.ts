import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing' // 引用统一的国际化路由配置

const baseUrl = 'https://escapetsunamiforbrainrots.space'

// 页面路径列表
const pages = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/terms', changeFrequency: 'monthly' as const, priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 为每种语言生成所有页面的 URL
  for (const locale of routing.locales) {
    for (const page of pages) {
      // 默认语言（英语）不加前缀，其他语言加前缀
      const localePath = locale === routing.defaultLocale ? '' : `/${locale}`

      sitemapEntries.push({
        url: `${baseUrl}${localePath}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => {
              const lPath = l === routing.defaultLocale ? '' : `/${l}`
              return [l, `${baseUrl}${lPath}${page.path}`]
            })
          ),
        },
      })
    }
  }

  return sitemapEntries
}
