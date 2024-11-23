import { cn } from "@/lib/utils";

export default function Button({
  size = "md",
  color = "blue",
  rounded = "lg",
  children,
  onClick,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        `focus:ring-4 text-center font-medium focus:outline-none border border-transparent flex items-center gap-2.5 active:scale-[.97] transition duration-100 ${buttonStyles.color[color]} ${buttonStyles.size[size]} ${buttonStyles.rounded[rounded]}`,
        className
      )}
    >
      {children}
    </button>
  );
}

const buttonStyles = {
  color: {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
    dark: "text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-300",
    outline:
      "text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-100",
    ghost:
      "text-zinc-900 bg-zinc-100 hover:bg-zinc-200/70 active:bg-zinc-100 focus:ring-zinc-100",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300",
    indigo:
      "text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300",
    amber: "text-white bg-amber-400 hover:bg-amber-500 focus:ring-amber-300",
    "gradient-lime":
      "text-zinc-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200",
    "gradient-blue":
      "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:ring-blue-300",
  },
  size: {
    sm: "text-sm px-3.5 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-5 py-2.5",
    xl: "text-lg px-5 py-2.5",
  },
  rounded: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
  },
};
