<script>

import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ContactsView',

    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;

            this.errors = {};

            console.log('name', this.name);
            console.log('email', this.email);
            console.log('message', this.message);

            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            axios.post(`${this.store.api_base_url}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                console.log(response);

                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';

                } else {
                    this.errors = response.data.errors
                }
                this.loading = false;

            })
        }
    }
}
</script>

<template>
    <section id="contact" class="contact mt-5">
        <div class="container my-3">
            <div class="row">
                <div class="col-sm-12 col-md-5 d-flex">
                    <img src=../assets/contact-img.svg alt="Contact Us" />

                </div>
                <div class="col-sm-12 col-md-7">
                    <h2 class="my-4">CONTACT ME:</h2>
                    <div v-if="success" class="alert alert-success text-start" role="alert">
                        Messaggio inviato con successo

                    </div>
                    <form @submit.prevent="sendForm" class="text-white ">
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" name="name" id="name" v-model="name" class="form-control"
                                placeholder="Mario Rossi" aria-describedby="fullNameHelper">
                            <small id="fullNameHelper" class="text-muted">Add your full name</small>
                        </div>
                        <p class="error" v-for="(error, index) in errors.name">
                            {{ error }}
                        </p>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" id="email" v-model="email" class="form-control"
                                placeholder="mario.rossi@example.com" aria-describedby="emailHelper">
                            <small id="emailHelper" class="text-muted">Add your email address</small>
                        </div>
                        <p class="error" v-for="(error, index) in errors.email">
                            {{ error }}
                        </p>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" name="message" id="message" v-model="message"
                                rows="5"></textarea>
                        </div>
                        <p class="error" v-for="(error, index) in errors.message">
                            {{ error }}
                        </p>

                        <button type="submit" class=" " :disabled="loading">{{
                            loading? 'Sending...': 'Contact Me'
                        }}</button>
                    </form>
                </div>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>
.contact form button {
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-top: 25px;
    border-radius: 0;
    position: relative;
    transition: 0.3s ease-in-out;
}

.contact {
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    padding: 60px 0 200px 0;

}

.error {
    color: red;
}

.container,
button {

    color: #fff;
    font-weight: 800;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 1px;

}
</style>