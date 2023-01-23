
<script>
import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'SingleSongView',
    components: { AppBanner },
    data() {
        return {
            song: null,
            loading: true,
            api_base_url: 'http://localhost:8001'
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.api_base_url + '/api/songs/' + this.$route.params.slug
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.song = response.data.results
                    this.loading = false
                } else {
                    /* TODO: handle the not found song  
                    404 
                    */
                    // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
    }
}
</script>

<template>
    <AppBanner :title="$route.params.slug" />
    <div class="single-song" v-if="song">
        <img class="img-fluid w-100" :src="api_base_url + '/storage/' + song.cover_image" :alt="song.title">
        <div class="container">
            <h2>
                {{ song.title }}
            </h2>
            <div class="content">
                {{ song.album }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>