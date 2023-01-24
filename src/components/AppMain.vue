<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            songs: null,
            base_api_url: 'http://127.0.0.1:8000',
            loading: true,
            error: null,

        }
    },
    methods: {
        getSongs(url) {
            // axios call to get songs
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.response);
                    this.songs = response.data.response;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false

                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder_600.png'
        },
        prevPage(url) {
            console.log(url)
            this.getSongs(url)
        },
        nextPage(url) {
            console.log(url)
            this.getSongs(url)
        }
    },
    mounted() {
        this.getSongs(this.base_api_url + '/api/songs');
    }

}

</script>

<template>

    <section class="vue-home pt-5">
        <div class="container">
            <template v-if="songs">
                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <div class="col" v-for="song in songs.data">
                        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">

                            <img class="card-image rounded-top" :src="getImagePath(song.cover_image)" alt="">
                            <div class="card-body">
                                <h2>{{ song.title }}</h2>
                                <h4>{{ song.album }}</h4>
                                <p>
                                    {{ song.artist }}
                                </p>
                                <router-link :to="{ name: 'single-song', params: { slug: song.slug } }">Read more
                                </router-link>


                            </div>
                            <div class="card-footer text-muted">
                                <div class="category">
                                    <strong>Category: </strong>
                                    <span v-if="song.category">
                                        {{ song.category.name }}
                                    </span>
                                    <span v-else>Uncategorized</span>
                                </div>
                                <div class="technologies">
                                    <strong>technologies: </strong>
                                    <template v-if="song.technologies.length > 0">
                                        <span v-for="technology in song.technologies">
                                            #{{ technology.name }}
                                        </span>
                                    </template>
                                    <template v-else>
                                        <span>No technologies.</span>
                                    </template>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="songs.prev_page_url" @click="prevPage(songs.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            songs.current_page
                        }}</a></li>

                        <li class="page-item" v-if="songs.next_page_url" @click="nextPage(songs.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </template>
            <div v-else>
                <p> No songs here </p>
            </div>
        </div>
    </section>
</template>

<style>

</style>