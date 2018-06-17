---
layout: post
title:  "비글본 블랙 BeagleBone Black 에서 KT IPTV를?"
date:   2018-03-27 14:44:38.727 +0900
categories: [ 일상 ]
tags: [ IPTV, tvheadend, BeagleBone-Black, ARM-server ]
---

### 본인의 집에서는 현재 KT IPTV를 신청해서 보고 있다. 이전 글에서 얘기했었지만, tvheadend를 이용해서 IPTV를 컴퓨터로 시청하고자 한다.

KT IPTV를 시청하려면, 시청할 때 사용하는 컴퓨터나 기기가 KT에서 공인 아이피를 받아와야 한다. 다른 방법도 있는데, iptime 공유기 대부분이 지원하는 KT IPTV옵션을 사용하면 된다. 본인은 현재 집에서 미크로틱 라우터를 사용하고 있어서 iptime의 경우처럼 간편하게는 안 되고, 라우터에 해당 LAN포트가 직접 WAN에서 IP를 받아오도록 라우터에서 약간의 수작업이 필요하다. 그러면 음 해당 기기를 방안에 놓으려면 본인의 XPEnology의 기가랜 연결을 포기해야 하고 읍읍... 여튼 그러느니 그냥 포트도 4개나 되는 KT 모뎀에 직접 연결하는게 낫겠다고 판단했다.

그렇다면 다음으로 결정할 부분은 어떤 하드웨어를 사용하냐이다. 본인의 집에는 현재 사용하지 않는 X86 cpu가 몇 개 있다. 그렇지만 tvheadend는 자신들의 위키에 다음과 같이 설명해놨다.

###How Lightweight?
How about light enough to run on a travel router? Take a look at this [example](https://tvheadend.org/boards/4/topics/16579) from one of our users…

연결되는 링크로 가 보면, 얼마나 *가벼운* 소프트웨어인지를 여실히 보여준다. 여행용 라우터에 dd-wrt 펌웨어를 올리고 TV 수신  USB 동글을 연결해 tvheadend로 공중파를 시청하고 있다. 라우터의 사양은 8MB flash, 64MB RAM, 600 MHz MIPS CPU 였다.

이런 소프트웨어를 x86에서 사용한다는건, 너무나 오버스펙이라고 판단했다. 라즈베리파이로도 FHD 영상을 서너개씩 동시 녹화한다는 글을 보고  ARM 계열을 고려했다. 

작년에 KNCminer를 중지하고 일년여 동안 먼지만 쌓이던 컨트롤보드가 비글본 블랙이었던게 생각났다. 정확히는 비글본 블랙에 마이너용 확장을 끼운 형태였는데, 스펙으로는 충분할 것 같았다. 

- Processor: AM335x 1GHz ARM® Cortex-A8
- 512MB DDR3 RAM
- 2GB 8-bit eMMC on-board flash storage

가지고 있던 제품은 확인해보니 리버전되기 전 모델이어서에는 2GB eMMC가 온보드되어 있었다. 그것만으로 충분했다. beagleboard 사이트에서 제공하는 OS는 데비안이었는데, 아무래도 다양한 IOT 개발 킷도 포함하는지 용량이 생각보다 컸다. 본인은 데비안 계열 중에 우분투가 아무래도 더 편해서 그냥 깨끗한 우분투만 설치할까 생각하던 차에, tvheadend 위키에서 armhf 아키텍처를 지원하는 repository는 데비안 계열 중에 우분투가 유일함을 발견했다. 고민할 여지가 없었다. [elinux.org](https://elinux.org/BeagleBoardUbuntu)를 참고해서 비글본의  eMMC에 설치했다.

tvheadend를 설치하여 이전에 omvs로 긁었던 KT IPTV의 RTP 주소를 접어넣었다. 480p인 채널들과 1080i 채널들이 섞여 있었다. 

... 그리고 문제가 있었다.

480p 채널들은 문제가 없었다. 약간의 딜레이 이후 간헐적인 열화가 일어났지만 나름 만족스러웠다. 문제는 1080i 영상을 송출하는 채널이었다. 끊김과 열화가 굉장히 심했다. 이상하게도 top 커맨드로 모니터링하는 비글본의 cpu 사용량은 그렇게 높지 않았다. 어쩌면 비글본의 하드웨어에 최적화된 tvheadend를 빌드하면 나아질 수도 있지 않을까 생각해본다. 시도해보지는 않았다.

여튼,  이제 다음 대안, 아톰계열의 미니PC에 tvheadend를 설치할 차례다.
