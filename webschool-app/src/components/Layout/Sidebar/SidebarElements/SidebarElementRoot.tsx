import { ReactNode } from "react";

export default function SidebarElementRoot({ children }: { children: ReactNode}) {
    return (
        <div className="flex flex-col gap-1 items-center justify-center">
            {children}
        </div>
    )
}