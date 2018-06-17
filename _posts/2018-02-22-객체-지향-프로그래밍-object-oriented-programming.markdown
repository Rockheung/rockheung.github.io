---
layout: post
title:  "객체 지향 프로그래밍 | Object Oriented Programming"
date:   2018-02-22 08:03:26.553 +0900
categories: [ study ]
tags: [ Python, 파이썬 ]
---

Source: [생활코딩: 객체지향프로그래밍](https://opentutorials.org/course/1750/9624)

동영상을 보면서 정리해 봤다.<!--more-->

'egoing' 씨는 익숙해지는 것에 동영상의 목표를 설정했다. 그냥 자기가 궁금해서 프로그래밍을 시작했다고 한다.... 이 개념을 이해하는데 일년 정도 고민했다고 한다.

본인은 파이썬의 클래스를 다루면서 개념적인 부분을 다지기 위한 목적으로 영상을 봤다. 

모듈: 개발한 함수 등을 담아 정리하는 목적으로, 복잡한 코드를 단순하게 하기 위함.
여기서 나아간 것이 '객체 - Object' 이다.

> 클래스-class 와 인스턴스-instance

> *종류*와 *구체적인 예*

인스턴스는 구체적인 사례, 예 정도로 보면 되는데, 종류 - 구체적인 예 정도로 이해하면 되는 것 같다.

클래스도 모듈처럼 일종의 수납공간, 그러나 클래스는 함수 뿐만 아니라 연관되어있는 변수들을 담는 그릇.

클래스를 바로 쓰는 경우는 많지 않고, 이 클래스를 복제해서 만든 여러 인스턴스를 쓴다. 이 인스턴스들은 클래스와 똑같은 함수와 변수를 만드는 것이다.

인스턴스 각각의 고유한 변수도 있다.

파이썬에서, 무심코 사용했던 다음과 같은 코드는 사실 문자열 클래스를 사용하는 것이다.

    >>> name1 = 'rockheung'
    >>> type(name1)
    <class 'str'>

숫자를 문자열로 처리할 때 종종 사용하곤 하던 str()로 다시 같은 인스턴스를 만들어 보자.

    >>> name2 = str('rh')
    >>> type(name2)
    <class 'str'>

그렇다. name1과 name2는 같은 문자열 클래스로 만들어진 인스턴스인 것이다. `dir(name)`를 날려 보면 같은 메서드를 가지고 있는 것을 알 수 있다.

그러니까 이런 짓도 가능하다. str 클래스를 상속받는 나만의 클래스를 만들어 보자.

    >>> class Str_ln(str):
    >>>     ln = '\n'
    >>>     def __init__(self, var_str):
    >>>         self.var_str = var_str + Str_ln.ln
    >>>     def get(self):
    >>>         print(self.var_str)
    >>> 
    >>> dir(str_ln)
    [ $(str 클래스의 모든 메서드), ln, get ]

str 클래스를 상속받아 만든 Str_ln 클래스는 클래스 변수 ln 과 메서드 get()을 가지고 인스턴스 변수 str을 생성하는 클래스이다. 이 클래스는 다음과 같이 사용될 것이다.

    >>> word = str_ln('Hello World!')
    >>> word.get()
    Hello World!
    
    >>>

str_ln 생성자가 인스턴스 변수(var_str)을 입력받을 때 개행문자('\n')가 추가되어 get() 메서드로 인해 화면에 출력됨을 확인할 수 있다. 이는 기존의 str 클래스에는 없는 메서드이다. 물론 기존의 str클래스의 모든 메서드도 사용할 수 있다. 

---------------

###객체 제작

용어 정의는 의사소통에 아주 중요하다. 객체 지향 프로그래밍에서 함수는 `메소드`, 변수는 `속성`. `필드`, 또는 `상태` 로 지칭된다.

메서드에는 staticmethod, classmethod, instancemethod가 있다(더 있나?).

다음과 같은 클래스가 정의되었다고 하자.

    def Cls:
        var = '0'
        def __init__(self, x):
            self.var = x
        @classmethod
        def cls_mth(cls, x):
            cls.var = x
        @staticmethod
        def st_mth():
            pass

위 클래스에서 cls.var는 해당 클래스의 변수 var를 가리키고, self.var는 해당 클래스의 인스턴스 변수 var를 가리킨다. 그리고 정적 메서드인 st_mtd는 cls나 self를 사용할 수 없다.

self, cls는 예약어가 아니다. 메서드의 종류를 명시하면 해당 메서드의 맨 첫 인수가 자동으로 인스턴스 혹은 클래스를 지칭하게 된다. `def __init__(whateverUwant):` 같이 적어줘도 된다는 뜻이다. 물론 이건 너무 길다.
