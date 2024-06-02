import{_ as s,o as a,c as n,N as p}from"./chunks/framework.d770699b.js";const A=JSON.parse('{"title":"vitepress的重构","description":"","frontmatter":{"title":"vitepress的重构","date":"2023-03-28T00:00:00.000Z","tags":["vitepress","Stu"]},"headers":[],"relativePath":"posts/vitepress重构.md"}'),l={name:"posts/vitepress重构.md"},e=p(`<h1 id="vitepress的重构" tabindex="-1">vitepress的重构 <a class="header-anchor" href="#vitepress的重构" aria-label="Permalink to &quot;vitepress的重构&quot;">​</a></h1><h2 id="_1-之前的老项目" tabindex="-1">1.之前的老项目 <a class="header-anchor" href="#_1-之前的老项目" aria-label="Permalink to &quot;1.之前的老项目&quot;">​</a></h2><p>在使用vitepress之前我使用的hexo+github.io的方式，大概在2021年的冬天吧，我还在读书，部署了一版hexo+github.io，当时还用的是egg的模板语法，整个页面还是很好看的，不过只能写md。</p><p>当时我还是很满足，还在上面挂一些6级的阅读翻译😅，不过后来我发现我无法控制页面的样式（只能根据模板来），加上当时时间和能力有限，所以没有深入去了解hexo相关的内容。</p><p>因为无法直接控制页面元素（dom），所以我逐渐就放弃了写blog。</p><h2 id="_2-vitepress重构" tabindex="-1">2.vitepress重构 <a class="header-anchor" href="#_2-vitepress重构" aria-label="Permalink to &quot;2.vitepress重构&quot;">​</a></h2><p>大概是2022年7月某个下午的摸鱼😁，脑壳昏沉，有一搭没一搭的看bug，当时刚好百度vite相关的信息，我鬼使神差的点进去了vitepress的官网，whatsup还有这种东西？当时就不管项目直接按照文档本地构建了一版vitepress，不过开始我也无法完全操作页面dom，不过它可以在md文件里用vue文件🥴？鱿鱼须真有你的。</p><p>所以后续我就将hexo转为vitepress了，当时用了clark-cui这位老哥的vitepress主题。</p><h2 id="_3-default-theme-customization" tabindex="-1">3.Default Theme + Customization <a class="header-anchor" href="#_3-default-theme-customization" aria-label="Permalink to &quot;3.Default Theme + Customization&quot;">​</a></h2><p>在vitepress重构前用了一段时间，确实好用。你甚至可以画全局的canvas动画以及加载一些重型的插件。比如当时我正好在写openlayer相关的组件，当时在vitepress上做了一个简单的地图预览页面，直接通过包管理工具引入，非常好用！</p><p>不过这不是没有代价，当时的vitepress版本其实是不支持openlayer的，我当时将viterpess升级为最新版（alpha.4）才好。（报错是老版本好像是不支持commenjs，我也不确定？）</p><p>问题不仅仅于此，我还发现我的页面布局并不是存粹的，vitepress是有布局预设的，所以在某些情况下自己的布局会出现冲突，就引起我写的canvas坐标出现偏移，让我很苦恼🤒。</p><p>直到2023年后，我才有时间想办法重构。</p><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><p>vitepress自带有一个脚手架可以很方便的创建项目。</p><div class="language-npm"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm i vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm vitepress init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这时候命令栏窗口会返回：</p><div class="language-npm"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vitepress v1.0.0-alpha.xx(未来也有可能发生改变)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Welcome to VitePress!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Where should VitePress initialize the config?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Site title:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Theme:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Default Theme(Out of the box,good-looking docs)</span></span>
<span class="line"><span style="color:#A6ACCD;">  Default Theme + Customization</span></span>
<span class="line"><span style="color:#A6ACCD;">  Custom Theme</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里前面的一些选项可以直接回车啊（后续可以在配置文件修改），不过需要注意的是Theme选项，英语好的选手就不会像我一样傻乎乎的回车然后发现项目结构和clark-cui完全不一样啊（没错我是下流前端😭）。</p><p>后面我重新选择了第二个选项，这个选项是默认+自定义，这里三个选项的自定义程度依次递减（这是我的理解）。这个默认+自定义的意思是我们可以在vitepress提供的基础主题上进行扩展，我认为这个还是比较方便我这种下流前端选手的。</p><p>初始化完成后我们进行下一步。</p><h3 id="功能预设" tabindex="-1">功能预设 <a class="header-anchor" href="#功能预设" aria-label="Permalink to &quot;功能预设&quot;">​</a></h3><p>现在我有了一个基础的结构，我需要在上面进行扩展和修改，vitepress自身的主页很漂亮，但是我希望这个页面是我自己写的。</p><p>此外我需要能对我写的文章进行分类，像clark-cui老哥一样有tag处理和archives列表。</p><p>所以怎么做捏？</p><h3 id="实现预设" tabindex="-1">实现预设 <a class="header-anchor" href="#实现预设" aria-label="Permalink to &quot;实现预设&quot;">​</a></h3><p>在clark-cui老哥的项目里将tag处理功能和archives列表分别用tag.md和archives.md两个文件实现。在实现主页之前我的将这两个页面做出了，不然主页有了，但我无法实现分类和所有文件的功能，那也白搭。</p><h6 id="tag-md" tabindex="-1">tag.md <a class="header-anchor" href="#tag-md" aria-label="Permalink to &quot;tag.md&quot;">​</a></h6><p>a:完成基础布局</p><p>新建tag.md文件，采用page布局。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">page</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>就像这样将这个代码写在md文件的开头，这里的layout指的是vitepress的布局格式（避免后面tag页面因为预设的侧边栏影响页面布局），---里的内容可以认为是vitepress自带的frontmatter内容，这里面记录了md文件的某些信息，可以通过userDate拿到（vitepress的接口），如果你不理解这些，可以在vitepress官网找到答案！</p><p>b:获取文章tag</p><p>在此之前，你需要知道，或者说你自己想将文件放到哪个文件夹下。这样我们好使用node的fs模块和path模块对我们自己的文章md文件进行预处理。</p><p>vitepress本身好像是不支持文件读写的，所以我们的使用第三方插件实现。这里我是用clark-cui老哥现成的serverUtils内的函数完成的读取功能，我并不知道如何将读取vitepress下的其他文件。</p><p>c:存放tag</p><p>有关tag的数据是常用的，我已经有了读取tag的方法，clark-cui老哥将数据放到config文件下，这样我们只需要通过vitepress的useDate就可以拿到tag数据了。</p><p>d:创建vue组件</p><p>现在我们有了需要读取的md文件（我的md文件存在于post文件夹下），有了可以实现读取文件的函数（存在于serverUtils），vitepress是支持在md文件中直接使用vue组件的，所以现在需要的是创建一个用于tag页面（存在于根文件的tag.md文件最后会被编译为tag.html）的vue组件。</p><p>首先处理从配置文件里得到的posts数据，提取里面的tag值：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> theme </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> postsData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">posts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> endData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> theTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> choseData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> postsData) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">frontMatter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tags</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">endData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>这样我们就将tag值以及对应的md信息放入了endData变量。之后在渲染出来即可。</p><p>sir，this way：？</p><h2 id="_4-遇到的问题" tabindex="-1">4.遇到的问题 <a class="header-anchor" href="#_4-遇到的问题" aria-label="Permalink to &quot;4.遇到的问题&quot;">​</a></h2><ol><li>请按官网提示使用yarn或pnpm初始化项目，使用npm会有问题。</li><li>使用vitepress的时候关闭vue相关的插件（volar），否则会有报错（至少我的是这样）</li><li>无法在vue文件或md文件直接使用fs或path模块，vitepress不支持这样直接的使用。</li><li>使用doc布局（默认布局值）的时候，会自动出现右侧的导航栏，会影响页面布局。需要你将layout值改为page布局。</li><li>记得给样式加上媒体查询，最好看看vitepress自己的媒体查询是怎么样的。</li></ol>`,45),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
