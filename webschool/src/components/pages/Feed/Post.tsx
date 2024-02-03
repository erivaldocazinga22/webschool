import Avatar from "@/components/basics/Avatar";
import Popup from "@/components/basics/Popup";
import { PublicationData } from "@/types";
import { LuPenSquare , LuCrown, LuMoreHorizontal } from "react-icons/lu";
import TimeAgo from "./TImeAgo";

type PostTypes = {
    data: PublicationData
}

export default function Post({ data }: PostTypes) {
    return (
        <div className="w-full p-4 rounded-3xl bg-zinc-200 dark:bg-webschool-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar 
                        data={{
                            name: data.name,
                            avatar_url: data.avatar_url
                        }}
                        className="rounded-2xl bg-zinc-300"
                    />
                    <div className="flex flex-col gap-0.5">
                        <h3 className="font-medium">{data.name}</h3>
                        <small className="text-xs text-webschool-100">{data.nivel === "2" ? "Professor" : data.nivel === "1" && "Administrador"} - <TimeAgo created_at={data.created_at}  /></small>
                    </div>
                </div>
                <span className="edit">
                    <Popup element={
                        <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full dark:hover:bg-webschool-200">
                            <LuMoreHorizontal size={20} strokeWidth={1.5} />
                        </div>
                    } className="right-1 top-12">
                        <div className="p-2 rounded-md bg-zinc-300 dark:bg-webschool-200">
                            <ul>
                                <li className="px-3 py-1.5 text-left cursor-pointer rounded flex items-center gap-2  hover:bg-zinc-400/20 dark:hover:bg-webschool-100/10">
                                    <LuPenSquare size={20} strokeWidth={1.5} />
                                    <span>Editar</span>
                                </li>
                                <li className="px-3 py-1.5 text-left cursor-pointer rounded flex items-center gap-2  hover:bg-zinc-400/20 dark:hover:bg-webschool-100/10">
                                    <LuCrown size={20} strokeWidth={1.5} />
                                    <span>Favoritar</span>
                                </li>
                            </ul>
                        </div>
                    </Popup>
                </span>
            </div>

            <div className="">
                {data.fotos ? (
                    data.fotos.map((foto_url, index)=> (
                        <div key={index} className="photo-content">
                            <img src={foto_url} alt="" />
                        </div>
                    ))
                ) : data.text.length < 50 ? (
                    <div className="my-4 text-2xl min-w-full min-h-[250px] flex items-center justify-center text-center text-wrap rounded-md bg-red-500 text-white">
                        {data.text}
                    </div>
                ) : (
                    <div className="my-2">
                        <p className={`font-light text-sm ${data.text.length >= 50 && data.text.length <= 100 && "w-1/2" }`}>{data.text}</p>
                    </div>
                )}
            </div>

            <div className="liked-by">
                {/* <span><img src="image/profile-11.jpg" alt="" /></span>
                <span><img src="image/profile-14.jpg" alt="" /></span>
                <span><img src="image/profile-5.jpg" alt="" /></span> */}
                <p><b>Tu</b> e 226 outras pessoas viram isso!</p>
            </div>

            {data.fotos && (<div className="caption">
                <p><b>{data.name}</b> {data.text} <span className="text-sm font-light text-zinc-400 dark:text-webschool-100">#livestyle</span></p>
            </div>)}
            <div className="font-light text-sm">227 Views</div>
        </div>
    )
}