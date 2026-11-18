---
title: There should only be one way to code it
date: '2026-11-17'
draft: false
---

In [All Code is Slop (Except Mine)](https://www.youtube.com/watch?v=O_zcc6Xl12g),
Lauren Tan ([poteto](https://x.com/poteto)) describes how the Cursor and Grok
Bot teams banned [useEffect](https://react.dev/reference/react/useEffect) and comments through a number of lint rules.

> [Our general principle is that every time we correct our agents, it turns into
> one of these deterministic checks. We think about how to categorically
> eliminate that problem in the code through better API design, better
> architecture. And if you do this enough times, you'll find that you have just
> less things to look out for in code review.](https://youtu.be/O_zcc6Xl12g?t=549)

It's been working for them. The Grok Bot team shipped 11,000 pull requests in
Octobor with these methods, up from 809 in June!

poteto describes how a clean codebase has _exactly_ one way to solve a problem.

> [In many ways the job of being a software engineer is kind of becoming like
> gardening.
> Because code is the biggest input for agents, it means that any workarounds --
> anti-patterns, deprecated code, tech debt, it's now likely to be just copied
> by the next agent since it looks like the established pattern in your code
> base. It's like you have some weeds or pests growing in your garden and
> then they spread everywhere before you know it.
> So you want to make your codebase as pristine as possible so that agents are
> always copying the good stuff.](https://youtu.be/O_zcc6Xl12g?t=257)

When I started writing Ruby, I was amazed by by how inconsistent it could
be. I loved it. `arr.select` or `arr.reduce`? `if !` or `unless`? Parentheses?
Take your pick! My favorite Ruby code blended these choices and read like prose.

These days agents write most of my code. When I'm correcting them, I (like
poteto) oft find my agents copied the wrong pattern. Using [count instead of
size](https://stackoverflow.com/questions/6083219/activerecord-size-vs-count),
for example. What is readable to a human with context is a footgun for a robot.

[Consistency compounds](https://jry.io/writing/use-boring-languages-with-llms/). Build
[expressive](https://stackoverflow.com/questions/638881/what-does-expressive-mean-when-referring-to-programming-languages)
APIs for any repeated behaviors. Disallow any risky APIs with lint rules. If you design the dialect of your repository such that a feature can be
built in only one way, agents will build in that way.
