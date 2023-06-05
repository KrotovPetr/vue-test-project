import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import './utils/styles/_commonStyles.module.scss';
import store from '@/store';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App)

app.use(store).use(router).use(Antd).mount('#app')
