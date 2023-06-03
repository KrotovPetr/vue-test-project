import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import './utils/styles/_commonStyles.module.scss';
import store from '@/store';

const app = createApp(App)

app.use(store).use(router).mount('#app')
