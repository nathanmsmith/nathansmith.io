---
weight: 18
title: Datadog Data Visualizations
organization: Datadog
dates: January 2019 – May 2019
link: https://app.datadoghq.com
technologies:
  [JavaScript, TypeScript, React, Redux, D3, Lodash, Handlebars, Less, Python]
role: Developer
image: "../../images/projects/datadog.png"
---

Datadog is a SaaS cloud monitoring platform. From January to May 2019, I was an intern on the data vizualization team at Datadog.

During my time at Datadog, I ended up working with a lot of different people and parts of app. Some of the work I did:

- Individually completed a team OKR by overhauling Datadog's frontend number formatting, making numbers easier to read for humans and taking number formatter test coverage from ~15% to 100%.
- Completely refactored Datadog's frontend handling of units by adding a global frontend definition. This removed thousands of lines of code, improved type safety, and enabled caching for users, reducing page size by 2.6kB on every subsequent page load. Implemented a bash script to Datadog developers to easily update units in the future.
- Analyzed the performance of high cardinality graphs and defined sensible series limits in Datadog's data fetching endpoint, reducing initial page load time and improving page performance.
- Implemented telemetry in various places across the the frontend. Created dashboards of tracked metrics and reported conclusions to team. Fun fact: Datadog uses Datadog to track frontend telemetry!
- Acted as the official onboarding "buddy" of an incoming intern. I scheduled weekly 1-on-1 meetings and acted as both a technical and general Datadog-related-knowledge resource.
- Planned and led a frontend engineering discussion of 8 engineers on working with side effects in Redux.
- Triaged issues and squashed bugs ad-hoc and on a weekly team support rotation.
- Removed unescaped HTML code paths to reduce Datadog's vulnerability to XSS attacks.
- Added tooltips, buttons, a collapsable sidebar, types, documentation, and tests to [fullscreen graph views](https://www.datadoghq.com/blog/full-screen-graphs/).

All in all, it was a fun five months 😄
