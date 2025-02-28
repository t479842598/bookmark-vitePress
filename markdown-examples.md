# Markdown 扩展示例

本页演示了 VitePress 提供的一些内置 markdown 扩展。

## 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki)支持的语法高亮功能，以及行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 定制容器

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个小贴士。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个详细信息块。
:::

## 更多的

查看文档以获取[full list of markdown extensions](https://vitepress.dev/guide/markdown).
