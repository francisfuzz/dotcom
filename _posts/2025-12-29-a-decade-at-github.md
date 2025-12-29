---
title: "10 Lessons from a Decade at GitHub"
date: 2025-12-27
description: "Ten years across support engineering, program management, partner engineering, and product engineering—lessons on asking great questions, mentorship, technical spikes, and building with AI agents"
tags:
  - career
  - GitHub
  - mentorship
  - software-engineering
  - AI-agents
  - career-growth
  - technical-leadership
excerpt: "What does a decade at GitHub teach you? From learning to ask the right questions as a support engineer to understanding how AI agents need context as a product engineer, these 10 lessons span the evolution of both technology and personal growth."
---

Ten Years at GitHub: 10 Lessons Learned.

What's your weapon of choice as a developer? When GitHub's CEO asked me that during onboarding in 2015, I said "Unix" to sound cool.

Ten years later, I wish I'd said "asking great questions"—because that single skill shaped everything that followed across four different roles at GitHub.

Here are 10 lessons from a decade of serving others at GitHub.

---

## 1. Asking great questions

During my first year as a support engineer, I'd read a customer's question, interpret it one way, and send a reply—only to have them come back saying I'd completely misunderstood.

One of my mentors taught me a technique that changed everything. Instead of jumping to solutions, he'd ask: "If you had a magic wand, what would you expect to see? And why would that be important to your workflow?"

This question was gold. While most of our tickets were about GitHub's API and integrations, this simple prompt revealed *how* people were actually using the platform and *where* the interface mattered most to them. That context helped me course-correct my replies and connect customers with the right resources and people.

The difference between a great question and a regular one? Context. Great questions are specific and get to the heart of what matters to your audience. As I moved from support to program management to partner engineering to product engineering, my questions evolved—adapting to different audiences (customers, stakeholders, partners, cross-functional teams) while becoming more refined as I gained context about what each role needed.

## 2. Finding a mentor early on can make or break the experience

[Ivan Zuzak (@izuzak)](http://github.com/izuzak) was a support engineer with a PhD in web systems, deep technical chops, and a distinctive writing style that caught my attention. I was drawn to how he approached helping people—especially around APIs and integrations, the area I found most fascinating from my software engineering background.

I asked my manager how to approach him, and over the next 3½ years, we worked together answering every question under the sun about GitHub's REST API, GraphQL API, OAuth apps, GitHub Apps, webhooks—anything with programmatic support.

What made Ivan exceptional wasn't just his technical depth. He identified my superpower early: finding the right people to tackle a problem and building shared understanding across teams. He sponsored me by giving me an opportunity to present at an internal summit on the integrator experience, speaking alongside leaders from engineering, product, and design. That moment let me formalize what I did, how I did it, and why it mattered. It expanded my trajectory from support engineer to product engineer.

Later, when GitHub Actions launched, I became the internal ombudsperson for the feature, leveling up my team and empowering customers. Watching my own progression made me realize something critical: mentorship creates a debt you pay forward. I started seeking out people without mentors, trying to offer what Ivan had given me.

Years later, after several internal pivots, Ivan and I still check in every few months. We work in the same engineering organization now. I still look up to him, and I'm certain I wouldn't be the same person without his guidance.

## 3. Once you've learned enough about something, package what you've learned and present it

Early on, GitHub introduced the [Checks API](https://docs.github.com/en/rest/checks?apiVersion=2022-11-28)—a richer interface for integrators to report build statuses beyond the simple pending/success/error states of the old Status API. I was intimidated. It wasn't as intuitive as repositories or pull requests.

I spent time with the lead engineer, [@keavy](https://keavy.com/), asking basic questions the documentation didn't answer. What does this feature do? Why does it exist? I extracted my notes into a Markdown document (this was before AI tools), created a slide deck, and hosted a lunch-and-learn for support engineers.

Then I invited the partner engineering team. They worked directly with integrators who deeply integrated with GitHub's systems—high-touch, high-value relationships. Suddenly, packaging my knowledge wasn't just helping my team on the front lines; it was helping partner engineers be more effective in enabling integrators to succeed.

The act of slowing down and explaining what I'd learned—to myself and others—crystallized my understanding. Follow-up questions filled gaps I didn't know existed. I realized that even small contributions—a typo fix, a documented question—could improve the next support or engineering interaction.

This practice evolved across my roles. Today, in the age of AI tools, I use Copilot and Claude as thinking partners to analyze what I've written and help me package knowledge into reusable wisdom that applies across contexts.

## 4. Don't just teach your team—find others who use the same technologies and equip them too

When I became the ombudsperson for [GitHub Actions](https://github.com/features/actions), I published our internal support documentation in a location where product engineers could see what we were working on and what questions we were getting. Other teams working with integrators and customers building on GitHub Actions could use it too.

This was a turning point. I realized I enjoyed being in the weeds—and sometimes climbing up to see the forest. That forest-level view came from pausing to reflect: What's the core issue or lesson here? Who else could benefit from what I've learned?

Expanding beyond my immediate team wasn't just about scale—it was about enriching others' work and careers with lessons from my mistakes and discoveries.

## 5. Log what gives you zest and find out what other adjacent activities do that too

Early on, I found the thrill in internal research—writing up notes on how things work, why they work, and what to consider. I also loved teaching as a way to crystallize my understanding.

Combining research and teaching helped me pivot into roles like program management, giving me frameworks for understanding domains more deeply. Learning and relearning fundamentals became a pattern. Taking checkpoints—going from understanding how something works to actually practicing and using it—helped me expand into different engineering domains.

When I transitioned back to product engineering as one of the leads for optimizing GitHub Docs' localization builds, I ramped up on modern JavaScript and build systems across vendors. I wasn't building pipelines exclusively, but translating requirements across systems taught me how to communicate well asynchronously over text without losing signal.

The through-line? I logged what energized me and looked for adjacent activities that gave me the same feeling.

## 6. Grow where you're planted

I worked as a program manager for the [GitHub Community](https://github.com/community/community) for almost a year. I missed the thrill of research, understanding how things work, and communicating directly with people—whether one-on-one or one-to-many.

When a partner engineer role opened up, I applied. It had crossover traits from my support engineering days: prototyping, communicating with integrators about how to build with our platform. But I had a few weeks before I could transition, and I needed to leave my PM work in good shape for whoever took over.

Instead of coasting, I used that time to learn something critical: how to scope work well and build partnerships. As a PM without direct reports or budget, I couldn't influence metrics alone. I needed to find work that aligned with other teams' goals—work that helped both of us move forward.

The PM year was hard; I wasn't in the code. I wasn't face-to-face with people the way I wanted to be. But that constraint forced me to think about my work more holistically, systematically, and cross-functionally.

Later, when I became a product and engineering lead, that lesson paid off. I could scope quarter-long epics into essential batches, spike out the most meaningful pieces of work, and build the partnerships needed to ship. The PM experience—despite not energizing me—taught me skills I use every day.

## 7. Technical spikes help you discover if you'd like to do more of the work—not just where the work is going

A technical spike is a time-boxed exercise to answer a few small questions and gain clarity about what needs to change in a system. There's no pressure to ship something usable on the first try—what matters is understanding how the system works and what its dependencies are before making changes.

On the new user experience team, I was tasked with updating the dashboard's Copilot interface with targeted icebreakers for users who'd joined GitHub in the last month. The component was built in Rails and [Catalyst](https://github.com/github/catalyst). The question: should we migrate to React to ship these new icebreakers?

I started my spike by outlining the steps for a React migration. Then I discovered the icebreaker configurations were stored in a format that made them easy to change. The spike revealed we didn't need to migrate everything right now—and documenting the migration path would help the next person who picked it up.

With shifting planning cycles, time was tight. I found a way to update the configuration and feature-flag the changes, shipping within a week instead of a month. That moment clarified something: I care about outcomes and impact. As much as I love refactoring code, shipping faster let us learn how people were using the icebreakers and where we needed to drive higher signal for users wanting to make the most of GitHub and Copilot.

My advice: Time-box a question or set of questions and dig in to learn how things work. While AI tools are great thinking partners, working with people in the field shows you what brings them joy and what toils them. That insight is invaluable for deciding whether you want more of that work in your career.

## 8. AI agents need to understand system-wide context before acting—research and discovery matter more than ever

Over the last four years as a product engineer, I've watched AI integrate into every phase of the software development lifecycle—whether in VS Code or elsewhere. Planning, asking, editing, having agents work on our behalf—it's just the start.

But here's the friction I'm experiencing: [agents have limited context windows](https://www.youtube.com/watch?v=rmvDxxNubIg). Being able to narrow in on what context is most relevant for agents to operate on is the name of the game right now.

Before planning, the research and discovery I've described in earlier lessons becomes critical. Understanding how things work independently, how they work with other systems, and what behaviors emerge from those interactions—that's the foundation agents need.

I want to see agents understand how one change in one part of the system affects the entire system and specific subsystems, even before writing a line of code. Just as we can build abstract syntax trees or create deterministic views of how symbols link together in code search, I'd love to see this kind of system-wide understanding reflected in agents as I work.

Beyond having agents move on our behalf, I think observing changes and iterating based on telemetry would be invaluable. After you've planned, implemented, and assessed work, you can codify it—update your configuration so the linter catches it next time, or ensure tests prevent regressions.

But there's more: agents could analyze how we do this work. If we forgot something during planning, that gap could be codified into the planning or discovery process for next time. Having a focused and accurate memory for where things were, where they are, and where they're going is just as important as the context window itself.

## 9. It's not shipped until you write about it—use story to codify why changes matter

One lesson I've carried throughout my time at GitHub: [it's not shipped until you write about it](https://ben.balter.com/2015/07/20/write-corporate-blog-posts-as-a-human/#1-its-not-shipped-until-you-blog-about-it).

Eventually, all the features I've worked on that get published have a blog post about them. The narrative explains not just what changed, but why it mattered. Story is how we encode memory—where things were, where they are, where they're going.

This blog post itself is proof: I'm using narrative to make sense of a decade.

I wonder: what would it look like for agents to capture this in their memory as they ship work? To tell a story about the work and why it was important? Like my daughter, I find stories captivating. How can we use story as a way to convey why a particular changeset matters and incorporate that into the software development lifecycle?

In some ways, the narrative arc could become our specification. Before we write code, we write the story of what we're building and why it matters to users. That story becomes the North Star for implementation, testing, and ultimately the blog post that announces the feature.

Story isn't just documentation—it's how we make meaning from our work and share that meaning with others.

## 10. The questions you ask shape the person you become

Looking back, I wish I'd told my CEO my weapon of choice was asking great questions—but it took ten years to understand why.

Every lesson here circles back to inquiry: asking customers about their workflows, mentors for guidance, myself what energizes me, systems how they work, agents what context they need, and always asking "why does this matter?"

The through-line isn't just technical growth. It's curiosity as a practice. I didn't just learn technologies—I learned to ask increasingly sophisticated questions that revealed what I cared about and where I wanted to go.

In the age of AI agents, I'm still asking questions. How do we give agents the context they need? How do we codify learning so it persists? How do we use story to capture why work matters?

Ten years in, I'm grateful for the questions I've asked and the people who've helped me ask better ones. `<3`

### Special Thanks ✨

First, all glory to God. To my wife Angelica and daughter Ava, and my parents who've supported me since the beginning.

To [Ivan Zuzak](https://github.com/izuzak) for being an exceptional mentor and showing me what great technical leadership looks like.

To the managers who believed in me, sponsored my transitions, and invested in my growth as a person—thank you for helping me become who I am today.

To the New User Experience team for teaching me what it means to build with empathy and impact.

And to the support, partner engineering, program management, and product engineering teams who taught me something new every day—thank you for ten incredible years of learning, building, and asking better questions together.

---

*This post was shaped in partnership with Claude, an AI assistant that helped me articulate these lessons and organize my thoughts. The act of explaining my decade to Claude became its own form of asking questions—which feels fitting.*
