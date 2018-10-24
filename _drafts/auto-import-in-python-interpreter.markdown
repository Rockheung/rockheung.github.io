---
    layout: post
    title:  "Auto import in python interpreter"
    date:   2018-02-23 12:36:06.996 -0600
    categories: [ study ]
    tags: [ python, 파이썬, auto-import, PYTHONSTARTUP ]
---

`dir()`는 파이썬을 쓰다가 현재 어떤 모듈이 임포트되어 있는지 궁금할 때 자주 사용하는 함수이다. 

    >>> import os
    >>> dir()
    ['__builtins__', '__cached__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', os]

아무것도 임포트하지 않고 사용할 때 대개 위와 비슷할 것이다. 리스트형을 반환하기 때문에 초심자들은 나열되는 오브젝트가 궁금할 때 하나씩 다 쳐보게 된다. 

    >>> dir(os)

os 모듈은 빌트인이다. 파일의 경로부터 시작해서 다양한 객체를 포함하고 있다. 그러나 위의 함수를 실행하면, 스크린에 아주 긴 리스트가 쏟아지게 된다. 뭐가 뭔지 구분하기도 힘들다.

...경험이 아주 조금 있다면 for문을 이용하여 정렬시키거나 골라보려 할 것이다.

    >>> for i in dir(os):
    >>>     if 'env' in i:
    >>>         print(i)
    _putenv
    _unsetenv
    environ
    environb
    getenv
    getenvb
    putenv
    supports_bytes_environ
    unsetenv

위 코드는 os 모듈이 포함하고 있는 객체 중 'env'를 포함한 것들만 나타내는 코드이다. 간단하다. 그렇지만 새로운 모듈을 임포트해서 찾아다니는 과정 내내 저 `for`문을 반복할 것인가? 저 정도의 코드라면 초심자라도 조금만 머리를 궁리해 보면 방법이 있을 것도 같다.

찾아보니 쉘에 `python`을 날릴 때 자동으로 실행되는 파이썬 스크립트 파일을 지정할 수 있었다. 환경 변수에 `PYTHONSTARTUP`를 추가하여 실행할 코드가 담긴 파일을 지정해주면 된다.

    $ export PYTHONSTARTUP=~/python_auto_import.py
    $ echo $PYTHONSTARTUP
    /home/$(yourhome)/python_auto_import.py
    $ 
    $ cat ~/python_auto_import.py
    from __future__ import print_function
    import os, sys, time

이제 파이썬 인터프리터를 실행할 때 마다 파이썬 3 버전대의 print 함수와 os, sys, time 모듈이 자동으로 임포트될 것이다. `dir()`로 확인해보자.

그렇다면 이제 이 귀찮은 `dir()`을 대체할 함수를 고안해 보자. 다음 정도면 간단할 것이다.

    $ cat ~/dir_extend.py
    from __future__ import print_function

    def dir_ex(object):
        for i in dir(object)
            print(i)

이제 `dir_ex($(object))`를 맘껏 날려서 잘 정리된 모듈 목록을 볼 수 있다. 아, 혹시 눈썰미가 있다면, `dir_ex()`는 object가 명시되지 않았다며 오류를 뿜을 것이다. 미봉책을 고안해 봤다.

    $ cat ~/dir_extend_v2.py
    from __future__ import print_function

    def dir_ex(object=None):
        if object is None:
            import __main__
            object = __main__
        for i in dir(object)
            print(i)

__main__모듈은 처음에 임포트되지 않았지만 `import __main__`이후 `dir(__main__) == dir()`이길래 위와 같은 코드를 작성해 보았다. `dir`함수가 빌트인이어서 그런지 default 인수값을 알 수가 없었다. 

이렇게 한동안 사용하다 보면 조금 더 나아가고 싶다. 각 객체들의 종류도 동시에 알고 싶은 것이다. 그래서 조금 고민하다가 다음과 같은 코드를 작성했다.

    from __future__ import print_function                                                                    
                                                                                                         
    def ll( messy=eval('globals()'), kwd= '', exc= ['__doc__', 'll']):
    
      maxLen = max( list( map( len, messy) ) )
      keys = sorted(list(messy))
      for i in keys:
        if kwd in i:
          if i not in exc: 
            print('{:^{w}} {}'.format( i, messy[i], w = maxLen ) )
    
    del print_function

함수 명이 `ll`인 것은 우분투에서 본인이 가장 자주 쓰는 명령어가 이것이기 때문이다. 이것은 사실 `ls -alF`와 같은 명령어인데, `~/.bashrc`에서 `alias ll='ls -alF'`로 미리 설정되어 있다. 우분투를 처음 깔면 기본으로 이와 같이 되어 있다.

이제 위 함수를 사용하면 다음과 같이 표시된다.

    >>> ll()
    __builtins__ <module 'builtins' (built-in)>
     __cached__  None
     __loader__  <_frozen_importlib_external.SourceFileLoader object at 0x7f74a9532780>
      __name__   __main__
    __package__  None
      __spec__   None

이제 어떤 클래스의 namespace가 궁금하다면 `ll(str.__dict__)`와 같이 날리면 각 객체의 종류도 같이 알 수 있다.
