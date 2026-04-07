---
title: "Building a second brain"
date: 2026-04-06
description: "Extending my contexts using Git + agents — and what the log reveals that I never intended to show"
tags:
  - project
---

# Building a Second Brain

**Date:** 2026-04-06  
**Tags:** project

## The Journey to Git

I've cycled through many writing mediums—notebooks, Apple Notes, Notion, Evernote, Google Docs, and paper. It wasn't until December 2026 that I settled on a Git repository as my primary system for logging thoughts, work, and learnings.

The shift came after reading [Jon Magic's "How I Work, 2025 Edition"](https://jonmagic.com/posts/how-i-work-2025-edition/) and revisiting [Ben Balter's "Why everything should have a URL"](https://ben.balter.com/2015/11/12/why-urls/). As someone who's worked with Git since 2012, the transition felt natural—directing my working memory into version control rather than scattered notes apps.

The immediate benefit: performance reviews and accountability. Instead of scrambling to remember what happened in the last quarter, I had a structured log. Over the past few months, I've used this system to understand my own processes better.

## Current Structure (April 2026)

- **Daily Projects** — Day-level focus logs and context, organized by date
- **Weekly Notes** — Planning, goals, and backlinks; weekly anchors for reflection
- **Meeting Notes** — Conversations with timestamps and action items
- **Snippets** — Weekly accomplishment summaries (Ships, Collabs, Risks, etc.)
- **Executive Summaries** — Distilled updates for leadership
- **Projects** — Multi-week initiatives with milestones and resources
- **Self** — Personal context: assessments, performance reviews, goals, personality insights
- **Feedback, Transcripts, Templates, Archive** — Supporting systems

### Automation Skills

I've built several agent skills to power the workflow:

- Creating daily notes
- Summarizing weekly notes
- Transforming meeting transcripts into reusable artifacts
- PR review assist: tracking reviews and reusable context

## What the Git Log Reveals

The real insight came from studying the corpus itself. I've used the historical record to crawl my writing, build a personal writing style guide (packaged as an agent skill), and link ideas across contexts. But the most revealing discovery was what Git captures *unintentionally*.

### The Commit Graph as Data

The content of each note is intentional—I chose every word. But the commit graph isn't. The timestamps, cadence, and gaps accumulated without my direction.

**The gaps are information too.** What doesn't appear in the commit history is as expressive as what does.

- Weekends are nearly silent (intentional design working as intended)
- The system is almost entirely optimized for *capture*, not *retrieval testing*. Writing something down is treated as equivalent to knowing it. The implicit bet: `git log` itself is the retrieval mechanism. When I need to reconstruct February, I run the log, filter by date, and follow the breadcrumbs.

### Time Made Legible

It's easy to treat version control as a technical requirement—something developers use because that's what we do. But in a knowledge system, Git does something different: it makes time legible.

- Every commit is an unfakeable timestamp
- Every commit message is a claim about intent
- Every diff is the delta between two states of mind
- The full history is preserved—not edited, not summarized, not lost

You can go back and see not just *what* you thought, but *when* you thought it and *how confident you were*.

**This is what separates it from a notes app.** Notes apps store content. Git stores content *and* the progression of content over time. The progression is often more valuable than any single snapshot.

## Where This Is Headed

The system is alive and imperfect. Some weeks are captured in detail; others get a single setup commit and nothing more. The structure has evolved—directories renamed, skills removed, workflows refactored. That evolution is documented too (which is the point).

The goal was never perfection. It was to build a system that improves through use—and that leaves enough of a trail that anyone paying close attention can see the shape of the work over time.

---

**Resources:**
- [second-brain-template (open source)](https://github.com/francisfuzz/second-brain-template)