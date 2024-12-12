import { ModeToggle } from "@/components/theme/mode-toggle";
import { ChangeLanguage } from "@/components/base/change-language";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import useCurrentLang from "@/i18n/currentLang";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getProfile } from "@/supabase/account";
const Header: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const user = useAtomValue(loginAtom);
  const { mutate: logOut } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
  const { data } = useQuery({
    queryKey: ["profile-info", user?.user.id],
    queryFn: async () => getProfile(user?.user.id ?? ""),
    enabled: !!user?.user.id,
  });
  const handleLogOut = () => {
    logOut();
  };
  return (
    <header className="w-full h-20 sticky top-0 bg-slate-700 flex items-center justify-between px-16 py-6 z-10">
      <h1 className="text-2xl font-semibold uppercase">
        {t("header.blogTitle")}
      </h1>
      <div className="flex gap-6 text-yellow-300">
        <NavLink to={`/${currentLang}/home`} className="uppercase">
          <Trans>header.home</Trans>
        </NavLink>
        <NavLink to={`/${currentLang}/about`} className="uppercase">
          <Trans>header.about</Trans>
        </NavLink>
        <NavLink to={`/${currentLang}/write`} className="uppercase">
          <Trans>header.write</Trans>
        </NavLink>
      </div>
      <div className="flex justify-center items-center gap-3">
        {user ? (
          <div className="flex justify-center items-center gap-4">
            <Link to={`/${currentLang}/profile`}>
              <Avatar>
                <AvatarImage
                  src={
                    data && data[0].avatar_url ? data[0].avatar_url : undefined
                  }
                />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </Link>
            <div
              onClick={handleLogOut}
              className="cursor-pointer hover:text-blue-400"
            >
              <Trans>header.logout</Trans>
            </div>
          </div>
        ) : (
          <Link to={`/${currentLang}/login`}>
            <Button className="bg-blue-500 font-semibold">
              <Trans>header.sign</Trans>
            </Button>
          </Link>
        )}

        <ChangeLanguage />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
