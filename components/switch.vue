<script setup>
const mode = ref(false)
const emit = defineEmits(['mode'])
watch(mode, (value) => {
    if (value) {
        emit('mode', true)
    } else {
        emit('mode', false)
    }
})
</script>

<template>
    <div class="mode">
        <v-switch
            v-model="mode"
            inset
        ></v-switch>
    </div>
</template>

<style>
.mode {
    position: fixed;
    top: 5px;
    left: 10px;
    z-index: 100;
}
</style>
