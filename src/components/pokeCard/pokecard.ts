import {defineComponent, PropType} from "vue";
import {PokeCard} from "@/utils/types/pokeCardType";
import {Router} from "vue-router";
import {Store, useStore} from "vuex";
import router from "@/router/router";
export default defineComponent({
    name: "PokeCard",
    data(){
        return {

        }
    },
    setup() {
        const store: Store<any> = useStore();

        const toPokemonPage: (router: Router, data: PokeCard) => void = (router: Router, data: PokeCard) =>{
            store.dispatch("moduleMain/updatePokemonData", {name: data.name, link: data.url});
            router.push('/pokemon/'+ data.name)
        }

        return {
            toPokemonPage
        };
    },

    props: {
        data: {
            type: Object as PropType<PokeCard>,
            required: true,
        },
    },
})