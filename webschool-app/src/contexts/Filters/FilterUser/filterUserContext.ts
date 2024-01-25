import { createContext, useContext } from "react";

type filterUserValueContext = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const filterUserContext = createContext({} as filterUserValueContext);
export const useFilterUser = ()=> useContext(filterUserContext);