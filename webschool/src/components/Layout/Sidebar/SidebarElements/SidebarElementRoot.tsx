import { ReactNode } from "react";

export default function SidebarElementRoot({ children }: { children: ReactNode}) {
    return (
        <div className="w-full flex md:flex-col gap-1 items-center justify-between md:justify-center">
            {children}
        </div>
    )
}