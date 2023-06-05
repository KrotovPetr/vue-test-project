import {defineComponent, watch} from 'vue';
import {mapState, Store, useStore} from 'vuex';
import PokeDoc from "@/components/pokeDoc/PokeDoc.vue";
import {Router} from "vue-router";

export default defineComponent({
    name: "PokemonPage",
    components: {PokeDoc},

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
        console.log('р')
        store.dispatch("moduleMain/fetchCurrentPokemonData", name);
    }

})