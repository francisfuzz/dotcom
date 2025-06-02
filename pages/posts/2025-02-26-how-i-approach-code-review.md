---
title: How @francisfuzz approaches code review
date: 2025-06-02
description: Supercharging shipping confidence
tag: craft
---

I'll be the first to confess: I love reviewing code. It's one of my favorite things to do as a developer.

Code review is where software quality lives or dies. After a decade of reviewing thousands of pull requests across GitHub, startups, and consulting engagements, I've learned that great code review isn't about catching bugs—it's about building confidence in what ships to production.

## Why this matters

Every line of code that reaches your customers passes through code review. The difference between shipping with confidence and shipping with crossed fingers often comes down to how systematically your team approaches this critical gate. Poor code review processes create bottlenecks, missed issues, and team friction. Effective code review accelerates delivery while maintaining quality.

I've refined this approach across three distinct roles: as a senior engineer on GitHub's New User Experience team, as a consultant for early-stage startups, and as a senior support engineer helping teams optimize their pull request workflows. This perspective spans customer-facing features, internal tooling, and developer experience improvements.

## The three-phase framework

Effective code review follows a deliberate sequence: **gather context, analyze changes, validate impact**. Most reviewers jump straight to the code diff, missing critical context that determines whether changes align with business objectives and technical strategy.

### Phase 1: Context before code

Before examining a single line of code, I establish the strategic foundation. This prevents costly misalignment and ensures changes serve their intended purpose.

**Business context questions:**
- Who initiated this work and why now?
- Which users or systems will this impact?
- What problem does this solve or opportunity does it capture?
- How does this align with current technical and product priorities?

**Technical context questions:**
- What's the blast radius if this goes wrong?
- Are there dependencies or sequencing requirements?
- Does this require coordination with other teams?
- What validation environments are available?

This context-first approach has prevented numerous issues that would have been expensive to catch in production. When I understand the "why" behind changes, I can evaluate whether the "how" achieves the intended outcome.

### Phase 2: Systematic code analysis

With context established, I examine the technical implementation through multiple lenses:

**Scope and structure:**
- Do all changes belong in this pull request?
- Is the change size appropriate for safe deployment?
- How do the modified files relate to each other?
- Are there unrelated improvements that should be separated?

**Quality and maintainability:**
- Does the code follow established patterns and conventions?
- Are there performance, security, or accessibility implications?
- Is the implementation clear enough for future maintainers?
- Are appropriate tests included?

I use a consistent commenting system to set clear expectations:

- **💅 Non-blocking suggestion**: Style improvements that don't block approval
- **🙋 Question**: Clarifications needed to understand intent or approach
- **🟡 Requested change**: Issues that must be addressed before shipping
- **✨ Affirmation**: Recognition of particularly well-executed solutions

This taxonomy helps authors prioritize their response and understand what blocks progress versus what offers optional improvement.

### Phase 3: Validation and verification

The final phase ensures changes work as intended across relevant environments and edge cases.

**Validation checklist:**
- Can I reproduce the original issue and verify the fix?
- Do staging or review environments demonstrate the changes correctly?
- Are there clear instructions for testing the changes?
- Have automated tests validated the expected behavior?

This systematic validation has caught numerous issues that passed automated testing but failed in realistic usage scenarios.

## Implementation guidelines for teams

**For engineering managers:**
- Establish clear expectations around review turnaround times
- Ensure your team has adequate staging environments for validation
- Track review quality metrics alongside velocity metrics
- Invest in tooling that surfaces context automatically (linking to issues, ADRs, deployment history)

**For individual contributors:**
- Structure pull requests to tell a clear story from business need to technical solution
- Include comprehensive testing instructions in your descriptions
- Respond to review feedback systematically, addressing each comment explicitly
- Use review as a teaching opportunity, explaining your technical decisions

**For senior engineers:**
- Model thorough review practices, especially for junior team members
- Balance perfectionism with shipping velocity—not every suggestion needs to block progress
- Use review as mentorship opportunities to elevate team capabilities
- Document patterns and anti-patterns you see repeatedly

## Measuring success

Effective code review creates measurable improvements:
- Reduced production incidents from preventable issues
- Faster onboarding for new team members through consistent code patterns
- Increased deployment confidence leading to more frequent releases
- Better knowledge sharing across the team

Teams that invest in systematic code review processes ship faster and more reliably. The upfront time investment in thorough review pays dividends in reduced debugging, support burden, and technical debt.

## Looking ahead

Code review continues evolving with AI assistance, but the fundamental principles remain: understand context, analyze systematically, validate thoroughly. Tools can surface issues and suggest improvements, but human judgment about business alignment, user impact, and system architecture remains irreplaceable.

The best code review isn't about perfection—it's about confidence. When your team consistently applies these practices, you ship knowing your changes will work as intended, scale appropriately, and maintain the codebase quality that enables sustainable growth.