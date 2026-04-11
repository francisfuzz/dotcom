---
name: add-post-skill
description: Create a new Jekyll blog post in _posts/ using the site's filename convention, required front matter, and a starter content shell.
---

# Add Post Skill

## When to use
Use this skill when asked to create, initialize, scaffold, or draft a new blog post for this site.

## Goal
Create a new Markdown file in `_posts/` that matches this repository's Jekyll conventions.

## Inputs
- title (required)
- description (optional)
- date (optional, YYYY-MM-DD)
- draft flag (optional)

## Behavior
- Slugify title (lowercase, hyphenated)
- Use provided date or default to current date
- If draft flag is set, create file in `_drafts/slug.md`
- Otherwise create `_posts/YYYY-MM-DD-slug.md`
- Validate slug is non-empty
- Quote YAML values safely
- Do not overwrite existing files

## Template

---
layout: post
title: "<TITLE>"
date: <YYYY-MM-DD>
description: "<OPTIONAL>"
---

Write your introduction here.

## Key points

- 
- 
- 

## Details

## Closing

## Notes
- Permalinks handled by `_config.yml`
- Script available: `scripts/new-post.sh`
