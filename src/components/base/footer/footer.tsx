import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-auto w-full h-20 bg-slate-950 flex justify-center items-center text-slate-300 p-7">
      {t("footer.footerTitle")}
    </footer>
  );
};
export default Footer;
