import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  console.log(t("register.signup"));
  const currentLang = useCurrentLang();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[480px]"
      onClick={submitForm}
    >
      <h1 className="text-3xl">
        <Trans>register.signup</Trans>
      </h1>
      <p>
        <Trans>register.create</Trans>
      </p>
      <div>
        <label>
          <Trans>register.name</Trans>
        </label>
        <Input placeholder="John doe" />
      </div>
      <div>
        <label>
          <Trans>register.email</Trans>
        </label>
        <Input placeholder="john@example.com" />
      </div>
      <div>
        <label>
          <Trans>ჩაწერეთ პაროლი</Trans>
        </label>
        <Input placeholder="Enter password" />
      </div>
      <div>
        <label>
          <Trans>გაიმეორეთ პაროლი</Trans>
        </label>
        <Input placeholder="repeat password" />
      </div>
      <Button className="bg-blue-600 font-bold text-white">
        <Trans>register.signupBtn</Trans>
      </Button>
      <p>
        <Trans>register.acc</Trans>{" "}
      </p>
      <Link
        to={`/${currentLang}/login`}
        className="text-blue-600 font-bold hover:underline"
      >
        <Trans>register.login</Trans>
      </Link>
    </form>
  );
};
export default RegistrationForm;
