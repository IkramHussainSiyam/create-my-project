import clsx from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...classes) {
  return twMerge(clsx(classes));
}

export function getRandomID() {
  return Math.random().toString(36).substring(2, 9);
}

export const showToast = (
  type, // "success" | "error" | "info" | "warning" | "loading"
  message,
  options
) => {
  toast[type](message, {
    position: options?.position || "top-center",
    id: options?.id,
    duration: options?.duration || 2000,
    description: options?.description,
  });
};
