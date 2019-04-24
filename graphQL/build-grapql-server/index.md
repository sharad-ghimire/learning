---
title: "Build GraphQL Server"
author: "Traversy Media"
link: "https://www.youtube.com/watch?v=qqzIA1BQ_ys&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68&index=2"
---

# What is GraphQL?

- Application layer query language
- Open sourced by facebook in 2015
- Can be used with any type of database
- Ability to ask for exactly what we need and nothing more
- Get multiple resources in a single request

**The Query**

```graphq
{
  user(id: "100") {
    name
    email
    posts {
      title
    }
  }
}
```

**The Data**

```js
{
	"user": {
		"id":"100",
		"name":"Sharad Ghimire",
		"email":"sharadghimire5551@gmail.com",
		"posts": [
			{"title": "Post1"},
			{"title":"Post2"}
		]
	}
}
```

**GraphQL Types**

GraphQL APIs are organized in terms of types and fields.

```graphql
Type Query {
	user: User
}

Type User {
	name: String
	age: Int
	friends: [User]
}
```

**GraphiQL Tool**

- Graphical Interactive GraphQL IDE
- Runs in the browser
- Syntax highlighting
- Error reporting
- Automation and Hinting
