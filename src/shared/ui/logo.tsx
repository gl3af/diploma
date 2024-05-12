import { Plane } from "lucide-react";
import Link from "next/link";

import { Box } from "./custom/box";

export function Logo() {
  return (
    <Link className="flex items-center gap-3 hover:opacity-80" href="/" passHref>
      <Plane />
      <Box as="span" className="hidden text-xl font-bold sm:inline sm:text-2xl">
        КАЗ им. С.П.Горбунова
      </Box>
      <Box as="span" className="inline text-xl font-bold sm:hidden sm:text-2xl">
        КАЗ
      </Box>
    </Link>
  );
}
