import { useI18n } from 'vue-i18n';

export default () => {
  const { locale } = useI18n();

  const customTo = (to) => ({
    ...to,
    ...(to.name && { name: `${locale.value}-${to.name}` }),
  });

  return {
    customTo,
  };
};
