import { cn } from "../utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-xl bg-slate-600", className)} {...props} />;
}

export { Skeleton };
