// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your live Cloudflare Pages URL. Change this if you add a custom domain later.
  // Used for canonical URLs and sitemap generation.
  site: 'https://nilotpalmsaharia.pages.dev',

  // Cloudflare Pages builds a fully static site from this project:
  //   Build command:      npm run build
  //   Build output dir:   dist
  output: 'static',
});
