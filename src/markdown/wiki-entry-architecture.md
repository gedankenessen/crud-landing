---
title: "Architecture"
type: "wiki-entry"
slug: "architecture"
description: ""
---

<h2 id="stack">Stack</h2>

crud is written in [Clojure](https://clojure.org/), a functional and dynamically typed language. It was choosen because of its philosophy around data manipulation (highlights: dynamic typing, simple data structures, nil-pruning) and its great developer experience.

<br/>

To persist the data crud connects to a MongoDB. Its hands-off approach to the structuring of data made it a great fit with what crud is trying to provide.
Besides MongoDB, there is also a [second implementation](https://github.com/gedankenessen/crud/tree/main/src/crud/persistence/local "Github") of the persistence layer which uses [Clojure Atoms](https://clojure.org/reference/atoms) to store data in-memory.

<br/>

Clojure being a JVM hosted language opens up a lot of options when it comes to hosting and http servers. As of right now Clojure's [http-kit](https://github.com/http-kit/http-kit) was choosen, as it was packaged with the [Luminus](https://luminusweb.com/) framework. Though it makes sense to switch to [Jetty](https://www.eclipse.org/jetty/) once performance trumps development velocity in terms of priority.

<h2 id="deployment">Deployment</h2>

Currently there are many different ways to [deploy crud](/wiki/installation). With [Docker](/wiki/installation#docker) being the recommended way to self-host, as it's the quickest.

<br/>

In the future an SQL implementation would be great as it would allow to embed a SQLite, thus providing persistence with improved protability.

<h2 id="contributing">Contributing</h2>

If you want to look at the code or have ideas on how to improve crud further feel free to checkout our [repo](https://github.com/gedankenessen/crud).

<h2 id="namespaces">Namespaces</h2>

The major namespaces the following:

<br/>

| Name                    | Purpose                                     |
|-------------------------|---------------------------------------------|
| `crud.logic.core`       | Business Logic                              |
| `crud.entrypoint.core`  | Glue routes, wrappers and logic together    |
| `crud.persistence.core` | Protocol and implementation for persistence |

<br/>

Also important is the `crud.config` namespace which provides a summary of all configurations for easy consumption. The application itself is started in `crud.core`.

<h2 id="layers">Layers</h2>

crud has the usual layers of a Web API:

<br/>

| Name                   | Purpose                                    |
|------------------------|--------------------------------------------|
| `entrypoint.core`      | Glue everything together                   |
| `entrypoint.wrappers`  | Setup, parse, reject request/response etc. |
| `entrypoint.routes`    | Route request to destination               |
| `logic.core`           | Consum request                             |
| `persistence.protocol` | Provide basic functions to access data     |

<h2 id="data-and-errors">Data and errors</h2>

To take advantage of Clojure's nil-pruning and the REPL-driven development everything returned by each layer is in form of a `[data error]` tuple. This both encapsulates the error- and succes-case. If an error occurs `data` will be `nil` and a `:message` key will be present inside of `error`. If the action was sucessful `error` will be `nil`.

<br/>

[This blog post](https://marlonschlosshauer.de/blog/handling-errors-clojure-api) talks more about the `[data error]` tuple.

<br/>
<br/>

_Last Edited: 2023.01.09; crud:1.2.0_
