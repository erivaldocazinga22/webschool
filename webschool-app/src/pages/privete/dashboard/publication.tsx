import { LuCalendar, LuClock, LuIndent, LuPlus } from "react-icons/lu";
import Modal from "../../../components/basics/Modal";
import BookMarker from "../../../components/basics/BookMarker";
import CreatePostForm from "../../../components/pages/Publications/Form";
import TableList from "../../../components/basics/TableList";

export default function Publications() {
    return (
        <div className="space-y-4">
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

            <div className="px-6">
                <TableList typeList="publication"
                    dataHead={["Indice", "Quem publicou", "Descrição", "Link"]} 
                    dataBody={[{
                        id: 1,
                        email: "erivaldo@azinga.com",
                        name: "Erivaldo Cazinga",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        link: "http://localhost:5173/dashboard/publication/1"
                    }, {
                        id: 2,
                        email: "joseph@luis.com",
                        name: "Joseph Luis",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        link: "http://localhost:5173/dashboard/publication/2"
                    }, {
                        id: 3,
                        email: "joão@dossantos.com",
                        name: "João dos Santos",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        link: "http://localhost:5173/dashboard/publication/3"
                    }]} 
                />
            </div>

            <div>
                <Modal element={
                    <div className="absolute bottom-4 right-4">
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