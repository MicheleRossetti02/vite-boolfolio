<script>
import AppNav from './components/AppNav.vue'
import AppBanner from './components/AppBanner.vue'
import AppFooter from './components/AppFooter.vue';
import AppAbout from './components/AppAbout.vue';
import ProjectList from './components/ProjectList.vue';
import AppContact from './components/AppContact.vue';



export default {
    components: {
        AppNav,
        AppBanner,
        AppFooter,
        AppAbout,
        ProjectList,
        AppContact
    },

}




</script>

<template>
    <!-- NAVBAR -->
    <AppNav />
    <!-- BANNER -->
    <AppBanner />
    <!-- ABOUT / SKILLS -->
    <AppAbout />
    <!-- PROJECTS -->
    <ProjectList />
    <!-- CONTACT -->
    <AppContact />
    <!-- FOOTER -->
    <AppFooter />



</template>

<style lang="scss">
@use './styles/general.scss';
</style>