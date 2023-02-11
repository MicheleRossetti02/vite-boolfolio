<template>


    <h3 class="skills-titl text-center ">My Skills</h3>

    <ul class="skills-list d-flex my-4">
        <li v-for="(skill, index) in skills" :key="index" @mousemove="handleMouseMove" class="p-4"
            :style="{ transform: 'scale(' + scale[index] + ')' }">
            <i :class="'fab fa-' + icons[index]" />
            <span>{{ skill }}</span>
        </li>
    </ul>





</template>

<script>


export default {
    data() {
        return {
            skills: ['JavaScript', 'HTML', 'CSS', 'Vue.js', 'GitHub', 'PHP', 'Bootstrap', 'Laravel', 'Sass', 'in continua ricerca di nuovi linguaggi...'],
            icons: ['js', 'html5', 'css3', 'vuejs', 'github', 'php', 'bootstrap', 'laravel', 'sass'],
            scale: Array(6).fill(1)
        }
    },
    methods: {
        handleMouseMove(event, index) {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const dx = x - xc;
            const dy = y - yc;
            const adx = Math.abs(dx);
            const ady = Math.abs(dy);
            this.scale[index] = 1 + (adx + ady) / 200;
        }
    }
}
</script>

<style>
.skills-container {
    width: 80%;
    background-color: lightgray;

    margin: 0 auto;
    text-align: center;
}

.skills-title {
    font-weight: bold;
    margin-bottom: 20px;
}


.skills-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skills-list li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 10px 20px; */
    /* margin: 10px; */
    /* border-radius: 10px; */
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
}

i {
    font-size: 3rem;
}

.skills-list i {
    margin-right: 10px;
}
</style>
