import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo } from "@/supabase/account";
import { useState } from "react";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryClient } from "@tanstack/react-query";
const Form: React.FC = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const [profilePayload, setProfilePayload] = useState({
    username: "",
    name_ka: "",
    name_en: "",
    surname_ka: "",
    surname_en: "",
    avatar_url: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setProfilePayload((prev) => ({
        ...prev,
        [name]: value,
        avatar_url: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${value}`,
      }));
    } else {
      setProfilePayload((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const { mutate: handleProfile } = useMutation({
    mutationKey: ["profile"],
    mutationFn: fillProfileInfo,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["profile-info"],
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.message === "Username is already taken") {
        setErrorMessage("Username is already taken.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    },
    onSuccess: () => {
      setErrorMessage("");
    },
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleProfile({ ...profilePayload, id: user?.user.id });
  };

  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[450px]"
      onSubmit={submitForm}
    >
      <h1 className="text-3xl">{t("profile.info")}</h1>
      <div>
        <label>{t("profile.username")}</label>
        <Input
          name="username"
          placeholder="Enter username"
          value={profilePayload.username}
          onChange={handleChange}
          required
        />
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      </div>
      <Tabs defaultValue="name_ka" className="w-full mt-3">
        <TabsList className="w-full">
          <TabsTrigger value="name_ka">
            <label>{t("profile.name")} (Georgian)</label>
            <label></label>
          </TabsTrigger>
          <TabsTrigger value="name_en">
            <label>{t("profile.name")} (English)</label>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="name_ka">
          <Input
            name="name_ka"
            placeholder="Enter name in Georgian"
            value={profilePayload.name_ka}
            onChange={handleChange}
            required
          />
        </TabsContent>
        <TabsContent value="name_en">
          <Input
            name="name_en"
            placeholder="Enter name in English"
            value={profilePayload.name_en}
            onChange={handleChange}
            required
          />
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="surname_ka" className="w-full mt-3">
        <TabsList className="w-full">
          <TabsTrigger value="surname_ka">
            <label>{t("profile.surname")} (Georgian)</label>
          </TabsTrigger>
          <TabsTrigger value="surname_en">
            <label>{t("profile.surname")} (English)</label>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="surname_ka">
          <Input
            name="surname_ka"
            placeholder="Enter surname in Georgian"
            value={profilePayload.surname_ka}
            onChange={handleChange}
            required
          />
        </TabsContent>
        <TabsContent value="surname_en">
          <Input
            name="surname_en"
            placeholder="Enter surname in English"
            value={profilePayload.surname_en}
            onChange={handleChange}
            required
          />
        </TabsContent>
      </Tabs>

      <div>
        <label>{t("profile.phone")}</label>
        <Input
          name="phone"
          placeholder="Enter phone number"
          value={profilePayload.phone}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit">{t("profile.save")}</Button>
    </form>
  );
};

export default Form;
