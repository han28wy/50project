<template>
    <div class="container">
        <div ref="ele" v-for="pic in picList" :key="pic.id" class="panel"
            :style="{ backgroundImage: 'url(' + pic.url + ')' }">
            <div>
                <h3>{{ pic.title }}</h3>
            </div>

        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    setup() {
        const panels = document.querySelectorAll('.panel')
        const picList = [
            {
                id: 1,
                title: '1',
                url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 2,
                title: '2',
                url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            },
            {
                id: 3,
                title: '3',
                url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
            },
            {
                id: 4,
                title: '4',
                url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
            },
            {
                id: 5,
                title: '5',
                url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
        ]
        return { picList, panels }
    },
    onMounted() {
        const panels = document.querySelectorAll('.panel')
        console.log(888)
        console.log(panels)
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        })
        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }
    }
}

</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 500px;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
    border-radius: 50px;
    color: red;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
}


.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
}

/* .panel.active {
    flex: 5;
} */

.panel.active h3 {
    opacity: 1;
    /* transition: opacity 0.3s ease-in 0.4s; */
}

/* @media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
} */
</style>