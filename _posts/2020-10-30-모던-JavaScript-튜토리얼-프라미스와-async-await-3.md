---
layout: post
title: "모던 JavaScript 튜토리얼: 프라미스와 async, await 3"
date: 2020-11-09 11:17:56.788 +0900
categories: Study JavaScript
tags: javascript modern
---

### 마이크로태스크

```javascript
new Promise(function executor(resolve, reject) {
  ...
})
```

프라미스 안쪽의 executor 함수는 코드가 일단 모두 동기적인 부분들이 순차적으로 실행된 다음에 실행된다. 여러 개의 프라미스라면 그렇다면 이 코드블럭들을 나중에 실행시키는 무언가가 필요하다. ECMA 에서는 이런 내부 큐를 `PromiseJobs`, V8엔진에서는 이를 `마이크로태스크 큐`라 부른다.

이것의 역할은 간단하다

> FIFO: 선입선출<br>
> 할게 없을 때만 처리한다: 처리중이던 코드가 다 실행이 되어야 그 다음에 Promise를 처리한다.

### for await ... of

`for ...of`는 간간히 봤지만, `for await ... of`는 익숙하지 않은 문법이어서 테스트코드를 짜봤다.

```javascript
async function* timeIndicator() {
  let delayedAllSecs = 0;
  while (true) {
    if (delayedAllSecs > 60) {
      console.log("Time's up!");
      return;
    }
    await new Promise((resolve) => {
      const delayedSecs = Math.floor(Math.random() * 10);
      setTimeout(() => {
        delayedAllSecs += delayedSecs;
        resolve(delayedSecs);
      }, delayedSecs * 1000);
    });
    yield delayedAllSecs;
  }
}

(async function () {
  const startTime = Date.now();
  for await (const delayedAllSecs of timeIndicator()) {
    const passedTime = (Date.now() - startTime) / 1000;
    console.log(delayedAllSecs + "s passed. Truth is " + passedTime + "s.");
  }
})();
```

위 코드의 의도는 , 랜덤하게 0 ~ 10초를 지연시키면서 지연시간을 콘솔에 표시하고, 최종적으로 지연시간 총 합이 60초가 초과되면 while문을 종료하는 코드이다. 작성하면서 문제점을 깨달았는데, 60초가 초과되는 시점 정확도가 가히 0에 수렴한다는 것이다. 이를 해결하기 위해 시간을 초과했는지 확인하는 주기를 짧게 만들고 일부 코드를 수정했다.


```javascript
async function* timeIndicator() {
  let delayedSecs = Math.floor(Math.random() * 10);
  let delayedAllSecs = delayedSecs;
  const initializedTime = Date.now();
  while (true) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    const passedSecs = Date.now() - initializedTime;
    if (passedSecs > 60 * 1000) {
      console.log(Math.floor(passedSecs / 1000) + "s passed, Time's up!");
      return;
    }
    if (initializedTime + delayedAllSecs * 1000 <= Date.now()) {
      delayedSecs = Math.floor(Math.random() * 9) + 1;
      yield delayedAllSecs;
      delayedAllSecs += delayedSecs;
    }
  }
}

(async function () {
  const startTime = Date.now();
  for await (const passedSecs of timeIndicator()) {
    const passedTime = (Date.now() - startTime) / 1000;
    console.log(passedSecs + "s passed. Truth is " + passedTime + "s.");
  }
})();
```

위 코드는 확인 빈도를 0.1초로 매우 줄였다. while문은 좀 더 반복해서 돌지만 그만큼 더 정확하게 60.1초 이내에 도달하고 정지함을 알 수 있다. 랜덤하게 1 ~ 10 사이의 지연이 되어야 해서 `Math.floor(Math.random() * 9) + 1`로 1초의 offset과 0 ~ 9의 정수를 구했다. 
