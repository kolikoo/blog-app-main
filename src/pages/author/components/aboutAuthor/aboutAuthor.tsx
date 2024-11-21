import { useParams } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { useTranslatedDataAuthor } from "@/i18n/trasnaltedDataAuthor";

const AboutAuthor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const translatedDataAuthor = useTranslatedDataAuthor();
  const author = translatedDataAuthor.find((author) => author.id == id);
  const abbrName = author
    ? author.author
        .split(" ")
        .map((name) => name[0].toUpperCase())
        .join("")
    : "";
  return (
    <div className="bg-gray-400 p-4 rounded-xl w-full flex items-center gap-20 ">
      <div className="w-16 h-16 rounded-[50%] bg-gray-950 flex justify-center items-center font-semibold border-2 border-red-700">
        {abbrName}
      </div>
      <div>
        <h1 className="text-white text-2xl">{author?.author}</h1>
        <p>{author?.profession}</p>
        <p>{author?.professionDescription}</p>
        <HoverCard>
          <HoverCardTrigger className="hover:text-red-600 underline cursor-pointer">
            Social Media stats
          </HoverCardTrigger>
          <HoverCardContent>
            followers - {author?.followers} following - {author?.following}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
export default AboutAuthor;
