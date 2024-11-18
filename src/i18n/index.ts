import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerKa from "@/i18n/ka/header.json";
import headerEn from "@/i18n/en/header.json";
import footerKa from "@/i18n/ka/footer.json";
import footerEn from "@/i18n/en/footer.json";
import authKa from "@/i18n/ka/auth.json";
import authEn from "@/i18n/en/auth.json";
import registerKa from "@/i18n/ka/register.json";
import registerEn from "@/i18n/en/register.json";
import homeKa from "@/i18n/ka/home.json";
import homeEn from "@/i18n/en/home.json";

const options = {
  order: ["path"],
  lookupFromPathIndex: 0,
};
const lngDetector = new LanguageDetector();
const getInitialLanguage = () => {
  const pathLanguage = window.location.pathname.split("/")[1] || "ka";
  console.log(pathLanguage);
  return pathLanguage === "ka" ? "ka" : "en";
};

i18n
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: {
          header: headerKa,
          footer: footerKa,
          auth: authKa,
          register: registerKa,
          home: homeKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          auth: authEn,
          register: registerEn,
          home: homeEn,
        },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
