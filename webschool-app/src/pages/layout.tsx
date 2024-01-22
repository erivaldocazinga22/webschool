import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Layout() {
    return (
        <div className="w-screen h-screen flex">
            
            <Outlet />
            <ToastContainer  />
        </div>
    )
}