<script>
import { store } from '../store.js'
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                    <ul class=" link-page navbar-nav mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" :href="store.gitHub_link" aria-current="page" target="_blank">GitHub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="store.linkedinLink" aria-current="page"
                                target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    box-shadow: 0px -2px 10px 3px rgba(0, 0, 0, 0.7);


    :hover.nav-link {
        scale: 1.2;
        color: blueviolet;
    }

    .link-page {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;

    }
}
</style>