---
title: Building Emoji Gen with Claude Code
date: 2021-12-15
description: Learning Rust and software development lifecycle with Claude Code
tag: workflow
---

Last week I learned a ton using Claude Code to build my [Rust CLI app Emojigen](https://github.com/francisfuzz/emoji_gen).

Inspired by the Oxide computer companies "Why Does Oxide Use Rust?" blog post, I created this project to understand how I could start to learn Rust again. I decided that I would plan out the build with Claude and I decided to use Rust as the base programming language for this command-line interface.

I had some free hours last weekend and I had been checking in throughout the week. I got to learn how to use Claude more and how to optimize my token usage. I learned about Cargo as a build system as well as setting up Core Action workflows for the software development life cycle as it relates to building and using Rust projects along with the emojis package for importing the emojis that would be chosen at random.

The last time I touched Rust was a few years ago when I took a two-day course with my co-worker Nathan Stocks presenting on behalf of O'Reilly. Since then I haven't picked it up but I thought with the way that things are going in the AI agentic workflow space, why not build on something that has speed and a sort of tailwind at its advantage? 

I went about creating the CLI tool by planning my build with Claude. Since I was on-the-go, I used Claude Chat to get an outline of what I wanted. I then compacted that context down to something that Claude Code could run with. So I already had the scaffold while I was ideating on-the-go. When I finally got to my computer, it was fun putting things together.

I went about looking at how to set up a Rust project for the first time, finding the appropriate workflow templates for GitHub actions to build and test the code, and I set off to build my first 0.1 version. Originally I was going to follow Hello World tutorial to the T but I decided that doing something on the fly and learning on the go was more interesting and engaging for my brain than my usual setup process.

After I found the emoji package as well as Clap for using it to parse out arguments, I wanted to go through and see how I could run this project not just locally on my Mac OS X machine but also in a Docker container. I remembered that at work a lot of our Docker containers were already set up to work within Github Codespaces. But in this case having to think through the setup myself was really valuable. I relearned the different things about Docker images and getting Docker installed locally as well as minimizing the different dependencies and caching them for future builds.

When I pivoted to Github Actions it was really great to see that there was already some pre-built workflows for building, formatting, linting, and testing your Rust code. I also learned that unlike Go and TypeScript and Ruby where tests are written separately from the file implementation, I learned that in this case there was a way to write unit tests right underneath the implementation code which I found really interesting and saved me one cognitive cycle from finding where the test could or might be.

I eventually decided that I would want to do releases and security checks and that was something that I found really interesting along the way. More on that later!

I got to writing the unit tests in Rust and I learned about the different annotations that were available. I also thought about what I wanted to test and how I wanted to test, and it was really great to have Claude as a thinking partner to go back and forth with.

I think one of the things that I was impressed by was the way that Claude was not only my thinking partner during the ideation process but also as we were going through the project, it was helping me inside of the issue and pull requests and commits as I was reviewing my own work. I found this really invaluable where Claude was not just plugged into one part of the process but throughout the whole process.

It's amazing to me that something that I had used on the user interface as well as a base model for Github Copilot was also ubiquitous across different interfaces, be it my command line, the version of Claude Code, or in my VSCode editor, or even in the Github Actions workflow updates via pull request comments. I thought this was really neat and while I've had my interactions with Github Copilot for work it was interesting to see a different perspective in the way that it was analyzing and processing my work. 


One of the things that I found incredibly illuminating was token usage at work because I don't really think about my quotas. I'm grateful that I can issue commands at will but having to manage the context and being extra careful about how many tokens I use, I quickly found out about sub-agents, instructions, commands, and skills as things to help streamline my workflow and also reduce the amount of times I'm typing or speaking since I use Wispr Flow on my personal machine.

Something that I found really helpful was codifying my work, be it in having a skill just for conventional commits or the Git workflow.

Something that I found really neat was the skill creator that's a Brady provided at Anthropics Skills Repository along with the release process of pushing a tag and triggering a release build. You can check out all the skills I ended up creating here: https://github.com/francisfuzz/emoji_gen/tree/main/.claude/skills

With regard to optimizing my Claude Code usage, I found a couple of things worked best for me:
1. While I found it really neat that it could follow both the conventional commands as well as my Git workflow scale to the T. I noticed how many tokens it would use writing the text, pushing the text and checking Git diffs as well as pulling the pull request information.
2. I chose to use the exclamation mark or bang operator to carefully execute the commands I wanted, especially when it came to version control as well as checking status on pull requests on checks and saving the thinking hard steps for Claude whether it was debugging a particular error that came up in the compilation process or build process or going back and forth on how we would go about tests together.

Something that struck me about this whole experience was the experience of play. It's been a while since I've actually taken the time to execute an idea that did not really have a timeline or a pressing need to get out. I was more interested in ideating, trying, and seeing what Claude and I would come up with along the way.

While I don't plan to develop the application further from its state since I've already implemented what I've wanted it to do, I found the journey extremely illuminating. Whether it was relearning my own tools or really thinking about how to interact with agents not just as tools but as partners in the process/compact the/command has been my new best friend. At other complementary work during my work with Github and for my personal work, I've found a lot of the learnings here cross-transferable in both domains.

I need to credit both these authors for their work as it helped me see things differently and to try new things aside from my usual work time:

- https://steipete.me/posts/just-talk-to-it
- https://jonmagic.com/posts/how-i-work-2025-edition/
- https://simonwillison.net/2025/Dec/10/html-tools/
