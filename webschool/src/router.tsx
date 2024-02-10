import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import NotFound404 from "@/pages/404";

import RootLayout from "@/pages/privete/Layout";
import Feed from "@/pages/privete/Feed";
import Message from "./pages/privete/Message";
import Vitrine from "./pages/privete/Vitrine";

import Dashboard from "./pages/privete/dashboard";
import DashVitrine from "./pages/privete/dashboard/Vitrine";
import Users from "./pages/privete/dashboard/users";
import Publications from "./pages/privete/dashboard/publication";
import DashMessage from "./pages/privete/dashboard/Message";
import Profile from "./pages/privete/Profile";

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
            },
            {
                path: "/dashboard/messages",
                element: <DashMessage />,
            },
        ]
    },
    {
        element: <RootLayout />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "/",
                element: <Feed />,
                loader: ({ request }) =>
                fetch("http://127.0.0.1:8000/api/publicacaos", {
                  signal: request.signal,
                }),
            },
            {
                path: "/vitrine",
                element: <Vitrine />
            },
            {
                path: "/messages",
                element: <Message />,
            },
            {
                path: "/profile",
                element: <Profile />,
            }
        ]
    },
]);