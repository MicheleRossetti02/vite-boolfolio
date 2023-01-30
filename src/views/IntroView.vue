<script>
import IntroNavApp from '../components/IntroNavApp.vue';


export default {
    name: "IntroApp",
    components: { IntroNavApp }
}


// let coding = document.getElementById('coding');
// let sfondo_back = document.getElementById('sfondo_back');
// let text = document.getElementById('text');
// let sfondo_front = document.getElementById('sfondo_front');
// let nerd = document.getElementById('nerd');

// window.addEventListener('scroll', function () {
//     let value = window.screenY;
//     coding.style.left = value * 2.25 + 'px';
//     text.style.left = value * 1.05 + 'px';
//     nerd.style.left = value * 0.05 + 'px';

// })


</script>

<template>

    <IntroNavApp />
    <section>
        <img id="sfondo_back" class="sfondo_back" src="../assets/5253128.jpg" alt="">
        <!-- <img id="" src="./assets/software-development-web-coding-laptop-programming-concept-website-design-coding-remote-work-home_3482-5615.webp" 
        alt=""> -->
        <!-- <img id="" class="desk" src="https://img.freepik.com/premium-vector/flat-design-gamer-room_52683-60772.jpg"> -->

        <img id="coding" class="coding" src="../assets/—Pngtree—cyberpunk code technology future decorative_7096150.png"
            alt="">
        <!-- <img id="" class="pc" src="./assets/h.png" alt=""> -->
        <div id="text" class="text">
            <h2 class="">
                Hi, my name is Michele</h2>
            <p>I'm a Jr. Full Stack Web Developer</p>
        </div>

        <img id="sfondo_front" class="sfondo_front" src="../assets/sfondo-schermo-centrale.png" alt="">
        <!-- <img id="" src="./assets/programmers-hands-writing-code-mobile-app-smartphone-screens-engineering-software-coding-programming-languages-application-design-concept-horizontal-vector-illustration_48369-36761.webp"
        alt=""> -->
        <img id="nerd" class="nerd" src="../assets/22896450_6709677 senza sfondo.png" alt="">

    </section>




</template>

<style lang="scss" scoped>
section {

    height: 100vh;
    width: 100%;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;



    .text {
        h2 {
            font-size: 2vw;
            font-weight: 900;

        }

        p {
            font-size: 1.4vw;
            font-weight: 700;
        }

        top: 300px;
        font-weight: 700;
        position: absolute;
        color: #2b1055;
        white-space: nowrap;
        // font-size: 1.5em;
        right: 18%;
        z-index: 9;
        transform: rotate3d(1, 1, 1, 355deg);

    }



    img {
        position: absolute;
        // top: 0;
        // left: 0;
        width: 100%;
        height: 100%;



    }

    img.nerd {
        left: 0%;
        // object-fit: cover;
        bottom: 0;
        // position: absolute;
        // top: 0;
        height: 90%;
        z-index: 10;
        width: 450px;
        object-fit: cover;

    }

    .sfondo_back {

        left: -10px;
    }
}
</style>