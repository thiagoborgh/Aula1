import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pelo domínio final quando tiver (necessário para sitemap e canonical).
const site = process.env.PUBLIC_SITE_URL || 'https://sotaquei.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
