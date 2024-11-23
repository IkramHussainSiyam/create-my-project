"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({
  href,
  className,
  activeStyle,
  children,
  prefetch,
  replace,
  scroll,
  ...props
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      scroll={scroll}
      replace={replace}
      prefetch={prefetch}
      href={href}
      {...props}
      className={cn(isActive && (activeStyle ?? "active"), className)}
    >
      {children}
    </Link>
  );
}
