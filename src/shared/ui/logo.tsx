import { Plane } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex items-center gap-3 hover:opacity-80" href="/">
      <Plane />
      <span className="hidden text-xl font-bold xs:inline sm:text-2xl">
        КАЗ им. С.П.Горбунова
      </span>
    </Link>
  );
};
