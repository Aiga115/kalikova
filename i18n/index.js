import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import i18n from "i18next"
import ru from './locales/ru.json';
import en from './locales/en.json';

const options = {
    resources: {
        ru: {
            common: ru
        },
        en: {
            common: en
        }
    },
    fallbackLng: "ru",
    ns: ["common"],
    defaultNS: "common",

    react: {
        wait: false,
        bindI18n: "languageChanged loaded",
        bindStore: "added removed",
        nsMode: "default"
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options)

export default i18n;