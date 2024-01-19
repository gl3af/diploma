import { Trophy } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex items-center gap-2 hover:opacity-80" href="/">
      <Trophy />
      <span className="text-3xl font-bold sm:hidden">MFJ</span>
      <span className="hidden text-3xl font-bold sm:inline">
        My Fitness Journey
      </span>
    </Link>
  );
};
