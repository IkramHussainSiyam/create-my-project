"use client";

import { useTheme } from "next-themes";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaCircleXmark,
} from "react-icons/fa6";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Toaster as Sonner } from "sonner";

type ToasterProps = {
  type?: "neutral" | "iconic";
} & React.ComponentProps<typeof Sonner>;

const Toaster = ({ type = "iconic", ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  function icons() {
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
          success: <FaCircleCheck className="text-xl text-lime-500 dark:text-lime-600" />,
          error: <FaCircleXmark className="text-xl text-rose-500 dark:text-rose-600/90" />,
          info: <FaCircleInfo className="text-xl text-sky-500 dark:text-sky-600" />,
          warning: <FaCircleExclamation className="text-xl text-amber-500 dark:text-amber-600" />,
          loading: <LiaSpinnerSolid className="text-2xl animate-spin" />,
        };
    }
  }

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-inter gap-2.5 items-start",
          title: "text-base font-semibold",
          description: "group-[.toast]:text-muted-foreground text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "mt-1",
        },
      }}
      icons={icons()}
      {...props}
    />
  );
};

export { Toaster };
