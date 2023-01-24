---
title: "Hello World"
type: "blog-entry"
slug: "hello-world"
date: "2022-12-17"
description: "A quick look at what crud is, why it exists and what my goals are."
---

<h2 id="why">Why crud?</h2>

I've often felt that the switch between prototyping your frontend with local state to consuming an API is awkward. Going back to retrofit the necessary wiring for state transitions takes away from the break neck speed that we develop modern applications.

<br/>

So, the idea for crud was born: Make an API that is trivial to change, so developers can adopt it early and use it to prototype their application.

<h2 id="stack">Stack</h2>

crud was a good opportunity to try out a new stack. I've been a fan of Clojure for a long time but I never built a REST API with it. The flexible approach to data and data manipulation made it a great fit and I'm really glad that I choose Clojure.

<br/>

Having a focus on basic datastructures allows for easy consumption of built-in functions and third-party libraries. I'm a big fan of the opt-in attitude towards static typing and coming with nil-punning out-of-the-box, too. All of those factors make handling of data feel great. And the way the REPL empowers the developers is incredibly rewarding and lends itself to create very testable solutions.

<br/>

I've also explored MongoDB properly for the first time. I had concerns that I wasn't able to produce sophisticated enough queries, but I soon learned that all my queries (up until now) are pretty basic. I enjoyed the easy of structuring data very much and being able to shout commands at the database to insert or delete specific keys in a map is great.

<br/>

If I would evaluating crud as an experiment to get a feel for a new stack, I'd say it's a total success. I can't wait to write more Clojure!

<h2 id="state">Current state</h2>

The current version of crud is a working MVP. There are bugs. There are sharp edges. But it's my goal was to get something working out of the door. There are many additions that I'd love to make, but for now the focus was on releasing and documenting the software.

<h2 id="future">Whats to come?</h2>

There are many TODOs floating around. I'd love to properly offer crud as a product, to remove the hurdle of self-hosting. I'd also like to add an in-memory storage solution, to get rid of the MongoDB requirement.

A big addition would be the ability to generate [OpenAPI](https://openapi-generator.tech/) specs from a given endpoint. As well as having a UI to inspect and easier share endpoints.

<br/>

As of right now I can't make any promises as the next year looks very busy.

<br/>

You can check out the [repository here](https://github.com/gedankenessen/crud), if you'd like to contribute - Thanks.

