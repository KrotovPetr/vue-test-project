import {defineComponent, PropType} from "vue";
// @ts-ignore
import {v4 as uuidv4} from "uuid";

export default defineComponent({
    name: "PokeDoc",
    props: {
        data: {type: Object as PropType<any>, required: true}
    },
    methods: {
        generateUuid(nameObj: any): string{
            console.log(name)
            return uuidv4();
        },

    }
})