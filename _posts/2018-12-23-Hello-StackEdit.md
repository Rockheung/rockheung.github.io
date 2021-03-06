---
layout: post
title: 'Hello, StackEdit!'
date: 2018-12-23 00:00:00.123 +0900
categories: Daily
tags: jekyll lektor stack-edit
---

본인의 컴퓨터 중 휴대용으로 들고다니는 노트북은 Ubuntu 18.04 LTS이다. 2017년 중순에 개발 및 업무용으로 샀다가 주욱 쓰고 있다(물론 운영체제는 LTS 버전 나오는거 기다렸다가 한번 밀고 다시 설치한 것이다).

으레 리눅스가 그렇듯, 간혹 예상치 못하게 동작할 때가 있다. 특히 한글을 다룰 때 그렇다. 메인 텍스트 에디터로 vim을 사용하는데, 이게 단축키를 키의 고유값으로 받는 게 아니라 입력된 문자 기반으로 받는지 한글 모드에서는 단축키가 안 먹는다. 이에 따른 문제 중에 가장 큰 점은 신나게 글을 쓰다가 중간에 저장을 한다거나, 줄을 바꾼다거나, 쓴 글을 수정한다거나 할때 vim은 **명령어 모드** 로 전환하여 커맨드를 날려줘야 하는데, 이를테면 여타 윈도우 프로그램에서는 `Ctrl + S` 같은 키 조합의 역할이 vim에서는 `:w` 이다. 그런데 한글로 타이핑을 하다가 `:w` 를 누르려 치면, `:ㅈ` 이 입력되면서 _그딴 명령어는 없어요_ 메세지를 뱉는다. 명령어를 칠 때마다 그러니까 줄창 한영키를 시작과 끝에 눌러줘야 하는 것이다. 번거롭기 짝이 없다. 물론 이게 코딩을 할 때는 문제될게 없다. 주석 정도의 짧은 문장은 영어로 그냥 치면 되고, 이게 _영어의 사용을 강제_ 하는 나름의 효과도 있으니까. ~~그럼 그냥 영어로 블로그질 하세요~~

그래서 올해 초에 Django의 Zinnia기반 블로그를 만들어 쓰다가 월 5달러씩 내는 클라우드 서버 비용도 아까워질 지경이 되어(취준생이라) Jekyll 기반 블로그로 옮겨왔다. DB에서 md파일들로 변환 추출하는 코드를 덕분에 열심히 작성하는 [과정](https://blog.rockheung.xyz/%EC%9D%BC%EC%83%81/2018/06/17/Django-blog-zinnia%EC%97%90%EC%84%9C-github-pages%EB%A1%9C.html){:target="_blank"} 이 따랐다. 템플릿 언어도 Jinja에서 생소한 Liquid로 바꾸고, 여차 해서 이사를 마쳤다.

...그런데 앞에서 말했던 끊임없는 한영키 입력이 필요한 사소한 귀찮음이 발생한 거였다. 이건 점차 쌓여 짜증으로 발전했고, 결국 한동안 게시물 작성이 뜸하게 되었다.

그러다 Python 기반의 정적 사이트 생성기 [Lektor](https://www.getlektor.com/){:target="_blank"} 를 발견했다. Flask를 만든 개발자가 작성한 툴이라는 점에 일단 신뢰가 생겼고, 익숙한 파이썬 기반에, 사용자도 적지 않았고, 웹 기반 문서 편집이 가능했으며, Jekyll과는 다르게 URL에 폴더 트리 구조가 그대로 반영되어 하위 포스트를 작성하는 것이 쉬웠다. Jekyll은 모든 글들이 `_posts`에 바로 담겨야 되는 데에 반해, Lektor는 얼마든지 하위 폴더로 Depth를 늘리는 것이 가능했다.

그러나 파일명을 URL로 변환하는 과정에서 ascii로 인코딩하는 방식이라 기존대로는 한글 URL을 만들 수가 없었다. 그리고 장점으로 내세웠던 Jinja 템플릿 지원 부분에서 truncate 메서드가 작동하지 않았다. 이렇게 일부 메서드를 지원하지 않아 잦은 오류를 겪게 되니, 본인의 신뢰가 점차 깨졌다. URL 정도야 fork해서 _나만의 Lektor_ 로 수정하여 쓸 수 있었지만, 플러그인도 한동안 업데이트가 되지 않아 webpack 3 기반의 설정 파일도 직접 webpack 4 버전으로 업그레이드하고, 때문에 바뀐 scss 처리용 노드 패키지도 바꾸고 등등의 끊임없는 오버헤드가 발생했다.

그러던 와중에 웹앱 형태의 마크다운 에디터인 [StackEdit](https://stackedit.io/){:target="_blank"} 가 깃허브 페이지와 연동된다는 점을 알게 되었다. 구글 드라이브에 전반적인 작업 내역이 동기화되어 저장되고, 깃허브 페이지로 사용되는 깃허브의 Repository 주소와 그 하위, 예를 들어 `_draft/Hello-StackEdit.md` 와 같이 새로운 파일을 만들어 업데이트해 준다.

웹페이지에서 바로 깃허브에 푸쉬를 때리는 것인지, 한번 서버를 거쳐서 해당 서버에서 푸쉬를 때리는 것인지 궁금했다. 크롬 개발자 도구의 네트워크 탭을 열어 보니, `app.js`가 바로 `https://api.github.com/repos/Rockheung/rockheung.github.io/contents/_draft%2FHello-StackEdit.md?ref=master&t=1545563315855` 로 리퀘스트를 때리고 있다. 한때 Jekyll을 처음 접했을 무렵, CLI에서 푸쉬를 때리다가 웹페이지에서 푸쉬를 때릴 수 있으면 멋질 거 같다는 생각을 했었다. github에서 graphql 형태의 API를 지원하는 걸 보고 가능할거 같았는데, 정말 그런 툴이 나타날 줄이야.

이제 이걸로 개발자인척 해야겠다.
