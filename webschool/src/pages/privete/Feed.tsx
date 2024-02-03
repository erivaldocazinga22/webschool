import { api } from "@/axios.config";
import Post from "@/components/pages/Feed/Post";
import CreatePost from "@/components/pages/Feed/Post/CreatePost";
import { PublicationData } from "@/types";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Feed() {

    const [publications, setPublications] = useState<PublicationData[]>([]);

    useEffect(() => {
        (async () => {
             const { "webschool.token": token } = parseCookies();
             try {
                 api.defaults.headers["Authorization"] = `Bearer ${token}`;
                 const { data: response } = await api.get("/publicacaos");
                 setPublications(response.data.reverse());
             } catch (error) {
                 console.error("Error fetching users:", error);
             }
         })();
     
     }, []);

    return (
        <div className="flex">
            <div className="h-[calc(89vh)] flex-1 flex flex-col gap-4 px-3 md:px-6 pb-4 overflow-y-scroll">
                <CreatePost />

                <main className="flex flex-col gap-4">
                    {publications.map((publication, index)=> (
                        <Post key={index} data={publication} />
                    ))}
                </main>
            </div>
            <div className="w-1/4 pr-1 hidden lg:flex">
                <aside className="h-full w-full p-4 rounded-3xl bg-webschool-300">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-medium">Social</h2>
                        <Link to="/messages" id="icon-message-max">
                            <LuMessageCircle />
                        </Link>
                    </div>
                    <div className="search-messages">
                        <label htmlFor="search-message-chat"><i className="fa-solid fa-search"></i></label>
                        <input type="search" id="search-message-chat" placeholder="Pesquisa uma conversa"/>
                    </div>
                <div>

                        <div className="on-message">
                            <legend>
                                <h2>Mensagens</h2>
                            </legend>
                            <main>
                               
                            <div className="message">
                                <div className="profile-photo">
                                    <img src="image/profile-17.jpg" alt=""/>
                                </div>
                                <div className="message-body">
                                    <h4>TI12C PT</h4>
                                    <p className="text-muted">Grupo, os meu trabalhos</p>
                                </div>
                            </div>

                            
                            </main>
                            <section className="fastMessage">
                                <div className="selectFastMassage">
                                </div>
                                <form action="#" method="post">
                                    <input type="text" placeholder="Digite mensagem"/>
                                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                </form>
                            </section>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}