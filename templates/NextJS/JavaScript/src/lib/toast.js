import { toast } from "sonner";

/**
 * Function for showing `sonner` toasts
 * @typedef {'success' | 'error' | 'info' | 'warning' | 'loading'} Type
 * @typedef {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'} Position
 * 
 * @typedef {Object} Options
 * @property {string | number} [id]
 * @property {Position} [position]
 * @property {number} [duration]
 * @property {string} [description]
 *
 * @param {Type} type
 * @param {string} message
 * @param {Options} [options]
 */

export default function showToast(type, message, options) {
  toast[type](message, {
    position: options?.position || "top-center",
    id: options?.id,
    duration: options?.duration || 5000,
    description: options?.description,
  });
}
