# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based blog for the iFood Security team, hosted on GitHub Pages. It publishes security research, tools, and engineering insights. The site uses the Minimal Mistakes Jekyll theme and is configured to deploy automatically from the `main` branch.

## Build & Development Commands

**Install dependencies:**
```bash
bundle install
```

**Run local development server:**
```bash
bundle exec jekyll serve
```
The site will be available at `http://localhost:4000`. The server automatically reloads when files change (except `_config.yml` - restart the server if you modify it).

**Build for production:**
```bash
bundle exec jekyll build
```
Output is generated in the `_site/` directory.

**Clean build artifacts:**
```bash
bundle exec jekyll clean
```

## Environment

- **Ruby version:** 3.3.0 (specified in `.ruby-version`)
- **Jekyll version:** 4.2+ (via github-pages gem ~229)
- **Theme:** Minimal Mistakes Jekyll (bundled locally, not remote_theme)

## Project Structure

- **`_posts/`** - Blog posts in markdown format (named with date prefix: `YYYY-MM-DD-title.md`)
- **`_data/`** - Data files (YAML format):
  - `authors.yml` - Author profiles with bio, avatar, and social links
  - `navigation.yml` - Site navigation configuration
  - `ui-text.yml` - Localized UI text
- **`_includes/`** - Reusable HTML/Liquid components:
  - `head.html`, `head/custom.html` - Page head customizations
  - `author_bio.html` - Author bio display
  - `footer.html` - Footer customizations
  - Custom includes for embeds (YouTube, etc.)
- **`_layouts/`** - Page templates (e.g., `post.html`)
- **`_sass/`** - SCSS stylesheets
- **`assets/`** - Static assets:
  - `authors/` - Author avatar images
  - `img/` - Post and general images
  - `sec-eng/img/` - Security engineering post images
  - `fonts/` - Custom iFood fonts (TipoiFoodTextos, TipoiFoodTitulos)
- **`_config.yml`** - Main Jekyll configuration (site title, theme, plugins, footer links)
- **`index.md`** - Homepage content
- **`about.md`** - About page

## Key Conventions

### Blog Posts

Posts follow a strict front matter format:
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS -0300  # Brazil timezone (GMT-3)
categories: category1 category2
author: username  # Must match a key in _data/authors.yml
author_profile: true
---
```

- Use justified text alignment for prose: `<p style="text-align: justify;"> ... </p>`
- Images are referenced relative to the site root: `/assets/sec-eng/img/filename.png`
- Use figure captions with centered alignment for clarity

### Adding Authors

Edit `_data/authors.yml` following the existing format:
```yaml
username:
  name: "Display Name"
  bio: "Short bio"
  avatar: "/assets/authors/image.png"
  links:
    - label: "Label"
      icon: "fas fa-fw fa-icon"
      url: "https://..."
```

Avatar images are stored in `assets/authors/`.

### Adding Assets

- Post images go in `assets/sec-eng/img/`
- Author images go in `assets/authors/`
- Reference them relative to site root: `/assets/path/to/image.ext`

## Plugins & Features

Active Jekyll plugins:
- `jekyll-data` - Data file processing
- `jekyll-paginate` - Post pagination
- `jekyll-sitemap` - XML sitemap generation
- `jekyll-gist` - GitHub Gist embedding
- `jekyll-feed` - Atom feed generation
- `jemoji` - Emoji support
- `jekyll-include-cache` - Include caching optimization
- `jekyll-toc` - Table of contents generation (auto-generates TOC in posts)

## Deployment

- **Repository:** `New-Horizons-Team/new-horizons-team.github.io`
- **Branch:** `main` (automatically deployed to GitHub Pages)
- **URL:** `https://blog.ifoodsecurity.com` (via CNAME)

The site builds automatically on push to `main`. Check GitHub Actions for build status.

## Common Tasks

**Create a new blog post:**
1. Create file `_posts/YYYY-MM-DD-title.md`
2. Add proper front matter (see "Blog Posts" section above)
3. Write content in markdown with proper HTML for styling
4. Push to trigger automatic deployment

**Update author information:**
Edit `_data/authors.yml` - changes appear on all posts by that author.

**Add custom CSS:**
Minimal Mistakes theme allows custom CSS in `_includes/head/custom.html`. Avoid modifying `_sass/` directly unless updating the theme.

**Test build locally before pushing:**
Run `bundle exec jekyll serve` and verify at `http://localhost:4000`.
