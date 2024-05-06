import { AdminContent } from "@/layouts";
import { Box } from "@/shared/ui";
import { api } from "@/trpc/server";
import { PhonesFilter, PhonesHeader, PhonesList } from "@/widgets/phones";
import { getRoutes } from "@/shared/utils";

type SearchParams = {
  name?: string;
  department?: string;
};

export default async function Phones({ searchParams }: { searchParams: SearchParams }) {
  const { department, name } = searchParams;
  const phonesData = await api.phones.getAll.query({ department, name });

  const { phones } = getRoutes(32);
  const { label, icon } = phones;

  return (
    <AdminContent title={label} icon={icon}>
      <Box className="grid gap-6">
        <PhonesHeader />
        <PhonesFilter />
        <PhonesList initialData={phonesData} />
      </Box>
    </AdminContent>
  );
}
