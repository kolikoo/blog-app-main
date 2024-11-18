import { Trans, useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  console.log(t("footer.footerTitle"));
  return (
    <footer className="mt-auto w-full h-20 bg-slate-950 flex justify-center items-center text-slate-300">
      <Trans>footer.footerTitle</Trans>
    </footer>
  );
};
export default Footer;
