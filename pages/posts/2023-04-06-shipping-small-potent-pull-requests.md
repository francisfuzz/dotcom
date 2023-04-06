---
title: Shipping small
date: 2023-04-06
description: Potent Pull Requests
tag: engineering
---

One of GitHub's Leadership principles is "ship to learn." I've found that this principle is often effective when I ship small, potent pull requests: a pull request that is small in scope yet has a high impact on the product.

Here's the `tl;dr` version of this post in relation to the above principle:

1. Before working on a new feature, I should ask myself what the smallest, most potent changes I can make are and write that down in an issue where it's visible to the team.
1. When I start working on a feature, I should open a draft pull request as soon as I have something to show.
1. After two working days, if I haven't marked my pull request as ready for review, I'm probably working on too much and should ask for my team's input in narrowing the scope of my pull request into smaller, more potent pull requests.

## The story

A few weeks ago, I joined a new track at work focused on shipping a new feature. My track lead gave me the creative autonomy to scope my assigned portion: building a system for managing user permissions.

Our track's designer shared their designs with me and I used that as a start for my first pull request. I introduced a static version of this system using only [Primer View Components](https://primer.style/view-components) and a few of the Rails primitives (routes, controllers, and views). By only focusing on the UI, I was able to ship a small, potent pull request.

Feeling confident, I charged in to work on my next pull request!

Specifically, I started working on a part of the backend that exposed a new method for returning meaningful data in the UI. On Monday, I had a handful of files that were not polished but at the 30% mark of what I felt was ready. On Tuesday and Wednesday, the scope of my pull request grew as I went deeper into development. By Thursday morning, over 20 files had been changed, spanning from updating the views I originally worked on to adding new models and controllers. 😬

When I finally marked my [draft pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) ready for review, one of the staff engineers on my team reviewed my work as it was. One of the most valuable questions she asked was if I'd be open to shipping the model-specific changes in a separate and earlier pull requests.

I immediately agreed. Writing this out, I'll go on the record and say that I'm glad I did.

On that Thursday afternoon, I moved the model-specific changes to a separate pull requests. This gave me a chance to refactor the new module I introduced and to double-check my tests. In addition, I found some mistakes in the internal documentation I wrote for that module and fixed them. When I re-requested her review near my end-of-day, she gave me very focused feedback on the tests that implicitly taught me of another way of writing the same test fixtures in a more concise way.

I came back to work on Friday morning. My goal was to address her feedback and ship that pull request. After requesting another review, she approved the changes and I spent the rest of the day shepherding it through our deployment queue to get it into production! 🚀

## For the future

My `tl;dr` captures the essence of what I'd like to try. However, something that I recently came across months ago is this practice of [Daisy-chaining pull requests](https://github.blog/2020-05-21-github-protips-tips-tricks-hacks-and-secrets-from-sarah-vessels/#daisy-chaining-pull-requests). [`@cheshire137`](https://github.com/cheshire137) wrote about this at length in [GitHub Protips: Tips, tricks, hacks, and secrets from Sarah Vessels](https://github.blog/2020-05-21-github-protips-tips-tricks-hacks-and-secrets-from-sarah-vessels/) and I'll write about it in a future post!
