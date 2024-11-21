import { authorDetailed } from "@/data";
import { useTranslation } from "react-i18next";

export const useTranslatedDataAuthor = () => {
  const { t } = useTranslation();
  const translatedDataAuthor = authorDetailed.map((dt) => ({
    id: dt.id,
    author: t(`author.authors.${dt.title}.author`),
    profession: t(`author.authors.${dt.title}.profession`),
    professionDescription: t(
      `author.authors.${dt.title}.professionDescription`,
    ),
    followers: parseInt(t(`author.authors.${dt.title}.followers`), 10),
    following: parseInt(t(`author.authors.${dt.title}.following`), 10),
    biography: t(`author.authors.${dt.title}.biography`),
  }));

  return translatedDataAuthor;
};
