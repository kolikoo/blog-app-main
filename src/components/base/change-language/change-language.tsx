import { Earth } from "lucide-react";
import i18n from "i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ChangeLanguage() {
  const changeLanguageToKa = () => {
    i18n.changeLanguage("ka");
    window.history.pushState(
      null,
      "",
      "/ka" + window.location.pathname.substring(3),
    );
  };
  const changeLanguageToEn = () => {
    i18n.changeLanguage("en");
    window.history.pushState(
      null,
      "",
      "/en" + window.location.pathname.substring(3),
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Earth />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={changeLanguageToEn}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={changeLanguageToKa}>
          ქართული
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
