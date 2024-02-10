//import { LuChevronDown } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa"

type FilterPopUpElementProps = {
    text: string
}

export default function FilterPopUpElement({text}: FilterPopUpElementProps) {
    return (
        <div className="min-w-[120px] px-4 py-2 rounded-md flex gap-2 items-center justify-between cursor-pointer bg-zinc-100 dark:bg-webschool-200">
            <span className="text-sm text-zinc-800 dark:text-white font-light">{text}</span>
            <FaCaretDown size={16} strokeWidth={1.5} className="mt-[1px]" />
        </div>
    )
} 

//caret-down