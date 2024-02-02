import { Outlet } from "react-router-dom";
import SessionProvider from "@/contexts/session/sessionProvider";
import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";

export default function RootLayout() {

    return (
        <SessionProvider>
            <div className="w-screen min-h-screen h-screen flex text-zinc-900 bg-white dark:text-white dark:bg-webschool-400 overflow-hidden transition-colors duration-150">
                <Sidebar />
                <section className="flex-1 w-full h-screen"> 
                    <Header />  
                    <Outlet /> 
                </section>
            </div>
        </SessionProvider>
    )
}