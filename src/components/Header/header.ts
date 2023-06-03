import {defineComponent} from "vue";
import {Router} from "vue-router";
export default defineComponent({
    name: "TopHeader",
    data(){
        return {
            imageSrc: "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/284377/pokeapi_1024.png" as string,
        };
    },
    methods: {
        toHomeView(router: Router) {
            router.push(`/`);
        }
    }
})