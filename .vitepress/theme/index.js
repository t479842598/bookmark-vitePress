// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style/custom.css'  //加入自定义样式
export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: Layout,
    // enhanceApp({ app }) {
    // }
}