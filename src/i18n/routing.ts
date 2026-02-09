import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 支持的语言列表
  locales: ['en', 'fil', 'vi', 'id', 'de'],

  // 默认语言
  defaultLocale: 'en',

  // 默认语言英语不显示前缀，其他语言显示
  localePrefix: 'as-needed',
});

// 语言显示名称
export const localeNames: Record<string, string> = {
  en: 'English',
  fil: 'Filipino',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  de: 'Deutsch',
};

// 语言国旗 emoji
export const localeFlags: Record<string, string> = {
  en: '🇬🇧',
  fil: '🇵🇭',
  vi: '🇻🇳',
  id: '🇮🇩',
  de: '🇩🇪',
};
