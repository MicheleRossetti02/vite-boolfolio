<script>
import AppNav from './components/AppNav.vue'
import IntroView from './views/IntroView.vue';

import AppBanner from './components/AppBanner.vue'
import AppFooter from './components/AppFooter.vue';



export default {
    components: {
        AppNav,

        AppBanner,
        AppFooter


    },

}




</script>

<template>
    <router-view>

        <!-- <AppNav /> -->
        <!-- <IntroView /> -->


        <!-- <AppBanner></AppBanner>
    <AppMain></AppMain> -->
        <!-- <AppFooter /> -->

    </router-view>


</template>

<style lang="scss">
@use './styles/general.scss';
</style>