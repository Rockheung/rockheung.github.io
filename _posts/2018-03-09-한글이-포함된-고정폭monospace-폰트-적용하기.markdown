---
layout: post
title:  "한글이 포함된 고정폭monospace 폰트 적용하기."
date:   2018-03-09 09:19:42.888 +0900
categories: [ study ]
tags: [ D2-coding, webfont, 웹폰트, 고정폭, monospace ]
---

기존에 `code` 태그에서 사용하던 폰트는 네이버의 나눔고딕코딩 폰트였다. 그러나 본인의 어떤 실수 때문인지는 몰라도 코드의 indentation이 정확하지 않았다. css를 [구글 폰트 사이트](https://fonts.google.com/)에서 권장하는대로 다음과 같이 사용하고 있었다.

    pre code {
    font-family: 'Nanum Gothic Coding', monospace;
    }

전혀 이상할 것이 없다. 표현하려는 글자가 나눔고딕코딩에 포함되어 있다면 그대로 표현될 것이고, 만약 없는 글자라면 monospace 폰트로 표현될 것이며, 그마저도 없다면 브라우저 기본 폰트로 보일 것이다.

문제는 indentation에 필수적인 빈칸이 나눔고딕코딩 폰트에 없는지 monospace로 표현되면서 분명 네칸이 들여써질 부분에 네칸 이상의 간격으로 표시된다는 점이었다. 무척 거슬리는 부분이 아닐 수 없었다.

선택지는 분명했다. 아얘 코드에 한글을 사용하지 말던가, 아니면 올바르게 표현되는 한글 포함 고정폭 폰트를 찾던가.

D2-coding 폰트가 유력한 대안이었으나 이는 구글 폰트 사이트에서 제공하지 않았다. ttf파일을 바로 서버에 올려 사용하자니(HTML5 부터 `@font-face`를 통해 이를 지원한다) 폰트 파일의 용량이 무척 컸다. 사이트의 로딩 속도가 느려질 것이 분명했다.

다행히 깃허브에서 방법을 찾았다. [Joungkyun: D2 coding](https://github.com/Joungkyun/font-d2coding)를 블로그 서버에 받아 서버 `static/font` 폴더로 심볼릭 링크를 만들었다.  그리고 다음과 같은 코드를 템플릿에 추가했다.

{% raw %}
    <link rel="stylesheet" href="{% static "font/d2coding.css" %}" type="text/css">
{% endraw %}

아주 잘 작동한다.
