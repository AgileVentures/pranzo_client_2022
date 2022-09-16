import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { SE } from "./locales/SE";
import { GB } from "./locales/GB";

i18n.use(initReactI18next).init({
  resources: {
    GB: GB,
    SE: SE,
  },
  lng: "GB",
  fallbackLng: "GB",
  react: {
    useSuspense: true, 
  },
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
