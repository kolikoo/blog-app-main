
interface BlogCardContentProps {
  title: string;
  description: string;
  author: string;
}

const BlogCardContent: React.FC<BlogCardContentProps> = ({
  title,
  description,
  author,
}) => {
  return (
    <div
      style={{ padding: "100px" }}
      className="bg-slate-600 m-5 p-2 rounded-2xl"
    >
      <h1 style={{ color: "gold" }} className="text-red-950">
        {title}
      </h1>
      <p className="font-bold">{description}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BlogCardContent;
