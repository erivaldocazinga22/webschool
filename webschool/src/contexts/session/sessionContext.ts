import { createContext, useContext } from "react";
import type { UserData } from "@/types";

type sessionValueContext = {
    user: UserData | null
}

export const sessionContext = createContext({} as sessionValueContext);
export const useSession = ()=> useContext(sessionContext);