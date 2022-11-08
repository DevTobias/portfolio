import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';
import purgecss from 'astro-purgecss';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/config';

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,

  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    prefetch(),
    sitemap(),
    robotsTxt(),
    purgecss(),
    compress(),
  ],
});
