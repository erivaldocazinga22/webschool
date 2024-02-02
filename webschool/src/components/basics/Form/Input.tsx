import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...rest}: InputProps) {
    return (
        <input {...rest} 
            className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 
            ring-inset ring-zinc-300 dark:ring-webschool-200 
            placeholder:text-zinc-400 focus:ring-2 focus:ring-inset 
            focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all 
            duration-150 `, className)} 
        />
    )
}