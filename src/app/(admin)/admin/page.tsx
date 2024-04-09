import { SquareUserRound } from "lucide-react";
import React from "react";

import { AdminContent } from "@/layouts";

export default function Admin() {
  return (
    <AdminContent title="Админ-панель" icon={<SquareUserRound size={32} />}>
      Admin blyat
    </AdminContent>
  );
}
