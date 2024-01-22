import { LuChevronDown } from "react-icons/lu";

type FilterPopUpElementProps = {
    text: string
}

export default function FilterPopUpElement({text}: FilterPopUpElementProps) {
    return (
        <div className="min-w-[120px] px-4 py-2 rounded-md flex gap-2 items-center justify-between cursor-pointer bg-zinc-100 dark:bg-webschool-200">
            <span className="text-sm text-zinc-800 dark:text-white font-light">{text}</span>
            <LuChevronDown size={20} strokeWidth={1.5} />
        </div>
    )
} 