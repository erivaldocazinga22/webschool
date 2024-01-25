import { LuClipboardEdit, LuSearch, LuTrash2, LuUserPlus2 } from "react-icons/lu";
import BookMarker from "../../../components/basics/BookMarker";
import { SearchBar } from "../../../components/basics/SearchBar";
import AddNewUser from "../../../components/pages/user/AddNewUser";
import { FilterPopUp } from "../../../components/basics/FilterPopUp";
import { useEffect, useState } from "react";
import { api } from "../../../axios.config";
import { parseCookies } from "nookies";
import InputCheckboxCuston from "../../../components/basics/Form/InputCheckboxCuston";
import Button from "../../../components/basics/Form/Button";
import Avatar from "../../../components/basics/Avatar";
import { useSession } from "../../../contexts/session/sessionContext";
import FilterUserProvider from "../../../contexts/Filters/FilterUser/filterUserProvider";
import { useFilterUser } from "../../../contexts/Filters/FilterUser/filterUserContext";

export default function Users() {
    const { user: actualUser } = useSession();
    const { searchValue ,setSearchValue } = useFilterUser();

    //Criação da paginação da tabela
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { "webschool.token": token } = parseCookies();
                const { data: response } = await api.get("/dashboard/usuarios", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                const filteredUsers = response.data.filter((element) => element.Processo !== actualUser?.processo);
    
                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchUsers();
    }, [actualUser]);

    

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <div className="space-y-4">
            <BookMarker to="Dashboard" from="Usuários" />
            <div className="px-6 flex items-center justify-between">
                <FilterUserProvider>
                    <div className="flex items-center gap-2">
                        <SearchBar.Root htmlFor="Filter_Search_User">
                            <SearchBar.Icon icon={LuSearch} />
                            <SearchBar.Input 
                                onChange={({ target })=> setSearchValue(target.value)}
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
                </FilterUserProvider>
                <div>
                    <AddNewUser icon={LuUserPlus2} label="Adicionar" />
                </div>
            </div>
            <main className="h-full px-6">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-200 dark:border-webschool-300">
                                <th className="min-w-10 max-w-12">
                                    <div className="px-4 py-2 ">
                                        <InputCheckboxCuston id="all" />
                                    </div>
                                </th>
                                <th className="max-w-max px-4 py-2">Processo</th>
                                <th className="max-w-max px-4 py-2">Usuário</th>
                                <th className="max-w-max px-4 py-2">Identificação</th>
                                <th className="max-w-max px-4 py-2">Telefone</th>
                                <th className="max-w-max px-4 py-2">Sexo</th>
                                <th className="px-4 py-2">Acções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user, index) =>  (
                                <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-webschool-300/40">
                                    <td className="min-w-10 max-w-12">
                                        <div className="px-4 py-2 ">
                                            <InputCheckboxCuston id="all" />
                                        </div>
                                    </td>
                                    <td className="max-w-max px-4 py-2">{user.Processo}</td>
                                    <td className="max-w-max px-4 py-2">
                                        <div className="flex items-center justify-start gap-2 px-4 py-2">
                                            <Avatar className="w-10 h-10 cursor-default bg-zinc-200" data={{ avatar_url: user.avatar_url, name: user.name }} />
                                            <div className="flex flex-col">
                                                <span className="text-sm">{user.Nome}</span>
                                                <span className="text-xs text-zinc-600">{user.Email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="max-w-max px-4 py-2">{user.Identificacao}</td>
                                    <td className="max-w-max px-4 py-2">{`${user.Telefone.replace(/\B(?=(\d{3})+(?!\d))/g, '-')}`}</td>
                                    <td className="max-w-max px-4 py-2">{user.Sexo}</td>
                                    <td className="px-4 py-2">
                                        <div className="w-full flex items-center gap-2 justify-center">
                                            <Button className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                                <span>Editar</span>
                                                <LuClipboardEdit size={20} strokeWidth={1.5} />
                                            </Button>
                                            <Button onClick={()=> alert(user.Processo)} className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                                                <span>Excluir</span>
                                                <LuTrash2 size={20} strokeWidth={1.5} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Total de usuários <span className="font-semibold text-zinc-900 dark:text-white">{users.length}</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => paginate(currentPage - 1)}
                                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-s-lg ${
                                        currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                                    }`}
                                    >
                                        Previous
                                </a>
                            </li>
                            {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map((_, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        onClick={() => paginate(index + 1)}
                                        className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 ${
                                            currentPage === index + 1 ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                                        }`}
                                    >
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#"
                                    onClick={() => paginate(currentPage + 1)}
                                    className={`flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white dark:bg-webschool-300 border border-zinc-300 dark:border-webschool-200 rounded-e-lg ${
                                        currentPage === Math.ceil(users.length / usersPerPage) ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                                    }`}
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </main>
        </div>
    )
}