import { toast } from "sonner";

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
    duration: options?.duration || 10000,
    description: options?.description,
  });
};
