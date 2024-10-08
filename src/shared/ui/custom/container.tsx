import { Box } from "./box";
import { cn } from "../../utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <Box className={cn("container h-full", className)}>{children}</Box>;
}
