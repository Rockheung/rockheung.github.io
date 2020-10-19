---
layout: post
title: '모던 JavaScript 튜토리얼: 에러 핸들링'
date: 2020-10-19 12:16:48.208 +0900
categories: Study JavaScript
tags: javascript modern
---

- try catch?

에러를 일으키고, 잡아보았다.

```javascript
function main(json) {
  try {
    const jsonParsed = JSON.parse(json)
    console.log('Success: ',JSON.stringify(jsonParsed, null ,2));
    return jsonParsed;
  } catch (err) {
    console.log('Failed: ', err);
  }
}

main('{ "id": 87 }');
main('{ "id\': 87 }');

// Success:  {
//   "id": 87
// }
// Failed:  SyntaxError: Unexpected end of JSON input
//     at JSON.parse (<anonymous>)
//     at main (<anonymous>:3:29)
//     at <anonymous>:12:1
```

finally는 try, catch에서 함수가 종료되는 어떤 경우에도 실행된다

```javascript
function finallyTest(isNotTheEnd) {
  try {
    if (isNotTheEnd === true) {
      throw new Error("I'll come back.");
    }
    if (isNotTheEnd === undefined) {
      throw "Never mentioned";
    }
    return "You're eliminated";
  } catch (err) {
    if (err instanceof Error) {
      return "He will be back.";
    }
    throw "Script missing.";
  } finally {
    console.log("점심 뭐 먹으러 갈래?")
  }
  console.log("아무 말도 못 함.")
}

finallyTest();      // (예기치 못하게) 배우가 대사를 까먹음.
                    // 이후 코드는 실행되지 않게 됩니다.
                    // VM153:14 Uncaught Script missing.
                    // finallyTest @ VM153:14
                    // (anonymous) @ VM153:21
finallyTest(true);  // 시리즈 마지막이 아님. 그나저나 점심 뭐먹을래?
finallyTest(false); // 주인공 제거됨. 그나저나 점심 뭐먹을래?
```