import { ReactNode } from "react";

export default function TableRoot({ children, navbar }: { children: ReactNode, navbar: ReactNode }) {
    return (
        <main className="h-full flex-1 px-6 flex flex-col">

            <div className="h-full relative overflow-x-auto sm:rounded-lg">
                <table className="w-full h-full">
                    {children}
                </table>
                {navbar}
            </div>
        </main>
    )
}