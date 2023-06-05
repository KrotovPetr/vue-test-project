import {defineComponent, Ref, ref, watch} from "vue";
import PokeCard from "@/components/pokeCard/PokeCard.vue";
import {useStore} from "vuex";

export default defineComponent({
    name: "PokeList",
    components: {PokeCard},

    setup() {
        const store = useStore();
        const {size, page}: {size: number, page: number} = store.state.moduleMain;


        const pageSize: Ref<number> = ref(size);
        const current: Ref<number> = ref(page);
        const pokemonData: Ref<[] | any>= ref([]);
        const pageCount:Ref<number> = ref(1);


        watch([pageSize, current], ([newPageSize, newCurrent], [oldPageSize, oldCurrent]) => {
            store.dispatch("moduleMain/setCurrentOptions", {pageSize: pageSize.value, pageNumber: current.value});
            fetchPokemons(newPageSize, newCurrent).catch(e=>console.error(e));
        });

        const fetchPokemons = async (pageSize: number, current: number) => {
                const idArea: number = (current-1)*pageSize;
                const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${idArea}`,  {
                    method: 'GET',
                    redirect: 'follow',
                })
                    .then(response => response.json())
                    .then(result => result)
                    .catch(error => console.log('error', error));
                pokemonData.value = result.results.map((pokemon: any) => {
                    return { id: Date.now(), ...pokemon };
                });

                pageCount.value = result.count;

        };

        fetchPokemons(size, page).catch(e=>console.error(e));

        return {
            pageSize,
            current,
            pokemonData,
            pageCount
        };
    },



})