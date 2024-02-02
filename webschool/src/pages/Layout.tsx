import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Layout() {

    useEffect(()=> {
        console.log("hello");
        
    },[]);

    return (
        <div className="w-screen h-screen flex">
            <Outlet />
            <ToastContainer  />
        </div>
    )
}