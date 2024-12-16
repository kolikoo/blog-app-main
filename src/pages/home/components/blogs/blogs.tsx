import { Input } from "@/components/ui/input";
import { FilterValue } from "@/data";
import useCurrentLang from "@/i18n/currentLang";
import { getBlogs } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import i18n from "i18next";
import "dayjs/locale/ka";
import "dayjs/locale/en";
dayjs.extend(relativeTime);
const Blogs: React.FC = () => {
  dayjs.locale(i18n.language);
  const formatDate = (time: string) => {
    const now = dayjs();
    const postDate = dayjs(time);
    const oneDay = now.diff(postDate, "day") < 1;
    const timePassed = postDate.fromNow();
    const fullDate = postDate.format("HH:mm - DD/MM/YYYY");
    return { oneDay, timePassed, fullDate };
  };
  const currentlang = useCurrentLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultFilterValues = qs.parse(searchParams.toString());
  const { control, watch } = useForm<FilterValue>({
    defaultValues: defaultFilterValues || "",
  });
  const searched = watch("search");
  const debouncedSearched = useDebounce(searched, 1000);
  const { data: blogsList } = useQuery({
    queryKey: ["blog-list", debouncedSearched],
    queryFn: () => getBlogs({ search: debouncedSearched || "", currentlang }),
  });
  useEffect(() => {
    if (searched) {
      setSearchParams(
        qs.stringify(
          { search: searched },
          {
            skipNulls: true,
            filter: (_, value) => value || undefined,
          }
        )
      );
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [searched, setSearchParams]);

  return (
    <div className="w-full">
      <form className="max-w-sm flex gap-3 justify-center items-center">
        <Controller
      
          control={control}
          name="search"
          render={({ field }) => (
            <Input
            
              {...field}
              placeholder="Enter search text"
              value={field.value || ""}
            />
          )}
        />
      </form>
      <div>
        {blogsList?.map((blog) => {
          const imageUrl = blog.image_url
            ? `${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}/${blog.image_url}`
            : "";
          const { oneDay, timePassed, fullDate } = formatDate(blog.created_at);
          return (
            <div
              className="bg-slate-400 m-5 p-2 rounded-2xl flex gap-6 dark:bg-yellow-600 "
              key={blog.id}
            >
              <img src={imageUrl} className="w-[300px] h-[300px] rounded-xl" />
              <div className="flex flex-col gap-6 justify-between">
                <div>
                  <h1 className="font-bold text-yellow-400 text-3xl dark:text-black">
                    {currentlang === "ka" ? blog.title_ka : blog.title_en}
                  </h1>
                  <p className="text-xl mt-5">
                    {currentlang === "ka"
                      ? blog.description_ka
                      : blog.description_en}
                  </p>
                </div>
                <p>{oneDay ? timePassed : fullDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
