import { useParams } from "react-router-dom";
import AboutAuthor from "#/author/components/aboutAuthor";
import Articles from "#/author/components/articles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslatedData } from "@/i18n/translatedData";
import { useTranslatedDataAuthor } from "@/i18n/trasnaltedDataAuthor";
import AboutDetail from "../components/aboutDetail";
const AuthorView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const translatedData = useTranslatedData();
  const translatedDataAuthor = useTranslatedDataAuthor();
  const authorObj = translatedData.find((author) => author.id == id);
  const newAuthor = translatedDataAuthor.find(
    (author) => author.author == authorObj?.author,
  );
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1200px]">
        <AboutAuthor />
        <Tabs defaultValue="articles" className="w-full mt-3">
          <TabsList className="w-full">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="articles">
            <Articles authorName={authorObj?.author} />
          </TabsContent>
          <TabsContent value="about">
            <AboutDetail author={newAuthor} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default AuthorView;
