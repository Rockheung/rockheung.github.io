---
layout: post
title: '모던 JavaScript 튜토리얼: 프라미스와 async, await 2'
date: 2020-10-30 10:56:51.943 +0900
categories: Study JavaScript
tags: javascript modern
---

### 암시적 try...catch

```javascript

new Promise((resolve) => {
  throw new Error()
})
.catch(errorHandler)

```

위 코드는 다음과 같이 동작한다. executor 함수는 에러를 잡아 errorHandler에서 처리한다.
마치 try...catch 구문이 있는 것 처럼 동작한다.

```javascript

new Promise((resolve, reject) => {
  reject(new Error());
})
.catch(errorHandler)

```

then으로도 마찬가지로 동작한다.

```javascript

new Promise((resolve, reject) => {
  resolve('ok');
})
.then((ok)=> throw new Error())
.catch(errorHandler)

```

### thenable

[Promise.resolve()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)에서 등장한 thenable을 사용해봤다.

```javascript

function thenableHere(obj) {
  return {
    then: function(resolve, reject) {
      if (obj === undefined) {
        reject('No object provided!')
      }
      resolve('Resolved!')
    }
  }
}

Promise.resolve(thenableHere())
  .then(console.log)
  .catch(console.error)

// No object provided!
// Promise {<fulfilled>: undefined}
//   __proto__: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: undefined

Promise.resolve(thenableHere({}))
  .then(console.log)
  .catch(console.error)

// Resolved!
// Promise {<fulfilled>: undefined}
//   __proto__: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: undefined

```

체이닝도 Promise의 그것과 마찬가지로 잘 되는지 확인해 봤다

```javascript


Promise.resolve(thenableHere({url: 'http://blog.rockheung.xyz/CNAME'}))
  .then(url)
  .then(console.log)
  .catch(console.error)
```