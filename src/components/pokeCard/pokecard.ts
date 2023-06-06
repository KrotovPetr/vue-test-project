import {defineComponent, PropType} from "vue";
import {TPokeCard} from "@/utils/types/pokeCardType";
import {Router} from "vue-router";
import {Store, useStore} from "vuex";

export default defineComponent({
    name: "PokeCard",

    setup() {
        const store: Store<any> = useStore();

        const toPokemonPage: (router: Router, data: TPokeCard) => void = (router: Router, data: TPokeCard) =>{
            store.dispatch("moduleMain/updatePokemonData", {name: data.name, link: data.url});
            router.push('/pokemon/'+ data.name)
        }

        return {
            toPokemonPage
        };
    },

    props: {
        data: {
            type: Object as PropType<TPokeCard>,
            required: true,
        },
    },
})