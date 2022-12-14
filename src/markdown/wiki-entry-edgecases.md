---
title: "Edgecases"
type: "wiki-entry"
slug: "edgecases"
description: ""
---

<br/>

We've [previously mentioned](/wiki/first-steps) that crud cleans the database on [structure changes](/wiki/first-steps#changing). But that isn't the only feature crud provides to improve DX.

## PUT does not trigger a clean-up

When using `POST` to add data, crud will check if a change to the structure occured. To allow you to play with your data, crud will not check the structure if you do a `PUT` on an item.

<br/>

So if we first `POST` an item to `/products`

```
POST crud.gedankenessen.de/build/products
{
  "name": "Keyboard",
  "color": "Silver",
  "material": ["Metal", "Plastic"]
}
```

And then change that item:

```
PUT crud.gedankenessen.de/build/products
{
  "name": "Keyboard",
  "color": "Grey",
  "_id": "6392357a6a845062bbc40814"
}
```

No change detection will be run.

<br/>

This can be useful if we want to debug or test a specific scenario without clearing our database. For instance, maybe we want to check how our frontend reacts when the array of `material` is `null`, instead of just `[]`.

## null is treated as a wildcard

If you know of a field that will be relevant later but you don't have the data for it yet, you can specify it as `null` in your `POST`. This will tell crud not to wipe the database if the field later appears with actual data inside.

So if we run both of these one after another:

```
POST crud.gedankenessen.de/build/products
{
  "name": "Keyboard",
  "color": "Silver",
  "material": null
}
```


```
POST crud.gedankenessen.de/build/products
{
  "name": "Table",
  "color": "Brown",
  "material": ["Wood", "Metal"]
}
```

A `GET` will give us both:

```
GET crud.gedankenessen.de/build/products
[
  {
    "name": "Keyboard",
    "color": "Silver",
    "material": null,
    "_id": "6392357a6a845062bbc30183"
  },
  {
    "name": "Table",
    "color": "Brown",
    "material": ["Wood", "Metal"],
    "_id": "6392357a6a845062bbc41924"
  },
]
```

## Unknown endpoints always return []

To minimize headaches `GET` on undefined or unknown endpoints always return `[]`. So if we have never done a `POST` on `/tables`, the following will just return `[]`:

```
GET crud.gedankenessen.de/build/tables
[]
```

This is done so that you don't encounter `404` errors if you choose to start out by building an overview component (e.g. summary of available tables) first. That way you can build the component that does the `POST` and defines the structure of your items (e.g. interactive table configurator), later.

<br/>
<br/>

_Last edited: 2022.12.14; crud:1.1.0_
