---
weight: 16
title: Keybase JavaScript Bot
organization: Keybase
dates: October 2018 – January 2019
link: https://www.npmjs.com/package/keybase-bot
githubLink: keybase/keybase-bot
technologies: [JavaScript, Node, Flow]
role: Developer
image: "../../images/projects/keybase-bot.png"
---

After my summer 2018 internship with Keybase, I continued to work part-time for them during the school year, implementing a Node.js wrapper around the Keybase JSON API. This library is for developers who want to create applications and bots with the Keybase service.

What I did during my few months of working on the Keybase bot library:

- Set up both development and build tooling.
- Implement support for "oneshot" logins with a user's paperkey.
- Rearchitect the internals of the bot, using a mix of object-oriented and functional ideas to get a nice blend of an easy to understand and use external API, managable internal code, and atomic, testable functions.
- Extend the bot's chat functionality by adding support for sending and receiving attachments and emoji reactions.
- Implement Keybase wallet support, allowing users to send and request Stellar lumens.
- Write behavior driven end-to-end tests for the above features.

I had a lot of fun working on this project and ended up learning a lot about managing processes, files, and API design. The code for the bot is open-source and available on GitHub; you can all view [a list of all of my contributions](https://github.com/keybase/keybase-bot/commits?author=nathunsmitty) there as well.
