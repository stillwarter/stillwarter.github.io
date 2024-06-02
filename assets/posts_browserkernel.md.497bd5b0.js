import{_ as e,o as r,c as t,N as a}from"./chunks/framework.d770699b.js";const k=JSON.parse('{"title":"browserkernel（未完成）","description":"","frontmatter":{"title":"browserkernel（未完成）","outline":"deep","date":"2023-04-23T00:00:00.000Z","tags":["browser","Stu","荒野"]},"headers":[],"relativePath":"posts/browserkernel.md"}'),l={name:"posts/browserkernel.md"},o=a('<h1 id="browserkernel" tabindex="-1">browserkernel <a class="header-anchor" href="#browserkernel" aria-label="Permalink to &quot;browserkernel&quot;">​</a></h1><p>这是一个关于浏览器内核的文章，主要是对14年出版的《webkit技术内幕》一书的摘要理解。这本书没有代码细节的说明，大部分讲解的是架构层面的内容。</p><h2 id="_1-浏览器特性" tabindex="-1">1.浏览器特性 <a class="header-anchor" href="#_1-浏览器特性" aria-label="Permalink to &quot;1.浏览器特性&quot;">​</a></h2><p>一个浏览器包含以下功能</p><ul><li>网络 浏览器通过网络模块下载各种资源。</li><li>资源管理 管理从网络下载或本地获取的资源，需要高效的管理机制，比如如何避免重复下载资源，缓存资源等。</li><li>网页浏览 将网络获取得到的资源进行可视化处理。</li><li>多页面管理 浏览器应该支持多个页面同时加载，这也会让浏览器变得更复杂。为此浏览器做出了努力，比如可以使用线程或进程来绘制网页。</li><li>插件和扩展 用于增加浏览器功能，比如插件的npapi插件，ppapi插件等。</li><li>账户和同步 将浏览的信息，比如历史记录，书签等信息同步到服务器，这对用户很友好。</li><li>安全机制 本质是希望提供一个安全的浏览器环境，避免用户信息被各种非法工具窃取和破坏。</li><li>开发者工具 主要用于网页开发者进行调试。</li></ul>',5),i=[o];function s(n,_,c,p,d,b){return r(),t("div",null,i)}const u=e(l,[["render",s]]);export{k as __pageData,u as default};