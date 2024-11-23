"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

function Navlink({ href, className, children, ...props }, ref) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      {...props}
      className={
        isActive && className
          ? `underline ${className}`
          : isActive
          ? "underline"
          : className
      }
      ref={ref}
    >
      {children}
    </Link>
  );
}

export default forwardRef(Navlink);
