import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SearchBarRootPorps = LabelHTMLAttributes<HTMLLabelElement> & {
    spanClassName?: string
}

export default function SearchBarRoot({htmlFor, children, className, spanClassName} : SearchBarRootPorps) {
    return (
        <label htmlFor={htmlFor} className={twMerge("min-w-[200px] max-w-max relative px-2 py-1.5 rounded-md flex items-center gap-1 cursor-text bg-zinc-100 dark:bg-webschool-200 overflow-hidden transition-colors duration-150", className)}>
            {children}
            <span className={twMerge("absolute bottom-0 left-0 w-full h-[3px] flex bg-zinc-300 dark:bg-webschool-100 transition-colors duration-150", spanClassName)}></span>
        </label>
    )
}