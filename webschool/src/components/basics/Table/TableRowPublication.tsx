import { LuClipboardEdit, LuTrash2 } from "react-icons/lu";
import Button from "../Form/Button";
import InputCheckboxCuston from "../Form/InputCheckboxCuston";
import { PublicationData } from "@/types";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import { api } from "@/axios.config";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";

export default function TableRow({ datas }: { datas: PublicationData[] }) {

    const handleUpdated = async (id: number) => {
        alert(id)
    }

    const handleDeleted = async (id: number) => {
        const { "webschool.token": token } = parseCookies();
        try {
            api.defaults.headers["Authorization"] = `Bearer ${token}`;
            const { data: response } = await api.delete(`/publicacaos/${id}`);
            if (response.status === 200) {
                toast.success(response.message)
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Falha ao eliminar a publicação")
        }
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
                    <td className="max-w-max px-4 py-2">{data.id}</td>
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
                    <td className="max-w-max px-4 py-2">
                        <span className="font-medium">{data.nivel === "2" ? "Professor" : data.nivel === "1" && "Administrador"}</span>
                        <p className="text-sm text-zinc-400 dark:text-webschool-100">{data.text}</p>
                    </td>

                    <td>
                        <Link to={`/publication/${data.id}`}>
                            <span className="text-sm text-zinc-400 dark:text-webschool-100 hover:underline hover:text-webschool-first">Ver Publicação</span>
                        </Link>
                    </td>
                    <td className="px-4 py-2">
                        <div className="w-full flex items-center gap-2 justify-center">
                            <Button onClick={()=> handleUpdated(data.id)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                <span>Editar</span>
                                <LuClipboardEdit size={20} strokeWidth={1.5} />
                            </Button>
                            <Button onClick={()=> handleDeleted(data.id)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
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