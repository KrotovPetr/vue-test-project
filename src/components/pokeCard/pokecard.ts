import {defineComponent, PropType} from "vue";
import {PokeCard} from "@/utils/types/pokeCardType";
import {Router} from "vue-router";
export default defineComponent({
    name: "PokeCard",
    data(){
        return {

        }
    },
    methods: {
        toPokemonPage(router: Router, name: string){
            console.log(1)
            router.push('/pokemon/'+ name)
        }
    },
    props: {
        data: {
            type: Object as PropType<PokeCard>,
            required: true,
        },
    },
})