import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type SearchBarInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function SearchBarInput({ id, className, placeholder }: SearchBarInputProps) {
    return (
        <input  
            type="search" 
            id={id}
            placeholder={placeholder}
            className={twMerge("bg-transparent outline-none px-1 placeholder:text-sm placeholder:text-webschool-100 text-base font-normal transition-colors duration-150", className)}
        />
    )
}