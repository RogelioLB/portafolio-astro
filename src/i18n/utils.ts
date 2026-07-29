import { ui, defaultLang, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function projectPath(lang: Lang, slug: string): string {
  return lang === 'en' ? `/en/project/${slug}` : `/proyecto/${slug}`;
}

export function homePath(lang: Lang): string {
  return lang === 'en' ? '/en' : '/';
}
