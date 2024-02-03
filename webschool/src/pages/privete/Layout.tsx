import { Outlet, useLocation } from "react-router-dom";
import SessionProvider from "@/contexts/session/sessionProvider";
import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import { useEffect, useState } from "react";

export default function RootLayout() {

    const location = useLocation();

    const [active, setActive] = useState<string>("");
    useEffect(() => setActive(location.pathname), [location.pathname]);

    return (
        <SessionProvider>
            <div className="w-screen min-h-screen h-screen flex md:flex-row flex-col-reverse text-zinc-900 bg-white dark:text-white dark:bg-webschool-400 overflow-hidden transition-colors duration-150">
                {active !== "/dashboard/messages" && ( 
                    <Sidebar />
                )}
                <section className="flex-1 w-full h-[calc(100vh-70px)] md:h-screen"> 
                    {active !== "/dashboard/messages" && (
                        <Header />  
                    )}
                    <Outlet /> 
                </section>
            </div>
        </SessionProvider>
    )
}