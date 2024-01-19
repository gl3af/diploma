import { cn } from "../utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("container h-full", className)}>{children}</div>;
};
