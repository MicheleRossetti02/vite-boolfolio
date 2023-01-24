<script>
import AppBanner from '../components/AppBanner.vue';
import AppMain from '../components/AppMain.vue';
export default {
    name: 'BlogView',
    components: { AppBanner, AppMain },
    data() {
        return {
            pageTitle: 'Blog'
        }
    }
}
</script>

<template>
    <AppBanner :title="pageTitle" />

</template>


<style lang="scss" scoped>

</style>