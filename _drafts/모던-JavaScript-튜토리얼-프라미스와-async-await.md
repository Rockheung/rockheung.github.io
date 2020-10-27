---
layout: post
title: '모던 JavaScript 튜토리얼: 프라미스와 async, await'
date: 2020-10-27 11:35:18.448 +0900
categories: Study JavaScript
tags: javascript modern
---

### 콜백

콜백, Callback은 그러니까, 해당 코드를 컴파일러가 마주친 바로 그 순간에 실행시키지 않고 다른 함수에 넘기는 코드이다. 아래 예시를 보자.

```javascript
function didNotCallYet() {
  console.log("Invoked at", new Date());
}

function invokeNow(callback) {
  console.log("Now invoke delivered code after this line.");
  didNotCallYet();
}

function main() {
  invokeNow(didNotCallYet);
}
// Now invoke delivered code after this line.
// Invoked at Tue Oct 27 2020 20:49:39 GMT+0900 (대한민국 표준시)
```

`fetch` browser method를 이용하여 서버에서 응답을 받은 후에 실행되는 콜백 코드를 짜봤다.

```javascript
/**
 * {
 *   "data": [
 *     {
 *       "id": 9,
 *       "name": "John Doe",
 *       "hobby": "Lying down"
 *     }
 *   ]
 * }
 */
fetch('/data.json')
  .then(res => res.json())
  .then((_json) => {
     console.log(_json)
  })

// Promise {<pending>}
//   __proto__: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: undefined
// {data: Array(1)}
//   data: Array(1)
//     0: {id: 9, name: "John Doe", hobby: "Lying down"}
//     length: 1
//     __proto__: Array(0)
//   __proto__: Object

```

응답을 받은 후에 그 문자열을 json메서드로 파싱하여 그 객체를 콘솔에 찍어준다. 그런데 콘솔에 찍힌 Promise란 게 보인다.

### Promise

위에서 fetch는 Promise 를 리턴하고 종료됐다. 이 객체를 직접 사용해보자.

setTimeout을 이용하여 fetch를 모사해보자.
```javascript

function fetchMock(delayTime = 1000) {
  const data = {
    data: [
      {
        id: 9,
        name: "John Doe",
        hobby: "Lying down"
      }
    ]
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      new Response(JSON.stringify(data))
      )
    , delayTime);
  })
}

fetchMock(3000)
  .then(res => res.json())
  .then((_json) => {
    console.log(_json)
  })

console.log("fetchMock invoked");

// fetchMock invoked
// {data: Array(1)}
//   data: Array(1)
//     0: {id: 9, name: "John Doe", hobby: "Lying down"}
//     length: 1
//     __proto__: Array(0)
//   __proto__: Object
```

1초 이후에 응답이 날아오는 상황을 모사해봤다. 