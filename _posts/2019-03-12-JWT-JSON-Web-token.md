---
layout: post
title: 'JWT: JSON Web Token'
date: 2019-03-12 00:00:00.123 +0900
author: Rockheung
tags: codestates javascript bootcamp
categories: Study
---### 생김새

<pre>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2IiwidGl0bGUiOiJKV1<br>Q6IEpzb24gV2ViIFRva2VuIiwiYXV0aG9yIjoiUm9ja2hldW5nIn0.46Oqgx5iLypy2<br>r-cdMk6J8uElk6H97lOhG3Byu8PaZs</pre>

### 구성

생김새를 유심히 보면, 점을 기준으로 세 부분으로 나뉘는 것이 보인다. 각각 순서대로 HEADER, PAYLOAD, SIGNATURE라 한다. 표로 정리해 보았다.

| Header                                                            | Payload                                                                                                                           | Signature                                                                                                                                          |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| eyJhbGciOiJIUzI1NiI<br>sInR5cCI6IkpXVCJ9                          | eyJpZCI6IjQ2IiwidGl0b<br>GUiOiJKV1Q6IEpzb24gV2V<br>iIFRva2VuIiwiYXV0aG9<br>yIjoiUm9ja2hldW5nIn0                                   | 46Oqgx5iLypy2r-cdMk6J<br>8uElk6H97lOhG3Byu8PaZs                                                                                                    |
| {<br>&nbsp;&nbsp;"alg": "HS256",<br>&nbsp;&nbsp;"typ": "JWT"<br>} | <pre>{<br>&nbsp;&nbsp;"id": "46",<br>&nbsp;&nbsp;"title": "JWT: Json Web Token", <br>&nbsp;&nbsp;"author": "Rockheung"<br>}</pre> | HMACSHA256(<br> &nbsp;&nbsp;base64UrlEncode(header) + "."<br> &nbsp;&nbsp; + base64UrlEncode(payload),<br>&nbsp;&nbsp;**your-256-bit-secret**<br>) |

#### Header

> Written with [StackEdit](https://stackedit.io/).
