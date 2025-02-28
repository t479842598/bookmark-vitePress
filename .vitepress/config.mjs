import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "战渊常用网站合集",
  description: "战渊科技",
  lastUpdated: true, // 显示最后更新时间
  ignoreDeadLinks: true, //忽略死链查询，即文档中嵌入的一些链接无法访问也不会导致站点报错
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "../img/logo.png", //添加网站ico图标
      },
    ],
  ],
  themeConfig: {
    logo: "../img/游戏娱乐.svg",
    // 隐藏logo右边的标题
    // siteTitle: false,
    // 主题配置
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '个人主页', link: 'https://www.tang74.top/' },
      // { text: "指南", link: "/guide/", activeMatch: '/guide/' },
      {
        text: '精品论坛',
        items: [
          {
            // 该部分的标题
            text: '游戏论坛',
            items: [
              { text: '酒入游戏论坛', link: 'https://www.jr25.xyz/' },
              { text: '真牛游戏论坛', link: 'https://www.zn510.cc/' },
              { text: '科学刀论坛', link: 'https://www.kxdao.net/' },
              { text: 'MUMU论坛', link: 'https://muux.ltd/forum.php' },
            ]
          },
          {
            // 该部分的标题
            text: '玩机论坛',
            items: [
              { text: '恩山论坛', link: 'https://www.right.com.cn/forum/forum.php' },
              { text: 'MT论坛', link: 'https://bbs.binmt.cc/index.php?fromuid=42093' },
              { text: '魅族玩机论坛', link: 'https://www.meizubl.com/forum.php' },
            ]
          },
          {
            // 该部分的标题
            text: '交流论坛',
            items: [
              { text: '天涯论坛', link: 'https://tianya.my/' },
              { text: '吾爱破解论坛', link: 'https://www.52pojie.cn//index.php' },
            ]
          }
        ]
      }, //二级菜单
      {
        text: '精品源码',
        items: [
          {
            // 该部分的标题
            text: '精品源码',
            items: [
              { text: '源素网', link: 'https://www.ysu2.com/' },
              { text: 'ASP300', link: 'https://asp300.cn/' },
            ]
          }
        ]
      }, //二级菜单
      {
        text: '常用链接',
        items: [
          {
            // 该部分的标题
            text: '工具',
            items: [
              { text: 'TOTP Token管家', link: 'https://totp1.tang74.top/' },
              { text: '个人书签页', link: 'https://zy.tang74.top/' },
            ]
          },
          {
            // 该部分的标题
            text: '服务器',
            items: [
              { text: '雨云服务器', link: 'https://app.rainyun.com/apps/rcs/list' },
              { text: '阿里云后台', link: 'https://dns.console.aliyun.com/?accounttraceid=22c70a8a5be24d5a8f04a0eeaafc0a86pzox#/dns/domainList' },
            ]
          },
          {
            // 该部分的标题
            text: '小说',
            items: [
              { text: '小说网无弹窗', link: 'https://www.asxs5.com/' },
            ]
          },
        ]
      }, //二级菜单
      {
        text: '宝塔系列网站',
        items: [
          {
            // 该部分的标题
            text: '宝塔安装',
            items: [
              { text: '宝塔开心版', link: 'https://bt.sb/bbs/forum-37-1.html' },
              { text: '宝塔纯净版', link: 'https://btweb.co/zh.html' },
            ]
          }
        ]
      }, //二级菜单

    ],

    sidebar: {
      // {
      //   text: '示例',
      //   items: [
      //     { text: 'Markdown 示例', link: '/markdown-examples' },
      //     { text: 'Runtime API 示例', link: '/api-examples' }
      //   ]
      // },
      "/guide/":
      {
        base: "/guide/",
        items: [
          { text: "首页", link: "/" }, //对应index.md
          { text: "快速开始", link: "getting-started" },//对应 getting-started.md
        ],
        collapsed: false,
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/t479842598' }
    ],
    // 页脚
    // footer: {
    //   message:
    //     "战渊常用网站合集为个人站点，未经许可禁止任何形式的转载",
    //   copyright: `Copyright © 2016-${new Date().getFullYear()} `, //这里可以写JS表达式
    // },
  }
})
