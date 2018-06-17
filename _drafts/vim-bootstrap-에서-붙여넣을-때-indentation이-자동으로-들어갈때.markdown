---
    layout: post
    title:  "vim bootstrap 에서 붙여넣을 때 indentation이 자동으로 들어갈때"
    date:   2018-04-22 10:54:52.482 -0600
    categories: [ study ]
    tags: [ vim-bootstrap, auto-indentation, paste, 붙여넣기 ]
---

본인은 Vim을 많이 사용하는 편이다. 자연스레 인터넷에서 코드를 복사해 올 때 `i` 또는 `o`를 눌러 편집 모드에서 `Ctrl` + `Shift` + `V`를 사용하게 된다(클립보드의 버퍼에 저장된 스트링을 터미널로 붙여넣을 때 사용하는 키 조합이다). 그런데 이 과정에서 자동으로 괄호가 닫혀 코드가 꼬이고, 자동으로 들여쓰기가 되어 파이썬에서 indentation 오류가 나는 경우가 자주 생겼다. 

구글링을 하다 보니 vim의 옵션 중에 `set paste` 옵션을 주면 해결되는 것으로 보였다([출처](http://vim.wikia.com/wiki/Toggle_auto-indenting_for_code_paste). *다른 앱에서 문자열을 붙여 넣을 때 변경되지 않도록 할 때* 사용하는 명령이라고 설명이 나와 있다. 다만 작은 고민이 생겼는데, 본인은 Vim 플러그인으로 [Vim Bootstrap](https://vim-bootstrap.com/)을 사용하고 있다. 이는 $HOME 경로의 `.vimrc`를 통해서 다양한 플러그인과 연결되어 있다. 뭔가 이 파일을 건드리기 보다는 외부의 다른 파일에 나만의 세팅을 하고 싶어졌다. `.vimrc` 중간에 다음과 같은 코드가 있었다.

    "" Include user's extra bundle                                                                           
    if filereadable(expand("~/.vimrc.local.bundles"))                                                        
      source ~/.vimrc.local.bundles                                                                          
    endif  

사용자의 외부 번들 파일을 지칭하여 코드가 구분되도록 외부 파일을 가져오는 듯 싶었다. 그러나 그런 파일은 없었다. 같은 이름의 파일을 만들어 같은 경로에 위치시키자, vim을 실행시킬 때 자동으로 `.vimrc.local.bundles`의 설정도 적용되었다.

이제 이 파일에 `set paste`를 적는 일만 남았다. 좀 사용해 보겠다.
