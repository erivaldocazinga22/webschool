import { ReactNode } from "react";

export default function DataGridBody({ children }: { children: ReactNode }) {
    return (
        <tbody className="flex-1">
            {children}
        </tbody>
    )
}