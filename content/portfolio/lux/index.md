---
weight: 17
title: Lux
organization: Daily Bruin
dates: July 2018 – January 2019
link: https://lux.dailybruin.com
githubLink: dailybruin/lux
technologies: [TypeScript, React, Gatsby, Emotion, Jest]
role: Lead Developer
image: "../../images/projects/lux.png"
---

Lux is the Daily Bruin's design system.

The Daily Bruin has a long history of creating bespoke, interactive online pages for longer-form pieces that student journalists write. When I first joined The Bruin, these pages were usually coded using pure HTML, CSS, and JavaScript with libraries like d3 or jQuery. Oftentimes, we'd find ourselves having to create the same UI features for each new page: bylines, dropcaps, hero images that take up a user's entire screen, etc.

Lux was created as my solution to that problem. I had been using React for a couple other projects and saw the component-based philosophy as a way for Daily Bruin developers to reuse and standardize core components that were similar across all web projects. I was also intrigued by the promises of static site generation by Gatsby, and set out to create a library for the Daily Bruin that would utilize both tools to make the development process easier.

I started working on Lux during summer 2018, creating some core components and setting up the tooling backing the project: documentation generation with Docz and JSDoc, component testing and snapshotting with Jest, autoformatting and linting with ESLint and Prettier, dependency management with Renovate, typechecking with TypeScript, and autopublishing to npm using the conventional commit style, semantic-release, and Travis CI.

In addition to creating the core design library, it was also important that Daily Bruin developers had a quick template to bootstrap. [gatsby-starter-dailybruin](https://github.com/dailybruin/gatsby-starter-dailybruin) is a starter template that imports Lux and sets up a couple demo article layouts, so that Bruin developers can get started on building pages on tight deadlines.
