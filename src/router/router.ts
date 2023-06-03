import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import PokemonView from "@/views/Pokemon/PokemonView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/pokemon/:name',
        component: PokemonView,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;