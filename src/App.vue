<script>
import AppNav from './components/AppNav.vue'
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

    <AppNav />
    <!-- <AppBanner></AppBanner>
    <AppMain></AppMain> -->
    <router-view></router-view>
    <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>