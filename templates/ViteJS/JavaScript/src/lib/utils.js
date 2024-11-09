import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes) {
  return twMerge(clsx(classes));
}

export function getRandomID() {
  return Math.random().toString(36).substring(2, 9);
}
