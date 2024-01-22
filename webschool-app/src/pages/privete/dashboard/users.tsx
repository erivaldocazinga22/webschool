import { LuSearch, LuUserPlus2 } from "react-icons/lu";
import BookMarker from "../../../components/basics/BookMarker";
import { SearchBar } from "../../../components/basics/SearchBar";
import TableList from "../../../components/basics/TableList";
import AddNewUser from "../../../components/pages/user/AddNewUser";
import { FilterPopUp } from "../../../components/basics/FilterPopUp";
import { useEffect, useState } from "react";
import { api } from "../../../axios.config";
import { parseCookies } from "nookies";

export default function Users() {

    

    const [users,setUsers] = useState([]);

    useEffect(()=> {
        const handler = async ()=>{
            const { "webschool.token": token } = parseCookies();
            const { data: response } = await api.get("/dashboard/usuarios", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response.data);
            
            setUsers(response.data);
        }
            handler()

    },[])

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
                <div>
                    <AddNewUser icon={LuUserPlus2} label="Adicionar" />
                </div>
            </div>
            <main className="h-full px-6">
                <TableList typeList="user"
                    dataHead={["Processo", "Usuário", "Identificação","Telefone", "Sexo"]} 
                    dataBody={users} />
            </main>
        </div>
    )
}