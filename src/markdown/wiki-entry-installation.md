---
title: "Installation"
type: "wiki-entry"
slug: "installation"
description: ""
---

<h2 id="about">About</h2>

crud can be self-hosted in multiple ways. The recommended way is via Docker Compose, as that includes a MongoDB. It is also possible to run crud through Docker and to provide your own MongoDB. Lastly, you can also just clone the [crud repo](https://github.com/gedankenessen/crud) and run the Clojure code directly.

<h2 id="docker-compose">Docker Compose</h2>

When self-hosting crud through Docker Compose all the necessary dependencies are taken care of (besides [docker](https://www.docker.com/) itself).

<br/>
Here are the necessary steps:


1. Create an empty folder for your crud deployment
2. Create a `docker-compose.yml` and paste the following into it

```docker
version: '3.0'
services:
  mongo:
    image: 'mongo:6.0'
    restart: 'always'
    environment:
      - "MONGO_INITDB_ROOT_USERNAME=root"
      - "MONGO_INITDB_ROOT_PASSWORD=example"
    ports:
      - '27017:27017'
  crud:
    image: 'gedankenessen/crud:0.0.1'
    restart: 'always'
    ports:
      - '3004:3004'
```
3. Open a terminal and navigate to your crud folder
4. Run `docker-compose up`

<br/>

You should now have two services running, a) a `mongo` service and b) a `crud` service. If thats the case crud will be available on `localhost:3004`

<h2 id="docker">Docker</h2>

You can also run just the Dockerimage and provide your own MongoDB (v6.0 preferred):

<br/>

```shell
docker run gedankenessen/crud:0.0.1
```

<br/>

crud expects your MongoDB to be located at `localhost:27017` and have a default user of `root:example`. Checkout [the customizing](#customizing) to learn how to change those values.

<h2 id="git">Git</h2>

Requirements:
- Git
- Java (JDK8)
- Clojure (1.10)
- Leiningen
- MongoDB (v6.0 preferred)

<br/>

The following steps should get `crud` up and running:

1. Clone the crud repo: `git clone git@github.com:gedankenessen/crud.git`
2. Enter the project: `cd crud`
2. Run the project via leiningen: `lein run`

<br/>

That should start crud for you on `localhost:3004`. Check out [the customizing](#customizing) section to correctly configure crud to work with your MongoDB.


<h2 id="customizing">Customizing</h2>

By default crud will assume a MongoDB to be present on `localhost:27017`. crud also assumes a user with the name `root` with the password `example` to be present on the database.
You can adjust all that by either using environment variables (e.g [docker run]((https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file))) or passing in different command line arguments (e.g `lein run`).

<br/>

| Environment Variable     | Command Line Argument  | Default        |
|--------------------------|------------------------|----------------|
| `CRUD_MONGO_URL`         | `--mongo-url`          | `localhost`    |
| `CRUD_MONGO_PORT`        | `--mongo-port`         | `27017`        |
| `CRUD_MONGO_USER`        | `--mongo-user`         | `root`         |
| `CRUD_MONGO_PW`          | `--mongo-pw`           | `example`      |
| `CRUD_MONGO_DB`          | `--mongo-db`           | `crud-testing` |
| `CRUD_MONGO_SHOULD_AUTH` | `--crud-should-auth`   | `false`        |
| `CRUD_MONGO_AUTH_DB`     | `--crud-auth-db`       | `admin`        |
| `CRUD_PORT`              | `--crud-port`          | `3004`         |
| `CRUD_ENV`               | `--crud-env`           | `prod`         |
| `CRUD_TOKEN_SECRET`      | `--crud-token-secret`  | `secret`       |
| `CRUD_TOKEN_VERSION`     | `--crud-token-version` | `0`            |

<h2 id="next">Whats next</h2>


With crud setup you can checkout the [first steps](../first-steps) section and make your first queries.

<br/>
<br/>

_Last Edited: 2020.12.13; crud:v0.0.2_
