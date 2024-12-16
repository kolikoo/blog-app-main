import { Earth } from "lucide-react";
import i18n from "i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";

export function ChangeLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  const changeLanguage = (lang: string) => {
    const currentParams = new URLSearchParams(location.search);
    const newPath = `/${lang}${location.pathname.substring(3)}`;
    const newSearch = currentParams.toString();

    i18n.changeLanguage(lang);
    navigate(`${newPath}?${newSearch}`, { replace: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Earth />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ka")}>
          ქართული
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
