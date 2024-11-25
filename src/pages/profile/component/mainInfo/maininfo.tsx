import { MainInfoProps } from "@/data";

const MainInfo: React.FC<MainInfoProps> = ({ data }) => {
  return (
    <div className=" flex flex-col justify-center items-center  gap-5 max-h-80 rounded-2xl p-9  bg-slate-600">
      <img
        src={data && data[0].avatar_url ? data[0].avatar_url : undefined}
        className="w-40"
      />
      <h1 className="text-4xl">{data && data[0].username}</h1>
      <p className="text-2xl">{data && data[0].phone}</p>
    </div>
  );
};
export default MainInfo;
