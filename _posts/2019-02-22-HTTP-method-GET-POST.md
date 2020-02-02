---
layout: post
title: 'HTTP method: GET, POST'
date: 2019-02-22 00:00:00.123 +0900
author: Rockheung
tags: codestates javascript bootcamp
categories: Study
---HTTP 메서드를 정리해 보고 있다. 개중에 웹브라우저에서 흔히 쓰이는 메서드 2가지는 단연 GET, POST이다.

웹브라우저에서 주소란에 URL을 쳐서 접속하는 모든 접속은 서버에게 단순히 자원을 get하는 것이다. html파일을 받기도 하고, json을 받기도 하고 하지만 결국 url 주소와 거기에 표시되는 쿼리문에 국한된다.

반면에 POST는 리퀘스트에 body를 포함시킬 수 있다. url을 통한 쿼리스트링 방식은 서버에 보내는 데이터가 쉽게 노출되는 반면에, POST는 body에 담아 보내기 때문에 좀 더 안전하다. 대개 서버에 새로운 데이터를 입력하여 만들거나 민감한 데이터를 서버에 보내고자 할때 사용한다.

> Written with [StackEdit](https://stackedit.io/).
