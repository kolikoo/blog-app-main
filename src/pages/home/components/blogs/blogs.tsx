import { Input } from "@/components/ui/input";
import { FilterValue } from "@/data";
import useCurrentLang from "@/i18n/currentLang";
import { supabase } from "@/supabase";
import { getBlogs } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
const Blogs: React.FC = () => {
  const formatDate = (created_at: string) => {
    const dateObj = new Date(created_at);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const currentlang = useCurrentLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultFilterValues = qs.parse(searchParams.toString());
  const searchQuery = (defaultFilterValues.search as string) || "";
  const { data: blogsList } = useQuery({
    queryKey: ["blog-list"],
    queryFn: () => getBlogs({ search: searchQuery, currentlang }),
  });
  const [filteredBlogs, setFilteredBlogs] = useState(blogsList);
  const { control, handleSubmit } = useForm<FilterValue>({
    defaultValues: defaultFilterValues,
  });
  const onSubmit: SubmitHandler<FilterValue> = (data) => {
    setSearchParams(
      qs.stringify(data, {
        skipNulls: true,
        filter: (_, value) => value || undefined,
      })
    );
    supabase
      .from("blogs")
      .select("*")
      .ilike(
        `${currentlang === "ka" ? "title_ka" : "title_en"}`,
        `%${data.search}%`
      )
      .throwOnError()
      .then((res) => setFilteredBlogs(res.data));
  };
  const blogs =
    filteredBlogs && filteredBlogs?.length > 0 ? filteredBlogs : blogsList;
  return (
    <div className="w-full">
      <form className="max-w-sm flex gap-3 justify-center items-center">
        <Controller
          control={control}
          name="search"
          render={({ field }) => (
            <Input {...field} placeholder="Enter search text" />
          )}
        />
        <FiSearch
          className="w-9 cursor-pointer h-7"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
      <div>
        {blogs?.map((blog) => {
          const imageUrl = blog.image_url
            ? `${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}/${blog.image_url}`
            : "";
          const fullDate = formatDate(blog.created_at);
          return (
            <div
              className="bg-slate-500 m-5 p-2 rounded-2xl flex gap-6"
              key={blog.id}
            >
              <img src={imageUrl} className="w-[300px] h-[300px] rounded-xl" />
              <div className="flex flex-col gap-6 justify-between">
                <div>
                  <h1 className="font-bold text-yellow-400 text-3xl">
                    {currentlang === "ka" ? blog.title_ka : blog.title_en}
                  </h1>
                  <p className="text-xl mt-5">
                    {currentlang === "ka"
                      ? blog.description_ka
                      : blog.description_en}
                  </p>
                </div>
                <p>{fullDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
