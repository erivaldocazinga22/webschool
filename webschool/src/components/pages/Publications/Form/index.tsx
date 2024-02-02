import { LuImage, LuMoreHorizontal, LuSmile, LuX } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Popup from "@/components/basics/Popup";
import Avatar from "@/components/basics/Avatar";
import Button from "@/components/basics/Form/Button";
import { useSession } from "@/contexts/session/sessionContext";
import { CreatePostData, CreatePostSchema } from "@/schemas/CreatePostSchema";
import { useTheme } from "@/contexts/Theme/themeContext";
import { api } from "@/axios.config";
import { parseCookies } from "nookies";

export default function CreatePostForm() {
    const { user } = useSession();
    const { mode } = useTheme();

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePostData>({
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
        <div className="w-full h-full p-6 flex-1 flex flex-col">
            <header className="flex items-center justify-between mb-4">
                <h1 className="font-medium text-lg">Create Post</h1>
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    <LuX size={20} strokeWidth={1.5} />
                </div>
            </header>
            <main className="h-full flex-1">
                <form onSubmit={handleSubmit(handleCreatePost)} className="h-full flex flex-1 flex-col gap-4">
                    <div className="flex-1 space-y-3">
                        <div className="flex items-start gap-2">
                            <Avatar data={{ avatar_url: user?.avatar_url, name: user?.name}}/>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium capitalize">{user?.name}</span>
                                <span className="text-xs text-gray-500">$ {user?.email}</span>
                            </div>
                        </div>
                        <textarea 
                            {...register("text")}
                            cols={30} 
                            rows={10}
                            placeholder={`Em que estás a pensar, ${user?.name.split(" ")[0][0].toUpperCase()}${user?.name.split(" ")[0].substring(1)} ?`} 
                            className="w-full px-4 py-2 rounded-md placeholder:text-webschool-100 dark:placeholder:text-webschool-100 outline-none bg-zinc-200 dark:bg-webschool-300"
                        />
                        <div className="w-full rounded-md px-4 py-2 flex items-center gap-2 justify-between border border-zinc-300 dark:border-webschool-200">
                            <div>
                                <h1 className="text-sm cursor-pointer font-medium">Adicione à tua Publicação</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="post_dashboard_form">
                                    <input 
                                        {...register("fotos")}
                                        multiple 
                                        type="file" 
                                        id="post_dashboard_form" 
                                        className="sr-only" 
                                    />
                                    <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-webschool-200/50">
                                        <LuImage size={20} strokeWidth={1.5} className="text-green-400" />
                                    </div>
                                </label>
                                <Popup element={
                                    <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-webschool-200/50">
                                        <LuSmile size={20} strokeWidth={1.5} className="text-yellow-400" />
                                    </div>
                                } className="-top-14">
                                    <div className={`
                                        relative min-w-max px-4 py-2 rounded-md bg-white dark:bg-webschool-200
                                        shadow-lg
                                    `}>
                                        Emoji list
                                        <span className="absolute -bottom-3 left-4 block">
                                            <svg aria-hidden="true" height="12" viewBox="0 0 25 12" 
                                                width="25" className="x10l6tqk x11k2h6o xu8u0ou" 
                                                fill={mode === "dark" ? "#252525" : "#fff"} 
                                                style={{transform: "scale(1, 1) translate(0px, 0px)"}}>
                                                <path d="M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </Popup>
                                <div className="w-10 h-10 rounded-full cursor-pointer text-webschool-100 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-webschool-200/50">
                                    <LuMoreHorizontal size={20} strokeWidth={1.5} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        
                        <Button disabled={errors.root ? true : false} type="submit" 
                            className={`min-w-[200px] w-full flex items-center justify-center disabled:bg-webschool-200 disabled:text-webschool-100 disabled:cursor-not-allowed`}>
                            Plublicar
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    )
}