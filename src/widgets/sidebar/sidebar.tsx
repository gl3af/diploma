import { Routes } from "@/features/sidebar";
import { getServerAuthSession } from "@/server/auth";
import { Box } from "@/shared/ui";

export async function Sidebar() {
  const session = await getServerAuthSession();
  const isAdmin = session?.user.role === "admin";

  return (
    <Box
      as="aside"
      className="sm:align-center hidden w-fit p-4 sm:flex lg:min-w-fit"
    >
      <Routes isAdmin={isAdmin} />
    </Box>
  );
}
