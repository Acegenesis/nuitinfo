<script setup>
const count = ref(0)
const props = defineProps({
    initialCount: {
        type: Number,
        default: 0
    }
})
watch(() => props.initialCount, (value) => {
    count.value = value
})
</script>

<template>
    <div class="counter">
        <span>Score: {{ count }}</span>
    </div>
</template>

<style>
.counter {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    border-radius: 50px;
    background-color: #f5f5f5;
    font-size: 2rem;
    font-weight: bold;
    color: #343434;
}
</style>