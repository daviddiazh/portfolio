import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeaderJSON from '../locale/header/en.json'
import esHeaderJSON from '../locale/header/es.json'
import enHomeJSON from '../locale/home/en.json'
import esHomeJSON from '../locale/home/es.json'
import enProjectsJSON from '../locale/projects/en.json'
import esProjectsJSON from '../locale/projects/es.json'

i18n.use(initReactI18next).init({
 resources: {
   en: {
      home: enHomeJSON,
      header: enHeaderJSON,
      projects: enProjectsJSON,
   },
   es: {
      home: esHomeJSON,
      header: esHeaderJSON,
      projects: esProjectsJSON,
   },
 },
 lng: localStorage.getItem('lng') || 'en',
 fallbackLng: 'en',
});
