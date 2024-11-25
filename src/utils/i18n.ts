import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeaderJSON from '../locale/header/en.json'
import esHeaderJSON from '../locale/header/es.json'
import enHomeJSON from '../locale/home/en.json'
import esHomeJSON from '../locale/home/es.json'

i18n.use(initReactI18next).init({
 resources: {
   en: {
      home: enHomeJSON,
      header: enHeaderJSON,
   },
   es: {
      home: esHomeJSON,
      header: esHeaderJSON,
   },
 },
 lng: localStorage.getItem('lng') || 'en',
 fallbackLng: 'en',
});
