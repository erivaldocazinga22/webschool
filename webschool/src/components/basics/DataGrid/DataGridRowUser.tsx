import { LuClipboardEdit, LuTrash2 } from "react-icons/lu";
import Button from "../Form/Button";
import InputCheckboxCuston from "../Form/InputCheckboxCuston";
import Avatar from "../Avatar";
import { UserData } from "@/types";

export default function DataGridRowUser({ datas }: { datas: UserData[] }) {

    const handleUpdated = async (unique: number) => {
        alert(unique);
    }

    const handleDeleted = async (unique: number) => {
        alert(unique);
    }

    return (
        <>
            {datas.map((data, index: number) => (
                <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-webschool-300/40">
                    <td className="min-w-10 max-w-12">
                        <div className="px-4 py-2 ">
                            <InputCheckboxCuston id={`${data.id}`} />
                        </div>
                    </td>
                    <td className="max-w-max px-4 py-2">{data.processo}</td>
                    <td className="max-w-max px-4 py-2">
                        <div className="flex items-center justify-start gap-2 px-4 py-2">
                            <Avatar 
                                className="w-10 h-10 cursor-default bg-zinc-200" 
                                data={{ 
                                    avatar_url: data.avatar_url, 
                                    name: data.name
                                }} 
                            />
                            <div className="flex flex-col">
                                <span className="text-sm">{data.name}</span>
                                <span className="text-xs text-zinc-600">{data.email}</span>
                            </div>
                        </div>
                    </td>
                    <td className="max-w-max px-4 py-2">{data.identificacao}</td>
                    <td className="max-w-max px-4 py-2">{`${data.telefone.replace(/\B(?=(\d{3})+(?!\d))/g, '-')}`}</td>
                    <td className="max-w-max px-4 py-2">{data.sexo}</td>
                    <td className="px-4 py-2">
                        <div className="w-full flex items-center gap-2 justify-center">
                            <Button onClick={()=> handleUpdated(data.processo)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                <span>Editar</span>
                                <LuClipboardEdit size={20} strokeWidth={1.5} />
                            </Button>
                            <Button onClick={()=> handleDeleted(data.processo)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                <span>Excluir</span>
                                <LuTrash2 size={20} strokeWidth={1.5} />
                            </Button>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}