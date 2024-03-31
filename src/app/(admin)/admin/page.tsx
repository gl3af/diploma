import { AdminContent } from "@/layouts";
import { SquareUserRound } from "lucide-react";
import React from "react";

export default function Admin() {
  return (
    <AdminContent title="Админ-панель" icon={<SquareUserRound size={32} />}>
      Admin blyat
    </AdminContent>
  );
}
