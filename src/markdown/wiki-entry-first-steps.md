---
title: "First Steps"
type: "wiki-entry"
slug: "first-steps"
description: ""
---

<br/>
<br/>

In this section were going to look at how to use crud. If you haven't installed crud yet, checkout the [Installation](/wiki/installation) section.

<h2 id="basics">The basics</h2>

crud works by receiving `JSON` through a POST on an `endpoint` with the name of your choice.

```
POST 127.0.0.1:3004/build/products
{
  "name": "Keyboard",
  "color": "Silver",
  "material": ["Metal", "Plastic"]
}
```

It'll then attach that `endpoint` to your account (which is identified by the token that you supply in the header).

<h2 id="token">Obtaining a token</h2>

crud needs a token inside of the header of your requests to identify you. To obtain that token you first need to create an account.

```
POST 127.0.0.1:3004/user/register
{
  "email": "foo@bar",
  "password": "******"
}
```

If you get a `OK 200` as a response you can collect your token by sending the same `email` and `password` to `/login`:


```
POST 127.0.0.1:3004/user/login
{
  "email": "foo@bar",
  "password": "******"
}
```

You should receive something like this:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2MzkyMzU3YTZhODQ1MDYyYmJjNDA1OTciLCJ2ZXIiOjAsImlhdCI6MTY3MDkzNDE2NDE3NywiZXhwIjoxNjczNTI2MTY0MTc3fQ.NHuBZplniKRq4vnNaZUD9rdJk0V2FQgY-TZhFUZX_MA"
}
```

Stick that token in your header under `Authorization` and you're good to go.

<h2 id="creating">Creating your first endpoint</h2>

Having collected and stored our token, we can now use crud to handle our data:

```
POST 127.0.0.1:3004/build/products
{
  "name": "Keyboard",
  "color": "Silver",
  "material": ["Metal", "Plastic"]
}
```

The above request adds a `/products` endpoint with an object containing the keys `name`, `color`, `material`. It's important to note that the `/build` path needs to be prefixed to our desired endpoint. This is so crud related endpoints don't cause a naming conflict (see the [API](/wiki/api) section for more).

<h2 id="querying">Querying data</h2>

After our `POST` request we can access all basic CRUD methods on our new `/products` endpoint.

```
GET 127.0.0.1:3004/build/products
[{
  "name": "Keyboard",
  "color": "Silver",
  "material": ["Metal", "Plastic"],
  "_id": "6392357a6a845062bbc40597"

}]
```

crud also generates a unique `_id` for our item, which we can use to find it again:

```
GET 127.0.0.1:3004/build/products/6392357a6a845062bbc40597
{
  "name": "Keyboard",
  "color": "Silver",
  "material": ["Metal", "Plastic"],
  "_id": "6392357a6a845062bbc40597"

}
```

Or to update it:
```
PUT 127.0.0.1:3004/build/products/6392357a6a845062bbc40597
{
  "name": "Keyboard",
  "color": "Dark Grey",
  "material": ["Metal", "Plastic"],
  "_id": "6392357a6a845062bbc40597"
}
```

<h2 id="changing">Changing structure</h2>

During development the structure of our data might change. To improve development velocity crud will flush the database if it detects a change in structure.

For instance, if we add a field documenting the dimensions of our product and `POST` it to `/products`:

```
POST 127.0.0.1:3004/build/products
{
  "name": "Table",
  "color": "Brown",
  "material": ["Wood", "Metal"],
  "size": {"x": 30, "y": 12, "z": 6}
}
```

crud will automatically clean up the previous entries:

```
GET 127.0.0.1:3004/build/products
[{
  "name": "Table",
  "color": "Brown",
  "material": ["Wood", "Metal"],
  "size": {"x": 30, "y": 12, "z": 6},
  "_id": "6392357a6a845062bbc4a851"
}]
```

This is done to save us from headaches of `x.y is undefined` type errors. There are some additional changes to further improve DX, checkout the [Edgecases](/wiki/edgecases) section for more information.

<h2 id="next">Next steps</h2>

You're now ready to use crud, so try it out. If you find any bugs feel free to [report them](https://github.com/gedankenessen/crud/issues).
Additionally you can learn more about some of cruds edgecases in the [Edgecases](/wiki/edgecases) section.

<br/>
<br/>

_Last Edited: 2022.12.14; crud:1.1.0_
