import { useTranslation } from "react-i18next";

const useCurrentLang = () => {
  const { i18n } = useTranslation();
  return i18n.language;
};

export default useCurrentLang;
