<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide, ref } from "vue";
const { Layout } = DefaultTheme;

const { isDark } = useData();

const isShow = ref(false);
const copyInfoText = ref("复制成功，可以去页面粘贴了~");

const enableTransitions = () =>
    "startViewTransition" in document &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
    if (!enableTransitions()) {
        isDark.value = !isDark.value;
        return;
    }

    const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`,
    ];

    await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
    }).ready;

    document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
            duration: 300,
            easing: "ease-in",
            pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
        }
    );
});
//一键复制
function copy() {
    var clipboard = new ClipboardJS(".copyBtn", {
        target: function (trigger) {
            return trigger.nextElementSibling;
        },
    });

    clipboard.on("success", function (e) {
        // console.info("Text:", e.text);
        isShow.value = true;
        copyInfoText.value = "复制成功，可以去页面粘贴了~";
        e.clearSelection();
    });
    setTimeout(() => {
        isShow.value = false;
    }, 3000);
    clipboard.on("error", function (e) {
        copyInfoText.value = "复制失败，请手动复制~";
    });
}
</script>

<template>
    <!-- <DefaultTheme.Layout /> -->
    <Layout>
        <template #doc-before>
            <button class="VPBadge warning copyBtn" @click="copy" data-clipboard-target=".vp-doc">
                复制全文
            </button>
        </template>
        <template #doc-footer-before>
            <div id="snackbar" :class="{ show: isShow }">{{ copyInfoText }}</div>
        </template>
        <template #doc-bottom>
            <!--回到顶部结构-->
            <a href="#app" id="go2top"> </a>
        </template>
    </Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}

.VPSwitchAppearance {
    width: 22px !important;
}

.VPSwitchAppearance .check {
    transform: none !important;
}

.copyBtn {
    position: absolute;
    top: -30px;
    right: 32px;
    z-index: 9;
}

#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    border-radius: 6px;
    background-color: var(--vp-local-search-result-bg);
    color: #333;
    text-align: center;
    border-radius: 3px;
    padding: 16px;
    position: fixed;
    z-index: 10;
    left: 50%;
    bottom: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/*回到顶部样式*/
#go2top {
    background: #999 url("https://www.imqd.cn/wp-content/themes/imqd/images/go2top.png") no-repeat 8px center;
    position: fixed;
    bottom: 28px;
    right: 20px;
    width: 40px;
    height: 35px;
    border-radius: 6px;
}

#go2top:hover {
    background-color: #555;
}

@keyframes fadein {
    0% {
        bottom: 0;
        opacity: 0;
    }

    100% {
        bottom: 50px;
        opacity: 1;
    }
}
</style>