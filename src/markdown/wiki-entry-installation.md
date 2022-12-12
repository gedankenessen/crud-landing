---
title: "Installation"
type: "wiki-entry"
slug: "installation"
description: ""
---

<h2 id="about">About</h2>

crud can be self-hosted in multiple ways. The recommended way is via Docker Compose, as that includes a MongoDB. It is also possible to run crud through Docker and to provide your own MongoDB.

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

```shell
docker run gedankenessen/crud:0.0.1
```

<h3 id="customizing">Customizing</h3>

By default crud will assume your MongoDB is present on `localhost:27017`. crud also assumes a `root` user with the password `example` to be present on the database.
You can adjust all that by passing the following command args:

<br/>

| Comand         | Default        |
|----------------|----------------|
| `--mongo-url`  | `localhost`    |
| `--mongo-port` | `27017`        |
| `--mongo-user` | `root`         |
| `--mongo-pw`   | `example`      |
| `--mongo-db`   | `crud-testing` |

<br/>

Likewise, the settings can also be changed by setting the following environment variables:

<br/>

- `CRUD_MONGO_URL`
- `CRUD_MONGO_PORT`
- `CRUD_MONGO_USER`
- `CRUD_MONGO_PW`
- `CRUD_MONGO_DB`

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


<h2 id="next">Whats next</h2>


With crud setup you can checkout the [first steps](wiki/first-steps) section and make your first queries.

<br/>
<br/>

_Last Edited: 2020.12.12; crud:v0.0.1_
