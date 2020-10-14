---
layout: post
title: '자바스크립트: __proto__, constructor, prototype'
date: 2019-02-18 00:00:00.123 +0900
categories: Study
tags: codestates javascript bootcamp
---

자바스크립트에서 함수를 정의하는 `function`키워드는 조금 특별하다. 단순히 함수를 정의할 뿐만 아니라, 객체의 원형(prototype)을 정의하여 그러한 객체를 만들어낼 수 있다.

```javascript
function Foo() {
  this.bar = 'whoami';
}

var foo = new Foo();
console.log(foo.bar); //-> whoami
```

이러한 방식을 *pseudoclassical*라 부르는데, 일반적으로 가장 많이 사용된다. 객체를 만들어내는 패턴을 **Instantiation Styles**라 지칭하고 크게 다음 네 가지로 구분한다고 한다. _Functional instantiation_, _Functional instantiation with shared methods_, _Prototypal instantiation_

위에서는 가장 일반적인 방식인 *Pseudoclassical instantiation*스타일로 new키워드를 통해 만들어냈다. 다음 속성을 크롬 콘솔을 통해 각 객체에서 찾아보았다.

- `__proto__`

```javascript
foo.constructor
ƒ Foo () {
  this.bar = "whoami";
}

```

- constructor

- prototype

> Written with [StackEdit](https://stackedit.io/).
