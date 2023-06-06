import {defineComponent} from 'vue';
import {mapState, Store, useStore} from 'vuex';
import PokeDoc from "@/components/pokeDoc/PokeDoc.vue";
import {Router} from "vue-router";
import CustomSpinner from "@/components/customSpinner/CustomSpinner.vue";


export default defineComponent({
    name: "PokemonPage",
    components: {PokeDoc, CustomSpinner},

    methods: {
        toHome(router:Router){
            router.push('/');
        }

    },

    computed: {
        ...mapState('moduleMain', ['currentPokemonData']),
    },

    mounted(){
        const store: Store<any> = useStore();
        const name: string = this.$route.path.split("/")[2];
        store.dispatch("moduleMain/fetchCurrentPokemonData", name);
    },

    unmounted() {
        const store: Store<any> = useStore();
        store.dispatch("moduleMain/clearPokemonData");
    }

})