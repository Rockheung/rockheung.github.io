---
layout: post
title: '프로토타입: Prototype'
date:   2019-02-14 00:00:00.123 +0900
author: Rockheung
tags: codestates javascript bootcamp
categories: Study

---
자바스크립트는 프로토타입 언어라고 불린다. function 키워드로 정의된 함수는 이 prototype이라는 속성을 가지고 있는데, 실은 이 함수도 Function객체를 상속받는 객체이기 때문이다. call, apply, bind 등의 메서드들은 모두  Function.prototype에서 정의된 메서드들이다. 이와는 별개로 Object의 메서드에는 constructor 메서드가 들어있는데, 함수의 생성자 모드를 사용(`new func()`)하게 되면 이 메서드가 작동되게 되고, 이렇게 만들어진 객체는 `__proto__` 라는 속성을 가지면서 자신을 생성한 function을 가리키게 된다.



> Written with [StackEdit](https://stackedit.io/).



