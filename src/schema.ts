import { z } from "zod";
export const blogFormShema = z.object({
  title_ka: z.string().min(3, "blogValidation.title_ka"),
  title_en: z.string().min(3, "blogValidation.title_en"),
  description_ka: z.string().min(15, "blogValidation.description_ka"),
  description_en: z.string().min(15, "blogValidation.description_en"),
  image_url: z.instanceof(File).refine((file:File) => file instanceof File, {
    message: "blogValidation.image_url",
  }),
});
export type BlogsForm = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: File | null;
};
