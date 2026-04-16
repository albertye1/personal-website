---
title: "a luddite new grad's perspective on vibe coding"
date: '15 apr 2026'
---

Possibly not entirely willingly, my [employer](https://www.businessinsider.com/meta-ai-week-employee-training-claude-agents-vibe-coding-2026-3) has decided to 
make everyone start using Claude Code for everything.

Pretty much until I started working at Meta, I had never even bothered with most AI tools. 
A big chunk of this was out of a residual sense of ego from coding competitions.
My experience at the time said that the best human programmers could 
execute tasks with more thought and precision than some weird matrix multiplication
thing, and relying on AI as a source of truth was a skill issue. 

As such, I felt like I should mistrust anything an LLM wrote without 
huge human oversight, and only for very small features like single web components.
I looked upon the random "founder" who just vibecoded some jury-rigged product
end-to-end with the utmost contempt.

However, being employed and actually working on an enterprise codebase has made being
an idealist luddite a lot harder.

## a paradigm shift
In the last couple months there has been a seismic shift in how I've had to
write code. Before Claude Code dropped and started being pushed on the team, I spent
most of my time writing code by hand with a single AI tab on the side of the window being used
as an "I'm too lazy, please think for me" button. However, as of late I've found myself
actually writing maybe double-digits of lines of code a week, with Claude doing most
of the heavy lifting and my personal role just being a thumbs-up/thumbs-down button.

Beforehand, code reviews required me have a lot of context over the code I was reading 
in order to provide insightful comments. However, there's now a `/deep-code-review` 
Claude skill I can use to somewhat stress test code for bugs and semantic issues.

What these workflow changes mean for me as a junior engineer is that my old job
description has become infinitely less useful. Beforehand, my job description was that
I could implement small tasks once a more senior coworker had scoped it out to be 
comprehensible. However, with AI able to do simple reviews and simple coding tasks
faster than any new-grad engineer, simply performing according to this job description
means absolutely nothing. 

The biggest leg up I as a human have over an AI is an ability to deterministically
understand the truth. As such, having context over the codebase I'm
working on is probably the best way to stay useful. An LLM may write stuff that's a
complete hallucination, and it's up to me to understand when it's just spewing out
trash and when it's actually doing what I want. 

For example, just today I was writing
some code for a project where Claude was insisting upon changing a `preadv` syscall into
a `pread` syscall. However, that would add a significant copy overhead and make it 
more difficult to use existing functions to complete my implementation. Lacking that context
and blindly following the direction of the LLM would mean I'd be introducing hot garbage 
into the company codebase.

**tl;dr:** just executing is dead, context is the currency they're trading in

## here i dreamt i was an architect
Fortunately, I joined just early enough where I was able to get context by actually
implementing things with my own hand. However, I believe that even with the big shifts 
brought upon by vibe coding there are some fundamentals to be kept. When I was navigating
a new part of the codebase in order to write a feature by hand, the person I was working
with provided a lot of details to describe what changes were to occur, define the purpose
of each change within the broader picture, and explain any possible anomalies in the process.

A big part of any coding job is system design, and that's a skill that I never really 
practiced much. But I did spend a lot of time in college teaching, and I found that in order
to truly understand a project you have to be able to walk someone else through the implementation.
When I myself was doing the CS164 projects, I had a partner who did a good chunk of the work and thus 
had only a high-level understanding of the project. However, when explaining and live-debugging 
that project for my students, I found myself needing to look for and understand almost on the fly
a lot of the details that I glossed over when taking the class.

I find it somewhat productive to view an AI agent as a very adamant contractor with little actual
knowledge or context of the project it's working on. As such, you'll need to handhold it on
a lot of the design goals and nuances, and it'll be chiefly responsible for just *executing*
whatever the hell you throw at it. As I've started writing design docs at Meta, I've found that
pretty much any ambiguity or gap in logic, even if the other engineers can figure it out, will
lead to some amount of LLM hallucination.

**tl;dr:** i'm finding design to be more useful than ever, and so i'm pressing the people i 
work for to give me as many opportunities as humanly possible to develop features end-to-end
without causing a SEV0.

## what's lost?
I feel like a lot of the 
pleasure and satisfaction of Just Writing Code is gone. This may be just an asinine opinion
from someone who refuses to let go of the manual transmission, but having more involvement
with the things I do makes them feel more rewarding. 

The projects I did in my first six months, while quite trivial in scope, did bring me
outsized amounts of satisfaction. Doing the things myself gave me a good grasp of a lot 
of the conventions in the areas I touched, and iterating on feedback myself felt like
I was grinding to make the end feature as polished as possible. When there were issues
with my code, debugging them and doing things by hand made me have a more complete
understanding of the possible issues and the way they were solved.

With the advent of vibecoding, I'm putting out more lines of code than I can feasibly 
read and personally vouch for. As such, a lot of the issues and their remediations are
essentially delegated to another run of the slop machine, and unless I waterboard and 
interrogate the agent I still can't really have confidence that it's following all of the
design parameters I provided. This makes debugging seem more like I'm yelling at others to 
fix things instead of learning from feedback and polishing my own work.

I also think that if done wrong, we'll be losing a lot of the nuance and deliberation 
that went into writing these features by hand the first time. LLMs aren't exactly
the best at being deliberate, as every single decision seems to be coming from a 
nondeterministic rolling of the die. But on the flip side, I think that we as 
engineers do stand to gain from knowing these nuances and being deliberate. At least
until we're able to successfully drill these ideas and self-replicating versions of
them for new code into every agent we use.

The good news is I still find it quite satisfying to whiteboard with people and 
brainstorm ideas to implement a feature. Brings a lot of the rush from doing coding
competitions that I have grown to miss. And I don't think we'll be losing that in the near 
future.

**tl;dr:** guy rants about how AI is making his job less rewarding, though he should be careful
what he wishes for as he might as well lose it

## final thoughts
I think that the advent of vibe coding has put me in a precarious place and made coding more soulless. But on the 
other hand, I think we'll need to survive whichever way the wind blows, and as of 2026 AI doesn't yet strip
away *all* of the fundamentals. I think being able to have a good relationship with the tool is better than
just forgoing it entirely.

Hopefully this ages OK and I don't lose my job to a much better model in a few months.
