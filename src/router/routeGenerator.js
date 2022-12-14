import routes from '@/router/routes';
import { localesWithoutEn } from '@/locales';

const generateRoute = (value, lang, isChild = false) => {
  const newRoute = {
    ...value,
    ...(!isChild && { path: `${lang ? '/' : ''}${lang}${value.path[lang || 'en']}` }),
    ...(isChild && { path: value.path[lang || 'en'] }),
    ...(value.redirect && { redirect: { name: `${lang || 'en'}-${value.redirect.name}` } }),
    name: `${lang || 'en'}-${value.name}`,
  };

  if (value.children && value.children.length) {
    newRoute.children = value.children
      .map((item) => generateRoute(item, true));
  }

  return newRoute;
};

export default localesWithoutEn.flatMap((lang) => (
  [
    ...routes.map((route) => generateRoute(route, lang)),
  ]
));
