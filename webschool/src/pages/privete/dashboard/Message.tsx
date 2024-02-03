import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { LuArrowLeft, LuListFilter, LuSearch, LuSmile } from "react-icons/lu";

import Popup from "@/components/basics/Popup";
import Avatar from "@/components/basics/Avatar";
import { SearchBar } from "@/components/basics/SearchBar";
import { useSession } from "@/contexts/session/sessionContext";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/axios.config";


type ChatDataType = {
    id: number,
    nome: string,
    curso: string,
    classe: string,
    turma: string,
    avatar_url?: string | null,
    cod_turma: string,
    url_arquivo: string | null,
    created_at: Date | null,
    updated_at: Date | null
}

export default function DashMessage() {

    const { user } = useSession();
    const [messages, setMessages] = useState<ChatDataType[]>([]);

    useEffect(() => {
        (async () => {
         const { "webschool.token": token } = parseCookies();
             try {
                 api.defaults.headers["Authorization"] = `Bearer ${token}`;
                 const { data: response } = await api.get("/chats");
 
                 setMessages(response);
             } catch (error) {
                 console.error("Error fetching users:", error);
             }
         })();
     
     }, []);

    return (
        <div className="w-full min-h-screen h-screen flex text-zinc-900 bg-white dark:text-white dark:bg-webschool-400 transition-colors duration-150">
            <section className="min-w-[350px] max-w-[350px] hidden sm:block  border border-zinc-100 dark:border-webschool-300">
                <header className="px-4 py-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 ">
                            <Link to={"/dashboard"}>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <LuArrowLeft size={20} strokeWidth={1.5} />
                                </div>
                            </Link>
                            <div className="flex items-center gap-2">
                                <div>
                                    <Avatar 
                                        data={{
                                            name: user?.name,
                                            avatar_url: user?.avatar_url
                                        }} 
                                        className="w-10 h-10 cursor-default" 
                                    />
                                </div>
                                <div>
                                    <span>{user?.name}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Popup className="top-10 left-0" element={
                                <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-white dark:hover:bg-webschool-200">
                                    <LuListFilter size={20} strokeWidth={1.5} />
                                </div>
                            }>
                                <div className="min-w-[150px] w-max min-h-10 h-max px-4 py-2 rounded-md bg-zinc-200 dark:bg-webschool-200 shadow-md">

                                </div>
                            </Popup>
                        </div>
                    </div>

                    <SearchBar.Root htmlFor="search_filterMessages">
                        <SearchBar.Icon icon={LuSearch} />
                        <SearchBar.Input id="search_filterMessages" placeholder="Pesquisar ou iniciar uma nova conversa" />
                    </SearchBar.Root>

                    <div>
                        <ul className="flex items-center gap-2 justify-between">
                            <li className="min-w-[70px] w-max px-4 cursor-pointer text-zinc-400 dark:text-webschool-100">
                                Todos
                            </li>
                            <li className="min-w-[70px] w-max px-4 cursor-pointer text-zinc-400 dark:text-webschool-100">
                                Conversas
                            </li>
                            <li className="min-w-[70px] w-max px-4 cursor-pointer text-zinc-400 dark:text-webschool-100">
                                Grupos
                            </li>
                        </ul>
                        <span className={`block h-0.5 w-[80px] dark:bg-white`}></span>
                    </div>
                </header>
                <div className="h-[calc(100vh - 240px)] px-4 mt-2 divide-y-[1px] divide-zinc-200/50 dark:divide-webschool-300 space-y-1 overflow-hidden overflow-y-scroll">
                    {messages.length > 0 ? messages?.map(message => (
                        <div className="w-full min-h-30 px-2 flex items-center gap-2 rounded-md py-1 overflow-hidden cursor-pointer hover:bg-zinc-200 dark:hover:bg-webschool-300">
                            <div>
                                <Avatar data={{
                                    name: message.nome,
                                    avatar_url: message.avatar_url
                                }} />
                            </div>
                            <div>
                                <div >
                                    <span className="font-medium capitalize">{message?.nome}</span>
                                    <p className="text-sm text-zinc-400 dark:text-webschool-100 overflow-hidden whitespace-nowrap inline-block w-50">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )): "Nenhum usuário encontrado"}
                </div>
            </section>
            <section className="w-full flex flex-col relative">
                <header className="w-full h-basic px-4 py-3 flex items-center">
                    <div className="flex items-center gap-2">
                        <Avatar 
                            className="w-11 h-11 cursor-default"
                            data={{
                                name: user?.name,
                                avatar_url: user?.avatar_url
                            }}
                        />
                        <div>
                            <span className="block font-medium text-sm">{user?.name}</span>
                            <span className="block text-xs text-zinc-400 dark:text-webschool-100">a escrever...</span>
                        </div>
                    </div>
                </header>
                <main className="w-full flex-1">
                    mainChat
                </main>
                <div className="w-full h-basic px-4 py-3 flex items-center">
                    <form className="w-full h-full  ">
                        <div className="h-full flex flex-1 items-center px-4 gap-2 rounded-md">
                            <div>
                                <LuSmile size={24} strokeWidth={1.5}/>
                            </div>
                            <div className="flex-1 h-full rounded-md px-4 py-1 bg-zinc-200 dark:bg-webschool-200">
                                <input 
                                    type="text" 
                                    placeholder="Escrever mensagem"
                                    className="h-full w-full bg-transparent outline-none"
                                />
                            </div>
                            <div>
                                <button type="submit"
                                className="w-11 h-11 rounded-full flex items-center justify-center text-white bg-webschool-first">
                                    <IoSend size={20}/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}