---
name: add-post-skill
description: Create a new Jekyll blog post in _posts/ using the site's filename convention, required front matter, and a starter content shell.
---

# Add Post Skill

## When to use
Use this skill when asked to create, initialize, scaffold, or draft a new blog post for this site.

## Goal
Create a new Markdown file in `_posts/` that matches this repository's Jekyll conventions:
- filename: `YYYY-MM-DD-slug.md`
- front matter includes `layout: post`, `title`, and `date`
- optional `description` when provided
- content includes a practical starter shell for writing

## Repository conventions
- Posts live in `_posts/`
- Post layout is `post`
- Permalinks are generated automatically by Jekyll from the global config
- The current layout only requires `title` and `date` for rendering

## Inputs
- `title` (required)
- `description` (optional)
- `date` (optional; default to current date in `YYYY-MM-DD`)

## Steps
1. Normalize the title into a slug:
   - lowercase
   - replace runs of non-alphanumeric characters with `-`
   - trim leading/trailing `-`
2. Choose the date:
   - use the provided date if present
   - otherwise use today's date in `YYYY-MM-DD`
3. Build the destination path:
   - `_posts/<date>-<slug>.md`
4. Refuse to overwrite an existing post unless explicitly asked
5. Write the file with this template:

```md
---
layout: post
title: <TITLE>
date: <YYYY-MM-DD>
description: <DESCRIPTION>
---

Write your introduction here.

## Key points

- Add your first point
- Add your second point
- Add your third point

## Details

Add the main body of the post here.

## Closing

Wrap up with the takeaway or next step.
```

6. If no description was provided, omit the `description` line entirely
7. Return the created file path

## Notes
- Do not add `permalink` unless explicitly requested; the site config already handles this
- Do not add extra metadata fields unless asked, because the current layout does not use them
- Keep the shell lightweight and editable

## Example
Input:
- title: `A Better Way to Debug CI Failures`
- description: `Notes on narrowing CI issues quickly`

Output path:
- `_posts/2026-04-09-a-better-way-to-debug-ci-failures.md`

Output file:
```md
---
layout: post
title: A Better Way to Debug CI Failures
date: 2026-04-09
description: Notes on narrowing CI issues quickly
---

Write your introduction here.

## Key points

- Add your first point
- Add your second point
- Add your third point

## Details

Add the main body of the post here.

## Closing

Wrap up with the takeaway or next step.
```
