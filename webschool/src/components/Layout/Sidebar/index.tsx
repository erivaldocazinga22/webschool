import { LuBell, LuHome, LuLayoutGrid, LuMessageCircle, LuPieChart, LuPlusSquare, LuSettings, LuUsers2 } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { SidebarElements } from "./SidebarElements";
import Popup from "../../basics/Popup";
import Notification from "../../basics/Notification";
import { useSession } from "../../../contexts/session/sessionContext";
import { useEffect, useState } from "react";
import Modal from "../../basics/Modal";

export default  function Sidebar() {

    const { user } = useSession();

    const location = useLocation();

    const [active, setActive] = useState<string>("");
    useEffect(() => setActive(location.pathname), [location.pathname]);

    return (
        <aside className="z-50 w-screen h-basic px-6 md:px-0 md:w-basic md:h-screen pt-2 pb-4 flex md:flex-col items-center justify-between bg-white dark:bg-webschool-400 border-t md:border-r border-zinc-50 dark:border-webschool-300 transition-colors duration-150">
            <Link to="/" className="hidden md:flex">
                <div className={`w-14 h-14 relative flex items-center justify-center`}>
                    <img src="/logomarca.svg"  alt="logomarca webschool" className="w-12 h-12" />
                </div>
            </Link>

            <SidebarElements.Root>
                {user?.nivel === "1" ? (
                    <>
                        <SidebarElements.Link active={active} href="/dashboard" icon={LuPieChart} text="Dashboard"/>
                        <SidebarElements.Link active={active} href="/dashboard/users" icon={LuUsers2} text="Usuários"/>
                        <SidebarElements.Link active={active} href="/dashboard/publication" icon={LuPlusSquare} text="Publicações"/>
                        <SidebarElements.Link active={active} href="/dashboard/messages" icon={LuMessageCircle} text="Mensagens"/>
                        <SidebarElements.Link active={active} href="/dashboard/vitrine" icon={LuLayoutGrid} text="Vitrine"/>
                    </>
                ): (
                    <>
                        <SidebarElements.Link active={active} href="/" icon={LuHome} text="Feed"/>
                        <Popup className="top-0 left-16" element={ <SidebarElements.Item icon={LuBell}/> }>
                            <Notification />
                        </Popup>
                        <SidebarElements.Link active={active} href="/messages" icon={LuMessageCircle} text="Mensagens"/>
                        <SidebarElements.Link active={active} href="/vitrine" icon={LuLayoutGrid} text="Vitrine"/>
                    </>
                )}
            </SidebarElements.Root>

            <Modal element={
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer text-zinc-600 bg-zinc-200/70 dark:text-webschool-100 dark:bg-webschool-200 transition-colors duration-150">
                    <LuSettings size={24} strokeWidth={1.5} />
                </div>
            }>
                Definições
            </Modal>
        </aside>
    )
}