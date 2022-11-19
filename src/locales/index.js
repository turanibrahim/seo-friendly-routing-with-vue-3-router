import en from './en.json';
import tr from './tr.json';

const messages = {
  en,
  tr,
};

export const locales = Object.keys(messages);
export const localesWithoutEn = Object
  .keys(messages)
  .map((key) => (key === 'en' ? '' : key));

export default messages;
