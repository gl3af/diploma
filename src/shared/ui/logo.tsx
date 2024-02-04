import { Plane } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex items-center gap-4 hover:opacity-80" href="/">
      <Plane />
      <span className="hidden text-3xl font-bold sm:inline">Предприятие</span>
    </Link>
  );
};
