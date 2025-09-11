import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptHome from "./locales/pt/home.json";
import enSignIn from "./locales/en/sign-in.json";
import ptSignIn from "./locales/pt/sign-in.json";
import dashboard from "./locales/en/dashboard.json";
import portfolio from "./locales/en/portfolio.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        dashboard: dashboard,
        portfolio: portfolio,
        "sign-in": enSignIn,
      },
      pt: {
        dashboard: dashboard,
        home: ptHome,
        "sign-in": ptSignIn,
      },
    },
  });

export default i18n;
