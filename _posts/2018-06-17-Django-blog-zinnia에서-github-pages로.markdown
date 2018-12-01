---
layout: post
title:  "Django blog zinnia에서 github pages로"
date:   2018-06-17 20:57:01 +0900
categories: 일상
---

{% raw %}
그동안 Alibabacloud에서 월 $5의 가장 저렴한 플랜으로 운영하던 Django기반 블로그를 github pages로 이전하였다. 이것저것 만져보니 아무래도 조금 더 손댈 데가 많지만 저렴하게 블로그를 호스팅 가능하다는 부분이 매력적이어서 이전부터 벼르던 일이었다. 포스트는 생각보다 그렇게 많지 않아 사실 Ctrl+C Ctrl+V로 열심히 복붙해도 되긴 했지만, jekyll에서 사용하는 liquid 템플릿 언어와 django의 jinja 구문이 계속 에러를 일으켜 발목을 잡았다. Jinja의 `{% %}`와 `{{ }}`를 liquid 언어에서도 동일하게 사용하고 있던 까닭이었다. Django의 구문 설명을 위해 예시로 드는 코드 부분이 문제였다.
{% endraw %}

기존 Django의 DB에서 jekyll 형식의 파일로 구분되는 포스트로 추출하는 것은 어렵지 않았다. [From Django Zinnia Blog to Jekyll Static Sites](http://griff.steni.us/blog/2017/01/13/from_zinnia_to_jekyll.html)에서 마침 마땅한 코드를 찾아 조금 손봤다. 여기서는 zinnia의 포스트가 html로 짜여진 상황을 가정하고 있는데, 나는 markdown으로 포스트를 작성했어서 `html2text`를 사용할 필요가 없었다. 약간의 손봄 끝에 다음 코드로 쉽게 변환할 수 있었다. 손보는 김에 기존의 category를 긁어와서 포스트에 적용하는 부분도 추가했다.

{% highlight python %}
#!/usr/bin/env python3
# convert_zinnia.py - script for parsing zinnia db blob into jekyll posts

import json
import os, re
from functools import reduce

# import html2text

# open database of zinna posts created from django's dumpdb command
blog_dump_file = 'blog_data.json'
blog_file = open(blog_dump_file)
blog_json = json.loads(blog_file.read())

category_dict = { 0: '_' }

for item in blog_json:

    if item['model'] == u'zinnia.category':
        category_pk = item['pk']
        category_fields = item['fields']
        category_slug =category_fields['slug']
        category_title =category_fields['title']
        category_dict[category_pk] = category_slug

        category_filename = '%s' % (category_slug)
        os.makedirs('category', exist_ok=True)
        with open('category/%s.html' % category_slug, 'w') as new_category:
            category_header ='''---
layout: category
title: %s
category: %s
---''' % ( category_title, category_slug )
            new_category.write( category_header )

print(category_dict)
# go over each item in the dump and create files for zinnia's entries
for item in blog_json:

    if item['model'] == u'zinnia.entry':
        fields = item['fields']

        title = fields['title']
        creation_date = fields['creation_date']
        status = fields['status']
        slug = fields['slug']
        content = fields['content']

        if len(fields['categories']) > 1:
            categories = '[ %s ]' % reduce( lambda i, j: i +', ' +j,
                         list( map( lambda x: category_dict[x], fields['categories'] ) )
                                     )

        elif len(fields['categories']) == 1:
            categories = '[ %s ]' % category_dict[fields['categories'][0]]

        else :
            categories ='[ ]'

        if len(fields['tags'].split(',') ) > 1:
            tags = '[ %s ]' % reduce( lambda i, j: i +', ' +j, fields['tags'].split(',') )

        elif len(fields['tags'].split(',') ) == 1:
            tags = '[ %s ]' % fields['tags']

        else :
            tags ='[ ]'



        date, time = creation_date.split('Z')[0].split('T')
        year, month, day = date.split('-')

        # convert posts from HTML format into markdown for Jekyll
        # md_content = html2text.html2text(content)

        if status == 0:
            status_name = 'draft'
        if status == 1:
            status_name = 'unpublished'
        if status == 2:
            status_name = 'published'
        if status == 3:
            status_name = 'other3'

        if status in [0,1]:
            filename = '%s' % (slug)
            os.makedirs('_drafts', exist_ok=True)
            new_file = open('_drafts/%s.markdown' % filename, 'w')

        if status in [2]:
            filename = '%s-%s-%s-%s' % (year,month,day,slug)
            os.makedirs('_posts', exist_ok=True)
            new_file = open('_posts/%s.markdown' % filename, 'w')


        # create the file for the post and save it to either _posts or _drafts
        header = '''---
layout: post
title:  "%s"
date:   %s %s +0900
categories: %s
tags: %s
---

%s
''' % (title, date, time, categories, tags, content,)
        new_file.write(header)
        new_file.close()
{% endhighlight %}

각각의 포스트에 카테고리를 추가했으니 이제 그것을 사이트에서 분류해서 보이도록 하는 작업이 필요했다. [Jekyll Doc](https://jekyllrb-ko.github.io/docs/posts/#%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%9D%98-%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC%EC%99%80-%ED%83%9C%EA%B7%B8-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0)에서 해당 내용을 찾을 수 있었다. 추가된 코드는 Jekyll 루트 경로에 `category`폴더와 `_layouts`폴더를 추가하고 `_layouts/category.html`파일에 다음 내용을 작성한다.

{% highlight liquid %}
{% raw %}
---
layout: page
---

{% for post in site.categories[page.category] %}
    <a href="{{ post.url | absolute_url }}">
      {{ post.title }}
    </a>
    <br>
{% endfor %}
{% endraw %}
{% endhighlight %}

그리고 `category`폴더에는 카테고리 목록에 따라, 예를 들어 study 카테고리라면, `category/study.html`파일에 다음과 같이 작성하도록 했다.

{% highlight liquid %}
---
layout: category
title: study
category: study
---
{% endhighlight %}

여기부터는 각 포스트 파일을 직접 수정해 줘야 하는데, 조금 고단한 작업이었다. Jinja 구문의 예시 부분은 먼저 raw tag로 감싸준 후  다음과 같은 구문으로 감싸면 잘 적용된다.

{% highlight liquid %}
{% raw %}
{% highlight jinja %}
raw tag
(...)
endraw tag
{% endhighlight %}
{% endraw %}
{% endhighlight %}

raw태그를 직접 여기에 나타낼 수가 없어 위와 같이 표현한 것이다. 이 블로그는 jekyll 기반이기 때문이다. 참고로 raw 태그는 jekyll에서 liquid 구문을 처리하지 않도록 한다.

어찌어찌 django zinnia blog에서 이렇게 이사에 성공했다. 이제는 기존의 템플릿을 여기에 적용시킬 차례다.
