<script>
export default {
    name: "AppNav",
    data() {
        return {
            scroll: 0
        }
    },
    methods: {
        handleScroll() {
            this.scroll = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },



}

</script>
<template>


    <nav class="navbar navbar-expand-lg position-fix  " :class="{ 'navbar-black': scroll > 50 }">
        <div class="container">

            <a href="#home" class="navbar-brand ">
                <img src="../assets/logo.png" width="" alt="Logo">
            </a>

            <!-- menu collapse  -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link navbar-link " aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-link" href="#about-skill">About/Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-link" href="#projects">Projects</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link navbar-link" href="#contact">Contact</a>
                    </li> -->
                </ul>
                <div class="navbar-text d-flex align-items-center">
                    <div class="social-icon ">
                        <a href="https://www.linkedin.com/in/michele-rossetti-298561263/"><img
                                src="../assets/nav-icon1.svg" alt="" /></a>
                        <a href="https://github.com/MicheleRossetti02"><img src="../assets/github.svg" alt="" /></a>
                        <a href="https://www.instagram.com/michele_rossetti4/"><img src="../assets/nav-icon3.svg"
                                alt="" /></a>
                    </div>
                    <a class="d-flex" role="search" href="#contact">
                        <button class="btn  vvd" type="submit"><span class="connect_to_my">Let's Connect</span>
                        </button>
                    </a>
                </div>

            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
/************ Navbar Css ************/

.navbar-black {
    background-color: black;
}

nav.navbar {
    padding: 18px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    transition: 0.32s ease-in-out;
}

button {
    font-weight: 400;
}

// to fix
nav.navbar.scrolled {
    padding: 0px 0;
    background-color: #121212;
}

nav.navbar a.navbar-brand {
    width: 15%;
}


nav.navbar .navbar-nav .nav-link.navbar-link {
    font-weight: 400;
    color: #fff !important;
    letter-spacing: 0.8px;
    padding: 0 25px;
    font-size: 18px;
    opacity: 0.75;
}

nav.navbar .navbar-nav a.nav-link.navbar-link:hover,
nav.navbar .navbar-nav a.nav-link.navbar-link.active {
    opacity: 1;
}

span.navbar-text {
    display: flex;
    align-items: center;
}

.social-icon {
    display: inline-block;
    margin-left: 14px;

}

.social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    color: #fff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
}

.social-icon a:hover::before {
    transform: scale(1);
}

.social-icon a img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.social-icon a:hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
}

.navbar-text button {
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    padding: 18px 34px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: transparent;
    transition: 0.3s ease-in-out;
}

.navbar-text button span {
    z-index: 1;
}

.navbar-text button::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
}

.navbar-text button:hover {
    color: #121212;
}

.navbar-text button:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
}

nav.navbar .navbar-toggler:active,
nav.navbar .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
}

nav.navbar .navbar-toggler-icon {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid #fff;
    transition: all 300ms linear;
    top: -2px;
}

nav.navbar .navbar-toggler-icon:focus {
    border-bottom: 2px solid #fff;
}

nav.navbar .navbar-toggler-icon:after,
nav.navbar .navbar-toggler-icon:before {
    width: 24px;
    position: absolute;
    height: 2px;
    background-color: #fff;
    top: 0;
    left: 0;
    content: '';
    z-index: 2;
    transition: all 300ms linear;
}

nav.navbar .navbar-toggler-icon:after {
    top: 8px;
}

nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
    transform: rotate(45deg);
    background-color: #fff;
    height: 2px;
}

nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
    transform: translateY(8px) rotate(-45deg);
    background-color: #fff;
    height: 2px;
}

nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    border-color: transparent;
}

.App {
    text-align: center;
}

.App-logo {
    height: 40vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
}

.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

// nav {

//     top: 0;


//     width: 100%;
//     padding: 30px 100px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;


//     img {
//         top: 30px;
//         width: 200px;
//     }

//     ul {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: row;
//         // color: #fff;
//         font-weight: 800;
//         text-decoration: none;
//         font-size: 1.2em;

//         letter-spacing: 1px;




//         li {
//             list-style: none;
//             margin-left: 15px;
//             margin-bottom: 15px;


//             a {
//                 border-radius: 20px;
//                 padding: 7px;
//             }

//             router-link {
//                 text-decoration: none;
//                 padding: 0px 15px;


//             }


//         }

//         li :hover,
//         a.activeheader {
//             background: #fff;
//             color: #fff;

//         }
//     }



// }
</style>