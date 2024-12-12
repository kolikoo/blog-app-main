/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogFormShema, BlogsForm } from "@/schema";
import { blogsDefaultValues } from "@/data";
import { useTranslation } from "react-i18next";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { addBlog } from "@/supabase/blogs";
import { useNavigate } from "react-router-dom";
import useCurrentLang from "@/i18n/currentLang";
import { Textarea } from "@/components/ui/textarea";
const CreateForm: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const navigate = useNavigate();
  const currentLang = useCurrentLang();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogsForm>({
    resolver: zodResolver(blogFormShema),
    defaultValues: blogsDefaultValues,
  });
  const { mutate: handleAddBlog } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: (variables: { payload: any; user: any }) => addBlog(variables),
    onSuccess: () => {
      navigate(`/${currentLang}/home`);
    },
  });
  const onSubmit: SubmitHandler<BlogsForm> = (data) => {
    handleAddBlog({ payload: data, user });
  };
  return (
    <form
      className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl text-center">{t("blog.mainTitle")}</h1>
      <div>
        <label>{t("blog.title_ka")}</label>
        <Controller
          control={control}
          name="title_ka"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter title"
              className={`${errors.title_ka ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.title_ka && (
          <span className="text-red-600 font-semibold">
            {t(errors.title_ka.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.title_en")}</label>
        <Controller
          control={control}
          name="title_en"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter title"
              className={`${errors.title_en ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.title_en && (
          <span className="text-red-600 font-semibold">
            {t(errors.title_en.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.description_ka")}</label>
        <Controller
          control={control}
          name="description_ka"
          render={({ field }) => (
            <Textarea
              {...field}
              rows={4}
              placeholder="Enter description"
              className={`${errors.description_ka ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.description_ka && (
          <span className="text-red-600 font-semibold">
            {t(errors.description_ka.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.description_en")}</label>
        <Controller
          control={control}
          name="description_en"
          render={({ field }) => (
            <Textarea
              {...field}
              rows={4}
              placeholder="Enter description"
              className={`${errors.description_en ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.description_en && (
          <span className="text-red-600 font-semibold">
            {t(errors.description_en.message ?? "")}
          </span>
        )}
      </div>
      <div>
        <label>{t("blog.image_url")}</label>
        <Controller
          control={control}
          name="image_url"
          render={({ field: { onChange } }) => (
            <Input
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
              type="file"
              className={`${errors.image_url ? "border-red-600" : "border-gray-300"}`}
            />
          )}
        />
        {errors.image_url && (
          <span className="text-red-600 font-semibold">
            {t(errors.image_url.message ?? "")}
          </span>
        )}
      </div>
      <Button type="submit">{t("blog.create_button")}</Button>
    </form>
  );
};
export default CreateForm;
