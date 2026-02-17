import en from './translations/en.json';
import ru from './translations/ru.json';
import et from './translations/et.json';

export type Locale = 'en' | 'ru' | 'et';

const translations: Record<Locale, Record<string, string>> = { en, ru, et };

export function t(locale: Locale, key: string): string {
	return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
	const [, segment] = url.pathname.split('/');
	if (segment === 'ru' || segment === 'et') return segment;
	return 'en';
}

export function getLocalizedPath(path: string, locale: Locale): string {
	if (locale === 'en') return path;
	return `/${locale}${path}`;
}
