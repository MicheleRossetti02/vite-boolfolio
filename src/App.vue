<script>
import AppNav from './components/AppNav.vue'
import AppBanner from './components/AppBanner.vue'



export default {
    components: {
        AppNav,
        AppBanner,


    },
}
</script>

<template>

    <AppNav></AppNav>
    <!-- <AppBanner></AppBanner>
    <AppMain></AppMain> -->
    <router-view></router-view>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>