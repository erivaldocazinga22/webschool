import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, className, ...rest }: ButtonProps) {
  return <button {...rest} className={twMerge("px-4 py-2 flex items-center gap-1 rounded-md text-white bg-webschool-first", className)}>
    {children}
  </button>;
}
