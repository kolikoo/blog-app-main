import { BlogsProps } from "@/data";

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((dt, index) => (
          <div style={{padding:"100px",}} className="bg-slate-600 m-5 p-2 rounded-2xl" key={index}>
            <h1 style={{color:"gold"}} className="text-red-950">{dt.title}</h1>
            <p  className="font-bold">{dt.description}</p>
            <p>Author: {dt.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
