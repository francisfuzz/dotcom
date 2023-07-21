---
title: Building Psychological Safety In Code Reviews
date: 2023-07-21
description: What would code reviews look like if teams prioritized this?
tag: engineering
---

GitHub hosts a monthly Day of Learning where employees are welcome to take the time they beed to learn about something that's related to their professional development. 

There is a dedicated learning and development team that sources speakers and this month, I presented a talk about building psychological safety in the context of code reviews.

I first came across `psychological safety` while considering the path of becoming a manager years ago. Specifically, [OfficeVibe's Psychological Safety: the key to high-performing teams](https://officevibe.com/blog/build-psychological-safety) article gave me a high-level primer and it has become one of my core working practices as a technology professional.

The following post is an abbreviated version of that presentation. Before sharing the content, I'd like to share some healthy "disclosures", if you will, so we're all on the same page.

First, I am a software engineer by profession. I'm neither an anthropologist, psychologist, nor a psychiatrist; forgive me if I haven't taken into account specific cultural or psychological contexts in this article. What's shared here is my primitive understanding of how psychological safety _could_ work in the context of code reviews based on my observations, experiences, and combined understanding of existing resources. It is by no means the definitive guide on how every software engineering team in the world should carry out this work.

Next, this content is for any professional that requires writing and reviewing code as a part of their day-to-day responsibilities, along with those who manage professionals who do those things. I understand that along with software engineers, technical program managers, data scientists, analysts, and even product managers within GitHub write code as a part of their work. This is my best attempt at being inclusive and to say that, if you code within a team setting, this is for you!

Last, I'm giving this my best and I know that I'm fallible. You're welcome to [open a pull request](https://github.com/francisfuzz/dotcom/pulls) for any suggested changes.

## What is psychological safety?

Let's start with definitions. Amy Edmondson is the Novartist Professor of Leadership and Management at Harvard Business School and is known for her work with teams. In her TedX HGSE talk [Building a psychologically safe workplace](https://www.youtube.com/watch?v=LhoLuui9gX8) she defines psychological safety as:

> "a belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes."

I recognize that the words `punished` and `humiliated` may convey a negative sensitivity for some readers. As I engaged with this definition, one of my mentors shared that psychological safety can be impacted by actions and sentiments less severe. By acknowledging that there's really a spectrum, one way we can widen the scope of this definition is to offer an alternative, definition:

> "a belief that one will not be excluded or made inferior for speaking up with ideas, questions, concerns, or mistakes."

Whenever I see terms defined in the negative, I challenge myself by taking a stab at defining it in the affirmative. Here's the best I could come up with:

> "a belief that one will be recognized and affirmed for speaking up with ideas, questions, concerns, or mistakes."

Depending on the context and cases I walk through, I've fluidly shifted between these three definitions in my day-to-day work life.

Moving from this common understanding, let's talk about why it matters.

## Why does it matter?

Amy Edmondson shares this reason in the aforementioned presentation:

> "Every time we withhold, we rob ourselves and our colleagues of small moments of learning, and we don't innovate."

At GitHub, one of our leadership principles is "trust by default." In my view, psychological safety is foundational to building trust in any of our working relationships. Without trust, it's pretty tough to do anything else, whether we're communicating with each other amidst conflict, building a new feature, debugging a tricky bug, or exercising the courage to challenge a controversial decision. Every meaningful piece of work comes from the bedrock of operating under high trust.

Google published their study on the [five keys to a successful Google team](https://rework.withgoogle.com/blog/five-keys-to-a-successful-google-team/), specifically what makes a Google team effective. Their research found that "Who is on a team matters less than how the team members interact, structure their work, and view their contributions." Of the five key dynamics that set successful teams apart from other teams at Google, psychological safety was the most important. Here are those dynamics and a question to frame them in the intended context:

1. Psychological safety: Can we take risks on this team without feeling insecure or embarrassed?
1. Dependability: Can we count on each other to do high quality work on time?
1. Structure & clarity: Are goals, roles, and execution plans on our team clear?
1. Meaning of work: Are we working on something that is personally important for each of us?
1. Impact of work: Do we fundamentally believe that the work we’re doing matters?

McKinsey and Company studied psychological safety in the context of leadership development, describing it as [a critical role](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/psychological-safety-and-the-critical-role-of-leadership-development). What they shared is that the most important driver of a team's psychological safety is cultivating a positive team climate. The entire article is worth a read, but I found this particular finding illuminating:

> By setting the tone for the team climate through their own actions, team leaders have the strongest influence on a team’s psychological safety. Moreover, creating a positive team climate can pay additional dividends during a time of disruption.

> Our research finds that a positive team climate has a stronger effect on psychological safety in teams that experienced a greater degree of change in working remotely than in those that experienced less change during the COVID-19 pandemic. 

> Yet just **43 percent** of all respondents report a positive climate within their team.

(The emphasis on that particular statistic is my own. 😉)

Building psychological safety is for teams, where each member believes that they won't be punished, humiliated, excluded, or made inferior in the face of raising a question, concern, mistake, or new idea. It's important because it's one of the ways to build trust, which is the foundation of highly effective teams.

As professionals that write code day-to-day, what are some ways of bringing this into our code review practice?

## How do we build psychological safety?

[Professor Edmondson offers SAFE as an acronym](https://survivethrive.win/blog/f/psychological-safety), where SAFE stands for:

- Setting Limits
- Approachability
- Fallibility
- Engagement

### Setting Limits

Limits (read: expectations) give team members confidence to know what the boundaries are: anything that is off-limits or out-of-bounds. When these are known, they can take the time to experiment and try new things within those boundaries. 

At GitHub, we have company-wide policies on opening and reviewing pull requests. Teams that manage one or more services use [pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) for setting guidelines for pull request authors to fill out ahead of opening the pull request. Once these limits are set, each member is responsible for practicing them and they hold each other accountable to follow through with what's agreed upon.

### Approachability

[Approachable](https://www.etymonline.com/word/approachable) literally comes from the word "accessible"; in the figurative sense, ["affable"](https://www.etymonline.com/word/affable#etymonline_v_5189), which in context is one that's "open to conversation or approach."

In Derek Prior's [RailsConf 2015 - Implementing a Strong Code-Review Culture](https://www.youtube.com/watch?v=PJjmw9TRB7s), he shares a tip for using pull requests and asking questions as a way of driving technical discussion. He mentioned being aware of the negativity bias that comes from reading words in plain text can help drive our approachability: being intentionally and mindfully positive in the code review comments can let the discussion flow in a way that gives everyone a chance to learn more about the code.

As the author of a pull request, being approachable could look like writing up specific questions for reviewers to comment back on, being clear in what kind of feedback you're looking for.

As the reviewer of a pull request, being approach could look like asking questions that [seek to understand](https://www.franklincovey.com/habit-5/) the author's perspective, rather than prioritizing seeking to be understood. For example:

- "What do you think about...?"
- "With Y in place, what's your take on considering X as well?"
- "Could you tell me more about your process in...?"

Tying back to the McKinsey and Co., team leaders have strongest influence on a team's psychological safety. Expanding from team leaders, leaders in individual contributor positions ranging in tenure, experience, or level, have an opportunity to set the tone for teammates by how they communicate within code reviews, which in turn, lets their peers match the tone that's set.

Imagine the ripple effect of folks being approachable with one another and how that could impact code reviews moving forward!

### Fallibility

One of the definitions of being fallible means being [liable to err](https://www.etymonline.com/word/fallible#etymonline_v_1098). In practice, it's about taking the time to let others know that you can make mistakes, and admit to them when they happen. In turn, this lets others know that you're open!

Examples:

- Visibly thank people for catching your mistakes.
- Show your work process, not only the result or where you've arrived -- tying this to highlighting where you're unfamiliar with certain areas brings teammates up to speed with where they could provide more precise input. You could even lead with an ask; here are some examples shared by my colleague [`@UnicodeRogue`](https://github.com/UnicodeRogue):
  - "From my perspective, ..."
  - "My understanding is ..."
  - "Considering A, I did B because..., but could use some pointers about P and Q, namely..."

### Engagement

Engaging people means coming in with the understanding that, when operating with a team, [Amy Edmondson describes it like this](https://youtu.be/LhoLuui9gX8?t=467):

> Make explicit that there's enormous uncertainty ahead and enormous interdependence.

> Given those two things, we've never been here before. We can't know what will happen.

> We've got to have everybody's brains and voices in the game.

> That creates the rationale for speaking up.

Put in my own words:

> I don't know what's ahead, and I need your perspective for all of us to move ahead.

> We're better together.

This is a mindset. No no, _the_ mindset, in my humble opinion.

How does this look like in practice? While keeping this mindset, I've found that using people's names or online handles while addressing them is a good place to start (please don't give them a nickname they did not ask for). Echoing back from the points of approachability and fallibility, using curiosity as a way to lead and open technical discussion helps, too. Last, in my own experience, I've found that taking the time to reach out to your team member(s) and getting to know them _outside_ of the code review can help with building psychological safety. By knowing how they speak and their approach outside of a review, that's helped my brain contextualize the plain text in their actual voice, which has helped me better assess what they're saying versus making an assumption of _what I think they're saying_.

## What's next? Where do I go now?

The examples in SAFE can be things that you could try with your team today. However, building psychological safety within a team is not going to happen over night. Code reviews are but one medium where we can do that. It's going to take time and every member's actions to make it happen, so that a resounding "Yes" can be the answer to this question:

> How confident are you that you won't receive reatliation or criticism if you admit an error or make a mistake?

(Source: [Google's Guide to understanding team effectiveness](https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/)).

Here are some additional resources that have influenced me that might be worth checking out too:

- [DORA: Generative Organizational Culture](https://dora.dev/devops-capabilities/cultural/generative-organizational-culture/)
- Harvard Business Review: [High-Performing Teams Need Psychological Safety: Here’s How to Create It](https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it) by Laura Delizonna

## Special Thanks

There were several individuals and teams that made my presentation possible. Here's a special thanks to you all, `<3`:

- Day of Learning Organizers
- GitHub Education Team
- Reviewers: Ernest, Ivan, DeeDee, Roniece, Sarah, Daniel, Laura
- Hubber Alumni: keavy, kytrinyx, gjtorikian, jasonrudolph, jnraine
