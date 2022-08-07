---
weight: 9
title: Sources
organization: Daily Bruin
dates: December 2017 – Janurary 2018
link: https://db-sources-staging.herokuapp.com
githubLink: dailybruin/sources
technologies:
  ["TypeScript", "Node", "Express", "GraphQL", "PostgreSQL", "React", "Docker"]
role: Sole Developer and Designer
image: "../../images/projects/sources.png"
---

Sources is an internal database of the Daily Bruin’s contacts for stories that includes the names, affiliations, emails and phone numbers of various sources across Westwood that reporters can consult at any time. It has streamlined the reporting process and greatly assists the more than 500 student staffers on a daily basis. Since Sources deals with personal information, only Daily Bruin reporters are able to login and access it, but a live demo version with fake information accessible to anyone to show the breadth of the tool.

The first iteration of Sources was created before I joined The Bruin, but was starting to show its technical debt when I became an Assistant Online editor last year; it had security issues and was often down. Most news writers had given up on it. After examining the current source code and talking with reporters, editors, the former developers who wrote the original app and our current devops team, I decided that a total rewrite of Sources was in order. Starting a new project gave me an opportunity to combine various technologies that I had never worked with before into a complete production application.

I decided to try as many new technologies as possible while still making logical engineering and architecture decisions, and to document my process so that future developers could modify Sources as necessary. The News editors wanted the site to be fast and responsive, so I chose to write the frontend of Sources in React, using TypeScript to ensure that any type bugs were caught early on in development. Since I was using TypeScript on the frontend, it made sense to also use TypeScript for the server that would manage and store data and users, using the Node.js runtime and Express.js framework, as well as GraphQL in order to pass data between the frontend and server. On the advice of the devops team, I planned on running this sever in a Docker container and using Postgres as Sources’ database.

In order to make each technology work in the context of the entire app, I took a piecemeal approach. I started with a Node.js server, then brought in TypeScript, then GraphQL support, then the Postgres connection, etc. It was the first project in which I did not have a given template for how to layout each file and I found myself putting a lot more time than I originally expected into considering a logical architecture of my code. I was forced to become an expert in each of the technologies I had chosen in order to use them together as part of a larger, cohesive product.
