import {defineComponent} from "vue";
import {v4 as uuidv4} from "uuid";
import {mapState} from "vuex";
import PokeDescriptionCard from "@/components/pokeDescriptionCard/PokeDescriptionCard.vue";

export default defineComponent({
    name: "PokeDoc",
    components: {PokeDescriptionCard},
    computed: {
        ...mapState('moduleMain', ['currentPokemonData']),
    },

    methods: {
        generateUuid(nameObj: string): string{
            return uuidv4();
        },

    }
})