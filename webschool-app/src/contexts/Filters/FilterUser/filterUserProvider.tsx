import { useState } from "react";
import { filterUserContext } from "./filterUserContext";

export default function FilterUserProvider({ children }: { children: React.ReactNode }) {
  
  const [searchValue, setSearchValue] = useState("");

  return (
    <filterUserContext.Provider value={{ searchValue, setSearchValue }}>
        {children}
    </filterUserContext.Provider>
  )
}