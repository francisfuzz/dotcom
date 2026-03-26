---
title: "Building tariff-everywhere: One Dataset, Many Interfaces"
date: 2026-03-26
description: "How I turned a public API into a CLI, MCP server, and searchable web interface—iteratively, with Claude as a thinking partner"
tags:
  - project
---

After hearing about US Tariff Codes so much on the news, I wanted to understand them for myself. I decided to spend some time digging into the tariff codes and using Claude Code to organize them in a meaningful way.

What started as a small project to store tariff data in a SQL database and make it queryable through a CLI grew into something much broader: an MCP server, a [publicly searchable index](https://tariff-everywhere.fly.dev/) powered by [Datasette](https://datasette.io/) and [Fly.io](http://fly.io/), and an exported Python library that developers can integrate into their code (though at time of writing, not published to any registry--but certainly possible!). It's all published as an [open source repository at `francisfuzz/tariff-everywhere`](https://github.com/francisfuzz/tariff-everywhere).

Give it a try: [https://tariff-everywhere.fly.dev/](https://tariff-everywhere.fly.dev/)

## How it started

Straight from [the United States International Trade Commission's site](https://hts.usitc.gov/):

> The Harmonized Tariff Schedule of the United States (HTS) sets out the tariff rates and statistical categories for all merchandise imported into the United States. The HTS is based on the international Harmonized System, which is the global system of nomenclature applied to most world trade in goods.

When I started exploring the US International Trade Commission's API, I was just trying to understand what was there. The public endpoint was less documented than I expected, and the original plan I'd sketched referenced an endpoint that no longer worked. That initial confusion actually shaped everything that came after.

The real API turned out to be simpler than I'd feared: a flat JSON feed returning about 28,750 tariff entries across 99 chapters. No pagination helpers, no release versioning—just straightforward data. A chapter-based ingest pattern was a natural fit: download one chapter at a time, parse it, store it. It scales linearly and gives you natural checkpoints.

I documented these learnings in early commits because I knew future me would forget the dead ends. 🙈

## Building Three Layers

Once I understood the API shape, I needed to figure out how to make this data actually useful. I wanted it to work in three contexts: from the command line for developers, as an MCP server for Claude, and eventually as a browsable interface. But first things first—I had to build the foundation.

The [ingest script](https://github.com/francisfuzz/tariff-everywhere/blob/main/scripts/ingest.py) was straightforward: hit the API for all 99 chapters, parse the JSON, and store everything in SQLite. I created three tables—chapters, hts_entries, and data_freshness—to capture both the tariff data and metadata about when things were last checked. About 134,000 entries in total. It's a lot of data, but SQLite handles it without breaking a sweat.

The CLI came next, built with [Typer](https://typer.tiangolo.com/). I put together commands for searching by keyword, looking up exact codes, browsing by chapter, and retrieving metadata. Then I built an MCP server that exposed the same queries over stdio for Claude integration. The MCP work taught me something about JSON handling—Claude pointed out that using `print()` directly instead of Rich's console formatting keeps ANSI control characters out of the JSON output. A small detail, but one that matters for clean integration.

[Tests were important here too](https://github.com/francisfuzz/tariff-everywhere/tree/main/tests). I built the test suite early, using in-memory SQLite fixtures so tests run fast and don't depend on actual database state. That pattern paid off immediately when refactoring came later.

## The Freshness Problem

Once the initial ingest worked, I started thinking about what happens when tariff data changes. The USITC doesn't expose revision numbers or release dates, so I needed another way to detect staleness. The solution was content hashing: hash each chapter, compare against what's stored, and only re-ingest if something actually changed.

The [refresh script](https://github.com/francisfuzz/tariff-everywhere/blob/main/scripts/refresh.py) handles this in parallel. It spins up a thread pool, hashes all 99 chapters at once, and compares the results to what's in the database. If a chapter's content differs, that chapter gets re-ingested. I also started tracking two timestamps per chapter: when we last checked and when the data actually changed. That distinction matters—it tells you whether something is truly stale or just old data you've already validated.

Before any refresh operation, [the script creates a backup](https://github.com/francisfuzz/tariff-everywhere/blob/9ff4b05fb1edb3476c7040226d999651dfc9dfe7/scripts/refresh.py#L132-L147). It's a simple step, but it means if something goes wrong, you can recover. Defensive programming isn't paranoia—it's respecting that production systems have higher stakes than development. The backup costs almost nothing and buys a lot of peace of mind.

This is where I learned to distinguish between ingest and refresh. Ingest is destructive—it rebuilds everything from scratch. Refresh is careful—it validates, updates selectively, and preserves the database. They have different failure modes, and treating them as such made the system safer.

## Stopping to Refactor

At some point, I noticed I was duplicating query logic between the CLI and the MCP server. Both needed the same database operations, just with different invocation patterns. This bothered me more than it should have, so I stopped feature work and extracted a shared core library—which later became an exportable Python module.

Creating `hts_core/` with a configurable database path meant both interfaces could import the same functions. Now when I need to change how queries work, I change them in one place. It's the kind of refactoring that seems optional until you need to update something three months later and realize how grateful you are to past you.

I also hardened the Docker setup and added CI: GitHub Actions runs the test suite on every commit. Standard stuff, but it matters to know the project works reliably—and if it breaks, I'll know immediately.

## The Datasette Pivot

Claude suggested something that changed how I thought about the project: "What if we exposed this as a searchable web interface?" I'd been thinking CLI and MCP only, but that question opened something up. Why shouldn't people be able to browse tariffs in a browser?

That's how I ended up building Datasette integration. Datasette is remarkable—it lets you publish a SQLite database as a web interface without writing any web code. Point it at your database, and you have a searchable, browsable interface with full-text search on tariff descriptions. No Flask routes, no HTML templates, no API endpoints to maintain.

The integration taught me some hard lessons. If you create FTS5 indexes with raw SQL, Datasette won't auto-detect them—but if you create them with `sqlite-utils`, Datasette sees them immediately. I learned that the hard way when I deployed the first version and search didn't work. I also ran into a Typer/click compatibility issue that took some untangling.

Getting the chapter titles right was a small thing that mattered a lot. Instead of showing "Chapter 01," the interface now shows "Live Animals" or "Copper and Articles Thereof." Users see actual chapter names instead of numbers. Some entries have `<i>` tags for scientific names, so I installed `datasette-render-html` to make those render correctly instead of showing raw HTML.

This pivot—from API-only to browsable web interface—is probably the thing I'm most proud of. It made the tariff data accessible to people who don't write code.

## Getting the Name Right

At some point it became clear that `usitc-app` was the wrong name. It was descriptive—it told you what API it used—but it didn't communicate what the project did or why you'd want to use it. After thinking about what this thing really was, the name `tariff-everywhere` emerged: a lookup service you can use everywhere—in your terminal, in Claude, in a web browser. Anywhere you might need to understand a tariff code.

The rename was methodical: first the repository references, then the live web app URL, then the deployment configurations. I could have left stray references to the old name, but that's the kind of thing that bugs future maintainers. If you're going to rename something, rename it all the way through.

## Documentation and Licensing

A project isn't really done until someone else can use and maintain it. I rewrote the README to guide people through the three ways they can use tariff-everywhere: from the command line as a developer, as an MCP server with Claude, or as a web interface to just look something up. Each mode has its own documentation, all starting from the same place.

CLAUDE.md became the deep documentation: architecture, patterns, how to debug when things go wrong, how to deploy. I wrote it knowing that future work on this project will probably involve Claude, and whoever touches the code next should understand the decisions that were made.

I also chose the Hippocratic License—an open-source license that protects against the code being used to cause harm. I wanted the code to be open (that's important to me), but I also wanted guardrails. The Hippocratic License gave me both.

Licensing and documentation are the things people don't think about when they're building, but they matter enormously for longevity. A project without documentation dies. A project without thoughtful licensing can end up in places you never intended.

## Building With AI

The interesting thing about this project is that Claude was a thinking partner the whole way through. When I was confused about the API, Claude helped me understand what I was looking at. When I missed an ANSI control character vulnerability, Claude caught it. When I was stuck in a CLI-only mindset, Claude suggested a web interface and changed the whole trajectory of the project.

The later commits show the work of preparing the repository for ongoing collaboration with Claude: adding `.claude/` to gitignore, documenting patterns and decisions in a way that makes sense to an AI reading the codebase, and revising the core instructions when we missed something. This created a nice loop of shipping, pivoting, and grounding the work. The [full `CLAUDE.md` history](https://github.com/francisfuzz/tariff-everywhere/commits/main/CLAUDE.md) is telling in what we went back and forth on (Docker 😉).

This loop came up a lot in my mind and practice as we worked together:

```
Articulation → Discovery → Explain → Plan → Edit → Review → Refactor → Agent → Monitor → Learn
     ↑                                                                                      |
     └────────────────────── reflection loop ───────────────────────────────────────────────┘
```

---

## What This Whole Thing Taught Me

**Defensive thinking matters.** For every feature I added, I asked "what goes wrong?" first. Backups before mutations. Hashes to detect changes. Tests that run in isolation. None of it is glamorous, but it's the difference between a project you can trust and one you can't.

**Refactoring when you spot duplication pays dividends.** The `hts_core/` extraction wasn't required, but it meant later changes happened in one place instead of three.

**Naming is important.** `usitc-app` was technically correct and completely unmemorable. `tariff-everywhere` tells you what the project does and how it works. Spend the time on names.

**Many modes of interaction beat one.** A CLI for developers. An MCP server for Claude users. A web interface for everyone else. Same underlying code, three entry points. That's good design.

**Documentation is not optional.** Not as a checkbox, but because the next person to touch this code—including me, three months from now—needs to understand why decisions were made. CLAUDE.md isn't a reference manual; it's the paper trail of thinking.

## What Remains

The project is functional. All three modes work—CLI, MCP, web. Tests pass. The Datasette instance is live. The code is documented. The decisions are recorded. If I walked away today, someone could pick this up and maintain it. That feels complete—for now, until I come back to it.

What I've tried to do is leave the best gift a developer can leave: a codebase where decisions are explained, not just implemented. Where defensive patterns are intentional, not random. Where someone—whether that's me in a few months or someone else entirely—can understand not just what the code does, but why it was built that way.

Give it a try: [https://tariff-everywhere.fly.dev/](https://tariff-everywhere.fly.dev/)
