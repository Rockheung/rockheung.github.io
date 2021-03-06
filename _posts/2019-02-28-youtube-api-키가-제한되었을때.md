---
layout: post
title: 'youtube api 키가 제한되었을때'
date: 2019-02-28 00:00:00.234 +0900
categories: Study
tags: javascript bootcamp youtube
---

#### 준비물

- 크롬
- 크롬 확장 프로그램: [Moesif Orign & CORS Changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?utm_source=chrome-ntp-icon)
- HTML 파일 헤드에 한줄 추가

[Search: list &nbsp;-&nbsp; YouTube Data API (v3) &nbsp;-&nbsp; Google Developers](https://developers.google.com/youtube/v3/docs/search/list?hl=ko&apix_params=%7B%22part%22%3A%22snippet%22%2C%22safeSearch%22%3A%22none%22%2C%22type%22%3A%22video%22%2C%22fields%22%3A%22items%2Fid%2FvideoId%2Citems%2Fsnippet%2Ftitle%2Citems%2Fsnippet%2Fdescription%2Citems%2Fsnippet%2Fthumbnails%2Fdefault%2Furl%22%7D)에 가면 웹에서 API 요청을 테스트하는 부분이 맨 아래에 있습니다. 한 번이라도 EXCUTE 버튼을 눌러 요청을 발생시키고 크롬 콘솔의 네트워크 부분에서 search 키워드로 검색하시면 웹페이지에서 테스트하는 데에 사용되는 키를 얻으실 수 있는데, 이 키를 api 요청을 하는 get 요청의 url에 포함시킬 것입니다.

개발중인 HTML 파일의 `<head>` 태그에 한 줄을 추가하여 요청의 헤더에서 Referrer를 없애줍니다.

```html
<meta name="referrer" content="no-referrer" />
```

크롬 확장 프로그램을 받아 다음과 같이 설정해줍니다.
![](https://res.cloudinary.com/rockheung/image/upload/v1551350351/github.io/github_page_-_stackedit.io/google_api_hack.png)

설치한 확장 프로그램을 활성화시키면 이제 구글 API 테스트를 다시 시작할 수 있습니다.

위 과정은 google API 서버에 AJAX 요청을 보낼 때 헤더에서 Referrer와 Origin을 변조해 줍니다. 마치 구글 API 설명 페이지에서 발생한 요청인 것 처럼 말이죠. html 파일 등에서 Referrer는 숨겨줄 수 있지만 Origin 변경은 브라우저에서 허용해 주지 않습니다. 이를 크롬 확장 앱을 통해 가능하도록 하여 주는 것입니다.

> Written with [StackEdit](https://stackedit.io/).
