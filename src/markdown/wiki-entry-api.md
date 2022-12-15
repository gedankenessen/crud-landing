---
title: "API"
type: "wiki-entry"
slug: "api"
description: ""
---

<h2 id="overview">Overview</h2>

crud comes with a couple endpoints to provide a (hopefully) stable API that scales well from single users up to large teams. Here is a list of all availalbe endpoints:

<br/>

All of them are available under `localhost:3004/`.

<h2 id="build">/build</h2>

The `/build` prefix houses the ability to create and utilize the CRUD methods of your endpoints.

<br/>

| Method | Path               | Description                                                               |
|--------|--------------------|---------------------------------------------------------------------------|
| POST   | `/build/:name`     | Add data to endpoint with `:name` (creates endpoint if it does not exist) |
| GET    | `/build/:name`     | Get all data on endpoint `:name`                                          |
| GET    | `/build/:name/:id` | Get item with `:id` on endpoint `:name`                                   |
| PUT    | `/build/:name/:id` | Change item with `:id` of endpoint `:name`                                |
| DELETE | `/build/:name/:id` | Delete item with `:id` of endpoint `:name`                                |

<h2 id="meta">/meta</h2>

`/meta` contains information on your endpoints:

<br/>

| Method | Path        | Description                |
|--------|-------------|----------------------------|
| GET    | `/meta/`    | List all endpoints         |
| DELETE | `/meta/`    | Delete all endpoints       |
| GET    | `/meta/:id` | Get endpoint with `:id`    |
| PUT    | `/meta/:id` | Change endpoint with `:id` |
| DELETE | `/meta/:id` | Delete endpoint with `:id` |

<h2 id="user">/user</h2>

Authentification and credential related functions are under `/user`

<br/>

| Method | Path             | Description                             |
|--------|------------------|-----------------------------------------|
| POST   | `/user/register` | Create an account                       |
| POST   | `/user/login`    | Exchange email and password for a token |
| DELETE | `/user/`         | Delete your account                     |
| GET    | `/user/`         | Get account information                 |
| PUT    | `/user/`         | Change account information              |

<br/>
<br/>

_Last Edited: 2022.12.14; crud:1.1.0_
