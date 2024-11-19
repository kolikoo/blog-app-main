import { BlogsProps } from "@/data";
import BlogCard from "./blogCardContent/blogCardContent";

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div>
      {data.map((dt, index) => (
        <BlogCard
          key={index}
          title={dt.title}
          description={dt.description}
          author={dt.author}
        />
      ))}
    </div>
  );
};

export default Blogs;
