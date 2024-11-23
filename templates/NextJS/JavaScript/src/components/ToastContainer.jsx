"use client";

import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaCircleXmark,
} from "react-icons/fa6";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Toaster } from "sonner";

const ToastContainer = ({ type = "iconic", ...props }) => {
  const icons = () => {
    switch (type) {
      case "neutral":
        return {
          success: <FaCircleCheck className="text-xl" />,
          error: <FaCircleXmark className="text-xl" />,
          info: <FaCircleInfo className="text-xl" />,
          warning: <FaCircleExclamation className="text-xl" />,
          loading: <LiaSpinnerSolid className="text-2xl animate-spin" />,
        };

      case "iconic":
        return {
          success: <FaCircleCheck className="text-xl text-lime-500" />,
          error: <FaCircleXmark className="text-xl text-rose-500" />,
          info: <FaCircleInfo className="text-xl text-sky-500" />,
          warning: <FaCircleExclamation className="text-xl text-amber-500" />,
          loading: <LiaSpinnerSolid className="text-2xl animate-spin" />,
        };

      case "colored":
        return {
          success: <FaCircleCheck className="text-xl text-lime-700" />,
          error: <FaCircleXmark className="text-xl text-rose-700" />,
          info: <FaCircleInfo className="text-xl text-sky-700" />,
          warning: <FaCircleExclamation className="text-xl text-amber-700" />,
          loading: <LiaSpinnerSolid className="text-2xl animate-spin" />,
        };
    }
  };

  return (
    <Toaster
      {...props}
      toastOptions={{
        classNames: {
          toast: `group toast bg-background text-foreground font-sans gap-3 items-start ${
            type === "colored" ? "shadow-lg" : ""
          }`,
          title: "text-base font-semibold",
          description: `text-sm ${
            type === "colored" ? "" : "text-muted-foreground"
          }`,
          icon: "text-center text-foreground mt-[4.3px]",
          success:
            type === "colored"
              ? "bg-lime-200 text-lime-700 shadow-lime-600/20 border-transparent"
              : "",
          error:
            type === "colored"
              ? "bg-rose-200 text-rose-700 shadow-rose-600/20 border-transparent"
              : "",
          info:
            type === "colored"
              ? "bg-sky-200 text-sky-700 shadow-sky-600/20 border-transparent"
              : "",
          warning:
            type === "colored"
              ? "bg-amber-200 text-amber-700 shadow-amber-600/20 border-transparent"
              : "",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={icons()}
    />
  );
};

export default ToastContainer;
