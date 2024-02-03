import { LuBell, LuSearch } from "react-icons/lu";
import { useSession } from "../../../contexts/session/sessionContext";
import ToggleDarkMode from "../../basics/ToggleDarkMode";
import ProfilePopup from "./ProfilePopup";
import Popup from "../../basics/Popup";
import Notification from "../../basics/Notification";
import { SearchBar } from "../../basics/SearchBar";

export default function Header() {

    const { user } = useSession();

    return (
        <header className="h-basic min-h-basic px-6 flex items-center justify-between">
            <div>
                {user?.nivel === "1" ? (
                    <h1 className="font-medium text-2xl">Dashboard</h1>
                ): (
                    <SearchBar.Root className="">
                        <SearchBar.Icon icon={LuSearch}/>
                        <SearchBar.Input className="hidden xl:flex" placeholder="Pesquisar no feed"/>
                    </SearchBar.Root>
                )}
            </div>
                
            <div className="flex items-center gap-2">
                <ToggleDarkMode />
                {user?.nivel === "1" && (
                    <Popup element={
                        <div className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer bg-zinc-300/80 dark:bg-webschool-200 dark:hover:bg-webschool-100/20 transition-colors duration-150">
                            <LuBell size={20} strokeWidth={1.5} />
                        </div>
                    } className=" top-14 right-0" >
                        <Notification />
                    </Popup>
                )}
                <ProfilePopup /> 
            </div>
        </header>
    )
}