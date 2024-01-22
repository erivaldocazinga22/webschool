import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout";
import NotFound404 from "./pages/404";
import Login from "./pages/login";

import RootLayout from "./pages/privete/layout";
import Feed from "./pages/privete/Feed";

import Dashboard from "./pages/privete/dashboard";
import DashVitrine from "./pages/privete/dashboard/Vitrine";
import Users from "./pages/privete/dashboard/users";
import Publications from "./pages/privete/dashboard/publication";
import Message from "./pages/privete/Message";
import Vitrine from "./pages/privete/Vitrine";

export const Routers = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        element: <RootLayout />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dashboard/users",
                element: <Users />
            },
            {
                path: "/dashboard/publication",
                element: <Publications />
            },
            {
                path: "/dashboard/vitrine",
                element: <DashVitrine />
            }
        ]
    },
    {
        path: "/dashboard/messages",
        element: <Message />,
    },
    {
        element: <RootLayout />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "/",
                element: <Feed />
            },
            {
                path: "/vitrine",
                element: <Vitrine />
            }
        ]
    },
    {
        path: "/messages",
        element: <Message />,
    }
]);