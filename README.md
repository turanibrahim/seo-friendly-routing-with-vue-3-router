# SEO Friendly Routing With Vue 3 Router

**Live Demo**

https://seo-friendly-routing-with-vue-3-router.ibrahimturan.com/

With this project aims to improve SEO score with using localized route paths. With this project, you will have;

- English as default language (without lang prefix on the URL)
- Different url paths for every page you have based on locale
- Locale based dynamic links (When user change locale link paths will update automatically)
- Have language prefix on URL if users use different language

**Requirements**

* Vite 3
* Vue 3
* Vue Router
* Vue i18n
* SASS
* Eslint

**Installation**

```bash
npm install
```

## Rules

* Always define route with object `path`. This object should contain locales as key and localized path as value
* Always use `CustomLink` component as a `RouterLink`
* Always use `name` when you define `to` prop to `CustomLink` component.
* If you use `redirect` inside route, you have to use name of redirected route.
* If you need current to create to object from name always use `useCustomLink` composable.
* If you add new locale to project, don't forget to add new path property to routes.
