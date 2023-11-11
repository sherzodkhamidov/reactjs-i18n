// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from './components/locales/uzbek.json'
import ruTranslation from './components/locales/russian.json'

const lang = localStorage.getItem('lang') || "uz";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
        },
        lng: lang,
        fallbackLng: lang,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;