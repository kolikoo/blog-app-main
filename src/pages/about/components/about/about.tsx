import img from "!/placeholder.svg";
import { Trans, useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-4xl text-center">{t("about.about_title")}</h1>
      <p className="text-gray-400 text-center mt-3">
        <Trans>about.about_subtitle</Trans>
      </p>
      <div className="flex mt-8 justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl">
            <Trans>about.mission_title</Trans>
          </h1>
          <p className="text-gray-400 mt-1">
            <Trans>about.mission_description</Trans>
            technology.
          </p>
        </div>
        <img src={img} className="w-[400px] rounded-3xl" />
      </div>
    </div>
  );
};
export default About;
