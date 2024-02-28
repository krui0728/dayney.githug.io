import{_ as e,c as t,o,V as a}from"./chunks/framework.CeZJnTUi.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter2.md","filePath":"books/High_Performance/chapter2.md","lastUpdated":1705669135000}'),c={name:"books/High_Performance/chapter2.md"},r=a('<h3 id="懒加载工具" tabindex="-1">懒加载工具 <a class="header-anchor" href="#懒加载工具" aria-label="Permalink to &quot;懒加载工具&quot;">​</a></h3><ul><li><p><a href="https://github.com/rgrove/lazyload" target="_blank" rel="noreferrer">另一个无阻塞加载工具1-雅虎大神的作品lazyload</a></p></li><li><p><a href="https://github.com/getify/LABjs" target="_blank" rel="noreferrer">另一个无阻塞加载工具2-lab.js</a></p></li></ul><h3 id="小结：" tabindex="-1">小结： <a class="header-anchor" href="#小结：" aria-label="Permalink to &quot;小结： {#小结：}&quot;">​</a></h3><blockquote><ol><li><p><code>&lt;/body&gt;</code>闭合标签之前，将所有<code>&lt;script&gt;</code>标签放到页面的底部，这样确保在脚本执行前页面已经完成了渲染</p></li><li><p>合并脚本。页面中的<code>&lt;script&gt;</code>标签越少，加载速度就越快，响应也更迅捷。无论外链文件还是内嵌脚本都是如此。</p></li><li><p>有多种无阻塞下载JavaScript的方法。</p><blockquote><p>3.1 使用<code>&lt;script&gt;</code>标签的<code>defer</code>属性；在<code>HTML5</code>中有<code>async</code>属性，提供异步下载的功能； 3.2 使用动态创建的<code>&lt;script&gt;</code>元素来下载并执行代码； 3.3 使用<code>XHR</code>对象下载<code>JavaScript</code>代码并注入页面中；</p></blockquote></li></ol></blockquote>',4),l=[r];function d(i,s,p,n,_,h){return o(),t("div",null,l)}const b=e(c,[["render",d]]);export{u as __pageData,b as default};
