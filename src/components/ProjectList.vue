<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            projects: null,
            base_api_url: 'http://127.0.0.1:8001',
            loading: true,
            error: null,

        }
    },
    methods: {
        getProjects(url) {
            // axios call to get projects
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.response);
                    this.projects = response.data.response;
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
            this.getProjects(url)
        },
        nextPage(url) {
            console.log(url)
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
        // console.log(this.getProjects);
    }

}

</script>

<template>

    <section class="vue-home pt-5" id="projects">
        <div class="container">
            <h2 class="text-center my-4">PROJECT LIST:</h2>
            <template v-if="projects">
                <div class="row g-4">
                    <div class="col-xs-12 col-sm-6 col-md-4 text-c" v-for="project in projects.data">
                        <div class="proj-imgbx border-0 shadow-sm ">

                            <img class="rounded-0" :src="getImagePath(project.cover_image)" alt="">

                            <div class="text proj-txtx ">
                                <p>
                                    {{ project.project_link }}
                                </p>
                                <p>Read more:
                                </p>
                                <div class="card-body social-icon">
                                    <a :href="project.source_code"><img src="../assets/github.svg" alt="" /></a>

                                </div>
                                <!-- <h2>{{ project.source_code }}</h2> -->
                                <!-- <h4>{{ project.source_code }}</h4> -->

                            </div>


                        </div>
                        <div class="card-footer text-muted">
                            <div class="category">
                                <strong>Category: </strong>
                                <span v-if="project.category">
                                    {{ project.category.name }}
                                </span>
                                <span v-else>Uncategorized</span>
                            </div>
                            <div class="technologies">
                                <strong>technologies: </strong>
                                <template v-if="project.technologies.length > 0">
                                    <span v-for="technology in project.technologies">
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

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            projects.current_page
                        }}</a></li>

                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </template>
            <div v-else>
                <p> No projects here </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.proj-imgbx {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 24px;

    img {
        height: 250px;
    }
}

.proj-imgbx::before {
    content: "";
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    opacity: 0.85;
    position: absolute;
    width: 100%;
    height: 0;
    transition: 0.4s ease-in-out;
}

.proj-imgbx:hover::before {
    height: 100%;
}

.proj-txtx {
    position: absolute;
    text-align: center;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
    opacity: 0;
    width: 100%;
}

.proj-imgbx:hover .proj-txtx {
    top: 50%;
    opacity: 1;
}

.proj-txtx h4 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1.1em;
}

.proj-txtx span {
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.8px;
}


.social-icon {
    display: inline-block;
    margin-left: 14px;

}

.social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #fff;
    color: #fff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
}

.social-icon a:hover::before {
    transform: scale(1);
}

.social-icon a img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.social-icon a:hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
}
</style>

