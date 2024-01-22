import { LuChevronRight } from "react-icons/lu";

type BookMarkProps = {
    to: string,
    from?: string
}

export default function BookMarker({ to, from }: BookMarkProps) {
    return (
        <div className="w-full px-6 flex items-center select-none">
            <span className="text-sm text-zinc-400 dark:text-zinc-700 font-light transition-colors duration-150">~{to}</span>
            {from && (
                <>
                    <LuChevronRight strokeWidth={1.5} className="text-zinc-400 dark:text-zinc-700 transition-colors duration-150"/>
                    <span className="text-sm text-zinc-800 dark:text-white font-light transition-colors duration-150">{from}</span>
                </>
            )}
        </div>
    )
} 