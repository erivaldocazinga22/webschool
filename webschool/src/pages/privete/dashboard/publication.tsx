import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { LuCalendar, LuClipboardEdit, LuClock, LuIndent, LuPlus, LuTrash2 } from "react-icons/lu";

import BookMarker from "@/components/basics/BookMarker";
import { api } from "@/axios.config";
import { PublicationData } from "@/types";
import Modal from "@/components/basics/Modal";
import CreatePostForm from "@/components/pages/Publications/Form";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Publications() {

    //Criação da paginação da tabela
    const [publications, setPublications] = useState<PublicationData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const publicationsPerPage = 5;

    useEffect(() => {
       (async () => {
            const { "webschool.token": token } = parseCookies();
            try {
                api.defaults.headers["Authorization"] = `Bearer ${token}`;
                const { data: response } = await api.get("/publicacaos");
                
                setPublications(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    
    }, []);

      

    const indexOfLastPublication = currentPage * publicationsPerPage;
    const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
    const currentPublications: PublicationData[] = publications.slice(indexOfFirstPublication, indexOfLastPublication);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="space-y-4 flex flex-col">
            <BookMarker to="Dashboard" from="Publicações" />

            <div className="px-6">
                <div className="flex items-center gap-2">
                    <div className="mmin-w-[120px] px-4 py-2 rounded-md flex gap-2 items-center justify-between cursor-pointer bg-zinc-100 dark:bg-webschool-200">
                        <span className="text-sm text-zinc-800 dark:text-white font-light">Filtrar por data</span>
                        <LuCalendar size={20} strokeWidth={1.5}/>
                    </div>
                    <div className="mmin-w-[120px] px-4 py-2 rounded-md flex gap-2 items-center justify-between cursor-pointer bg-zinc-100 dark:bg-webschool-200">
                        <span className="text-sm text-zinc-800 dark:text-white font-light">Filtrar por Tempo</span>
                        <LuClock size={20} strokeWidth={1.5}/>
                    </div>
                    <div className="mmin-w-[120px] px-4 py-2 rounded-md flex gap-2 items-center justify-between cursor-pointer bg-zinc-100 dark:bg-webschool-200">
                        <span className="text-sm text-zinc-800 dark:text-white font-light">Filtrar pelo Indice</span>
                        <LuIndent size={20} strokeWidth={1.5}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full px-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {["Ordem", "Quem publicou", "Descrição", "Link", "Acções"].map((text, index)=> (
                                    <TableHead key={index}>{text}</TableHead>
                                ))}
                            </TableRow>

                        </TableHeader>
                        <TableBody>
                            {currentPublications.map((currentPublication) => (
                                <TableRow key={currentPublication.id}>
                                    <TableCell>{currentPublication.id}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2 items-start">
                                            <Avatar>
                                                <AvatarImage src={`${currentPublication.avatar_url}`} />
                                                <AvatarFallback>{currentPublication.name.split(" ")[0].charAt(1)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span>{currentPublication.name}</span>
                                                <span>{currentPublication.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-semibold">{currentPublication.nivel === "2" ? "Professor" : currentPublication.nivel === "1" && "Administrador"}</span>
                                        <p className="max-w-[450px] truncate text-sm text-zinc-400 dark:text-webschool-100">
                                            {currentPublication.text}
                                        </p>
                                    </TableCell>
                                    <TableCell>{currentPublication.nivel}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button onClick={()=> alert(currentPublication.id)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                            <span>Editar</span>
                                            <LuClipboardEdit size={20} strokeWidth={1.5} />
                                        </Button>
                                        <Button onClick={()=> alert(currentPublication.id)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                            <span>Excluir</span>
                                            <LuTrash2 size={20} strokeWidth={1.5} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Total de Publicações <span className="font-semibold text-zinc-900 dark:text-white">{publications.length}</span></span> 
                                </TableCell>
                                <TableCell colSpan={2} className="text-right">
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
                                        {Array.from({ length: Math.ceil(publications.length / publicationsPerPage) }).map((_, index) => (
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
                                                disabled={currentPage === Math.ceil(publications.length / publicationsPerPage) ? true : false}
                                                onClick={() => paginate(currentPage + 1)}
                                                className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-e-lg ${
                                                    currentPage === Math.ceil(publications.length / publicationsPerPage) ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                                                }`}
                                            >
                                                Próximo
                                            </button>
                                        </li>
                                    </ul>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>

            <div>
                <Modal element={
                    <div className="z-50 absolute bottom-4 right-4">
                        <button type="button" 
                            className="w-11 h-11 flex items-center gap-1 justify-center rounded-full text-white bg-webschool-first">
                            <LuPlus size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                    
                }>
                    <CreatePostForm />
                </Modal>
            </div>
        </div>
    )
}