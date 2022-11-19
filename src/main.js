import { createApp } from 'vue';
import './style.css';
import i18n from '@/plugins/i18n';
import App from './App.vue';

const app = createApp(App)
  .use(i18n)
  .mount('#app');

export default app;
