---
layout: post
title:  "docker로 VPN 서버 만들자"
date:   2018-02-20 09:45:50.013 +0900
categories: [ 서버 ]
tags: [ VPN, L2TP, ip우회, 막힌사이트뚫기, 도커 ]
---

Source: [도커-ce 설치](https://docs.docker.com/install/linux/docker-ce/ubuntu/#upgrade-docker-ce), [ipsec-vpn-server docker](https://github.com/hwdsl2/docker-ipsec-vpn-server)

깨끗한 리눅스(Ubuntu LTS, Debian or CentOS) 서버에서 실행시키면 해당 서버를 VPN server로 만들어주는 [스크립트](https://github.com/hwdsl2/setup-ipsec-vpn)를 이전에 사용해 본 적이 있다. 그렇지만 아무래도 이미 다 세팅이 끝난 도커 이미지를 쓴다면, 여러모로 문제가 날 확률이 줄어들 것이다. <!--more-->그리고 해당 서버를 단순히 VPN용으로만 쓸 목적이 아니라면 더욱 그렇다. 요즘은 그런 일을 잘 겪지 못하였지만, 리눅스를 업데이트 하다가 패키지 충돌을 한두번이라도 겪어봤다면 패키지를  자동으로 설치해주는 스크립트보다는 이미 세팅이 다 끝나 있는 상태인 도커를 쓰는 편이 맘이 편할 것이다.

빠르게 도커를 설치하자. free 버전인 ce(community-edition) 밖에는 일단 선택지가 없다. 우분투 16.04.03 환경이다.

    $ sudo apt-get update
    $ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    $ sudo apt-get update
    $ sudo apt-get install docker-ce

이후 `docker`로 무슨 작업이라도 하려 하면, 권한이 없다는 메세지가 뜬다. 그런 귀찮을 데가. 본인은 왠만하면 sudo를 쓰려 하지만 docker 정도는 매번 관리자 비번을 치고 싶지 않다.

    $ sudo usermod -a -G docker $(username)

이후 터미널을 재시작하면 `docker`를 `sudo`없이 맘껏 날릴 수 있다. 다음 명령어로 도커 이미지를 받자.

    $ docker pull hwdsl2/ipsec-vpn-server

사용자 홈 폴더에 다음 내용이 포함된 파일을  `vpn.env` 생성한다.

    VPN_IPSEC_PSK=$(your_ipsec_pre_shared_key)
    VPN_USER=$(your_vpn_username)
    VPN_PASSWORD=$(your_vpn_password)

터미널에서 바로 작성하고 싶다면, 

    $ echo 'VPN_IPSEC_PSK=$(your_ipsec_pre_shared_key)
    > VPN_USER=$(your_vpn_username)
    > VPN_PASSWORD=$(your_vpn_password)' > ~/vpn.env

주의사항이 있는데, 수정할 부분을 `' '`나 `" "`등으로 묶지 말아야 한다. 이후 다음 명령어로 도커를 실행시킨다.

    $ docker run \
    --name ipsec-vpn-server \
    --env-file ~/vpn.env \
    --restart=always \
    -p 500:500/udp \
    -p 4500:4500/udp \
    -v /lib/modules:/lib/modules:ro \
    -d --privileged \
    hwdsl2/ipsec-vpn-server

이제 VPN 서버가 완성되었다. 테스트를 위해 아이폰에서 설정 > VPN 을 선택하고 

유형 | L2TP
---|---
설명 | $(붙이고 싶은 이름)
서버 | $(서버 주소: IP, 도메인 등)
계정 | $(VPN_USER)
RSA SecurlD | Disable(default)
암호 | $(VPN_PASSWORD)
비밀 | $(VPN_IPSEC_PSK)
모든 트래픽 보내기 | Enable(default)

완료를 누르면 해당 VPN을 활성화시킬 수 있다. 화면 상단에 VPN이 보인다면 잘 연결된 것이다. 사파리 등을 띄워서 자신의 아이피를 확인해 보자.

[인터넷에서 자기 IP 확인하기](https://ifconfig.co/)

도커가 돌아가고 있는 서버의 IP가 뜬다면 성공이다. 본인의 VPS는 현재 Fremont. US에 위치하고 있는데, 이제 이 VPN을 이용하면 마치 미국에서 접속하는 것처럼 인터넷을 사용할 수 있게 된다.

다른 OS에서 사용하고 싶다면, [여기](https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients.md)에서 방법을 찾아볼 수 있다. 아이폰 뿐만 아니라 리눅스, 윈도우, 맥, 리눅스, 크롬북 등을 지원한다. 유독 리눅스에서 설정법이 난해한데, 본인은 그래서 리눅스로는 이용하고 있지 않다. 어떤 이유 때문인지 우분투에서 L2TP VPN 설정이 가능하게 해주는 (찾아본 것 중 가장 편한) [이 방법](https://medium.com/@hkdb/ubuntu-16-04-connecting-to-l2tp-over-ipsec-via-network-manager-204b5d475721)으로는 위에서 설치한  VPN 서버에 접속할 수 없다.
