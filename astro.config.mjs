import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://github.com/Lopez089',
  base: '/web_blog_contact'
});