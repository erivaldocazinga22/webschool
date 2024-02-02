import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type SelectViewFormIconProps = { 
    icon: ElementType,
    className?: string
}

export default function SelectViewFormIcon({ icon:Icon, className }: SelectViewFormIconProps) {
    return (
        <div>
            <Icon size={42} strokeWidth={1.5} className={twMerge("text-webschool-first", className)} />
        </div>
    )
}