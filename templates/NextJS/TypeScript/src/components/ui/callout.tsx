import { cn } from "@/lib/utils";
import { BsExclamationOctagonFill } from "react-icons/bs";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaCircleXmark,
} from "react-icons/fa6";

const Callout = ({ type, title, description, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        `flex gap-2.5 p-4 mb-4 text-base rounded-lg border-2 border-transparent ${calloutType(
          type!
        )}`,
        className
      )}
      role="alert"
    >
      {calloutIcon(type!)}
      <span className="sr-only">{type}</span>
      <div className="space-y-0.5">
        <span className="font-medium capitalize text-lg">
          {type || "Alert"}: {title}
        </span>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default Callout;

function calloutType(type: CalloutTypes) {
  switch (type) {
    case "info":
      return "bg-sky-50 text-sky-700 border-sky-300 dark:bg-sky-800/10 dark:text-sky-500/85 dark:border-sky-600/40";
    case "error":
      return "bg-red-50 text-red-700 border-red-300 dark:bg-red-800/10 dark:text-red-500/85 dark:border-red-600/40";
    case "warning":
      return "bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-800/10 dark:text-amber-500/85 dark:border-amber-600/40";
    case "success":
      return "bg-lime-50 text-lime-700 border-lime-300 dark:bg-lime-800/10 dark:text-lime-500/85 dark:border-lime-600/40";
    default:
      return "bg-zinc-50 text-zinc-700 border-zinc-300 dark:bg-zinc-800/20 dark:text-zinc-400 dark:border-zinc-700";
  }
}

function calloutIcon(type: CalloutTypes) {
  switch (type) {
    case "success":
      return <FaCircleCheck className="mt-[3.5px] text-xl" />;
    case "error":
      return <FaCircleXmark className="mt-[3.5px] text-xl" />;
    case "info":
      return <FaCircleInfo className="mt-[3.5px] text-xl" />;
    case "warning":
      return <FaCircleExclamation className="mt-[3.5px] text-xl" />;
    default:
      return <BsExclamationOctagonFill className="mt-[3.5px] text-xl" />;
  }
}

type Props = {
  type?: CalloutTypes;
  title: string;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type CalloutTypes = "success" | "error" | "info" | "warning";
