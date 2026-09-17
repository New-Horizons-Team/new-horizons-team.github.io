# Changelog

All notable changes to the iFood Security Blog are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for major site releases.

## [2.0.1] - 2026-09-17

### Changed

- Updated the Emanuel Valente author portrait and removed the superseded image asset.

### Fixed

- Preserved accessible contrast for visited, active, focused, current, and hovered links in the mobile navigation.

## [2.0.0] - 2026-09-17

### Added

- New iFood Security design system with brand typography, color tokens, responsive layouts, and accessible interaction states.
- Editorial homepage with featured articles, recent posts, topic navigation, and careers CTA.
- Dedicated topic collection and index pages for AI Security, Cloud & Infrastructure, Security Research, Secure Engineering, and Community.
- Reusable post-card, author-card, header, footer, SEO, page, and topic components.
- Open Graph image and complete Twitter Card metadata.
- `Organization`, `WebSite`, `WebPage`, and `BlogPosting` structured data.
- Curated descriptions, excerpts, topics, available cover images, and homepage feature metadata for all existing posts.
- Legacy redirect for the original FGKASLR article URL.
- Responsive, privacy-enhanced YouTube embeds with accessible titles.

### Changed

- Rebuilt the homepage, article, About, topic, and 404 experiences with repository-owned layouts.
- Pinned Minimal Mistakes to 4.27.3 and aligned local and GitHub Pages builds.
- Updated navigation, footer, author biographies, article heading hierarchy, and publishing documentation.
- Replaced the oversized Caio Ferreira avatar with an optimized derivative.
- Moved editorial navigation to the `topic` field while preserving existing category-based URLs.
- Enabled production-only Google Analytics loading.

### Fixed

- Absolute production URLs in canonicals, Open Graph metadata, sitemap, feed, and `robots.txt`.
- Invalid visual markup previously rendered inside the document `<head>`.
- Empty homepage heading and invalid homepage person schema.
- Missing or low-quality search descriptions across existing pages and articles.
- Missing accessible names for images, video embeds, social links, and mobile navigation.
- Mobile overflow and fixed-width media issues in articles and the footer.
- Internal repository documentation being included in the generated site and sitemap.

### Removed

- Unused author and head customization includes.
- Unpinned theme overrides copied from an older Minimal Mistakes release.
- Undeclared `jekyll-data` and `jekyll-toc` plugin configuration.
- Hardcoded Twitter follow badge from the post layout.
