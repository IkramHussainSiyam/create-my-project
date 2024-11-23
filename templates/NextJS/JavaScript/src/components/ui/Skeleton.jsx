import { cn } from "@/lib/utils/utils";

export default function Skeleton({ className, children }) {
  return (
    <div
      className={cn(
        "bg-zinc-200 animate-none animate-pulse rounded-md w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
