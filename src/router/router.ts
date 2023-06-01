import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import PokemonView from "@/views/Pokemon/PokemonView.vue";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/pokemon',
        component: PokemonView,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;