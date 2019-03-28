---
layout: post
title: 'Prettier & ESLint in VSCode'
author: Rockheung
tags: codestates javascript bootcamp
categories: Study

---
### @ VSCode

- VSCode Extension: Prettier - Code Formatter

### trailingComma는 무엇?
> JavaScript has allowed trailing commas in **array** literals since the beginning, and later added them to **object** literals (ECMAScript 5) and most recently (ECMAScript 2017) to **function** parameters.
**JSON**, however, disallows trailing commas.

-   "none" - No trailing commas
-   "es5" - Trailing commas where valid in ES5 (objects, arrays, etc)
-   "all" - Trailing commas wherever possible (function arguments)

[DOC: Settings]([https://github.com/prettier/prettier-vscode#settings](https://github.com/prettier/prettier-vscode#settings))
```json
// .prettierrc: 사실 다음 값이 defualt
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false
 }
```

- VSCode Extension: ESLint

airbnb lint 규칙이 react 규칙을 포함하나 꽤 엄밀하여 당장은 필요없다고 판단.


> Written with [StackEdit](https://stackedit.io/).


