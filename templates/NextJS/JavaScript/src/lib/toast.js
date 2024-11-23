import { toast } from "sonner";

/**
 * @typedef {'success' | 'error' | 'info' | 'warning' | 'loading'} Type
 * @typedef {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'} Position
 *
 * @param {Type} type
 * @param {string} message
 * @param {{ position?: Position, id?: string | number, duration?: number, description?: string}} options
 */

export default function showToast(type, message, options) {
  toast[type](message, {
    position: options?.position || "top-center",
    id: options?.id,
    duration: options?.duration || 5000,
    description: options?.description,
  });
}
