import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { MainInfoProps } from "@/data";
import useCurrentLang from "@/i18n/currentLang";

import { useTranslation } from "react-i18next";

interface InfoProps extends MainInfoProps {
  setEdit: (edit: boolean) => void;
  edit: boolean;
}
const Info: React.FC<InfoProps> = ({ data, setEdit, edit }) => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  return (
    <div className="mt-4 flex flex-col">
      <Table>
        <TableCaption>{t("profile.tableTitle")}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Surname</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Username</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              {currentLang === "ka" ? data?.[0]?.name_ka : data?.[0]?.name_en}
            </TableCell>
            <TableCell>
              {currentLang === "ka"
                ? data?.[0]?.surname_ka
                : data?.[0]?.surname_en}
            </TableCell>
            <TableCell>{data && data[0].phone}</TableCell>
            <TableCell className="text-right">
              {data && data[0].username}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className="mt-3 mx-24" onClick={() => setEdit(!edit)}>
        {edit ? t("profile.editClose") : t("profile.edit")}
      </Button>
    </div>
  );
};
export default Info;
