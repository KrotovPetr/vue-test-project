import {defineComponent, PropType} from "vue";
// @ts-ignore
import {v4 as uuidv4} from "uuid";
import {mapState} from "vuex";

export default defineComponent({
    name: "PokeDoc",
    computed: {
        ...mapState('moduleMain', ['currentPokemonData']),
    },

    methods: {
        generateUuid(nameObj: any): string{
            return uuidv4();
        },

    },

    mounted() {
        console.log(2);
    }
})