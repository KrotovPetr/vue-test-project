import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import PokemonView from "@/views/Pokemon/PokemonView.vue";
import ErrorView from "@/views/Error/ErrorView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/pokemon/:name',
        component: PokemonView,
    },
    {
        path: '/:catchAll(.*)',
        component: ErrorView
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;