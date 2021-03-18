import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// @Constants
import resources from '../constants/translations';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
