import { FilterPopUpValues } from "./FilterPopUpValues";

export default function FilterPopUpModal({ type }: { type: "Curso" | "Turma" |"Classe"}) {

    if (type === "Curso") {
        return (
            <div className="min-w-[125px] w-max max-w-max p-2 rounded-md bg-zinc-100 dark:bg-webschool-200">
                <ul>
                    {FilterPopUpValues.FiltrarCurso.map((item, index: number)=> {
                        const { icon: Icon } = item;

                        return (
                            <li key={index} className="w-full flex items-center gap-2 px-2 py-1 cursor-pointer rounded text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200 dark:hover:text-white dark:hover:bg-webschool-300/40">
                                <input id={`curso_filterUsers_${item.text}`} type="radio" name="curso_filterUser" className="sr-only peer" />
                                <label htmlFor={`curso_filterUsers_${item.text}`} className={`peer peer-checked:font-medium peer-checked:text-zinc-800 dark:peer-checked:text-white flex items-center gap-2 cursor-pointer`}>
                                    <Icon size={20} strokeWidth={1.5} id={`curso_filterUsers_${item.text}`} />
                                    <span>{item.text}</span>
                                </label>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        )
    }

    if (type === "Classe") {
        return (
            <div className="min-w-[125px] w-max max-w-max p-2 rounded-md bg-zinc-100 dark:bg-webschool-200">
                <ul>
                    {FilterPopUpValues.FiltrarClasse.map((item, index: number)=> {
                        if (item.legend) {
                            return (
                                <div key={index}>
                                    <legend className="text-sm text-zinc-400 font-light select-none py-0.5">{item.legend.title}</legend>
                                    {item.legend.text.map(element => (
                                        element !== "Todos" && (
                                            <li key={element} className="w-full flex items-center gap-2 px-2 py-1 cursor-pointer rounded text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200 dark:text-white dark:hover:bg-webschool-300/40">
                                                <input id={`classe_filterUsers_${element}`} type="radio" name="classe_filterUser" />
                                                <label htmlFor={`classe_filterUsers_${element}`} className="cursor-pointer">{element}</label>
                                            </li>
                                        )
                                    ))}
                                </div>
                            )
                        }

                        return (
                            <li key={index} className="w-full flex items-center gap-2 px-2 py-1 dark:text-white cursor-pointer rounded text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200 dark:hover:bg-webschool-300/40">
                                <input id={`classe_filterUsers_${item.text}`} type="radio" name="classe_filterUser" />
                                <label htmlFor={`classe_filterUsers_${item.text}`} className="cursor-pointer">{item.text}</label>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        )
    }

    return (
        <div className="min-w-[125px] w-max max-w-max p-2 rounded-md bg-zinc-100 dark:bg-webschool-200">
            <ul>
                {FilterPopUpValues.FiltrarTurma.map((item, index: number)=> {
                    return (
                        <li key={index} className="w-full flex items-center gap-2 px-2 py-1 cursor-pointer rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-webschool-300/40 ">
                            <input id={`turma_filterUsers_${item.text}`} type={item.input} name="turma_filterUser" />
                            <label htmlFor={`turma_filterUsers_${item.text}`} className="cursor-pointer">{item.text}</label>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
} 