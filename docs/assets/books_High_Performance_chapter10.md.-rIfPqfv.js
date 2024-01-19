import{_ as e,c as a,o as r,V as o}from"./chunks/framework.58kB5Xqm.js";const m=JSON.parse('{"title":"高性能JavaScript读书笔记--工具","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter10.md","filePath":"books/High_Performance/chapter10.md","lastUpdated":null}'),t={name:"books/High_Performance/chapter10.md"},l=o('<h1 id="高性能javascript读书笔记-工具" tabindex="-1"><a class="header-anchor" href="#高性能javascript读书笔记-工具">高性能JavaScript读书笔记--工具</a></h1><h3 id="实际环境【chrome-develop-tool】" tabindex="-1"><a class="header-anchor" href="#实际环境【chrome-develop-tool】">实际环境【chrome develop tool】</a></h3><blockquote><p>参考学习的资料时<a href="https://www.youtube.com/watch?v=xSrpjGSNqvI&amp;list=PLXbU-2B80FvBhAYNx8qqx6gaNSKX9HlCm" target="_blank" rel="noreferrer">50 个 Chrome Developer Tools 必备技巧</a></p></blockquote><p>移动端的抓包工具有</p><ol><li>windows 推荐使用【fiddler】</li><li>mac推荐使用【charles,相关的教程推荐<a href="http://blog.devtang.com/2015/11/14/charles-introduction/" target="_blank" rel="noreferrer">Charles 从入门到精通</a>】</li></ol><p><strong>平时收藏的性能小案例</strong> <a href="https://crxdoc-zh.appspot.com/apps/api_index" target="_blank" rel="noreferrer">google的性能要点小知识JavaScript API</a><a href="https://googlechrome.github.io/devtools-samples/jank/" target="_blank" rel="noreferrer">谷歌性能小案例</a><a href="https://w3ctech.com/topic/2089" target="_blank" rel="noreferrer">前端性能优化の备忘录（2018版)</a></p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结">小结</a></h3><blockquote><ol><li><p>使用网路分析工具找出加载脚本和页面中其他资源的瓶颈，这会帮助你决定哪些脚本需要延迟加载，或者需要进一步分析；</p></li><li><p>尽管传统的经验告诉我们要尽量减少HTTP请求数，但把脚本尽可能延迟加载可以加快页面渲染速度，给用户带来更好的体验；</p></li><li><p>使用性能分析工具找出脚本运行过程中速度慢的地方，检查每个函数所消耗的时间，以及函数被调用的次数，通过调用栈自身提供的一些线索找出需要集中精力优化的地方；</p></li><li><p>尽管耗费的时间和调用次数通常是数据中最有价值的部分，但仔细颜观察函数的调用过程，就会找到更过的优化目标。</p></li></ol></blockquote>',8),c=[l];function p(i,h,s,n,d,_){return r(),a("div",null,c)}const b=e(t,[["render",p]]);export{m as __pageData,b as default};
