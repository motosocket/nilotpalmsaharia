// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain once deployed on Cloudflare Pages,
  // e.g. 'https://nilotpalmsaharia.pages.dev' or your custom domain.
  // Used for canonical URLs and sitemap generation.
  site: 'https://example.com',

  // Cloudflare Pages builds a fully static site from this project:
  //   Build command:      npm run build
  //   Build output dir:   dist
  output: 'static',
});
