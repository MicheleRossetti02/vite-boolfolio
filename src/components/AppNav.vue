<script>



export default {
    name: "AppNav",

    methods: {
        scrollToSectionHome() {
            const homeSec = document.querySelector('#home')
            homeSec.scrollIntoView({ behavior: 'smooth' })
        },
        scrollToSectionProject() {
            const projectSec = document.querySelector('#project')
            projectSec.scrollIntoView({ behavior: 'smooth' })
        },
        scrollToSectionAbout() {
            const aboutSec = document.querySelector('#about')
            aboutSec.scrollIntoView({ behavior: 'smooth' })
        },
        scrollToSectionContact() {
            const contactSec = document.querySelector('#contact')
            contactSec.scrollIntoView({ behavior: 'smooth' })
        },
    }

}
</script>
<template>
    <!-- //nav template  -->
    <nav class="navbar navbar-expand-lg  ">
        <div class="container">

            <!-- img logo -->
            <img src="../assets/logo.png" width="" alt="">

            <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="activeheader " to="#home" onclick="scrollToSectionHome">
                        HOME
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="activeheader " :to="{ name: 'portfolio' }">

                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="activeheader " :to="{ name: 'about' }">

                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" activeClass="activeheader " :to="{ name: 'contacts' }">

                    </router-link>
                </li>
            </ul>
        </div>

    </nav>

</template>

<style lang="scss" scoped>
nav.navbar {
    padding: 18px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    transition: 0.32s ease-in-out;

}

nav.navbar.scrolled {
    padding: 0px 0;
    background-color: #121212;
}

nav {

    top: 0;
    // left: 0;

    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    img {
        top: 30px;
        width: 200px;
        // position: absolute;
        // background-color: #2b1055;
        padding: 10px 10px;
        border-radius: 20px;
        box-shadow: 5px 5px #fff;

    }

    img:hover {
        background-color: #fff;
        padding: 10px 10px;
        border-radius: 20px;
        box-shadow: 5px 5px #2b1055;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: #fff;
        font-weight: 800;
        text-decoration: none;
        font-size: 1.2em;
        text-transform: uppercase;
        letter-spacing: 1px;




        li {
            list-style: none;
            margin-left: 15px;
            margin-bottom: 15px;


            a {
                border-radius: 20px;
                padding: 7px;
            }

            router-link {
                text-decoration: none;
                padding: 0px 15px;


            }


        }

        li :hover,
        a.activeheader {
            background: #fff;
            color: #2b1055;

        }
    }



}
</style>