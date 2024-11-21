import { AboutDetailProps } from "@/data";
const AboutDetail: React.FC<AboutDetailProps> = ({ author }) => {
  return (
    <div className="w-full bg-slate-900 text-white p-3">
      <h1 className="text-white">{author?.author}</h1>
      <p className="text-gray-400">{author?.professionDescription}</p>
    </div>
  );
};
export default AboutDetail;
