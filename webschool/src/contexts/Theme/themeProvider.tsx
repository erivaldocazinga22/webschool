import { ReactNode, useLayoutEffect, useState } from "react";
import { ThemeContext, themeMode } from "./themeContext";

export default function ThemeProvider({ children }: { children: ReactNode}) {

    const [mode, setMode] = useState<themeMode>(localStorage.theme || "light");

    useLayoutEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    const handleSetMode = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.theme = newMode;
    }

    return (
        <ThemeContext.Provider value={{mode, handleSetMode}}>
            {children}
        </ThemeContext.Provider>
    )
}