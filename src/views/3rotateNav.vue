<template>
    <div class="wrapper">
        <div class="container">
            <div class="circle-container">
                <div class="circle">
                    <button @click="handleClose" id="close">
                        <el-icon>
                            <Minus />
                        </el-icon>
                    </button>
                    <button @click="handleOpen" id="open">
                        <el-icon>
                            <Plus />
                        </el-icon>
                    </button>
                </div>
            </div>

            <div class="content">
                <h1>Amazing Article</h1>
                <small>Florin Pop</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores
                    cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro
                    laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore
                    pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod
                    voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure
                    aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum
                    soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis
                    consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
                </p>

                <h3>My Dog</h3>
                <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="doggy" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
                    consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
                    Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit
                    deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus
                    asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime
                    similique laborum odio, magnam esse. Aperiam?</p>
            </div>
        </div>

        <nav>
            <ul style=" list-style-type: none;padding-left: 30px;">
                <li class="nav_text1">
                    <el-icon>
                        <Star />
                    </el-icon><a href="#" style="color:white"> Home</a>
                </li>
                <li class="nav_text2"><el-icon>
                        <Service />
                    </el-icon><a href="#" style="color:white"> About</a></li>
                <li class="nav_text3"><el-icon>
                        <Bell />
                    </el-icon><a href="#" style="color:white"> Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        handleOpen() {
            console.log(111)
            const container = document.querySelector('.container') as HTMLElement
            container.classList.add('show-nav')
        },
        handleClose() {
            console.log(222)
            const container = document.querySelector('.container') as HTMLElement
            container.classList.remove('show-nav')

        }
    }
}
</script>

<style scoped>
.wrapper {
    font-family: 'Lato', sans-serif;
    background-color: #333;
    color: #222;
    overflow-x: hidden;
    margin: 0;
}

.circle-container {
    position: fixed;
    top: -100px;
    left: -100px;
}

.circle button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    background: transparent;
    border: 0;
    font-size: 26px;
    color: #fff;
}

.circle {
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
}

.circle button:focus {
    outline: none;
}

.circle button#open {
    left: 60%;
}

.circle button#close {
    top: 60%;
    transform: rotate(30deg);
    transform-origin: top left;
}

.container {
    background-color: white;
    transform-origin: top left;
    transition: transform 0.5s linear;
    width: 100%;
    min-height: 100%;
    padding: 50px;
}

.container.show-nav {
    transform: rotate(-20deg);
}

.content img {
    max-width: 50%;
    height: 200px;
}

.content {
    max-width: 1000px;
    margin: 50px auto;
}

.content h1 {
    margin: 0;
}

.content small {
    color: #555;
    font-style: italic;
}

.content p {
    color: #333;
    line-height: 1.5;
}

/* 导航栏   位置就是固定不动的，把颜色搞成白色，在文章白色背景下就不显示了*/
nav {
    position: fixed;
    bottom: 560px;
    left: 80px;
    z-index: 100;
}

.nav_text1 {
    text-transform: uppercase;
    color: white;
    margin: 10px 0;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in;
}

.nav_text2 {
    margin-left: 15px;
    transform: translateX(-150%);
}

.nav_text3 {
    margin-left: 30px;
    transform: translateX(-200%);
}

nav a {
    text-decoration: none;
    transition: all 0.5s;
}

nav a:hover {
    color: #FF7979;
    font-weight: bold;
}
</style>
