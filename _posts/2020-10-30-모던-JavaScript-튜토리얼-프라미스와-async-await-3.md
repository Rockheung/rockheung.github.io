---
layout: post
title: '모던 JavaScript 튜토리얼: 프라미스와 async, await 3'
date: 2020-11-09 11:17:56.788 +0900
categories: Study JavaScript
tags: javascript modern
---

### 마이크로태스크

```javascript

new Promise((function executor(resolve, reject) {
  ...
})
```

프라미스 안쪽의 executor 함수는 코드가 일단 모두 동기적인 부분들이 순차적으로 실행된 다음에 실행된다. 여러 개의 프라미스라면 그렇다면 이 코드블럭들을 나중에 실행시키는 무언가가 필요하다. ECMA 에서는 이런 내부 큐를 `PromiseJobs`, V8엔진에서는 이를 `마이크로태스크 큐`라 부른다.

이것의 역할은 간단하다


> FIFO: 선입선출<br>
> 할게 없을 때만 처리한다: 처리중이던 코드가 다 실행이 되어야 그 다음에 Promise를 처리한다.


### for await ... of


`for ...of`는 간간히 봤지만, `for await ... of`는 최근에 본 아리송한 문법이어서 테스트코드를 짜봤다.
