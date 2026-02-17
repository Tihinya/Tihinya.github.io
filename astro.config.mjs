// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://tihinya.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'et'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});