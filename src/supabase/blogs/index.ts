/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "..";
export const addBlog = async ({
  payload,
  user,
}: {
  payload: any;
  user: any;
}) => {
  try {
    const res = await supabase.storage
      .from("blog_images")
      .upload(payload.image_url?.name, payload.image_url);

    const insertRes = await supabase.from("blogs").insert({
      title_ka: payload.title_ka,
      title_en: payload.title_en,
      description_ka: payload.description_ka,
      description_en: payload.description_en,
      image_url: res.data?.fullPath,
      user_id: user?.user.id,
    });

    if (insertRes.error) {
      throw new Error(insertRes.error.message);
    }
    console.log("Successfully created", insertRes);
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};

export const getBlogs = async ({
  search,
  currentlang,
}: {
  search: string;
  currentlang: string;
}) => {
  const query = supabase.from("blogs").select("*");
  if (search && search.length > 2) {
    query.ilike(
      `${currentlang === "ka" ? "title_ka" : "title_en"}`,
      `%${search}%`
    );
  }
  const { data } = await query.throwOnError();
  return data;
};
