import { LuCalendar, LuClock, LuIndent } from "react-icons/lu";
import BookMarker from "@/components/basics/BookMarker";
import Table from "@/components/basics/Table";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/axios.config";
import { PublicationData } from "@/types";

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
                <Table.Root navbar={
                    <Table.PageNavBar 
                        PerPage={publicationsPerPage}
                        paginate={paginate} 
                        currentPage={currentPage} 
                        datas={publications} 
                    />
                }>
                    <Table.thead headers={
                        ["Ordem", "Quem publicou", "Descrição", "Link", "Acções"]
                    } />
                    <Table.tbody>
                        <Table.RowPublication datas={currentPublications} />
                    </Table.tbody>
                </Table.Root>
            </div>
        </div>
    )
}