---
layout: post
title:  "eMMC 에서 mmcblkXbootY 의 역할"
date:   2018-04-20 22:09:33.300 +0900
categories: [ study ]
tags: [ eMMC, mmcblk, mmcblkXbootY, 부트파티션, 쓰기해제 ]
---

베이트레일 노트북을 만지작 하다가 자주 맞닥뜨린 것이 바로 이 `mmcblkXbootY`라는 디스크 장치였다. 데스크탑이나 외장SSD가 들어가는 노트북에서는 `sda`나 `sdb`로 표시되던 디스크 장치가, 임베디드 계열의 노트북, 안드로이드 폰, 라즈베리 파이와 같은 eMMC에 설치되는 리눅스에서는 왠지 이름도 이상한 mmcblk로 표시되는 것이었다. 그리고 꼭 여기에는 무슨 역할인지 찾아도 잘 나오지 않는 mmcblk1boot0 과 같은 디스크 장치가 꼭 따라다녔다. 크기도 4MiB 정도 밖에 되지 않는 디스크들이 여럿 표시되는 걸 보고 이게 대체 무슨 *깔끔하지 않은* 구성인지 의문을 가졌다.

오늘 그 아주 작은 의문이 풀렸다. SD/MMC 장치에서 부트 파티션의 기능들 중의 하나였던 것이다. PC나 노트북 같은 `sba` 와 같은 디스크 드라이버로 표시되는 것들은 그냥 디스크 맨 처음에 부트 섹터가 기록된다. 이는 디스크 전체를 초기화 하면 지워진다. 반면에 eMMC 와 같은 메모리들은 보드에 실장되고, 대개 안드로이드 폰 등에 사용된다. 이때 부트 파티션에 쓰기 방지 등의 기능을 넣어 논리적으로 추가된 블록 장치인 것이다.  구글링 중에 발견한 MMC 개발 문서가 명료하게 설명한다([kernel.org](https://www.kernel.org/doc/Documentation/mmc/mmc-dev-parts.txt)).

이는 4.3 버전 이상의 eMMC 프로그래밍 입출력 시스템을 설명하는 [이 문서](http://ftp.dataio.com/FCNotes/Footnote/eMMC%20on%20Data%20IO.pdf)에서도 어느 정도 윤곽이 보인다. **File Format** 섹션에서 Field 목록 둥에 Boot Area Partition이 2개 보이는 것을 확인할 수 있다. 윈도우도 버거워하는 램 1GB의 스펙을 자랑하는 ASUS T100TAF 모델에 Archlinux와 Android-x86을 설치해 보고자 하는데 활용할 수 있을지 찾아보는 중이다.
