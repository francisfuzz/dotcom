---
title: March 2023
date: 2023-04-04
description: My one-and-only month as an engineer on the GitHub Discussions team
tag: engineering
---

I joined the GitHub Discussions team in March 2023. [GitHub Discussions](http://github.com/features/discussions) is a new feature that allows users to have conversations in their repositories. It's a place for users to ask questions, share ideas, and collaborate on projects. Having worked as a program manager for the GitHub Community, Discussions has a special place in my career journey as that team now [uses Discussions](https://github.com/community/community/discussions) as an interface between Hubbers and customers!

This post covers my month as a Discussion engineer. Next week, I'm joining the [GitHub Education](https://education.github.com/) team to work on their Global Campus feature.

## Before Discussions: i18n and l10n

Previous to my joining, I worked on a small-yet-mighty team to investigate the work it would take to make GitHub.com available in more languages. For internationalization and localization, I loved:

- Working on a gem written only in Ruby and honing in on Ruby fundamentals (this point could be its own blog post in the future)
- Collaborating with another engineer and having the creative autonomy to explore the cases we found most important
- Actively demoing our work with internal product teams

However, I missed working on a bigger team and on a customer-facing product. I spoke with my manager of possible teams to transition to and leading up to March, an opportunity came up to join Discussions!

## Joining Discussions: onboarding, learning, and shipping

- Onboarding to the team
- Learning the codebase
- Shipping my first pieces of work

### Onboarding to the team

Every GitHub team has their own onboarding checklist which is geared toward preparing members for success in being a productive member of the team. My experience mainly consisted of building up context, signing up for the appropriate notifications and services, and taking my time learning how everything connected together.

To capture all of my learnings, I created my own Discussion post in our team repository:

![francis-onboarding-questions-original-post](https://user-images.githubusercontent.com/15894826/229638221-0ed94118-0aca-4a69-965f-361f1c79dcdc.png)

I'm a builder _and_ a client of what I'm building. 😉

Here are the rules I set up for myself:

- Create a post per question
- Ask at least two new questions a day
- If you don't get any answers, ask the team for help in Slack

One of the people that provided the most answers was my onboarding buddy, [`@bestra`](http://github.com/bestra) (Chris). He volunteered to get me up to speed and I am eternally grateful for his energy and presence! Specifically, he subscribed to that Discussion post and followed up on any questions to provide context where it wasn't documented. In addition, we paired numerous times to navigate our codebase, walking through the services that powered our feature and clarifying bits in our internal documentation that would have otherwise seemed cryptic.

### Learning the codebase

The software that runs GitHub is [Ruby on Rails](https://github.com/rails/rails). Having been away from developing directly on this application for a number of months, I took some time to re-learn how Discussions fit in the current structure. Along the way, I learned (and even re-learned) the team's development practices and conventions.

Of the numerous things I learned, here are three things that I really enjoyed working with:

- [Sorbet](https://sorbet.org/): it's a static type checker for Ruby to help us catch bugs at runtime. There's an interactive [Playground](https://sorbet.run/) that I found helpful in learning the syntax. In addition, we have an internal Slack channel `#sorbet` and GitHub-specific guide that often provided context that went great with [Sorbet's public documentation](https://sorbet.org/docs/overview). 🍦
- [Routing](https://guides.rubyonrails.org/routing.html): how to define routes in Rails, specifically about [controller namespaces and routing](https://guides.rubyonrails.org/routing.html#controller-namespaces-and-routing) and [customizing resourceful routes](https://guides.rubyonrails.org/routing.html#customizing-resourceful-routes). 🚆
- [Primer ViewComponents](https://primer.style/view-components/): it's really incredible to know that we have a dedicated team working on these view components and more largely, the Primer Design System. I might be in the minority here, but I really enjoying using reliable components over writing custom HTML and CSS that I would have to maintain myself. In addition, there's an interactive [Lookbook](https://primer.style/view-components/lookbook/pages/forms/introduction) that I found quite helpful. 🎨

### Shipping my first pieces of work

There are three pieces of work I want to highlight.

First up: investigating a quality issue! I spent an hour investigating whether or not the Sentry errors that were reported as a part of a specific path returning a [`500 INTERNAL SERVER ERROR`](https://httpstatuses.io/500) were still relevant for our team to address. I found that the issue was no longer relevant given the source code that originally introduced it now contained new guards for preventing it from happening in the first place. It felt _so_ good to close it. 🎉

Second, I worked with my feature track's engineering pod, product manager, and designer on scoping work for a new feature. We use [feature flags](https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/) as a way of shipping that feature incrementally. I worked on the first two increments of that feature, namely the frontend components for managing new settings and supporting backend work for managing the queries powering those settings. 🚀

Last but not least, while I don't have a direct pull request to link to, I hopped into numerous pair programming sessions with my colleagues. Whenever one of us gets stuck, we create a new Zoom call to pair on the problem and work through it together. Over those sessions, I've collected a number of questions that serve as great go-to resources for me:

- Project Context: What information are we missing that is preventing us from moving forward?
- Specific context: If what we're working on touches a service something another team maintains, what is the best way to get in touch with them rather than debugging it ourselves?
- Translating design to code: what components are available to us that we can use to build out the UI? If there aren't any, are there any related components that we can use as a starting point?
- Testing: Are there already tests that exist that closely model our new feature's tests after? For example, if we're adding a new setting to a repository, how are each of those settings tested at the integration level versus the unit level?

## Post-Discussions: joining the GitHub Education team

Our team recently restructured and as a part of this transition, I'm moving to the GitHub Education team to work on their Global Campus feature. I will really miss the Discussions team and all of their team to help me become a better engineer and more importantly, human. 🙏
