import { ReactNode } from "react";
import { LuChevronRight } from "react-icons/lu";

type SelectViewFormRootProps = {
    children: ReactNode 
    handleOnClick: ()=> void
} 

export default function SelectViewFormRoot({ children, handleOnClick }: SelectViewFormRootProps) {
    return (
        <li onClick={handleOnClick} className="flex items-center space-x-3 p-2 rounded-md cursor-pointer border border-dashed border-zinc-200 dark:border-webschool-200 hover:bg-blue-200/50 dark:hover:bg-blue-200/5 transition-colors duration-150 group">
            {children}
            <div className="-translate-x-2 group-hover:translate-x-0.5 transition-transform duration-300">
                <LuChevronRight size={24} strokeWidth={1.5} />
            </div>
        </li>
    )
}