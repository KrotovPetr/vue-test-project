import {defineComponent, ref, watch} from "vue";
import PokeCard from "@/components/pokeCard/PokeCard.vue";
import {fetchPokemons} from "@/utils/functions/pokemonListFetch";

export default defineComponent({
    name: "PokeList",
    components: {PokeCard},

    setup() {
        const pageSize = ref(10);
        const current = ref(1);
        const pokemonData = ref([]);
        const pageCount = ref(1);

        watch([pageSize, current], ([newPageSize, newCurrent], [oldPageSize, oldCurrent]) => {
            fetchPokemons(newPageSize, newCurrent).catch(e=>console.error(e));
        });

        const fetchPokemons = async (pageSize: any, current: any) => {
                const requestOptions: any = {
                    method: 'GET',
                    redirect: 'follow',
                };
                const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${current}`, requestOptions)
                    .then(response => response.json())
                    .then(result => result)
                    .catch(error => console.log('error', error));

                pokemonData.value = result.results.map((pokemon: any) => {
                    return { id: Date.now(), ...pokemon };
                });

                // pageCount.value = Math.ceil(result.count/pageSize);
                pageCount.value = result.count;

        };

        fetchPokemons(pageSize.value, current.value).catch(e=>console.error(e));

        return {
            pageSize,
            current,
            pokemonData,
            pageCount
        };
    },

})