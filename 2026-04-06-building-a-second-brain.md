---
title: "Building a second brain"
date: 2026-04-06
description: "Extending my contexts using Git + agents"
tags:
  - project
---

<!-- TODO: Add screen.studio demo -->

Problem: performance reviews are coming and I need to re-remember what I did in the last `$TIME_PERIOD`. I'm scrambling to write a script, look at the last few months of work, and make sense of things. There must be a better way.

Attempt at a solution: I built a second brain with this purpose:

> Francis' second brain, living on GitHub. A knowledge system that ties together notes, plans, retros, writing, and engineering projects—so nothing important lives only in my head.

Inspiration to get to this point:

- [Jon Magic](https://jonmagic.com/about/)'s [How I Work, 2025 Edition](https://jonmagic.com/posts/how-i-work-2025-edition/)
- [Ben Balter](https://ben.balter.com/about/)'s [Why everything should have a URL](https://ben.balter.com/2015/11/12/why-urls/)
- [Tiago Forte's Building a Second Brain](https://www.buildingasecondbrain.com/): never read it, but some of the videos I've seen have helped shaped early ideas

## Structure

As of April 2026, this is how my directories are organized:

- **Daily Projects**: Day-level focus logs and context, organized by date
- **Weekly Notes**: Planning, goals, and backlinks; weekly anchors for reflection
- **Meeting Notes**: Conversations captured with timestamps and action items
- **Snippets**: Weekly accomplishment summaries (Ships, Collabs, Risks, etc.)
- **Executive Summaries**: Distilled updates for leadership
- **Projects**: Multi-week initiatives with milestones and resources
- **Self**: Personal context—assessments, performance reviews, goals, personality insights
- **Feedback**, **Transcripts**, **Templates**, **Archive**: Supporting systems

I have specific skills to power the work:

- creating daily notes
- summarizing weekly notes, from the last week of notes
- transforming meeting transcripts into reusable artifacts
- PR review assist: a way to track the reviews I give and the context that I can reuse for other reviews

## How it's going, and the neat things I've done with it

- Crawling the corpus of all content I've ever created using GitHub and creating my own writing style guide based on my voice, packaged as an agent skill
- Starting the day with a template, (also packaged as a skill)
- Reviewing the week as a composite, packaging that as a skill
- Creating artifacts from raw meeting notes and relinking that back into my daily notes
- Introspection and trajectory projection to understand how I'm tracking with my goals

<!-- TODO: Actually create a template based on my current, without all the actual content -->
Check out the second-brain-template (open source!): https://github.com/francisfuzz/second-brain-template
