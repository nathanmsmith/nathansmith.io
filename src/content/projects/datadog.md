---
title: Datadog Frontend
organization: Datadog
dates: January 2019 – May 2019
link: https://app.datadoghq.com
technologies: [JavaScript, TypeScript, React, Redux, D3, Lodash, Less, Python]
role: Developer
image: '../../images/projects/datadog.png'
---

Datadog is a SaaS cloud monitoring platform. From January to May 2019, I was an intern on the data vizualization team at Datadog.

During my time at Datadog, I ended up touching a lot of different parts of app.

- Preventing high cardinality graphs from rendering on initial load, improving response time. (Backend and frontend)
- Planned and led a frontend engineering discussion of 8 engineers on working with side effects in Redux.
- Individually completed a team OKR by overhauling Datadog's frontend number formatting, making numbers easier to read for humans and taking number formatter test coverage from ~15% test coverage to 99%.
- Completely refactored Datadog's frontend handling of units by add a global frontend definition. This removed thousands of lines of code, improved type safety, and enabled caching for users, reducing page size by 2.6kb on every subsequent page load. Implemented a bash script to Datadog developers to easily update units in the future.
- Triaged issues and squashed bugs ad-hoc and on a weekly team support rotation.
- Removed unescaped HTML code paths in Handlebars code to reduce site vulnerability to XSS attacks.
- Added tooltips, buttons, and interactive functionality to a new pgae
