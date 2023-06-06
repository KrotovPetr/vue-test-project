import {defineComponent} from "vue";
import {Router} from "vue-router";

export default defineComponent({
    name: "ErrorView",
    data() {
        return {
            imagePath: require('@/assets/pokeball.png')
        }
    },
    methods: {
        toHome(router: Router){
            router.push('/')
        }
    }
})