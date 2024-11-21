import { Button } from "@/components/ui/button";
import useCurrentLang from "@/i18n/currentLang";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
const Story: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <div className="bg-slate-500 p-4 rounded-xl">
        <h1 className="text-lg">{t("about.story_title")}</h1>
        <p>
          <Trans>about.story_paragraph</Trans>
        </p>
      </div>
      <h1 className="text-center text-xl mt-4">
        <Trans>about.join_us_title</Trans>
      </h1>
      <Button asChild className="bg-cyan-600 mt-3 font-semibold uppercase">
        <Link to={`/${currentLang}/register`}>
          <Trans>about.get_started_button</Trans>
        </Link>
      </Button>
    </div>
  );
};
export default Story;