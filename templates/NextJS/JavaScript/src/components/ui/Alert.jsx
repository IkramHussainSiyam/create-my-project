import { cn } from "@/lib/utils";

export default function Alert({ type, title, description, className }) {
  return (
    <div
      className={cn(
        `flex p-4 gap-3 text-sm rounded-lg border border-transparent ${alertType(
          type
        )}`,
        className
      )}
      role="alert"
    >
      <svg
        className={"w-4 h-4 mt-0.5"}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Danger</span>
      <div className="space-y-0.5">
        <div>
          <span className="font-semibold capitalize">{type || "Alert"}</span>:{" "}
          {title}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}

function alertType(type) {
  switch (type) {
    case "success":
      return "text-lime-800 bg-lime-100 border-lime-300";
    case "warning":
      return "text-amber-800 bg-amber-100 border-amber-300";
    case "error":
      return "text-rose-800 bg-rose-100 border-rose-300";
    case "info":
      return "text-sky-800 bg-sky-100 border-sky-300";
    default:
      return "text-gray-800 bg-gray-100 border-gray-300";
  }
}
