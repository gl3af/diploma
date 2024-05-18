import { Routes } from "@/features/sidebar";
import { Box } from "@/shared/ui";

export async function Sidebar() {
  return (
    <Box
      as="aside"
      className="sm:align-center sticky top-8 hidden h-fit w-fit sm:flex lg:min-w-[225px]"
    >
      <Routes />
    </Box>
  );
}
