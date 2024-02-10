import { LuClipboardEdit, LuSearch, LuTrash2, LuUserPlus2 } from "react-icons/lu";
import BookMarker from "@/components/basics/BookMarker";
import { SearchBar } from "@/components/basics/SearchBar";
import { FilterPopUp } from "@/components/basics/FilterPopUp";
import { useEffect, useState } from "react";
import { api } from "@/axios.config";
import { parseCookies } from "nookies";
import { useSession } from "@/contexts/session/sessionContext";
import { UserListData } from "@/types";
import AddNewUser from "@/components/pages/user/AddNewUser";
import { Table, TableBody, TableHead, TableRow, TableCell, TableFooter, TableHeader, } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "@/components/basics/AlertDialogDemo";


export default function Users() {
    const { user: loggedUser } = useSession();

    //Criação da paginação da tabela
    const [users, setUsers] = useState<UserListData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
       (async () => {
        const { "webschool.token": token } = parseCookies();
            try {
                api.defaults.headers["Authorization"] = `Bearer ${token}`;
                const { data: response } = await api.get("/dashboard/usuarios");
                const filteredUsers = response.data.filter((element: UserListData) => element.processo !== loggedUser?.processo);

                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    }, [loggedUser]);

      

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers: UserListData[] = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="space-y-4">
           

            <BookMarker to="Dashboard" from="Usuários" />
            <div className="px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SearchBar.Root htmlFor="Filter_Search_User">
                        <SearchBar.Icon icon={LuSearch} />
                        <SearchBar.Input
                            id="Filter_Search_User" 
                            placeholder="Pesquisar por um usuário..."
                        />
                    </SearchBar.Root>

                    <FilterPopUp.Root element={
                        <FilterPopUp.Element text="Filtrar por Curso" />
                    }>
                        <FilterPopUp.Modal type="Curso" />
                    </FilterPopUp.Root>

                    <FilterPopUp.Root element={
                        <FilterPopUp.Element text="Filtrar por Classe" />
                    }>
                        <FilterPopUp.Modal type="Classe" />
                    </FilterPopUp.Root>

                    <FilterPopUp.Root element={
                        <FilterPopUp.Element text="Filtrar por Turma" />
                    }>
                        <FilterPopUp.Modal type="Turma" />
                    </FilterPopUp.Root>
                </div>
                
                <AddNewUser 
                    icon={LuUserPlus2} 
                    label="Adicionar" 
                />
            </div>
            <div className="w-full px-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {["Processo", "Usuário", "Identificação", "Telefone", "Sexo", "Acções"].map((text, index)=> (
                                <TableHead key={index}>{text}</TableHead>
                            ))}
                        </TableRow>

                    </TableHeader>
                    <TableBody>
                        {currentUsers.map((currentUser) => (
                            <TableRow key={currentUser.id}>
                                <TableCell>{currentUser.processo}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2 items-start">
                                        <Avatar>
                                            <AvatarImage src={`${currentUser.avatar_url}`} />
                                            <AvatarFallback>{currentUser.name.split(" ")[0].charAt(1)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span>{currentUser.name}</span>
                                            <span>{currentUser.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{currentUser.identificacao}</TableCell>
                                <TableCell>{currentUser.telefone}</TableCell>
                                <TableCell className="text-right">{currentUser.sexo}</TableCell>
                                <TableCell className="flex gap-2">
                                    <AlertDialogDemo>
                                        <Button className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                            <span>Editar</span>
                                            <LuClipboardEdit size={20} strokeWidth={1.5} />
                                        </Button>
                                    </AlertDialogDemo>
                                    <AlertDialogDemo>
                                        <Button className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                            <span>Excluir</span>
                                            <LuTrash2 size={20} strokeWidth={1.5} />
                                        </Button>
                                    </AlertDialogDemo>
                                </TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>
                                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Total de Usuários <span className="font-semibold text-zinc-900 dark:text-white">{users.length}</span></span> 
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
                                    {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map((_, index) => (
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
                                            disabled={currentPage === Math.ceil(users.length / usersPerPage) ? true : false}
                                            onClick={() => paginate(currentPage + 1)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-e-lg ${
                                                currentPage === Math.ceil(users.length / usersPerPage) ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
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
    )
}