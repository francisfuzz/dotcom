---
title: Relearning Rust Through Play: My Weekend Building Emojigen with Claude Code
date: 2025-12-27
description: What happens when you combine Rust, Claude Code, and free weekend hours? I built Emojigen and rediscovered the joy of coding without deadlines while learning about AI-assisted workflows.
tag: workflow
---

# Building Emoji Gen with Claude Code

Last week I learned a ton using Claude Code to build my [Rust CLI app Emojigen](https://github.com/francisfuzz/emoji_gen).

Inspired by Oxide Computer Company's ["Why Does Oxide Use Rust?"](https://oxide.computer/blog/why-rust) blog post, I created this project to pick up Rust again. I planned the build with Claude and chose Rust as the base programming language for this command-line interface.

## Getting Started

I had some free hours last weekend and checked in throughout the week. I learned how to use Claude more effectively and optimize my token usage. I learned about [Cargo](https://doc.rust-lang.org/cargo/) as a build system, setting up [GitHub Actions workflows](https://github.com/francisfuzz/emoji_gen/blob/main/.github/workflows/rust.yml) for CI/CD with Rust projects, and using the [emojis package](https://crates.io/crates/emojis) for random emoji selection.

The last time I touched Rust was a few years ago during a two-day O'Reilly course presented by my co-worker Nathan Stocks. I hadn't picked it up since, but with the momentum in AI agentic workflows, I thought: why not build something with a language that has speed and tailwind advantage?

## Planning and Ideation

I started by planning the build with Claude. Since I was on-the-go, I used Claude Chat to outline what I wanted, then compacted that context for Claude Code to execute. I had the scaffold ready from my mobile ideation sessions. When I finally sat down at my computer, putting things together was fun.

I looked at setting up a Rust project from scratch, finding appropriate GitHub Actions workflow templates for building and testing, then built my first 0.1 version. Originally I planned to follow a Hello World tutorial precisely, but I decided learning on the fly would be more interesting and engaging than my usual setup process.

## Development Journey

After finding the emoji package and [Clap](https://crates.io/crates/clap) for argument parsing, I wanted to run this project not just locally on macOS but also in a Docker container. I remembered that at work, many of our Docker containers were already configured for GitHub Codespaces, but thinking through the setup myself was really valuable. I relearned Docker images, local installation, and how to minimize dependencies and cache them for future builds.

When I pivoted to GitHub Actions, I was pleased to discover pre-built workflows for building, formatting, linting, and testing Rust code. I also learned that unlike Go, TypeScript, and Ruby—where tests are written separately from implementation files—Rust allows writing unit tests right underneath the implementation code. This was interesting and saved me one cognitive cycle from finding where tests should go.

I eventually decided to implement [releases](https://github.com/francisfuzz/emoji_gen/releases) and [security checks](https://github.com/francisfuzz/emoji_gen/blob/main/.github/workflows/audit.yml), which I found really interesting. More on that later!

## Testing and Development

Writing [unit tests in Rust](https://github.com/francisfuzz/emoji_gen/blob/main/src/main.rs#L46-L72) taught me about the different annotations available. I thought about what I wanted to test and how, and having Claude as a thinking partner to bounce ideas off was great.

One thing that impressed me was how Claude wasn't just my thinking partner during ideation but throughout the entire project. It helped me inside issues, pull requests, and commits as I reviewed my own work. Claude wasn't plugged into just one part of the process but throughout the whole workflow.

It's amazing that something I'd used in the UI and as a base model for GitHub Copilot was also ubiquitous across different interfaces: my command line, Claude Code, my VSCode editor, and even GitHub Actions workflow updates via pull request comments. While I've used GitHub Copilot at work, it was interesting to see a different perspective in how Claude analyzed and processed my work.

## Token Management and Optimization

One incredibly illuminating aspect was token usage. At work I don't think about quotas—I'm grateful to issue commands at will—but having to manage context and be extra careful about token usage, I quickly discovered sub-agents, instructions, commands, and skills as ways to streamline my workflow and reduce typing (especially since I use Wispr Flow on my personal machine).

Codifying my work was really helpful, whether through a skill just for conventional commits or the Git workflow.

I found the [skill creator](https://github.com/anthropics/anthropic-skills/tree/main/examples/skill-creator) that Brady provided at Anthropic's Skills Repository particularly neat, along with the release process of pushing a tag and triggering a release build. You can check out all the skills I created here: https://github.com/francisfuzz/emoji_gen/tree/main/.claude/skills

With regard to optimizing my Claude Code usage, I found a couple of things worked best:

1. While it was neat that Claude could follow both conventional commands and my Git workflow to the letter, I noticed how many tokens it used writing text, pushing changes, checking Git diffs, and pulling pull request information.
2. I chose to use the exclamation mark (bang operator) to carefully execute the commands I wanted, especially for version control and checking pull request status. I saved the thinking-heavy steps for Claude, like debugging compilation or build errors and collaborating on test design.

## Reflection

Something that struck me about this whole experience was the element of play. It's been a while since I've executed an idea without a timeline or pressing need. I was more interested in ideating, trying, and seeing what Claude and I would come up with along the way.

While I don't plan to develop the application further since I've already implemented what I wanted, I found the journey extremely illuminating. Whether relearning my own tools or thinking about how to interact with agents not just as tools but as partners in the process, `/compact` has become my new best friend. The learnings here are cross-transferable between my work at GitHub and my personal projects.

## Credits

I need to credit these authors whose work helped me see things differently and try new approaches:

- https://steipete.me/posts/just-talk-to-it
- https://jonmagic.com/posts/how-i-work-2025-edition/
- https://simonwillison.net/2025/Dec/10/html-tools/

## Closing thoughts

I asked Claude what it thought about my experience, specifically:

> Going through this copy what's something that you spotted but I did not mention that I think would be a good takeaway moving forward?

Here's the compacted summary:

**Managing collaboration bandwidth, not just token budgets.** Through building Emojigen, I developed a practical framework for human-AI collaboration by tiering work across three levels:

- **High-value tasks** → Let Claude think (debugging, test design, architecture)
- **Repetitive tasks** → Use bang operator for direct execution (git ops, status checks)
- **Reusable patterns** → Codify into skills (conventional commits, workflows)

Token constraints became a forcing function to think critically about where AI adds the most value. This delegation triage—deciding what's worth the "conversation cost"—is transferable beyond Claude Code. As AI tools proliferate across workflows, the real skill isn't just using them, but developing intuition about which tool, at which stage, and at what level of autonomy.

Until soon, happy building! <3
