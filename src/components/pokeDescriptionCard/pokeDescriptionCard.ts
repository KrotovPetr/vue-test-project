import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
    name: "PokeDescriptionCard",
    computed: {
        ...mapState('moduleMain', ['currentPokemonData']),
    }
})