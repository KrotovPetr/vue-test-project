import {defineComponent} from "vue";
import PokeCard from "@/components/pokeCard/PokeCard.vue";

export default defineComponent({
    name: "PokeList",
    components: {PokeCard},
    data() {
        return {
            pokemonData: []
        }
    },
    methods:{
        async fetchPokemons() {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow',

                };
                //@ts-ignore
                const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=100", requestOptions)
                    .then(response => response.json())
                    .then(result => result)
                    .catch(error => console.log('error', error));
                console.log(result.results)
                this.pokemonData = result.results.map((pokemon: any)=>{
                    return {id: Date.now(), ...pokemon}
                });

            } catch (e) {
                alert('Ошибка')
            } finally {
                console.log('finally')
            }
        }
    },

    mounted() {
        this.fetchPokemons();
    }
})