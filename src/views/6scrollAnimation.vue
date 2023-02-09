<template>
    <div class="wrapper" @scroll="handleScroll">
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
        <div class="box">
            <h2>Content</h2>
        </div>
    </div>
</template>

<script setup lang="ts">

const handleScroll = () => {
    checkBoxes()
}

const boxes = document.querySelectorAll('.box')
const checkBoxes = () => {
    let blockHeight = window.innerHeight
    const triggerBottom = blockHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

</script>

<style scoped>
.wrapper {
    background-color: antiquewhite;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow-y: scroll
}

.box {
    background-color: steelblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 3px;
    border-radius: 10%;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
    transform: translateX(-400%);
}

.box.show {
    transform: translateX(0);
}

.box h2 {
    font-size: 15px;
}
</style>