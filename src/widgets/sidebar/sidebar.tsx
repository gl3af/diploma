import { Routes } from "@/features/sidebar";
import { getServerAuthSession } from "@/server/auth";
import { Box } from "@/shared/ui";

export async function Sidebar() {
  const session = await getServerAuthSession();
  const isAdmin = session?.user.role === "admin";

  return (
    <Box
      as="aside"
      className="sm:align-center sticky top-8 hidden h-fit w-fit sm:flex lg:min-w-[225px]"
    >
      <Routes isAdmin={isAdmin} />
    </Box>
  );
}
