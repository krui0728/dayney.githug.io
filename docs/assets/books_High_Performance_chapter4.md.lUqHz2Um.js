import{_ as e,c as a,o as t,V as i}from"./chunks/framework.58kB5Xqm.js";const m=JSON.parse('{"title":"高性能JavaScript读书笔记--算法和流程控制","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter4.md","filePath":"books/High_Performance/chapter4.md","lastUpdated":1705650796000}'),o={name:"books/High_Performance/chapter4.md"},r=i('<h1 id="高性能javascript读书笔记-算法和流程控制" tabindex="-1"><a class="header-anchor" href="#高性能javascript读书笔记-算法和流程控制">高性能JavaScript读书笔记--算法和流程控制</a></h1><h1 id="需要加强的是" tabindex="-1"><a class="header-anchor" href="#需要加强的是">需要加强的是</a></h1><p>[ ] 1. Memozation(tabulation)，名词很陌生，就是混存之前的计算结果，但是平时使用的比较多；</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结">小结</a></h3><blockquote><ol><li><p>for、while和do-while循环性能特性相当，并灭于一种循环类型明显快于或慢于其他类型；</p></li><li><p>避免使用for-in循环，除非你需要便利一个属性数量未知的对象；</p></li><li><p>改善循环性能的最佳方式是减少每次迭代的运算量和减少循环迭代次数；</p></li><li><p>通常来说，switch总比if-else快，但并不总是最佳解决方案；</p></li><li><p>在判断条件较多时，使用查找表比if-else和switch更快；</p></li><li><p>浏览器的调用栈大小限制了递归算法在JavaScript中的应用，栈溢出错误会导致其他代码中断运行；</p></li><li><p>如果你遇到栈溢出的错误，可将方法改为迭代算法，或使用Memozation来避免重复计算；</p></li></ol></blockquote>',5),c=[r];function l(p,s,n,h,_,d){return t(),a("div",null,c)}const b=e(o,[["render",l]]);export{m as __pageData,b as default};
