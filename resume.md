---
layout: default
title: Resume
---

![Profile](/assets/img/profile.jpg){:class="profile"}

# 안녕하세요, 개발자 박흥준입니다.

## TL;DR

현업 Frontend 개발자 2년차. Javascript에 익숙하며 ReactNative, Next.js, Nest.js를 실무에 활용 중입니다. 기획자 및 디자이너와 많은 커뮤니케이션을 하며 친목을 도모합니다. 졸다가 봐도 이해할 수 있는 코드를 짜려 노력합니다. 밥먹으며 가끔 개발 문서를 봅니다.

## Experience

### 2019.06 ~ 현재: [차봇 모빌리티](https://www.chabot.kr/){:target="_blank"} 재직 중

- 차봇프라임 개발 및 유지보수 [PlayStore](https://play.google.com/store/apps/details?id=com.chabotprime&hl=ko&gl=US){:target="_blank"}, [AppStore](https://apps.apple.com/kr/app/%EC%B0%A8%EB%B4%87%ED%94%84%EB%9D%BC%EC%9E%84/id1492427449){:target="_blank"} - React Native, Apollo Client(v2.6), GraphQL(Prisma v1), Next.js, Nest.js

### 2017.03 ~ 2017.07: Finfra

- 이미지 Annotation 웹 어드민 개발 - 개발스택: [Elm](https://elm-lang.org/){:target="_blank"}

## Education

### 2019.02 ~ 2019.05

- 코드스테이츠(Code States), Advanced Software Engineering Immersive Program - 11th

### 2010.03 ~ 2017.08

- 서울시립대학교(University of Seoul), 전자전기컴퓨터공학부 학사

## Project

### 2020.06 ~ 현재: 차봇 프라임(v2) 개발 및 유지보수

- 다룬 주요 기술스택: React Native(0.61), Apollo Client(v2.6), React Navigation(v5), CodePush, GraphQL(Prisma v1), Nest.js, Next.js, Firebase, [node-http-proxy](https://www.npmjs.com/package/http-proxy){:target="_blank"}
- React Native의 Animated를 활용하여 다이나믹한 UI 개발
- Refresh, Access Token을 서버에서 발급하여 유저 인증, GraphQL 인증 토큰으로 활용
- 인앱에서 Js Injection을 통해 웹사이트의 데이터 스크래핑
- 빠른 대응이 필요한 서비스 기획에 대응하여 WebView 및 Next.js로 앱 일부 화면 개발.

### 2019.08 ~ 2020.02: 차봇 프라임(v1) 개발

- 다룬 주요 기술스택: React Native(0.60), Apollo Client(v2.6), React Navigation(v4), Nest.js, [ZongJi](https://www.npmjs.com/package/zongji){:target="_blank"}
- Refresh, Access Token을 서버에서 발급하여 유저 인증
- 운영중인 Legacy Database에서 MySQL Binlog를 활용하여 신규 서비스의 Database와 실시간 데이터베이스 연동
- 회원가입 시에 기존 유저인지 판단하여 신규 서비스의 Database에 선택적으로 마이그레이션
- Legacy Database의 php 내장함수로 암호화되어 있는 사용자 정보를 활용하기 위해 Node.js로 암복호화 함수를 구현

<style>
h2, h3, h4, h5 {
  margin: 3rem 0 2rem;
}

h1 {
  margin: -1rem 0 4rem;
}

h2 {
  margin-top: 7.2rem;
}

.profile {
    border-radius: 50%;
    width: 18rem;
    margin-bottom: 8rem;
  }

@media (min-width: 720px) {
  .profile {
    position: absolute;
    width: 12rem;
    left: 50vw;
    transform: translateX(calc(-50% + 340px - 6rem - 2rem));
    border-radius: 50%;
  }
}
</style>

<script>
  document.querySelector('header').hidden = true;
</script>
