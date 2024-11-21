import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { offers } from "@/data";
import { useTranslation } from "react-i18next";
const OfferCarousel: React.FC = () => {
  const { t } = useTranslation();
  const data = offers.map((offer) => ({
    title: t(`about.offers.${offer.title}.title`),
    description: t(`about.offers.${offer.title}.description`),
    img: offer.img,
  }));
  return (
    <Carousel className="mt-10 z-0">
      <CarouselContent className="gap-2">
        {data.map((offer, index) => (
          <CarouselItem
            className="p-4 basis-1/3 bg-slate-900 rounded-xl text-xl flex justify-center items-center flex-col gap-3"
            key={index}
          >
            <Avatar>
              <AvatarImage src={offer.img} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-gray-400 font-semibold">{offer.title}</h1>
            <p className="text-base">{offer.description}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default OfferCarousel;
