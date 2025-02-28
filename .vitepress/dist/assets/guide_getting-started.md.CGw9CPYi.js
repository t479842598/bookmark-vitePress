import{u as r,c as h,a0 as d,j as a,t,k as i,a as e,o}from"./chunks/framework.B_Gi1r42.js";const f=JSON.parse('{"title":"运行时 API 示例","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":null}'),k={name:"guide/getting-started.md"},E=Object.assign(k,{setup(g){const{site:c,theme:n,page:l,frontmatter:p}=r();return(u,s)=>(o(),h("div",null,[s[0]||(s[0]=d(`<h1 id="运行时-api-示例" tabindex="-1">运行时 API 示例 <a class="header-anchor" href="#运行时-api-示例" aria-label="Permalink to &quot;运行时 API 示例&quot;">​</a></h1><p>本页演示了 VitePress 提供的一些运行时 API 的使用方法。</p><p>The main <code>useData()</code> API 可用于访问当前页面的站点、主题和页面数据。它适用于 <code>.md</code> and <code>.vue</code> 文件:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 主题数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 页面数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 页面前言</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="结果" tabindex="-1">结果 <a class="header-anchor" href="#结果" aria-label="Permalink to &quot;结果&quot;">​</a></h2><h3 id="主题数据" tabindex="-1">主题数据 <a class="header-anchor" href="#主题数据" aria-label="Permalink to &quot;主题数据&quot;">​</a></h3>`,6)),a("pre",null,t(i(n)),1),s[1]||(s[1]=a("h3",{id:"页面数据",tabindex:"-1"},[e("页面数据 "),a("a",{class:"header-anchor",href:"#页面数据","aria-label":'Permalink to "页面数据"'},"​")],-1)),a("pre",null,t(i(l)),1),s[2]||(s[2]=a("h3",{id:"页面前言",tabindex:"-1"},[e("页面前言 "),a("a",{class:"header-anchor",href:"#页面前言","aria-label":'Permalink to "页面前言"'},"​")],-1)),a("pre",null,t(i(p)),1),s[3]||(s[3]=a("h2",{id:"更多的",tabindex:"-1"},[e("更多的 "),a("a",{class:"header-anchor",href:"#更多的","aria-label":'Permalink to "更多的"'},"​")],-1)),s[4]||(s[4]=a("p",null,[e("查看文档以获取 "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),e(".")],-1))]))}});export{f as __pageData,E as default};
