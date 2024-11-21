import About from "#/about/components/about";
import Offer from "#/about/components/offer";
import Story from "#/about/components/story";
const AboutView: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[900px]">
        <About />
        <Offer />
        <Story />
      </div>
    </div>
  );
};

export default AboutView;
