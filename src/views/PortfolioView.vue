<script>
import AppBanner from '../components/AppBanner.vue';
import AppMain from '../components/AppMain.vue';
export default {
    name: 'PortfolioView',
    components: { AppBanner, AppMain },
    data() {
        return {
            pageTitle: 'Portfolio'
        }
    }
}
</script>

<template>
    <AppBanner :title="pageTitle" />
    <AppMain></AppMain>
</template>


<style lang="scss" scoped>

</style>