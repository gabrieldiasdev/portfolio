import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-gray-50 transition-all hover:bg-sky-500 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
