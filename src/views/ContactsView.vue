<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactsView',
    components: { AppBanner },
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
    <AppBanner title="Contacts Page" />
    <div class="container">

        <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci optio, tempore maiores sit
            asperiores
            sed est nulla esse quos quam laudantium, voluptatibus minus officiis assumenda. Ex vitae eos earum.
        </p>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo

        </div>
        <form @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelper">
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
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"></textarea>
            </div>
            <p class="error" v-for="(error, index) in errors.message">
                {{ error }}
            </p>

            <button type="submit" class="btn btn-primary" :disabled="loading">{{
                loading? 'Sending...': 'Contact Me'
            }}</button>
        </form>
    </div>
</template>


<style lang="scss" scoped>
.error {
    color: red;
}
</style>