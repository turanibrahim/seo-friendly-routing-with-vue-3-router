import { createApp } from 'vue';
import './style.css';
import i18n from '@/plugins/i18n';
import router from '@/router/index';
import App from './App.vue';

const app = createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app');

export default app;
