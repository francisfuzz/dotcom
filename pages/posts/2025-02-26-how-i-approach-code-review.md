---
title: How @francisfuzz approaches code review
date: 2025-02-26
description: Contextualizing code for building confident change
tag: craft
---


I have a confession: I love reviewing code. It's one of my favorite things to do as a developer.

Considering over a decade's worth of reading, writing, and reviewing code, I'm writing this down as a snapshot of that collective experience working these roles:

- a senior software engineer for GitHub (currently for the New User Experience team)
- a software consultant for the handful of startups and software agencies since 2014
- a senior support engineer advising integrators with GitHub's Pull Requests user interface and API from 2016 - 2020

I'm documenting this to expose my process and to record a snapshot of what's most important to me as a member of a software engineering team. I'm always learning and open to new approaches especially as informed by research and practice and my hope is that I can help at least one person reading this incorporate something new in their flow.

Code review is one of the most important activities as a software developer. I define code review as the social, collaborative process of reviewing a set of changes before they're incorporated into their targeted branch. Whether I am the author of a changeset or the reviewer, I aim to structure my pull requests in a way that confidently present a case that can stand independent of my presence and a set of reproducible instructions for anyone to validate the changes for themselves. In addition, I value building psychological safety in code review as a way of building rapport with my teammates and to improve our team culture of interactivity. Check out [Building psychological safety in code reviews](https://www.francisfuzz.com/posts/2023-07-21-building-psychological-safety-in-code-reviews) for my perspective on that aspect! 😉

My experience is based on (and limited to) my work as a product engineer, open source contributor, and internal documentarian. Put another way, my work either faces customers publicly (think GitHub's signup page), faces my teammates reviewing our shared code-owned paths (think a refactor to improve developer ergonomics), or anyone at the company wanting to understand a feature better (think a primer to the GraphQL API and our internal tools for debugging errors and failures). In the future, I'd like to update this document to incorporate my experiences working with changes in the context of large language models and security.

## Overview

- [Gathering context](#gathering-context)
    - [Who is this for? Why is it being made now?](#who-is-this-for-why-is-it-being-made-now)
    - [Based on the audience and purpose, where and when are these changes being made?](#based-on-the-audience-and-purpose-where-and-when-are-these-changes-being-made)
- [Reviewing the diff](#reviewing-the-diff)
- [Validating locally and elsewhere](#validating-locally-and-elsewhere)

## Gathering context

> _Text without context is a con._ 

Gathering context is first to frame the changes in a way that helps me understand who they're for, why they're being made, and what to expect in the diff view at a later step. 

Drawing from Simon Sinek's "Find Your Why", I lean into the "circles" of purpose where in any process, understanding why at the very core of a process will help inform the later "what" goals to achieve and which steps ("how") to get there.

> Why => What => How

There's a snippet in the book that goes into the core of why, posing that the people or entities affected may be even more important to contextualizing motivations. In other words, if this change went out within the hour, who would be the most affected? Least affected? Somewhat affected? 

To that end, I think of

- Who authored this pull request? Is this a member of my team, or a collaborator outside of my team?
- Why are they authoring this pull request? Alternatively, what problem do they intend to solve or what goal do they intend to achieve with this changeset?
- Based on their role and intentions, who are these changes intended for?
  - If they face customers publicly, do we have a way to validate those changes in a review lab instance or a staging instance prior to production deployment? At this step, reading the original post for instructions to validate changes help a ton. Some relevant actions:
    - cloning the repository
    - installing the project dependencies
    - setting the appropriate configuration
    - enabling relevant feature flags
    - running the server locally using a script (with environment variables and flags)
    - navigating to the relevant page containing the changes (or for an API, a `curl` request to hit the endpoint)
  - If they face only the developer team:
    - Is there an attached architectural decision record supporting the change and its approach, outlining tradeoffs?
    - Are there internal style guides or documented paved paths to review the changeset against?

### Based on the audience and purpose, where and when are these changes being made?

- Getting a "locational" bearing
  - Which repository is this pull request located in?
  - What does the title tell me about what changes to expect in the diff view (or on GitHub, the `Files changed` tab)?
  - What is the ratio of additions to deletions? Does that ratio line up with what the title?
  - Since it's been marked ready for review:
    - Have there been any edits to the original post?
    - Who has already reviewed these changes, and what is their role in this pull request? Are these reviewers a maintainer, a code owner, or have another interest as a separate-yet-connected team member affected by this change?
- Getting a "prioritization" bearing
  - Why now? Or, what allowed this work to be prioritized first (now) versus other similar changes, be it technical debt, documentation changes, or a refactor?
  - Is there any other "connected" work to this pull request that should be considered?
    - For example, is there another set of pull requests or changes that must be landed first before this goes out?
    - Another example: are we waiting for another team like our privacy counsel, legal administrators, or security engineers to "clear" that aspect of the changes before this can go out?
- Automated checks
  - Does the continuous integration (CI) checks pass? If not, what checks are pending, timed out, failed, or errored, and is the author already aware of those failures?

## Reviewing the diff

Before I start my review of the code changes, I look at what others have done already to further optimize my personal context:

- What have previous reviewers already commented on?
- If AI tools have been enabled (like Copilot), what have they commented on?

With that in mind (or if starting on an "evergreen" yet-to-be reviewed pull request), I go through these questions:

- How many files have changed?
- What kinds of files have changed?
  - Do they all "belong" in this pull request, or are there specific files that can (or should) land separately in their own pull requests?
  - This is important in "bigger" codebases like GitHub.com, where we prioritize availability and the cost of landing a bigger set of changes can have a downstream impact on other teams and more importantly our customers who rely on us to be fully available for their work.
  - How many files are user-facing? What about the files that are service or system-facing only to developers? What's that ratio look like?
- How are the files changed connected to each other? Are there any "pork-barrel" changes that are nice-to-have but not-exactly-in-scope based on the `Gathering context` stage that should be called out?

In my review, I use the "Start a review" feature to make a series of comments before submitting the final review (requesting changes, approved, or commenting). In each comment, I think of the following types and preface my comment with one of these expressions to set expectations for what I'd like the authors to be aware of.

- `💅 Non-blocking suggestion`: if there's formatting that would be otherwise better handled by a developer tool (linter; bot; script) or a rewording, I find these helpful for the author to consider as a potential improvement without it blocking my approval for the changeset as a whole.
- `🙋 Question`: When I don't understand something or need more context about its relevance. I try really hard _not_ to sneak questions in as a requested change or a suggestion, but to draw out more from the author's intentions before deciding on what to do next.
- `🟡 Requested change`: when I know this area must either be reviewed and addressed (be it a change, correction, or a defense against change) before I can personally stand behind the approval of the changeset as a whole.
- `✨ Affirmation`: when I see something that I see is well-done or well-expressed. Can be anything from documenting a previously undocumented method or a way of improving performance, accessibility, or security in some way!

When I submit my review, I re-review my comments, create my own summary of the review, and submit it with my overall assessment.

### Validating locally and elsewhere

- Does the original post contain instructions for reliably reproducing the issue along with reliably reproducing the changes that address the issue? If not, I ask for them so I can test it myself.
- Have there already been deployments to staging or a review lab instance that anyone can check out for themselves? 
