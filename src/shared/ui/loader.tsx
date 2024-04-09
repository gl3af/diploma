import { Loader as LoaderIcon } from "lucide-react";

import { cn } from "../utils";

import { Box } from ".";

export function Loader({ size = 24, className }: { size?: number; className?: string }) {
  return <Box className={cn("flex w-full items-center justify-center", className)}>
    <LoaderIcon size={size} className="animate-spin-slow" />
  </Box>
}
