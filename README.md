# iFood Security Blog

The official engineering blog for iFood Security. It publishes security research, production architecture, open-source work, and lessons from operating security at scale.

Production: <https://blog.ifoodsecurity.com>

## Stack

- Jekyll 3.9 through `github-pages` 229
- Minimal Mistakes 4.27.3 as the pinned foundation
- Liquid, SCSS, and small progressive JavaScript enhancements
- GitHub Pages with the custom domain defined in `CNAME`

The site owns its layouts and visual components. Minimal Mistakes provides compatible Jekyll includes and baseline syntax styles, but its default page layouts are not used.

## Architecture

- `_layouts/default.html` owns the document shell and global landmarks.
- `_layouts/home.html` renders the editorial homepage and featured-post fallback.
- `_layouts/post.html` renders article metadata, reading time, TOC, authors, pagination, and related posts.
- `_includes/seo.html` owns canonical, social, and structured metadata.
- `_sass/ifood-security.scss` contains the design tokens and responsive components.
- `assets/js/site.js` progressively enhances only the mobile navigation.

Keep presentation logic in layouts and includes rather than adding inline styles to Markdown content.

## Local Development

Install Ruby, Bundler, and the project dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve
```

Open <http://localhost:4000>. Changes to `_config.yml` require a server restart.

Run the production build before opening a pull request:

```bash
bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build --trace
```

Do not switch between `theme` and `remote_theme` for local development. The theme is pinned in `_config.yml` and is resolved consistently by `jekyll-remote-theme`.

The minimum required checks are:

```bash
bundle check
JEKYLL_ENV=production bundle exec jekyll build --trace
git diff --check
```

## Writing A Post

Create `_posts/YYYY-MM-DD-slug.md` with this front matter:

```yaml
---
layout: post
title: "Clear, descriptive article title"
date: YYYY-MM-DD HH:MM:SS -0300
categories: security engineering
description: "A unique search description that explains the article's value."
excerpt: "A concise editorial summary used on article cards."
topic: "Secure Engineering"
image: "/assets/sec-eng/img/article-cover.jpg"
author: username
toc: true
---
```

Supported topics are defined in `_data/topics.yml`:

- AI Security
- Cloud & Infrastructure
- Security Research
- Secure Engineering
- Community

The `categories` field is retained for existing permalink compatibility. Use `topic` for editorial navigation.

## Featured Articles

Add these optional fields to curate the homepage:

```yaml
featured: true
featured_order: 1
```

The homepage fills any remaining feature slots with recent posts automatically.

## Editorial Requirements

- Keep `description` unique and approximately 140 to 160 characters.
- Use one descriptive page title; the layout supplies the article `h1`.
- Start article sections at `##`, followed by `###` subsections.
- Use descriptive image alt text rather than labels such as "Figure 1".
- Put article images in `assets/sec-eng/img/`.
- Use `last_modified_at` only after a substantive content update.
- Do not change a published post's date or categories without a redirect plan.
- Add links to related articles when they provide useful context.

## Authors

Authors are stored in `_data/authors.yml` and avatars in `assets/authors/`.

```yaml
username:
  name: "Display Name"
  bio: "Short biography that establishes relevant expertise."
  avatar: "/assets/authors/avatar.jpg"
  links:
    - label: "LinkedIn"
      url: "https://linkedin.com/in/profile"
```

The value in a post's `author` field must match an author key.

## Topics

Topic metadata used by homepage cards lives in `_data/topics.yml`. Indexable topic pages live in `_topics/`. A topic title must exactly match the post front matter value.

## SEO

The site generates:

- Absolute canonical URLs
- XML sitemap at `/sitemap.xml`
- Atom feed at `/feed.xml`
- Open Graph and Twitter Card metadata
- `Organization`, `WebSite`, and `BlogPosting` structured data
- Redirect pages through `jekyll-redirect-from`

After deploying a new article:

1. Confirm the production URL returns HTTP 200.
2. Confirm the page appears in the sitemap.
3. Inspect the URL in Google Search Console.
4. Request indexing for time-sensitive publications when appropriate.

Internal repository documents are excluded in `_config.yml` and must not be added to the public sitemap.

## Project Structure

```text
_data/       Navigation, topics, authors, and UI data
_includes/   Reusable Liquid components
_layouts/    Default, home, post, page, and topic layouts
_posts/      Published Markdown articles
_sass/       iFood Security design system
_topics/     Topic landing pages
assets/      CSS, JavaScript, fonts, images, and avatars
```

## Deployment

GitHub Pages publishes the site from `main`. The custom domain is `blog.ifoodsecurity.com`; HTTPS and the redirect from the GitHub Pages hostname must remain enabled in repository settings.

Deployment flow:

1. Build locally with `JEKYLL_ENV=production`.
2. Merge the reviewed change into `main`.
3. Confirm the Pages deployment succeeds in GitHub.
4. Verify the homepage, one article, `/robots.txt`, and `/sitemap.xml` in production.
5. Submit the updated sitemap and inspect representative URLs in Google Search Console.

Release-level changes should be recorded in [CHANGELOG.md](CHANGELOG.md).
