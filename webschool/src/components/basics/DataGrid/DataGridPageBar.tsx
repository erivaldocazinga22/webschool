import { PublicationData, UserData } from "@/types";

type TablePageNavBarProps = { 
    paginate: (pageNumber: number)=> void
    currentPage: number 
    datas: UserData[] | PublicationData[],
    PerPage: number,
    totalOf: string
}

export default function DataGridPageBar({ paginate, currentPage, datas, PerPage, totalOf }: TablePageNavBarProps) {
    return (
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Total de {totalOf} <span className="font-semibold text-zinc-900 dark:text-white">{datas.length}</span></span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <button
                            disabled={currentPage === 1 ? true : false}
                        onClick={() => paginate(currentPage - 1)}
                        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-s-lg ${
                            currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                        }`}
                        >
                            Anterior
                    </button>
                </li>
                {Array.from({ length: Math.ceil(datas.length / PerPage) }).map((_, index) => (
                    <li key={index}>
                        <button
                            disabled={currentPage === index + 1 ? true : false}
                            onClick={() => paginate(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 ${
                                currentPage === index + 1 ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                            }`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        disabled={currentPage === Math.ceil(datas.length / PerPage) ? true : false}
                        onClick={() => paginate(currentPage + 1)}
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-e-lg ${
                            currentPage === Math.ceil(datas.length / PerPage) ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                        }`}
                    >
                        Próximo
                    </button>
                </li>
            </ul>
        </nav>
    )
}