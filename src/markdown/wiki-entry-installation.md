---
title: "Installation"
type: "wiki-entry"
slug: "installation"
description: ""
---

<h2 id="about">About</h2>

crud can be hosted in multiple ways.

<br/>

The quickest way to get crud up and running is Docker. Alternatively, you can use Docker Compose if you want to have a MongoDB present.
Lastly, you can also just clone the [crud repo](https://github.com/gedankenessen/crud) and run the Clojure code directly.

<br/>

Opting for Docker will mean your endpoints are saved in-memory, **therefore lost upon restarts**.

<h2 id="docker">Docker</h2>

Using the [official Docker image](https://hub.docker.com/r/gedankenessen/crud/tags) is the quickest way to get up and running:

```shell
docker run -p 3004:3004 gedankenessen/crud:1.2.0
```

<br/>

You can now access crud via `127.0.0.1:3004`.

<br/>

crud will by default use an in-memory storage solution. You can however tell it to use a MongoDB that you provide. Checkout [the customizing](#customizing) section to learn more.


<h2 id="docker-compose">Docker Compose</h2>

Using Docker Compose is an all-in-one-solution for crud. Here are the necessary steps:

<br/>

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
    image: 'gedankenessen/crud:1.2.0'
    restart: 'always'
    ports:
      - '3004:3004'
```
3. Open a terminal and navigate to your crud folder
4. Run `docker-compose up`

<br/>

You should now have two services running, a) a `mongo` service and b) a `crud` service. If thats the case crud will be available on `127.0.0.1:3004`

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

That should start crud for you on `127.0.0.1:3004`. Check out [the customizing](#customizing) section to correctly configure crud to work with your MongoDB.


<h2 id="customizing">Customizing</h2>

You can tweak your crud experience with many options. The most important option is `db-type` which tells crud if it should use a in-memory solution (default, `value:local`) or a MongoDB (`value:mongo`).

So if you want to use a MongoDB either provide a environment variable `CRUD_DB_TYPE` with the value `mongo` or use the `--db-type` command line argument.

You can tweak further MongoDB related things such as the port, the desired collection, password etc. If you select MongoDB, crud will assume the default location of `localhost:27017` with the user `root` and the password `example`.

<br/>

Here is a table of all the possible options:

<br/>

| Environment Variable     | Command Line Argument  | Default        | Options |
|--------------------------|------------------------|----------------|---------|
| `CRUD_DB_TYPE`           | `--db-type`            | `local`        | `mongo` |
| `CRUD_MONGO_URL`         | `--mongo-url`          | `localhost`    |         |
| `CRUD_MONGO_PORT`        | `--mongo-port`         | `27017`        |         |
| `CRUD_MONGO_USER`        | `--mongo-user`         | `root`         |         |
| `CRUD_MONGO_PW`          | `--mongo-pw`           | `example`      |         |
| `CRUD_MONGO_DB`          | `--mongo-db`           | `crud-testing` |         |
| `CRUD_MONGO_SHOULD_AUTH` | `--crud-should-auth`   | `false`        |         |
| `CRUD_MONGO_AUTH_DB`     | `--crud-auth-db`       | `admin`        |         |
| `CRUD_PORT`              | `--crud-port`          | `3004`         |         |
| `CRUD_ENV`               | `--crud-env`           | `prod`         |         |
| `CRUD_TOKEN_SECRET`      | `--crud-token-secret`  | `secret`       |         |
| `CRUD_TOKEN_VERSION`     | `--crud-token-version` | `0`            |         |

<br/>

You can adjust all that by either using environment variables (e.g [docker run -- -e]((https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)), [docker-compose](https://docs.docker.com/compose/environment-variables/)) or passing in different command line arguments (e.g `lein run`).


<h2 id="next">Whats next</h2>


With crud setup you can checkout the [first steps](/wiki/first-steps) section and make your first queries.

<br/>
<br/>

_Last Edited: 2023.01.09; crud:1.2.0_
