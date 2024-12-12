import { useAtomValue } from "jotai";
import CreateForm from "../components/form";
import { loginAtom } from "@/store";
const CreteBlogsView: React.FC = () => {
  const user = useAtomValue(loginAtom);
  if (!user) {
    return <h1>Please Log in to write blogs</h1>;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[700px]">
        <CreateForm />
      </div>
    </div>
  );
};
export default CreteBlogsView;
