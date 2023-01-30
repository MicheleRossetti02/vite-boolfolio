import { createRouter, createWebHistory } from 'vue-router'
import IntroView from './views/IntroView.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import PortfolioView from './views/PortfolioView.vue'
import SingleProjectView from './views/SIngleProjectView.vue'
import ContactsView from './views/ContactsView.vue'
import NotFoundView from './views/NotFoundView.vue'

// 2 define routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        /* All routes here */
        {

            path: '/',
            name: 'intro',
            component: IntroView

        },
        {

            path: '/home',
            name: 'home',
            component: HomeView

        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioView
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProjectView
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