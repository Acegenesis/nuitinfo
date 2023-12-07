<template>
    <div>
        <img src="/img/bg.png" alt="Vue.js logo" />
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