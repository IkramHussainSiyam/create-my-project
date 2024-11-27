import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function getRandomID() {
  return Math.random().toString(36).substring(2, 9);
}

type TToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

type ToastOptions = {
  id?: string | number;
  position?: TToastPosition;
  duration?: number;
  description?: string;
};

export const showToast = (
  type: "success" | "error" | "info" | "warning" | "loading",
  message: string,
  options?: ToastOptions
) => {
  toast[type](message, {
    position: options?.position || "top-center",
    id: options?.id,
    duration: options?.duration || 2000,
    description: options?.description,
  });
};
