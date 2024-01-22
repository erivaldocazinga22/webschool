import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { LuLoader2, LuLock } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../axios.config";
import { LoginFormData, LoginSchema } from "../schemas/LoginSchema";


export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }} = useForm<LoginFormData>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(LoginSchema)
    });

    async function handleLogin({ email, password }: LoginFormData) {
        try {
            setLoading(true);
            const { data: response } = await api.post("/login", { email, password });
            
            setCookie(undefined, "webschool.token", response.token, {
                maxAge: 60 * 60 * 24 * 1, //1 day
                path: "/",
                sameSite: "strict",
                secure: true
            });
        
            navigate("/", { replace: true }); 
        } 
        catch (error) { 
            toast.error("Falha no login") 
        } 
        finally { setLoading(false) }
    }


    /* useEffect(() => {
        const handleAuthenticated = async () => {
            const { "webschool.token": token } = parseCookies();

            !token && navigate("/login", { replace: true });
            navigate("/", { replace: true })
        }; 
        handleAuthenticated();
    }, [navigate]); */


    return (
        <div className="w-full h-full flex bg-emerald-400">
            <div className="lg:w-1/2 hidden h-full flex-1 lg:flex items-center justify-center bg-webschool-first bg-left-top bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            
            </div>
            <div className="relative lg:w-1/2 h-full flex-1 flex items-center justify-center bg-white">
                <div className="w-full space-y-10 px-6 lg:px-4">
                    <header className="w-full px-6 flex items-center justify-between absolute top-6 left-0">
                        <div className="flex items-center gap-2 justify-center">
                            <img 
                                src="/logomarca.svg" 
                                alt="Webschool Logo" 
                                className="w-12 h-12"
                            />
                            <span className="text-xl font-medium leading-9 tracking-tight">Webschool</span>
                        </div>
                    </header>

                    <div>
                        <div>
                            <p className="text-center text-sm leading-9 tracking-tight text-zinc-500">Welcome</p>
                            <h1 className="text-center text-3xl font-medium leading-9 tracking-tight">Sign in now</h1>
                        </div> 
                    </div>

                    <main className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="w-full space-y-2" onSubmit={handleSubmit(handleLogin)}>
                            <div className="flex flex-col justify-start">
                                <label htmlFor="email_address" className="block text-sm font-medium leading-6 text-zinc-500">
                                    Email Address
                                </label>
                                <input 
                                    id="email_address"
                                    {...register("email")} 
                                    type="email"
                                    className={twMerge("block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all duration-150", `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}  
                                />
                                <div className="h-6 ">
                                    {errors?.email && <p className="text-sm text-red-500">{errors?.email.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col justify-start">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-500">
                                    Password
                                </label>
                                <input 
                                    id="password" 
                                    {...register("password")} 
                                    type="password"
                                    className={twMerge("block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none transition-all duration-150", `${errors?.password && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                                />
                                <div className="h-6 ">
                                    {errors?.password && <p className="text-sm text-red-500">{errors?.password.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <input 
                                        id="rememberMe"
                                        type="checkbox" 
                                        className="bg-webschool-first"/>
                                    <label htmlFor="rememberMe" className="cursor-pointer">Remember me</label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/reset" className=" text-webschool-first hover:text-blue-600">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="relative group flex w-full justify-center rounded-md font-normal bg-webschool-first px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-webschool-first focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webschool-first transition-all duration-150">
                                    <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                        <div className="w-7 h-7 rounded-full hidden items-center justify-center bg-zinc-100/10 group-hover:flex">
                                            <LuLock size={16} strokeWidth={1.2} className="text-zinc-300"/>
                                        </div>
                                    </div>
                                    {loading ? (
                                        <div className="flex items-center">
                                            <LuLoader2 size={22} className="animate-spin" />
                                            <span>loading...</span>
                                        </div>
                                    ): (<span>Sign in</span>)}
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}