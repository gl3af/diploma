import { Phone } from "lucide-react";

import { AdminContent } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { PhonesFilter, PhonesHeader, PhonesList } from "@/widgets/phones";

type SearchParams = {
  name?: string;
  department?: string;
};

export default async function Phones({ searchParams }: { searchParams: SearchParams }) {
  const { department, name } = searchParams;
  const phones = await api.phones.getAll.query({ department, name });

  return (
    <AdminContent title="Телефоны" icon={<Phone size={32} />}>
      <Box className="grid gap-6">
        <PhonesHeader />
        <PhonesFilter />
        <PhonesList initialData={phones} />
      </Box>
    </AdminContent>
  );
}
