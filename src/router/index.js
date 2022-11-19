import { createRouter, createWebHistory } from 'vue-router';
import routeGenerator from '@/router/routeGenerator';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeGenerator,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((res) => {
        setTimeout(() => {
          res({
            el: to.hash,
            behavior: 'smooth',
          });
        }, 100);
      });
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

export default router;
