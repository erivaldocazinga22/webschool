import { api } from "@/axios.config";
import Avatar from "@/components/basics/Avatar";
import { useSession } from "@/contexts/session/sessionContext";
import { CreatePostData, CreatePostSchema } from "@/schemas/CreatePostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";

import { LuImagePlus, LuVideo } from "react-icons/lu";

export default function CreatePost() {

    const  { user } = useSession();

    const { register, handleSubmit } = useForm<CreatePostData>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(CreatePostSchema)
    });

    const handleCreatePost = async ({ text, fotos }: CreatePostData) => {
        const { "webschool.token": token } = parseCookies();
        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        const RequestData = new FormData();

        RequestData.append("user_id", user?.id);
        RequestData.append("texto", text);
        RequestData.append("imagem", fotos[0]); //Enviando apenas 1 foto, por enquanto!
        
        /* for (let i = 0; i < fotos.length; i++) {
            ResquestData.append(`foto${i}`,fotos[i]);
        } */
            
        try {
            const { data: response } = await api.post("/publicacaos", RequestData);
            console.log(response);
                    
        } catch (error) {
            console.error("FAlha ao criar post");
           
        }
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit(handleCreatePost)} className="flex-1">
                <div className="flex-1 px-4 py-4 rounded-xl bg-zinc-200 dark:bg-webschool-300">
                    <div className="flex items-center gap-4  my-2">
                        <Avatar data={{
                            name: user?.name,
                            avatar_url: user?.avatar_url
                        }}/>
                        <div className="flex-1 h-full">
                            <input 
                                {...register("text")}
                                type="search"
                                placeholder={`Em que estás a pensar, ${user?.name.split(" ")[0][0].toUpperCase()}${user?.name.split(" ")[0].substring(1)} ?`} 
                                className="w-full h-full px-4 py-2 rounded-md placeholder:text-webschool-100 dark:placeholder:text-webschool-100 outline-none bg-zinc-200 dark:bg-webschool-400"
                            />
                        </div>
                    </div>
                    <div className="px-2 my-2">
                        <span className="block w-full h-[1px] bg-webschool-200"></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 px-4 py-2 max-w-full w-max rounded-md flex items-center justify-center gap-2 cursor-pointer dark:hover:bg-webschool-200">
                            <LuVideo size={28} strokeWidth={1.5} className="text-red-500" />
                            <span className="dark:text-zinc-200">Vídeo em direto</span>
                        </div>
                        <label htmlFor="listFotos" className="flex-1 px-4 py-2 max-w-full w-max rounded-md flex items-center justify-center gap-2 cursor-pointer dark:hover:bg-webschool-200">
                            <LuImagePlus size={24} strokeWidth={1.5} className="text-green-500" />
                            <span className="dark:text-zinc-200">Foto/Vídeo</span>
                            <input 
                                {...register("fotos")}
                                id="listFotos" 
                                multiple
                                type="file" 
                                className="sr-only"
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}