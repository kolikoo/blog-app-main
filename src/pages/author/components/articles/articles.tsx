import { useTranslatedData } from "@/i18n/translatedData";
import Blogs from "@/pages/home/components/blogs";
const Articles: React.FC<{ authorName: string | undefined }> = ({
  authorName,
}) => {
  const translatedData = useTranslatedData();
  const articles = translatedData.filter((data) => data.author == authorName);
  return (
    <div className="mt-6">
      <Blogs data={articles} />
    </div>
  );
};
export default Articles;
