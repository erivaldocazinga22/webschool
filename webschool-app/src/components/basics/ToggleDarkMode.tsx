import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../contexts/Theme/themeContext";

export default function ToggleDarkMode() {
    const { mode, handleSetMode } = useTheme();

    /* function handleDarkMode() {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.theme = newMode;
    } */

    return (
        <button 
            onClick={handleSetMode} 
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-200/90 hover:bg-zinc-300/80 dark:bg-webschool-200 dark:hover:bg-webschool-100/20 transition-colors duration-150"
        >
           {mode === "dark" ? <LuMoon size={20} /> : <LuSun size={20} />}
        </button>
    );
}