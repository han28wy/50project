<template>
    <div class="wrapper">
        <div class="search">
            <input type="text" class="input" placeholder="Search...">
            <button @click="handleCllick" class="btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        handleCllick() {
            const search = document.querySelector('.search') as HTMLElement
            const input = document.querySelector('.input') as HTMLElement
            search!.classList.toggle('active')
            input!.focus()
        }
    }

}
</script>

<style scoped>
.wrapper {
    background-image: linear-gradient(90deg, #7d5fff, #7158e2);
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    overflow: hidden;
    margin: 0;
}

.search {
    position: relative;
    height: 50px;
}

.input {
    background-color: #fff;
    border: 0;
    font-size: 18px;
    padding: 15px;
    height: 50px;
    width: 50px;
    transition: width 0.3s ease;
}

.btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: transform 0.3s ease;
}
</style>