import { ElementType } from "react"
import { twMerge } from "tailwind-merge";

type SidebarElementItemProps = {
    icon: ElementType;
    text?: string;
    className?: string
}


export default function SidebarElementItem({ icon: Icon, text, className }: SidebarElementItemProps) {
    return (
        <div className={twMerge("relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer text-zinc-600 hover:bg-zinc-200/70 dark:text-webschool-100 dark:hover:bg-webschool-200  transition-colors duration-150 group", className)}>
            <Icon size={24} strokeWidth={1.5} />
            {text && (
                <div className="absolute z-30 hidden top-1/2 left-16 -translate-y-1/2 group-hover:flex ">
                    <span className="text-sm rounded-md px-2 py-0.5 text-zinc-600 dark:text-webschool-100 bg-white dark:bg-webschool-200">
                        {text}
                    </span>
                </div>
            )}
        </div>
    )
}

/*

className={twMerge(`relative w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-zinc-300/70 dark:hover:bg-webschool-200 transition-colors duration-150 group`, 
                    `${props.active === props.href && "bg-webschool-first hover:bg-webschool-first dark:hover:bg-webschool-first text-white transition-colors duration-150"}`
                )}

*/
