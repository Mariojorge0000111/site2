import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço final do site. Troque aqui quando conectar o domínio próprio.
const SITE_URL = 'https://decoradissimo.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
