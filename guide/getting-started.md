---
outline: deep
---

# 运行时 API 示例

本页演示了 VitePress 提供的一些运行时 API 的使用方法。

The main `useData()` API 可用于访问当前页面的站点、主题和页面数据。它适用于 `.md` and `.vue` 文件:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前言

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前言

<pre>{{ frontmatter }}</pre>

## 更多的

查看文档以获取 [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
