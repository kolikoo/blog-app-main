import { BlogsProps } from "@/data";
import image from "../../../../images/uknownimg copy.svg";

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((dt, index) => (
          <div
            className="h-[400px] m-5 p-6 border-gray-500  border-solid border-[2px] rounded-2xl
                  dark:border-blue-900     bg-white dark:bg-black"
            key={index}
          >
            <img
              className="mb-6 rounded-xl w-[95%] h-[70%] bg-cover"
              src={image}
              alt="image-blog"
            />
            <h1 className="text-black dark:text-white">{dt.title}</h1>
            <p className="font-bold text-gray-700 dark:text-gray-500">
              {dt.description}
            </p>
            <p className="text-blue-800 dark:text-yellow-400">
              Author: {dt.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
