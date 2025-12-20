# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Francis' personal portfolio website built with **Jekyll** and hosted on **GitHub Pages**. The site automatically deploys when pushing to the `main` branch.

## Development Commands

### Docker (Recommended)
```shell
# Build the Docker image
docker build -t francisfuzz-site .

# Run the container (includes live reload on port 35729)
docker run -d --rm --name francisfuzz-site -p 4000:4000 -p 35729:35729 francisfuzz-site

# View logs
docker logs -f francisfuzz-site

# Stop the container
docker stop francisfuzz-site
```

Site will be available at http://localhost:4000

### Native Ruby (Alternative)
```shell
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# View at http://localhost:4000
```

**Note:** The `eventmachine` gem has known compilation issues on macOS. Use Docker if you encounter installation problems.

## Architecture

### Content Structure
- **`_posts/`**: Blog posts in Markdown format. Filename convention: `YYYY-MM-DD-title.md`
- **`_layouts/`**: Reusable HTML templates
  - `default.html`: Base layout with navigation, footer, and inline CSS
  - `post.html`: Wraps blog posts with title and date metadata
- **`index.md`**: Homepage "About" content
- **`resume.md`**: Resume/CV page
- **`posts.md`**: Blog posts index
- **`public/`**: Static assets (fonts, favicon, feed.xml)

### Jekyll Configuration (`_config.yml`)
- **Permalink structure**: `/posts/:year/:month/:day/:title/`
- **Plugins**: `jekyll-feed` (RSS), `jekyll-seo-tag` (meta tags)
- **Live reload disabled** to avoid eventmachine dependency issues
- Kramdown markdown processor

### Layout System
The site uses a two-layer layout hierarchy:
1. `default.html` provides the base structure (header, nav, footer, CSS)
2. `post.html` inherits from `default.html` and adds article markup with date formatting
3. Pages specify their layout via front matter: `layout: default` or `layout: post`

### Styling
All CSS is inline in `_layouts/default.html` (lines 10-45). Uses system fonts and GitHub-inspired color scheme (`#0366d6` for links, `#e1e4e8` for borders).

## Deployment

GitHub Pages automatically builds and deploys from the `main` branch. No manual build or deployment steps required.
