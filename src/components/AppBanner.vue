<script>
export default {
    name: 'AppBanner',
    props: ['title']
}
</script>

<template>
    <div class="banner  text-center">
        <div class="container">
            <h1 class=" mb-0 text-uppercase">{{ title }}</h1>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.banner {



    // display: flex;
    // justify-content: center;
    // align-items: center;

    h1 {
        color: #fff;
        font-weight: 800;
        text-decoration: none;
        // font-size: 1.2em;
        text-transform: uppercase;
        letter-spacing: 1px;

    }
}
</style>