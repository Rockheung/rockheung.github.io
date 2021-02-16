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
  callback();
}

function main() {
  invokeNow(didNotCallYet);
}

main();
// Now invoke delivered code after this line.
// Invoked at Tue Oct 27 2020 20:49:39 GMT+0900 (대한민국 표준시)
```

위 코드에서는 모든 함수가 동기적이긴 하다. 그렇다면 setTimeout을 이용하여 함수의 실행을 지연시켜보자.
위에 정의된 함수 중 `invokeNow`를 조금 변형하여 1초 후에 실행시키도록 다시 작성했다.

```javascript

function invokeIn2s(callback) {
  console.log("Now invoke delivered code after this line.");
  setTimeout(callback, 2000);
}

function anotherMain() {
  invokeIn2s(didNotCallYet);
}

anotherMain();

```

2초 후에 실행됨이 확인될 것이다.


### Promise

Promise를 리턴하는 대표적인 `fetch` browser method를 이용하여 서버에서 응답을 받은 후에 실행되는 콜백 코드를 짜봤다.

```javascript
fetch('/data.json')
  .then(res => res.json())
  .then((_json) => {
     console.log(_json)
  })

// /data.json
// {
//   "data": [
//     {
//       "id": 9,
//       "name": "John Doe",
//       "hobby": "Lying down"
//     }
//   ]
// }

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

위에서 fetch는 Promise 를 리턴하고 종료됐다. 이 객체를 직접 사용해보자.

setTimeout을 이용하여 fetch를 모사해보자.
```javascript

function fetchMock(delayTime = 100) {
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

fetchMock(1000)
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

1초 이후에 응답이 날아오는 상황을 모사해봤다. `fetchMock invoked`가 찍히고, 1초 후에 data가 콘솔에 찍힌다.
콜백 방식과는 다르게 코드가 가로로 길어지지 않고, 세로로 길어져서 한결 보기 편해짐을 알 수 있다. 언제 fulfilled 될지 알 수 없는 비동기 함수를 프라미스를 이용하여 이런 식으로 동기적으로 작성하는 것을 프라미스 체이닝이라고 한다.

### Promise 체이닝

위의 코드에서 json 메서드가 리턴하는 것도 드러나진 않지만 프라미스다([MDN: Response](https://developer.mozilla.org/en-US/docs/Web/API/Response#Body_Interface_Methods)). then의 argument에는 resolve되었을 때의 콜백과, reject되었을 때의 콜백이 인자로 들어가는데, 이때 reject되었을 때의 콜백은 생략할 수 있다. 또한 이러한 체이닝의 장점은, 한 번의 catch로 앞서 발생한 reject를 잡아낼 수 있다는 것이다. 

```javascript

let resolvedCount = 0;

function throwError(willReject = false) {
  return new Promise((resolve, reject)=>{
    if (willReject) {
      reject(new Error('Thrown at:' + resolvedCount));
      return;
    }
    resolvedCount += 1;
    resolve();
  });
}

throwError()
  .then(() => throwError())
  .then(() => throwError())
  .then(() => throwError(true))
  .then(() => throwError())
  .then(() => throwError())
  .catch(console.log);

// Error: Throned at:3
//   at <anonymous>:7:14
//   at new Promise (<anonymous>)
//   at throwError (<anonymous>:5:10)
//   at <anonymous>:18:14

resolvedCount = 0;
throwError()
  .then(() => throwError(true))
  .then(() => throwError())
  .then(() => throwError())
  .then(() => throwError())
  .then(() => throwError())
  .catch(console.log);

// Error: Throned at:1
//   at <anonymous>:7:14
//   at new Promise (<anonymous>)
//   at throwError (<anonymous>:5:10)
//   at <anonymous>:16:14
```

프라미스가 꼭 아니어도 then 체이닝을 사용할 수 있는데, thenable하면 된다고 한다. 그러니까, then 메서드만 정의되어 있다면, (당연한 이야기처럼 들리긴 하지만) then 메서드를 연이어 사용하여 체이닝 구문을 사용할 수 있다. [MDN: Promise:resolve](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#thenable_이행_및_오류_발생) 
