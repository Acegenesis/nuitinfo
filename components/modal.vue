<template>
    <div class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
            <h2>Modal Content</h2>
            <p>Ceci est le contenu du modal.</p>
            <button @click="closeModal">Fermer</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
}
</style>