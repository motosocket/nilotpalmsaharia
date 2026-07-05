# Nilotpal M. Saharia — personal site + blog

Personal website and blog built with [Astro](https://astro.build), deployed on
Cloudflare Pages. The homepage is a single-page portfolio; the blog publishes
Markdown posts on marketing, product marketing, GTM, building with AI, and career.

## Run locally

```bash
npm install      # first time only
npm run dev
```

Then open the local preview at **http://localhost:4321**.

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally to sanity-check the build
```

## Project structure

```
src/
  pages/
    index.astro          # homepage (ported from the original index.html)
    blog/
      index.astro        # /blog listing, newest first
      [...slug].astro    # individual post pages
  layouts/
    Layout.astro         # base HTML shell: <head>, fonts, noindex, reveal script
    BlogPost.astro       # post layout with readable prose typography
  components/
    Header.astro         # shared nav
    Footer.astro         # shared footer
  content/
    blog/                # Markdown posts live here
  content.config.ts      # blog content collection + frontmatter schema
  styles/
    global.css           # the shared design system (light + dark)
```

## Add a new blog post

1. Create a Markdown file in `src/content/blog/`, for example
   `src/content/blog/my-new-post.md`. The file name becomes the URL slug
   (`/blog/my-new-post/`).
2. Add frontmatter at the top:

   ```markdown
   ---
   title: "Your post title"
   description: "One or two sentences that show up on the blog index and in search."
   pubDate: 2026-07-10
   tags: ["GTM", "Building with AI"]
   draft: false
   ---

   Your post content in Markdown starts here.
   ```

   - `pubDate` controls sort order (newest first).
   - `tags` is a list; it renders as pills on the card and post.
   - `draft: true` keeps a post visible during `npm run dev` but hides it from the
     production build. Set it to `false` to publish.
3. Save. `npm run dev` hot-reloads it at `/blog`.

House style: short, clear sentences, conversational but professional, real
statistics only. **Never use em dashes.** Use commas, colons, or periods.

## Indexing (noindex)

Search-engine indexing is controlled per page via the `noindex` prop on
`Layout.astro`.

- The **homepage** passes `noindex={true}` on purpose (see `src/pages/index.astro`).
  Remove that prop when you want Google to index the homepage under your name.
- **Blog posts are indexable** by default.

## Deploy (Cloudflare Pages)

The site auto-builds from GitHub. In the Cloudflare Pages project settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

Every push to `main` triggers a new build and deploy.

Before going fully public, edit the `site` value in `astro.config.mjs` to your
real domain (for example `https://nilotpalmsaharia.pages.dev` or a custom
domain). It is used for canonical URLs.
