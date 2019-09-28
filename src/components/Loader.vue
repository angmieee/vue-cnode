<template>
    <div class="loading">
        <img src="../assets/loader.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        z-index: 15000;
    }

    .loading img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        margin-top: -15px;
        margin-left: -15px;
    }
</style>