import { LuSearch, LuUserPlus2 } from "react-icons/lu";
import BookMarker from "@/components/basics/BookMarker";
import { SearchBar } from "@/components/basics/SearchBar";
import { FilterPopUp } from "@/components/basics/FilterPopUp";
import { useEffect, useState } from "react";
import { api } from "@/axios.config";
import { parseCookies } from "nookies";
import { useSession } from "@/contexts/session/sessionContext";
import { UserData } from "@/types";
import Table from "@/components/basics/Table";
import AddNewUser from "@/components/pages/user/AddNewUser";


export default function Users() {
    const { user: actualUser } = useSession();

    //Criação da paginação da tabela
    const [users, setUsers] = useState<UserData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
       (async () => {
        const { "webschool.token": token } = parseCookies();
            try {
                api.defaults.headers["Authorization"] = `Bearer ${token}`;
                const { data: response } = await api.get("/dashboard/usuarios");

                const filteredUsers = response.filter((element: UserData) => element);

                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    
    }, [actualUser]);

      

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers: UserData[] = users.slice(indexOfFirstUser, indexOfLastUser);

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

            <Table.Root navbar={
                <Table.PageNavBar 
                    PerPage={usersPerPage}
                    paginate={paginate} 
                    currentPage={currentPage} 
                    datas={users} 
                />
            }>
                <Table.thead headers={
                    ["Processo", "Usuário", "Identificação", "Telefone", "Sexo", "Acções"]
                } />
                <Table.tbody>
                    <Table.RowUser datas={currentUsers} />
                </Table.tbody>
            </Table.Root>
            
        </div>
    )
}