export default [
  {
    path: {
      tr: '/',
      en: '/',
    },
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: {
      tr: '/hakkimizda',
      en: '/about-us',
    },
    name: 'AboutPage',
    component: () => import('../pages/AboutPage.vue'),
  },
  {
    path: {
      tr: '/bize-ulasin',
      en: '/contact-us',
    },
    name: 'ContactUsPage',
    component: () => import('../pages/ContactUsPage.vue'),
  },
];
