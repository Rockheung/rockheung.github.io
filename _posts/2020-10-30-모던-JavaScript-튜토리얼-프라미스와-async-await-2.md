---
layout: post
title: '모던 JavaScript 튜토리얼: 프라미스와 async, await 2'
date: 2020-10-30 10:56:51.943 +0900
categories: Study JavaScript
tags: javascript modern
---

### 암시적 try...catch

```javascript

new Promise(function executor(resolve) {
  throw new Error()
})
.catch(errorHandler)

```

위 코드는 다음과 같이 동작한다. executor 함수는 에러를 잡아 errorHandler에서 처리한다.
마치 try...catch 구문이 있는 것 처럼 동작한다.

```javascript

new Promise(function executor(resolve, reject)  {
  reject(new Error());
})
.catch(errorHandler)

```

then으로도 마찬가지로 동작한다.

```javascript

new Promise(function executor(resolve, reject) {
  resolve('ok');
})
.then((ok)=> { throw new Error() } )
.catch(errorHandler)

```

### thenable

**[Promise.resolve()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve){:other target="_blank"}**에서 등장한 thenable을 사용해봤다.

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
  .then(msg=> msg)
  .then(console.log)
  .catch(console.error)
```

### Promise의 Static method - all, race, resolve, reject, and allSettled

`Promise.all`, `Promise.race`, `Promise.allSettled`는 프라미스로 이루어진 배열에 사용된다. 다만 그 기제는 각기 다른데, all은 배열의 모든 promise가 resolve되어야 resolve로 fulfilled된다. 만약 한 개의 프라미스라도 reject되면, 다른 모든 resolve된 promise는 무시되고, reject으로 fulfilled된다. allSettled는 이와 정확히 반대로 동작한다. race는 가장 먼저 resolved 된 프라미스를 반환한다.

```javascript

function invoked(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(
      function() {
        console.log("Invoked after", ms, 'ms')
        resolve(ms)
      },
      ms
    )
  })
}

Promise.race([invoked(1000), invoked(1090),invoked(4000)]).then((ms) => console.log('Invoked after', ms/1000, 's'))

// Promise {<pending>}
//   __proto__: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: undefined
// Invoked after 1000 ms
// Invoked after 1 s
// Invoked after 1090 ms
// Invoked after 4000 ms

```

`Promise.resolve`, `Promise.reject`는 각각 resolve, reject된 상태의 Promise를 리턴한다.

### 프라미스화

콜백으로 구현되는 함수를, 프라미스로 감싸는 것이다. 간단하게, 만만한 `setTimeout`함수를 프라미스로 감싸면, 지연시키는 코드를 콜백이 아닌 프라미스의 형태로 사용할 수 있을 것이다.

```javascript
function setTimeoutPromise(func, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const res = func();
        resolve(res);
      } catch (err) {
        reject(err)
      }
      
    })
  })
}
```
