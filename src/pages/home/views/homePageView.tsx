import Blogs from "#/home/components/blogs";
import Author from "#/home/components/authors";
import { useTranslatedData } from "@/i18n/translatedData";

const HomePageView: React.FC = () => {
  const translatedData = useTranslatedData();
  const authors = translatedData.map((author) => ({
    id: author.id,
    author: author.author,
  }));

  return (
    <div className="flex justify-center items-start">
      <Blogs data={translatedData} />
      <Author authors={authors} />
    </div>
  );
};
export default HomePageView;
