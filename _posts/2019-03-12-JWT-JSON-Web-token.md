---
layout: post
title: 'JWT: JSON Web Token'
author: Rockheung
tags: codestates javascript bootcamp
categories: Study

---
###  생김새

```shell
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2IiwidGl0bGUiOiJKV1Q6IEpzb24gV2ViIFRva2VuIiwiYXV0aG9yIjoiUm9ja2hldW5nIn0.46Oqgx5iLypy2r-cdMk6J8uElk6H97lOhG3Byu8PaZs
```


### 구성

생김새를 유심히 보면, 점을 기준으로 세 부분으로 나뉘는 것이 보인다. 각각 순서대로 HEADER, PAYLOAD, SIGNATURE라 한다. 표로 정리해 보았다.

|Header|Payload|Signature|
|----|----|----|
|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9|eyJpZCI6IjQ2IiwidGl0bGUiOiJKV1Q6IEpzb24gV2ViIFRva2VuIiwiYXV0aG9yIjoiUm9ja2hldW5nIn0|46Oqgx5iLypy2r-cdMk6J8uElk6H97lOhG3Byu8PaZs|
|{ "alg": "HS256", "typ": "JWT" }|{ "id": "46", "title": "JWT: Json Web Token",  "author": "Rockheung" }|HMACSHA256( base64UrlEncode(header) + "." +  base64UrlEncode(payload) )|


#### Header




> Written with [StackEdit](https://stackedit.io/).



