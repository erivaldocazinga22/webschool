import { Link } from "react-router-dom";
import { destroyCookie } from "nookies";
import { LuLogOut } from "react-icons/lu";

import Popup from "@/components/basics/Popup";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "@/contexts/session/sessionContext";
import { useAvatarSiglas } from "@/hooks/useAvatarSiglas";

export default function ProfilePopup() {

    const { user } = useSession();
    const siglas = useAvatarSiglas(user?.name);

    const handleLogout = ()=> {
        destroyCookie(undefined, "webschool.token");
        window.location.reload();
    }

    if(user?.nivel !== "1") {
        return (
            <Link to="/profile">
                <Avatar className="rounded-2xl w-11 h-11">
                    <AvatarImage src={`${user?.avatar_url}`} />
                    <AvatarFallback>{siglas}</AvatarFallback>
                </Avatar>
            </Link>
        );
    }

    return (
        <div>
            <Popup className="top-16 right-0" element={
                <Avatar className="w-11 h-11">
                    <AvatarImage src={`${user?.avatar_url}`} />
                    <AvatarFallback>{siglas}</AvatarFallback>
                </Avatar>
            }>
                <div className="w-[200px] rounded-md overflow-hidden shadow dark:drop-shadow-md dark:shadow-webschool-300">
                    <div className="h-14 bg-gradient-to-t to-blue-500 from-blue-400">
                        <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
                        <Avatar className="rounded-2xl w-11 h-11">
                            <AvatarImage src={`${user?.avatar_url}`} />
                            <AvatarFallback>{siglas}</AvatarFallback>
                        </Avatar>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-4 pt-10 bg-zinc-50 dark:bg-webschool-300">
                        <span className="font-medium text-zinc-900 dark:text-white">{user?.name}</span>
                        <span className="text-sm dark:text-webschool-100">{user?.email}</span>
                    </div>
                    <div className="border-t border-zinc-300/80 dark:border-webschool-200 bg-zinc-50 dark:bg-webschool-300">
                        <button onClick={handleLogout} className="w-full flex-1 px-4 py-2 flex items-center gap-1 justify-center bg-zinc-50 dark:bg-webschool-300 hover:bg-zinc-200 dark:hover:bg-webschool-200/30 text-zinc-900 dark:text-zinc-50">
                            <LuLogOut size={20} strokeWidth={1.5}/>
                            <span>Terminar Sessão</span>
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    );
}