import { useState } from 'react';
import type { Locale } from '../i18n/utils';

const LOCALES: { code: Locale; label: string }[] = [
	{ code: 'en', label: 'EN' },
	{ code: 'ru', label: 'RU' },
	{ code: 'et', label: 'ET' },
];

function getLocalizedPath(currentPath: string, currentLocale: Locale, targetLocale: Locale): string {
	let basePath = currentPath;
	if (currentLocale !== 'en') {
		basePath = currentPath.replace(`/${currentLocale}`, '') || '/';
	}
	if (targetLocale === 'en') return basePath;
	return `/${targetLocale}${basePath}`;
}

export default function LanguageSwitcher({ locale, currentPath }: { locale: Locale; currentPath: string }) {
	const [open, setOpen] = useState(false);

	const current = LOCALES.find((l) => l.code === locale)!;

	return (
		<div className="fixed top-4 right-4 z-50">
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/80 backdrop-blur-sm rounded-full hover:bg-zinc-700/80 transition-colors cursor-pointer"
			>
				{current.label}
			</button>

			{open && (
				<div className="absolute right-0 mt-2 flex flex-col gap-1 bg-zinc-800/90 backdrop-blur-sm rounded-lg p-1 min-w-[60px]">
					{LOCALES.filter((l) => l.code !== locale).map((l) => (
						<a
							key={l.code}
							href={getLocalizedPath(currentPath, locale, l.code)}
							className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 rounded transition-colors text-center"
						>
							{l.label}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
