import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/supabase/auth";
import { useState } from "react";
const AuthForm: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!loginPayload.email && !!loginPayload.password) {
      handleLogin(loginPayload);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[450px]"
      onSubmit={submitForm}
    >
      <h1 className="text-3xl">{t("auth.login")}</h1>
      <p>
        <Trans>auth.enter</Trans>
      </p>
      <div>
        <label>
          <Trans>auth.email</Trans>
        </label>
        <Input
          name="email"
          placeholder="john@example.com"
          value={loginPayload.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <Trans>auth.password</Trans>
        </label>
        <Input
          name="password"
          type="password"
          placeholder="Enter password"
          value={loginPayload.password}
          onChange={handleChange}
        />
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
