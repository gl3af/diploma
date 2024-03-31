import { Plane } from "lucide-react";
import Link from "next/link";
import { Box } from "./custom/box";

export const Logo = () => {
  return (
    <Link
      className="flex items-center gap-3 hover:opacity-80"
      href="/"
      passHref
    >
      <Plane />
      <Box as="span" className="hidden text-xl font-bold xs:inline sm:text-2xl">
        КАЗ им. С.П.Горбунова
      </Box>
    </Link>
  );
};
