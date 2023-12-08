<template>
    <div class="card">
        <div class="content">
            <img src="/img/bg.png" alt="Vue.js logo" />
            <h2>
                TEXT TO INSERT JE SAIS PAS ALED
            </h2>
        </div>
        <div class="actions">
            <button class="left">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            </button>
            <button class="right">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </button>  
        </div>   
    </div>
    <div id="app">
        <button @click="openModal">Ouvrir le modal</button>
        <Modal v-if="modalVisible" @close="closeModal" />
    </div>
</template>

<script>
import Modal from './modal.vue';

export default {
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
        },
    },
    components: {
        Modal,
    },
};
</script>

<style>
.card {
    min-width: 500px;
    max-width: 600px;
    height: auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 20px;
}

//style for the modal
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

//style for the card

.dark .card {
    background-color: #343434;
}

.card .content {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position : relative;
    backdrop-filter: blur(10px);
}

.card .content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    border-radius: 20px;
}

.card .content h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 2rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
}

.card .actions .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
}

.card .actions .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: green;
}

.card .actions svg {
    width: 50px;
    height: 50px;
    fill: white;
}

.dark .card .actions svg {
    fill: #343434;
}


</style>