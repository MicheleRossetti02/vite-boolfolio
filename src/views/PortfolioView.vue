<script>
import AppBanner from '../components/AppBanner.vue';

import PostList from '../components/ProjectList.vue';
export default {
    name: 'PortfolioView',
    components: { AppBanner, PostList },
    data() {
        return {
            pageTitle: 'Portfolio'
        }
    }
}
</script>

<template>
    <AppBanner :title="pageTitle" />
    <PostList></PostList>
</template>


<style lang="scss" scoped>

</style>