import {defineComponent, Ref, ref, watch} from "vue";
import PokeCard from "@/components/pokeCard/PokeCard.vue";
import {useStore} from "vuex";
import {fetchPokemonsFunc} from "@/utils/functions/fetchPokemonsFunc";
import {TPokeCard} from "@/utils/types/pokeCardType";

export default defineComponent({
    name: "PokeList",
    components: {PokeCard},

    setup() {
        const store = useStore();
        const {size, page}: {size: number, page: number} = store.state.moduleMain;


        const pageSize: Ref<number> = ref(size);
        const current: Ref<number> = ref(page);
        const pokemonData: Ref<[] | TPokeCard[]>= ref([]);
        const pageCount:Ref<number> = ref(1);


        watch([pageSize, current], ([newPageSize, newCurrent], [oldPageSize, oldCurrent]) => {
            store.dispatch("moduleMain/setCurrentOptions", {pageSize: pageSize.value, pageNumber: current.value});
            fetchPokemons(newPageSize, newCurrent).catch(e=>console.error(e));
        });

        const fetchPokemons = async (pageSize: number, current: number) => {
                const result: {arr: TPokeCard[], count: number} = await fetchPokemonsFunc(pageSize, current);
                pokemonData.value = result.arr;
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