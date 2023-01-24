import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import BlogView from './views/BlogView.vue'
import SingleSongView from './views/SingleSongView.vue'
import ContactsView from './views/ContactsView.vue'
import NotFoundView from './views/NotFoundView.vue'

// 2 define routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        /* All routes here */
        {
            path: '/',
            name: 'home',
            component: HomeView

        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView
        },
        {
            path: '/blog/:slug',
            name: 'single-song',
            component: SingleSongView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },
    ]
})

// 3. export the router
export { router }