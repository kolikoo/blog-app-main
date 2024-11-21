import { data } from "@/data";
import { useTranslation } from "react-i18next";

export const useTranslatedData = () => {
  const { t } = useTranslation();

  const translatedData = data.map((dt) => ({
    id: dt.id,
    title: t(`home.books.${dt.title}.title`),
    author: t(`home.books.${dt.title}.author`),
    description: t(`home.books.${dt.title}.description`),
  }));

  return translatedData;
};
