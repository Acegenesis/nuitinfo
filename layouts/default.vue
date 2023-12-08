import { Counter } from '../.nuxt/components';
<script setup>
const mode = ref(false)
</script>

<template>
    <div :class="mode ? 'dark' : 'light'">
        <Switch @mode="mode = !mode" />
        <Counter :initialCount="0" />
        <img :src="mode ? '/img/bg_dark.png' : '/img/bg.png'" alt="Vue.js logo" />
        <slot></slot>
    </div>
</template>

<style scoped>
img {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
}
</style>