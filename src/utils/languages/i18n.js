import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Our_friends: 'Our friends',
        Closed: 'Closed',
        Time: 'Time',
        Adress: 'Adress',
        Email: 'Email',
        Phone: 'Phone',
        day_and_night: 'day and night',
        on_the_website: 'on the website',
        MN: 'MN',
        TU: 'TU',
        WE: 'WE',
        TH: 'TH',
        FR: 'FR',
        SA: 'SA',
        SU: 'SU',
      },
    },
    ukr: {
      translation: {
        Our_friends: 'Наші друзі',
        Closed: 'Зачинено',
        Time: 'Часи роботи',
        Adress: 'Адреса',
        Email: 'Пошта',
        Phone: 'Телефон',
        day_and_night: 'вдень та вночі',
        on_the_website: 'на сайті',
        MN: 'ПН',
        TU: 'ВТ',
        WE: 'СР',
        TH: 'ЧТ',
        FR: 'ПТ',
        SA: 'СБ',
        SU: 'НД',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
