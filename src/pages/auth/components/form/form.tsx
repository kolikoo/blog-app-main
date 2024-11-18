import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
const AuthForm: React.FC = () => {
  const { t } = useTranslation();
  console.log(t("auth.login"));
  const currentLang = useCurrentLang();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[450px]"
      onSubmit={submitForm}
    >
      <h1 className="text-3xl">
        <Trans>auth.login</Trans>
      </h1>
      <p>
        <Trans>auth.enter</Trans>
      </p>
      <div>
        <label>
          <Trans>auth.email</Trans>
        </label>
        <Input placeholder="john@example.com" />
      </div>
      <div>
        <label>
          <Trans>auth.password</Trans>
        </label>
        <Input placeholder="Enter password" />
      </div>
      <Button className="bg-blue-600 font-bold text-white">
        <Trans>auth.loginBtn</Trans>
      </Button>
      <p>
        <Trans>auth.acc</Trans>{" "}
      </p>
      <Link
        to={`/${currentLang}/register`}
        className="text-blue-600 font-bold hover:underline"
      >
        <Trans>auth.signup</Trans>
      </Link>
    </form>
  );
};
export default AuthForm;
