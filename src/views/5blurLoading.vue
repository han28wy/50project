<template>
    <div>
        <section class="bg"></section>
        <div class="loading-text">0%</div>
    </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue';

const data = reactive({
    loadNum: 0
})
watch(() => data.loadNum, () => {
    console.log('loadNum改变  ')
}, {
    deep: true,
    immediate: true
})


</script>

<style scoped>
.bg {
    background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80') no-repeat center center/cover;
    position: absolute;
    top: -30px;
    left: -30px;
    /* width: calc(100vw + 60px);
    height: calc(100vh + 60px); */
    width: 800px;
    height: 400px;
    z-index: -1;
    filter: blur(0px);
}

.loading-text {
    font-size: 50px;
    color: #fff;
}
</style>