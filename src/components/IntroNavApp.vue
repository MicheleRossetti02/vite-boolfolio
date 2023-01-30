<script>

export default {
    name: 'AppNav'
}
</script>
<template>
    <!-- //nav template done -->
    <header>
        <router-link :to="{ name: 'intro' }">
            <img src="../assets/logo.png" width="" alt="">

        </router-link>
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item">

                <router-link class="nav-link" activeClass="activeheader " :to="{ name: 'home' }">HOME <span
                        class="visually-hidden">(current)</span></router-link>


            </li>
            <!-- <li class="nav-item">

                <router-link class="nav-link" :to="{ name: 'portfolio' }">PROJECTS</router-link>
            </li> -->
            <li class="nav-item">
                <router-link class="nav-link" activeClass="activeheader " :to="{ name: 'about' }">ABOUT</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" activeClass="activeheader "
                    :to="{ name: 'contacts' }">CONTACTS</router-link>
            </li>

        </ul>

    </header>

</template>

<style lang="scss" scoped>
header {
    position: absolute;
    top: 0;
    // left: 0;

    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;

    img {
        top: 30px;
        width: 200px;
        position: absolute;
        background-color: #2b1055;
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
        // flex-direction: row;
        color: #fff;
        font-weight: 800;
        text-decoration: none;
        font-size: 1.2em;
        text-transform: uppercase;
        letter-spacing: 1px;

        position: absolute;
        top: 150px;
        right: 30px;


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