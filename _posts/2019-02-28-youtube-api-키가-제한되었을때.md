---
layout: post
title: 'youtube-api-키가-제한되었을때'
author: Rockheung
tags: javascript bootcamp youtube
categories: Study

---

<h4 id="준비물">준비물</h4>
<ul>
<li>크롬</li>
<li>크롬 확장 프로그램: <a href="https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?utm_source=chrome-ntp-icon">Moesif Orign &amp; CORS Changer</a></li>
<li>HTML 파일 헤드에 한줄 추가</li>
</ul>
<p><a href="https://developers.google.com/youtube/v3/docs/search/list?hl=ko&amp;apix_params=%7B%22part%22%3A%22snippet%22%2C%22safeSearch%22%3A%22none%22%2C%22type%22%3A%22video%22%2C%22fields%22%3A%22items%2Fid%2FvideoId%2Citems%2Fsnippet%2Ftitle%2Citems%2Fsnippet%2Fdescription%2Citems%2Fsnippet%2Fthumbnails%2Fdefault%2Furl%22%7D">Search: list &nbsp;|&nbsp; YouTube Data API (v3)<br>
&nbsp;|&nbsp; Google Developers</a>에 가면 웹에서 API 요청을 테스트하는 부분이 맨 아래에 있습니다. 크롬 콘솔의 네트워크 부분에서 search 키워드로 검색하시면 웹페이지에서 테스트하는 데에 사용되는 키를 얻으실 수 있는데, 이 키를 잘 저장해 놓습니다.</p>
<p>개발중인 HTML 파일의 <code>&lt;head&gt;</code> 태그에 한 줄을 추가하여 요청의 헤더에서 Referrer를 없애줍니다.</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>referrer<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
<p>크롬 확장 프로그램을 받아 다음과 같이 설정해줍니다.<br>
<img src="https://res.cloudinary.com/rockheung/image/upload/v1551350351/github.io/github_page_-_stackedit.io/google_api_hack.png" alt=""></p>
<p>이제 구글 API 테스트를 다시 시작할 수 있습니다.</p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

