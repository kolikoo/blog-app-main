import { Navigate, Outlet } from "react-router-dom";  
import useCurrentLang from "@/i18n/currentLang";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";

const AuthRegisterGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);
  const currentLang = useCurrentLang();

  if (user) {

    return <Navigate to={`/${currentLang}/home`} />;
  }

 
  return children || <Outlet />;
};

export default AuthRegisterGuard;
