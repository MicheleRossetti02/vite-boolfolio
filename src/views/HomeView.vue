<script>
export default {
    name: 'HomeView'
}
</script>


<template>
    <section class="home_page d-flex align-items-center">
        <div class="container text-center px-5">
            <div class="box border rounded-3 py-5">


                <router-link class="btn btn-danger btn-sm" :to="{ name: 'blog' }">Check it out</router-link>
            </div>
        </div>
    </section>



</template>



<style lang="scss" scoped>
.home_page {
    background-color: black;
    color: beige;
    padding: 5rem 0;
}
</style>