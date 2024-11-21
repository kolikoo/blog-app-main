import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";
const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !!registerPayload.email &&
      !!registerPayload.password &&
      registerPayload.password === confirmPassword
    ) {
      handleRegister(registerPayload);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[480px]"
      onClick={submitForm}
    >
      <h1 className="text-3xl">{t("register.signup")}</h1>
      <p>
        <Trans>register.create</Trans>
      </p>
      <div>
        <label>
          <Trans>register.email</Trans>
        </label>
        <Input
          name="email"
          placeholder="john@example.com"
          value={registerPayload.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <Trans>register.password</Trans>
        </label>
        <Input
          name="password"
          type="password"
          placeholder="Enter password"
          value={registerPayload.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <Trans>register.cPassword</Trans>
        </label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="repeat password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
