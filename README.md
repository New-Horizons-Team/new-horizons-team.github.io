# iFood Security Blog

Welcome to the official security blog of the iFood team. We share cybersecurity research, engineering insights, open-source tools, and best practices from our production environment.

## About

This blog is dedicated to promoting cybersecurity knowledge and giving back to the open-source community that has enabled our work. We publish articles on:

- Security research and vulnerability analysis
- Incident response and disaster recovery strategies
- Offensive and defensive security techniques
- Tool development and security tooling
- Engineering best practices for secure systems

**Blog URL:** https://blog.ifoodsecurity.com

## Quick Start

### Prerequisites

- Ruby 3.3.0 (managed by `.ruby-version`)
- Bundler (included with Ruby)
  
For mac users, use the following link to setup the ruby https://jekyllrb.com/docs/installation/macos/.

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/New-Horizons-Team/new-horizons-team.github.io.git
   cd new-horizons-team.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000`

4. **Build for production:**
   ```bash
   bundle exec jekyll build
   ```
   Output is generated in `_site/`

## Writing a Blog Post

### Create a New Post

Posts are markdown files in the `_posts/` directory with the naming convention: `YYYY-MM-DD-title.md`

### Front Matter Template

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0300
categories: category1 category2
author: username
author_profile: true
---
```

**Important notes:**
- The date uses Brazil timezone (GMT-3): `-0300`
- Author `username` must match a key in `_data/authors.yml`
- Categories help organize posts on the site

### Writing Guidelines

- Use justified text alignment for prose:
  ```html
  <p style="text-align: justify;">Your text here...</p>
  ```
- Reference images relative to the site root:
  ```html
  ![Figure description](/assets/sec-eng/img/filename.png)
  ```
- Use centered figures with captions for clarity:
  ```html
  <p align="center">
    Figure 1: Description
    <img width="360" height="250" src="/assets/sec-eng/img/image.png">
  </p>
  ```

## Managing Authors

Authors are defined in `_data/authors.yml`. Each author entry includes:

```yaml
username:
  name: "Display Name"
  bio: "Short biography"
  avatar: "/assets/authors/image.png"
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:email@example.com"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://linkedin.com/in/..."
```

To add a new author:
1. Add their entry to `_data/authors.yml`
2. Place their avatar image in `assets/authors/`
3. Reference them in post front matter with the username

## Project Structure

```
.
├── _posts/              # Blog posts (Markdown files)
├── _data/               # Configuration data
│   ├── authors.yml      # Author profiles
│   ├── navigation.yml   # Site navigation
│   └── ui-text.yml      # Localized UI text
├── _includes/           # Reusable components
│   ├── author_bio.html
│   ├── footer.html
│   ├── head.html
│   └── ...
├── _layouts/            # Page templates
│   └── post.html        # Blog post template
├── _sass/               # Stylesheets
├── assets/              # Static assets
│   ├── authors/         # Author avatars
│   ├── img/             # General images
│   ├── fonts/           # Custom iFood fonts
│   └── sec-eng/img/     # Security posts images
├── _config.yml          # Main Jekyll configuration
├── index.md             # Homepage
├── about.md             # About page
└── CNAME                # GitHub Pages domain
```

## Technologies

- **Jekyll** 3.9.4 - Static site generator
- **Minimal Mistakes** - Theme
- **Ruby** 3.3.0
- **GitHub Pages** - Hosting and deployment

### Plugins

- `jekyll-feed` - Atom feed generation
- `jekyll-paginate` - Post pagination
- `jekyll-sitemap` - XML sitemap
- `jekyll-toc` - Table of contents
- `jekyll-gist` - GitHub Gist embedding
- `jekyll-data` - Data file processing
- `jemoji` - Emoji support

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The build is handled by GitHub Actions.

**Repository:** https://github.com/New-Horizons-Team/new-horizons-team.github.io
**Branch:** `main`
**Domain:** `blog.ifoodsecurity.com` (via CNAME)

## Development Workflow

1. Create a feature branch for your changes
2. Write posts or update content locally
3. Test with `bundle exec jekyll serve`
4. Push to the `main` branch to trigger deployment
5. Verify changes at https://blog.ifoodsecurity.com

## Local Development

Make the following changes in the `_config.yml` file:

1. Uncoment the line `theme: minimal-mistakes-jekyll` 
2. Comment the line `remote_theme: mmistakes/minimal-mistakes`

**Do not forget to back to previous state before deployment!**

### Commands

| Command | Purpose |
|---------|---------|
| `bundle install` | Install dependencies |
| `bundle exec jekyll serve` | Run development server (auto-reload) |
| `bundle exec jekyll build` | Build static site |
| `bundle exec jekyll clean` | Remove build artifacts |

**Note:** Changes to `_config.yml` require restarting the development server.

## Contributing

We welcome contributions! To add a post or contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-topic`
3. Add your post to `_posts/`
4. Test locally with `bundle exec jekyll serve`
5. Submit a pull request

### Pull Request Guidelines

- Include a clear description of your post topic
- Verify images load correctly
- Ensure front matter is properly formatted
- Test the site builds without errors

## Contact

- **Email:** security@ifood.com.br
- **Twitter:** [@ifoodsecurity](https://twitter.com/ifoodsecurity)
- **GitHub:** [@ifoodsecurity](https://github.com/ifoodsecurity)
- **LinkedIn:** [iFood](https://www.linkedin.com/company/ifood-/)
- **Instagram:** [@ifooduniverso](https://www.instagram.com/ifooduniverso/)
- **Medium:** [iFood Engineering](https://medium.com/ifood-engineering)

## License

This blog is maintained by the iFood Security team.

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com)
- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Happy writing! Share your security knowledge with the world.** 🔐
