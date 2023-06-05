import {defineComponent} from 'vue';
import {Store, useStore} from 'vuex';
import PokeDoc from "@/components/pokeDoc/PokeDoc.vue";
import {Router} from "vue-router";

export default defineComponent({
    name: "PokemonPage",
    components: {PokeDoc},
    data(){
        return {
            link1: "",
            currentPokemonData: null
        }
    },
    methods: {
        async fetchCurrentPokemonData(){
            this.currentPokemonData = await fetch("https://pokeapi.co/api/v2/pokemon-species/103/").then(data => data.json()).then(data => data);
            // console.log( await fetch("https://pokeapi.co/api/v2/pokemon-species/103/").then(data => data.json()).then(data => data));
        },

        toHome(router:Router){
            router.push('/');
        }
    },
    setup() {
        const store: Store<any> = useStore();
        const link = store.state.moduleMain.pokemonLink;

        return {
            link
        };
    },

    mounted() {
        this.fetchCurrentPokemonData();
    },



})