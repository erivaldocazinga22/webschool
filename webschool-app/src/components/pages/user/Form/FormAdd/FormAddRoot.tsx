import { ReactNode } from "react";

type FormAddRootProps = {
    children: ReactNode 
}

export default function FormAddRoot({ children }: FormAddRootProps) {
    return (
        <div>
            {children}
        </div>
    )
}