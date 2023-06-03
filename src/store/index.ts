import { createStore } from 'vuex';
import moduleMain from "@/store/modules/module";

export default createStore({
    modules: {
        moduleMain,
    },
});