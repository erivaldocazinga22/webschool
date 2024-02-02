import { createContext, useContext } from "react";

export type themeMode = "dark" | "light";

type ThemeContextType = {
    mode: themeMode,
    handleSetMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
export const useTheme = ()=> useContext(ThemeContext);